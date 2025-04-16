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

const ResultBadge = styled.div<{ result: string }>`
    background-color: ${(props) => (props.result === "win" ? "rgba(76, 175, 80, 0.1)" : "rgba(244, 67, 54, 0.1)")};
    color: ${(props) => (props.result === "win" ? "#4CAF50" : "#F44336")};
    font-size: 0.75rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    padding: 0.25rem 0.75rem;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    display: inline-flex;
    align-items: center;
    margin-bottom: 0.75rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

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

const TeamSection = styled.div<{ $isWinner?: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: ${(props) => (props.$isWinner ? "rgba(212, 175, 55, 0.05)" : "transparent")};
    
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

const TeamScore = styled.div<{ $isWinner?: boolean }>`
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ $isWinner, theme }) => ($isWinner ? theme.colors.primary : "white")};
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

const MapsInfo = styled.div`
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(212, 175, 55, 0.1);
    flex-wrap: wrap;
    gap: 0.5rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const MapItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
`;

const MapScore = styled.span<{ $isWin?: boolean }>`
    color: ${({ $isWin, theme }) => ($isWin ? "#4CAF50" : "#F44336")};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
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

const MVPContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        gap: 2rem;
    }
`;

const MVPImageContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto 1rem;
    
    @media (min-width: 768px) {
        margin: 0;
    }
`

const MVPInfo = styled.div`
    flex: 1;
    text-align: center;
    
    @media (min-width: 768px) {
        text-align: left;
    }
`

const MVPTitle = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

const MVPName = styled.h3`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 0.5rem;
    font-family: 'Space Mono', monospace;
    
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const MVPStats = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
    
    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`

const StatItem = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.5rem 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    min-width: 80px;
    text-align: center;
    border: 1px solid rgba(212, 175, 55, 0.1);
`;

const StatValue = styled.div`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
`;

const StatLabel = styled.div`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-top: 0.25rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const HighlightsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const HighlightCard = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: transform ${({ theme }) => theme.transitions.fast};
    border: 1px solid rgba(212, 175, 55, 0.1);
    
    &:hover {
        transform: translateY(-5px);
        border-color: rgba(212, 175, 55, 0.3);
    }
`;

const HighlightPreview = styled.div`
    position: relative;
    height: 180px;
    background-color: #111;
    cursor: pointer;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
        z-index: 1;
    }
`;

const PlayButton = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-color: rgba(212, 175, 55, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: background-color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

const HighlightInfo = styled.div`
    padding: 1rem;
`

const HighlightTitle = styled.h3`
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin: 0 0 0.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const HighlightMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.75rem;
    font-family: 'Space Mono', monospace;
`;

const WatchReplayButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
    padding: 0.75rem 1.5rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.fast};
    text-decoration: none;
    
    &:hover {
        background-color: rgba(212, 175, 55, 0.1);
        box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }
`;

const WatchReplayContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export {
    MatchContainer,
    MatchHeader,
    ResultBadge,
    MatchTitle,
    MatchInfo,
    InfoItem,
    ScoreboardContainer,
    TeamsContainer,
    TeamSection,
    TeamLogo,
    TeamName,
    TeamScore,
    ScoreSeparator,
    SeparatorText,
    MapsInfo,
    MapItem,
    MapScore,
    SectionTitle,
    MVPContainer,
    MVPImageContainer,
    MVPInfo,
    MVPTitle,
    MVPName,
    MVPStats,
    StatItem,
    StatValue,
    StatLabel,
    HighlightsGrid,
    HighlightCard,
    HighlightPreview,
    PlayButton,
    HighlightInfo,
    HighlightTitle,
    HighlightMeta,
    WatchReplayButton,
    WatchReplayContainer    
};