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
    mockMessages
} from '@/lib/mock-data';

import * as S from './styles';

export function ChatInterface() {
    const [messages, setMessages] = useState(mockMessages);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        const message = {
            id: Date.now().toString(),
            user: {
                id: 'current-user',
                name: 'You',
                avatar: '/default-user.svg',
                isModerator: false,
            },
            content: newMessage,
            timestamp: new Date().toISOString(),
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage()
        };
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages]);

    return (
        <S.ChatContainer>
            <S.ChatHeader>
                <S.ChatTitle>FURIA FAN CHAT</S.ChatTitle>
                <S.OnlineCount>245 fans online</S.OnlineCount>
            </S.ChatHeader>

            <S.MessagesContainer>
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))}
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