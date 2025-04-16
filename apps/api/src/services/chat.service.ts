import fs from 'fs';
import path from 'path';

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
    private readonly messagesFilePath: string;

    constructor() {
        this.messagesFilePath = path.join(__dirname, '../../data/chat_messages.json');
        this.ensureMessagesFileExists();
    };

    private ensureMessagesFileExists(): void {
        const dirPath = path.dirname(this.messagesFilePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        if (!fs.existsSync(this.messagesFilePath)) {
            fs.writeFileSync(this.messagesFilePath, JSON.stringify([]));
        };
    };

    async saveMessage(message: Message): Promise<void> {
        try {
            const messages = await this.getAllMessages();
            messages.push(message);
            fs.writeFileSync(this.messagesFilePath, JSON.stringify(messages, null, 2));
        } catch (error) {
            throw new Error('Failed to save message');
        };
    };

    async getAllMessages(): Promise<Message[]> {
        try {
            const data = fs.readFileSync(this.messagesFilePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            throw new Error('Failed to read messages');
        };
    };
};