import jwt = require('jsonwebtoken');
import TokenGenerator from '../../data/protocols/token/token-generator';

export type JwtPayload = {
  id: number;
  email: string,
}

export default class JwtGenerateAdapter implements TokenGenerator {
  private secret = process.env.JWT_SECRET || 'jwt_secret';

  generate(body: JwtPayload): string {
    const payload = {
      id: body.id,
      email: body.email,
    };

    const token = jwt.sign(payload, this.secret);

    return token;
  }
  
}