"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Camera, Wifi, Zap } from "lucide-react";

export function LiveCam() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Transform for phone screen content
    const screen1Opacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
    const screen2Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
    const screenScale = useTransform(scrollYProgress, [0.3, 0.5], [1, 1.05]);

    const features = [
        {
            icon: <Zap className="w-6 h-6 text-accent" />,
            title: "Zero-App Friction",
            desc: "Funciona directo en Safari y Chrome. Escanean el QR y listo.",
        },
        {
            icon: <Wifi className="w-6 h-6 text-accent" />,
            title: "Smart Upload",
            desc: "¿Hacienda sin señal? La foto se guarda y se sube sola cuando vuelve el internet.",
        },
        {
            icon: <Camera className="w-6 h-6 text-accent" />,
            title: "Instant Branding",
            desc: "Cada foto se revela con el monograma de los novios automáticamente.",
        },
    ];

    return (
        <section ref={containerRef} className="py-24 md:py-32 overflow-hidden bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 md:order-1 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
                                Apunta. <br />
                                Dispara. <br />
                                <span className="text-accent">Celebra.</span>
                            </h2>

                            <div className="space-y-8 mt-12">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-1">{feature.title}</h3>
                                            <p className="text-text-muted leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="order-1 md:order-2 flex justify-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden"
                        >
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />

                            {/* Screen 1: Camera UI */}
                            <motion.div
                                style={{ opacity: screen1Opacity }}
                                className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center z-10"
                            >
                                <div className="text-white text-center">
                                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p>Tomando foto...</p>
                                </div>
                                {/* Simulated Camera View */}
                                <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
                            </motion.div>

                            {/* Screen 2: Feed UI */}
                            <motion.div
                                style={{ opacity: screen2Opacity, scale: screenScale }}
                                className="absolute inset-0 bg-white z-10 overflow-hidden"
                            >
                                {/* Feed Header */}
                                <div className="h-16 bg-white border-b flex items-center justify-center pt-6">
                                    <span className="font-serif font-bold">Ana & Carlos</span>
                                </div>
                                {/* Feed Content */}
                                <div className="p-2 grid grid-cols-2 gap-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                            {/* Placeholder images would go here */}
                                        </div>
                                    ))}
                                </div>
                                {/* Branding Overlay */}
                                <div className="absolute bottom-8 left-0 right-0 text-center">
                                    <div className="inline-block bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                                        Subido por Invitado
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
