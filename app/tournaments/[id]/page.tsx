"use client";

import { use, useState } from "react";
import Navbar from "@/components/Navbar";
import { TOURNAMENTS, MATCHES } from "@/data/matchData";
import { Search, Trophy, Calendar, Filter, ChevronLeft, Play, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function TournamentDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const tournament = TOURNAMENTS.find(t => t.id === id);

    if (!tournament) {
        notFound();
    }

    // Filter Matches
    const tournamentMatches = MATCHES.filter(m => m.tournamentId === id);

    // State
    const [teamSearch, setTeamSearch] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState<'All' | 'Played' | 'Upcoming'>('All');

    const filteredMatches = tournamentMatches.filter(m => {
        const matchesTeam = m.homeTeam.toLowerCase().includes(teamSearch.toLowerCase()) || m.awayTeam.toLowerCase().includes(teamSearch.toLowerCase());
        const matchesDate = dateFilter === "" || m.date === dateFilter;
        // In this mock, all matches with highlights are 'Played'. You'd calculate this with dates.
        const matchesStatus = statusFilter === 'All' || statusFilter === 'Played';
        return matchesTeam && matchesDate && matchesStatus;
    });

    // Group by Date
    const groupedMatches = filteredMatches.reduce((groups, match) => {
        const date = match.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(match);
        return groups;
    }, {} as Record<string, typeof MATCHES>);

    const sortedDates = Object.keys(groupedMatches).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

    return (
        <div className="min-h-screen bg-background text-foreground font-sans dark pt-20">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                {/* Back Navigation */}
                <Link href="/tournaments" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-bold text-sm tracking-widest uppercase mb-8 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                    Volver a Torneos
                </Link>

                {/* Tournament Header */}
                <header className="mb-12 bg-card rounded-[2rem] p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase mb-4">
                                {tournament.sport}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase italic mb-4 text-white">
                                {tournament.name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-zinc-400 font-bold text-sm tracking-widest uppercase">
                                <span className="flex items-center gap-2 bg-background px-4 py-2 rounded-xl border border-border">
                                    <Clock className="w-4 h-4 text-primary" />
                                    {tournament.status === 'Active' ? 'En Curso' : tournament.status === 'Finished' ? 'Finalizado' : 'Próximo'}
                                </span>
                                <span className="flex items-center gap-2 bg-background px-4 py-2 rounded-xl border border-border">
                                    <Trophy className="w-4 h-4 text-accent" />
                                    {tournamentMatches.length} Partidos
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                                <Share2 className="w-4 h-4" /> Compartir
                            </button>
                        </div>
                    </div>
                </header>

                {/* Filters Area (Sticky) */}
                <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-2xl py-6 border-b border-border/50 mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Buscar equipo..."
                                value={teamSearch}
                                onChange={(e) => setTeamSearch(e.target.value)}
                                className="w-full bg-card border border-border rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                            />
                        </div>
                        <div className="flex w-full md:w-auto gap-4">
                            <div className="relative flex-1 md:w-48">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type="date"
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                    className="w-full bg-card border border-border rounded-xl py-3 pl-12 pr-4 text-white focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all [color-scheme:dark]"
                                />
                            </div>
                            <div className="relative flex-1 md:w-48">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value as any)}
                                    className="w-full appearance-none bg-card border border-border rounded-xl py-3 pl-12 pr-8 text-white focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                >
                                    <option value="All">Todos</option>
                                    <option value="Played">Jugados</option>
                                    <option value="Upcoming">Próximos</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Matches Grouped by Date */}
                <div className="space-y-16">
                    {sortedDates.length > 0 ? (
                        sortedDates.map(date => (
                            <section key={date} className="relative">
                                {/* Date Divider */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="px-6 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(108,122,255,0.1)]">
                                        {new Date(date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                    </div>
                                    <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {groupedMatches[date].map(match => (
                                        <Link
                                            href={`/matches/${match.id}`}
                                            key={match.id}
                                            className="group flex flex-col sm:flex-row bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(108,122,255,0.1)] transition-all duration-500"
                                        >
                                            {/* Match Info */}
                                            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                                                <div className="flex items-center justify-between mb-6">
                                                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 bg-background px-3 py-1 rounded border border-border">
                                                        Jugado
                                                    </span>
                                                    <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                                        <Play className="w-3 h-3" /> {match.highlights.length} Clips
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between gap-4">
                                                    <div className="flex-1 text-center">
                                                        <div className="text-xl md:text-2xl font-black tracking-tighter uppercase italic truncate text-zinc-200">{match.homeTeam}</div>
                                                    </div>

                                                    <div className="flex items-center gap-3 px-5 py-2 bg-muted rounded-2xl border border-border">
                                                        <span className="text-3xl font-black tracking-tighter tabular-nums text-white">{match.homeScore}</span>
                                                        <span className="text-zinc-600 font-bold">-</span>
                                                        <span className="text-3xl font-black tracking-tighter tabular-nums text-white">{match.awayScore}</span>
                                                    </div>

                                                    <div className="flex-1 text-center">
                                                        <div className="text-xl md:text-2xl font-black tracking-tighter uppercase italic truncate text-zinc-200">{match.awayTeam}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Watch Action */}
                                            <div className="bg-muted/50 sm:w-24 p-6 flex sm:flex-col items-center justify-center gap-2 group-hover:bg-primary transition-colors border-t sm:border-t-0 sm:border-l border-border group-hover:border-primary text-zinc-400 group-hover:text-white">
                                                <Play className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                                                <span className="text-[10px] font-black uppercase tracking-widest sm:hidden">Ver Highlights</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))
                    ) : (
                        <div className="py-20 text-center border-2 border-dashed border-border rounded-3xl bg-card/50">
                            <Trophy className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-zinc-400 mb-2">No hay partidos</h3>
                            <p className="text-zinc-500 font-medium">Intenta ajustando los filtros de fecha o búsqueda.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
