const API_BASE_URL = 'http://localhost:3001/api';

interface ApiResponse<T> {
    data: T;
    error?: string;
};

interface Message {
    id: string;
    user: {
        id: string;
        name: string;
        avatar: string;
        isModerator: boolean;
    };
    content: string;
    timestamp: string;
};

async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        };

        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('API Error:', error);
        return {
            data: {} as T,
            error: error instanceof Error ? error.message : 'An unknown error occurred',
        };
    };
};

export const apiService = {
    getTeamData: async (teamId: string) => {
        return fetchApi(`/hltv/teams/${teamId}`);
    },

    getPlayerData: async (playerId: number) => {
        return fetchApi(`/hltv/players/${playerId}`);
    },

    getMessages: async () => {
        return fetchApi('/chat/messages');
    },
    postMessage: async (message: Message) => {
        return fetchApi('/chat/messages', {
            method: 'POST',
            body: JSON.stringify({ ...message }),
        });
    },
}; 