'use client'

import {
    useState,
    useEffect
} from 'react';

import Image from 'next/image';

import {
    mockTeamData
} from '@/lib/mock-data';
import {
    apiService
} from '@/lib/api-service';

import * as S from './styles';

import {
    getImageFromName
} from '@/utils/image';

interface TeamData {
    id: number;
    name: string;
    logo: string;
    players: Array<{
        id: number;
        nickname: string;
        name: string;
        type: string;
    }>;
    stats: {
        matches: number;
        wins: number;
        losses: number;
        winRate: number;
    };
}

export function TeamInfo() {
    const { name, logo, stats, description } = mockTeamData;

    const [teamData, setTeamData] = useState<TeamData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTeamData() {
            try {
                setLoading(true);

                const response = await apiService.getTeamData('8297');

                if (response.error) {
                    throw new Error(response.error);
                };

                setTeamData(response.data as TeamData);
            } catch (err) {
                console.error('Error fetching team data:', err);
            } finally {
                setLoading(false);
            };
        };

        fetchTeamData();
    }, []);

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
                        {loading ? (
                            Array(4).fill(0).map((_, index) => (
                                <S.StatItem key={index} className="loading">
                                    <S.StatValue>&nbsp;</S.StatValue>
                                    <S.StatLabel>&nbsp;</S.StatLabel>
                                </S.StatItem>
                            ))
                        ) : (
                            stats.map((stat, index) => (
                                <S.StatItem key={index}>
                                    <S.StatValue>{stat.value}</S.StatValue>
                                    <S.StatLabel>{stat.label}</S.StatLabel>
                                </S.StatItem>
                            ))
                        )}
                    </S.TeamStats>
                </S.TeamInfoSection>
            </S.TeamHeader>

            <div>
                <S.SectionTitle>PLAYERS</S.SectionTitle>
                <S.PlayersGrid>
                    {loading ? (
                        Array(5).fill(0).map((_, index) => (
                            <S.PlayerCardLoading key={index} />
                        ))
                    ) : (
                        teamData?.players.map((player) => (
                            <S.PlayerCard key={player.id}>
                                <S.PlayerHeader>
                                    <S.PlayerImage>
                                        <Image
                                            src={getImageFromName[player.name as keyof typeof getImageFromName]}
                                            alt={player.name}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </S.PlayerImage>
                                </S.PlayerHeader>
                                <S.PlayerInfo>
                                    <S.PlayerName>{player.name}</S.PlayerName>
                                    <S.PlayerNickname>{player.nickname}</S.PlayerNickname>
                                    <S.PlayerRole>{player.type}</S.PlayerRole>
                                </S.PlayerInfo>
                            </S.PlayerCard>
                        ))
                    )}
                </S.PlayersGrid>
            </div>
        </S.TeamContainer>
    );
};