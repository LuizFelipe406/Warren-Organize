import { MoneyMovementModel } from "../../entity/money-movement";

export type CreateMoneyMovementModel = Omit<MoneyMovementModel, "id">;

export interface CreateMoneyMovement {
  create(moneyMovement: CreateMoneyMovementModel): Promise<MoneyMovementModel>;
}
