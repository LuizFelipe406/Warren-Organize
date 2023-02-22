import { AddAccountRepository } from "../../../../data/protocols/add-account-repository";
import { AccountModel } from "../../../../domain/entity/account";
import { AddAccountModel } from "../../../../domain/use-cases/account/add-account";
import Account from "../models/Account";

export class AddAccountSequelize implements AddAccountRepository {
  async add(account: AddAccountModel): Promise<AccountModel> {
    const newAccount = await Account.create(account)
    return newAccount
  }
  
}