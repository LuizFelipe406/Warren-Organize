import { AddMoneyMovementRepository } from "../../../../data/protocols/money-movement/add-money-movement-repository";
import { MoneyMovementModel } from "../../../../domain/entity/money-movement";
import { CreateMoneyMovementModel } from "../../../../domain/use-cases/money-movement/create-money-movement";
import Expense from "../models/Expense";

export default class AddExpenseSequelize implements AddMoneyMovementRepository {
  async add(moneyMovement: CreateMoneyMovementModel): Promise<MoneyMovementModel> {
    return Expense.create({...moneyMovement})
  }
  
}