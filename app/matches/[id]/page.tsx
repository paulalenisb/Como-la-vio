"use client";

import { use, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import { MATCHES, TOURNAMENTS } from "@/data/matchData";
import { ChevronLeft, Play, Pause, SkipForward, SkipBack, Share2, Settings, ListVideo, Expand, Trophy, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function MatchVideoPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const match = MATCHES.find(m => m.id === id);

    if (!match) {
        notFound();
    }

    const tournament = TOURNAMENTS.find(t => t.id === match.tournamentId);

    // Filter siblings for Next/Prev Match navigation
    const tournamentMatches = MATCHES.filter(m => m.tournamentId === match.tournamentId);
    const currentIndex = tournamentMatches.findIndex(m => m.id === id);
    const previousMatch = currentIndex > 0 ? tournamentMatches[currentIndex - 1] : null;
    const nextMatch = currentIndex < tournamentMatches.length - 1 ? tournamentMatches[currentIndex + 1] : null;

    // State
    const [isPlaying, setIsPlaying] = useState(false);
    const [autoplay, setAutoplay] = useState(true);
    const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const activeHighlight = match.highlights[activeHighlightIndex];

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const playHighlight = (index: number) => {
        setActiveHighlightIndex(index);
        if (videoRef.current) {
            // Ideally we would seek to the timestamp, but here we just restart the mock video
            videoRef.current.currentTime = 0;
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const onVideoEnded = () => {
        if (autoplay && activeHighlightIndex < match.highlights.length - 1) {
            playHighlight(activeHighlightIndex + 1);
        } else {
            setIsPlaying(false);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans dark pt-20">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Back Navigation & Breadcrumbs */}
                <div className="flex items-center gap-2 text-zinc-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-6 overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link href={`/tournaments/${tournament?.id}`} className="hover:text-white transition-colors flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4" />
                        {tournament?.name}
                    </Link>
                    <span className="text-zinc-600">/</span>
                    <span className="text-white truncate">{match.homeTeam} vs {match.awayTeam}</span>
                </div>

                {/* 1. MAIN VIDEO PLAYER */}
                <section className="mb-12">
                    <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-border/50 relative group w-full aspect-video">
                        <video
                            ref={videoRef}
                            src={match.videoUrl}
                            poster={activeHighlight?.thumbnail}
                            onEnded={onVideoEnded}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            className="w-full h-full object-cover sm:object-contain"
                            playsInline
                        />

                        {/* Custom Overlay & Controls */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'} flex flex-col justify-between p-6 sm:p-8`}>
                            {/* Top Bar */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-black tracking-widest uppercase mb-3 backdrop-blur-md">
                                        <Play className="w-3 h-3" /> CLIP {activeHighlightIndex + 1} DE {match.highlights.length}
                                    </span>
                                    <h2 className="text-2xl sm:text-4xl font-black italic text-white text-shadow-sm truncate max-w-[80vw]">
                                        {activeHighlight?.type === 'Goal' ? 'GOLAZO' : activeHighlight?.type === 'Save' ? 'ATAJADA' : 'JUGADA CLAVE'} de {activeHighlight?.player}
                                    </h2>
                                </div>
                                <div className="flex gap-3">
                                    <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Center Play Button (only when paused) */}
                            {!isPlaying && (
                                <button
                                    onClick={togglePlay}
                                    className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/80 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 hover:bg-primary transition-transform shadow-[0_0_40px_rgba(108,122,255,0.6)]"
                                >
                                    <Play className="w-10 h-10 ml-2" />
                                </button>
                            )}

                            {/* Bottom Controls */}
                            <div className="flex items-center justify-between gap-4 mt-auto">
                                <div className="flex items-center gap-4">
                                    <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
                                        {isPlaying ? <Pause className="w-6 h-6 sm:w-8 sm:h-8" /> : <Play className="w-6 h-6 sm:w-8 sm:h-8" />}
                                    </button>
                                    <div className="hidden sm:flex items-center gap-2">
                                        <span className="text-white font-black">{match.homeScore}</span>
                                        <span className="text-zinc-500">-</span>
                                        <span className="text-white font-black">{match.awayScore}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <label className="hidden sm:flex items-center gap-2 cursor-pointer text-xs font-bold text-zinc-300 uppercase tracking-widest">
                                        <div className={`w-8 h-4 rounded-full relative transition-colors ${autoplay ? 'bg-primary' : 'bg-zinc-600'}`}>
                                            <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${autoplay ? 'left-[18px]' : 'left-[2px]'}`} />
                                        </div>
                                        Auto-Play
                                        <input type="checkbox" className="sr-only" checked={autoplay} onChange={() => setAutoplay(!autoplay)} />
                                    </label>
                                    <button className="text-zinc-300 hover:text-white transition-colors"><Settings className="w-5 h-5" /></button>
                                    <button className="text-zinc-300 hover:text-white transition-colors"><Expand className="w-5 h-5" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* 2. MATCH HIGHLIGHTS GRID */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-black italic uppercase text-white flex items-center gap-3">
                                <ListVideo className="w-6 h-6 text-primary" />
                                Clips del Partido ({match.highlights.length})
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {match.highlights.map((highlight, index) => (
                                <button
                                    key={highlight.id}
                                    onClick={() => playHighlight(index)}
                                    className={`group text-left relative aspect-video rounded-2xl overflow-hidden border-2 transition-all ${activeHighlightIndex === index ? 'border-primary ring-4 ring-primary/20 shadow-lg shadow-primary/20' : 'border-transparent hover:border-border'}`}
                                >
                                    <img
                                        src={highlight.thumbnail}
                                        alt={highlight.player}
                                        className={`w-full h-full object-cover transition-transform duration-700 ${activeHighlightIndex === index ? 'scale-105' : 'group-hover:scale-105 opacity-80'}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/60 backdrop-blur text-[10px] font-black text-white uppercase tracking-widest">
                                        {highlight.timestamp}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                        <span className={`inline-block mb-1 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${highlight.type === 'Goal' ? 'bg-primary text-white' : 'bg-white text-black'}`}>
                                            {highlight.type === 'Goal' ? 'GOL' : highlight.type === 'Save' ? 'ATAJADA' : 'JUGADA'}
                                        </span>
                                        <div className="text-xs sm:text-sm font-bold text-white truncate">{highlight.player}</div>
                                    </div>

                                    {/* Play icon for all cards */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {activeHighlightIndex === index ? (
                                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse shadow-xl shadow-primary/30 border border-white/20">
                                                <Play className="w-5 h-5 text-white ml-1 fill-white" />
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                                <Play className="w-4 h-4 text-white ml-0.5" />
                                            </div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 3. MATCH INFO & NAVIGATION */}
                    <div className="space-y-6">
                        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8">
                            <h4 className="text-sm font-black text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Trophy className="w-4 h-4" /> Resumen
                            </h4>
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-center">
                                    <div className="text-3xl font-black italic text-white truncate max-w-[100px]">{match.homeTeam}</div>
                                </div>
                                <div className="px-4 py-2 bg-muted rounded-xl border border-border flex items-center gap-3">
                                    <span className="text-2xl font-black text-white">{match.homeScore}</span>
                                    <span className="text-zinc-600">-</span>
                                    <span className="text-2xl font-black text-white">{match.awayScore}</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-black italic text-white truncate max-w-[100px]">{match.awayTeam}</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm tracking-widest uppercase bg-primary/10 py-3 rounded-xl border border-primary/20">
                                <Calendar className="w-4 h-4" /> {new Date(match.date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="grid grid-cols-2 gap-4">
                            {previousMatch ? (
                                <Link href={`/matches/${previousMatch.id}`} className="flex flex-col items-center justify-center gap-2 bg-card hover:bg-muted border border-border p-4 rounded-2xl transition-colors group">
                                    <SkipBack className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-white text-center">Anterior Partido</span>
                                </Link>
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-2 bg-card/50 border border-border/50 p-4 rounded-2xl opacity-50 cursor-not-allowed">
                                    <SkipBack className="w-5 h-5 text-zinc-600" />
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-600 text-center">No hay anterior</span>
                                </div>
                            )}

                            {nextMatch ? (
                                <Link href={`/matches/${nextMatch.id}`} className="flex flex-col items-center justify-center gap-2 bg-card hover:bg-muted border border-primary/30 p-4 rounded-2xl transition-colors group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                    <SkipForward className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white text-center">Siguiente Partido</span>
                                </Link>
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-2 bg-card/50 border border-border/50 p-4 rounded-2xl opacity-50 cursor-not-allowed">
                                    <SkipForward className="w-5 h-5 text-zinc-600" />
                                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-zinc-600 text-center">No hay más</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
