import { 
    Router, 
    Request, 
    Response 
} from 'express';

import { 
    CredentialService 
} from '../services/credential.service';

const router = Router();
const credentialService = new CredentialService();

// Save a new credential
router.post('/', async (req: Request, res: Response) => {
    try {
        const credential = req.body;
        await credentialService.createCredential(credential);
        res.status(201).json({ message: 'Credential saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save credential' });
    }
});

// Get all credentials
router.get('/', async (req: Request, res: Response) => {
    try {
        const credentials = await credentialService.getAllCredentials();
        res.json(credentials);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch credentials' });
    }
});

// Check if email exists
router.post('/check-email', async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const credentials = await credentialService.getAllCredentials();
        const emailExists = credentials.some(cred => cred.email.toLowerCase() === email.toLowerCase());
        res.json(emailExists);
    } catch (error) {
        res.status(500).json({ error: 'Failed to check email' });
    }
});

export const credentialRouter = router; 