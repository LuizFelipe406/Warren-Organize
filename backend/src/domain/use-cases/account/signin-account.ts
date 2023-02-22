export interface SignInAccount {
  signIn (email: string, password: string): Promise<string>
}