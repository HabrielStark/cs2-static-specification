
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { ChevronRight, Crosshair, Map, Book, Trophy } from 'lucide-react';

const Index = () => {
  const observedElementsRef = useRef<HTMLElement[]>([]);
  
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero 
          title={
            <>
              The Ultimate <span className="text-cs2-yellow">Counter-Strike 2</span> Resource
            </>
          }
          subtitle="Explore comprehensive guides, detailed weapon statistics, map strategies, gameplay mechanics, and professional scene insights."
          backgroundImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop"
          cta={{
            text: "Explore Weapons",
            link: "/weapons"
          }}
        />
        
        <section className="py-20 px-6 bg-cs2-dark">
          <div className="container mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need To <span className="text-cs2-yellow">Master CS2</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From weapon statistics to professional strategies, our comprehensive resources cover all aspects of Counter-Strike 2.
            </p>
          </div>
          
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-cs2-gray rounded-lg p-6 animate-on-scroll">
              <div className="w-12 h-12 bg-cs2-yellow rounded-lg flex items-center justify-center mb-4">
                <Crosshair className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Weapons</h3>
              <p className="text-white/60 mb-4">
                Detailed statistics, comparisons, and usage guides for all weapons in CS2.
              </p>
              <Link to="/weapons" className="inline-flex items-center text-cs2-yellow hover:text-cs2-muted-yellow">
                Browse Weapons <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-cs2-gray rounded-lg p-6 animate-on-scroll">
              <div className="w-12 h-12 bg-cs2-yellow rounded-lg flex items-center justify-center mb-4">
                <Map className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Maps</h3>
              <p className="text-white/60 mb-4">
                Interactive maps with callouts, strategies, and tips for competitive play.
              </p>
              <Link to="/maps" className="inline-flex items-center text-cs2-yellow hover:text-cs2-muted-yellow">
                Explore Maps <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-cs2-gray rounded-lg p-6 animate-on-scroll">
              <div className="w-12 h-12 bg-cs2-yellow rounded-lg flex items-center justify-center mb-4">
                <Book className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Mechanics</h3>
              <p className="text-white/60 mb-4">
                In-depth explanations of recoil patterns, movement techniques, and gameplay mechanics.
              </p>
              <Link to="/mechanics" className="inline-flex items-center text-cs2-yellow hover:text-cs2-muted-yellow">
                Learn Mechanics <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-cs2-gray rounded-lg p-6 animate-on-scroll">
              <div className="w-12 h-12 bg-cs2-yellow rounded-lg flex items-center justify-center mb-4">
                <Trophy className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Pro Scene</h3>
              <p className="text-white/60 mb-4">
                Latest tournament updates, player profiles, and professional team strategies.
              </p>
              <Link to="/pro-scene" className="inline-flex items-center text-cs2-yellow hover:text-cs2-muted-yellow">
                View Pro Scene <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-gradient-to-b from-cs2-gray to-cs2-dark">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated with the <span className="text-cs2-yellow">Latest Meta</span>
                </h2>
                <p className="text-white/60 mb-6">
                  Counter-Strike 2 is constantly evolving. Our resources are regularly updated to reflect the latest game updates, meta shifts, and professional strategies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cs2-yellow rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-black font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Regular Updates</h3>
                      <p className="text-white/60 text-sm">
                        Our content is constantly updated to reflect the latest game patches and meta changes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cs2-yellow rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-black font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Pro Analysis</h3>
                      <p className="text-white/60 text-sm">
                        We analyze professional matches to bring you the most effective strategies and techniques.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cs2-yellow rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-black font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Community Insights</h3>
                      <p className="text-white/60 text-sm">
                        Our content incorporates feedback and insights from the CS2 community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-10 animate-on-scroll">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop"
                    alt="CS2 Gameplay"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-cs2-yellow rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-black ml-1">
                        <path d="M5.536 21.886a1.5 1.5 0 001.576 0l14.4-8.25a1.5 1.5 0 000-2.572l-14.4-8.25a1.5 1.5 0 00-2.576 1.286v16.5a1.5 1.5 0 001 1.286z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-cs2-dark">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-cs2-yellow">Improve Your Game</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Explore our comprehensive resources and take your Counter-Strike 2 skills to the next level.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/weapons" 
                className="bg-cs2-yellow text-black font-medium px-6 py-3 rounded hover:bg-cs2-muted-yellow transition-colors duration-300"
              >
                Explore Weapons
              </Link>
              <Link 
                to="/maps" 
                className="bg-cs2-gray text-white font-medium px-6 py-3 rounded hover:bg-cs2-light-gray transition-colors duration-300"
              >
                Browse Maps
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
