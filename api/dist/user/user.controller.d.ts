import { User } from '@prisma/client';
export declare class UserController {
    getMe(user: User): {
        id: number;
        email: string;
        name: string;
        password: string;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    };
    uploadFile(file: Express.Multer.File): {
        file: any;
    };
    editUser(): void;
}
