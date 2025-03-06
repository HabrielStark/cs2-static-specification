
import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MapCard from '@/components/MapCard';

// Mock data for maps
const mapsData = [
  {
    name: 'Dust II',
    image: 'https://via.placeholder.com/600x400?text=Dust+II',
    description: 'The most iconic map in Counter-Strike history. Features a simple layout with a mid area connecting to both bombsites.',
    difficulty: 'Beginner' as const,
    competitivePool: true,
    callouts: 'https://example.com/dust2-callouts',
  },
  {
    name: 'Mirage',
    image: 'https://via.placeholder.com/600x400?text=Mirage',
    description: 'A balanced map with multiple pathways to bombsites. Features a distinctive middle area that provides various tactical options.',
    difficulty: 'Intermediate' as const,
    competitivePool: true,
    callouts: 'https://example.com/mirage-callouts',
  },
  {
    name: 'Inferno',
    image: 'https://via.placeholder.com/600x400?text=Inferno',
    description: 'Narrow corridors and choke points define this map. Requires strong teamwork and utility usage.',
    difficulty: 'Intermediate' as const,
    competitivePool: true,
    callouts: 'https://example.com/inferno-callouts',
  },
  {
    name: 'Nuke',
    image: 'https://via.placeholder.com/600x400?text=Nuke',
    description: 'Unique vertical layout with bombsites stacked on top of each other. One of the most complex maps in the pool.',
    difficulty: 'Advanced' as const,
    competitivePool: true,
    callouts: 'https://example.com/nuke-callouts',
  },
  {
    name: 'Vertigo',
    image: 'https://via.placeholder.com/600x400?text=Vertigo',
    description: 'Set on a skyscraper under construction. Features unique elevation changes and tight angles.',
    difficulty: 'Advanced' as const,
    competitivePool: true,
    callouts: 'https://example.com/vertigo-callouts',
  },
  {
    name: 'Ancient',
    image: 'https://via.placeholder.com/600x400?text=Ancient',
    description: 'Newer map to the competitive pool. Features temple-like aesthetics with interconnected paths.',
    difficulty: 'Intermediate' as const,
    competitivePool: true,
    callouts: 'https://example.com/ancient-callouts',
  },
];

const Maps = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [filteredMaps, setFilteredMaps] = useState(mapsData);
  const [activeMap, setActiveMap] = useState<string | null>(null);
  const observedElementsRef = useRef<HTMLElement[]>([]);
  
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  useEffect(() => {
    if (selectedDifficulty === 'All') {
      setFilteredMaps(mapsData);
    } else {
      setFilteredMaps(mapsData.filter(map => map.difficulty === selectedDifficulty));
    }
  }, [selectedDifficulty]);
  
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
  }, [filteredMaps]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero 
          title="Maps Guide"
          subtitle="Explore detailed information about CS2 maps, including callouts, strategies, and difficulty ratings."
          backgroundImage="https://images.unsplash.com/photo-1567095751424-2fe014eba199?q=80&w=1374&auto=format&fit=crop"
        />
        
        <section className="py-12 px-6 bg-cs2-dark">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedDifficulty === difficulty
                      ? 'bg-cs2-yellow text-black font-medium'
                      : 'bg-cs2-gray text-white/80 hover:bg-cs2-light-gray'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaps.map((map) => (
                <div key={map.name} className="animate-on-scroll">
                  <MapCard 
                    name={map.name}
                    image={map.image}
                    description={map.description}
                    difficulty={map.difficulty}
                    competitivePool={map.competitivePool}
                    callouts={map.callouts}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-gradient-to-b from-cs2-gray to-cs2-dark">
          <div className="container mx-auto">
            <div className="bg-cs2-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Interactive Map Viewer</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-medium mb-4">Map Selection</h3>
                  <div className="space-y-2">
                    {mapsData.map(map => (
                      <button
                        key={map.name}
                        onClick={() => setActiveMap(map.name)}
                        className={`w-full text-left px-4 py-3 rounded transition-all duration-300 ${
                          activeMap === map.name
                            ? 'bg-cs2-yellow text-black font-medium'
                            : 'bg-cs2-light-gray text-white/90 hover:bg-opacity-80'
                        }`}
                      >
                        {map.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  {activeMap ? (
                    <div className="bg-cs2-dark rounded-lg p-4">
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <img
                          src={mapsData.find(map => map.name === activeMap)?.image || ''}
                          alt={activeMap}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{activeMap} Callouts</h3>
                      <p className="text-white/60 mb-4">
                        Hover over areas of the map to see callouts and strategic information.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-cs2-light-gray p-3 rounded-lg">
                          <h4 className="font-medium mb-2">T-Side Strategies</h4>
                          <ul className="space-y-1 text-sm text-white/70">
                            <li>Default spread and gather information</li>
                            <li>Fast A execute with utility</li>
                            <li>Mid to B split</li>
                            <li>Fake A and rotate to B</li>
                          </ul>
                        </div>
                        <div className="bg-cs2-light-gray p-3 rounded-lg">
                          <h4 className="font-medium mb-2">CT-Side Setups</h4>
                          <ul className="space-y-1 text-sm text-white/70">
                            <li>2A, 1 Mid, 2B standard setup</li>
                            <li>3A, 2B aggressive hold</li>
                            <li>2A, 2 Mid, 1B information play</li>
                            <li>1A, 1 Mid, 3B stack</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-cs2-dark rounded-lg p-8 flex items-center justify-center h-full">
                      <p className="text-white/60">Select a map to view details</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Maps;
