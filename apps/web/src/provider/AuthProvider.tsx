'use client'

import React, { 
    createContext, 
    useState, 
    useEffect 
} from 'react';

import { 
    mockCredentials, 
    mockUsers 
} from '@/lib/mock-data';

export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    avatar: string;
    isModerator: boolean;
    createdAt: Date;
};

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, username: string, password: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('furiaUser');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (error) {
                console.error('Failed to parse saved user:', error);
                localStorage.removeItem('furiaUser');
            };
        };

        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const credential = mockCredentials.find(
            (cred) => cred.email.toLowerCase() === email.toLowerCase() && cred.password === password,
        );

        if (credential) {
            const foundUser = mockUsers.find((u) => u.id === credential.userId);
            if (foundUser) {
                setUser(foundUser);
                localStorage.setItem('furiaUser', JSON.stringify(foundUser));
                setIsLoading(false);
                return true;
            };
        };

        setIsLoading(false);
        return false;
    };

    const register = async (name: string, email: string, username: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 1000))

        const emailExists = mockCredentials.some((cred) => cred.email.toLowerCase() === email.toLowerCase());
        const usernameExists = mockUsers.some((u) => u.username.toLowerCase() === username.toLowerCase());

        if (emailExists || usernameExists) {
            setIsLoading(false);
            return false;
        };

        const newUser: User = {
            id: `user${mockUsers.length + 1}`,
            name,
            email,
            username,
            avatar: '/placeholder.svg?height=40&width=40',
            isModerator: false,
            createdAt: new Date(),
        };

        setUser(newUser);
        localStorage.setItem('furiaUser', JSON.stringify(newUser));
        setIsLoading(false);
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('furiaUser');
    };

    const value = {
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};