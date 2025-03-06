
import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WeaponCard from '@/components/WeaponCard';

// Mock data for weapons
const weaponsData = [
  {
    name: 'AK-47',
    image: 'https://via.placeholder.com/300x150?text=AK-47',
    type: 'Rifle',
    stats: {
      damage: 95,
      fireRate: 80,
      recoil: 85,
      accuracy: 75,
      range: 85,
      mobility: 65,
    },
    price: 2700,
    description: 'Powerful and highly lethal, the AK-47 is one of the most iconic weapons in CS2. One-shot headshot potential makes it a favorite for terrorist-side players.',
    team: 'T',
  },
  {
    name: 'M4A4',
    image: 'https://via.placeholder.com/300x150?text=M4A4',
    type: 'Rifle',
    stats: {
      damage: 85,
      fireRate: 90,
      recoil: 70,
      accuracy: 85,
      range: 80,
      mobility: 70,
    },
    price: 3100,
    description: 'The standard CT rifle, offering good accuracy and controllable recoil. Reliable at various ranges and situations.',
    team: 'CT',
  },
  {
    name: 'AWP',
    image: 'https://via.placeholder.com/300x150?text=AWP',
    type: 'Sniper Rifle',
    stats: {
      damage: 100,
      fireRate: 20,
      recoil: 90,
      accuracy: 95,
      range: 100,
      mobility: 40,
    },
    price: 4750,
    description: 'The most powerful sniper rifle in CS2. One-shot kill to most body parts. High risk, high reward weapon that can change the tide of a round.',
    team: 'Both',
  },
  {
    name: 'Desert Eagle',
    image: 'https://via.placeholder.com/300x150?text=Desert+Eagle',
    type: 'Pistol',
    stats: {
      damage: 85,
      fireRate: 40,
      recoil: 95,
      accuracy: 65,
      range: 75,
      mobility: 85,
    },
    price: 700,
    description: 'High-powered pistol capable of one-shot headshots, even against helmets. Difficult to master but devastating in capable hands.',
    team: 'Both',
  },
  {
    name: 'MP9',
    image: 'https://via.placeholder.com/300x150?text=MP9',
    type: 'SMG',
    stats: {
      damage: 50,
      fireRate: 95,
      recoil: 40,
      accuracy: 60,
      range: 45,
      mobility: 90,
    },
    price: 1250,
    description: 'Fast-firing SMG with excellent mobility. Great for anti-eco rounds and close-quarter combat.',
    team: 'CT',
  },
  {
    name: 'MAC-10',
    image: 'https://via.placeholder.com/300x150?text=MAC-10',
    type: 'SMG',
    stats: {
      damage: 55,
      fireRate: 100,
      recoil: 50,
      accuracy: 45,
      range: 40,
      mobility: 95,
    },
    price: 1050,
    description: 'Cheap, high rate of fire SMG for the Terrorist side. Excellent mobility and economic bonus for kills.',
    team: 'T',
  },
];

const Weapons = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [filteredWeapons, setFilteredWeapons] = useState(weaponsData);
  const observedElementsRef = useRef<HTMLElement[]>([]);
  
  const weaponTypes = ['All', ...Array.from(new Set(weaponsData.map(weapon => weapon.type)))];
  
  useEffect(() => {
    if (selectedType === 'All') {
      setFilteredWeapons(weaponsData);
    } else {
      setFilteredWeapons(weaponsData.filter(weapon => weapon.type === selectedType));
    }
  }, [selectedType]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
      observedElementsRef.current.push(el as HTMLElement);
    });
    
    return () => {
      observedElementsRef.current.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, [filteredWeapons]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero 
          title="Weapons Arsenal"
          subtitle="Explore detailed statistics, comparisons, and usage guides for all weapons in Counter-Strike 2."
          backgroundImage="https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1169&auto=format&fit=crop"
        />
        
        <section className="py-12 px-6 bg-cs2-dark">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {weaponTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-cs2-yellow text-black font-medium'
                      : 'bg-cs2-gray text-white/80 hover:bg-cs2-light-gray'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWeapons.map((weapon, index) => (
                <div key={weapon.name} className="animate-on-scroll">
                  <WeaponCard 
                    name={weapon.name}
                    image={weapon.image}
                    type={weapon.type}
                    stats={weapon.stats}
                    price={weapon.price}
                    description={weapon.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-gradient-to-b from-cs2-gray to-cs2-dark">
          <div className="container mx-auto">
            <div className="bg-cs2-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Weapon Comparison Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-3 px-4">Weapon</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Price</th>
                      <th className="text-left py-3 px-4">Damage</th>
                      <th className="text-left py-3 px-4">Fire Rate</th>
                      <th className="text-left py-3 px-4">Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weaponsData.map((weapon, index) => (
                      <tr 
                        key={weapon.name} 
                        className={`border-b border-white/5 ${index % 2 === 0 ? 'bg-black/10' : ''}`}
                      >
                        <td className="py-3 px-4 font-medium">{weapon.name}</td>
                        <td className="py-3 px-4 text-white/70">{weapon.type}</td>
                        <td className="py-3 px-4 text-white/70">${weapon.price}</td>
                        <td className="py-3 px-4">
                          <div className="w-24 bg-cs2-dark rounded-full h-1.5">
                            <div 
                              className="bg-cs2-yellow h-1.5 rounded-full" 
                              style={{ width: `${weapon.stats.damage}%` }}
                            />
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="w-24 bg-cs2-dark rounded-full h-1.5">
                            <div 
                              className="bg-cs2-yellow h-1.5 rounded-full" 
                              style={{ width: `${weapon.stats.fireRate}%` }}
                            />
                          </div>
                        </td>
                        <td className="py-3 px-4 text-white/70">{weapon.team}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Weapons;
