import DbCreateMoneyMovement from "../../data/use-cases/money-movement/db-create-money-movement"
import AddRevenueSequelize from "../../infra/db/mysql/money-movement-repository/add-revenue-sequelize"
import JwtValidatorAdapter from "../../infra/token/jwt-validator-adapter"
import CreateMoneyMovementController from "../../presentation/controllers/create-money-movement"
import { JoiValidatorAdapter } from "../../utils/validators/joi/joi-validator-adapter"
import { schema } from "../../utils/validators/joi/schemas/create-money-movement-schema"

export const makeCreateRevenueController = () => {
  const revenueRepository = new AddRevenueSequelize()
  const dbCreateRevenue = new DbCreateMoneyMovement(revenueRepository)
  const tokenValidator = new JwtValidatorAdapter()
  const validator = new JoiValidatorAdapter(schema)
  const revenueController = new CreateMoneyMovementController(validator, tokenValidator, dbCreateRevenue)

  return revenueController
}