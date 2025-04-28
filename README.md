# 🖤 FURIA Fan Zone - Technical Documentation

A modern real-time web application developed to connect fans of the **FURIA** esports team. It offers a fully interactive experience with live chat, real-time match tracking, and more — all designed to strengthen the FURIA community.

---

## 📉 General Overview

**FURIA Zone** is a **full-stack** application composed of:

- A **Next.js**-based frontend.
- An **Express.js**-based backend.

The platform integrates data from **HLTV** (a news and statistics platform for CS:GO) and includes features for user management, real-time chat, and credential handling.

### 🎮 Key Features

#### Live Match Tracking
- Real-time match scoreboards
- Live match statistics
- Player performance tracking
- Match highlights and replays
- Upcoming matches schedule

#### Team Information
- Detailed team profiles
- Player statistics and rankings
- Team achievements and history
- Sponsor information
- Team news and updates

#### Interactive Community
- Real-time chat system
- User profiles and customization
- Moderator capabilities
- Community engagement features
- Match predictions and discussions

#### AI-Powered Assistant
- FAQ chatbot for quick answers
- Match statistics analysis
- Player performance insights
- Team strategy discussions
- Historical data queries

### 🎯 Target Audience
- FURIA esports team fans
- CS:GO enthusiasts
- Esports bettors and analysts
- Gaming community members
- Sports statistics enthusiasts

### 🌟 Unique Selling Points
- Real-time match tracking and statistics
- Integrated HLTV data for comprehensive coverage
- AI-powered chatbot for instant information
- Community-driven content and discussions
- Modern, responsive user interface
- Secure user authentication and profiles

---

## 🚀 Technologies Used

### Frontend
- **Framework:** Next.js 15.3.0
  - App Router for modern routing
  - Server-side rendering for SEO
  - API routes for backend integration
- **Language:** TypeScript
  - Strict type checking
  - Interface definitions
  - Type-safe API calls
- **UI Library:** React 19
  - Functional components
  - Custom hooks
  - Context API for state management
- **Styling:** Styled Components 6.1.17
  - Theme provider
  - Global styles
  - Component-specific styling
- **Icons:** Lucide React
  - Modern, consistent icon set
  - Customizable icons
  - Lightweight implementation
- **Date Handling:** Moment.js
  - Date formatting
  - Time calculations
  - Timezone support
- **Development Tools:** TypeScript, Node.js
  - ESLint for code quality
  - Prettier for formatting
  - Hot module replacement

### Backend
- **Runtime:** Node.js
  - Event-driven architecture
  - Non-blocking I/O
  - Scalable performance
- **Framework:** Express.js 4.18.2
  - RESTful API design
  - Middleware support
  - Route handling
- **Language:** TypeScript
  - Type safety
  - Interface definitions
  - Service layer typing
- **API Integration:** 
  - Axios for HTTP requests
  - HLTV API for CS:GO data
  - Rate limiting
  - Error handling
- **Development Tools:** 
  - ts-node-dev for development
  - TypeScript for type checking
  - Nodemon for auto-reload
- **Middleware:** 
  - CORS for cross-origin requests
  - dotenv for environment variables
  - Body parsing
  - Error handling
  - Authentication

### Development Environment
- **Package Manager:** pnpm
  - Workspace support
  - Faster installation
  - Disk space efficiency
- **Version Control:** Git
  - Branch management
  - Feature development
  - Version tracking
- **Code Quality:**
  - ESLint configuration
  - Prettier formatting
  - TypeScript strict mode
  - Code review process

---

## 📁 Project Structure

### Frontend - Next.js

```
apps/web/
├── src/
│   ├── app/          # App Router pages
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions and configurations
│   ├── provider/     # Context providers
│   ├── styles/       # Global styles and theme
│   └── types/        # TypeScript type definitions
├── public/              # Static assets
└── next.config.ts       # Next.js configuration
```

### Backend - Express.js API

```
apps/api/
├── src/
│   ├── routes/       # API route handlers
│   ├── services/     # Business logic
│   └── index.ts      # Application entry point
├── data/                # Mocked data storage
```

### Key Components Description

#### Frontend Components
- **Auth Components**: Handle user authentication and registration
- **Chat Components**: Real-time chat interface with message history
- **Match Components**: Live match tracking and statistics
- **Team Components**: Team and player information display
- **Profile Components**: User profile management
- **Layout Components**: Page structure and navigation

#### Backend Services
- **Chat Service**: Message handling and real-time updates
- **User Service**: User management and profile data
- **HLTV Service**: CS:GO match and team data integration
- **Credential Service**: Authentication and security

---

## 🔧 Code Quality Practices

### Frontend
- Strict TypeScript usage
- Component-based architecture
- Clear separation of concerns
- Modern React practices (hooks, context)

### Backend
- Modular architecture
- Environment variable management
- Centralized error handling
- Service-based business logic

---

## 🚧 Installation & Development Environment

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/furia-zone.git
   cd furia-zone
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run development server:**
   ```bash
   pnpm dev
   ```

**Requirements:**
- Node.js ≥ 18
- pnpm

**Monorepo:**
- Managed via **Turborepo**.
- Concurrent frontend and backend development supported.

---

## 📊 Build and Deployment Process

**Frontend:**
- Next.js build process.

**Backend:**
- TypeScript compilation.

**Recommended Deployment:**
- **Vercel** for frontend.
- **Render**, **Railway**, or **VPS** for backend.

**Commands:**
```bash
pnpm build
pnpm start
```

**Environment Configuration:**
- Create a `.env.production` with necessary environment variables.

---

## 📡 API Integration

The app uses a dedicated service layer to communicate with backend APIs.

### Base URL
```
http://localhost:3001/api
```

### HLTV Endpoints

#### 📥 GET `/hltv/matches/stats/:startDate/:endDate`
Fetches match statistics for a date range.

```typescript
// Example usage
const startDate = '2024-04-01';
const endDate = '2024-04-30';
const response = await apiService.getMatchesStats(startDate, endDate);
```

#### 📥 GET `/hltv/matches/:id`
Fetches detailed information about a specific match.

```typescript
// Example usage
const matchId = 12345;
const match = await apiService.getMatchById(matchId);
```

#### 📥 GET `/hltv/teams/:id`
Fetches information about a specific team.

```typescript
// Example usage
const teamId = 789;
const team = await apiService.getTeamById(teamId);
```

#### 📥 GET `/hltv/players/:id`
Fetches information about a specific player.

```typescript
// Example usage
const playerId = 456;
const player = await apiService.getPlayerById(playerId);
```

### User Management

#### 📤 POST `/users`
Creates a new user.

```typescript
// Example usage
const newUser = {
  id: 'user123',
  username: 'furiaFan',
  email: 'fan@example.com',
  avatar: '/avatars/default.png',
  isModerator: false
};
await apiService.createUser(newUser);
```

#### 📥 GET `/users`
Fetches all users.

```typescript
// Example usage
const users = await apiService.getAllUsers();
```

#### 📤 POST `/users/check-username`
Checks if a username is available.

```typescript
// Example usage
const isAvailable = await apiService.checkUsername('furiaFan');
```

#### 📤 PUT `/users/:id`
Updates user information.

```typescript
// Example usage
const userId = 'user123';
const updates = {
  username: 'newUsername',
  avatar: '/avatars/new.png'
};
await apiService.updateUser(userId, updates);
```

### Credentials

#### 📤 POST `/credentials`
Saves new credentials.

```typescript
// Example usage
const credentials = {
  email: 'user@example.com',
  password: 'hashedPassword',
  userId: 'user123'
};
await apiService.saveCredentials(credentials);
```

#### 📥 GET `/credentials`
Fetches all credentials.

```typescript
// Example usage
const credentials = await apiService.getAllCredentials();
```

#### 📤 POST `/credentials/check-email`
Checks if an email is already registered.

```typescript
// Example usage
const emailExists = await apiService.checkEmail('user@example.com');
```

### Chat System

#### 📤 POST `/chat/messages`
Sends a new chat message.

```typescript
// Example usage
const newMessage = {
  id: moment().toISOString(),
  user: {
    id: 'user123',
    name: 'FuriaFan',
    avatar: '/avatars/user123.png',
    isModerator: false
  },
  content: "Let's go FURIA!",
  timestamp: moment().toISOString()
};
await apiService.postMessage(newMessage);
```

#### 📥 GET `/chat/messages`
Fetches all chat messages.

```typescript
// Example usage
const messages = await apiService.getMessages();
const formattedMessages = messages.map(msg => ({
  ...msg,
  timestamp: moment(msg.timestamp)
}));
```

### Error Handling

All API endpoints follow a consistent error handling pattern:

```typescript
try {
  const response = await apiService.someEndpoint();
  // Handle success
} catch (error) {
  // Handle error
  console.error('API Error:', error.response?.data?.error || error.message);
}
```

### TypeScript Interfaces

```typescript
interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  isModerator: boolean;
}

interface Message {
  id: string;
  user: User;
  content: string;
  timestamp: string;
}

interface Match {
  id: number;
  team1: string;
  team2: string;
  score: string;
  date: string;
  map: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
  players: Player[];
}

interface Player {
  id: number;
  name: string;
  nickname: string;
  avatar: string;
  team: string;
}
```

---

## 🌎 Best Practices and Future Improvements

### Current Best Practices
- Organized monorepo structure
- Extensive TypeScript usage
- Modern frameworks and architecture
- Clear separation of concerns
- External API integration

---

## 👤 Contribution Guidelines

1. Fork and clone the repository.
2. Create a feature branch.
3. Run `pnpm lint && pnpm test` before pushing.
4. Open a Pull Request with detailed context.

---

## 📺 License

This project is licensed under the [MIT License](LICENSE).