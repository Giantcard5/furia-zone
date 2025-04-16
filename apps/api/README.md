# HLTV API

A REST API built with TypeScript and Express that provides access to HLTV data and chat functionality.

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running the API

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm run build
npm start
```

## API Endpoints

### HLTV Data
- `GET /api/hltv/matches` - Get all matches
- `GET /api/hltv/matches/:id` - Get match by ID
- `GET /api/hltv/teams/ranking` - Get team ranking
- `GET /api/hltv/teams/:id` - Get team by ID
- `GET /api/hltv/players/:id` - Get player by ID

### Chat
- `POST /api/chat/messages` - Save a new message
- `GET /api/chat/messages` - Get all messages
- `GET /api/chat/messages/user/:userId` - Get messages by user ID

#### Message Format
```typescript
interface User {
    id: string;
    name: string;
    avatar: string;
    isModerator: boolean;
}

interface Message {
    id: string;
    user: User;
    content: string;
    timestamp: string;
}
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
PORT=3001
```

## Error Handling

The API returns appropriate HTTP status codes and error messages in case of failures:
- 200: Success
- 201: Created
- 500: Server error
- 404: Not found

## Rate Limiting

Please note that the HLTV package has rate limiting built-in to prevent IP bans. Make sure to handle requests appropriately in your application. 