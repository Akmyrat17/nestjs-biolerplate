import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { SignUpDto } from './dtos/sign-up.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/services';
import { I18nService } from 'nestjs-i18n';
import { JwtPayload } from './jwt/jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private i18n: I18nService,
  ) {}
  async login(loginDto: LoginDto) {
    const { phone_number } = loginDto;
    const user = await this.usersService.findOne(phone_number);
    if (!user) {
      throw new UnauthorizedException(this.i18n.t('auth.user_not_found'));
    }
    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
      phone_number: user.phone_number,
    };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
  async signUp(signUpDto: SignUpDto) {
    const user = await this.usersService.create(signUpDto);
    const payload: JwtPayload = {
      id: user.id,
      username: user.username,
      phone_number: user.phone_number,
    };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
