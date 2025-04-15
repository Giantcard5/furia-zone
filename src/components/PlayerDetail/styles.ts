import styled from 'styled-components';

const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

const BackButton = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const PlayerHeader = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
        gap: 2.5rem;
    }
`;

const PlayerImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
    margin-bottom: 1.5rem;
    
    @media (min-width: 768px) {
        width: 300px;
        margin-bottom: 0;
    }
`;

const PlayerImage = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 280px;
    width: 100%;
`;

const PlayerInfo = styled.div`
    flex: 1;
`;

const PlayerName = styled.h1`
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin: 0 0 0.25rem 0;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const PlayerNickname = styled.div`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 1.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const PlayerMetaInfo = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
`;

const MetaItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
`;

const MetaIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: rgba(212, 175, 55, 0.1);
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary};
`;

const MetaLabel = styled.div`
    color: ${({ theme }) => theme.colors.text.secondary};
`;

const MetaValue = styled.div`
    color: white;
`;

const PlayerBio = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
    margin: 0;
    font-size: 0.875rem;
    
    @media (min-width: 768px) {
        font-size: 1rem;
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

const Tab = styled.button<{ $isActive: boolean }>`
    padding: 0.75rem 1.25rem;
    background: none;
    border: none;
    color: ${(props) => (props.$isActive ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.text.secondary)};
    font-size: 0.875rem;
    font-weight: ${(props) => (props.$isActive ? ({ theme }) => theme.typography.fontWeight.semibold : ({ theme }) => theme.typography.fontWeight.regular)};
    cursor: pointer;
    border-bottom: 2px solid ${(props) => (props.$isActive ? ({ theme }) => theme.colors.primary : 'transparent')};
    transition: all ${({ theme }) => theme.transitions.fast};
    white-space: nowrap;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    
    &:hover {
        color: ${(props) => (props.$isActive ? ({ theme }) => theme.colors.primary : 'white')};
    }
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
`

const StatCard = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
    padding: 1.5rem;
    text-align: center;
    transition: transform ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        transform: translateY(-5px);
        border-color: rgba(212, 175, 55, 0.3);
    }
`;

const StatValue = styled.div`
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Space Mono', monospace;
    margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const AchievementsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const AchievementItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
    padding: 1rem;
    transition: transform ${({ theme }) => theme.transitions.fast};
    
    &:hover {
        transform: translateX(5px);
        border-color: rgba(212, 175, 55, 0.3);
    }
`;

const AchievementIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(212, 175, 55, 0.1);
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
`;

const AchievementInfo = styled.div`
    flex: 1;
`;

const AchievementTitle = styled.div`
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 0.25rem;
    font-family: 'Space Mono', monospace;
`;

const AchievementMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

const HistoryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const HistoryItem = styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(212, 175, 55, 0.1);
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.primary};
    }
`;

const HistoryDate = styled.div`
    font-family: 'Space Mono', monospace;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.primary};
    min-width: 100px;
`;

const HistoryContent = styled.div`
    flex: 1;
`;

const HistoryTitle = styled.div`
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin-bottom: 0.25rem;
`;

const HistoryDescription = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export {
    PlayerContainer,
    BackButton,
    PlayerHeader,
    PlayerImageContainer,
    PlayerImage,
    PlayerInfo,
    PlayerName,
    PlayerNickname,
    PlayerMetaInfo,
    MetaItem,
    MetaIcon,
    MetaLabel,
    MetaValue,
    PlayerBio,
    SectionTitle,
    TabsContainer,
    Tab,
    StatsGrid,
    StatCard,
    StatValue,
    StatLabel,
    AchievementsList,
    AchievementItem,
    AchievementIcon,
    AchievementInfo,
    AchievementTitle,
    AchievementMeta,
    HistoryList,
    HistoryItem,
    HistoryDate,
    HistoryContent,
    HistoryTitle,
    HistoryDescription
}