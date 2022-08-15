import { BadRequestError, NotFoundError } from "../../lib/appError";
import UserModel from "../models/index";
import { AUser, UserLogin} from "../interfaces/UserInterfaces"
import constants from "../config/constants";
import { comparePassword, encryptData} from "../utility/dataCrypto"
const { MESSAGES } = constants


class UserServices {
   /**
     * @method addUser
     * @async
     * @param {ICreateUser} data 
     * @returns {Promise<AUser>}
     */  
  async addUser(data: AUser): Promise<AUser> {
    let newUser: any;

      const existingUser = await UserModel.findOne({where: { email: data.email }});
      if (existingUser) throw new NotFoundError(MESSAGES.USER_EXIST);
  
      newUser = await UserModel.create(data);

      // Genrate token
      const token = encryptData( {id: data.id, email: data.email, });
      console.log(token)

     let dataToSend = {
      ...newUser.dataValues,
      token
    };

    // Delete the password field before sending to the backend
    delete dataToSend.password;

    return dataToSend;
  }

  async login(data: UserLogin ){

     // Check if the user exists
     const existingUser = await UserModel.findOne({where: { email: data.email }});
     console.log(existingUser)
    if (!existingUser) throw new NotFoundError(MESSAGES.INVALID_CREDENTIALS);


    let isPasswordMatched = await comparePassword(
      data.password,
      existingUser.password
    );
    if (!isPasswordMatched) throw new BadRequestError(MESSAGES.INVALID_CREDENTIALS);

    const dataToEncrypt = {
      id: existingUser.id,
      email: existingUser.email,
    };

    const token = encryptData(
      dataToEncrypt,
    );
    const dataToSend = {
      ...existingUser,
      token,
    };

   // delete dataToSend.password;

    return dataToSend;
  }

 async getUserById (id : number){
    const user = await UserModel.findByPk(id)
    return user
 }
  
}


export default new UserServices();
