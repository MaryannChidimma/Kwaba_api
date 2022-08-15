import Joi from "joi";

const CreatePlanSchema = Joi.object({
  title: Joi.string().min(3).required(),
  numberOfBuddies: Joi.number().required(),
  specifyTarget: Joi.string(),
  savingmethod: Joi.string(),
  relationshipWithBuddies: Joi.string(),
  invitedBuddies: Joi.array(),
  startDate: Joi.date().required(),
  enddate: Joi.date().required(),
  savingFrequency: Joi.string().required(),
});

export {
  CreatePlanSchema,
};
