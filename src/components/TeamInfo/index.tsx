'use client'

import Image from 'next/image';

import {
    mockTeamData
} from '@/lib/mock-data';

import * as S from './styles';

export function TeamInfo() {
    const { name, logo, description, stats, players } = mockTeamData

    return (
        <S.TeamContainer>
            <S.TeamHeader>
                <S.TeamLogo>
                    <Image
                        src={logo}
                        alt={name}
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </S.TeamLogo>

                <S.TeamInfoSection>
                    <S.TeamName>{name}</S.TeamName>
                    <S.TeamDescription>{description}</S.TeamDescription>

                    <S.TeamStats>
                        {stats.map((stat, index) => (
                            <S.StatItem key={index}>
                                <S.StatValue>{stat.value}</S.StatValue>
                                <S.StatLabel>{stat.label}</S.StatLabel>
                            </S.StatItem>
                        ))}
                    </S.TeamStats>
                </S.TeamInfoSection>
            </S.TeamHeader>

            <div>
                <S.SectionTitle>PLAYERS</S.SectionTitle>
                <S.PlayersGrid>
                    {players.map((player) => (
                        <S.PlayerCard key={player.id}>
                            <S.PlayerHeader>
                                <S.PlayerImage>
                                    <Image
                                        src={player.image || '/placeholder.svg?height=180&width=150'}
                                        alt={player.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </S.PlayerImage>
                            </S.PlayerHeader>

                            <S.PlayerInfo>
                                <S.PlayerName>{player.name}</S.PlayerName>
                                <S.PlayerNickname>{player.nickname}</S.PlayerNickname>
                                <S.PlayerRole>{player.role}</S.PlayerRole>
                            </S.PlayerInfo>
                        </S.PlayerCard>
                    ))}
                </S.PlayersGrid>
            </div>
        </S.TeamContainer>
    );
};