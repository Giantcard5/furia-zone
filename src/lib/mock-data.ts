export const mockMessages = [
    {
        id: "1",
        user: {
            id: "user1",
            name: "FalleN",
            avatar: "/players/fallen.webp",
            isModerator: true,
        },
        content: "Welcome to the FURIA fan chat! The match against Liquid starts in 15 minutes.",
        timestamp: "2023-04-14T14:30:00Z",
    },
    {
        id: "2",
        user: {
            id: "user2",
            name: "CSGOFan123",
            avatar: "",
            isModerator: false,
        },
        content: "So excited for this match! FURIA has been on fire lately.",
        timestamp: "2023-04-14T14:32:00Z",
    },
    {
        id: "3",
        user: {
            id: "user3",
            name: "BrazilCS",
            avatar: "",
            isModerator: false,
        },
        content: "I think KSCERATO is going to pop off today.",
        timestamp: "2023-04-14T14:33:00Z",
    },
    {
        id: "4",
        user: {
            id: "user4",
            name: "FURIASupporter",
            avatar: "",
            isModerator: false,
        },
        content: "What map do you think they'll pick first?",
        timestamp: "2023-04-14T14:35:00Z",
    },
    {
        id: "5",
        user: {
            id: "user5",
            name: "TacticalCS",
            avatar: "",
            isModerator: false,
        },
        content: "Probably Mirage or Inferno. They've been strong on both lately.",
        timestamp: "2023-04-14T14:36:00Z",
    },
    {
        id: "6",
        user: {
            id: "user1",
            name: "FalleN",
            avatar: "/players/fallen.webp",
            isModerator: true,
        },
        content: "The teams are now in the server. Match will start shortly!",
        timestamp: "2023-04-14T14:40:00Z",
    },
];

export const mockMatchData = {
    id: "match-1",
    teams: [
        {
            id: "team-1",
            name: "FURIA",
            logo: "/placeholder.svg?height=120&width=120",
            score: 12,
            players: [
                {
                    id: "player-1",
                    name: "Andrei Piovezan",
                    nickname: "arT",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 18,
                        deaths: 14,
                        assists: 5,
                        adr: 85.2,
                        hltv: 1.24,
                    },
                },
                {
                    id: "player-2",
                    name: "Kaike Cerato",
                    nickname: "KSCERATO",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 22,
                        deaths: 10,
                        assists: 3,
                        adr: 92.7,
                        hltv: 1.68,
                    },
                },
                {
                    id: "player-3",
                    name: "Yuri Santos",
                    nickname: "yuurih",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 19,
                        deaths: 12,
                        assists: 6,
                        adr: 88.5,
                        hltv: 1.42,
                    },
                },
                {
                    id: "player-4",
                    name: "André Abreu",
                    nickname: "drop",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 15,
                        deaths: 13,
                        assists: 4,
                        adr: 75.3,
                        hltv: 1.12,
                    },
                },
                {
                    id: "player-5",
                    name: "Rafael Costa",
                    nickname: "saffee",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 17,
                        deaths: 11,
                        assists: 2,
                        adr: 79.8,
                        hltv: 1.35,
                    },
                },
            ],
        },
        {
            id: "team-2",
            name: "Liquid",
            logo: "/placeholder.svg?height=120&width=120",
            score: 9,
            players: [
                {
                    id: "player-6",
                    name: "Jonathan Jablonowski",
                    nickname: "EliGE",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 16,
                        deaths: 17,
                        assists: 4,
                        adr: 76.2,
                        hltv: 0.98,
                    },
                },
                {
                    id: "player-7",
                    name: "Keith Markovic",
                    nickname: "NAF",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 20,
                        deaths: 16,
                        assists: 5,
                        adr: 84.5,
                        hltv: 1.22,
                    },
                },
                {
                    id: "player-8",
                    name: "Josh Nissan",
                    nickname: "oSee",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 14,
                        deaths: 18,
                        assists: 3,
                        adr: 68.7,
                        hltv: 0.85,
                    },
                },
                {
                    id: "player-9",
                    name: "Nick Cannella",
                    nickname: "nitr0",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 12,
                        deaths: 19,
                        assists: 7,
                        adr: 65.3,
                        hltv: 0.78,
                    },
                },
                {
                    id: "player-10",
                    name: "Mareks Gaļinskis",
                    nickname: "YEKINDAR",
                    avatar: "/placeholder.svg?height=40&width=40",
                    stats: {
                        kills: 18,
                        deaths: 15,
                        assists: 4,
                        adr: 82.1,
                        hltv: 1.15,
                    },
                },
            ],
        },
    ],
    currentMap: {
        name: "Mirage",
        status: "in-progress",
        rounds: {
            current: 21,
            total: 30,
        },
    },
    tournament: {
        name: "PGL Major Copenhagen 2024",
        logo: "/placeholder.svg?height=40&width=40",
    },
};

export const mockHighlights = [
    {
        id: "highlight-1",
        title: "KSCERATO 4K clutch on B site",
        thumbnail: "/placeholder.svg?height=200&width=350",
        time: "10 minutes ago",
        tags: ["Clutch", "4K"],
    },
    {
        id: "highlight-2",
        title: "arT aggressive AWP play mid",
        thumbnail: "/placeholder.svg?height=200&width=350",
        time: "15 minutes ago",
        tags: ["AWP", "Entry"],
    },
    {
        id: "highlight-3",
        title: "yuurih triple kill defending A site",
        thumbnail: "/placeholder.svg?height=200&width=350",
        time: "22 minutes ago",
        tags: ["Triple Kill", "Defense"],
    },
    {
        id: "highlight-4",
        title: "saffee wallbang headshot on catwalk",
        thumbnail: "/placeholder.svg?height=200&width=350",
        time: "30 minutes ago",
        tags: ["Wallbang", "Headshot"],
    },
];

export const mockTeamData = {
    name: "FURIA",
    logo: "/icon-gold.png",
    description:
        "FURIA Esports is a Brazilian professional esports organization founded in 2017. Their CS:GO team has become one of the top teams in the world, known for their aggressive playstyle and innovative strategies.",
    stats: [
        { label: "World Rank", value: "#18" },
        { label: "Tournaments Won", value: "4" },
        { label: "Win Rate", value: "38.1%" },
        { label: "Maps Played", value: "342" },
    ],
    players: [
        {
            id: "player-1",
            name: "Gabriel Toledo",
            nickname: "FalleN",
            role: "AWPer",
            image: "/players/fallen.webp",
        },
        {
            id: "player-2",
            name: "Kaike Cerato",
            nickname: "KSCERATO",
            role: "In-game Leader",
            image: "/players/kscerato.webp",
        },
        {
            id: "player-3",
            name: "Yuri Santos",
            nickname: "yuurih",
            role: "Rifler",
            image: "/players/yuurih.webp",
        },
        {
            id: "player-4",
            name: "Felipe Medeiros",
            nickname: "skullz",
            role: "Support",
            image: "/players/skullz.webp",
        },
        {
            id: "player-5",
            name: "Danil Golubenko",
            nickname: "molody",
            role: "AWPer",
            image: "/players/molody.webp",
        },
        {
            id: "player-6",
            name: "Marcelo Cespedes",
            nickname: "chelo",
            role: "Bench",
            image: "/players/chelo.webp",
        },
        {
            id: "player-7",
            name: "Sid Macedo",
            nickname: "sidde",
            role: "Coach",
            image: "/players/sidde.webp",
        },
    ],
};

export const mockBotResponses = [
    {
        keywords: ["next match", "upcoming match", "when is", "schedule"],
        response: "FURIA's next match is against Liquid tomorrow at 3:00 PM EST in the PGL Major Copenhagen 2024.",
    },
    {
        keywords: ["top fragger", "best player", "most kills"],
        response:
            "Currently, KSCERATO is the top fragger for FURIA with an average of 22.7 kills per map in the last 5 matches.",
    },
    {
        keywords: ["tournament", "results", "recent matches", "last match"],
        response: "FURIA recently finished 2nd place at IEM Katowice 2023 and won the BLAST Premier Spring Groups 2023.",
    },
    {
        keywords: ["roster", "team members", "players", "lineup"],
        response: "The current FURIA CS:GO roster consists of arT (IGL), KSCERATO, yuurih, drop, and saffee.",
    },
    {
        keywords: ["coach", "coaching staff", "manager"],
        response: 'FURIA\'s head coach is Nicholas "guerri" Nogueira, who has been with the team since 2018.',
    },
    {
        keywords: ["history", "founded", "origin", "started"],
        response:
            "FURIA Esports was founded in 2017 in Brazil by Jaime Pádua and André Akkari. The CS:GO division was established in the same year.",
    },
    {
        keywords: ["playstyle", "strategy", "tactics", "play style"],
        response:
            "FURIA is known for their aggressive playstyle, often led by arT's unpredictable entry fragging. They frequently use fast-paced strategies and innovative utility usage.",
    },
    {
        keywords: ["hello", "hi", "hey", "greetings"],
        response: "Hello! I'm the FURIA FAQ Bot. How can I help you with information about the FURIA CS:GO team today?",
    },
];

export const mockUpcomingMatches = [
    {
        id: "upcoming-1",
        team1: {
            name: "FURIA",
            logo: "/icon-black.png",
        },
        team2: {
            name: "Liquid",
            logo: "/placeholder.svg?height=60&width=60",
        },
        date: "APR 16",
        fullDate: "April 16, 2024",
        time: "15:00 CEST",
        tournament: "PGL Major Copenhagen 2024",
        matchType: "BO3",
        location: "Copenhagen, Denmark",
    },
    {
        id: "upcoming-2",
        team1: {
            name: "FURIA",
            logo: "/icon-black.png",
        },
        team2: {
            name: "Complexity",
            logo: "/placeholder.svg?height=60&width=60",
        },
        date: "APR 18",
        fullDate: "April 18, 2024",
        time: "18:30 CEST",
        tournament: "PGL Major Copenhagen 2024",
        matchType: "BO3",
        location: "Copenhagen, Denmark",
    },
    {
        id: "upcoming-3",
        team1: {
            name: "NAVI",
            logo: "/placeholder.svg?height=60&width=60",
        },
        team2: {
            name: "FURIA",
            logo: "/icon-black.png",
        },
        date: "APR 20",
        fullDate: "April 20, 2024",
        time: "12:00 CEST",
        tournament: "PGL Major Copenhagen 2024",
        matchType: "BO3",
        location: "Copenhagen, Denmark",
    },
    {
        id: "upcoming-4",
        team1: {
            name: "FURIA",
            logo: "/icon-black.png",
        },
        team2: {
            name: "G2",
            logo: "/placeholder.svg?height=60&width=60",
        },
        date: "APR 22",
        fullDate: "April 22, 2024",
        time: "20:00 CEST",
        tournament: "PGL Major Copenhagen 2024",
        matchType: "BO3",
        location: "Copenhagen, Denmark",
    },
    {
        id: "upcoming-5",
        team1: {
            name: "MOUZ",
            logo: "/placeholder.svg?height=60&width=60",
        },
        team2: {
            name: "FURIA",
            logo: "/icon-black.png",
        },
        date: "APR 25",
        fullDate: "April 25, 2024",
        time: "16:45 CEST",
        tournament: "PGL Major Copenhagen 2024",
        matchType: "BO3",
        location: "Copenhagen, Denmark",
    },
    {
        id: "upcoming-6",
        team1: {
            name: "FURIA",
            logo: "/icon-black.png",
        },
        team2: {
            name: "FaZe",
            logo: "/placeholder.svg?height=60&width=60",
        },
        date: "APR 28",
        fullDate: "April 28, 2024",
        time: "19:15 CEST",
        tournament: "PGL Major Copenhagen 2024",
        matchType: "BO3",
        location: "Copenhagen, Denmark",
    },
];