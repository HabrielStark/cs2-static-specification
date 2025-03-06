
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
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
  return (
    <div 
      className={cn(
        'relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20',
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-cs2-dark z-10" />
          <img 
            src={backgroundImage} 
            alt="Hero background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      
      <div className="container relative z-20 animate-slide-down">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        
        {cta && (
          <Link 
            to={cta.link}
            className="inline-flex items-center bg-cs2-yellow text-black font-medium px-8 py-3 rounded hover:bg-cs2-muted-yellow transition-colors duration-300 group"
          >
            {cta.text}
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
