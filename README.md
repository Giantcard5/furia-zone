# Furia Zone

This is a monorepo for the Furia Zone project, containing both the front-end (Next.js) and the API (Express/TypeScript) applications.

## Project Structure

```
furia-zone/
├── apps/
│   ├── web/   # Front-end (Next.js)
│   └── api/   # Back-end API (Express)
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Yarn](https://yarnpkg.com/) (v1)

### Install dependencies

```bash
yarn install
```

### Run both front-end and API in development mode

```bash
yarn dev
```
- Front-end: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:3001](http://localhost:3001) (default, see `.env` in `apps/api`)

### Run only one app

```bash
yarn dev:web   # Front-end only
yarn dev:api   # API only
```

### Build both apps

```bash
yarn build
```

### Start both apps in production mode

```bash
yarn start
```

## Environment Variables

- API: Create a `.env` file in `apps/api/` (see `apps/api/README.md` for details)
  - Example:
    ```
    PORT=3001
    ```
- Front-end: Configure as needed in `apps/web/`

## Scripts

- `yarn dev` - Run both front-end and API in development mode
- `yarn build` - Build both front-end and API
- `yarn start` - Start both front-end and API in production mode
- `yarn dev:web` / `yarn dev:api` - Run only the front-end or API in dev mode
- `yarn build:web` / `yarn build:api` - Build only the front-end or API
- `yarn start:web` / `yarn start:api` - Start only the front-end or API in production

## Technologies Used

- **Front-end:** [Next.js](https://nextjs.org/), React, Styled Components
- **API:** [Express](https://expressjs.com/), TypeScript, HLTV API
- **Monorepo:** Yarn Workspaces

## More Info

- See `apps/web/README.md` for front-end details
- See `apps/api/README.md` for API details and endpoints 