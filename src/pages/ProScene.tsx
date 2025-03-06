
import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Trophy, Star, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProScene = () => {
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
              CS2 <span className="text-cs2-yellow">Professional Scene</span>
            </>
          }
          subtitle="Stay updated with the latest tournaments, team rankings, and professional player statistics in the Counter-Strike 2 competitive scene."
          backgroundImage="https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1471&auto=format&fit=crop"
          cta={{
            text: "View Top Teams",
            link: "#top-teams"
          }}
        />
        
        <section className="py-20 px-6 bg-cs2-dark">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Upcoming <span className="text-cs2-yellow">Tournaments</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="bg-cs2-gray rounded-lg overflow-hidden animate-on-scroll hover-glow transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    <img 
                      src={`https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60&h=300&fit=crop`} 
                      alt="Tournament" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="bg-cs2-yellow text-black text-xs font-medium px-2 py-1 rounded-full">
                        16-20 June 2023
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">CS2 Major Championship {item}</h3>
                    <p className="text-white/60 mb-4">
                      The premier international Counter-Strike 2 tournament featuring the top 16 teams from around the world.
                    </p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <Trophy size={16} className="text-cs2-yellow mr-2" />
                        <span className="text-sm text-white/80">$1,000,000 Prize Pool</span>
                      </div>
                      <Link to="#" className="text-cs2-yellow hover:text-cs2-muted-yellow flex items-center">
                        <span className="mr-1">Details</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="top-teams" className="py-20 px-6 bg-gradient-to-b from-cs2-gray to-cs2-dark">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Top <span className="text-cs2-yellow">Teams</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item} 
                  className="bg-cs2-gray rounded-lg p-6 animate-on-scroll flex items-center hover-glow transition-all duration-300 hover:translate-y-[-5px]"
                >
                  <div className="w-16 h-16 bg-cs2-dark rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold text-cs2-yellow">{item}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-1">Team Alpha {item}</h3>
                    <div className="flex items-center text-white/60 mb-2">
                      <Users size={14} className="mr-1" />
                      <span className="text-sm">5 players</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={14} 
                            className={star <= 4 ? "text-cs2-yellow fill-cs2-yellow mr-0.5" : "text-white/20 mr-0.5"} 
                          />
                        ))}
                      </div>
                      <span className="text-white/40 text-xs ml-2">(Ranking 4.8/5)</span>
                    </div>
                  </div>
                  
                  <div className="ml-auto">
                    <Link 
                      to="#" 
                      className="inline-flex items-center text-cs2-yellow hover:text-cs2-muted-yellow"
                    >
                      <span className="mr-1">Profile</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-cs2-dark">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Follow The <span className="text-cs2-yellow">Pro Scene</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10">
              Don't miss any action from the professional Counter-Strike 2 scene. Subscribe to our newsletter for the latest updates on tournaments, teams, and players.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-cs2-gray border border-white/10 px-4 py-3 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-cs2-yellow/50"
                />
                <button className="bg-cs2-yellow text-black font-medium px-6 py-3 rounded-r hover:bg-cs2-muted-yellow transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProScene;
