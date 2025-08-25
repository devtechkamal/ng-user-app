import { AuthDto } from './dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    login(dto: LoginDto): Promise<{
        token: string;
        user: {
            id: number;
            email: string;
            name: string;
            password: string;
            role: import("@prisma/client").$Enums.Role;
            createdAt: Date;
        };
    }>;
    register(dto: AuthDto): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    } | undefined>;
    authToken(userId: number, email: string): string;
}
