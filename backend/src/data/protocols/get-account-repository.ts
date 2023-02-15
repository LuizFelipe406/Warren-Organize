import { AccountModel } from "../../domain/entity/account";

export interface GetAccountRepository {
  get (email: string): Promise<AccountModel | undefined>
}