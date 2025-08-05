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
  const [currentWave, setCurrentWave] = useState(0);
  const [highlightedFlags, setHighlightedFlags] = useState<number[]>([]);

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setCurrentWave(prev => (prev + 1) % 3);
    }, 2000);

    const flagInterval = setInterval(() => {
      setHighlightedFlags(() => {
        const randomCount = Math.floor(Math.random() * 6) + 3;
        const indices = [];
        while (indices.length < randomCount) {
          const randomIndex = Math.floor(Math.random() * countries.length);
          if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
          }
        }
        return indices;
      });
    }, 1500);

    return () => {
      clearInterval(waveInterval);
      clearInterval(flagInterval);
    };
  }, []);

  return (
    <div className="py-16 bg-gradient-to-br from-brand-primary/5 via-brand-accent/5 to-brand-secondary/5 overflow-hidden relative">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary p-1 rounded-2xl shadow-glow">
              <div className="bg-background rounded-xl px-8 py-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
                    Global Visa Excellence
                  </span>
                </h3>
                <div className="flex items-center justify-center gap-2 text-lg font-semibold text-brand-primary">
                  <span className="animate-pulse">🌍</span>
                  <span>150+ Countries</span>
                  <span className="animate-pulse">✈️</span>
                  <span>Premium Service</span>
                  <span className="animate-pulse">⭐</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience seamless visa processing with our 
            <span className="text-brand-accent font-semibold"> premium global network</span>
          </p>
        </div>
        
        {/* Enhanced flag grid with wave animations */}
        <div className="relative">
          <div className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
            {countries.map((country, index) => {
              const isHighlighted = highlightedFlags.includes(index);
              const waveDelay = (index % 12) * 100;
              
              return (
                <div
                  key={country.code}
                  className={`group relative transition-all duration-700 transform ${
                    isHighlighted 
                      ? 'scale-125 z-10' 
                      : 'scale-100 hover:scale-110'
                  }`}
                  style={{ animationDelay: `${waveDelay}ms` }}
                >
                  {/* Premium glow effect for highlighted flags */}
                  {isHighlighted && (
                    <div className="absolute -inset-2 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary rounded-full blur-sm opacity-60 animate-pulse"></div>
                  )}
                  
                  <div className={`relative bg-card/50 backdrop-blur-sm rounded-2xl p-4 border transition-all duration-500 ${
                    isHighlighted 
                      ? 'border-brand-accent shadow-glow bg-gradient-to-br from-brand-accent/10 to-brand-primary/10' 
                      : 'border-border/30 hover:border-brand-accent/50 hover:shadow-medium'
                  }`}>
                    <div className="text-center">
                      <div className={`text-4xl mb-3 transition-all duration-500 ${
                        isHighlighted ? 'animate-bounce drop-shadow-lg' : 'group-hover:scale-110'
                      }`}>
                        {country.flag}
                      </div>
                      <p className={`text-xs font-medium transition-colors duration-300 ${
                        isHighlighted ? 'text-brand-accent' : 'text-muted-foreground group-hover:text-brand-primary'
                      }`}>
                        {country.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Dynamic wave effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent transition-all duration-1000 ${
              currentWave === 0 ? 'translate-x-0' : currentWave === 1 ? 'translate-x-full' : '-translate-x-full'
            }`}></div>
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-brand-accent/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 500}ms`,
                  animationDuration: `${2000 + Math.random() * 1000}ms`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Premium stats banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-brand-primary/10 via-brand-accent/10 to-brand-secondary/10 backdrop-blur-sm rounded-full px-8 py-4 border border-brand-accent/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">99.2% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Express Processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagWaveAnimation;