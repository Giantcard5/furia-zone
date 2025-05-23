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

router.post('/', async (req: Request, res: Response) => {
    try {
        const user = req.body;
        await userService.createUser(user);
        res.status(201).json({ message: 'User saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save user' });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

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

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;
        await userService.updateUser(userId, updatedUser);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' });
    }
});

export const userRouter = router; 