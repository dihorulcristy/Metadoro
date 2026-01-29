import { Shield, TrendingUp, Skull, Award } from 'lucide-react';

const features = [
    {
        title: 'Arena Mode',
        description: 'The challenge zone. A simulated market environment where you prove your worth.',
        icon: Shield,
        color: 'text-metadoro-white',
    },
    {
        title: 'Sangre Fría Rule',
        description: 'Emotional control is key. Strict daily loss limits ensuring you never trade on tilt.',
        icon: Skull,
        color: 'text-metadoro-red',
    },
    {
        title: 'Toro Rojo Alert',
        description: 'Real-time drawdown warnings. We tell you when the bull is getting too close.',
        icon: TrendingUp,
        color: 'text-metadoro-gold',
    },
    {
        title: 'Honor Payout',
        description: 'Validated payouts for those who follow the code. Zero delays for true Matadors.',
        icon: Award,
        color: 'text-metadoro-white',
    },
];

export function Features() {
    return (
        <section className="py-24 bg-gradient-to-b from-metadoro-gray to-metadoro-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-metadoro-white mb-8">
                            MECHANICS OF <span className="text-metadoro-red">SURVIVAL</span>
                        </h2>
                        <div className="space-y-12">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex gap-6 group">
                                    <div className={`w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-metadoro-gold/50 transition-colors`}>
                                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-metadoro-white mb-2 group-hover:text-metadoro-gold transition-colors">{feature.title}</h3>
                                        <p className="text-white/60 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-full min-h-[500px] bg-metadoro-black rounded-lg border border-white/10 p-8 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--metadoro-red-light)_0%,_transparent_70%)] opacity-20" />
                        <div className="relative z-10 text-center">
                            <h3 className="text-6xl font-serif font-bold text-white/10 mb-4">RULES</h3>
                            <p className="text-metadoro-gold text-lg tracking-widest uppercase mb-8">Discipline Wins The Arena</p>

                            <div className="space-y-4 text-left max-w-sm mx-auto">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                    <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Objective</div>
                                    <div className="text-white font-medium">Profit Target: 8-10%</div>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                                    <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Rule #1</div>
                                    <div className="text-white font-medium">Max Daily Loss: 5%</div>
                                </div>
                                <div className="p-4 bg-white/5 border border-white/10 rounded-sm border-l-4 border-l-metadoro-gold">
                                    <div className="text-xs text-white/40 uppercase tracking-wide mb-1">Golden Rule</div>
                                    <div className="text-white font-medium">No Gambling Strategies</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
