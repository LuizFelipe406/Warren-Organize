import { AccountModel } from "../entity/account";

type AddAccountModel = Omit<AccountModel, "id">

export interface AddAccount {
  add (account: AddAccountModel): Promise<AccountModel>
}