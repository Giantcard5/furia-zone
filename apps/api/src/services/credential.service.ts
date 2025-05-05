import { 
    writeFileSync, 
    readFileSync, 
    existsSync 
} from 'fs';

import { 
    join 
} from 'path';

interface Credential {
    userId: string;
    email: string;
    password: string;
};

const filePath = join(__dirname, '../../data/credentials.json');

const loadCredentials = (): Credential[] => {
    if (!existsSync(filePath)) return [];
    const data = readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const saveCredentials = (credentials: Credential[]) => {
    writeFileSync(filePath, JSON.stringify(credentials, null, 2));
};

export const createCredential = async (data: Partial<Credential>) => {
    try {
        if (!data.userId || !data.email || !data.password) {
            throw new Error("Missing required credential fields");
        }

        const credentials = loadCredentials();

        const credential: Credential = {
            userId: data.userId,
            email: data.email,
            password: data.password
        };

        credentials.push(credential);
        saveCredentials(credentials);

        return credential;
    } catch (err) {
        console.error("Error saving credential:", err);
        throw new Error("Failed to save credential");
    }
};

export const getAllCredentials = async () => {
    return loadCredentials();
};