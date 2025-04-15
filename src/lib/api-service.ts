const API_BASE_URL = 'http://localhost:3001/api/hltv';

interface ApiResponse<T> {
    data: T;
    error?: string;
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
        return fetchApi(`/teams/${teamId}`);
    },

    getLiveMatch: async () => {
        return fetchApi('/matches/live');
    },

    getUpcomingMatches: async () => {
        return fetchApi('/matches/upcoming');
    },

    getChatMessages: async (roomId: string) => {
        return fetchApi(`/chat/${roomId}/messages`);
    },

    sendChatMessage: async (roomId: string, message: string) => {
        return fetchApi(`/chat/${roomId}/messages`, {
            method: 'POST',
            body: JSON.stringify({ message }),
        });
    },

    getUserProfile: async (userId: string) => {
        return fetchApi(`/users/${userId}`);
    },
}; 