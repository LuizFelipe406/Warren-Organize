import Joi from "joi"
import { Validation } from "../../../presentation/protocols/validation";

export class JoiAccountValidatorAdapter implements Validation {
  private schema: Joi.ObjectSchema

  constructor (schema: Joi.ObjectSchema) {
    this.schema = schema
  }

  validate(input: unknown): Error | undefined {
    const { error } = this.schema.validate(input)
    if (error) return new Error(error.message)
  }
  
}