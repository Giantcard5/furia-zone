import fs from 'fs';
import path from 'path';

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
    private readonly usersFilePath: string;

    constructor() {
        this.usersFilePath = path.join(__dirname, '../../data/users.json');
        this.ensureUsersFileExists();
    }

    private ensureUsersFileExists(): void {
        const dirPath = path.dirname(this.usersFilePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        if (!fs.existsSync(this.usersFilePath)) {
            fs.writeFileSync(this.usersFilePath, JSON.stringify([]));
        }
    }

    async saveUser(user: User): Promise<void> {
        try {
            const users = await this.getAllUsers();
            users.push(user);
            fs.writeFileSync(this.usersFilePath, JSON.stringify(users, null, 2));
        } catch (error) {
            throw new Error('Failed to save user');
        }
    }

    async getAllUsers(): Promise<User[]> {
        try {
            const data = fs.readFileSync(this.usersFilePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            throw new Error('Failed to read users');
        }
    }

    async updateUser(userId: string, updatedUser: User): Promise<void> {
        try {
            const users = await this.getAllUsers();
            const userIndex = users.findIndex(user => user.id === userId);
            
            if (userIndex === -1) {
                throw new Error('User not found');
            }
            
            updatedUser.id = userId;
            updatedUser.createdAt = users[userIndex].createdAt;
            
            users[userIndex] = updatedUser;
            fs.writeFileSync(this.usersFilePath, JSON.stringify(users, null, 2));
        } catch (error) {
            throw new Error('Failed to update user');
        }
    }
} 