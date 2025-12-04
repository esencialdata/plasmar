"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Hook } from "@/components/sections/hook";
import { LiveCam } from "@/components/sections/live-cam";
import { Ecosystem } from "@/components/sections/ecosystem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { B2B } from "@/components/sections/b2b";
import { DemoModal } from "@/components/demo/demo-modal";
import { FloatingCameraButton } from "@/components/ui/floating-camera-button";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero onOpenDemo={() => setIsDemoOpen(true)} />
      <Hook />
      <LiveCam />
      <Ecosystem />
      <HowItWorks />
      <Pricing />
      <B2B />
      <Footer />

      {/* Floating Action Button */}
      <AnimatePresence>
        {!isDemoOpen && (
          <FloatingCameraButton onClick={() => setIsDemoOpen(true)} />
        )}
      </AnimatePresence>

      {/* Demo Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </main>
  );
}
