"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HubHero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Video Background (Placeholder) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale" />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto space-y-8"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        Creamos el ecosistema digital <br className="hidden md:block" />
                        de tu evento.
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                        La plataforma "todo en uno" para centralizar registros, fotos y experiencias. <br className="hidden md:block" />
                        Sin descargar aplicaciones.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
                        <Button
                            size="lg"
                            className="w-full md:w-auto rounded-full bg-white text-black hover:bg-gray-200 text-base px-8 py-6 font-medium min-w-[200px]"
                            onClick={() => scrollToSection("router")}
                        >
                            Soy una Empresa
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full md:w-auto rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 py-6 font-medium min-w-[200px] backdrop-blur-sm"
                            onClick={() => scrollToSection("partners")}
                        >
                            Soy Organizador
                        </Button>
                        <Button
                            size="lg"
                            className="w-full md:w-auto rounded-full bg-canvas-accent text-black hover:bg-canvas-accent/90 text-base px-8 py-6 font-medium min-w-[200px]"
                            onClick={() => scrollToSection("router")}
                        >
                            Celebro mi Fiesta
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Descubre más</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.div>
        </section>
    );
}
