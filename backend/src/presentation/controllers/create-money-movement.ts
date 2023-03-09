import { CreateMoneyMovement } from "../../domain/use-cases/money-movement/create-money-movement";
import { badRequest, created, unauthorized } from "../helpers/http-helpers";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { TokenValidator } from "../protocols/token-validator";
import { Validation } from "../protocols/validation";

export default class CreateMoneyMovementController implements Controller {
  private readonly validation: Validation;
  private readonly createMoneyMovement: CreateMoneyMovement;
  private readonly tokenValidator: TokenValidator;

  constructor(
    validation: Validation,
    tokenValidator: TokenValidator,
    createMoneyMovement: CreateMoneyMovement
  ) {
    this.validation = validation;
    this.tokenValidator = tokenValidator;
    this.createMoneyMovement = createMoneyMovement;
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body);
    if (error) return badRequest(error);

    try {
      const userId = this.tokenValidator.validate(
        httpRequest.headers.authorization
      );
      const { name, amount, date, category, type } = httpRequest.body;
      const newMoneyMovement = await this.createMoneyMovement.create({
        userId,
        name,
        amount,
        date,
        category,
        type
      });

      return created(newMoneyMovement);
    } catch (error) {
      if (error instanceof Error) return unauthorized(error.message);
      return unauthorized("something went wrong");
    }
  }
}
