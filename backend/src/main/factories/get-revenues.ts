import DbGetMoneyMovement from "../../data/use-cases/money-movement/db-get-money-movement"
import GetRevenuesSequelize from "../../infra/db/mysql/money-movement-repository/get-revenue-sequelize"
import JwtValidatorAdapter from "../../infra/token/jwt-validator-adapter"
import GetMoneyMovementController from "../../presentation/controllers/get-money-movement"

export const makeGetRevenuesController = () => {
  const getRevenues = new GetRevenuesSequelize()
  const getMoneyMovement = new DbGetMoneyMovement(getRevenues)
  const tokenValidator = new JwtValidatorAdapter()
  const controller = new GetMoneyMovementController(tokenValidator, getMoneyMovement)

  return controller
}