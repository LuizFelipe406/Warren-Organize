import Joi from "joi";

export const schema = Joi.object({
  name: Joi.string().required(),
  amount: Joi.number().required(),
  date: Joi.date().required(),
  category: Joi.string().required()
})