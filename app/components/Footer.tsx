import Link from 'next/link';
import { Twitter, Instagram, Youtube, Send } from 'lucide-react';

const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Send, href: '#', label: 'Telegram' },
];

const footerLinks = {
    company: ['About Us', 'Careers', 'Affiliate Program', 'Contact'],
    legal: ['Terms of Service', 'Privacy Policy', 'Risk Disclosure', 'Refund Policy'],
    resources: ['FAQ', 'Blog', 'Trading Rules', 'Support'],
};

export function Footer() {
    return (
        <footer className="relative bg-metadoro-black border-t border-white/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 cyber-grid opacity-10" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-metadoro-red/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <img src="/logo.png" alt="METADORO" className="h-8 w-auto" />
                        </Link>
                        <p className="text-white/50 max-w-sm mb-6 leading-relaxed text-sm">
                            Metadoro is a premium prop trading firm dedicated to skilled traders who value discipline, consistency, and risk management. Master the market. Face the bull.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-white/50 hover:text-gold-500 hover:border-gold-500/30 hover:-translate-y-1 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-gold-500 font-bold tracking-[0.2em] mb-6 uppercase text-xs">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gold-500 font-bold tracking-[0.2em] mb-6 uppercase text-xs">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-gold-500 font-bold tracking-[0.2em] mb-6 uppercase text-xs">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs text-center md:text-left">
                        © {new Date().getFullYear()} Metadoro. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="text-white/30 text-xs">
                            Powered by <span className="text-gold-500/80">Elite Trading Technology</span>
                        </div>
                    </div>
                </div>

                {/* Risk Disclaimer */}
                <div className="pb-8">
                    <div className="p-4 rounded-xl glass border border-white/5 text-center">
                        <p className="text-white/30 text-[10px] leading-relaxed max-w-4xl mx-auto">
                            <span className="text-metadoro-red">⚠️ Risk Warning:</span> Trading involves significant risk of loss and is not suitable for all investors.
                            Past performance is not indicative of future results. Metadoro does not provide financial advice.
                            Please read our full Risk Disclosure before participating.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
