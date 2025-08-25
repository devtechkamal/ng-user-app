import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    } | null>;
}
export {};
