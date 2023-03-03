import { CreateMoneyMovement } from "../../domain/use-cases/money-movement/create-money-movement";
import { badRequest, created } from "../helpers/http-helpers";
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse } from "../protocols/http";
import { Validation } from "../protocols/validation";

export default class CreateMoneyMovementController implements Controller {
  private readonly validation: Validation;
  private readonly createMoneyMovement: CreateMoneyMovement;

  constructor(
    validation: Validation,
    createMoneyMovement: CreateMoneyMovement
  ) {
    this.validation = validation;
    this.createMoneyMovement = createMoneyMovement;
  }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body);
    if (error) return badRequest(error);

    const { userId, name, amount, date, category } = httpRequest.body;
    const newMoneyMovement = await this.createMoneyMovement.create({
      userId,
      name,
      amount,
      date,
      category,
    });

    return created(newMoneyMovement);
  }
}
