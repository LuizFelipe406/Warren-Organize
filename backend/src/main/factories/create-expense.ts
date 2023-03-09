import DbCreateMoneyMovement from "../../data/use-cases/money-movement/db-create-money-movement"
import AddExpenseSequelize from "../../infra/db/mysql/money-movement-repository/add-expense-sequelize"
import JwtValidatorAdapter from "../../infra/token/jwt-validator-adapter"
import CreateMoneyMovementController from "../../presentation/controllers/create-money-movement"
import { JoiValidatorAdapter } from "../../utils/validators/joi/joi-validator-adapter"
import { schema } from "../../utils/validators/joi/schemas/create-money-movement-schema"

export const makeCreateExpenseController = () => {
  const expenseRepository = new AddExpenseSequelize()
  const dbCreateExpense = new DbCreateMoneyMovement(expenseRepository)
  const tokenValidator = new JwtValidatorAdapter()
  const validator = new JoiValidatorAdapter(schema)
  const expenseController = new CreateMoneyMovementController(validator, tokenValidator, dbCreateExpense)

  return expenseController
}