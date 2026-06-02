import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import {
  Hero, TrustBar, Services, WhyUs, Process, Portfolio,
  Automations, EarlyAccess, FAQ, About, Contact, Footer,
} from "@/components/site/Sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FLOWCODE AI — AI-Powered Websites & Business Automation" },
      { name: "description", content: "FLOWCODE AI builds modern websites, AI chatbots, and business automation systems that save time, generate leads, and grow revenue." },
      { property: "og:title", content: "FLOWCODE AI — AI-Powered Websites & Business Automation" },
      { property: "og:description", content: "Modern websites, AI chatbots, and automation systems for businesses that want to scale faster." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0f] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Automations />
        <EarlyAccess />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
