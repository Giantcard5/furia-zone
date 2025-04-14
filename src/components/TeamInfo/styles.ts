import styled from 'styled-components';

const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const TeamHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    @media (min-width: 768px) {
        flex-direction: row;
        text-align: left;
        gap: 2rem;
    }
`;

const TeamLogo = styled.div`
    width: 120px;
    height: 120px;
    position: relative;
    margin-bottom: 1rem;
    
    @media (min-width: 768px) {
        width: 160px;
        height: 160px;
        margin-bottom: 0;
    }
`;

const TeamInfoSection = styled.div`
    flex: 1;
`

const TeamName = styled.h1`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.1em;
    
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

const TeamDescription = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 1rem;
    max-width: 600px;
    font-size: 0.875rem;
    line-height: 1.6;
`;

const TeamStats = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    
    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

const StatItem = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.75rem 1.25rem;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    min-width: 100px;
    text-align: center;
    border: 1px solid rgba(212, 175, 55, 0.1);
`;

const StatValue = styled.div`
    font-size: 1.5rem;
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

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.1em;
    color: ${({ theme }) => theme.colors.primary};
`;

const PlayersGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const PlayerCard = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: transform ${({ theme }) => theme.transitions.fast};
    border: 1px solid rgba(212, 175, 55, 0.1);
    
    &:hover {
        transform: translateY(-5px);
        border-color: rgba(212, 175, 55, 0.3);
    }
`;

const PlayerHeader = styled.div`
    position: relative;
    height: 200px;
    background-color: rgba(212, 175, 55, 0.05);
`;

const PlayerImage = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 180px;
    width: 100%;
`;

const PlayerInfo = styled.div`
    padding: 1rem;
    text-align: center;
`;

const PlayerName = styled.h3`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 0.25rem;
    font-family: 'Space Mono', monospace;
`;

const PlayerNickname = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 0.5rem;
    font-family: 'Space Mono', monospace;   
    letter-spacing: 0.05em;
`;

const PlayerRole = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: 'Space Mono', monospace;
`;

export { 
    TeamContainer,
    TeamHeader,
    TeamLogo,
    TeamInfoSection,
    TeamName,
    TeamDescription,
    TeamStats,
    StatItem,
    StatValue,
    StatLabel,
    SectionTitle,
    PlayersGrid,
    PlayerCard,
    PlayerHeader,
    PlayerImage,
    PlayerInfo,
    PlayerName,
    PlayerNickname,
    PlayerRole,
};