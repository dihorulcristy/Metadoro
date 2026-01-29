import { Button } from './ui/Button';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-metadoro-black">
            {/* Background Image with Cinematic Overlay */}
            <div className="absolute inset-0 z-0 select-none">
                <img
                    src="/hero-bg.png?v=4"
                    alt="Matador facing bull in arena"
                    className="w-full h-full object-cover opacity-90"
                />
                {/* Complex Gradient Overlays for "Arena Atmosphere" */}
                <div className="absolute inset-0 bg-gradient-to-t from-metadoro-black via-metadoro-black/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--metadoro-black)_90%)]" />
                <div className="absolute inset-0 bg-gradient-to-r from-metadoro-black/80 via-transparent to-metadoro-black/80" />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-20">
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-2 border border-gold-300/30 rounded-full bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                    <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                    <span className="text-gold-100 text-xs tracking-[0.3em] uppercase font-bold text-shadow-sm">
                        Enter the Arena of Elite Prop Trading
                    </span>
                </div>

                {/* Main Title - Stacked & Metallic */}
                <h1 className="flex flex-col items-center justify-center font-bold mb-10 leading-none">
                    <span className="text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gold-100 via-gold-300 to-gold-700 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter">
                        MASTER THE MARKET.
                    </span>
                    <span className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mt-2">
                        FACE THE BULL.
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                    <Button
                        className="group relative bg-gradient-to-b from-metadoro-red-light to-metadoro-red border border-metadoro-red-light text-white px-12 py-5 text-base tracking-[0.2em] font-bold shadow-[0_0_30px_rgba(138,28,28,0.5)] hover:shadow-[0_0_60px_rgba(138,28,28,0.8)] hover:scale-105 transition-all duration-300 uppercase overflow-hidden"
                    >
                        <span className="relative z-10 group-hover:text-gold-100 transition-colors">Get Funded</span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {/* Shine effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                    </Button>
                </div>
            </div>

            {/* Bottom Vignette Fade into Products */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-metadoro-black to-transparent z-10" />
        </section>
    );
}
