import { BadRequestError, NotFoundError } from "../../lib/appError";
import db from "../models";
const { SavingPlanModel} = db
import { ISavingPlan} from "../interfaces/SavingPlanInterface"
import constants from "../config/constants";
const { MESSAGES } = constants


class UserServices {
   /**
     * @method addUser
     * @async
     * @param {ISavingPlan} data 
     * @returns {Promise<ISavingPlan>}
     */  
  async createPlan(data: ISavingPlan): Promise<ISavingPlan> {

      const existingUser = await SavingPlanModel.findOne({where: { title: data.title }});
      if (existingUser) throw new NotFoundError(MESSAGES.SAVING_PLAN_EXIST);
  
      const savingPlan = await SavingPlanModel.create(data);
      return savingPlan;
  }

  async getOne(id:number ){

     // Check if the plan exists
     const existingPlan = await SavingPlanModel({where: {id}});
    if (!existingPlan) throw new NotFoundError(MESSAGES.PLAN_NOT_FOUND)

    return existingPlan;
  } 
}


export default new UserServices();
