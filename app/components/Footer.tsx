import Link from 'next/link';

export function Footer() {
    return (
        <footer className="relative bg-[url('/site-bg.jpg')] bg-cover bg-fixed bg-no-repeat bg-center border-t border-white/10 pt-20 pb-10">
            <div className="absolute inset-0 bg-black/80" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-serif font-bold text-metadoro-white tracking-widest mb-6">METADORO</h3>
                        <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
                            Metadoro is a premium prop trading firm dedicated to skilled traders who value discipline, consistency, and risk management.
                            Master the market. Face the bull.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-metadoro-gold font-bold tracking-widest mb-6 uppercase text-sm">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Affiliate Program', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/60 hover:text-metadoro-red transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-metadoro-gold font-bold tracking-widest mb-6 uppercase text-sm">Legal</h4>
                        <ul className="space-y-4">
                            {['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Refund Policy'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/60 hover:text-metadoro-red transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Metadoro. All rights reserved.
                    </p>
                    <div className="text-white/40 text-xs max-w-xl text-center md:text-right">
                        All trading involves significant risk. Metadoro does not provide financial advice.
                    </div>
                </div>
            </div>
        </footer>
    );
}
