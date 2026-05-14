import 'dotenv/config';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

//aqui é a lógica de como o jwt vai ser validado, ou seja, como o token vai ser verificado 
type JwtPayload = {
  sub: string; //sub é o id do usuário
  email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET as string,
    });
  }

  validate(payload: JwtPayload) {
    return {
        id: payload.sub,
        email: payload.email,
    };
  }
}