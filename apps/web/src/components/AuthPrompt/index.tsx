'use client';

import { 
    LogIn, 
    UserPlus 
} from 'lucide-react';

import * as S from './styles';

export function AuthPrompt() {
    return (
        <S.PromptContainer>
            <S.PromptTitle>JOIN THE CONVERSATION</S.PromptTitle>
            <S.PromptText>You need to be logged in to send messages in the FURIA fan chat.</S.PromptText>

            <S.ButtonsContainer>
                <S.LoginButton href='/auth/login'>
                    <LogIn size={18} />
                    LOG IN
                </S.LoginButton>

                <S.RegisterButton href='/auth/register'>
                    <UserPlus size={18} />
                    REGISTER
                </S.RegisterButton>
            </S.ButtonsContainer>
        </S.PromptContainer>
    );
};