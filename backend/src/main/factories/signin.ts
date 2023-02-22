import { DbSignInAccount } from "../../data/use-cases/account/db-sigin-account"
import { BCryptComparerAdapter } from "../../infra/cryptography/bcrypt-comparer-adapter"
import { GetAccountSequelize } from "../../infra/db/mysql/account-repository/get-account-sequelize"
import JwtGenerateAdapter from "../../infra/token/jwt-generate-adapter"
import { SignInController } from "../../presentation/controllers/signin"
import { Controller } from "../../presentation/protocols/controller"
import { JoiValidatorAdapter } from "../../utils/validators/joi/joi-validator-adapter"
import { schema } from "../../utils/validators/joi/schemas/login-account-schema"

export const makeSignUpController = (): Controller => {
  const getAccountRepository = new GetAccountSequelize()
  const hashComparer = new BCryptComparerAdapter()
  const tokenGenerator = new JwtGenerateAdapter()

  const dbSignInAccount = new DbSignInAccount(getAccountRepository, hashComparer, tokenGenerator)

  const validation = new JoiValidatorAdapter(schema)
  const signInController = new SignInController(dbSignInAccount, validation)

  return signInController
}