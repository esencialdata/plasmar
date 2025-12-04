"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart, Camera, Download } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Reciben el Link",
        desc: "Tu invitación web llega por WhatsApp.",
        icon: <MessageCircle className="w-8 h-8 text-white" />,
        color: "bg-blue-500",
    },
    {
        id: 2,
        title: "Interactúan",
        desc: "Confirman asistencia y ven la historia de amor.",
        icon: <Heart className="w-8 h-8 text-white" />,
        color: "bg-rose-500",
    },
    {
        id: 3,
        title: "El Gran Día",
        desc: "Escanean el QR en su mesa y empiezan a subir fotos.",
        icon: <Camera className="w-8 h-8 text-white" />,
        color: "bg-amber-500",
    },
    {
        id: 4,
        title: "El Recuerdo",
        desc: "Al día siguiente, todos descargan su foto favorita con tu marca.",
        icon: <Download className="w-8 h-8 text-white" />,
        color: "bg-emerald-500",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                        Cómo Funciona
                    </h2>
                    <p className="text-text-muted">
                        Tan simple como compartir un link.
                    </p>
                </div>

                <div className="relative">
                    {/* Horizontal Scroll Container */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 px-4 md:justify-center scrollbar-hide">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex-shrink-0 w-80 snap-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                            >
                                {/* Number Watermark */}
                                <span className="absolute -top-4 -right-4 text-9xl font-bold text-gray-50 opacity-50 select-none">
                                    {step.id}
                                </span>

                                <div className={`w-16 h-16 rounded-2xl ${step.color} shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform`}>
                                    {step.icon}
                                </div>

                                <h3 className="text-xl font-serif font-bold text-primary mb-3 relative z-10">
                                    {step.title}
                                </h3>
                                <p className="text-text-muted relative z-10">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
