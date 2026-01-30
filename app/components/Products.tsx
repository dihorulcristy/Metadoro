import { Button } from './ui/Button';
import { Zap, Crown, Rocket } from 'lucide-react';

const products = [
    {
        name: 'Toro Initio',
        subtitle: 'Begin Your Journey',
        description: 'Perfect for aspiring traders ready to prove their skills.',
        price: '$99',
        icon: Rocket,
        features: ['$10K Account', '8% Profit Target', '5% Daily Loss Limit', '14 Day Challenge'],
        bgImage: '/toro-initio-bg.jpg',
        accentColor: 'white',
        glowColor: 'rgba(148, 163, 184, 0.2)',
    },
    {
        name: 'Matador Pro',
        subtitle: 'Trade Like a Champion',
        description: 'The most popular choice for serious traders.',
        price: '$249',
        icon: Zap,
        features: ['$50K Account', '8% Profit Target', '5% Daily Loss Limit', '30 Day Challenge'],
        bgImage: '/matador-pro-bg.jpg',
        accentColor: 'red',
        glowColor: 'rgba(220, 38, 38, 0.3)',
        highlight: true,
    },
    {
        name: 'El Maestro',
        subtitle: 'Trade Among Legends',
        description: 'For elite traders seeking maximum capital.',
        price: '$499',
        icon: Crown,
        features: ['$200K Account', '10% Profit Target', '5% Daily Loss Limit', '60 Day Challenge'],
        bgImage: '/el-maestro-bg.jpg',
        accentColor: 'gold',
        glowColor: 'rgba(245, 158, 11, 0.3)',
        elite: true,
    },
];

export function Products() {
    return (
        <section className="relative py-32 bg-metadoro-black z-10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 cyber-grid opacity-30" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-metadoro-red/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block text-xs tracking-[0.3em] text-gold-500 uppercase mb-4 font-bold">Choose Your Path</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
                        FUNDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-metadoro-red to-gold-500">PROGRAMS</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-metadoro-red to-transparent mx-auto" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {products.map((product) => {
                        const IconComponent = product.icon;
                        return (
                            <div
                                key={product.name}
                                className={`group relative overflow-hidden rounded-xl transition-all duration-700 hover:-translate-y-3 ${product.highlight ? 'lg:-mt-4 lg:mb-4' : ''
                                    }`}
                                style={{
                                    boxShadow: `0 0 60px ${product.glowColor}`,
                                }}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={product.bgImage}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Dark Overlay for readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                                    {/* Color tint overlay */}
                                    <div className={`absolute inset-0 ${product.elite ? 'bg-gold-900/30' :
                                        product.highlight ? 'bg-metadoro-red/20' :
                                            'bg-slate-900/40'
                                        }`} />
                                </div>

                                {/* Animated Border */}
                                <div className={`absolute inset-0 rounded-xl border transition-colors duration-500 ${product.elite ? 'border-gold-500/30 group-hover:border-gold-500/60' :
                                    product.highlight ? 'border-metadoro-red/30 group-hover:border-metadoro-red/60' :
                                        'border-white/10 group-hover:border-white/20'
                                    }`} />

                                {/* Shimmer Effect on Hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="absolute inset-0 shimmer-effect" />
                                </div>

                                {/* Elite/Popular Badge */}
                                {product.elite && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="flex items-center gap-1.5 bg-gradient-to-r from-gold-500 to-gold-700 text-black text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                                            <Crown className="w-3 h-3" />
                                            Elite
                                        </div>
                                    </div>
                                )}
                                {product.highlight && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="flex items-center gap-1.5 bg-gradient-to-r from-metadoro-red to-metadoro-red-light text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                                            <Zap className="w-3 h-3" />
                                            Popular
                                        </div>
                                    </div>
                                )}

                                <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col items-center sm:items-start text-center sm:text-left min-h-[550px]">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${product.elite ? 'shadow-[0_0_30px_rgba(245,158,11,0.3)]' :
                                        product.highlight ? 'shadow-[0_0_30px_rgba(220,38,38,0.3)]' : ''
                                        }`}>
                                        <IconComponent className={`w-7 h-7 ${product.elite ? 'text-gold-300' :
                                            product.highlight ? 'text-red-300' : 'text-white/80'
                                            }`} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-serif font-bold text-white mb-1 tracking-wide drop-shadow-lg">
                                        {product.name.toUpperCase()}
                                    </h3>
                                    <p className={`text-xs tracking-[0.2em] uppercase mb-4 ${product.elite ? 'text-gold-300' :
                                        product.highlight ? 'text-red-300' : 'text-white/60'
                                        }`}>
                                        {product.subtitle}
                                    </p>
                                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <span className={`text-4xl font-bold drop-shadow-lg ${product.elite ? 'text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500' :
                                            product.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500' :
                                                'text-white'
                                            }`}>
                                            {product.price}
                                        </span>
                                        <span className="text-white/40 text-sm ml-2">one-time</span>
                                    </div>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                                <svg className={`w-4 h-4 flex-shrink-0 ${product.elite ? 'text-gold-500' :
                                                    product.highlight ? 'text-metadoro-red' : 'text-white/50'
                                                    }`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Button
                                        className={`w-full py-4 text-sm tracking-[0.2em] uppercase font-bold rounded-lg transition-all duration-500 backdrop-blur-sm ${product.elite
                                            ? 'bg-gradient-to-r from-gold-500 to-gold-700 text-black hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-1'
                                            : product.highlight
                                                ? 'bg-gradient-to-r from-metadoro-red to-metadoro-red-dark text-white hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:-translate-y-1'
                                                : 'bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:-translate-y-1'
                                            }`}
                                    >
                                        Start Challenge
                                    </Button>
                                </div>

                                {/* Corner Accents */}
                                <div className={`absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-xl transition-colors duration-500 ${product.elite ? 'border-gold-500/30 group-hover:border-gold-500/60' :
                                    product.highlight ? 'border-metadoro-red/30 group-hover:border-metadoro-red/60' :
                                        'border-white/10 group-hover:border-white/20'
                                    }`} />
                                <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-xl transition-colors duration-500 ${product.elite ? 'border-gold-500/30 group-hover:border-gold-500/60' :
                                    product.highlight ? 'border-metadoro-red/30 group-hover:border-metadoro-red/60' :
                                        'border-white/10 group-hover:border-white/20'
                                    }`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
