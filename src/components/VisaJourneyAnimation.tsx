import { useState, useEffect } from 'react';
import { Check, FileText } from 'lucide-react';

const VisaJourneyAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassport, setShowPassport] = useState(false);
  const [showStamp, setShowStamp] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const steps = [
    { icon: FileText, label: "Document Review", color: "text-brand-primary" },
    { icon: FileText, label: "Application Processing", color: "text-brand-accent" },
    { icon: Check, label: "Approval Confirmation", color: "text-success" }
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowPassport(true), 500),
      setTimeout(() => setCurrentStep(1), 1000),
      setTimeout(() => setCurrentStep(2), 1800),
      setTimeout(() => setCurrentStep(3), 2600),
      setTimeout(() => setShowStamp(true), 3200),
      setTimeout(() => setShowSuccess(true), 3800)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="py-20 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-16">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-brand-primary to-brand-accent p-1 rounded-2xl shadow-glow">
              <div className="bg-background rounded-xl px-8 py-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
                    Premium Visa Experience
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch your visa application transform from submission to 
            <span className="text-brand-accent font-semibold"> guaranteed approval</span>
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center items-center gap-8 mb-12">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = currentStep > index;
              const isCurrent = currentStep === index + 1;
              
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className={`relative transition-all duration-700 ${
                    isActive ? 'scale-110' : isCurrent ? 'scale-105 animate-pulse' : 'scale-100 opacity-60'
                  }`}>
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-r from-brand-accent to-brand-primary border-brand-accent shadow-glow' 
                        : isCurrent
                        ? 'bg-brand-accent/20 border-brand-accent animate-pulse'
                        : 'bg-muted border-border'
                    }`}>
                      <StepIcon className={`h-6 w-6 transition-colors duration-300 ${
                        isActive ? 'text-white' : isCurrent ? 'text-brand-accent' : 'text-muted-foreground'
                      }`} />
                    </div>
                    
                    {isActive && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full blur opacity-30 animate-pulse"></div>
                    )}
                  </div>
                  
                  <p className={`text-sm font-medium mt-3 transition-colors duration-300 ${
                    isActive ? 'text-brand-accent' : isCurrent ? 'text-brand-primary' : 'text-muted-foreground'
                  }`}>
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Premium Passport Container */}
          <div className="relative max-w-lg mx-auto">
            <div className={`relative transition-all duration-1000 transform ${
              showPassport ? 'scale-100 opacity-100 rotate-0' : 'scale-95 opacity-0 rotate-3'
            }`}>
              {/* Passport with premium styling */}
              <div className="bg-gradient-to-br from-brand-primary/20 via-brand-accent/10 to-brand-secondary/20 backdrop-blur-sm rounded-3xl border-2 border-brand-accent/30 p-12 shadow-large relative overflow-hidden">
                {/* Premium background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 rounded-3xl"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center shadow-medium">
                      <FileText className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                    Premium Passport
                  </h3>
                  <p className="text-muted-foreground">Your gateway to the world</p>
                  
                  {/* Visa Pages Effect */}
                  <div className="mt-8 space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 bg-gradient-to-r from-brand-accent/30 to-brand-primary/30 rounded transition-all duration-500 ${
                          currentStep > i ? 'w-full opacity-100' : 'w-0 opacity-0'
                        }`}
                        style={{ transitionDelay: `${i * 200}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Premium Stamp Animation */}
                {showStamp && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="animate-bounce">
                      <div className="relative">
                        {/* Stamp glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-success via-brand-accent to-success rounded-full blur-xl opacity-60 animate-pulse"></div>
                        
                        <div className="relative bg-gradient-to-br from-success to-success/80 rounded-2xl p-8 border-4 border-white shadow-glow transform rotate-12">
                          <div className="text-center">
                            <Check className="h-12 w-12 text-white mx-auto mb-2" />
                            <span className="block text-white font-bold text-lg tracking-wider">APPROVED</span>
                            <span className="block text-white/90 text-xs mt-1">PREMIUM VISA</span>
                          </div>
                          
                          {/* Stamp authenticity elements */}
                          <div className="absolute top-2 right-2 w-4 h-4 border-2 border-white/50 rounded-full"></div>
                          <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-white/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Premium Success Message */}
            {showSuccess && (
              <div className="mt-8 animate-fade-in">
                <div className="bg-gradient-to-r from-success/10 via-brand-accent/10 to-success/10 backdrop-blur-sm rounded-2xl border border-success/30 p-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-success to-brand-accent rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-2xl font-bold bg-gradient-to-r from-success to-brand-accent bg-clip-text text-transparent">
                      Premium Visa Approved! 
                    </p>
                    <span className="text-2xl animate-bounce">🎉</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">Your exclusive travel experience awaits</p>
                  
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-success font-medium">Express Processing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                      <span className="text-brand-accent font-medium">Premium Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
                      <span className="text-brand-primary font-medium">Global Access</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaJourneyAnimation;