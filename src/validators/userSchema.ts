import Joi from "joi";

const AddUserSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  username: Joi.string().min(3),
  email: Joi.string().lowercase().email().required(),
  password: Joi.string().min(6).required(),

});
 
const LoginUserSchema = Joi.object({
  email: Joi.string().lowercase().email().required(),
  password: Joi.string().min(6).required(),
})

export {
  AddUserSchema,
  LoginUserSchema
};
