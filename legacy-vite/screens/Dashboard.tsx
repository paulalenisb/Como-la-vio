
import React from 'react';
import { Screen, Highlight } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const highlights: Highlight[] = [
  { id: '1', title: 'Gol del Triunfo vs Deportivo', date: 'Hoy • 15:45', event: 'Final Liga Municipal', type: 'Goal', duration: '0:22', thumbnail: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2942&auto=format&fit=crop', status: 'narrated' },
  { id: '2', title: 'Recorte y Asistencia Cruzada', date: '20 Oct, 2024', event: 'Semi-Final', type: 'Assist', duration: '0:22', thumbnail: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2786&auto=format&fit=crop', status: 'pending' },
  { id: '3', title: 'Atajada a Mano Cambiada', date: '15 Oct, 2024', event: 'Jornada 8', type: 'Save', duration: '0:22', thumbnail: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=2835&auto=format&fit=crop', status: 'pending' },
  { id: '4', title: 'Tiro Libre al Ángulo', date: '28 Sep, 2024', event: 'Jornada 5', type: 'Goal', duration: '0:22', thumbnail: 'https://images.unsplash.com/photo-1526232759583-26f173861b3d?q=80&w=2938&auto=format&fit=crop', status: 'narrated' },
];

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, toggleTheme, isDark }) => {
  return (
    <div className="flex h-screen bg-background-dark dark:bg-background-dark light:bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 flex flex-col h-full bg-background-surface dark:bg-background-surface light:bg-white">
        <div className="h-24 flex items-center px-10 border-b border-white/5">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-8 h-8 rounded bg-neon flex items-center justify-center font-bold text-black transform -skew-x-12"><span className="material-symbols-outlined text-lg font-black transform skew-x-12">videocam</span></div>
            <span className="font-black text-xl tracking-tighter uppercase italic dark:text-white light:text-black">CÓMO LA <span className="text-neon">VIÓ</span></span>
          </div>
        </div>
        <nav className="flex-1 p-6 space-y-2">
          <button className="w-full flex items-center gap-4 px-6 py-4 bg-neon text-black rounded-xl font-black uppercase italic text-sm shadow-neon transition-all">
            <span className="material-symbols-outlined font-black">dashboard</span> Mi Perfil
          </button>
          <button className="w-full flex items-center gap-4 px-6 py-4 text-gray-500 hover:text-neon hover:bg-neon/5 rounded-xl font-bold uppercase text-sm transition-all">
            <span className="material-symbols-outlined">video_library</span> Mis Clips
          </button>
          <button onClick={() => onNavigate('tournament')} className="w-full flex items-center gap-4 px-6 py-4 text-gray-500 hover:text-neon hover:bg-neon/5 rounded-xl font-bold uppercase text-sm transition-all">
            <span className="material-symbols-outlined">emoji_events</span> Mi Torneo
          </button>
          <button className="w-full flex items-center gap-4 px-6 py-4 text-gray-500 hover:text-neon hover:bg-neon/5 rounded-xl font-bold uppercase text-sm transition-all">
            <span className="material-symbols-outlined">insights</span> Estadísticas
          </button>
        </nav>
        <div className="p-8 border-t border-white/5">
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-4 text-gray-500 hover:text-white mb-6 text-sm font-bold uppercase"
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
            Cambiar Tema
          </button>
          <div className="flex items-center gap-4 p-2">
            <img src="https://i.pravatar.cc/150?u=mateo_sports" className="w-12 h-12 rounded-2xl border-2 border-neon p-0.5" alt="Jugador" />
            <div>
              <p className="text-sm font-black uppercase italic dark:text-white light:text-black">Mateo R.</p>
              <p className="text-[10px] text-neon font-black uppercase tracking-widest">Nivel Pro</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter dark:text-white light:text-black">MI <span className="text-neon">DESEMPEÑO</span></h2>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">Temporada Clausura 2024</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Próximo Partido</p>
              <p className="text-sm font-bold dark:text-white light:text-black uppercase">Dom 15:00 vs Los Lobos</p>
            </div>
            <button className="bg-neon hover:bg-primary-dark text-black px-6 py-3 rounded-xl text-xs font-black uppercase italic transition-all shadow-neon flex items-center gap-2">
              <span className="material-symbols-outlined font-black">upload</span> Subir Jugada
            </button>
          </div>
        </header>

        {/* Player Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Goles', value: '24', icon: 'sports_soccer', trend: '+2' },
            { label: 'Asistencias', value: '12', icon: 'handshake', trend: '+1' },
            { label: 'Atajadas', value: '5', icon: 'do_not_step', trend: '0' },
            { label: 'Clips Totales', value: '42', icon: 'movie', trend: '+8' }
          ].map((stat) => (
            <div key={stat.label} className="bg-background-surface dark:bg-background-surface light:bg-white p-6 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-neon">{stat.icon}</span>
              </div>
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-2">{stat.label}</p>
              <div className="flex items-end gap-3">
                <p className="text-4xl font-black italic dark:text-white light:text-black">{stat.value}</p>
                <p className="text-[10px] text-neon font-bold mb-1">{stat.trend} esta sem.</p>
              </div>
            </div>
          ))}
        </section>

        {/* Highlights Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black uppercase italic tracking-tighter dark:text-white light:text-black">MIS JUGADAS <span className="text-neon">RECIENTES</span></h3>
            <div className="flex bg-background-surface dark:bg-background-surface light:bg-white rounded-full p-1 border border-white/5">
              <button className="px-6 py-2 rounded-full bg-neon text-black text-xs font-black uppercase italic">Todos</button>
              <button className="px-6 py-2 rounded-full text-gray-500 text-xs font-bold uppercase italic hover:text-white">Narrados</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((h) => (
              <div 
                key={h.id} 
                className="group bg-background-card dark:bg-background-card light:bg-white rounded-3xl overflow-hidden border border-white/5 hover:border-neon/30 transition-all cursor-pointer shadow-xl"
                onClick={() => onNavigate('editor')}
              >
                <div className="relative aspect-[16/9]">
                  <img src={h.thumbnail} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={h.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-neon rounded-full flex items-center justify-center shadow-neon"><span className="material-symbols-outlined text-black text-3xl font-black">play_arrow</span></div>
                  </div>
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[10px] text-white font-black px-2 py-1 rounded uppercase">{h.duration}</span>
                  {h.status === 'narrated' && (
                    <span className="absolute top-4 left-4 bg-neon text-black text-[10px] font-black px-3 py-1 rounded-full uppercase italic shadow-neon">NARRADO</span>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="font-black text-lg uppercase italic tracking-tighter dark:text-white light:text-black mb-1 group-hover:text-neon transition-colors">{h.title}</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-6">{h.event} • {h.date}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <button className="text-gray-500 hover:text-neon transition-colors"><span className="material-symbols-outlined text-lg">download</span></button>
                      <button className="text-gray-500 hover:text-neon transition-colors"><span className="material-symbols-outlined text-lg">share</span></button>
                    </div>
                    {h.status === 'pending' ? (
                      <button className="text-neon text-[10px] font-black uppercase tracking-widest hover:underline flex items-center gap-1">
                        Solicitar Narración <span className="material-symbols-outlined text-sm">mic</span>
                      </button>
                    ) : (
                      <button className="text-gray-500 text-[10px] font-black uppercase tracking-widest hover:text-white flex items-center gap-1">
                        Ver Clip <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
