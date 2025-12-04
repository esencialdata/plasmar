"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart, Music, Building2 } from "lucide-react";

type Mode = "wedding" | "xv" | "corp";

const modes = [
    { id: "wedding", label: "Modo Boda", icon: Heart },
    { id: "xv", label: "Modo XV", icon: Music },
    { id: "corp", label: "Modo Empresa", icon: Building2 },
];

export function InteractiveShowcase() {
    const [activeMode, setActiveMode] = useState<Mode>("wedding");

    return (
        <section className="py-24 px-4 md:px-6 bg-gray-50 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Controls */}
                    <div className="order-2 md:order-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-canvas-ink mb-4">
                                Adaptable a tu identidad.
                            </h2>
                            <p className="text-lg text-canvas-muted">
                                Personalizamos la interfaz para que respire tu marca o la temática de tu fiesta.
                            </p>
                        </motion.div>

                        <div className="flex flex-col gap-4">
                            {modes.map((mode) => (
                                <button
                                    key={mode.id}
                                    onClick={() => setActiveMode(mode.id as Mode)}
                                    className={cn(
                                        "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 border-2",
                                        activeMode === mode.id
                                            ? "bg-white border-canvas-ink shadow-lg scale-105"
                                            : "bg-transparent border-transparent hover:bg-white/50 text-gray-500"
                                    )}
                                >
                                    <div className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                                        activeMode === mode.id ? "bg-canvas-ink text-white" : "bg-gray-200"
                                    )}>
                                        <mode.icon className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-lg">{mode.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />

                            {/* Screen Content */}
                            <div className="absolute inset-0 bg-white z-10 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    {activeMode === "wedding" && (
                                        <motion.div
                                            key="wedding"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="h-full bg-[#fafafa] flex flex-col"
                                        >
                                            {/* Wedding UI */}
                                            <div className="h-1/2 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800')] bg-cover bg-center relative">
                                                <div className="absolute inset-0 bg-black/20" />
                                                <div className="absolute bottom-6 left-6 text-white">
                                                    <p className="font-serif italic text-sm mb-1">Save the Date</p>
                                                    <h3 className="font-serif text-3xl">Ana & Carlos</h3>
                                                </div>
                                            </div>
                                            <div className="p-6 space-y-4">
                                                <div className="h-2 w-24 bg-rose-200 rounded-full" />
                                                <div className="space-y-2">
                                                    <div className="h-20 bg-white rounded-xl shadow-sm border border-rose-100 p-3 flex gap-3 items-center">
                                                        <div className="w-12 h-12 rounded-full bg-rose-50" />
                                                        <div className="flex-1 space-y-2">
                                                            <div className="h-2 w-3/4 bg-gray-100 rounded" />
                                                            <div className="h-2 w-1/2 bg-gray-100 rounded" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeMode === "xv" && (
                                        <motion.div
                                            key="xv"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="h-full bg-slate-900 flex flex-col"
                                        >
                                            {/* XV UI */}
                                            <div className="h-1/2 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800')] bg-cover bg-center relative">
                                                <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay" />
                                                <div className="absolute bottom-6 left-6 text-white">
                                                    <h3 className="font-bold text-4xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                                                        SOFIA XV
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="p-6 space-y-4">
                                                <div className="flex gap-2 overflow-x-auto pb-2">
                                                    {[1, 2, 3].map(i => (
                                                        <div key={i} className="w-16 h-16 rounded-full border-2 border-purple-500 flex-shrink-0" />
                                                    ))}
                                                </div>
                                                <div className="h-24 bg-white/10 rounded-xl backdrop-blur-md border border-white/20" />
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeMode === "corp" && (
                                        <motion.div
                                            key="corp"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="h-full bg-white flex flex-col"
                                        >
                                            {/* Corporate UI */}
                                            <div className="h-24 bg-blue-900 flex items-end p-6">
                                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-blue-900 text-xs">
                                                    Logo
                                                </div>
                                            </div>
                                            <div className="p-6 space-y-6">
                                                <div className="text-center space-y-2">
                                                    <div className="w-24 h-24 mx-auto bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                                                        <span className="text-xs text-gray-400">QR Code</span>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">Juan Pérez</p>
                                                    <p className="text-xs text-gray-500">Tech Summit 2025</p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="h-20 bg-blue-50 rounded-lg" />
                                                    <div className="h-20 bg-blue-50 rounded-lg" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
