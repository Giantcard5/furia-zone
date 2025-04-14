'use client'

import { 
    useState 
} from 'react';

import * as S from './styles';

import { 
    MatchScoreboard 
} from '@/components/MatchScoreboard';
import { 
    PlayerStats 
} from '@/components/PlayerStats';
import { 
    GameHighlights 
} from '@/components/GameHightlights';
import { 
    UpcomingMatches 
} from '@/components/UpcomingMatches';

import { 
    mockMatchData 
} from '@/lib/mock-data';

export function LiveMatchStatus() {
    const [activeTab, setActiveTab] = useState('scoreboard');

    const { teams, currentMap, tournament } = mockMatchData;

    return (
        <S.MatchContainer>
            <div>
                <S.MatchHeader>
                    <S.TournamentBadge>
                        <S.CrownIcon /> {tournament.name}
                    </S.TournamentBadge>
                    <S.LiveBadge>LIVE NOW</S.LiveBadge>
                    <S.MatchTitle>
                        <span>{teams[0].name}</span> VS {teams[1].name}
                    </S.MatchTitle>
                    <S.MatchInfo>Map: {currentMap.name} • BO3</S.MatchInfo>
                </S.MatchHeader>

                <S.TabsContainer>
                    <S.Tab isActive={activeTab === 'scoreboard'} onClick={() => setActiveTab('scoreboard')}>
                        SCOREBOARD
                    </S.Tab>
                    <S.Tab isActive={activeTab === 'player-stats'} onClick={() => setActiveTab('player-stats')}>
                        PLAYER STATS
                    </S.Tab>
                    <S.Tab isActive={activeTab === 'highlights'} onClick={() => setActiveTab('highlights')}>
                        HIGHLIGHTS
                    </S.Tab>
                </S.TabsContainer>

                {activeTab === 'scoreboard' && <MatchScoreboard matchData={mockMatchData} />}
                {activeTab === 'player-stats' && <PlayerStats matchData={mockMatchData} />}
                {activeTab === 'highlights' && <GameHighlights />}
            </div>
        </S.MatchContainer>
    );
};