export interface TokenValidator {
  validate(token: string | undefined): string | number
}