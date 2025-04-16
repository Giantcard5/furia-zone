'use client'

import {
    useEffect,
    useState
} from 'react';

import {
    useParams
} from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

import {
    ArrowLeft,
    Trophy,
    Calendar,
    Flag,
    Users
} from 'lucide-react';

import * as S from './styles';

import {
    apiService
} from '@/lib/api-service';

interface PlayerData {
    id: number;
    name: string;
    ign: string;
    image: string;
    age: number;
    country: {
        name: string;
        code: string;
    };
    team: {
        name: string;
        id: number;
    };
    statistics: {
        rating: number | null;
        killsPerRound: string | null;
        headshots: string | null;
        mapsPlayed: string | null;
        deathsPerRound: string | null;
        roundsContributed: string | null;
    };
    achievements: {
        place: string;
        event: {
            name: string;
            id: number;
        };
    }[];
    teams: {
        id: number;
        name: string;
    }[];
}

export function PlayerDetail() {
    const params = useParams();
    const playerId = params?.playerId ? parseInt(params.playerId as string, 10) : null;

    const [player, setPlayer] = useState<PlayerData>({} as PlayerData);
    const [activeTab, setActiveTab] = useState('statistics');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPlayerData() {
            if (!playerId || isNaN(playerId)) return;

            try {
                setLoading(true);
                const response = await apiService.getPlayerData(playerId);

                if (response.error) {
                    throw new Error(response.error);
                }

                const playerData = response.data as PlayerData;
                setPlayer(playerData);
            } catch (err) {
                console.error('Error fetching player data:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchPlayerData();
    }, [playerId]);

    if (!player) {
        return (
            <div>
                <S.BackButton as={Link} href='/team-info'>
                    <ArrowLeft size={16} /> Back to Team
                </S.BackButton>
                <div>Player not found</div>
            </div>
        );
    };

    return (
        loading ? (
            <div>Loading...</div>
        ) : (
            <S.PlayerContainer>
                <div>
                    <S.BackButton as={Link} href='/team-info'>
                        <ArrowLeft size={16} /> Back to Team
                    </S.BackButton>

                    <S.PlayerHeader>
                        <S.PlayerImageContainer>
                            <S.PlayerImage>
                                <Image
                                    src={player.image || 'https://static.hltv.org/images/playerprofile/bodyshot/unknown.png'}
                                    alt={player.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </S.PlayerImage>
                        </S.PlayerImageContainer>

                        <S.PlayerInfo>
                            <S.PlayerName>
                                {player.name} <span>'{player.ign}'</span>
                            </S.PlayerName>
                            <S.PlayerNickname>Player</S.PlayerNickname>

                            <S.PlayerMetaInfo>
                                <S.MetaItem>
                                    <S.MetaIcon>
                                        <Calendar size={16} />
                                    </S.MetaIcon>
                                    <div>
                                        <S.MetaLabel>Age</S.MetaLabel>
                                        <S.MetaValue>{player.age}</S.MetaValue>
                                    </div>
                                </S.MetaItem>

                                <S.MetaItem>
                                    <S.MetaIcon>
                                        <Flag size={16} />
                                    </S.MetaIcon>
                                    <div>
                                        <S.MetaLabel>Country</S.MetaLabel>
                                        <S.MetaValue>{player.country.name}</S.MetaValue>
                                    </div>
                                </S.MetaItem>

                                <S.MetaItem>
                                    <S.MetaIcon>
                                        <Users size={16} />
                                    </S.MetaIcon>
                                    <div>
                                        <S.MetaLabel>Team</S.MetaLabel>
                                        <S.MetaValue>{player.team.name}</S.MetaValue>
                                    </div>
                                </S.MetaItem>

                                <S.MetaItem>
                                    <S.MetaIcon>
                                        <Calendar size={16} />
                                    </S.MetaIcon>
                                    <div>
                                        <S.MetaLabel>Joined</S.MetaLabel>
                                        <S.MetaValue>12/01/2023</S.MetaValue>
                                    </div>
                                </S.MetaItem>
                            </S.PlayerMetaInfo>

                            <S.PlayerBio>A professional is a CS2 pro playing for FURIA Esports, known for his sharp aim and high-impact plays. As the team's, he brings consistency, aggression, and experience to every match, helping FURIA stay competitive on the global stage.</S.PlayerBio>
                        </S.PlayerInfo>
                    </S.PlayerHeader>
                </div>

                <div>
                    <S.TabsContainer>
                        <S.Tab
                            $isActive={activeTab === 'statistics'}
                            onClick={() => setActiveTab('statistics')}
                        >
                            STATISTICS
                        </S.Tab>
                        <S.Tab
                            $isActive={activeTab === 'achievements'}
                            onClick={() => setActiveTab('achievements')}
                        >
                            ACHIEVEMENTS
                        </S.Tab>
                        <S.Tab
                            $isActive={activeTab === 'history'}
                            onClick={() => setActiveTab('history')}
                        >
                            HISTORY
                        </S.Tab>
                    </S.TabsContainer>

                    {activeTab === 'statistics' && (
                        <div>
                            <S.StatsGrid>
                                <S.StatCard>
                                    <S.StatValue>{player.statistics.rating?.toFixed(2) || '-'}</S.StatValue>
                                    <S.StatLabel>Rating</S.StatLabel>
                                </S.StatCard>
                                <S.StatCard>
                                    <S.StatValue>{player.statistics.killsPerRound || '-'}</S.StatValue>
                                    <S.StatLabel>KPR</S.StatLabel>
                                </S.StatCard>
                                <S.StatCard>
                                    <S.StatValue>{player.statistics.headshots || '-'}</S.StatValue>
                                    <S.StatLabel>HS%</S.StatLabel>
                                </S.StatCard>
                                <S.StatCard>
                                    <S.StatValue>{player.statistics.mapsPlayed || '-'}</S.StatValue>
                                    <S.StatLabel>Maps</S.StatLabel>
                                </S.StatCard>
                                <S.StatCard>
                                    <S.StatValue>{player.statistics.deathsPerRound || '-'}</S.StatValue>
                                    <S.StatLabel>DPR</S.StatLabel>
                                </S.StatCard>
                                <S.StatCard>
                                    <S.StatValue>{player.statistics.roundsContributed || '-'}</S.StatValue>
                                    <S.StatLabel>Rounds</S.StatLabel>
                                </S.StatCard>
                            </S.StatsGrid>
                        </div>
                    )}

                    {activeTab === 'achievements' && (
                        <S.AchievementsList>
                            {player.achievements.map((achievement, index) => (
                                <S.AchievementItem key={index}>
                                    <S.AchievementIcon>
                                        <Trophy size={20} />
                                    </S.AchievementIcon>
                                    <S.AchievementInfo>
                                        <S.AchievementTitle>{achievement.event.name}</S.AchievementTitle>
                                        <S.AchievementMeta>
                                            <span>{achievement.place}</span>
                                        </S.AchievementMeta>
                                    </S.AchievementInfo>
                                </S.AchievementItem>
                            ))}
                        </S.AchievementsList>
                    )}

                    {activeTab === 'history' && (
                        <S.HistoryList>
                            {player.teams?.map((item, index) => (
                                <S.HistoryItem key={index}>
                                    <S.HistoryDate>TEAM</S.HistoryDate>
                                    <S.HistoryContent>
                                        <S.HistoryTitle>{item.name}</S.HistoryTitle>
                                    </S.HistoryContent>
                                </S.HistoryItem>
                            ))}
                        </S.HistoryList>
                    )}
                </div>
            </S.PlayerContainer>
        )
    );
};