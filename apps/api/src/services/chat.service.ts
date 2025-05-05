import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface User {
    id: string;
    name: string;
    avatar: string;
    isModerator: boolean;
}

interface Message {
    id: string;
    user: User;
    content: string;
    timestamp: string;
}

export class ChatService {
    async saveMessage(message: any): Promise<boolean> {
        try {
            await prisma.chatMessage.create({
                data: {
                    id: message.id,
                    user_id: message.user.id,
                    content: message.content,
                    timestamp: new Date(),
                }
            })

            return true;
        } catch (error) {
            console.error('[saveMessage] DB Error:', error);
            throw new Error('Failed to save message');
        }
    }

    async getAllMessages(): Promise<Message[]> {
        try {
            const messages = await prisma.chatMessage.findMany({
                orderBy: { timestamp: 'asc' },
                include: { User: true },
            });

            return messages.map((msg: any) => ({
                id: msg.id,
                content: msg.content,
                timestamp: msg.timestamp.toISOString(),
                user: {
                    id: msg.User?.id || '',
                    name: msg.User?.name || '',
                    avatar: msg.User?.avatar || '/default-user.svg',
                    isModerator: msg.User?.is_moderator || false
                }
            }));
        } catch (error) {
            console.error('[getAllMessages] DB Error:', error);
            throw new Error('Failed to get all messages');
        }
    }

    async isUserLoggedIn(userLoggedIn: string): Promise<boolean> {
        try {
            if (userLoggedIn === '') {
                console.error('Usuário não fornecido ou sem ID');
                return false;
            }

            const user = await prisma.user.findUnique({
                where: { id: userLoggedIn },
            });

            return user !== null;
        } catch (error) {
            console.error('[isUserLoggedIn] DB Error:', error);
            throw new Error('Failed to check if user is logged in');
        }
    }
}