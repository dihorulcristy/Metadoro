import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { HallOfMatadors } from './components/HallOfMatadors';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-metadoro-black text-metadoro-white selection:bg-metadoro-red selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <HallOfMatadors />

      {/* Marketing / Narrative Section at bottom */}
      <section className="py-32 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-metadoro-red/10" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 max-w-4xl mx-auto">
            "THE MARKET DOES NOT FORGIVE.<br />NEITHER DO WE."
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Are you ready to stop gambling and start trading?
          </p>
          {/* Reusing button with inline style for simplicity or verify Button import */}
          <a href="#" className="inline-block bg-gradient-to-r from-gold-300 to-gold-500 text-metadoro-black px-8 py-4 text-lg font-bold rounded-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all uppercase tracking-[0.2em]">
            Get Funded
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
