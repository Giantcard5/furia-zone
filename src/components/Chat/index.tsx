'use client'

import React, { 
    useState, 
    useRef, 
    useEffect 
} from 'react';

import { 
    Send, 
    Smile 
} from 'lucide-react';

import {
    ChatMessage
} from '@/components/ChatMessage';

import {
    apiService
} from '@/lib/api-service';

import * as S from './styles';

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

interface ApiResponse {
    data: Message[];
    error?: string;
};

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchMessages() {
            try {
                const response = await apiService.getMessages() as ApiResponse;
                if (response.error) {
                    throw new Error(response.error);
                }
                setMessages(response.data);
            } catch (err) {
                console.error('Error fetching messages:', err);
            } finally {
                setLoading(false);
            };
        };

        fetchMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim() === '') return;

        try {
            const response = await apiService.postMessage({
                id: Date.now().toString(),
                user: {
                    id: 'current-user',
                    name: 'You',
                    avatar: '/default-user.svg',
                    isModerator: false,
                },
                content: newMessage,
                timestamp: new Date().toISOString(),
            });
            if (response.error) {
                throw new Error(response.error);
            };
            setNewMessage('');

            const messagesResponse = await apiService.getMessages() as ApiResponse;
            if (!messagesResponse.error) {
                setMessages(messagesResponse.data);
            };
        } catch (err) {
            console.error('Error sending message:', err);
        };
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        };
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <S.ChatContainer>
            <S.ChatHeader>
                <S.ChatTitle>FURIA FAN CHAT</S.ChatTitle>
                <S.OnlineCount>245 fans online</S.OnlineCount>
            </S.ChatHeader>

            <S.MessagesContainer>
                {loading && (
                    messages.map((message, index) => (
                        <ChatMessage key={message.id + index} message={message} />
                    ))
                )}
                <div ref={messagesEndRef} />
            </S.MessagesContainer>

            <S.InputContainer>
                <S.MessageInput
                    type='text'
                    placeholder='Type a message...'
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <S.IconButton aria-label='Add emoji'>
                    <Smile size={20} />
                </S.IconButton>
                <S.SendButton onClick={handleSendMessage} aria-label='Send message'>
                    <Send size={20} />
                </S.SendButton>
            </S.InputContainer>
        </S.ChatContainer>
    );
};