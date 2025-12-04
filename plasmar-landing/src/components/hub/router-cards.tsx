"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const cards = [
    {
        id: "social",
        title: "Bodas y Eventos Sociales",
        desc: "Convierte tu invitación en una red social privada llena de amor y recuerdos.",
        cta: "Ir a Experiencias Sociales",
        tagline: "Ver Demo Romántica",
        href: "/bodas",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop", // Wedding table detail
        accent: "hover:border-rose-300",
    },
    {
        id: "teen",
        title: "XV Años y Graduaciones",
        desc: "Live Cams, filtros y tendencias para la generación que vive en el celular.",
        cta: "Ir a Experiencias Teen",
        tagline: "Ver Demo Party",
        href: "#", // Placeholder
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop", // Party/Neon
        accent: "hover:border-purple-400",
    },
    {
        id: "corp",
        title: "Empresarial y BTL",
        desc: "Registro QR, Data de asistentes y amplificación de marca en cada foto.",
        cta: "Ir a Soluciones Corporativas",
        tagline: "Ver Soluciones de Acceso",
        href: "#", // Placeholder
        image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1000&auto=format&fit=crop", // Corporate/Badge
        accent: "hover:border-blue-400",
    },
];

export function RouterCards() {
    return (
        <section id="router" className="py-24 px-4 md:px-6 bg-canvas-bg">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <Link href={card.href} className="block h-full w-full">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

                                {/* Content */}
                                <div className={cn(
                                    "absolute inset-0 p-8 flex flex-col justify-end border-2 border-transparent transition-colors duration-300 rounded-3xl",
                                    card.accent
                                )}>
                                    <span className="inline-block text-xs font-medium text-white/70 tracking-wider uppercase mb-2">
                                        {card.tagline}
                                    </span>

                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                        {card.title}
                                    </h3>

                                    <p className="text-gray-300 mb-8 line-clamp-3 group-hover:text-white transition-colors">
                                        {card.desc}
                                    </p>

                                    <div className="flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                                        {card.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
