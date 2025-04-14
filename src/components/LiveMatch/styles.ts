import styled from 'styled-components';

const MatchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

const MatchHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
    
    @media (min-width: 768px) {
        margin-bottom: 2rem;
    }
`;

const LiveBadge = styled.div`
    background-color: rgba(212, 175, 55, 0.1);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    padding: 0.25rem 0.75rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    display: inline-flex;
    align-items: center;
    margin-bottom: 0.75rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    
    &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        margin-right: 0.5rem;
        animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;

const MatchTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
    
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const MatchInfo = styled.div`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.875rem;
    letter-spacing: 0.05em;
    font-family: 'Space Mono', monospace;
    margin-bottom: 1rem;
`;

const TabsContainer = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    margin-bottom: 1.5rem;
    overflow-x: auto;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Tab = styled.button<{ isActive: boolean }>`
    padding: 0.75rem 1.25rem;
    background: none;
    border: none;
    color: ${(props) => (props.isActive ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.text.secondary)};
    font-size: 0.875rem;
    font-weight: ${(props) => (props.isActive ? ({ theme }) => theme.typography.fontWeight.semibold : ({ theme }) => theme.typography.fontWeight.regular)};
    cursor: pointer;
    border-bottom: 2px solid ${(props) => (props.isActive ? ({ theme }) => theme.colors.primary : 'transparent')};
    transition: all ${({ theme }) => theme.transitions.fast};
    white-space: nowrap;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    
    &:hover {
        color: ${(props) => (props.isActive ? ({ theme }) => theme.colors.primary : 'white')};
    }
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    
    &::before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 24px;
        background-color: ${({ theme }) => theme.colors.primary};
        margin-right: 0.75rem;
    }
`;

const TournamentBadge = styled.div`
    position: absolute;
    top: -10px;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.5rem 1rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid rgba(212, 175, 55, 0.2);
    
    @media (max-width: 768px) {
        position: relative;
        top: 0;
        right: 0;
        margin-bottom: 1rem;
    }
`;

const CrownIcon = styled.span`
    display: inline-block;
    width: 16px;
    height: 16px;
    background-image: url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23D4AF37'%3E%3Cpath d='M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z'/%3E%3C/svg%3E');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 5px;
    vertical-align: middle;
`;

export {
    MatchContainer,
    MatchHeader,
    LiveBadge,
    MatchTitle,
    MatchInfo,
    TabsContainer,
    Tab,
    SectionTitle,
    TournamentBadge,
    CrownIcon
};