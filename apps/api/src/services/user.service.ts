import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    avatar: string;
    isModerator: boolean;
    createdAt: Date;
};

export class UserService {
    async getAllUsers(): Promise<User[]> {
        try {
            const users = await prisma.user.findMany();

            return users.map((user: any) => ({
                id: user.id,
                name: user.name,
                email: user.email,
                username: user.username,
                avatar: user.avatar,
                isModerator: user.is_moderator,
                createdAt: user.created_at,
            }));
        } catch (error) {
            throw new Error('Failed to get all users');
        }
    }

    async updateUser(userId: string, updatedUser: User): Promise<void> {
        try {
            const existingUser = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!existingUser) {
                throw new Error('User not found');
            }

            await prisma.user.update({
                where: { id: userId },
                data: {
                    name: updatedUser.name,
                    email: updatedUser.email,
                    username: updatedUser.username,
                    avatar: updatedUser.avatar,
                    is_moderator: updatedUser.isModerator,
                },
            });
        } catch (error) {
            throw new Error('Failed to update user');
        }
    }

    async createUser(newUser: User): Promise<void> {
        console.log(newUser);
        try {
            await prisma.user.create({
                data: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    username: newUser.username,
                    avatar: newUser.avatar,
                    is_moderator: newUser.isModerator,
                    created_at: newUser.createdAt,
                },
            });
        } catch (error) {
            throw new Error('Failed to create user');
        }
    }
} 