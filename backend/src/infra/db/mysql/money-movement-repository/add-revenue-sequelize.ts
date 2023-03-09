import { AddMoneyMovementRepository } from "../../../../data/protocols/money-movement/add-money-movement-repository";
import { MoneyMovementModel } from "../../../../domain/entity/money-movement";
import { CreateMoneyMovementModel } from "../../../../domain/use-cases/money-movement/create-money-movement";
import FixedRevenue from "../models/FixedRevenue";
import Revenue from "../models/Revenue";

export default class AddRevenueSequelize implements AddMoneyMovementRepository {
  async add(moneyMovement: CreateMoneyMovementModel): Promise<MoneyMovementModel> {
    if (moneyMovement.type === "Fixo") {
      FixedRevenue.create({
        name: moneyMovement.name,
        amount: moneyMovement.amount,
        category: moneyMovement.category,
        type: moneyMovement.type,
        userId: moneyMovement.userId
      })
    }
    return Revenue.create({...moneyMovement})
  }
}