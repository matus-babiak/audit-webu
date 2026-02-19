import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

const ProblemSection = lazy(() => import("@/components/ProblemSection"));
const PillarSection = lazy(() => import("@/components/PillarSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const PASSection = lazy(() => import("@/components/PASSection"));
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const ObjectionsSection = lazy(() => import("@/components/ObjectionsSection"));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <Suspense fallback={null}>
        <ProblemSection />
        <PillarSection />
        <BenefitsSection />
        <PASSection />
        <SocialProofSection />
        <ObjectionsSection />
        <GuaranteeSection />
        <CTASection />
        <FAQSection />
      </Suspense>
      <footer className="py-12 text-center text-sm text-muted-foreground border-t border-border/30">
        <div className="container">
          © {new Date().getFullYear()} Audit webu. Všetky práva vyhradené. — Matúš Babiak
        </div>
      </footer>
    </main>
  );
};

export default Index;
