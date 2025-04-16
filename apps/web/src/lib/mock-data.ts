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

export const matchStatus = {
    isLive: false
};

export const mockMatchData = {
    id: "match-1",
    teams: [
        {
            id: "team-1",
            name: "FURIA",
            logo: "/icon-black.png",
            score: 12,
            players: [
                {
                    id: "player-1",
                    name: "Andrei Piovezan",
                    nickname: "arT",
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
            logo: "https://www.hltv.org/img/static/team/placeholder.svg",
            score: 9,
            players: [
                {
                    id: "player-6",
                    name: "Jonathan Jablonowski",
                    nickname: "EliGE",
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
                    avatar: "https://static.hltv.org/images/playerprofile/bodyshot/unknown.png",
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
            total: 24,
        },
    },
    tournament: {
        name: "PGL Major Copenhagen 2024",
        logo: "https://www.hltv.org/img/static/team/placeholder.svg",
    },
};

export const mockLastMatchData = {
    id: "last-match-1",
    date: "April 12, 2024",
    result: "win",
    teams: [
        {
            id: "team-1",
            name: "FURIA",
            logo: "/icon-black.png",
            score: 16,
        },
        {
            id: "team-2",
            name: "Cloud9",
            logo: "https://www.hltv.org/img/static/team/placeholder.svg",
            score: 12,
        },
    ],
    maps: [
        {
            name: "Inferno",
            score: [16, 12],
        },
        {
            name: "Nuke",
            score: [13, 16],
        },
        {
            name: "Mirage",
            score: [16, 10],
        },
    ],
    tournament: {
        name: "ESL Pro League Season 19",
        logo: "https://www.hltv.org/img/static/team/placeholder.svg",
    },
    mvp: {
        id: "player-2",
        name: "Kaike Cerato",
        nickname: "KSCERATO",
        avatar: "/players/kscerato.webp",
        stats: {
            kills: 68,
            deaths: 42,
            rating: 1.47,
        },
    },
    highlights: [
        {
            id: "highlight-last-1",
            title: "KSCERATO ace on Inferno",
            thumbnail: "https://www.hltv.org/img/static/team/placeholder.svg",
            time: "Map 1, Round 24",
        },
        {
            id: "highlight-last-2",
            title: "yuurih clutch 1v3 on Mirage",
            thumbnail: "https://www.hltv.org/img/static/team/placeholder.svg",
            time: "Map 3, Round 18",
        },
        {
            id: "highlight-last-3",
            title: "arT aggressive AWP play on Nuke",
            thumbnail: "https://www.hltv.org/img/static/team/placeholder.svg",
            time: "Map 2, Round 12",
        },
    ],
};

export const mockHighlights = [
    {
        id: "highlight-1",
        title: "KSCERATO 4K clutch on B site",
        time: "10 minutes ago",
        tags: ["Clutch", "4K"],
    },
    {
        id: "highlight-2",
        title: "arT aggressive AWP play mid",
        time: "15 minutes ago",
        tags: ["AWP", "Entry"],
    },
    {
        id: "highlight-3",
        title: "yuurih triple kill defending A site",
        time: "22 minutes ago",
        tags: ["Triple Kill", "Defense"],
    },
    {
        id: "highlight-4",
        title: "saffee wallbang headshot on catwalk",
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
            image: "/players/molodoy.webp",
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
    [
        {
            "keywords": ["next match", "upcoming match", "when is", "schedule", "próximo jogo", "quando é o próximo jogo", "próxima partida"],
            "response": "Ainda não tenho informações sobre o próximo jogo da FURIA. Mas você pode perguntar sobre o elenco, treinador ou história da equipe."
        },
        {
            "keywords": ["top fragger", "best player", "most kills", "quem é o top fragger", "melhor jogador", "mais abates"],
            "response": "Atualmente, o top fragger da FURIA é o KSCERATO, com um rating de 1.19 nos ultimos 1310 jogos."
        },
        {
            "keywords": ["tournament", "results", "recent matches", "last match", "resultado do último torneio", "último resultado", "último torneio", "última partida"],
            "response": "A FURIA ficou em 1º lugar no Elisa Masters Espoo 2023 e venceu o BLAST Premier Spring Groups 2023 recentemente."
        },
        {
            "keywords": ["roster", "team members", "players", "lineup", "elenco atual", "jogadores", "time da FURIA", "quem joga"],
            "response": "O elenco atual da FURIA no CS2 é composto por: Fallen, KSCERATO, yuurih, skullz e molodoy."
        },
        {
            "keywords": ["coach", "coaching staff", "manager", "técnico", "treinador", "quem é o técnico"],
            "response": "O treinador principal da FURIA é Sid \"Sid Macedo\" Macedo, que está com a equipe desde 2024."
        },
        {
            "keywords": ["history", "founded", "origin", "started", "história", "origem", "fundação", "quando foi criada"],
            "response": "A FURIA Esports foi fundada em 2017 no Brasil por Jaime Pádua e André Akkari. A divisão de CS:GO foi criada no mesmo ano."
        },
        {
            "keywords": ["playstyle", "strategy", "tactics", "play style", "estilo de jogo", "tática", "estratégia"],
            "response": "A FURIA é conhecida por seu estilo de jogo agressivo, liderado pelas entradas imprevisíveis do arT. A equipe utiliza estratégias rápidas e uso criativo de utilitários."
        },
        {
            "keywords": ["hello", "hi", "hey", "greetings", "olá", "oi", "e aí", "saudações"],
            "response": "Olá! Eu sou o FURIA FAQ Bot. Como posso te ajudar com informações sobre o time de CS:GO da FURIA hoje?"
        }
    ]
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
            logo: "https://www.hltv.org/img/static/team/placeholder.svg",
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
            logo: "https://www.hltv.org/img/static/team/placeholder.svg",
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
            logo: "https://www.hltv.org/img/static/team/placeholder.svg",
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
            logo: "https://www.hltv.org/img/static/team/placeholder.svg",
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
            logo: "https://www.hltv.org/img/static/team/placeholder.svg",
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
            logo: "https://www.hltv.org/img/static/team/placeholder.svg",
        },
        date: "APR 28",
        fullDate: "April 28, 2024",
        time: "19:15 CEST",
        tournament: "PGL Major Copenhagen 2024",
        matchType: "BO3",
        location: "Copenhagen, Denmark",
    },
];

export const mockPlayerDetails = [
    {
        "id": 2023,
        "name": "Gabriel Toledo",
        "ign": "FalleN",
        "image": "https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a",
        "age": 33,
        "twitch": "https://www.twitch.tv/gafallen",
        "instagram": "https://www.instagram.com/fallen",
        "country": {
            "name": "Brazil",
            "code": "BR"
        },
        "team": {
            "name": "FURIA",
            "id": 8297
        },
        "statistics": {
            "rating": 0.97,
            "killsPerRound": null,
            "headshots": null,
            "mapsPlayed": null,
            "deathsPerRound": null,
            "roundsContributed": null
        },
        "achievements": [
            {
                "place": "Legends",
                "event": {
                    "name": "Perfect World Shanghai Major 2024",
                    "id": 7524
                }
            },
            {
                "place": "Legends",
                "event": {
                    "name": "PGL CS2 Major Copenhagen 2024",
                    "id": 7148
                }
            },
            {
                "place": "Challengers",
                "event": {
                    "name": "IEM Rio Major 2022 Challengers Stage",
                    "id": 6588
                }
            },
            {
                "place": "Legends",
                "event": {
                    "name": "PGL Major Antwerp 2022",
                    "id": 6372
                }
            },
            {
                "place": "Legends",
                "event": {
                    "name": "PGL Major Stockholm 2021",
                    "id": 4866
                }
            },
            {
                "place": "Legends",
                "event": {
                    "name": "StarLadder Major Berlin 2019",
                    "id": 4443
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "IEM Katowice 2019",
                    "id": 3883
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "FACEIT Major 2018",
                    "id": 3564
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ELEAGUE Major 2018",
                    "id": 3247
                }
            },
            {
                "place": "1/4 final",
                "event": {
                    "name": "PGL Major Krakow 2017",
                    "id": 2720
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ELEAGUE Major 2017",
                    "id": 2471
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "ESL One Cologne 2016",
                    "id": 2062
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "MLG Columbus 2016",
                    "id": 2027
                }
            },
            {
                "place": "1/4 final",
                "event": {
                    "name": "DreamHack Open Cluj-Napoca 2015",
                    "id": 1617
                }
            },
            {
                "place": "1/4 final",
                "event": {
                    "name": "ESL One Cologne 2015",
                    "id": 1666
                }
            },
            {
                "place": "1/4 final",
                "event": {
                    "name": "ESL One Katowice 2015",
                    "id": 1611
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "IEM Rio 2024",
                    "id": 7439
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "YaLLa Compass 2024",
                    "id": 7475
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "Elisa Masters Espoo 2023",
                    "id": 7250
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "BLAST Premier Spring Final 2023",
                    "id": 6972
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "CS:GO Asia Championships 2019",
                    "id": 4680
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "V4 Future Sports Festival 2019",
                    "id": 4828
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "IEM Chicago 2019",
                    "id": 4574
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "IEM Sydney 2019",
                    "id": 4236
                }
            },
            {
                "place": "3rd",
                "event": {
                    "name": "BLAST Pro Series Miami 2019",
                    "id": 4327
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "IEM Katowice 2019",
                    "id": 3883
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ESL Pro League Season 8 Finals",
                    "id": 3376
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "ECS Season 6 Finals",
                    "id": 4083
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "BLAST Pro Series Istanbul 2018",
                    "id": 3647
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "FACEIT Major 2018",
                    "id": 3564
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "ZOTAC Cup Masters 2018 Grand Finals",
                    "id": 3603
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ESL One Belo Horizonte 2018",
                    "id": 3649
                }
            },
            {
                "place": "3rd",
                "event": {
                    "name": "cs_summit 2",
                    "id": 3454
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ELEAGUE Major 2018",
                    "id": 3247
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "ESL Pro League Season 6 Finals",
                    "id": 3072
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "BLAST Pro Series Copenhagen 2017",
                    "id": 2998
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "IEM Oakland 2017",
                    "id": 2956
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "EPICENTER 2017",
                    "id": 3133
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ESL One New York 2017",
                    "id": 2636
                }
            },
            {
                "place": "3rd",
                "event": {
                    "name": "ESG Tour Mykonos 2017",
                    "id": 3061
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "ESL One Cologne 2017",
                    "id": 2635
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "ECS Season 3 Finals",
                    "id": 2763
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "DreamHack Open Summer 2017",
                    "id": 2569
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ESL Pro League Season 5 Finals",
                    "id": 2557
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "IEM Sydney 2017",
                    "id": 2713
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "cs_summit Spring 2017",
                    "id": 2641
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "DreamHack Masters Las Vegas 2017",
                    "id": 2541
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ELEAGUE Major 2017",
                    "id": 2471
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ECS Season 2 Finals",
                    "id": 2367
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "IEM Oakland 2016",
                    "id": 2261
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "ESL Pro League Season 4 Finals",
                    "id": 2306
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ELEAGUE Season 2",
                    "id": 2407
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "EPICENTER: Moscow",
                    "id": 2410
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "ESL One New York 2016",
                    "id": 2239
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "ESL One Cologne 2016",
                    "id": 2062
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "ECS Season 1 Finals",
                    "id": 2248
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "ESL Pro League Season 3 Finals",
                    "id": 2130
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "DreamHack Austin 2016",
                    "id": 1954
                }
            },
            {
                "place": "1st",
                "event": {
                    "name": "MLG Columbus 2016",
                    "id": 2027
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "IEM Katowice 2016",
                    "id": 2036
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "DreamHack ZOWIE Open Leipzig 2016",
                    "id": 1977
                }
            },
            {
                "place": "3-4th",
                "event": {
                    "name": "SL i-League StarSeries XIV Finals",
                    "id": 1978
                }
            },
            {
                "place": "2nd",
                "event": {
                    "name": "FACEIT League 2015 Stage 3 Finals at DH Winter 2015",
                    "id": 1615
                }
            }
        ],
    }
];