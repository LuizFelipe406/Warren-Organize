export default interface TokenGenerator {
  generate (body: unknown): string
}