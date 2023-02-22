import { DbAddAccount } from "../../data/use-cases/account/db-add-account";
import { DbGetAccount } from "../../data/use-cases/account/db-get-account";
import { AddAccountSequelize } from "../../infra/db/mysql/account-repository/add-account-sequelize";
import { GetAccountSequelize } from "../../infra/db/mysql/account-repository/get-account-sequelize";
import { BCryptAdapter } from "../../infra/encrypter/bcrypt-adapter";
import { SignUpController } from "../../presentation/controllers/signup";
import { Controller } from "../../presentation/protocols/controller";
import { JoiAccountValidatorAdapter } from "../../utils/validators/joi/joi-validator-adapter";
import { schema } from "../../utils/validators/joi/schemas/create-account-schema";

export const makeSignUpController = (): Controller => {
  const getAccountRepo = new GetAccountSequelize()
  const getAccount = new DbGetAccount(getAccountRepo)

  const encrypter = new BCryptAdapter()
  const addAccountRepo = new AddAccountSequelize()
  const addAccount = new DbAddAccount(addAccountRepo, encrypter)

  const validator = new JoiAccountValidatorAdapter(schema)
  const signUpController = new SignUpController(getAccount, addAccount, validator)

  return signUpController
}