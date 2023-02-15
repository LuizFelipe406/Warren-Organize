import { Controller } from "../protocols/controller";
import { Validation } from "../protocols/validation";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest, conflict, created } from "../helpers/http-helpers";
import { AddAccount } from "../../domain/use-cases/account/add-account";
import { GetAccount } from "../../domain/use-cases/account/get-account";

export class SignUpController implements Controller {
  private readonly getAccount: GetAccount
  private readonly addAccount: AddAccount
  private readonly validation: Validation

  constructor (getAccount: GetAccount, addAccount: AddAccount, validation: Validation) {
    this.getAccount = getAccount
    this.addAccount = addAccount
    this.validation = validation
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) return badRequest(error)

    const { name, email, password } = httpRequest.body

    const accountAlreadyExists = await this.getAccount.get(email)
    if (accountAlreadyExists) return conflict("Account already exists")

    const newAccount = await this.addAccount.add({ name, email, password })
    return created(newAccount)
  }
}