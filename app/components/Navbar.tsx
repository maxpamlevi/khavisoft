'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
                    KHAVISOFT
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Dịch vụ
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                        Về chúng tôi
                    </Link>
                    <Link
                        href="#contact"
                        className="px-5 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-secondary transition-colors"
                    >
                        Liên hệ
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl p-6 border-b border-gray-100">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="#services"
                            className="text-lg text-gray-600 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Dịch vụ
                        </Link>
                        <Link
                            href="#about"
                            className="text-lg text-gray-600 hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Về chúng tôi
                        </Link>
                        <Link
                            href="#contact"
                            className="text-lg text-primary font-semibold"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Liên hệ
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
