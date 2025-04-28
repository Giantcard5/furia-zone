import { 
    Router, 
    Request, 
    Response 
} from 'express';

import { 
    UserService 
} from '../services/user.service';

const router = Router();
const userService = new UserService();

// Save a new user
router.post('/', async (req: Request, res: Response) => {
    try {
        const user = req.body;
        await userService.saveUser(user);
        res.status(201).json({ message: 'User saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save user' });
    }
});

// Get all users
router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Check if username exists
router.post('/check-username', async (req: Request, res: Response) => {
    try {
        const { username } = req.body;
        const users = await userService.getAllUsers();
        const usernameExists = users.some(user => user.username.toLowerCase() === username.toLowerCase());
        res.json(usernameExists);
    } catch (error) {
        res.status(500).json({ error: 'Failed to check username' });
    }
});

export const userRouter = router; 