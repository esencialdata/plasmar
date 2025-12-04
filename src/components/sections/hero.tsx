"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface HeroProps {
    onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background Placeholder */}
            <div className="absolute inset-0 z-0 bg-slate-900">
                {/* Replace with actual video component */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight">
                        No dejes que tu boda se quede en los celulares de tus invitados.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
                        Transforma tu invitación en una red social privada. Sin descargar apps. Sin perder recuerdos.
                    </p>

                    <div className="flex flex-col items-center gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                            onClick={onOpenDemo}
                        >
                            <Play className="w-4 h-4 mr-2 fill-current" /> Ver Demo en Vivo
                        </Button>

                        <p className="text-sm text-gray-400 mt-2">
                            Usado en +200 eventos en Querétaro y CDMX
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
