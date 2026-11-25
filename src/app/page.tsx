import { HeroSection } from "@/components/home/HeroSection";
import { MetricsStrip } from "@/components/home/MetricsStrip";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { DigitalInnovation } from "@/components/home/DigitalInnovation";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CultureSection } from "@/components/home/CultureSection";
import { ContactBanner } from "@/components/home/ContactBanner";

export default function Home() {
  return (
    <>
      {/* Full first page fold with 16px rounded white border framing everything */}
      <HeroSection />

      {/* Engineering metrics */}
      <MetricsStrip />

      {/* What we do — clean service cards */}
      <ServicesShowcase />

      {/* Industries we serve — hero card + stacked layout */}
      <IndustriesSection />

      {/* Our platforms — Nexus AI & Stratus Cloud */}
      <DigitalInnovation />

      {/* Client stories */}
      <CaseStudiesSection />

      {/* Insights & research */}
      <InsightsSection />

      {/* Join our team */}
      <CultureSection />

      {/* Contact CTA */}
      <ContactBanner />
    </>
  );
}
