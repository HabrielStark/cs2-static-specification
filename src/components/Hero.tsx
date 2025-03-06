
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface HeroProps {
  title: React.ReactNode;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  cta?: {
    text: string;
    link: string;
  };
}

const Hero = ({ 
  title,
  subtitle,
  backgroundImage,
  className,
  cta
}: HeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate a slight delay for the animation to take effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={cn(
        'relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-20 overflow-hidden',
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-cs2-dark z-10" />
          <img 
            src={backgroundImage} 
            alt="Hero background" 
            className={cn(
              "w-full h-full object-cover object-center transition-transform duration-[3s] ease-out",
              isLoaded ? "scale-105" : "scale-100"
            )}
          />
          
          {/* Animated overlay elements */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cs2-yellow/5 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-cs2-yellow/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      )}
      
      <div className={cn(
        "container relative z-20 transition-all duration-1000",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        <h1 className={cn(
          "text-4xl md:text-6xl font-bold mb-6 text-glow",
          isLoaded ? "animate-typing" : ""
        )}>
          {title}
        </h1>
        
        {subtitle && (
          <p className={cn(
            "text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {subtitle}
          </p>
        )}
        
        {cta && (
          <Link 
            to={cta.link}
            className={cn(
              "inline-flex items-center bg-cs2-yellow text-black font-medium px-8 py-3 rounded relative overflow-hidden group transition-all duration-1000 delay-500 button-hover",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="relative z-10">{cta.text}</span>
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 relative z-10" size={18} />
            <span className="absolute inset-0 bg-gradient-to-r from-cs2-yellow to-cs2-muted-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        )}
        
        {/* Animated mouse scroll indicator */}
        <div className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-[bounce_2s_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
