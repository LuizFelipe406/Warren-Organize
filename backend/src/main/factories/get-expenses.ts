import DbGetMoneyMovement from "../../data/use-cases/money-movement/db-get-money-movement"
import GetExpensesSequelize from "../../infra/db/mysql/money-movement-repository/get-expense-sequelize"
import JwtValidatorAdapter from "../../infra/token/jwt-validator-adapter"
import GetMoneyMovementController from "../../presentation/controllers/get-money-movement"

export const makeGetExpensesController = () => {
  const getExpenses = new GetExpensesSequelize()
  const getMoneyMovement = new DbGetMoneyMovement(getExpenses)
  const tokenValidator = new JwtValidatorAdapter()
  const controller = new GetMoneyMovementController(tokenValidator, getMoneyMovement)

  return controller
}