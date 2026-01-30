import { Shield, TrendingUp, Skull, Award, Target, Clock } from 'lucide-react';

const features = [
    {
        title: 'Arena Mode',
        description: 'The challenge zone. A simulated market environment where you prove your worth before accessing real capital.',
        icon: Shield,
        color: 'text-white',
        bgColor: 'bg-white/10',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]',
    },
    {
        title: 'Sangre Fría Rule',
        description: 'Emotional control is key. Strict daily loss limits ensuring you never trade on tilt or emotion.',
        icon: Skull,
        color: 'text-metadoro-red',
        bgColor: 'bg-metadoro-red/10',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]',
    },
    {
        title: 'Toro Rojo Alert',
        description: 'Real-time drawdown warnings. We tell you when the bull is getting too close to your limits.',
        icon: TrendingUp,
        color: 'text-gold-500',
        bgColor: 'bg-gold-500/10',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    },
    {
        title: 'Honor Payout',
        description: 'Validated payouts for those who follow the code. Zero delays for true Matadors.',
        icon: Award,
        color: 'text-gold-300',
        bgColor: 'bg-gold-500/10',
        hoverGlow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    },
];

const stats = [
    { icon: Target, value: '8-10%', label: 'Profit Target' },
    { icon: Shield, value: '5%', label: 'Max Daily Loss' },
    { icon: Clock, value: '24h', label: 'Fast Payouts' },
];

export function Features() {
    return (
        <section className="relative py-32 bg-metadoro-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 cyber-grid opacity-20" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-metadoro-red/5 rounded-full blur-[150px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs tracking-[0.3em] text-metadoro-red uppercase mb-4 font-bold">Trading Framework</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                        MECHANICS OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-metadoro-red to-gold-500">SURVIVAL</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-metadoro-red to-transparent mx-auto mb-6" />
                    <p className="max-w-2xl mx-auto text-white/50 text-lg">
                        Our proprietary risk management system ensures only the most disciplined traders succeed
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={`group relative p-6 rounded-xl glass border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 ${feature.hoverGlow}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/5 group-hover:border-white/20 rounded-tr-xl transition-colors duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* Rules Card */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden glass border border-white/10">
                            {/* Header */}
                            <div className="p-8 border-b border-white/5 bg-gradient-to-r from-metadoro-red/10 to-gold-500/10">
                                <h3 className="text-5xl font-serif font-bold text-white/10 mb-2">RULES</h3>
                                <p className="text-gold-500 text-sm tracking-[0.2em] uppercase font-bold">Discipline Wins The Arena</p>
                            </div>

                            {/* Stats */}
                            <div className="p-8 space-y-6">
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07]"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-metadoro-red/20 to-gold-500/20 flex items-center justify-center">
                                            <stat.icon className="w-5 h-5 text-gold-500" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-white/40 uppercase tracking-wider">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Golden Rule */}
                                <div className="p-4 rounded-xl bg-gradient-to-r from-gold-500/10 to-gold-700/10 border-l-4 border-gold-500">
                                    <div className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-gold-500" />
                                        <div>
                                            <div className="text-xs text-gold-500 uppercase tracking-wider mb-1">Golden Rule</div>
                                            <div className="text-white font-medium">No Gambling Strategies</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-metadoro-red/20 rounded-tl-2xl" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-500/20 rounded-br-2xl" />
                        </div>

                        {/* Floating Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-metadoro-red/10 to-gold-500/10 rounded-3xl blur-3xl -z-10 opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
}
