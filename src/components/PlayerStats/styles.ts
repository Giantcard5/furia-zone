import styled from 'styled-components';

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const TeamStatsContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    border: 1px solid rgba(212, 175, 55, 0.1);
`;

const TeamHeader = styled.div<{ $isFuria?: boolean }>`
    background-color: ${(props) => (props.$isFuria ? 'rgba(212, 175, 55, 0.1)' : 'rgba(0, 0, 0, 0.3)')};
    padding: 1rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.1);
`;

const TeamName = styled.h3<{ $isFuria?: boolean }>`
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    margin: 0;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
    color: ${({ theme, $isFuria }) => $isFuria ? theme.colors.primary : 'white'};
`;

const StatsTable = styled.div`
    width: 100%;
    overflow-x: auto;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    background-color: rgba(0, 0, 0, 0.2);
`;

const TableRow = styled.tr`
    &:not(:last-child) {
        border-bottom: 1px solid rgba(212, 175, 55, 0.05);
    }
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.03);
    }
`;

const TableHeader = styled.th`
    padding: 0.75rem 1rem;
    text-align: left;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.75rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 0.05em;
`;

const TableCell = styled.td`
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-family: 'Space Mono', monospace;
    
    @media (min-width: 768px) {
        font-size: 0.875rem;
    }
`

const PlayerName = styled.div`
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const StatHighlight = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

export {
    StatsContainer,
    TeamStatsContainer,
    TeamHeader,
    TeamName,
    StatsTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableCell,
    PlayerName,
    StatHighlight
};
