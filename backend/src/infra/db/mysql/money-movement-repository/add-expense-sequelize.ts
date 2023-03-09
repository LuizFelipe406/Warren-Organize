import { AddMoneyMovementRepository } from "../../../../data/protocols/money-movement/add-money-movement-repository";
import { MoneyMovementModel } from "../../../../domain/entity/money-movement";
import { CreateMoneyMovementModel } from "../../../../domain/use-cases/money-movement/create-money-movement";
import Expense from "../models/Expense";
import FixedExpense from "../models/FixedExpense";

export default class AddExpenseSequelize implements AddMoneyMovementRepository {
  async add(moneyMovement: CreateMoneyMovementModel): Promise<MoneyMovementModel> {
    if (moneyMovement.type === "Fixo") {
      FixedExpense.create({
        name: moneyMovement.name,
        amount: moneyMovement.amount,
        category: moneyMovement.category,
        type: moneyMovement.type,
        userId: moneyMovement.userId
      })
    }
    return Expense.create({...moneyMovement})
  }
  
}