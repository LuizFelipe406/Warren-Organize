import { Controller } from "../protocols/controller";
import { Validation } from "../protocols/validation";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { badRequest, goodRequest } from "../helpers/http-helpers";
import { SignInAccount } from "../../domain/use-cases/account/signin-account";

export class SignInController implements Controller {
  private readonly signInAccount: SignInAccount
  private readonly validation: Validation

  constructor (signInAccount: SignInAccount, validation: Validation) {
    this.signInAccount = signInAccount
    this.validation = validation
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) return badRequest(error)

    const { email, password } = httpRequest.body

    try {
      const token = await this.signInAccount.signIn(email, password)
      return goodRequest(token)
    } catch (error) {
      if (error instanceof Error) return badRequest(error)
      return badRequest(new Error("something went wrong"))
    }
  }
}