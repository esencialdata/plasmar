import { HubHero } from "@/components/hub/hub-hero";
import { RouterCards } from "@/components/hub/router-cards";
import { TechCore } from "@/components/hub/tech-core";
import { InteractiveShowcase } from "@/components/hub/interactive-showcase";
import { PartnersSection } from "@/components/hub/partners-section";
import { HubFooter } from "@/components/hub/hub-footer";

export default function HubPage() {
    return (
        <main className="min-h-screen bg-canvas-bg font-sans text-canvas-ink">
            <HubHero />
            <RouterCards />
            <TechCore />
            <InteractiveShowcase />
            <PartnersSection />
            <HubFooter />
        </main>
    );
}
