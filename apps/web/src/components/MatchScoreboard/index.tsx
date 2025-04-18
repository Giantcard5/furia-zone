'use client'

import Image from 'next/image';

import * as S from './styles';

interface Team {
    id: string
    name: string
    logo: string
    score: number
};

interface Map {
    name: string
    rounds: {
        current: number
        total: number
    };
};

interface MatchData {
    teams: Team[]
    currentMap: Map;
};

interface MatchScoreboardProps {
    matchData: MatchData
};

export function MatchScoreboard({ matchData }: MatchScoreboardProps) {
    const { teams, currentMap } = matchData;
    const team1 = teams[0];
    const team2 = teams[1];
    const isTeam1Winning = team1.score > team2.score;
    const isTeam2Winning = team2.score > team1.score;

    return (
        <S.ScoreboardContainer>
            <S.TeamsContainer>
                <S.TeamSection $isLeft={true}>
                    <S.TeamLogo>
                        <Image
                            src={team1.logo || 'https://www.hltv.org/img/static/team/placeholder.svg'}
                            alt={team1.name}
                            fill
                            sizes="(max-width: 768px) 80px, 120px"
                            style={{ objectFit: 'contain' }}
                        />
                    </S.TeamLogo>
                    <S.TeamName>{team1.name}</S.TeamName>
                    <S.TeamScore $isWinning={isTeam1Winning}>{team1.score}</S.TeamScore>
                </S.TeamSection>

                <S.ScoreSeparator>
                    <S.SeparatorText>VS</S.SeparatorText>
                </S.ScoreSeparator>

                <S.TeamSection>
                    <S.TeamLogo>
                        <Image
                            src={team2.logo || 'https://www.hltv.org/img/static/team/placeholder.svg'}
                            alt={team2.name}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </S.TeamLogo>
                    <S.TeamName>{team2.name}</S.TeamName>
                    <S.TeamScore $isWinning={isTeam2Winning}>{team2.score}</S.TeamScore>
                </S.TeamSection>
            </S.TeamsContainer>

            <S.MapInfo>
                <S.MapName>{currentMap.name}</S.MapName>
                <S.RoundInfo>
                    Round {currentMap.rounds.current}/{currentMap.rounds.total}
                </S.RoundInfo>
            </S.MapInfo>
        </S.ScoreboardContainer>
    );
};