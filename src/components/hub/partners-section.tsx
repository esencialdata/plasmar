"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function PartnersSection() {
    return (
        <section id="partners" className="py-24 px-4 md:px-6 bg-canvas-ink text-white">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        Aliados de los mejores Wedding Planners <br className="hidden md:block" />
                        y Productores de Querétaro.
                    </h2>

                    <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Integra nuestra tecnología en tus servicios. Ofrecemos marca blanca, panel de control y precios de mayoreo.
                    </p>

                    <Button
                        size="lg"
                        className="bg-white text-canvas-ink hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-medium transition-transform hover:scale-105"
                    >
                        Conoce el Programa de Partners
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
