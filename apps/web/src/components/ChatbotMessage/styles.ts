import styled, { keyframes } from 'styled-components';

const MessageContainer = styled.div<{ $isUser: boolean }>`
    display: flex;
    gap: 0.75rem;
    max-width: 80%;
    align-self: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
    
    @media (min-width: 768px) {
        max-width: 70%;
    };
`;

const Avatar = styled.div<{ $isUser: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, $isUser }) => $isUser ? "#333" : theme.colors.primary};
    order: ${(props) => (props.$isUser ? 1 : 0)};
`;

const MessageBubble = styled.div<{ $isUser: boolean }>`
    background-color: ${(props) => (props.$isUser ? "rgba(212, 175, 55, 0.1)" : "rgba(0, 0, 0, 0.3)")};
    padding: 0.75rem 1rem;
    border-radius: 4px;
    border: 1px solid ${(props) => (props.$isUser ? "rgba(212, 175, 55, 0.2)" : "rgba(255, 255, 255, 0.05)")};
`;

const MessageText = styled.p`
    margin: 0;
    color: white;
    font-size: 0.875rem;
    white-space: pre-wrap;
`;

const typingAnimation = keyframes`
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
`;

const TypingIndicator = styled.div`
    display: flex;
    gap: 0.25rem;
    
    span {
        width: 8px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        display: inline-block;
        animation: ${typingAnimation} 1s infinite;
        
        &:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        &:nth-child(3) {
            animation-delay: 0.4s;
        }
    }
`;

const Timestamp = styled.div`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-top: 0.25rem;
    font-family: 'Space Mono', monospace;
`;

export {
    MessageContainer,
    Avatar,
    MessageBubble,
    MessageText,
    TypingIndicator,
    Timestamp
};