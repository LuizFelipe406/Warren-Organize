import Joi from "joi";

export const schema = Joi.object({
  userId: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
  name: Joi.string().required(),
  amount: Joi.number().required(),
  date: Joi.date().required(),
  category: Joi.string().required()
})