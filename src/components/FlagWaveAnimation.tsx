import { useState, useEffect } from 'react';

const countries = [
  { code: 'US', flag: '🇺🇸', name: 'United States' },
  { code: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: 'AU', flag: '🇦🇺', name: 'Australia' },
  { code: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', flag: '🇫🇷', name: 'France' },
  { code: 'IT', flag: '🇮🇹', name: 'Italy' },
  { code: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: 'NL', flag: '🇳🇱', name: 'Netherlands' },
  { code: 'CH', flag: '🇨🇭', name: 'Switzerland' },
  { code: 'SE', flag: '🇸🇪', name: 'Sweden' },
  { code: 'NO', flag: '🇳🇴', name: 'Norway' },
  { code: 'DK', flag: '🇩🇰', name: 'Denmark' },
  { code: 'FI', flag: '🇫🇮', name: 'Finland' },
  { code: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: 'AE', flag: '🇦🇪', name: 'UAE' },
];

const FlagWaveAnimation = () => {
  const [visibleFlags, setVisibleFlags] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleFlags(prev => {
        const next = [...prev];
        const randomIndex = Math.floor(Math.random() * countries.length);
        
        if (next.includes(randomIndex)) {
          return next.filter(i => i !== randomIndex);
        } else {
          next.push(randomIndex);
          if (next.length > 8) {
            next.shift();
          }
          return next;
        }
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Visa Services for <span className="text-brand-accent">150+ Countries</span>
          </h3>
          <p className="text-muted-foreground">Your global visa partner</p>
        </div>
        
        <div className="relative h-32 flex items-center justify-center">
          <div className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-4 w-full max-w-4xl">
            {countries.map((country, index) => (
              <div
                key={country.code}
                className={`text-center transition-all duration-500 transform ${
                  visibleFlags.includes(index) 
                    ? 'scale-110 opacity-100 animate-bounce' 
                    : 'scale-100 opacity-60'
                }`}
              >
                <div className="text-3xl md:text-4xl mb-2 hover:scale-125 transition-transform cursor-pointer">
                  {country.flag}
                </div>
                <p className="text-xs text-muted-foreground font-medium">{country.code}</p>
              </div>
            ))}
          </div>
          
          {/* Wave effect overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagWaveAnimation;