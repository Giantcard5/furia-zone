import styled from 'styled-components';

const UpcomingMatchesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const MatchCard = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
    overflow: hidden;
    transition: transform ${({ theme }) => theme.transitions.fast}, border-color ${({ theme }) => theme.transitions.fast};
    display: flex;
    flex-direction: column;
    
    &:hover {
        transform: translateY(-5px);
        border-color: rgba(212, 175, 55, 0.3);
    }
`;

const MatchHeader = styled.div`
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TournamentName = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0.05em;
`;

const MatchType = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    background-color: rgba(212, 175, 55, 0.1);
    padding: 0.25rem 0.5rem;
`;

const TeamsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
`;

const TeamDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 40%;
`;

const TeamLogo = styled.div`
    width: 60px;
    height: 60px;
    position: relative;
    margin-bottom: 0.5rem;
`

const TeamName = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    letter-spacing: 0.05em;
`;

const VersusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
`

const VersusText = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    position: relative;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        width: 15px;
        height: 1px;
        background-color: rgba(212, 175, 55, 0.3);
    }
    
    &::before {
        left: -20px;
    }
    
    &::after {
        right: -20px;
    }
`;

const MatchDate = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-align: center;
`;

const MatchFooter = styled.div`
    padding: 1rem;
    border-top: 1px solid rgba(212, 175, 55, 0.1);
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

const MatchDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

const FuriaTeam = styled(TeamName)`
    color: ${({ theme }) => theme.colors.primary};
`;

export {
    UpcomingMatchesContainer,
    MatchCard,
    MatchHeader,
    TournamentName,
    MatchType,
    TeamsContainer,
    TeamDisplay,
    TeamLogo,
    TeamName,
    VersusContainer,
    VersusText,
    MatchDate,
    MatchFooter,
    MatchDetail,
    FuriaTeam
};
