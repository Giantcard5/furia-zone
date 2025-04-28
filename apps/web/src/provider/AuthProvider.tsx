'use client';

import React, { 
    createContext, 
    useState,
    useEffect 
} from 'react';

import { 
    apiService 
} from '@/lib/api-service';

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
                localStorage.removeItem('furiaUser');
            };
        };

        setIsLoading(false); 
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        try {            
            const credentialsResponse = await apiService.getAllCredentials();
            if (credentialsResponse.error) {
                setIsLoading(false);
                return false;
            };
            
            const credentials = credentialsResponse.data;
            const credential = credentials.find(
                (cred) => cred.email.toLowerCase() === email.toLowerCase() && cred.password === password,
            );
            if (credential) {
                const usersResponse = await apiService.getAllUsers();
                if (usersResponse.error) {
                    setIsLoading(false);
                    return false;
                };
                
                const users = usersResponse.data;                
                const foundUser = users.find((u) => u.id === credential.userId);                
                if (foundUser) {
                    setUser(foundUser);
                    localStorage.setItem('furiaUser', JSON.stringify(foundUser));

                    setIsLoading(false);
                    return true;
                };
            };

            setIsLoading(false);
            return false;
        } catch (error) {
            setIsLoading(false);
            return false;
        };
    };

    const register = async (name: string, email: string, username: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        try {
            const credentialsResponse = await apiService.getAllCredentials();
            if (credentialsResponse.error) {
                setIsLoading(false);
                return false;
            };
            
            const credentials = credentialsResponse.data;
            const emailExists = credentials.some((cred) => cred.email.toLowerCase() === email.toLowerCase());
            
            const usersResponse = await apiService.getAllUsers();
            if (usersResponse.error) {
                setIsLoading(false);
                return false;
            };
            
            const users = usersResponse.data;
            const usernameExists = users.some((u) => u.username.toLowerCase() === username.toLowerCase());
            if (emailExists || usernameExists) {
                setIsLoading(false);
                return false;
            };

            const newUser: User = {
                id: `user${users.length + 1}`,
                name,
                email,
                username,
                avatar: '/default-user.svg',
                isModerator: false,
                createdAt: new Date(),
            };
            
            const saveUserResponse = await apiService.saveUser(newUser);
            if (saveUserResponse.error) {
                console.error('Error saving user:', saveUserResponse.error);
                setIsLoading(false);
                return false;
            }
            
            const credential = { userId: newUser.id, email, password };
            const saveCredentialResponse = await apiService.saveCredential(credential);
            if (saveCredentialResponse.error) {
                setIsLoading(false);
                return false;
            };

            setUser(newUser);
            localStorage.setItem('furiaUser', JSON.stringify(newUser));

            setIsLoading(false);
            return true;
        } catch (error) {
            setIsLoading(false);
            return false;
        };
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