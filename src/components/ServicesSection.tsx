import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Headphones, Truck, Globe, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description: "Expert handling of all visa documentation with 99% accuracy rate",
    features: ["Document verification", "Form filling assistance", "Requirements checklist", "Error-free submissions"],
    color: "bg-brand-primary"
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Round-the-clock assistance from visa specialists and customer support",
    features: ["Live chat support", "Phone consultations", "Email assistance", "Emergency support"],
    color: "bg-brand-secondary"
  },
  {
    icon: Truck,
    title: "Doorstep Services",
    description: "Convenient pickup and delivery services right to your doorstep",
    features: ["Document pickup", "Safe delivery", "Real-time tracking", "Flexible timing"],
    color: "bg-brand-accent"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-brand-accent">Premium Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive visa facilitation services designed to make your journey hassle-free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-glow transition-all duration-300 border-border/50 hover:border-brand-primary/30">
              <CardContent className="p-8">
                <div className={`${service.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-medium`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full border-brand-primary/20 hover:bg-brand-primary/10">
                  Learn More
                </Button>
              </CardContent>
              
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-accent opacity-10 rounded-bl-full"></div>
            </Card>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Clock className="h-8 w-8 text-brand-accent" />
            <div>
              <p className="font-semibold">Get visa appointment by</p>
              <p className="text-brand-primary font-bold">31.07.2025, 9:48 AM</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <Globe className="h-8 w-8 text-brand-accent" />
            <div>
              <p className="font-semibold">Global Coverage</p>
              <p className="text-brand-primary font-bold">150+ Countries</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <Shield className="h-8 w-8 text-brand-accent" />
            <div>
              <p className="font-semibold">Success Rate</p>
              <p className="text-brand-primary font-bold">99.2%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;