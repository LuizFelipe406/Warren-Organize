import { SignInAccount } from "../../../domain/use-cases/account/signin-account";
import { GetAccountRepository } from "../../protocols/account/get-account-repository";
import HashComparer from "../../protocols/cryptography/hash-comparer";
import TokenGenerator from "../../protocols/token/token-generator";

export class DbSignInAccount implements SignInAccount {
  private readonly getAccountRepository: GetAccountRepository
  private readonly hashComparer: HashComparer
  private readonly tokenGenerator: TokenGenerator

  constructor (getAccountRepository: GetAccountRepository, hashComparer: HashComparer, tokenGenerator: TokenGenerator) {
    this.getAccountRepository = getAccountRepository
    this.hashComparer = hashComparer
    this.tokenGenerator = tokenGenerator

  }
  async signIn(email: string, password: string): Promise<string> {
    const account = await this.getAccountRepository.get(email)
    if (!account) throw new Error("Email or Password invalid!")

    const isPasswordCorrect = this.hashComparer.compare(password, account.password)
    if (!isPasswordCorrect) throw new Error("Email or Password invalid!")

    return this.tokenGenerator.generate({ id: account.id, email: account.email })
  }
}