import fs from 'fs';
import path from 'path';

interface Credential {
    userId: string;
    email: string;
    password: string;
}

export class CredentialService {
    private readonly credentialsFilePath: string;

    constructor() {
        this.credentialsFilePath = path.join(__dirname, '../../data/credentials.json');
        this.ensureCredentialsFileExists();
    }

    private ensureCredentialsFileExists(): void {
        const dirPath = path.dirname(this.credentialsFilePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        if (!fs.existsSync(this.credentialsFilePath)) {
            fs.writeFileSync(this.credentialsFilePath, JSON.stringify([]));
        }
    }

    async saveCredential(credential: Credential): Promise<void> {
        try {
            const credentials = await this.getAllCredentials();
            credentials.push(credential);
            fs.writeFileSync(this.credentialsFilePath, JSON.stringify(credentials, null, 2));
        } catch (error) {
            throw new Error('Failed to save credential');
        }
    }

    async getAllCredentials(): Promise<Credential[]> {
        try {
            const data = fs.readFileSync(this.credentialsFilePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            throw new Error('Failed to read credentials');
        }
    }
} 