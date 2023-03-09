import { GetMoneyMovement } from "../../domain/use-cases/money-movement/get-money-movement";
import { goodRequest, unauthorized } from "../helpers/http-helpers";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { TokenValidator } from "../protocols/token-validator";

export default class GetMoneyMovementController implements Controller {

  constructor(
    private readonly tokenValidator: TokenValidator,
    private readonly getMoneyMovement: GetMoneyMovement
    ) {}

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userId = this.tokenValidator.validate(httpRequest.headers.authorization)
      const { month, year } = httpRequest.body
      const moneyMovements = await this.getMoneyMovement.get(userId, month, year)

      return goodRequest(moneyMovements)
    } catch (error) {
      if (error instanceof Error) return unauthorized(error.message);
      return unauthorized("something went wrong");
    }
  }

}