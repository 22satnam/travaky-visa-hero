import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisaJourneyAnimation from "@/components/VisaJourneyAnimation";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CountrySection from "@/components/CountrySection";
import ServicesSection from "@/components/ServicesSection";
import FlagWaveAnimation from "@/components/FlagWaveAnimation";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorldMapSection from "@/components/WorldMapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <VisaJourneyAnimation />
      <FeaturesSection />
      <HowItWorksSection />
      <CountrySection />
      <ServicesSection />
      <FlagWaveAnimation />
      <PricingSection />
      <TestimonialsSection />
      <WorldMapSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
