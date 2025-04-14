'use client'

import { 
    Bot, 
    User 
} from 'lucide-react';

import * as S from './styles';

interface Message {
    id: string
    content: string
    sender: 'user' | 'bot'
    timestamp: Date
    isTyping?: boolean
};

interface ChatbotMessageProps {
    message: Message
};

export function ChatbotMessage({ message }: ChatbotMessageProps) {
    const isUser = message.sender === 'user';
    const formattedTime = message.timestamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <S.MessageContainer isUser={isUser}>
            <S.Avatar isUser={isUser}>{isUser ? <User size={20} /> : <Bot size={20} color='black' />}</S.Avatar>

            <div>
                <S.MessageBubble isUser={isUser}>
                    {message.isTyping ? (
                        <S.TypingIndicator>
                            <span></span>
                            <span></span>
                            <span></span>
                        </S.TypingIndicator>
                    ) : (
                        <S.MessageText>{message.content}</S.MessageText>
                    )}
                </S.MessageBubble>
                <S.Timestamp>{formattedTime}</S.Timestamp>
            </div>
        </S.MessageContainer>
    );
};