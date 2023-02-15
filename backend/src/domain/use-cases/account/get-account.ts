import { AccountModel } from "../../entity/account";

export interface GetAccount {
  get (email: string): Promise<AccountModel | undefined>
}