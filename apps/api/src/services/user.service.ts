import { 
    writeFileSync, 
    readFileSync, 
    existsSync 
} from 'fs';

import { 
    join 
} from 'path';

interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    avatar: string;
    isModerator: boolean;
    createdAt: Date;
}

const filePath = join(__dirname, '../../data/users.json');

const loadUsers = (): User[] => {
    if (!existsSync(filePath)) return [];
    const data = readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const saveUsers = (users: User[]) => {
    writeFileSync(filePath, JSON.stringify(users, null, 2));
};

export const createUser = async (data: Partial<User>) => {
    try {
        if (!data.id || !data.name || !data.email || !data.username) {
            throw new Error("Missing required user fields");
        }

        const users = loadUsers();

        const user: User = {
            id: data.id,
            name: data.name,
            email: data.email,
            username: data.username,
            avatar: data.avatar ?? '',
            isModerator: data.isModerator ?? false,
            createdAt: data.createdAt ?? new Date()
        };

        users.push(user);
        saveUsers(users);

        return user;
    } catch (error) {
        console.error("Error saving user:", error);
        throw new Error("Failed to save user");
    }
};

export const getAllUsers = async () => {
    return loadUsers();
};

export const updateUser = async (userId: string, updatedUser: User): Promise<void> => {
    try {
        const users = loadUsers();
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        updatedUser.id = userId;
        updatedUser.createdAt = users[userIndex].createdAt;

        users[userIndex] = updatedUser;
        saveUsers(users);
    } catch (error) {
        console.error("Error updating user:", error);
        throw new Error('Failed to update user');
    }
};