import Joi from 'joi';

const inviteSchema = Joi.object({
  email: Joi.string().required(),
  savingPlan : Joi.number().required()
})

const acceptDeclineSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().lowercase().email().required(),
  country: Joi.string().min(3).required(),
  id: Joi.string().required(),
});

export {
  inviteSchema,
  acceptDeclineSchema,
};
