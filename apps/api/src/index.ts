import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

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
dotenv.config()

const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(helmet())
app.use(express.json())

app.use('/api/chat', chatRouter)
app.use('/api/hltv', hltvRouter)
app.use('/api/users', userRouter)
app.use('/api/credentials', credentialRouter)

export default app

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server on http://localhost:${port}`));