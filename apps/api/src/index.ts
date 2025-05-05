import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { 
    hltvRouter 
} from './routes/hltv.routes';
import { 
    chatRouter 
} from './routes/chat.routes';
import { 
    userRouter 
} from './routes/user.routes';
import { 
    credentialRouter 
} from './routes/credential.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/hltv', hltvRouter);
app.use('/api/chat', chatRouter);
app.use('/api/users', userRouter);
app.use('/api/credentials', credentialRouter);

app.get('/', (req, res) => {
    res.json({ message: 'FURIA ZONE API is running' });
});

export default app;