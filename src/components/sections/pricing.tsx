"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Essential Link",
        price: "$1,999",
        desc: "Para quien solo quiere informar.",
        features: ["Invitación Web", "RSVP Digital", "Mapas Interactivos", "Cuenta Regresiva"],
        recommended: false,
    },
    {
        name: "Social Experience",
        price: "$3,499",
        desc: "Para quien quiere la fiesta total.",
        features: [
            "Todo lo anterior",
            "Live Cam Experience",
            "Galería Pública en Vivo",
            "Descarga de Fotos (Marca de Agua)",
            "Mesa de Regalos"
        ],
        recommended: true,
    },
    {
        name: "Legacy Premium",
        price: "$5,999",
        desc: "Para quien quiere exclusividad.",
        features: [
            "Todo lo anterior",
            "Dominio .com propio",
            "Acceso con contraseña",
            "Soporte VIP 24/7",
            "Descarga de Fotos (Alta Res)"
        ],
        recommended: false,
    },
];

export function Pricing() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                        Planes Transparentes
                    </h2>
                    <p className="text-text-muted">
                        Sin costos ocultos. Elige la experiencia que deseas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={cn(
                                "relative rounded-3xl p-8 border transition-all duration-300",
                                plan.recommended
                                    ? "bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10"
                                    : "bg-white text-primary border-gray-200 hover:shadow-lg"
                            )}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                                    Recomendado
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-4xl font-serif font-bold mb-2">{plan.price}</div>
                                <p className={cn("text-sm", plan.recommended ? "text-gray-400" : "text-text-muted")}>
                                    {plan.desc}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm">
                                        <Check className={cn("w-5 h-5 flex-shrink-0", plan.recommended ? "text-accent" : "text-primary")} />
                                        <span className={plan.recommended ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={cn(
                                    "w-full rounded-full",
                                    plan.recommended
                                        ? "bg-accent hover:bg-accent/90 text-white"
                                        : "bg-primary hover:bg-primary/90 text-white"
                                )}
                            >
                                Seleccionar
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
