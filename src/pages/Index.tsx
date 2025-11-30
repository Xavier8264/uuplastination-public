import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SystemSection } from "@/components/SystemSection";
import { ResearchSection } from "@/components/ResearchSection";
import { FAQSection } from "@/components/FAQSection";
import { FutureSection } from "@/components/FutureSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <SystemSection />
        <ResearchSection />
        <FAQSection />
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
