import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Credential {
    userId: string;
    email: string;
    password: string;
}

export class CredentialService {
    async getAllCredentials(): Promise<any[]> {
        try {
            const credentials = await prisma.credentials.findMany({
                include: { User: true },
            });

            return credentials.map((cred: any) => ({
                userId: cred.user_id,
                email: cred.email,
                password: cred.password,
            }));
        } catch (error) {
            console.error('[getAllCredentials] DB Error:', error);
            throw new Error('Failed to get all credentials');
        }
    }

    async createCredential(credential: Credential): Promise<void> {
        try {
            if (!credential.userId) {
                throw new Error("Missing user_id for credential creation.");
            }

            await prisma.credentials.create({
                data: {
                    email: credential.email,
                    password: credential.password,
                    User: {
                        connect: {
                            id: credential.userId
                        }
                    }
                }
            });
        } catch (error) {
            console.error('[createCredential] DB Error:', error);
            throw new Error('Failed to create credentials');
        }
    }
} 