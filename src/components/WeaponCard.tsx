
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface WeaponCardProps {
  name: string;
  image: string;
  type: string;
  stats: {
    damage: number;
    fireRate: number;
    recoil: number;
    accuracy: number;
    range: number;
    mobility: number;
  };
  price: number;
  description: string;
  className?: string;
}

const WeaponCard = ({ 
  name, 
  image, 
  type, 
  stats, 
  price, 
  description,
  className 
}: WeaponCardProps) => {
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
      <div className="relative h-48 overflow-hidden bg-cs2-dark">
        <img 
          src={image} 
          alt={name}
          className={cn(
            'w-full h-full object-contain transition-transform duration-500',
            isHovered ? 'scale-110' : 'scale-100'
          )}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-cs2-yellow text-black text-xs font-medium px-2 py-1 rounded">
            ${price}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded">
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-3">
          {Object.entries(stats).map(([stat, value]) => (
            <div key={stat} className="flex items-center justify-between">
              <span className="text-white/80 text-xs capitalize">{stat}</span>
              <div className="w-2/3 bg-cs2-dark rounded-full h-1.5">
                <div 
                  className="bg-cs2-yellow h-1.5 rounded-full" 
                  style={{ width: `${(value / 100) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeaponCard;
