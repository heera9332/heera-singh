import { HeroSection } from "@/components/sections/hero-section";
import { WhatIBuild } from "@/components/sections/what-i-build";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyMe } from "@/components/sections/why-me";
import { ProcessSection } from "@/components/sections/process-section";
import { TechStack } from "@/components/sections/tech-stack";
import { AboutPreview } from "@/components/sections/about-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABanner } from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero: Positioning, Value Proposition & Primary CTA */}
      <HeroSection />

      {/* 2. What I Build: High-Level Solution Categories */}
      <WhatIBuild />

      {/* 3. Services: Specific Client Packages & Deliverables */}
      <ServicesPreview />

      {/* 4. Selected Work: Evidence & Real-World Case Studies */}
      <FeaturedWork />

      {/* 5. Why Choose Me: Value Propositions & Differentiators */}
      <WhyMe />

      {/* 6. Process: 4-Step Transparent Workflow */}
      <ProcessSection />

      {/* 7. Tech Stack: Battle-Tested Technologies */}
      <TechStack />

      {/* 8. About Teaser: Background & Credibility Snapshot */}
      <AboutPreview />

      {/* 9. Social Proof: Client Testimonials & Feedback */}
      <Testimonials />

      {/* 10. FAQs: Objection Handling & FAQ Accordion */}
      <FAQSection />

      {/* 11. Final Conversion Banner: Direct Lead Capture */}
      <CTABanner />
    </div>
  );
}
