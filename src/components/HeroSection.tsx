import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Premium Tagline Banner */}
            <div className="bg-gradient-to-r from-brand-secondary to-brand-primary p-4 rounded-xl mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <h2 className="text-lg md:text-xl font-semibold text-white text-center relative z-10" style={{
                textShadow: '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.3)',
                background: 'linear-gradient(45deg, #e5e7eb, #f9fafb, #e5e7eb)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                World's 🌎 First Visa Doorstep Facilitation Services
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Visa on Autopilot
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Fill once. We handle the rest — documents, appointments, and delivery. 
              Get your visa approved with our expert-managed process.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">99% Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">10,000+ Visas Processed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">20+ Cities Pickup</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-white hover:opacity-90 shadow-medium group"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
              >
                Explore Countries
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img 
                src={heroImage} 
                alt="Visa application process illustration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/10 to-transparent"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-medium p-4 border border-border">
              <div className="text-2xl font-bold text-brand-primary">2-5 Days</div>
              <div className="text-sm text-muted-foreground">Average Processing</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-medium p-4 border border-border">
              <div className="text-2xl font-bold text-success">98.9%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;