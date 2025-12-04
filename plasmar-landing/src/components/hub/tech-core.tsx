"use client";

import { motion } from "framer-motion";
import { Zap, WifiOff, MonitorPlay, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Zero-Friction",
        desc: "Tus invitados no bajan apps. Todo sucede en el navegador de su teléfono.",
        icon: <Zap className="w-8 h-8" />,
    },
    {
        title: "Offline-First",
        desc: "Nuestra tecnología funciona en haciendas, playas y sótanos sin señal estable.",
        icon: <WifiOff className="w-8 h-8" />,
    },
    {
        title: "Real-Time Gallery",
        desc: "Centraliza miles de fotos en una pantalla viva durante el evento.",
        icon: <MonitorPlay className="w-8 h-8" />,
    },
    {
        title: "Data & Security",
        desc: "Tus recuerdos y listas de asistencia, encriptados y seguros.",
        icon: <ShieldCheck className="w-8 h-8" />,
    },
];

export function TechCore() {
    return (
        <section className="py-24 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-canvas-ink mb-4"
                    >
                        Una plataforma. Infinitas posibilidades.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-canvas-ink">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-canvas-ink mb-2">{feature.title}</h3>
                                <p className="text-canvas-muted leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
