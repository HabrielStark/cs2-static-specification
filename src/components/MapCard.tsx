
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface MapCardProps {
  name: string;
  image: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  competitivePool: boolean;
  className?: string;
  callouts?: string;
}

const difficultyColors = {
  Beginner: 'bg-green-500',
  Intermediate: 'bg-yellow-500',
  Advanced: 'bg-red-500'
};

const MapCard = ({
  name,
  image,
  description,
  difficulty,
  competitivePool,
  callouts,
  className
}: MapCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'bg-cs2-gray rounded-lg overflow-hidden transition-all duration-300 hover-glow',
        isHovered ? 'scale-[1.02]' : 'scale-100',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <div className="flex items-center space-x-2 mt-2">
            <span className={`${difficultyColors[difficulty]} text-xs text-white px-2 py-0.5 rounded`}>
              {difficulty}
            </span>
            {competitivePool && (
              <span className="bg-cs2-yellow text-black text-xs font-medium px-2 py-0.5 rounded">
                Active Duty
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-white/60 text-sm mb-4">{description}</p>
        
        {callouts && (
          <a
            href={callouts}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cs2-yellow hover:text-cs2-muted-yellow text-sm transition-colors"
          >
            View Callouts
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default MapCard;
