import { AccountModel } from "../../../domain/entity/account"
import { AddAccount, AddAccountModel } from "../../../domain/use-cases/account/add-account"
import { AddAccountRepository } from "../../protocols/add-account-repository"
import Encrypter from "../../protocols/encrypter"

export class DbAddAccount implements AddAccount {
  private readonly addAccountRepo: AddAccountRepository
  private readonly encrypter: Encrypter

  constructor (getAccountRepo: AddAccountRepository, encrypter: Encrypter) {
    this.addAccountRepo = getAccountRepo
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    const hashPassword = this.encrypter.encrypt(account.password)
    const newAccount = await this.addAccountRepo.add({
      name: account.name,
      email: account.email,
      password: hashPassword
    })
    return newAccount
  }
}