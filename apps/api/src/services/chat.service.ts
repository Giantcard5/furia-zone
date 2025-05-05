import { 
    writeFileSync, 
    readFileSync, 
    existsSync 
} from 'fs';

import { 
    join 
} from 'path';

interface ChatMessage {
    id: string;
    username: string;
    message: string;
    createdAt: string;
};

interface User {
    id: string;
    name: string;
    avatar: string;
    isModerator: boolean;
};

const filePath = join(__dirname, '../../data/chat_messages.json');

const loadMessages = (): ChatMessage[] => {
    if (!existsSync(filePath)) return [];
    const data = readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const saveMessages = (messages: ChatMessage[]) => {
    writeFileSync(filePath, JSON.stringify(messages, null, 2));
};

export const createMessage = async (data: Partial<ChatMessage>) => {
    try {
        if (!data.id || !data.username || !data.message) {
            throw new Error("Missing required fields");
        }

        const messages = loadMessages();

        const msg: ChatMessage = {
            id: data.id,
            username: data.username,
            message: data.message,
            createdAt: data.createdAt ?? new Date().toISOString()
        };

        messages.push(msg);
        saveMessages(messages);

        return msg;
    } catch (err) {
        console.error("Error saving message:", err);
        throw new Error("Failed to save message");
    }
};

export const getAllMessages = async () => {
    return loadMessages();
};

export const isUserLoggedIn = async (user: User) => {
    return !!user.id;
};