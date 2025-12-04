"use client";

import * as React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScrolled) {
            setIsScrolled(true);
        } else if (latest <= 50 && isScrolled) {
            setIsScrolled(false);
        }
    });

    const navLinks = [
        { name: "Cómo funciona", href: "#how-it-works" },
        { name: "Experiencia", href: "#experience" },
        { name: "Planners", href: "#planners" },
    ];

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-serif font-bold tracking-tight">
                    Plasmar
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-main/80 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="#"
                        className="text-sm font-medium text-text-main hover:text-primary"
                    >
                        Login
                    </Link>
                    <Button variant="default" size="sm" className="rounded-full px-6">
                        Crear mi Evento
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-text-main"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t"
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium py-2 border-b border-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 mt-2">
                            <Link
                                href="#"
                                className="text-base font-medium py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                            <Button className="w-full">Crear mi Evento</Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
