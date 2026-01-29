import Link from 'next/link';
import { Button } from './ui/Button';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-metadoro-black/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative flex items-center group">
                    <img
                        src="/logo.png"
                        alt="METADORO"
                        className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['Challenges', 'Trading Rules', 'About', 'FAQ'].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-sm tracking-widest text-metadoro-white/80 hover:text-metadoro-gold transition-colors uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="#" className="hidden md:block text-sm tracking-widest text-metadoro-white hover:text-metadoro-gold uppercase">
                        Login
                    </Link>
                    <Button variant="outline" size="sm" className="hidden md:inline-flex">
                        Get Funded
                    </Button>

                    {/* Mobile Menu Toggle (Simplified) */}
                    <button className="md:hidden text-metadoro-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
