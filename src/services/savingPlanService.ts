import { BadRequestError, NotFoundError } from "../../lib/appError";
import db from "../models";
const { SavingPlanModel} = db
import UserModel from "../models/index";
import { ISavingPlan} from "../interfaces/SavingPlanInterface"
import constants from "../config/constants";
const { MESSAGES } = constants

class SavingPlans {
   /**
     * @method addUser
     * @async
     * @param {ISavingPlan} data 
     * @returns {Promise<ISavingPlan>}
     */  
  async createPlan(data: ISavingPlan): Promise<ISavingPlan> {

      const existingPlan = await SavingPlanModel.findOne({where: { title: data.title }});
      if (existingPlan) throw new NotFoundError(MESSAGES.SAVING_PLAN_EXIST);
  
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


export default new SavingPlans();
