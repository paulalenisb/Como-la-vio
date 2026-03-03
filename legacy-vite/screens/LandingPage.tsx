
import React from 'react';
import { Screen } from '../types';

interface LandingPageProps {
  onNavigate: (screen: Screen) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, toggleTheme, isDark }) => {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-background-dark/80 dark:bg-background-dark/80 light:bg-white/80 backdrop-blur-xl border-b border-white/5 h-20">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('landing')}>
            <div className="w-10 h-10 bg-neon rounded-lg flex items-center justify-center transform -skew-x-12 shadow-[0_0_20px_rgba(204,255,0,0.5)]">
              <span className="material-symbols-outlined text-black font-bold transform skew-x-12">videocam</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tighter uppercase italic dark:text-white light:text-black">
              CÓMO LA <span className="text-neon">VIÓ</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <button onClick={() => onNavigate('tournament')} className="text-gray-400 hover:text-neon text-sm font-bold uppercase tracking-widest transition-colors">Torneos</button>
            <a href="#" className="text-gray-400 hover:text-neon text-sm font-bold uppercase tracking-widest transition-colors">Planes</a>
            <a href="#" className="text-gray-400 hover:text-neon text-sm font-bold uppercase tracking-widest transition-colors">Explorar</a>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-gray-400">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button onClick={() => onNavigate('dashboard')} className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Ingresar</button>
            <button 
              onClick={() => onNavigate('dashboard')}
              className="bg-neon hover:bg-primary-dark text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-tighter transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(204,255,0,0.4)]"
            >
              Empezar Ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2836&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-50 dark:opacity-40" 
            alt="Estadio"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-background-dark/30"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/30 text-neon text-xs font-black uppercase tracking-widest mb-8 animate-pulse-neon">
            <span className="w-2 h-2 rounded-full bg-neon"></span>
            Detección de jugadas por IA activa
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter dark:text-white light:text-black mb-6 uppercase italic leading-none">
            REVIVE LA <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-green-300">EMOCIÓN</span><br/>
            DE TUS JUGADAS
          </h1>
          <p className="mt-6 text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Recibe automáticamente clips de 22 segundos de tus mejores goles y atajadas. Convierte tu partido del barrio en una transmisión profesional.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => onNavigate('tournament')} className="px-10 py-5 bg-neon text-black font-black uppercase italic rounded-xl transition-all hover:bg-primary-dark shadow-[0_0_30px_rgba(204,255,0,0.6)] flex items-center justify-center gap-3 text-lg">
              <span className="material-symbols-outlined font-black">search</span> Explorar mi torneo
            </button>
            <button onClick={() => onNavigate('dashboard')} className="px-10 py-5 bg-white/5 dark:bg-white/5 light:bg-black/5 backdrop-blur-xl border border-white/10 text-white light:text-black font-black uppercase italic rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-lg">
              <span className="material-symbols-outlined font-black">upload_file</span> Subir mi partido
            </button>
          </div>
        </div>
      </section>

      {/* Proceso en 3 Pasos */}
      <section className="py-32 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-neon font-black tracking-[0.2em] uppercase mb-4 text-sm">Cómo funciona</h2>
            <h3 className="text-4xl md:text-6xl font-black dark:text-white light:text-black uppercase italic tracking-tighter">De la cancha al estrellato</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { id: '01', icon: 'sports_soccer', title: 'JUEGA TU PARTIDO', desc: 'Concéntrate en el juego. Nuestras cámaras y sistemas de IA están listos para capturar cada momento.' },
              { id: '02', icon: 'memory', title: 'IA ANALIZA TODO', desc: 'Detectamos automáticamente goles, atajadas y jugadas peligrosas para generar clips de 22s.' },
              { id: '03', icon: 'share', title: 'RECIBE Y COMPARTE', desc: 'Encuentra tus clips minutos después del partido en tu perfil. Comparte en TikTok e IG al instante.' },
            ].map((step) => (
              <div key={step.id} className="relative group">
                <div className="text-[120px] font-black text-white/5 absolute -top-16 -left-8 leading-none select-none group-hover:text-neon/10 transition-colors">{step.id}</div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mb-8 border border-neon/20 group-hover:bg-neon transition-all">
                    <span className="material-symbols-outlined text-4xl text-neon group-hover:text-black">{step.icon}</span>
                  </div>
                  <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tighter dark:text-white light:text-black">{step.title}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Resultados Reales */}
      <section className="py-32 bg-background-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter dark:text-white light:text-black">RECUERDOS DE <span className="text-neon">CRACKS</span></h2>
            <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.3em] mt-2">Jugadas destacadas de la semana</p>
          </div>
          <button className="text-neon font-black text-sm uppercase tracking-widest hover:underline">Ver todas</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
          <div className="md:col-span-2 md:row-span-2 relative h-[600px] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => onNavigate('editor')}>
             <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2786&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-neon text-black text-[10px] font-black px-3 py-1 rounded-full uppercase mb-4 inline-block">GOLAZO DEL MES</div>
                <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">EL MISIL DE MATÍAS</h4>
                <p className="text-gray-400 text-sm font-bold uppercase mt-1">Torneo "La Bombonera" • 12:45 PM</p>
             </div>
          </div>
          <div className="relative h-[290px] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => onNavigate('editor')}>
             <img src="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=2835&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-all" />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all"></div>
             <div className="absolute bottom-6 left-6 font-black text-white uppercase italic tracking-tighter">PARADÓN ÉPICO</div>
          </div>
          <div className="relative h-[290px] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => onNavigate('editor')}>
             <img src="https://images.unsplash.com/photo-1526232759583-26f173861b3d?q=80&w=2938&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-all" />
             <div className="absolute bottom-6 left-6 font-black text-white uppercase italic tracking-tighter">GAMBETA TOTAL</div>
          </div>
          <div className="relative h-[290px] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => onNavigate('editor')}>
             <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-all" />
             <div className="absolute bottom-6 left-6 font-black text-white uppercase italic tracking-tighter">CELEBRACIÓN</div>
          </div>
          <div className="relative h-[290px] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => onNavigate('editor')}>
             <img src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-all" />
             <div className="absolute bottom-6 left-6 font-black text-white uppercase italic tracking-tighter">TIRO LIBRE</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-dark py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-8 h-8 bg-neon rounded flex items-center justify-center font-bold text-black transform -skew-x-12"><span className="material-symbols-outlined text-sm font-black transform skew-x-12">videocam</span></div>
            <span className="font-black text-xl tracking-tighter uppercase italic dark:text-white light:text-black">
              CÓMO LA <span className="text-neon">VIÓ</span>
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            <a href="#" className="text-gray-500 hover:text-white uppercase font-black text-xs tracking-widest">Torneos</a>
            <a href="#" className="text-gray-500 hover:text-white uppercase font-black text-xs tracking-widest">Planes</a>
            <a href="#" className="text-gray-500 hover:text-white uppercase font-black text-xs tracking-widest">Prensa</a>
            <a href="#" className="text-gray-500 hover:text-white uppercase font-black text-xs tracking-widest">Contacto</a>
          </div>
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">&copy; 2024 Cómo la Vió - Todos los derechos de imagen reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
