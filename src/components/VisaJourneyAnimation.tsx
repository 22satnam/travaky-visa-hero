import { useState, useEffect } from 'react';
import { Check, FileText } from 'lucide-react';

const VisaJourneyAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showStamp, setShowStamp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    const stampTimer = setTimeout(() => setShowStamp(true), 1500);
    return () => {
      clearTimeout(timer);
      clearTimeout(stampTimer);
    };
  }, []);

  return (
    <div className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Your <span className="text-brand-accent">Visa Journey</span> Starts Here
        </h2>
        
        <div className="relative max-w-md mx-auto">
          {/* Passport Background */}
          <div className={`bg-brand-primary/10 rounded-lg border-2 border-brand-primary/20 p-8 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <FileText className="h-24 w-24 text-brand-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Your Passport</h3>
            <p className="text-muted-foreground text-sm">Ready for your visa journey</p>
            
            {/* Approved Stamp Animation */}
            {showStamp && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-bounce">
                  <div className="bg-success rounded-full p-6 border-4 border-success-foreground shadow-glow">
                    <div className="transform rotate-12">
                      <Check className="h-8 w-8 text-white" />
                      <span className="block text-white font-bold text-sm mt-1">APPROVED</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Success Message */}
          {showStamp && (
            <div className="mt-6 animate-fade-in">
              <p className="text-success font-semibold text-lg">Visa Approved Successfully! 🎉</p>
              <p className="text-muted-foreground text-sm mt-2">Your journey awaits</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaJourneyAnimation;