import { BadRequestError, NotFoundError } from "../../lib/appError";
import db from "../models";
const { InvitationModel} = db
import UserModel from "../models/index";
import { Invitation} from "../interfaces/InvitationInterface"
import { encryptData} from "../utility/dataCrypto"
import sendMail from "../utility/email"
import constants from "../config/constants";

const { MESSAGES, BASE_URL } = constants

class InviteService {
  async sendinviteToBuddy(data:Invitation){
    const user =  UserModel.findOne({where: { email: data.email }});
    if(!user)throw new BadRequestError("Could not find user, Please make sure the email is a valid user email")
   
    const invite = await InvitationModel.create(data);
    
         //this enables users not to use the same link twice
        const lastUpdatedTime = new Date(invite.updatedAt).getTime();
        const secret = `${invite._id}${lastUpdatedTime}`;
  
        let token = encryptData(
          { id: invite._id, email: invite.email },
          3600,
          secret,
        );
        token = `${token}__${invite._id}`;
        const acceptLink = `${BASE_URL}/invitation/${token}`;
        const declineLink = `${BASE_URL}/invitation/decline/${token}`

        sendMail(data.email, "Kwaba Saving Plan Invite", { acceptLink, declineLink})
  }

  acceptInvitation = async (data: any) => {

    // update the invite in InviteCollection
    // const newInvite = await
    const newInvite = await InvitationModel.update(
      { accepted: true },
      {where: {id : data.id }},
      { new: true },
    );
    return newInvite;
  };

  // delete invite data after decline
  declineInvitation = async (data: any) => {
   await  InvitationModel.destroy({ where : { id: data.id , email: data.email}})
    return 'Invite deleted successfully';
  };

  
  getPlanAcceptedInvites = async (planId: number) => {
    const invites = await InvitationModel.findAll({where: {id: planId}});
    return invites;
  };
}

module.exports = new InviteService();