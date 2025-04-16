import HLTV from 'hltv';

export class HltvService {
    // Get all matches
    async getMatches() {
        try {
            const matches = await HLTV.getMatches();
            return matches;
        } catch (error) {
            throw new Error('Failed to fetch matches');
        }
    }

    async getMatchesStats({ startDate, endDate }: { startDate: string, endDate: string }) {
        try {
            const matches = await HLTV.getMatchesStats({ startDate, endDate });
            return matches;
        } catch (error) {
            throw new Error('Failed to fetch matches stats');
        }
    }

    // Get match by ID
    async getMatchById(id: number) {
        try {
            const match = await HLTV.getMatch({ id });
            return match;
        } catch (error) {
            throw new Error('Failed to fetch match');
        }
    }

    // Get team ranking
    async getTeamRanking() {
        try {
            const ranking = await HLTV.getTeamRanking();
            return ranking;
        } catch (error) {
            throw new Error('Failed to fetch team ranking');
        }
    }

    // Get team by ID
    async getTeamById(id: number) {
        try {
            const team = await HLTV.getTeam({ id });
            return team;
        } catch (error) {
            throw new Error('Failed to fetch team');
        }
    }

    // Get team by Name
    async getTeamByName(name: string) {
        try {
            await HLTV.getTeamByName({ name }).then((team) => {
                return team;
            });
        } catch (error) {
            throw new Error('Failed to fetch team');
        }
    }

    // Get player by ID
    async getPlayerById(id: number) {
        try {
            const player = await HLTV.getPlayer({ id });
            return player;
        } catch (error) {
            throw new Error('Failed to fetch player');
        }
    }
} 