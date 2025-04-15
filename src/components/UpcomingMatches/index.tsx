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
        mockUpcomingMatches.length === 0 ? (
            <S.NoMatchesContainer>
                <S.NoMatchesIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D4AF37">
                        <path d="M19 19H5V8H19M16 1V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V1M17 12H12V17H17V12Z" />
                    </svg>
                </S.NoMatchesIcon>

                <div>
                    <S.NoMatchesTitle>NO UPCOMING MATCHES</S.NoMatchesTitle>
                    <S.NoMatchesText>
                        FURIA doesn't have any scheduled matches at the moment. Check back later for updates on the next tournament.
                    </S.NoMatchesText>
                </div>

                <S.TournamentStatus>Season break until next tournament announcement</S.TournamentStatus>
            </S.NoMatchesContainer>
        ) : (
            <>
                <S.SectionTitle>UPCOMING MATCHES</S.SectionTitle>

                <S.UpcomingMatchesContainer>
                    {mockUpcomingMatches.map((match: any) => (
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
        )
    );
};
