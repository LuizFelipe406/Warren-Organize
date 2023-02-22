import { AccountModel } from "../../../domain/entity/account";
import { AddAccountModel } from "../../../domain/use-cases/account/add-account";

export interface AddAccountRepository {
  add (account: AddAccountModel): Promise<AccountModel>
}