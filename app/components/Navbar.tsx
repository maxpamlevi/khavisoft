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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass-nav py-4 shadow-lg shadow-primary/10'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-primary transition-colors">
                    KHAVISOFT
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="#services"
                        className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
                    >
                        Dịch vụ
                    </Link>
                    <Link
                        href="#about"
                        className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer"
                    >
                        Về chúng tôi
                    </Link>
                    <Link
                        href="https://demo.khavi.io.vn/app/home"
                        className="px-4 py-2 text-sm font-semibold text-white border-2 border-primary/50 rounded-full hover:bg-primary/20 hover:border-primary transition-all cursor-pointer"
                    >
                        Đăng nhập
                    </Link>
                    <Link
                        href="#contact"
                        className="px-5 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-secondary transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 cursor-pointer"
                    >
                        Liên hệ
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-card p-6 border-t border-primary/20">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="#services"
                            className="text-lg text-gray-300 hover:text-primary transition-colors cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Dịch vụ
                        </Link>
                        <Link
                            href="#about"
                            className="text-lg text-gray-300 hover:text-primary transition-colors cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Về chúng tôi
                        </Link>
                        <Link
                            href="https://demo.khavi.io.vn/app/home"
                            className="text-lg text-white font-semibold cursor-pointer"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            href="#contact"
                            className="text-lg bg-primary text-white py-2 px-4 rounded-full font-semibold text-center cursor-pointer shadow-lg shadow-primary/30"
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
