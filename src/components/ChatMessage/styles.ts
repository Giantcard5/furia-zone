import styled, { keyframes } from 'styled-components';

const MessageContainer = styled.div<{ isModerator: boolean }>`
    display: flex;
    gap: 0.75rem;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: ${(props) => (props.isModerator ? "rgba(212, 175, 55, 0.05)" : "transparent")};
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.03);
    }
`

const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid rgba(212, 175, 55, 0.2);
`

const MessageContent = styled.div`
    flex: 1;
`

const MessageHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
`

const Username = styled.span<{ isModerator: boolean }>`
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${(props) => (props.isModerator ? ({ theme }) => theme.colors.primary : "white")};
    margin-right: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
`

const Timestamp = styled.span`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: 'Space Mono', monospace;
`

const MessageText = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    word-break: break-word;
    font-size: 0.875rem;
`

const ModeratorBadge = styled.span`
    background-color: rgba(212, 175, 55, 0.2);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.625rem;
    padding: 0.125rem 0.375rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    margin-right: 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`

export {
    MessageContainer,
    AvatarContainer,
    MessageContent,
    MessageHeader,
    Username,
    Timestamp,
    MessageText,
    ModeratorBadge
};