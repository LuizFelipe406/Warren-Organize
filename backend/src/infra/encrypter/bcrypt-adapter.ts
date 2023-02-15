import bcrypt from "bcryptjs"
import Encrypter from "../../data/protocols/encrypter";

export class BCryptAdapter implements Encrypter {
  encrypt(input: string): string {
    const SALT = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(input, SALT);
    return hash
  }
}