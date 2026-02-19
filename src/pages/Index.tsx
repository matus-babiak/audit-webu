import { lazy, Suspense } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
      <SiteHeader />
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
      <SiteFooter />
    </main>
  );
};

export default Index;
