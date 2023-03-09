import { MoneyMovementModel } from "../../../domain/entity/money-movement";

export interface GetMoneyMovementRepository {
  get (id: string | number, month: number, year: number): Promise<MoneyMovementModel[] | []>
}