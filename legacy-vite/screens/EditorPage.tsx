
import React, { useState } from 'react';
import { Screen } from '../types';

interface EditorPageProps {
  onNavigate: (screen: Screen) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const EditorPage: React.FC<EditorPageProps> = ({ onNavigate, toggleTheme, isDark }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('hype');
  const [script, setScript] = useState("¡Atención! ¡Miren esa definición espectacular de Mateo desde media cancha! El portero no tuvo ninguna oportunidad ante semejante cañonazo. ¡Fútbol total!");

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-background-dark dark:bg-background-dark light:bg-gray-100 overflow-hidden">
      {/* Navigation */}
      <nav className="h-20 border-b border-white/5 bg-background-dark/80 dark:bg-background-dark/80 light:bg-white/80 backdrop-blur-xl flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate('dashboard')} className="p-2 rounded-xl text-gray-500 hover:bg-white/5 hover:text-white transition-all"><span className="material-symbols-outlined">arrow_back</span></button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-neon flex items-center justify-center font-bold text-black transform -skew-x-12"><span className="material-symbols-outlined text-lg font-black transform skew-x-12">videocam</span></div>
            <span className="font-black text-xl tracking-tighter uppercase italic dark:text-white light:text-black">CÓMO LA <span className="text-neon">VIÓ</span> <span className="text-primary-dark ml-1 font-black uppercase italic tracking-normal opacity-50">Studio</span></span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-gray-500">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button className="bg-neon hover:bg-primary-dark text-black px-8 py-3 rounded-full text-xs font-black uppercase italic tracking-tighter transition-all shadow-neon">Publicar Clip</button>
        </div>
      </nav>

      <main className="flex-1 overflow-hidden p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 h-full">
          {/* Main Content Area (Video) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex-1 bg-black rounded-[40px] border border-white/10 relative overflow-hidden group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2942&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-all duration-700" 
                alt="Clip"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-24 h-24 bg-neon/90 rounded-full flex items-center justify-center pl-2 shadow-neon backdrop-blur-md group-hover:scale-110 transition-all cursor-pointer">
                  <span className="material-symbols-outlined text-black text-6xl font-black">play_arrow</span>
                </div>
              </div>

              {/* AI Detection Badges */}
              <div className="absolute top-8 left-8 z-20 flex gap-3">
                <span className="bg-neon text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase italic tracking-[0.2em] shadow-neon">GOL DETECTADO</span>
                <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase italic border border-white/10">PRESIÓN ALTA 92%</span>
              </div>

              {/* Subtitles Overlay (Script) */}
              <div className="absolute bottom-32 left-0 right-0 flex justify-center px-12 z-20">
                <div className="bg-black/70 backdrop-blur-xl px-10 py-6 rounded-3xl text-white text-xl md:text-2xl font-black uppercase italic border border-white/10 text-center tracking-tighter leading-tight shadow-2xl animate-pulse-neon">
                  "{script}"
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-10 z-30">
                <div className="w-full bg-white/10 h-2 rounded-full mb-6 relative group/scrubber cursor-pointer">
                  <div className="bg-neon w-[42%] h-full rounded-full relative shadow-neon">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-2xl scale-0 group-hover/scrubber:scale-100 transition-transform"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <div className="flex items-center gap-8">
                    <span className="material-symbols-outlined cursor-pointer hover:text-neon text-3xl">play_arrow</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-neon text-2xl">volume_up</span>
                    <span className="text-sm font-black italic tracking-widest font-mono">00:14 / 00:22</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="material-symbols-outlined cursor-pointer hover:text-neon">closed_caption</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-neon">settings</span>
                    <span className="material-symbols-outlined cursor-pointer hover:text-neon">fullscreen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions Area */}
            <div className="bg-background-surface dark:bg-background-surface light:bg-white p-8 rounded-[32px] border border-white/5 flex items-center justify-between shadow-xl">
              <div>
                <h1 className="text-2xl font-black uppercase italic tracking-tighter dark:text-white light:text-black leading-none mb-2">FINAL LIGA MUNICIPAL • GOL DE MATEO</h1>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-neon">location_on</span> San Diego • Cancha Central • Hace 15 mins
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase italic tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">edit</span> Editar Corte
                </button>
                <button className="px-8 py-3 bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase italic tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">palette</span> Filtros TV
                </button>
              </div>
            </div>
          </div>

          {/* AI Narration & Social Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full overflow-hidden">
            <div className="flex-1 bg-background-card dark:bg-background-card light:bg-white border border-white/5 rounded-[40px] flex flex-col overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/2">
                <h2 className="font-black text-lg uppercase italic tracking-tighter flex items-center gap-3 dark:text-white light:text-black">
                  <span className="material-symbols-outlined text-neon">mic_external_on</span> NARRACIÓN IA
                </h2>
                <span className="text-[10px] font-black bg-neon/10 text-neon px-4 py-1.5 rounded-full uppercase italic tracking-widest border border-neon/30">PREMIUM</span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
                {/* Voice Selection */}
                <section>
                  <div className="flex justify-between mb-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]"><label>SELECCIONA TU ESTILO</label></div>
                  <div className="space-y-4">
                    {[
                      { id: 'hype', name: 'NARRADOR ÉPICO', desc: 'Energía máxima, Estilo TV', icon: 'local_fire_department', color: 'from-orange-500 to-red-500' },
                      { id: 'coach', name: 'ANÁLISIS TÉCNICO', desc: 'Análisis profesional, Calmado', icon: 'analytics', color: 'bg-gray-700' },
                      { id: 'funny', name: 'ESTILO DIVERTIDO', desc: 'Humor, Sarcasmo, Amigos', icon: 'sentiment_very_satisfied', color: 'bg-indigo-600' }
                    ].map((v) => (
                      <div 
                        key={v.id} 
                        onClick={() => setSelectedVoice(v.id)}
                        className={`cursor-pointer rounded-2xl p-5 flex items-center gap-5 transition-all border-2 ${selectedVoice === v.id ? 'border-neon bg-neon/5' : 'border-transparent bg-white/5 hover:bg-white/10'}`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${v.id === 'hype' ? v.color + ' bg-gradient-to-br' : v.color} shadow-lg`}>
                          <span className="material-symbols-outlined text-2xl font-black">{v.icon}</span>
                        </div>
                        <div className="flex-1">
                          <p className="font-black text-xs uppercase italic dark:text-white light:text-black group-hover:text-neon">{v.name}</p>
                          <p className="text-[10px] text-gray-500 font-bold uppercase mt-1">{v.desc}</p>
                        </div>
                        {selectedVoice === v.id && (
                          <div className="w-6 h-6 rounded-full bg-neon flex items-center justify-center shadow-neon">
                            <span className="material-symbols-outlined text-black text-sm font-black">check</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* AI Script Editor */}
                <section>
                  <div className="flex justify-between mb-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]"><label>GUION GENERADO POR IA</label></div>
                  <div className="relative group">
                    <textarea 
                      value={script}
                      onChange={(e) => setScript(e.target.value)}
                      className="w-full bg-background-dark/50 border-white/10 dark:border-white/10 light:border-black/10 rounded-2xl p-6 text-sm dark:text-gray-300 light:text-gray-700 h-32 resize-none focus:ring-neon focus:border-neon transition-all font-bold italic uppercase tracking-tighter"
                      placeholder="Edita lo que dirá el narrador..."
                    ></textarea>
                    <button className="absolute bottom-4 right-4 p-2 bg-neon/10 rounded-xl text-neon hover:bg-neon hover:text-black transition-all border border-neon/20">
                      <span className="material-symbols-outlined text-lg font-black">refresh</span>
                    </button>
                  </div>
                </section>

                {/* Generate Button Area */}
                <section className="bg-neon/5 p-8 rounded-[32px] border border-neon/10">
                  <div className="flex items-center justify-center gap-1.5 h-12 mb-8 opacity-60">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-1 bg-neon rounded-full animate-pulse shadow-neon" style={{ height: `${25 + Math.random() * 75}%`, animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className={`w-full py-5 rounded-2xl font-black uppercase italic flex items-center justify-center gap-3 shadow-neon transition-all text-sm tracking-widest ${isGenerating ? 'bg-gray-700 cursor-not-allowed opacity-50' : 'bg-neon hover:bg-primary-dark text-black transform hover:scale-[1.02]'}`}
                  >
                    <span className="material-symbols-outlined font-black">{isGenerating ? 'sync' : 'auto_awesome'}</span>
                    {isGenerating ? 'Sincronizando Voz...' : 'Generar Narración TV'}
                  </button>
                </section>
              </div>
            </div>

            {/* Social Sharing Component */}
            <div className="bg-background-surface dark:bg-background-surface light:bg-white p-8 rounded-[40px] border border-white/5 shadow-2xl">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] text-center mb-8">Compartir en Redes</p>
              <div className="flex justify-between gap-4 px-4">
                <button className="flex flex-col items-center gap-3 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all border border-white/5">
                    <span className="material-symbols-outlined text-2xl font-black">message</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-black uppercase group-hover:text-white">WhatsApp</span>
                </button>
                <button className="flex flex-col items-center gap-3 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] group-hover:text-white transition-all border border-white/5">
                    <span className="material-symbols-outlined text-2xl font-black">camera_alt</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-black uppercase group-hover:text-white">Instagram</span>
                </button>
                <button className="flex flex-col items-center gap-3 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all border border-white/5">
                    <span className="material-symbols-outlined text-2xl font-black">music_note</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-black uppercase group-hover:text-white">TikTok</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditorPage;
