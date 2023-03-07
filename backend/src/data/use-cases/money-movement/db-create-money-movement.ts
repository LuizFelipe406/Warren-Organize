import { MoneyMovementModel } from "../../../domain/entity/money-movement";
import { CreateMoneyMovement, CreateMoneyMovementModel } from "../../../domain/use-cases/money-movement/create-money-movement";
import { AddMoneyMovementRepository } from "../../protocols/money-movement/add-money-movement-repository";

export default class DbCreateMoneyMovement implements CreateMoneyMovement {
  private readonly addMoneyMovementRepo: AddMoneyMovementRepository

  constructor(addMoneyMovementRepo: AddMoneyMovementRepository) {
    this.addMoneyMovementRepo = addMoneyMovementRepo
  }

  async create(moneyMovement: CreateMoneyMovementModel): Promise<MoneyMovementModel> {
    return this.addMoneyMovementRepo.add({ ...moneyMovement })
  }
  
}