import Joi from "joi"
import { Validation } from "./validation";

export class JoiValidatorAdapter implements Validation {
  private schema: Joi.ObjectSchema

  constructor () {
    this.schema = Joi.object({
      password: Joi.string().min(6).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
      name: Joi.string().min(3).required(),
    })
  }

  validate(input: unknown): Error | undefined {
    const { error } = this.schema.validate(input)
    if (error) return new Error(error.message)
  }
  
}