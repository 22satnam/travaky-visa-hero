import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Truck, Cog, Package, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Onboard",
    description: "Get onboard in just 5 minutes with our streamlined process.",
    color: "bg-brand-primary",
    timing: "5 mins"
  },
  {
    icon: Truck,
    step: "02", 
    title: "Expert Connect",
    description: "Get immediate connect with our visa experts for guidance.",
    color: "bg-brand-secondary",
    timing: "Immediate"
  },
  {
    icon: Cog,
    step: "03",
    title: "Get Appointment",
    description: "Get your appointment slot booked within 15 minutes.",
    color: "bg-brand-accent",
    timing: "15 mins"
  },
  {
    icon: Package,
    step: "04",
    title: "Doorstep Docs",
    description: "We collect documents from your doorstep with 24-48 hrs buffer.",
    color: "bg-success",
    timing: "24-48 hrs"
  },
  {
    icon: FileText,
    step: "05",
    title: "Appointment Day",
    description: "Appear for appointment on date 📅 with complete confidence.",
    color: "bg-info",
    timing: "Scheduled"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-brand-accent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your visa in just 4 simple steps. We handle all the complexity while you focus on planning your trip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center h-full hover:shadow-glow transition-all duration-300 border-border/50 hover:border-brand-primary/30">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className={`${step.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-medium`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-brand-primary text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-medium">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <div className="bg-brand-accent/10 rounded-lg p-2 mb-3">
                    <span className="text-brand-accent font-bold text-sm">{step.timing}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 text-brand-accent animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-accent text-white hover:opacity-90 shadow-medium"
          >
            Start Your Application
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;