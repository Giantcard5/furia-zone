import { theme } from '@/styles/theme';
import styled from 'styled-components';

const ChatbotContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 120px);
    background-color: #0A0A0A;
    overflow: hidden;
    border: 1px solid rgba(212, 175, 55, 0.1);
`;

const ChatbotHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

const WhatsAppButton = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: rgba(212, 175, 55, 0.1);
    border: 1px solid rgba(212, 175, 55, 0.3);
    color: ${theme.colors.primary};
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    text-decoration: none;
    transition: all ${theme.transitions.fast};
    
    &:hover {
        background-color: rgba(212, 175, 55, 0.2);
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }
`;

const BotIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BotInfo = styled.div`
  flex: 1;
`;

const BotTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin: 0;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
`;

const BotDescription = styled.p`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin: 0;
    font-family: 'Space Mono', monospace;
`;

const MessagesContainer = styled.div`
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(212, 175, 55, 0.1);
`;

const MessageInput = styled.input`
    flex: 1;
    background-color: #111;
    border: 1px solid rgba(212, 175, 55, 0.1);
    padding: 0.75rem 1rem;
    color: white;
    font-size: 0.875rem;
    font-family: 'Montserrat', sans-serif;
    
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
    }
`;

const SendButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: black;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 0.75rem;
    transition: background-color ${({ theme }) => theme.transitions.fast};
        
    &:hover {
        background-color: #E5C158;
    }
    
    &:disabled {
        background-color: #333;
        cursor: not-allowed;
        color: #666;
    }
`;

const SuggestedQuestions = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
    padding: 0 1rem 1rem;
    background-color: rgba(0, 0, 0, 0.3);
`;

const SuggestedQuestion = styled.button`
    background-color: rgba(212, 175, 55, 0.1);
    border: 1px solid rgba(212, 175, 55, 0.2);
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.75rem;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.fast};
    font-family: 'Space Mono', monospace;
    
    &:hover {
        background-color: rgba(212, 175, 55, 0.2);
        border-color: rgba(212, 175, 55, 0.3);
    }
`;

export {
    ChatbotContainer,
    ChatbotHeader,
    HeaderLeft,
    WhatsAppButton,
    BotIcon,
    BotInfo,
    BotTitle,
    BotDescription,
    MessagesContainer,
    InputContainer,
    MessageInput,
    SendButton,
    SuggestedQuestions,
    SuggestedQuestion
};