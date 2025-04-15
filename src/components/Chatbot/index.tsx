'use client'

import React, {
    useState,
    useRef,
    useEffect
} from 'react';

import {
    Send,
    Bot,
    MessageSquare
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

interface BotResponse {
    keywords: string[];
    response: string;
}

const botResponses: BotResponse[] = mockBotResponses[0];

export function ChatbotInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            content: "Olá! Sou o FURIA FAQ BOT. Como posso te ajudar hoje?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ])
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const suggestedQuestions = [
        'Quando é o próximo jogo?',
        'Quem é o top fragger da FURIA atualmente?',
        'Qual foi o resultado do último torneio?',
        'Qual é o elenco atual da equipe?',
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

        for (const response of botResponses) {
            for (const keyword of response.keywords) {
                if (lowerMessage.includes(keyword)) {
                    return response.response;
                };
            };
        };

        return "Não tenho a certeza disso. Tente perguntar sobre calendários de jogos, estatísticas de jogadores ou informações sobre a equipa, mas caso eu não ache essas informações você pode conversar com o nosso Contato Inteligênte pelo Whatsapp!"
    };

    return (
        <S.ChatbotContainer>
            <S.ChatbotHeader>
                <S.HeaderLeft>
                    <S.BotIcon>
                        <Bot size={24} color="black" />
                    </S.BotIcon>
                    <S.BotInfo>
                        <S.BotTitle>FURIA FAQ BOT</S.BotTitle>
                        <S.BotDescription>Ask me anything about FURIA CS:GO team</S.BotDescription>
                    </S.BotInfo>
                </S.HeaderLeft>

                <S.WhatsAppButton
                    href="https://api.whatsapp.com/send/?phone=5511993404466&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MessageSquare size={16} />
                    CONTATO INTELIGENTE
                </S.WhatsAppButton>
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
                    placeholder='Faça uma pergunta...'
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
