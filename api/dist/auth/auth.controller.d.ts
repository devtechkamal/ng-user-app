import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
}
