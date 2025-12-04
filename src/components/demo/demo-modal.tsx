"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Upload, Image as ImageIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Post {
    id: number;
    image: string;
    timestamp: string;
    likes: number;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
    const [posts, setPosts] = React.useState<Post[]>([
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
            timestamp: "Hace 2 min",
            likes: 12
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=800&auto=format&fit=crop",
            timestamp: "Hace 5 min",
            likes: 8
        }
    ]);
    const [isUploading, setIsUploading] = React.useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setIsUploading(true);
            // Simulate upload delay
            setTimeout(() => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const newPost: Post = {
                        id: Date.now(),
                        image: e.target?.result as string,
                        timestamp: "Justo ahora",
                        likes: 0
                    };
                    setPosts([newPost, ...posts]);
                    setIsUploading(false);
                };
                reader.readAsDataURL(file);
            }, 1500);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Content - Mobile Simulator */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-sm bg-white rounded-[2.5rem] overflow-hidden shadow-2xl h-[80vh] max-h-[800px] flex flex-col border-8 border-slate-900"
                        >
                            {/* Header */}
                            <div className="bg-white border-b p-4 flex items-center justify-between sticky top-0 z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-xs">
                                        P
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-sm leading-none">Begoña & Emiliano</h3>
                                        <p className="text-[10px] text-gray-500">#BegoñaYEmiliano2026</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Feed Area */}
                            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4 scrollbar-hide">
                                {/* Welcome Card */}
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-center space-y-2">
                                    <p className="text-sm text-gray-600">
                                        👋 ¡Bienvenido al Demo! <br />
                                        Sube una foto para ver cómo funciona la magia.
                                    </p>
                                    <p className="text-xs text-amber-500 font-medium bg-amber-50 inline-block px-2 py-1 rounded-full">
                                        Modo Simulación: Tus fotos no se guardan.
                                    </p>
                                </div>

                                {/* Posts */}
                                <AnimatePresence mode="popLayout">
                                    {posts.map((post) => (
                                        <motion.div
                                            key={post.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="bg-white rounded-2xl overflow-hidden shadow-sm"
                                        >
                                            <div className="relative aspect-[4/5]">
                                                <img
                                                    src={post.image}
                                                    alt="Post"
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Watermark Overlay */}
                                                <div className="absolute bottom-4 right-4 opacity-80">
                                                    <div className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                                                        <span className="font-serif font-bold text-[10px]">P</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button className="text-rose-500 hover:scale-110 transition-transform">
                                                        <Heart className="w-5 h-5 fill-current" />
                                                    </button>
                                                    <span className="text-xs font-medium text-gray-600">{post.likes} likes</span>
                                                </div>
                                                <span className="text-[10px] text-gray-400">{post.timestamp}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            {/* Bottom Action Bar */}
                            <div className="bg-white border-t p-4 pb-6">
                                <div className="grid grid-cols-3 gap-4 items-center">
                                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                        <ImageIcon className="w-6 h-6" />
                                        <span className="text-[10px]">Galería</span>
                                    </button>

                                    <div className="relative -top-6">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            ref={fileInputRef}
                                            onChange={handleFileSelect}
                                        />
                                        <Button
                                            size="icon"
                                            className={cn(
                                                "w-16 h-16 rounded-full shadow-xl border-4 border-white transition-all hover:scale-105",
                                                isUploading ? "bg-gray-200 animate-pulse" : "bg-accent hover:bg-accent/90"
                                            )}
                                            onClick={() => fileInputRef.current?.click()}
                                            disabled={isUploading}
                                        >
                                            {isUploading ? (
                                                <Upload className="w-6 h-6 text-gray-500 animate-bounce" />
                                            ) : (
                                                <Camera className="w-8 h-8 text-white" />
                                            )}
                                        </Button>
                                    </div>

                                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors">
                                        <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
                                        </div>
                                        <span className="text-[10px]">Perfil</span>
                                    </button>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
