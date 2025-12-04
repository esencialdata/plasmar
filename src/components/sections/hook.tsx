"use client";

import { motion } from "framer-motion";

export function Hook() {
    return (
        <section className="bg-primary text-white py-24 md:py-32 px-4 md:px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <h2 className="text-3xl md:text-5xl font-serif leading-relaxed md:leading-relaxed text-gray-200">
                        "El fotógrafo profesional capturará los momentos perfectos. Tus amigos capturarán la fiesta real."
                    </h2>

                    <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-50" />

                    <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed">
                        Centralizamos cientos de fotos, videos y deseos en un solo feed en vivo. <br className="hidden md:block" />
                        <span className="text-white font-medium">El ángulo que nadie más ve.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
