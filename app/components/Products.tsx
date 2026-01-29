import { Button } from './ui/Button';
import { Check } from 'lucide-react';

const products = [
    {
        name: 'Toro Initio',
        subtitle: 'Begin Your Journey',
        image: 'bg-gradient-to-br from-stone-900 to-stone-950',
        bgImage: '/toro-initio.jpg',
        cta: 'Start Now',
        accent: 'border-stone-700',
        textColor: 'text-stone-400',
    },
    {
        name: 'Matador Pro',
        subtitle: 'Trade Like a Champion',
        image: 'bg-gradient-to-br from-red-950 to-black',
        bgImage: '/matador-pro.jpg',
        cta: 'Challenge',
        accent: 'border-metadoro-red shadow-[0_0_40px_rgba(138,28,28,0.3)]',
        textColor: 'text-red-200',
        highlight: true,
    },
    {
        name: 'El Maestro',
        subtitle: 'Trade Among Legends',
        image: 'bg-gradient-to-br from-yellow-950 to-black',
        bgImage: '/el-maestro.jpg',
        cta: 'Apply',
        accent: 'border-gold-500 shadow-[0_0_40px_rgba(212,175,55,0.2)]',
        textColor: 'text-gold-200',
        elite: true,
    },
];

export function Products() {
    return (
        <section className="relative py-32 bg-[url('/site-bg.jpg')] bg-cover bg-fixed bg-no-repeat bg-center z-10 -mt-20 border-t border-white/5">
            <div className="absolute inset-0 bg-black/80" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className={`group relative h-[500px] overflow-hidden rounded-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] bg-black border ${product.elite ? 'border-gold-500' : 'border-white/10'}`}
                        >
                            {/* Card Background Image - Full Cover */}
                            {product.bgImage ? (
                                <div className="absolute inset-0">
                                    <img
                                        src={product.bgImage}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                    />
                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                                </div>
                            ) : (
                                <div className={`absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60 ${product.image}`} />
                            )}

                            {/* Elite Badge */}
                            {product.elite && (
                                <div className="absolute top-4 right-4">
                                    <div className="bg-gradient-to-r from-gold-500 to-gold-700 text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg transform rotate-3">
                                        Elite Tier
                                    </div>
                                </div>
                            )}

                            <div className="relative z-10 h-full p-8 flex flex-col items-center text-center justify-end pb-12">
                                <div className="mb-auto mt-12 transform group-hover:-translate-y-4 transition-transform duration-500">
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 drop-shadow-md tracking-wide">
                                        {product.name.toUpperCase()}
                                    </h3>
                                    <div className="h-px w-12 bg-metadoro-red mx-auto mb-4" />
                                    <p className={`text-xs tracking-[0.2em] uppercase font-bold ${product.textColor}`}>
                                        {product.subtitle}
                                    </p>
                                </div>

                                <div className="w-full transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
                                    <Button
                                        variant={product.highlight ? 'primary' : 'outline'}
                                        className={`w-full py-6 text-sm tracking-[0.2em] uppercase font-bold border backdrop-blur-sm ${product.elite ? 'bg-gold-500/10 border-gold-500 text-gold-300 hover:bg-gold-500 hover:text-black' : 'hover:bg-metadoro-red hover:border-metadoro-red hover:text-white'}`}
                                    >
                                        {product.cta}
                                    </Button>
                                </div>
                            </div>

                            {/* Decorative Border Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-gold-500/50 transition-colors" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-gold-500/50 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-gold-500/50 transition-colors" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-gold-500/50 transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
