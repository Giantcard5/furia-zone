'use client'

import Image from 'next/image';

import {
    Calendar, 
    Trophy, 
    MapPin, 
    Play, 
    Star 
} from 'lucide-react';

import { 
    mockLastMatchData 
} from '@/lib/mock-data';

import { 
    theme 
} from '@/styles/theme';

import * as S from './styles';
import { UpcomingMatches } from '../UpcomingMatches';

export function LastMatchResult() {
    const { result, date, teams, maps, tournament, mvp, highlights } = mockLastMatchData

    const team1 = teams[0]
    const team2 = teams[1]
    const isFuriaWinner = (team1.name === 'FURIA' && result === 'win') || (team2.name === 'FURIA' && result === 'loss')

    return (
        <S.MatchContainer>
            <S.MatchContainer>
                <div>
                    <S.MatchHeader>
                        <S.ResultBadge result={result}>{result === 'win' ? 'VICTORY' : 'DEFEAT'}</S.ResultBadge>

                        <S.MatchTitle>
                            <span>{team1.name}</span> VS {team2.name}
                        </S.MatchTitle>

                        <S.MatchInfo>
                            <S.InfoItem>
                                <Calendar size={14} />
                                {date}
                            </S.InfoItem>
                            <S.InfoItem>
                                <Trophy size={14} />
                                {tournament.name}
                            </S.InfoItem>
                            <S.InfoItem>
                                <MapPin size={14} />
                                BO{maps.length}
                            </S.InfoItem>
                        </S.MatchInfo>
                    </S.MatchHeader>

                    <S.ScoreboardContainer>
                        <S.TeamsContainer>
                            <S.TeamSection $isWinner={team1.name === 'FURIA' ? result === 'win' : result === 'loss'}>
                                <S.TeamLogo>
                                    <Image
                                        src={team1.logo || '/icon-gold.png'}
                                        alt={team1.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </S.TeamLogo>
                                <S.TeamName>{team1.name}</S.TeamName>
                                <S.TeamScore $isWinner={team1.name === 'FURIA' ? result === 'win' : result === 'loss'}>
                                    {team1.score}
                                </S.TeamScore>
                            </S.TeamSection>

                            <S.ScoreSeparator>
                                <S.SeparatorText>VS</S.SeparatorText>
                            </S.ScoreSeparator>

                            <S.TeamSection $isWinner={team2.name === 'FURIA' ? result === 'win' : result === 'loss'}>
                                <S.TeamLogo>
                                    <Image
                                        src={team2.logo || '/icon-gold.png'}
                                        alt={team2.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </S.TeamLogo>
                                <S.TeamName>{team2.name}</S.TeamName>
                                <S.TeamScore $isWinner={team2.name === 'FURIA' ? result === 'win' : result === 'loss'}>
                                    {team2.score}
                                </S.TeamScore>
                            </S.TeamSection>
                        </S.TeamsContainer>

                        <S.MapsInfo>
                            {maps.map((map, index) => (
                                <S.MapItem key={index}>
                                    {map.name}:
                                    <S.MapScore $isWin={isFuriaWinner ? map.score[0] > map.score[1] : map.score[1] > map.score[0]}>
                                        {map.score[0]} - {map.score[1]}
                                    </S.MapScore>
                                </S.MapItem>
                            ))}
                        </S.MapsInfo>
                    </S.ScoreboardContainer>
                </div>

                <div>
                    <S.SectionTitle>MATCH MVP</S.SectionTitle>
                    <S.MVPContainer>
                        <S.MVPImageContainer>
                            <Image
                                src={mvp.avatar || 'https://static.hltv.org/images/playerprofile/bodyshot/unknown.png'}
                                alt={mvp.nickname}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </S.MVPImageContainer>

                        <S.MVPInfo>
                            <S.MVPTitle>
                                <Star size={16} color={theme.colors.primary} />
                                MOST VALUABLE PLAYER
                            </S.MVPTitle>
                            <S.MVPName>
                                {mvp.name} <span>'{mvp.nickname}'</span>
                            </S.MVPName>

                            <S.MVPStats>
                                <S.StatItem>
                                    <S.StatValue>{mvp.stats.kills}</S.StatValue>
                                    <S.StatLabel>KILLS</S.StatLabel>
                                </S.StatItem>
                                <S.StatItem>
                                    <S.StatValue>{mvp.stats.deaths}</S.StatValue>
                                    <S.StatLabel>DEATHS</S.StatLabel>
                                </S.StatItem>
                                <S.StatItem>
                                    <S.StatValue>{mvp.stats.rating}</S.StatValue>
                                    <S.StatLabel>RATING</S.StatLabel>
                                </S.StatItem>
                            </S.MVPStats>
                        </S.MVPInfo>
                    </S.MVPContainer>
                </div>

                <div>
                    <S.SectionTitle>HIGHLIGHTS</S.SectionTitle>
                    <S.HighlightsGrid>
                        {highlights.map((highlight) => (
                            <S.HighlightCard key={highlight.id}>
                                <S.HighlightPreview>
                                    <S.PlayButton>
                                        <Play size={20} fill='white' />
                                    </S.PlayButton>
                                </S.HighlightPreview>

                                <S.HighlightInfo>
                                    <S.HighlightTitle>{highlight.title}</S.HighlightTitle>
                                    <S.HighlightMeta>{highlight.time}</S.HighlightMeta>
                                </S.HighlightInfo>
                            </S.HighlightCard>
                        ))}
                    </S.HighlightsGrid>

                    <S.WatchReplayContainer>
                        <S.WatchReplayButton href='#' target='_blank'>
                            <Play size={16} />
                            WATCH FULL MATCH REPLAY
                        </S.WatchReplayButton>
                    </S.WatchReplayContainer>
                </div>
            </S.MatchContainer>

            <UpcomingMatches />
        </S.MatchContainer>
    );
};