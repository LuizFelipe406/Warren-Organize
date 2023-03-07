import { MoneyMovementModel } from "../../../domain/entity/money-movement";
import { CreateMoneyMovementModel } from "../../../domain/use-cases/money-movement/create-money-movement";

export interface AddMoneyMovementRepository {
  add(moneyMovement: CreateMoneyMovementModel): Promise<MoneyMovementModel>
}