"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingCameraButtonProps {
    onClick: () => void;
}

export function FloatingCameraButton({ onClick }: FloatingCameraButtonProps) {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsScrolling(false), 1500); // Show text again after 1.5s of no scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 safe-area-bottom">
            <motion.button
                onClick={onClick}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "flex items-center gap-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm",
                    isScrolling ? "p-4" : "px-6 py-4"
                )}
            >
                <Camera className="w-6 h-6" />
                <AnimatePresence>
                    {!isScrolling && (
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="font-medium whitespace-nowrap overflow-hidden"
                        >
                            Subir Foto
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
