import { lazy, Suspense } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

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
        <AnimateOnScroll>
          <ProblemSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <PillarSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <BenefitsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <PASSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <SocialProofSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <ObjectionsSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <GuaranteeSection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <CTASection />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <FAQSection />
        </AnimateOnScroll>
      </Suspense>
      <SiteFooter />
    </main>
  );
};

export default Index;
