import { AddMoneyMovementRepository } from "../../../../data/protocols/money-movement/add-money-movement-repository";
import { MoneyMovementModel } from "../../../../domain/entity/money-movement";
import { CreateMoneyMovementModel } from "../../../../domain/use-cases/money-movement/create-money-movement";
import Revenue from "../models/Revenue";

export default class AddRevenueSequelize implements AddMoneyMovementRepository {
  async add(moneyMovement: CreateMoneyMovementModel): Promise<MoneyMovementModel> {
    return Revenue.create({...moneyMovement})
  }
  
}