'use client'

import Image from 'next/image';

import {
    User as UserIcon,
} from 'lucide-react';

import * as S from './styles';

interface User {
    id: string
    name: string
    avatar: string
    isModerator: boolean
};

interface Message {
    id: string
    user: User
    content: string
    timestamp: string
};

interface ChatMessageProps {
    message: Message
};

export function ChatMessage({ message }: ChatMessageProps) {
    const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <S.MessageContainer $isModerator={message.user.isModerator}>
            <S.AvatarContainer>
                {message.user.avatar.length > 0 ? (
                    <Image src={message.user.avatar} alt={message.user.name} width={30} height={30} />
                ) : (
                    <UserIcon width={20} height={20} />
                )}
            </S.AvatarContainer>

            <S.MessageContent>
                <S.MessageHeader>
                    <S.Username $isModerator={message.user.isModerator}>{message.user.name}</S.Username>

                    {message.user.isModerator && <S.ModeratorBadge>MOD</S.ModeratorBadge>}

                    <S.Timestamp>{formattedTime}</S.Timestamp>
                </S.MessageHeader>

                <S.MessageText>{message.content}</S.MessageText>
            </S.MessageContent>
        </S.MessageContainer>
    );
}