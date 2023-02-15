import { AccountModel } from "../../domain/entity/account"
import { AddAccount, AddAccountModel } from "../../domain/use-cases/account/add-account"
import { AddAccountRepository } from "../protocols/add-account-repository"

export class DbAddAccount implements AddAccount {
  private readonly addAccountRepo: AddAccountRepository

  constructor (getAccountRepo: AddAccountRepository) {
    this.addAccountRepo = getAccountRepo
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    const newAccount = await this.addAccountRepo.add(account)
    return newAccount
  }
}