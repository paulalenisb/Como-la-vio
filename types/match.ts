export interface Tournament {
    id: string;
    name: string;
    logo?: string;
    status: 'Active' | 'Upcoming' | 'Finished';
    startDate: string;
    endDate: string;
    sport?: string;
}

export interface Highlight {
    id: string;
    player: string;
    type: 'Goal' | 'Save' | 'Assist' | 'Shot on Target' | 'Defensive Play' | 'Other';
    timestamp: string;
    videoUrl?: string;
    thumbnail?: string;
}

export interface Match {
    id: string;
    tournamentId: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    date: string;
    videoUrl: string;
    highlights: Highlight[];
}
