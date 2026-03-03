'use client';

import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-2xl border-b border-border/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-primary/5 to-background/0 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative z-10">

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Logo Section */}
                <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter group flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                            CÓMO
                        </span>
                        <span className="text-primary italic relative">
                            LA VIÓ
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out" />
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation & Search */}
                <div className="flex items-center gap-6 sm:gap-10">
                    <div className="hidden md:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em]">
                        <Link href="/" className="relative text-zinc-400 hover:text-foreground transition-colors group py-2">
                            <span>Inicio</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                        </Link>
                        <Link href="/tournaments" className="relative text-zinc-400 hover:text-foreground transition-colors group py-2">
                            <span>Torneos</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="relative group hidden sm:block">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-zinc-500 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar torneo..."
                            className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 placeholder:text-zinc-600 text-foreground"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border/40 p-4 flex flex-col gap-4 shadow-xl">
                    <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-black uppercase tracking-widest text-zinc-400 hover:text-white"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/tournaments"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-black uppercase tracking-widest text-zinc-400 hover:text-white"
                    >
                        Torneos
                    </Link>
                    <div className="relative group mt-2">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-zinc-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Buscar torneo..."
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-foreground placeholder:text-zinc-600"
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}
