'use client'

import * as S from './styles';

interface Player {
    id: string
    name: string
    nickname: string
    avatar: string
    stats: {
        kills: number
        deaths: number
        assists: number
        adr: number
        hltv: number
    }
};

interface Team {
    id: string
    name: string
    logo: string
    score: number
    players: Player[]
};

interface MatchData {
    id: string
    teams: Team[]
};

interface PlayerStatsProps {
    matchData: MatchData
};

export function PlayerStats({ matchData }: PlayerStatsProps) {
    return (
        <S.StatsContainer>
            {matchData.teams.map((team, index) => (
                <S.TeamStatsContainer key={team.id}>
                    <S.TeamHeader $isFuria={team.name === 'FURIA'}>
                        <S.TeamName $isFuria={team.name === 'FURIA'}>{team.name}</S.TeamName>
                    </S.TeamHeader>

                    <S.StatsTable>
                        <S.Table>
                            <S.TableHead>
                                <S.TableRow>
                                    <S.TableHeader>PLAYER</S.TableHeader>
                                    <S.TableHeader>K</S.TableHeader>
                                    <S.TableHeader>D</S.TableHeader>
                                    <S.TableHeader>A</S.TableHeader>
                                    <S.TableHeader>K/D</S.TableHeader>
                                    <S.TableHeader>ADR</S.TableHeader>
                                    <S.TableHeader>HLTV</S.TableHeader>
                                </S.TableRow>
                            </S.TableHead>
                            <tbody>
                                {team.players &&
                                    team.players.map((player) => {
                                        const kdRatio = (player.stats.kills / Math.max(player.stats.deaths, 1)).toFixed(2)

                                        return (
                                            <S.TableRow key={player.id}>
                                                <S.TableCell>
                                                    <S.PlayerName>{player.nickname}</S.PlayerName>
                                                </S.TableCell>
                                                <S.TableCell>
                                                    {player.stats.kills >= 20 ? (
                                                        <S.StatHighlight>{player.stats.kills}</S.StatHighlight>
                                                    ) : (
                                                        player.stats.kills
                                                    )}
                                                </S.TableCell>
                                                <S.TableCell>{player.stats.deaths}</S.TableCell>
                                                <S.TableCell>{player.stats.assists}</S.TableCell>
                                                <S.TableCell>
                                                    {Number.parseFloat(kdRatio) >= 1.5 ? <S.StatHighlight>{kdRatio}</S.StatHighlight> : kdRatio}
                                                </S.TableCell>
                                                <S.TableCell>{player.stats.adr}</S.TableCell>
                                                <S.TableCell>
                                                    {player.stats.hltv >= 1.3 ? (
                                                        <S.StatHighlight>{player.stats.hltv.toFixed(2)}</S.StatHighlight>
                                                    ) : (
                                                        player.stats.hltv.toFixed(2)
                                                    )}
                                                </S.TableCell>
                                            </S.TableRow>
                                        )
                                    })}
                            </tbody>
                        </S.Table>
                    </S.StatsTable>
                </S.TeamStatsContainer>
            ))}
        </S.StatsContainer>
    )
}
