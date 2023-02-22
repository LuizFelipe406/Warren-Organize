import { AccountModel } from "../../../domain/entity/account";
import { GetAccount } from "../../../domain/use-cases/account/get-account";
import { GetAccountRepository } from "../../protocols/account/get-account-repository";

export class DbGetAccount implements GetAccount {
  private readonly getAccountRepository: GetAccountRepository

  constructor (getAccountRepository: GetAccountRepository) {
    this.getAccountRepository = getAccountRepository
  }

  get(email: string): Promise<AccountModel | null> {
    return this.getAccountRepository.get(email)
  }
}