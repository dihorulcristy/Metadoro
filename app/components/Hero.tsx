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

                {/* 2. Dark Vignette - Stronger at bottom/corners to emphasize center */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(5,1,1,0.8)_80%,_rgba(0,0,0,1)_100%)]" />

                {/* 3. Gradient Overlays for integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-metadoro-black via-transparent to-black/40 opacity-80" />
            </div>

            <div className="relative z-20 max-w-5xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center pt-20">

                {/* Eyebrow Label - Centered Pill */}
                <div className="mb-8">
                    <span className="inline-block border border-gold-500/30 bg-black/40 backdrop-blur-md rounded-full px-6 py-2 text-gold-300 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        Enter the Arena of Elite Prop Trading
                    </span>
                </div>

                {/* Main Title - Centered & Stacked */}
                <h1 className="flex flex-col items-center font-serif font-bold mb-10 leading-[1.0] tracking-tight">
                    <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#F9E59E] via-[#D4AF37] to-[#9E7D22] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] filter brightness-110 whitespace-nowrap">
                        MASTER THE MARKET.
                    </span>
                    <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mt-2 tracking-normal whitespace-nowrap relative">
                        FACE THE BULL.
                        {/* Subtle brightness underglow */}
                        <span className="absolute inset-0 bg-white blur-[50px] opacity-10 -z-10" />
                    </span>
                </h1>

                {/* CTA Button - Centered Red */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <Button
                        className="group relative w-64 h-16 bg-[#5e0b0b] border border-white/10 text-white text-sm tracking-[0.25em] font-serif font-bold shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:bg-[#7a0e0e] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:border-gold-500/30 hover:-translate-y-0.5 transition-all duration-300 uppercase overflow-hidden"
                    >
                        <span className="relative z-10">Get Funded</span>
                        {/* Internal Shine Effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />
                    </Button>
                </div>
            </div>

            {/* Bottom Vignette Fade into Products */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-metadoro-black to-transparent z-10" />
        </section>
    );
}
