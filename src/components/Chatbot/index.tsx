'use client'

import React, {
    useState,
    useRef,
    useEffect
} from 'react';

import {
    Send,
    Bot
} from 'lucide-react';

import {
    ChatbotMessage
} from '@/components/ChatbotMessage';

import {
    mockBotResponses
} from '@/lib/mock-data';

import * as S from './styles';

interface Message {
    id: string
    content: string
    sender: 'user' | 'bot'
    timestamp: Date
    isTyping?: boolean
};

export function ChatbotInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: "Hi there! I'm the FURIA FAQ Bot. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ])
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const suggestedQuestions = [
        'When is the next match?',
        'Who is the top fragger?',
        'Latest tournament results?',
        'Team roster?',
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = () => {
        if (input.trim() === '') return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: input,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = getBotResponse(input);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: botResponse,
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        };
    };

    const handleSuggestedQuestion = (question: string) => {
        setInput(question);
    };

    const getBotResponse = (message: string): string => {
        const lowerMessage = message.toLowerCase();

        for (const response of mockBotResponses) {
            for (const keyword of response.keywords) {
                if (lowerMessage.includes(keyword)) {
                    return response.response;
                };
            };
        };

        return "I'm not sure about that.Try asking about match schedules, player stats, or team information."
    };

    return (
        <S.ChatbotContainer>
            <S.ChatbotHeader>
                <S.BotIcon>
                    <Bot size={24} color='black' />
                </S.BotIcon>
                <S.BotInfo>
                    <S.BotTitle>FURIA FAQ BOT</S.BotTitle>
                    <S.BotDescription>Ask me anything about FURIA CS:GO team</S.BotDescription>
                </S.BotInfo>
            </S.ChatbotHeader>

            <S.MessagesContainer>
                {messages.map((message) => (
                    <ChatbotMessage key={message.id} message={message} />
                ))}

                {isTyping && (
                    <ChatbotMessage
                        message={{
                            id: 'typing',
                            content: 'typing...',
                            sender: 'bot',
                            timestamp: new Date(),
                            isTyping: true,
                        }}
                    />
                )}

                <div ref={messagesEndRef} />
            </S.MessagesContainer>

            <S.InputContainer>
                <S.MessageInput
                    type='text'
                    placeholder='Ask a question...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isTyping}
                />
                <S.SendButton onClick={handleSendMessage} disabled={isTyping || input.trim() === ''} aria-label='Send message'>
                    <Send size={20} />
                </S.SendButton>
            </S.InputContainer>

            <S.SuggestedQuestions>
                {suggestedQuestions.map((question, index) => (
                    <S.SuggestedQuestion key={index} onClick={() => handleSuggestedQuestion(question)}>
                        {question}
                    </S.SuggestedQuestion>
                ))}
            </S.SuggestedQuestions>
        </S.ChatbotContainer>
    )
}
