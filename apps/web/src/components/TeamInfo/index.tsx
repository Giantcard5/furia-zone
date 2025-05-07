'use client'

import {
    useState,
    useEffect
} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
    mockTeamData
} from '@/lib/mock-data';
import {
    apiService
} from '@/lib/api-service';

import * as S from './styles';

interface TeamData {
    players: {
        id: number;
        nickname: string;
        name: string;
        type: string;
    }[];
}

interface PlayerData {
    id: number;
    name: string;
    ign: string;
    image: string;
    type: string;
    statistics: {
        rating: number;
        killsPerRound: number | null;
        headshots: number | null;
        mapsPlayed: number | null;
        deathsPerRound: number | null;
        roundsContributed: number | null;
    };
}

interface ApiResponse<T> {
    data: T;
    error?: string;
}

export function TeamInfo() {
    const { name, logo, stats, description } = mockTeamData;

    const [playersData, setPlayersData] = useState<PlayerData[]>(
        mockTeamData.players.map((player, index) => ({
            id: parseInt(player.id) || index + 1,
            name: player.name,
            ign: player.nickname,
            image: player.image,
            type: player.role,
            statistics: {
                rating: 0,
                killsPerRound: null,
                headshots: null,
                mapsPlayed: null,
                deathsPerRound: null,
                roundsContributed: null
            }
        }))
    );
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     async function fetchTeamData() {
    //         try {
    //             setLoading(true);
    //             const response = await apiService.getTeamData('8297');

    //             if (response.error) {
    //                 throw new Error(response.error);
    //             };

    //             const teamData = response.data as TeamData;

    //             if (teamData?.players) {
    //                 const playerPromises = teamData.players.map((player: { id: number; type: string }) =>
    //                     apiService.getPlayerData(player.id) as Promise<ApiResponse<PlayerData>>
    //                 );

    //                 const playerResponses = await Promise.all(playerPromises);
    //                 const validPlayerData = playerResponses
    //                     .filter(response => !response.error)
    //                     .map((response, index) => ({
    //                         ...response.data,
    //                         type: teamData.players[index].type
    //                     }));

    //                 setPlayersData(validPlayerData);
    //             };
    //         } catch (err) {
    //             console.error('Error fetching team data:', err);
    //         } finally {
    //             setLoading(false);
    //         };
    //     };

    //     fetchTeamData();
    // }, []);

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
                                <S.StatItem key={index} className='loading'>
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
                        Array(6).fill(0).map((_, index) => (
                            <S.PlayerCardLoading key={index} />
                        ))
                    ) : (
                        playersData.map((player) => (
                            <Link href={`/team-info/${player.id}`} key={player.id}>
                                <S.PlayerCard>
                                    <S.PlayerHeader>
                                        <S.PlayerImage>
                                            <Image
                                                src={player.image}
                                                alt={player.name}
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </S.PlayerImage>
                                    </S.PlayerHeader>
                                    <S.PlayerInfo>
                                        <S.PlayerName>{player.name}</S.PlayerName>
                                        <S.PlayerNickname>{player.ign}</S.PlayerNickname>
                                        <S.PlayerRole>{player.type}</S.PlayerRole>
                                    </S.PlayerInfo>
                                </S.PlayerCard>
                            </Link>
                        ))
                    )}
                </S.PlayersGrid>
            </div>
        </S.TeamContainer>
    );
};