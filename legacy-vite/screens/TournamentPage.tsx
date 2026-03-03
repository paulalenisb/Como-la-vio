
import React from 'react';
import { Screen, Match, Team } from '../types';

interface TournamentPageProps {
  onNavigate: (screen: Screen) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const teams: Team[] = [
  { id: '1', name: 'Raptors FC', seed: 1, record: '12-0', logo: 'R', points: 36 },
  { id: '2', name: 'Tiburones', seed: 2, record: '11-1', logo: 'T', points: 33 },
  { id: '3', name: 'Águilas del Sur', seed: 3, record: '10-2', logo: 'A', points: 30 },
  { id: '4', name: 'Víboras United', seed: 4, record: '8-4', logo: 'V', points: 24 },
  { id: '5', name: 'Titanes', seed: 5, record: '6-6', logo: 'TI', points: 18 },
  { id: '6', name: 'Lobos Rojos', seed: 6, record: '5-7', logo: 'L', points: 15 },
];

const matches: Match[] = [
  { 
    id: 'm1', status: 'live', time: 'T2 25:00', team1: teams[0], team2: teams[2], 
    score1: 2, score2: 1, venue: 'Cancha "El Fortín" • En Vivo HD', viewers: '4.2k' 
  },
  { 
    id: 'm2', status: 'final', time: 'Ayer • 19:00', team1: teams[1], team2: teams[4], 
    score1: 3, score2: 0, venue: 'Cancha Central' 
  },
  { 
    id: 'm3', status: 'final', time: 'Ayer • 17:00', team1: teams[3], team2: teams[5], 
    score1: 1, score2: 1, venue: 'Sede Norte' 
  }
];

const TournamentPage: React.FC<TournamentPageProps> = ({ onNavigate, toggleTheme, isDark }) => {
  return (
    <div className="min-h-screen bg-background-dark dark:bg-background-dark light:bg-gray-100 pb-20">
      {/* Mini Navbar */}
      <nav className="h-20 border-b border-white/5 bg-background-dark/90 dark:bg-background-dark/90 light:bg-white/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-8 h-8 rounded bg-neon flex items-center justify-center font-bold text-black transform -skew-x-12"><span className="material-symbols-outlined text-lg font-black transform skew-x-12">videocam</span></div>
            <span className="font-black text-xl tracking-tighter uppercase italic dark:text-white light:text-black">CÓMO LA <span className="text-neon">VIÓ</span></span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-gray-500">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <div onClick={() => onNavigate('dashboard')} className="w-10 h-10 rounded-full overflow-hidden border-2 border-neon cursor-pointer p-0.5"><img src="https://i.pravatar.cc/150?u=mateo_sports" /></div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Tournament Header */}
        <header className="mb-12 rounded-[40px] overflow-hidden bg-background-surface dark:bg-background-surface light:bg-white border border-white/5 relative h-80 flex items-center p-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551952237-954a0e68786c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 w-full">
            <div className="w-32 h-32 bg-background-surface rounded-3xl flex items-center justify-center shadow-2xl border border-neon/20"><span className="material-symbols-outlined text-7xl text-neon">emoji_events</span></div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-3 mb-4">
                <span className="bg-neon/10 text-neon text-[10px] font-black px-4 py-1.5 rounded-full border border-neon/30 uppercase tracking-[0.2em]">SÚPER LIGA AMATEUR</span>
                <span className="bg-red-500/20 text-red-500 text-[10px] font-black px-4 py-1.5 rounded-full border border-red-500/20 uppercase tracking-[0.2em] animate-pulse">EN VIVO</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter dark:text-white light:text-black leading-none">TORNEO APERTURA 2024</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-6 text-sm text-gray-500 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-neon">calendar_today</span> Octubre 2024</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-neon">location_on</span> Complejo Deportivo Central</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-neon">groups</span> 12 Equipos</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Matches Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex gap-2 bg-background-surface dark:bg-background-surface light:bg-white p-1.5 rounded-2xl w-fit border border-white/5">
              <button className="px-8 py-3 text-xs font-black uppercase italic bg-neon text-black rounded-xl shadow-neon">Partidos</button>
              <button className="px-8 py-3 text-xs font-black uppercase italic text-gray-500 hover:text-white">Estadísticas</button>
              <button className="px-8 py-3 text-xs font-black uppercase italic text-gray-500 hover:text-white">Equipos</button>
            </div>

            <div className="space-y-6">
              <h3 className="text-gray-500 font-black uppercase text-xs tracking-[0.4em] mb-4">Jornada 12 • Hoy</h3>
              {matches.map((m) => (
                <div key={m.id} className={`bg-background-surface dark:bg-background-surface light:bg-white border-2 ${m.status === 'live' ? 'border-neon shadow-neon' : 'border-white/5'} rounded-[32px] overflow-hidden transition-all group`}>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                      <span className={`text-[10px] font-black uppercase tracking-widest ${m.status === 'live' ? 'text-neon flex items-center gap-3' : 'text-gray-500'}`}>
                        {m.status === 'live' && <span className="w-2.5 h-2.5 rounded-full bg-neon animate-pulse"></span>}
                        {m.status === 'live' ? 'JUGANDO AHORA' : m.status === 'final' ? 'FINALIZADO' : 'PRÓXIMO'} {m.status === 'live' ? '• ' + m.time : ''}
                      </span>
                      <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{m.venue || m.time}</span>
                    </div>
                    
                    <div className="flex items-center justify-between gap-12">
                      <div className="flex-1 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-background-dark border border-white/10 flex items-center justify-center text-3xl font-black mb-4 group-hover:border-neon transition-colors">{m.team1.logo}</div>
                        <h3 className="font-black text-xl uppercase italic dark:text-white light:text-black leading-tight">{m.team1.name}</h3>
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">#1 Tabla</p>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="text-6xl font-black italic tracking-tighter tabular-nums dark:text-white light:text-black">
                          {m.score1} <span className="text-neon mx-2">-</span> {m.score2}
                        </div>
                        <div className="mt-4 bg-white/5 dark:bg-white/5 light:bg-black/5 px-4 py-1 rounded-full border border-white/5">
                           <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Resultado Parcial</span>
                        </div>
                      </div>
                      
                      <div className="flex-1 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-background-dark border border-white/10 flex items-center justify-center text-3xl font-black mb-4 group-hover:border-neon transition-colors">{m.team2.logo}</div>
                        <h3 className="font-black text-xl uppercase italic dark:text-white light:text-black leading-tight">{m.team2.name}</h3>
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">#3 Tabla</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background-dark/50 px-8 py-5 flex justify-between items-center border-t border-white/5">
                    {m.status === 'live' ? (
                      <div className="flex items-center gap-3 text-xs font-bold text-gray-400"><span className="material-symbols-outlined text-neon text-sm">visibility</span> {m.viewers} viendo ahora</div>
                    ) : <div></div>}
                    <button onClick={() => onNavigate('editor')} className="bg-white/5 hover:bg-neon hover:text-black text-neon text-[10px] font-black px-6 py-2.5 rounded-full uppercase italic transition-all border border-neon/20">
                      {m.status === 'live' ? 'VER EN DIRECTO' : 'VER HIGHLIGHTS'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Standings Table */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-background-surface dark:bg-background-surface light:bg-white border border-white/5 rounded-[32px] overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h2 className="text-xl font-black uppercase italic dark:text-white light:text-black flex items-center gap-3"><span className="material-symbols-outlined text-neon">leaderboard</span> POSICIONES</h2>
                <span className="text-[10px] text-neon font-black uppercase cursor-pointer hover:underline tracking-widest">Ver Completa</span>
              </div>
              <table className="w-full text-left">
                <thead className="text-[10px] uppercase text-gray-500 font-black tracking-widest bg-white/5 border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-4 py-4">Equipo</th>
                    <th className="px-4 py-4 text-center">G/P</th>
                    <th className="px-6 py-4 text-right">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {teams.map((t, idx) => (
                    <tr key={t.id} className="hover:bg-white/5 transition-colors cursor-pointer group">
                      <td className={`px-6 py-5 font-black italic ${idx < 2 ? 'text-neon' : 'text-gray-500'}`}>{idx + 1}</td>
                      <td className="px-4 py-5 font-bold uppercase text-xs dark:text-white light:text-black group-hover:text-neon">{t.name}</td>
                      <td className="px-4 py-5 text-center text-xs text-gray-500 font-black">{t.record}</td>
                      <td className="px-6 py-5 text-right font-black italic dark:text-white light:text-black">{t.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-br from-background-card to-neon/10 p-8 rounded-[32px] border border-neon/20 relative group cursor-pointer overflow-hidden shadow-xl" onClick={() => onNavigate('editor')}>
               <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] text-neon opacity-5 group-hover:opacity-10 transition-all rotate-12">mic</span>
               <h3 className="font-black text-2xl uppercase italic leading-tight dark:text-white light:text-black mb-4 relative z-10">¿QUIERES NARRACIÓN<br/>PROFESIONAL?</h3>
               <p className="text-gray-400 text-sm font-medium mb-6 relative z-10 leading-relaxed">Hacemos que tus mejores jugadas suenen como una transmisión de TV con nuestra IA. Oferta especial para este torneo.</p>
               <button className="bg-neon text-black font-black uppercase italic px-6 py-3 rounded-xl text-xs shadow-neon transition-transform group-hover:scale-105 relative z-10">Más Información</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TournamentPage;
