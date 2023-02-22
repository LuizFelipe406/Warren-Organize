import { GetAccountRepository } from "../../../../data/protocols/account/get-account-repository";
import { AccountModel } from "../../../../domain/entity/account";
import Account from "../models/Account";

export class GetAccountSequelize implements GetAccountRepository {
  async get(email: string): Promise<AccountModel | null> {
    const account = await Account.findOne({ where: { email } })
    return account
  }
  
}