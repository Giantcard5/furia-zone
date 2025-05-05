import { 
    Router, 
    Request, 
    Response 
} from 'express';

import { 
    getMatchesStats,
    getMatchById,
    getTeamById,
    getPlayerById
} from '../services/hltv.service';

const router = Router();

router.get('/matches/stats/:startDate/:endDate', async (req: Request, res: Response) => {
    try {
        const matches = await getMatchesStats({ startDate: req.params.startDate.toString(), endDate: req.params.endDate.toString() });
        res.json(matches);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch matches stats' });
    }
});

router.get('/matches/:id', async (req: Request, res: Response) => { 
    try {
        const match = await getMatchById(Number(req.params.id));
        res.json(match);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch match' });
    }
});

router.get('/teams/:id', async (req: Request, res: Response) => {
    try {
        const team = await getTeamById(Number(req.params.id));
        res.json(team);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch team' });
    }
});

router.get('/players/:id', async (req: Request, res: Response) => {
    try {
        const player = await getPlayerById(Number(req.params.id));
        res.json(player);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch player' });
    }
});

export const hltvRouter = router; 