import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-gradient-to-r from-metadoro-red to-metadoro-red-dark text-white hover:from-metadoro-red-light hover:to-metadoro-red border border-metadoro-red-light/20 shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]',
            secondary: 'bg-gradient-to-r from-gold-500 to-gold-700 text-black hover:from-gold-400 hover:to-gold-600 border border-gold-300/20 shadow-[0_0_30px_rgba(245,158,11,0.3)]',
            outline: 'bg-transparent border border-white/10 text-white/80 hover:border-gold-500/50 hover:text-gold-300 hover:bg-white/5 backdrop-blur-sm',
            ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
            glow: 'bg-gradient-to-r from-metadoro-red via-metadoro-red-light to-metadoro-red text-white border border-white/10 shadow-[0_0_40px_rgba(220,38,38,0.5)] hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] animate-[glow_2s_ease-in-out_infinite_alternate]',
        };

        const sizes = {
            sm: 'px-5 py-2.5 text-xs',
            md: 'px-7 py-3.5 text-sm',
            lg: 'px-10 py-5 text-base font-semibold',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg transition-all duration-500 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none uppercase tracking-[0.15em] font-bold hover:-translate-y-0.5',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';

export { Button, cn };
