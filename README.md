# 🖤 FURIA Fan Zone

A modern, real-time fan zone application built with Next.js for fans of the FURIA esports team. It provides a fully interactive experience with real-time chat, live match tracking, and more — all designed to create a strong fan community around FURIA.

---

## 📌 Project Overview

FURIA Fan Zone is a Next.js 13+ web application following modern frontend architecture. The platform connects FURIA fans in a vibrant and responsive environment where they can chat in real time, follow matches live, explore the team’s lineup, and access information through an FAQ bot.

---

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/furia-fan-zone.git
   cd furia-fan-zone
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

---

## 🛠️ Development Setup

- **Monorepo:** Managed via Turborepo with `apps/web` as the primary frontend app.
- **Framework:** Next.js 13+ with App Router.
- **Languages:** TypeScript.
- **Styling:** styled-components with a custom theme.
- **State Management:** React hooks and custom hooks.
- **Code Quality:** ESLint, Prettier, strict TypeScript settings.

---

## 📁 Project Structure

```
apps/
  web/
    src/
      app/             # Routes and pages using App Router
      components/      # Reusable UI components
      hooks/           # Custom React hooks
      styles/          # Theming and global styles
      services/        # API interaction layer
      layout/          # Layout and navigation components
  api;
    data/              # Mockup Data
    src/               
      routes/          # Routes from API
      services/        # Services from API
```
---

## 🌟 Key Features

### ✅ Real-Time Chat
- Enables users to chat in real time with message persistence.
- Optimistic updates provide a seamless experience.

### ✅ Live Match Tracking
- Shows real-time updates from ongoing matches with polling or sockets.

### ✅ Team Information Display
- Displays detailed info on players, stats, and roles.

### ✅ Upcoming Matches Calendar
- Interactive calendar showing date, time, and opponent.

### ✅ FAQ Bot
- Auto-replies to user queries based on keyword-matching.

### ✅ Sidebar Navigation
- Responsive, mobile-friendly navigation system with route awareness.

---

## 📡 API Integration

The app uses a dedicated service layer to communicate with backend APIs.

### Base URL
```
https://api.furiafan.app/
```

### 📥 GET `/messages`

Fetches all chat messages.

#### Response:
```json
[
  {
    "id": "2025-04-15T12:34:56Z",
    "user": {
      "id": "user123",
      "name": "John",
      "avatar": "/avatars/user123.png",
      "isModerator": true
    },
    "content": "Go FURIA!",
    "timestamp": "2025-04-15T12:34:56Z"
  }
]
```

### 📤 POST `/messages`

Sends a new chat message.

#### Request body:
```json
{
  "id": "2025-04-15T13:00:00Z",
  "user": {
    "id": "current-user",
    "name": "You",
    "avatar": "/default-user.svg",
    "isModerator": false
  },
  "content": "Let's go FURIA!",
  "timestamp": "2025-04-15T13:00:00Z"
}
```

#### Response:
```json
{
  "status": "success",
  "message": "Message posted successfully"
}
```

### Example usage:
```ts
// Fetching messages
const response = await apiService.getMessages();
const messages = response.data.map(msg => ({
  ...msg,
  timestamp: moment(msg.timestamp)
}));

// Posting a message
const newMessage = {
  id: moment().toISOString(),
  user: { id: 'current-user', name: 'You', avatar: '/default-user.svg', isModerator: false },
  content: "Let's go FURIA!",
  timestamp: moment().toISOString()
};
await apiService.postMessage(newMessage);
```

---

## 🧭 Routing System

- Dynamic routing via Next.js App Router.
- Create a new page like this:

```ts
// apps/web/src/app/example/page.tsx
export default function ExamplePage() {
  return (
    <MainLayout>
      <h1>Example</h1>
    </MainLayout>
  );
}
```

---

## 🎨 Styling System

- Component-scoped styles using `styled-components`
- Example:
```ts
export const Container = styled.div`
  padding: 2rem;
  background-color: #000;
  color: #fff;
`;
```

---

## ⚠️ Error Handling

- Graceful fallbacks for failed API calls.
- Custom error boundaries.
- Loading and empty states for asynchronous data.

---

## ⚡ Performance Optimizations

- Code splitting with `dynamic()`
- Lazy loading images
- React memoization hooks (`useMemo`, `useCallback`)
- Caching with SWR or fetch wrapper logic

---

## 👨‍💻 Contribution Guidelines

1. Fork and clone the repository.
2. Create a new feature branch.
3. Run `pnpm lint && pnpm test` before pushing.
4. Open a pull request with detailed context.

---

## 🚀 Deployment

- Recommended: Vercel (zero-config for Next.js)
```bash
pnpm build
pnpm start
```

- Configure environment variables in `.env.production`

---

## 🛠️ Troubleshooting

- Make sure Node.js ≥ 18 and pnpm are installed.
- Check if API base URL is reachable.
- For hydration issues, ensure `styled-components` is correctly set up for SSR.

---

## 📜 License

This project is under the [MIT License](LICENSE).
