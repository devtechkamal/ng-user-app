import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { customMessages } from 'src/constants/constants';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login(dto: LoginDto) {
    // finds user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // if user does not exists throw exception
    if (!user) {
      throw new ForbiddenException(customMessages.incorrectCredentials);
    }

    // compare password
    const isPasswordMatch = await argon.verify(user.password, dto.password);

    // if password incorrect throw error
    if (!isPasswordMatch) {
      throw new ForbiddenException(customMessages.incorrectCredentials);
    }

    delete user.password;
    return { token: this.authToken(user.id, user.email), user };
  }

  async register(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);

    try {
      // save user
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: hash,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(customMessages.userExists);
        }
        throw error;
      }
    }
  }

  authToken(userId: number, email: string): string {
    const payload = { sub: userId, email: email };
    return this.jwt.sign(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });
  }
}
