"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { TOURNAMENTS } from "@/data/matchData";
import { Search, Trophy, Calendar, Activity, CheckCircle2, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import { Tournament } from "@/types/match";

export default function TournamentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<Tournament['status'] | 'All'>('All');

    const filteredTournaments = TOURNAMENTS.filter((t) => {
        const matchesSearch = t.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All' || t.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const activeCount = TOURNAMENTS.filter(t => t.status === 'Active').length;
    const upcomingCount = TOURNAMENTS.filter(t => t.status === 'Upcoming').length;
    const finishedCount = TOURNAMENTS.filter(t => t.status === 'Finished').length;

    const getStatusIcon = (status: Tournament['status']) => {
        switch (status) {
            case 'Active': return <Activity className="w-4 h-4" />;
            case 'Upcoming': return <Clock className="w-4 h-4" />;
            case 'Finished': return <CheckCircle2 className="w-4 h-4" />;
        }
    };

    const getStatusColor = (status: Tournament['status']) => {
        switch (status) {
            case 'Active': return 'text-green-500 bg-green-500/10 border-green-500/20';
            case 'Upcoming': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
            case 'Finished': return 'text-zinc-400 bg-zinc-500/10 border-zinc-500/20';
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground font-sans dark pt-20">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
                {/* Breadcrumb */}
                <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-500 uppercase tracking-widest">
                    <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-zinc-300">Torneos</span>
                </div>

                {/* Header */}
                <header className="mb-12">
                    <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-widest uppercase mb-6">
                        <Trophy className="w-4 h-4" />
                        Directorio de Torneos
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-4 text-white">
                        Encuentra tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Liga</span>
                    </h1>
                    <p className="text-zinc-400 font-medium text-lg md:text-xl max-w-2xl">
                        Explora los {TOURNAMENTS.length} torneos disponibles. Selecciona tu competición y accede a todos los videos generados automáticamente.
                    </p>
                </header>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-12">
                    {/* Search Bar */}
                    <div className="relative flex-1">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-zinc-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar por nombre del torneo..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-card border border-border rounded-2xl py-4 pl-12 pr-4 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* Status Filters */}
                    <div className="flex gap-2 p-1.5 bg-card border border-border rounded-2xl overflow-x-auto hide-scrollbar">
                        <button
                            onClick={() => setFilterStatus('All')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap transition-all ${filterStatus === 'All' ? 'bg-primary text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}
                        >
                            Todos ({TOURNAMENTS.length})
                        </button>
                        <button
                            onClick={() => setFilterStatus('Active')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap transition-all flex items-center gap-2 ${filterStatus === 'Active' ? 'bg-white/10 text-white shadow-lg border border-white/10' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}
                        >
                            <Activity className="w-4 h-4 text-green-500" /> Activos ({activeCount})
                        </button>
                        <button
                            onClick={() => setFilterStatus('Upcoming')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap transition-all flex items-center gap-2 ${filterStatus === 'Upcoming' ? 'bg-white/10 text-white shadow-lg border border-white/10' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}
                        >
                            <Clock className="w-4 h-4 text-blue-500" /> Próximos ({upcomingCount})
                        </button>
                        <button
                            onClick={() => setFilterStatus('Finished')}
                            className={`px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap transition-all flex items-center gap-2 ${filterStatus === 'Finished' ? 'bg-white/10 text-white shadow-lg border border-white/10' : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'}`}
                        >
                            <CheckCircle2 className="w-4 h-4 text-zinc-500" /> Finalizados ({finishedCount})
                        </button>
                    </div>
                </div>

                {/* Tournament List */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredTournaments.length > 0 ? (
                        filteredTournaments.map((tournament) => (
                            <Link
                                href={`/tournaments/${tournament.id}`}
                                key={tournament.id}
                                className="group bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(108,122,255,0.1)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-muted border border-border flex items-center justify-center p-3 group-hover:bg-primary/5 transition-colors">
                                            <Trophy className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />
                                        </div>
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border ${getStatusColor(tournament.status)}`}>
                                            {getStatusIcon(tournament.status)}
                                            {tournament.status === 'Active' ? 'Activo' : tournament.status === 'Upcoming' ? 'Próximo' : 'Finalizado'}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-black text-white tracking-tight mb-2 group-hover:text-primary transition-colors">
                                        {tournament.name}
                                    </h2>
                                    <div className="flex items-center gap-4 text-sm font-bold text-zinc-500 mb-8 uppercase tracking-wider">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(tournament.startDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })} - {new Date(tournament.endDate).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-border pt-6 mt-2">
                                    <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest">{tournament.sport}</span>
                                    <span className="flex items-center gap-1 text-primary text-sm font-black uppercase tracking-widest group-hover:gap-2 transition-all">
                                        Ver Partidos <ChevronRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center border-2 border-dashed border-border rounded-3xl">
                            <Trophy className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-zinc-400 mb-2">No encontramos torneos</h3>
                            <p className="text-zinc-500 font-medium">Intenta ajustando los filtros o tu término de búsqueda.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
