import { Play, Share2 } from 'lucide-react';

interface HighlightCardProps {
    player: string;
    type: string;
    timestamp: string;
    thumbnail?: string;
}

export default function HighlightCard({ player, type, timestamp, thumbnail }: HighlightCardProps) {
    return (
        <div className="group relative bg-card/50 backdrop-blur-sm rounded-[var(--radius)] overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
            <div className="aspect-[4/3] bg-muted relative flex items-center justify-center overflow-hidden">
                {thumbnail ? (
                    <img
                        src={thumbnail}
                        alt={player}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500 border border-white/10 group-hover:border-primary/30">
                        <Play className="w-8 h-8 text-white/50 group-hover:text-primary transition-colors" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {thumbnail && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 scale-95 group-hover:scale-100">
                        <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl shadow-primary/50">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                    </div>
                )}

                <span className="absolute bottom-3 right-3 text-[11px] font-black bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-md tracking-widest uppercase shadow-lg shadow-black/50 border border-primary/50">
                    {timestamp}
                </span>
            </div>

            <div className="p-5 relative">
                {/* Subtle top highlight line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-foreground uppercase tracking-tighter text-sm italic group-hover:text-primary transition-colors duration-300">
                        {player}
                    </h3>
                    <button className="text-zinc-500 hover:text-primary transition-all hover:scale-110 hover:rotate-12 bg-zinc-800/50 hover:bg-primary/10 p-2 rounded-full backdrop-blur-sm">
                        <Share2 className="w-3.5 h-3.5" />
                    </button>
                </div>
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-600 group-hover:from-white group-hover:to-zinc-400 transition-all duration-500">
                    {type}
                </p>
            </div>
        </div>
    );
}
