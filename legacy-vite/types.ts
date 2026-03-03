
export type Screen = 'landing' | 'dashboard' | 'tournament' | 'editor';

export interface Highlight {
  id: string;
  title: string;
  date: string;
  event: string;
  type: 'Goal' | 'Save' | 'Skill' | 'Assist';
  duration: string;
  thumbnail: string;
  status: 'narrated' | 'pending';
  views?: string;
  author?: string;
}

export interface Team {
  id: string;
  name: string;
  seed: number;
  record: string;
  logo: string;
  points: number;
}

export interface Match {
  id: string;
  status: 'live' | 'final' | 'upcoming';
  time: string;
  team1: Team;
  team2: Team;
  score1?: number;
  score2?: number;
  venue: string;
  viewers?: string;
}
