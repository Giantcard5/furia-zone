'use client'

import Image from 'next/image';

import { 
    Calendar, 
    Clock, 
    MapPin 
} from 'lucide-react';

import { 
    mockUpcomingMatches 
} from '@/lib/mock-data';

import * as S from './styles';

export function UpcomingMatches() {
    return (
        <>
            <S.SectionTitle>UPCOMING MATCHES</S.SectionTitle>

            <S.UpcomingMatchesContainer>
                {mockUpcomingMatches.map((match) => (
                    <S.MatchCard key={match.id}>
                        <S.MatchHeader>
                            <S.TournamentName>{match.tournament}</S.TournamentName>
                            <S.MatchType>{match.matchType}</S.MatchType>
                        </S.MatchHeader>

                        <S.TeamsContainer>
                            <S.TeamDisplay>
                                <S.TeamLogo>
                                    <Image
                                        src={match.team1.logo || '/placeholder.svg?height=60&width=60'}
                                        alt={match.team1.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </S.TeamLogo>
                                {match.team1.name === 'FURIA' ? (
                                    <S.FuriaTeam>{match.team1.name}</S.FuriaTeam>
                                ) : (
                                    <S.TeamName>{match.team1.name}</S.TeamName>
                                )}
                            </S.TeamDisplay>

                            <S.VersusContainer>
                                <S.VersusText>VS</S.VersusText>
                                <S.MatchDate>{match.date}</S.MatchDate>
                            </S.VersusContainer>

                            <S.TeamDisplay>
                                <S.TeamLogo>
                                    <Image
                                        src={match.team2.logo || '/placeholder.svg?height=60&width=60'}
                                        alt={match.team2.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </S.TeamLogo>
                                {match.team2.name === 'FURIA' ? (
                                    <S.FuriaTeam>{match.team2.name}</S.FuriaTeam>
                                ) : (
                                    <S.TeamName>{match.team2.name}</S.TeamName>
                                )}
                            </S.TeamDisplay>
                        </S.TeamsContainer>

                        <S.MatchFooter>
                            <S.MatchDetail>
                                <Calendar size={14} />
                                {match.fullDate}
                            </S.MatchDetail>
                            <S.MatchDetail>
                                <Clock size={14} />
                                {match.time}
                            </S.MatchDetail>
                            {match.location && (
                                <S.MatchDetail>
                                    <MapPin size={14} />
                                    {match.location}
                                </S.MatchDetail>
                            )}
                        </S.MatchFooter>
                    </S.MatchCard>
                ))}
            </S.UpcomingMatchesContainer>
        </>
    );
};
