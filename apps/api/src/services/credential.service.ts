import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Credential {
    userId: string;
    email: string;
    password: string;
}

export class CredentialService {
    async getAllCredentials(): Promise<Credential[]> {
        try {
            const credentials = await prisma.credentials.findMany({
                include: { User: true },
            });

            return credentials.map((cred: any) => ({
                userId: cred.userId,
                email: cred.email,
                password: cred.password,
            }));
        } catch (error) {
            throw new Error('Failed to get all credentials');
        }
    }

    async createCredential(credential: any): Promise<void> {
        console.log(credential);
        try {
            await prisma.credentials.create({
                data: {
                    user_id: credential.user_id,
                    email: credential.email,
                    password: credential.password,
                },
            });
        } catch (error) {
            throw new Error('Failed to create credentials');
        }
    }
} 