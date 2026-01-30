'use client';

import Link from 'next/link';
import { Button } from './ui/Button';
import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ['Challenges', 'Trading Rules', 'About', 'FAQ'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5">
            {/* Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-metadoro-red/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative flex items-center group">
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="METADORO"
                            className="h-8 w-auto object-contain transition-all duration-500 group-hover:brightness-125"
                        />
                        {/* Logo Glow */}
                        <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gold-500" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="relative px-5 py-2 text-xs tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 uppercase group"
                        >
                            <span className="relative z-10">{item}</span>
                            {/* Hover Background */}
                            <div className="absolute inset-0 bg-white/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            {/* Bottom Line */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-metadoro-red to-transparent group-hover:w-full transition-all duration-500" />
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="hidden lg:flex items-center gap-2 text-xs tracking-[0.15em] text-white/70 hover:text-gold-300 uppercase transition-colors duration-300 px-4 py-2 rounded-sm hover:bg-white/5"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Login
                    </Link>

                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden lg:inline-flex bg-gradient-to-r from-metadoro-red to-metadoro-red-dark border-0 text-white text-xs tracking-[0.15em] uppercase font-bold px-6 py-2.5 rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Get Funded
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors rounded-sm hover:bg-white/5"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 right-0 glass-dark border-t border-white/5 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="block px-4 py-3 text-sm tracking-[0.15em] text-white/70 hover:text-white hover:bg-white/5 rounded-sm transition-all uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                        <Link href="#" className="px-4 py-3 text-sm tracking-[0.15em] text-white/70 hover:text-white hover:bg-white/5 rounded-sm uppercase">
                            Login
                        </Link>
                        <Button className="w-full bg-gradient-to-r from-metadoro-red to-metadoro-red-dark text-white py-3 rounded-sm uppercase tracking-[0.15em] text-sm font-bold">
                            Get Funded
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
