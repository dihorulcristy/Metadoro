export function HallOfMatadors() {
    const traders = [
        { rank: 1, name: 'ElToro88', profit: '+$12,500', status: 'FUNDED' },
        { rank: 2, name: 'CarmenFX', profit: '+$9,300', status: 'FUNDED' },
        { rank: 3, name: 'BravoTrader', profit: '+$8,750', status: 'FUNDED' },
    ];

    return (
        <section className="py-24 bg-[url('/site-bg.jpg')] bg-cover bg-fixed bg-no-repeat bg-center relative border-t border-white/5">
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" /> {/* Fallback if no global noise */}

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-100 to-gold-500 mb-2">
                        HALL OF MATADORS
                    </h2>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto opacity-50" />
                    <p className="text-gold-300/60 text-xs tracking-[0.2em] uppercase mt-2">Top Traders of the Arena</p>
                </div>

                <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-sm overflow-hidden backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <div className="grid grid-cols-4 p-4 border-b border-white/10 text-xs tracking-widest text-gold-500 font-bold uppercase">
                        <div className="text-center">Rank</div>
                        <div>Trader</div>
                        <div className="text-right">Profit</div>
                        <div className="text-right">Status</div>
                    </div>

                    {traders.map((trader) => (
                        <div key={trader.rank} className="grid grid-cols-4 p-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors group">
                            <div className="text-center font-serif text-xl font-bold text-white/40 group-hover:text-gold-500 transition-colors">
                                {trader.rank}
                            </div>
                            <div className="font-medium text-white group-hover:text-gold-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden relative">
                                    {/* Identification Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-white/50">
                                        {trader.name[0]}
                                    </div>
                                </div>
                                {trader.name}
                            </div>
                            <div className="text-right font-mono text-green-400 font-bold tracking-tight">
                                {trader.profit}
                            </div>
                            <div className="text-right">
                                <span className="inline-block px-2 py-1 bg-gold-500/10 border border-gold-500/30 text-[10px] font-bold text-gold-300 rounded-sm">
                                    {trader.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <h3 className="text-lg text-white/80 font-serif mb-6">DO YOU HAVE THE COURAGE TO TAME THE MARKET?</h3>
                    <div className="flex justify-center gap-6">
                        <button className="px-8 py-3 bg-metadoro-red border border-metadoro-red-light text-white text-xs tracking-widest font-bold uppercase hover:bg-red-900 transition-colors shadow-[0_0_20px_rgba(138,28,28,0.4)]">
                            Get Funded
                        </button>
                        <button className="px-8 py-3 bg-transparent border border-gold-700 text-gold-300 text-xs tracking-widest font-bold uppercase hover:bg-gold-500/10 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
