import { MoneyMovementModel } from "../../entity/money-movement";

export interface GetMoneyMovement {
  get(id: string | number, month: number, year: number): Promise<MoneyMovementModel[] | []>
}