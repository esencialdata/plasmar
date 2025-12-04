"use client";

import { motion } from "framer-motion";
import { MapPin, CheckCircle, Music, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

const BentoItem = ({
    className,
    title,
    desc,
    icon,
    delay = 0
}: {
    className?: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    delay?: number;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className={cn(
            "bg-gray-50 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 border border-gray-100",
            className
        )}
    >
        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary">
            {icon}
        </div>
        <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-2">{title}</h3>
            <p className="text-text-muted">{desc}</p>
        </div>
    </motion.div>
);

export function Ecosystem() {
    return (
        <section className="py-24 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                        El Ecosistema del Evento
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Más que fotos. Una suite completa para gestionar tu boda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                    {/* Box 1: Logistics (Large - Spans 2 cols, 2 rows on desktop) */}
                    <BentoItem
                        className="md:col-span-2 md:row-span-2 bg-slate-900 text-white border-none"
                        title="Invitación Inteligente"
                        desc="Mapa Waze/Google, Dress Code y Clima en tiempo real. Todo lo que tus invitados necesitan saber."
                        icon={<MapPin className="text-accent" />}
                        delay={0}
                    />

                    {/* Box 2: RSVP (Square) */}
                    <BentoItem
                        className="md:col-span-1 md:row-span-1"
                        title="Control de Acceso"
                        desc="Confirmación de asistencia y generación de pases QR."
                        icon={<CheckCircle />}
                        delay={0.1}
                    />

                    {/* Box 3: Music (Square) */}
                    <BentoItem
                        className="md:col-span-1 md:row-span-1"
                        title="DJ Request"
                        desc="Tus invitados sugieren las canciones que no pueden faltar."
                        icon={<Music />}
                        delay={0.2}
                    />

                    {/* Box 4: Gifts (Rectangular - Spans 3 cols) */}
                    <BentoItem
                        className="md:col-span-3 md:row-span-1 bg-gray-100"
                        title="Mesa de Regalos"
                        desc="Links directos a Amazon/Liverpool o datos bancarios seguros."
                        icon={<Gift />}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}
