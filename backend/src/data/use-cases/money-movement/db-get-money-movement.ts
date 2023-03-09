import { MoneyMovementModel } from "../../../domain/entity/money-movement";
import { GetMoneyMovement } from "../../../domain/use-cases/money-movement/get-money-movement";
import { GetMoneyMovementRepository } from "../../protocols/money-movement/get-money-movement-repository";

export default class DbGetMoneyMovement implements GetMoneyMovement {
  
  constructor(
    private readonly getMoneyMovementRepository: GetMoneyMovementRepository
  ) {}

  async get(id: string | number, month: number, year: number): Promise<MoneyMovementModel[] | []> {
    return this.getMoneyMovementRepository.get(id, month, year)
  }
  
}