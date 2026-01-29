import { Button } from './ui/Button';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-metadoro-black">
            {/* Background Image with Cinematic Overlay & Grade */}
            <div className="absolute inset-0 z-0 select-none bg-metadoro-black">
                <img
                    src="/hero-bg.png?v=4"
                    alt="Matador facing bull in arena"
                    className="w-full h-full object-cover opacity-100 contrast-[1.15] saturate-[1.1] brightness-[0.9]"
                />

                {/* 1. Cinematic Noise / Film Grain Overlay - Masks low res artifacts */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                {/* 2. Vignette - Focuses eye on center/right and hides edges */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,_transparent_0%,_rgba(5,1,1,0.8)_100%)]" />

                {/* 3. Gradient Overlays for integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-metadoro-black via-transparent to-black/40 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-metadoro-black/90 via-metadoro-black/20 to-transparent" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
                    {/* Text Column - Strictly limited to left side (Spawn 5-6 cols) to avoid Bull overlap */}
                    <div className="md:col-span-7 lg:col-span-6 flex flex-col items-start justify-center pt-24">

                        {/* Eyebrow Label - Very subtle */}
                        <div className="mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            <span className="text-gold-300/80 text-xs tracking-[0.4em] uppercase font-bold border-l border-gold-500 pl-4 py-0.5">
                                Elite Prop Trading
                            </span>
                        </div>

                        {/* Main Title - Stacked with elegant spacing */}
                        <h1 className="flex flex-col items-start font-serif font-bold mb-10 leading-[1.0] tracking-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#cfc09f] via-[#cfa044] to-[#cfc09f] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] filter brightness-110 whitespace-nowrap">
                                MASTER THE MARKET.
                            </span>
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] mt-3 tracking-normal whitespace-nowrap relative">
                                FACE THE BULL.
                                {/* Subtle underglow for white text */}
                                <span className="absolute inset-0 bg-white blur-[40px] opacity-10 -z-10" />
                            </span>
                        </h1>

                        {/* CTA Section */}
                        <div className="flex flex-col md:flex-row items-center justify-start gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            <Button
                                className="group relative w-60 h-14 bg-[#3a0303] border border-white/20 text-white text-xs tracking-[0.25em] font-sans font-bold shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#4a0404] hover:border-gold-500/50 hover:text-gold-100 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all duration-500 uppercase overflow-hidden backdrop-blur-sm"
                            >
                                <span className="relative z-10">Get Funded</span>
                            </Button>

                            <a href="#" className="hidden md:block text-xs uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors border-b border-transparent hover:border-gold-500 pb-0.5">
                                View Challenges
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Vignette Fade into Products */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-metadoro-black to-transparent z-10" />
        </section>
    );
}
