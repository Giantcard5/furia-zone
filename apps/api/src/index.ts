import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { 
    hltvRouter 
} from './routes/hltv.routes';
import { 
    chatRouter 
} from './routes/chat.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/hltv', hltvRouter);
app.use('/api/chat', chatRouter);

app.get('/', (req, res) => {
    res.json({ message: 'FURIA ZONE API is running' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});