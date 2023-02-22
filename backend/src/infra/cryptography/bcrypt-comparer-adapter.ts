import bcrypt from "bcryptjs"
import HashComparer from "../../data/protocols/cryptography/hash-comparer";

export class BCryptComparerAdapter implements HashComparer {
  compare(string: string, hash: string): boolean {
    return bcrypt.compareSync(string, hash)
  }
  
}