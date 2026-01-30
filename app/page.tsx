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

      {/* Marketing / Narrative Section - Futuristic Style */}
      <section className="py-32 text-center px-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-metadoro-black via-metadoro-red/10 to-metadoro-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-metadoro-red/20 rounded-full blur-[150px]" />

        {/* Decorative Lines */}
        <div className="absolute top-20 left-10 w-40 h-px bg-gradient-to-r from-metadoro-red/50 to-transparent" />
        <div className="absolute bottom-20 right-10 w-40 h-px bg-gradient-to-l from-gold-500/50 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Quote Mark */}
          <div className="text-8xl text-metadoro-red/20 font-serif leading-none mb-4">"</div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-8 max-w-4xl mx-auto leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
              THE MARKET DOES NOT FORGIVE.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-metadoro-red via-metadoro-red-light to-gold-500">
              NEITHER DO WE.
            </span>
          </h2>

          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Are you ready to stop gambling and start trading like a professional?
          </p>

          {/* CTA Button with Glow */}
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-gold-700 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <a
              href="#"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 text-metadoro-black px-10 py-5 text-sm font-bold rounded-xl hover:from-gold-400 hover:to-gold-500 hover:-translate-y-1 transition-all duration-500 uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              Start Your Journey
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/30 text-xs uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure Payments
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Fast Withdrawals
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 Support
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
