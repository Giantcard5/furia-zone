import styled from 'styled-components';

const ScoreboardContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    border: 1px solid rgba(212, 175, 55, 0.1);
`;

const TeamsContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const TeamSection = styled.div<{ $isLeft?: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: ${(props) => (props.$isLeft ? "rgba(212, 175, 55, 0.05)" : "transparent")};
    
    @media (min-width: 768px) {
        padding: 3rem 2rem;
    }
`;

const TeamLogo = styled.div`
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    position: relative;
    
    @media (min-width: 768px) {
        width: 120px;
        height: 120px;
    }
`;

const TeamName = styled.h2`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

const TeamScore = styled.div<{ $isWinning?: boolean }>`
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${(props) => (props.$isWinning ? ({ theme }) => theme.colors.primary : "white")};
    font-family: 'Space Mono', monospace;
    
    @media (min-width: 768px) {
        font-size: 4rem;
    }
`;

const ScoreSeparator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    
    @media (min-width: 768px) {
        padding: 0 1rem;
    }
`;

const SeparatorText = styled.span`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
    
    @media (min-width: 768px) {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        transform: rotate(180deg);
    }
`;

const MapInfo = styled.div`
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(212, 175, 55, 0.1);
`;

const MapName = styled.div`
    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const RoundInfo = styled.div`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

export {
    ScoreboardContainer,
    TeamsContainer,
    TeamSection,
    TeamLogo,
    TeamName,
    TeamScore,
    ScoreSeparator,
    SeparatorText,
    MapInfo,
    MapName,
    RoundInfo
}