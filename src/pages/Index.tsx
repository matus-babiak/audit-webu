import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PillarSection from "@/components/PillarSection";
import BenefitsSection from "@/components/BenefitsSection";
import PASSection from "@/components/PASSection";
import SocialProofSection from "@/components/SocialProofSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <PillarSection />
      <BenefitsSection />
      <PASSection />
      <SocialProofSection />
      <ObjectionsSection />
      <GuaranteeSection />
      <CTASection />
      <FAQSection />
      <footer className="py-12 text-center text-sm text-muted-foreground border-t border-border/30">
        <div className="container">
          © {new Date().getFullYear()} Audit webu. Všetky práva vyhradené. — Matúš Babiak
        </div>
      </footer>
    </main>
  );
};

export default Index;
