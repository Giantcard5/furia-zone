'use client'

import React, {
    useState,
    useRef,
    useEffect
} from 'react';

import {
    Send,
    Smile,
    RefreshCw
} from 'lucide-react';

import moment from 'moment';

import {
    ChatMessage
} from '@/components/ChatMessage';
import { 
    AuthPrompt 
} from '@/components/AuthPrompt';

import {
    apiService
} from '@/lib/api-service';

import { 
    useAuth 
} from '@/hooks/useAuth';

import * as S from './styles';

interface ApiMessage {
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

interface Message {
    id: string;
    user: {
        id: string;
        name: string;
        avatar: string;
        isModerator: boolean;
    };
    content: string;
    timestamp: moment.Moment;
};

interface ApiResponse {
    data: ApiMessage[];
    error?: string;
};

export function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [sending, setSending] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { user, isAuthenticated } = useAuth();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const response = await apiService.getMessages() as ApiResponse;
            if (response.error) {
                throw new Error(response.error);
            };

            const messagesWithMoment = response.data.map(apiMessage => ({
                id: apiMessage.id,
                user: apiMessage.user,
                content: apiMessage.content,
                timestamp: moment(apiMessage.timestamp)
            }));
            setMessages(messagesWithMoment);
        } catch (err) {
            console.error('Error fetching messages:', err);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    if (!isMounted) return null;

    const handleSendMessage = async () => {
        if (newMessage.trim() === '') return;
        if (!user) return;

        setSending(true);
        try {
            const apiMessage: ApiMessage = {
                id: moment().toISOString(),
                user: {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar,
                    isModerator: user.isModerator,
                },
                content: newMessage,
                timestamp: moment().toISOString(),
            };

            const response = await apiService.postMessage(apiMessage);
            if (response.error) {
                throw new Error(response.error);
            };
            setNewMessage('');

            const optimisticMessage: Message = {
                ...apiMessage,
                timestamp: moment(apiMessage.timestamp)
            };
            setMessages(prev => [...prev, optimisticMessage]);

            // Refresh messages after sending
            await fetchMessages();
        } catch (err) {
            console.error('Error sending message:', err);
        } finally {
            setSending(false);
        };
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        };
    };

    return (
        <S.ChatContainer>
            <S.ChatHeader>
                <S.ChatTitle>FURIA FAN CHAT</S.ChatTitle>
                <S.OnlineCount>245 fans online</S.OnlineCount>
                <S.RefreshButton onClick={fetchMessages} aria-label='Refresh messages'>
                    <RefreshCw size={16} />
                </S.RefreshButton>
            </S.ChatHeader>

            <S.MessagesContainer>
                {loading ? (
                    <S.LoadingMessage>Loading messages...</S.LoadingMessage>
                ) : (
                    messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))
                )}
                <div ref={messagesEndRef} />
            </S.MessagesContainer>

            {isAuthenticated ? (
                <S.InputContainer>
                    <S.MessageInput
                        type='text'
                        placeholder='Type a message...'
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={sending}
                    />
                    <S.IconButton aria-label='Add emoji'>
                        <Smile size={20} />
                    </S.IconButton>
                    <S.SendButton onClick={handleSendMessage} aria-label='Send message' disabled={sending}>
                        <Send size={20} />
                    </S.SendButton>
                </S.InputContainer>
            ) : (
                <AuthPrompt/>
            ) }
        </S.ChatContainer>
    );
};