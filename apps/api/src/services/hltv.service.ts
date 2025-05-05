import HLTV from 'hltv';

export const getMatches = async () => {
    try {
        const matches = await HLTV.getMatches();
        return matches;
    } catch (error) {
        throw new Error('Failed to fetch matches');
    }
};

export const getMatchesStats = async ({ startDate, endDate }: { startDate: string, endDate: string }) => {
    try {
        const matches = await HLTV.getMatchesStats({ startDate, endDate });
        return matches;
    } catch (error) {
        throw new Error('Failed to fetch matches stats');
    }
};

export const getMatchById = async (id: number) => {
    try {
        const match = await HLTV.getMatch({ id });
        return match;
    } catch (error) {
        throw new Error('Failed to fetch match');
    }
};

export const getTeamRanking = async () => {
    try {
        const ranking = await HLTV.getTeamRanking();
        return ranking;
    } catch (error) {
        throw new Error('Failed to fetch team ranking');
    }
};

export const getTeamById = async (id: number) => {
    try {
        const team = await HLTV.getTeam({ id });
        return team;
    } catch (error) {
        throw new Error('Failed to fetch team');
    }
};

export const getTeamByName = async (name: string) => {
    try {
        const team = await HLTV.getTeamByName({ name });
        return team;
    } catch (error) {
        throw new Error('Failed to fetch team');
    }
};

export const getPlayerById = async (id: number) => {
    try {
        const player = await HLTV.getPlayer({ id });
        return player;
    } catch (error) {
        throw new Error('Failed to fetch player');
    }
};