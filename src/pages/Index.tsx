import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import SEOInsightsSection from "@/components/SEOInsightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechOperationsHub from "@/components/TechOperationsHub";
import QuantumDataCenter from "@/components/QuantumDataCenter";
import AIInnovationLab from "@/components/AIInnovationLab";
import PricingSection from "@/components/PricingSection";
import DonationSection from "@/components/DonationSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <TechOperationsHub />
        <QuantumDataCenter />
        <AIInnovationLab />
        <MissionSection />
        <PricingSection />
        <DonationSection />
        <SEOInsightsSection />
        <TestimonialsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
