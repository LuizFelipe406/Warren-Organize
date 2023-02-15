import { Controller } from "../protocols/controller";
import { Validation } from "../../utils/validators/validation";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest, created } from "../helpers/http-helpers";
import { AddAccount } from "../../domain/use-case/add-account";

export class SignUpController implements Controller {
  private readonly addAccount: AddAccount
  private readonly validation: Validation

  constructor (addAccount: AddAccount, validation: Validation) {
    this.addAccount = addAccount
    this.validation = validation
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) return badRequest(error)

    const { name, email, password } = httpRequest.body

    const newAccount = await this.addAccount.add({ name, email, password })
    return created(newAccount)
  }
}