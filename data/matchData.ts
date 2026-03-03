import { Match, Tournament } from '../types/match';

export const TOURNAMENTS: Tournament[] = [
    {
        id: 't1',
        name: 'Champions League Amateur',
        status: 'Active',
        startDate: '2026-01-10',
        endDate: '2026-06-20',
        sport: 'Fútbol 11'
    },
    {
        id: 't2',
        name: 'Torneo Relámpago Barrial',
        status: 'Finished',
        startDate: '2026-02-01',
        endDate: '2026-02-15',
        sport: 'Fútbol 7'
    },
    {
        id: 't3',
        name: 'Liga Femenina de Verano',
        status: 'Upcoming',
        startDate: '2026-04-01',
        endDate: '2026-05-30',
        sport: 'Fútbol 7'
    },
];

export const MATCHES: Match[] = [
    {
        id: 'm1',
        tournamentId: 't1',
        homeTeam: 'Los Galácticos',
        awayTeam: 'Deportivo Barrio',
        homeScore: 3,
        awayScore: 2,
        date: '2026-03-15',
        videoUrl: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
        highlights: [
            {
                id: 'h1',
                player: 'Mateo González',
                type: 'Goal',
                timestamp: '12:45',
                thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop'
            },
            {
                id: 'h2',
                player: 'Santiago Ruiz',
                type: 'Save',
                timestamp: '08:12',
                thumbnail: 'https://images.unsplash.com/photo-1518605368461-1ee7cece1286?q=80&w=800&auto=format&fit=crop'
            },
        ]
    },
    {
        id: 'm2',
        tournamentId: 't1',
        homeTeam: 'Real F.C.',
        awayTeam: 'Los Amigos',
        homeScore: 0,
        awayScore: 1,
        date: '2026-03-15',
        videoUrl: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
        highlights: [
            {
                id: 'h3',
                player: 'Lucas Silva',
                type: 'Assist',
                timestamp: '45:30',
                thumbnail: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop'
            },
        ]
    },
    {
        id: 'm3',
        tournamentId: 't1',
        homeTeam: 'Internacional',
        awayTeam: 'Atlético Sur',
        homeScore: 1,
        awayScore: 1,
        date: '2026-03-16',
        videoUrl: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
        highlights: [
            {
                id: 'h4',
                player: 'Julián Castro',
                type: 'Goal',
                timestamp: '23:15',
                thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop'
            },
        ]
    }
];
