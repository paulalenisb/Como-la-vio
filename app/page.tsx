import Link from "next/link";
import Navbar from "@/components/Navbar";
import HighlightCard from "@/components/HighlightCard";
import { ChevronRight, Trophy, PlayCircle, Zap, Camera, Clock, Share2, Layers, CheckCircle2 } from "lucide-react";

// JTBD 2: Fixed Santiago Ruiz broken image. Valid Unsplash link.
const MOCK_HIGHLIGHTS = [
  { id: '1', player: 'Mateo González', type: 'Golazo de volea', timestamp: '12:45', thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop' },
  { id: '2', player: 'Santiago Ruiz', type: 'Atajada espectacular', timestamp: '08:12', thumbnail: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800&auto=format&fit=crop' },
  { id: '3', player: 'Lucas Silva', type: 'Asistencia de taco', timestamp: '45:30', thumbnail: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop' },
  { id: '4', player: 'Julián Castro', type: 'Jugada individual', timestamp: '23:15', thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans dark selection:bg-primary selection:text-white">
      <Navbar />

      <main>
        {/* 1️⃣ HERO SECTION */}
        <section className="relative h-screen flex flex-col justify-center overflow-hidden pt-20">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2000&auto=format&fit=crop"
              alt="Estadio de fútbol amateur"
              className="w-full h-full object-cover opacity-[0.25] contrast-[1.1] scale-105"
            />
            {/* Rich gradient blends */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,122,255,0.12)_0,transparent_60%)]" />
          </div>

          <div className="relative z-20 px-6 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
            {/* Top Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-[0.2em] uppercase backdrop-blur-md shadow-[0_0_20px_rgba(108,122,255,0.2)]">
                <Trophy className="w-4 h-4" />
                El futuro del deporte amateur
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.85] uppercase">
              El fútbol amateur <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-600 italic">
                como nunca lo viste
              </span>
            </h1>

            {/* Subtitle / UX Explainer */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-zinc-300 text-lg md:text-2xl font-medium leading-relaxed mb-8">
                Disfruta de ~20 videos cortos (22s) por partido, con los mejores momentos registrados automáticamente y listos para ver minutos después del pitazo final. <span className="text-white font-bold">Cero edición manual.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link href="/tournaments" className="w-full sm:w-auto group relative h-16 px-10 rounded-full bg-primary text-primary-foreground font-black text-lg transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(108,122,255,0.4)] hover:shadow-[0_0_60px_rgba(108,122,255,0.6)] hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  Ver Torneos <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
              {/* Secondary CTA */}
              <a href="#como-funciona" className="h-16 px-10 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md flex items-center justify-center">
                Cómo funciona
              </a>
            </div>
          </div>

          {/* Decorative bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        </section>

        {/* 2️⃣ HOW IT WORKS (3-4 STEPS) */}
        <section id="como-funciona" className="py-24 sm:py-32 bg-background relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white mb-6">La cámara hace la magia</h2>
              <p className="text-zinc-400 text-lg md:text-xl font-medium">Olvídate de buscar entre horas de video. Nuestro sistema hace el trabajo pesado por ti.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Conneting line for desktop */}
              <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -z-10" />

              {[
                { icon: Camera, title: "1. Grabación Continua", desc: "Nuestras cámaras capturan el partido completo en alta definición." },
                { icon: Zap, title: "2. Detección Inteligente", desc: "El sistema detecta automáticamente goles, atajadas y jugadas clave." },
                { icon: Layers, title: "3. Clips Automáticos", desc: "Generamos ~20 videos de 22 segundos listos para reproducir." },
                { icon: PlayCircle, title: "4. Disfruta y Comparte", desc: "Míralos desde tu perfil minutos después de terminar el partido." }
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-card border border-border flex items-center justify-center mb-6 shadow-xl shadow-black/50 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500">
                    <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-zinc-400 font-medium text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3️⃣ VALUE PROPOSITION SECTION */}
        <section className="py-24 bg-card/10 border-y border-border/40 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full point-events-none" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white mb-8">
                Diseñado para que <span className="text-primary">Goces</span>
              </h2>
              <ul className="space-y-6">
                {[
                  { text: "Acceso instantáneo a tus mejores jugadas sin esperar horas." },
                  { text: "Revive cada momento clave como si fuera televisión en vivo." },
                  { text: "Cero edición, solo entra a tu torneo y dale play." },
                  { text: "Highlights perfectos para compartir en un clic." },
                  { text: "Catálogo organizado por tu torneo y fecha específica." }
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-lg font-medium">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-video md:aspect-[4/5] bg-muted rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop"
                  alt="Player celebrating"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary text-white text-xs font-black uppercase px-3 py-1 rounded-full">GOLAZO</span>
                    <span className="text-white/60 text-sm font-bold">Hace 5 mins</span>
                  </div>
                  <h3 className="text-2xl font-black text-white italic">La definición del campeonato</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4️⃣ SOCIAL PROOF / TRUST SECTION */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/50">
              <div className="p-4">
                <div className="text-4xl md:text-6xl font-black text-white mb-2">500+</div>
                <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Partidos Procesados</div>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-6xl font-black text-white mb-2">10k+</div>
                <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Highlights Listos</div>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-6xl font-black text-white mb-2">50+</div>
                <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Torneos Activos</div>
              </div>
              <div className="p-4">
                <div className="text-4xl md:text-6xl font-black text-white mb-2">24/7</div>
                <div className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Disponibilidad</div>
              </div>
            </div>
          </div>
        </section>

        {/* LATEST MATCHES (JTBD 2 Extension) */}
        <section className="relative max-w-[1400px] mx-auto px-6 py-24 sm:py-32 z-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="relative pl-6 sm:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 sm:w-2 bg-gradient-to-b from-primary to-accent rounded-full" />
              <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                Últimos Highlights
              </h2>
              <p className="text-zinc-500 font-bold text-sm sm:text-lg mt-2 tracking-wide">
                Lo mejor de la jornada en las canchas locales, minutos después de jugar.
              </p>
            </div>
            {/* CTA Contextual Updates to 'Torneos' */}
            <Link href="/tournaments" className="group flex items-center justify-center sm:justify-end gap-2 text-xs sm:text-sm font-black text-primary transition-all uppercase tracking-widest hover:text-white bg-primary/10 sm:bg-transparent py-3 px-6 sm:p-0 rounded-full sm:rounded-none">
              <span className="group-hover:mr-1 transition-all">Ver Torneos</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {MOCK_HIGHLIGHTS.map((h) => (
              <HighlightCard key={h.id} {...h} />
            ))}
          </div>
        </section>

        {/* 5️⃣ FINAL CTA SECTION */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(108,122,255,0.2)_0,transparent_70%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8 italic">¿Listo para verte brillar?</h2>
            <p className="text-zinc-300 text-xl font-medium mb-12">Explora tu torneo y revive tus mejores momentos en segundos.</p>
            <Link href="/tournaments" className="inline-flex items-center gap-3 h-16 px-12 rounded-full bg-primary text-white font-black text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(108,122,255,0.4)]">
              Buscar mi Torneo <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-16 sm:py-24 bg-card/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,122,255,0.05)_0,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between z-10 gap-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-black tracking-tighter text-zinc-600">
              CÓMO <span className="text-zinc-500 italic">LA VIÓ</span>
            </div>
          </div>
          <p className="text-zinc-600 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-center sm:text-right">
            &copy; {new Date().getFullYear()} Hecho para los cracks de barrio.
          </p>
        </div>
      </footer>
    </div>
  );
}
