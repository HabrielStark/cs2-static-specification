
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface PlayerCardProps {
  name: string;
  realName: string;
  team: string;
  country: string;
  image: string;
  role: string;
  rating: number;
  achievements?: string[];
  profileLink?: string;
  className?: string;
}

const PlayerCard = ({
  name,
  realName,
  team,
  country,
  image,
  role,
  rating,
  achievements = [],
  profileLink,
  className
}: PlayerCardProps) => {
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
      <div className="relative">
        <div className="h-40 bg-cs2-dark relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        
        <div className="absolute -bottom-10 left-5 w-20 h-20 rounded-full border-4 border-cs2-gray overflow-hidden bg-cs2-dark">
          <img
            src={`https://flagcdn.com/w80/${country.toLowerCase()}.png`}
            alt={`${country} flag`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="p-5 pt-12">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-white/60 text-sm">{realName}</p>
          </div>
          <div className="bg-cs2-dark px-2 py-1 rounded text-xs font-semibold flex items-center">
            <span className="text-cs2-yellow mr-1">{rating.toFixed(2)}</span>
            <span className="text-white/80">HLTV</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-cs2-light-gray px-2 py-1 rounded text-xs text-white/80">
            {team}
          </div>
          <div className="bg-cs2-light-gray px-2 py-1 rounded text-xs text-white/80">
            {role}
          </div>
        </div>
        
        {achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-white/80 text-xs uppercase mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {achievements.slice(0, 3).map((achievement, index) => (
                <li key={index} className="text-white/60 text-xs flex items-center">
                  <span className="inline-block w-1 h-1 bg-cs2-yellow rounded-full mr-2" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {profileLink && (
          <a
            href={profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cs2-yellow hover:text-cs2-muted-yellow text-sm transition-colors"
          >
            HLTV Profile
            <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
