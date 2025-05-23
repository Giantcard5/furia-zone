import styled from 'styled-components';

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 120px);
    background-color: #0A0A0A;
    overflow: hidden;
    border: 1px solid rgba(212, 175, 55, 0.1);
`;

const ChatHeader = styled.div`
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
`;

const ChatTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin: 0;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
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

const IconButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition: color ${({ theme }) => theme.transitions.fast}, background-color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        color: white;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const SendButton = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({ theme }) => theme.colors.accent};
        transform: scale(1.05);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`;

const RefreshButton = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-left: 8px;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        transform: rotate(180deg);
    }
`;

const LoadingMessage = styled.div`
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    padding: 20px;
    font-size: 14px;
`;

const EmptyMessage = styled.div`
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    padding: 20px;
    font-size: 14px;
    opacity: 0.7;
`;

const OnlineCount = styled.div`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-top: 0.25rem;
    font-family: 'Space Mono', monospace;
`;

export {
    ChatContainer,
    ChatHeader,
    ChatTitle,
    MessagesContainer,
    InputContainer,
    MessageInput,
    IconButton,
    SendButton,
    RefreshButton,
    LoadingMessage,
    EmptyMessage,
    OnlineCount
};