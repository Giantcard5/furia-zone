import { 
    Router, 
    Request, 
    Response 
} from 'express';

import { 
    ChatService 
} from '../services/chat.service';

const router = Router();
const chatService = new ChatService();

// Save a new message
router.post('/messages', async (req: Request, res: Response) => {
    try {
        const message = req.body;
        if (!chatService.isUserLoggedIn(message.user.id)) {
            return res.status(401).json({ error: 'User must be logged in to send a message' });
        }
        await chatService.saveMessage(message);
        res.status(201).json({ message: 'Message saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save message' });
    }
});

// Get all messages
router.get('/messages', async (req: Request, res: Response) => {
    try {
        const messages = await chatService.getAllMessages();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

export const chatRouter = router; 