import { Trophy, TrendingUp, Star, ArrowRight } from 'lucide-react';

export function HallOfMatadors() {
    const traders = [
        { rank: 1, name: 'ElToro88', profit: '+$12,500', winRate: '68%', avatar: '🏆' },
        { rank: 2, name: 'CarmenFX', profit: '+$9,300', winRate: '72%', avatar: '🥈' },
        { rank: 3, name: 'BravoTrader', profit: '+$8,750', winRate: '65%', avatar: '🥉' },
        { rank: 4, name: 'MatadorPro', profit: '+$7,200', winRate: '61%', avatar: '⭐' },
        { rank: 5, name: 'TaurusKing', profit: '+$6,800', winRate: '64%', avatar: '⭐' },
    ];

    return (
        <section className="py-32 bg-metadoro-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[150px]" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <Trophy className="w-5 h-5 text-gold-500" />
                        <span className="text-xs tracking-[0.3em] text-gold-500 uppercase font-bold">Leaderboard</span>
                        <Trophy className="w-5 h-5 text-gold-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 mb-4">
                        HALL OF MATADORS
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-4" />
                    <p className="text-white/50 text-lg">Top Traders of the Arena</p>
                </div>

                {/* Leaderboard Table */}
                <div className="relative rounded-2xl overflow-hidden glass border border-gold-500/10 shadow-[0_0_80px_rgba(245,158,11,0.1)]">
                    {/* Table Header */}
                    <div className="grid grid-cols-5 gap-4 p-5 border-b border-gold-500/10 bg-gradient-to-r from-gold-500/5 to-transparent">
                        <div className="text-center text-xs tracking-[0.2em] text-gold-500 font-bold uppercase">Rank</div>
                        <div className="col-span-2 text-xs tracking-[0.2em] text-gold-500 font-bold uppercase">Trader</div>
                        <div className="text-right text-xs tracking-[0.2em] text-gold-500 font-bold uppercase">Profit</div>
                        <div className="text-right text-xs tracking-[0.2em] text-gold-500 font-bold uppercase">Win Rate</div>
                    </div>

                    {/* Table Rows */}
                    {traders.map((trader, index) => (
                        <div
                            key={trader.rank}
                            className={`grid grid-cols-5 gap-4 p-5 items-center transition-all duration-300 hover:bg-white/5 group ${index !== traders.length - 1 ? 'border-b border-white/5' : ''
                                }`}
                        >
                            {/* Rank */}
                            <div className="text-center">
                                <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-serif font-bold text-lg transition-all duration-300 ${trader.rank === 1 ? 'bg-gradient-to-br from-gold-500 to-gold-700 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]' :
                                        trader.rank === 2 ? 'bg-gradient-to-br from-slate-300 to-slate-500 text-black' :
                                            trader.rank === 3 ? 'bg-gradient-to-br from-amber-700 to-amber-900 text-white' :
                                                'bg-white/5 text-white/60 group-hover:bg-white/10'
                                    }`}>
                                    {trader.rank}
                                </span>
                            </div>

                            {/* Trader Info */}
                            <div className="col-span-2 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {trader.avatar}
                                </div>
                                <div>
                                    <div className="font-medium text-white group-hover:text-gold-300 transition-colors duration-300">
                                        {trader.name}
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-green-400">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>Funded</span>
                                    </div>
                                </div>
                            </div>

                            {/* Profit */}
                            <div className="text-right">
                                <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                                    {trader.profit}
                                </span>
                            </div>

                            {/* Win Rate */}
                            <div className="text-right">
                                <span className="inline-block px-3 py-1.5 rounded-lg bg-white/5 text-white/70 text-sm font-medium">
                                    {trader.winRate}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-block glass rounded-2xl p-10 border border-white/5">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Star className="w-5 h-5 text-gold-500" />
                            <Star className="w-6 h-6 text-gold-400" />
                            <Star className="w-5 h-5 text-gold-500" />
                        </div>
                        <h3 className="text-2xl md:text-3xl text-white font-serif font-bold mb-4">
                            DO YOU HAVE THE COURAGE TO TAME THE MARKET?
                        </h3>
                        <p className="text-white/50 mb-8 max-w-lg mx-auto">
                            Join thousands of elite traders who have proven their skills and earned their place in the Hall of Matadors.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="group px-8 py-4 bg-gradient-to-r from-metadoro-red to-metadoro-red-dark text-white text-sm tracking-[0.2em] font-bold uppercase rounded-xl hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3">
                                Get Funded
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 glass border border-gold-500/20 text-gold-300 text-sm tracking-[0.2em] font-bold uppercase rounded-xl hover:border-gold-500/50 hover:bg-gold-500/5 hover:-translate-y-1 transition-all duration-500">
                                View All Traders
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
