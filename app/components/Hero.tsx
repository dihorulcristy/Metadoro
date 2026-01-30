import { Button } from './ui/Button';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-metadoro-black">
            {/* Animated Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-50" />

            {/* Gradient Orbs - Futuristic Ambiance */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-metadoro-red/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-metadoro-red/10 rounded-full blur-[150px]" />

            {/* Background Image with Cinematic Grade */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="/hero-bg.png?v=4"
                    alt="Matador facing bull in arena"
                    className="w-full h-full object-cover opacity-60 contrast-[1.2] saturate-[1.15] brightness-[0.85]"
                />

                {/* Film Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(3,7,18,0.7)_60%,_rgba(3,7,18,0.95)_100%)]" />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-metadoro-black via-transparent to-metadoro-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-metadoro-black/40 via-transparent to-metadoro-black/40" />
            </div>

            {/* Scan Line Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metadoro-red/50 to-transparent animate-pulse" />
            </div>

            <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center text-center pt-24 pb-8">

                {/* Floating Badge */}
                <div className="mb-8 md:mb-10 animate-[float_6s_ease-in-out_infinite]">
                    <span className="inline-flex items-center justify-center gap-2 glass-dark rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-gold-300 text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] sm:tracking-[0.35em] uppercase font-bold shadow-[0_0_30px_rgba(245,158,11,0.15)] border border-gold-500/20 hover:border-gold-500/40 transition-all duration-500 text-center">
                        <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.8)] flex-shrink-0" />
                        <span className="whitespace-normal sm:whitespace-nowrap">Enter the Arena of Elite Prop Trading</span>
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="flex flex-col items-center font-serif font-bold mb-8 md:mb-12 leading-[1.1] tracking-tight w-full">
                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)] filter brightness-110 glow-text-gold text-center px-2">
                        MASTER THE MARKET.
                    </span>
                    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 mt-2 sm:mt-3 tracking-normal relative text-center px-2">
                        FACE THE BULL.
                        <span className="absolute inset-0 bg-white blur-[60px] opacity-10 -z-10" />
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="max-w-md sm:max-w-xl md:max-w-2xl text-white/60 text-sm sm:text-base md:text-lg mb-8 md:mb-12 leading-relaxed tracking-wide text-center px-4">
                    Join the elite circle of funded traders. Prove your discipline, master risk management, and claim your place among the legends.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 w-full max-w-sm sm:max-w-none sm:flex-row sm:gap-5">
                    <Button
                        className="group relative w-full sm:w-64 h-14 sm:h-16 bg-gradient-to-r from-metadoro-red to-metadoro-red-dark border border-metadoro-red-light/30 text-white text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] font-serif font-bold shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] hover:-translate-y-1 transition-all duration-500 uppercase overflow-hidden rounded-sm"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Get Funded
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        {/* Shine Effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-[shine_1s_ease-in-out]" />
                    </Button>

                    <Button
                        className="group relative w-full sm:w-64 h-14 sm:h-16 glass border border-white/10 text-white/90 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] font-serif font-medium hover:border-gold-500/50 hover:text-gold-300 hover:-translate-y-1 transition-all duration-500 uppercase overflow-hidden rounded-sm"
                    >
                        <span className="relative z-10">Learn More</span>
                    </Button>
                </div>

                {/* Stats Row */}
                <div className="mt-12 md:mt-20 flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16 w-full">
                    {[
                        { value: '$2.5M+', label: 'Payouts' },
                        { value: '5,000+', label: 'Funded Traders' },
                        { value: '24h', label: 'Fast Withdrawal' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center group flex-1 min-w-[80px] max-w-[120px]">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 group-hover:from-gold-100 group-hover:to-gold-300 transition-all duration-500">
                                {stat.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-metadoro-black via-metadoro-black/50 to-transparent z-10" />

            {/* Corner Accents - Hidden on mobile */}
            <div className="hidden sm:block absolute top-20 left-6 w-32 h-px bg-gradient-to-r from-metadoro-red/50 to-transparent" />
            <div className="hidden sm:block absolute top-20 left-6 w-px h-32 bg-gradient-to-b from-metadoro-red/50 to-transparent" />
            <div className="hidden sm:block absolute top-20 right-6 w-32 h-px bg-gradient-to-l from-metadoro-red/50 to-transparent" />
            <div className="hidden sm:block absolute top-20 right-6 w-px h-32 bg-gradient-to-b from-metadoro-red/50 to-transparent" />
        </section>
    );
}
