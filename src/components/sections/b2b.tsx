"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function B2B() {
    return (
        <section id="planners" className="py-24 bg-[#F5F5F0]">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">
                        ¿Eres Planner? Eleva tu servicio.
                    </h2>

                    <p className="text-xl text-text-muted leading-relaxed">
                        Ofrece nuestra tecnología con tu propia marca (White Label). <br />
                        Precios especiales por volumen y herramientas de gestión incluidas.
                    </p>

                    <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg">
                        Solicitar Cuenta de Partner
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
