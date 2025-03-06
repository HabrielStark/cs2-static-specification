
import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const mechanicsData = {
  shooting: {
    title: 'Shooting Mechanics',
    description: 'Understanding the fundamentals of shooting in CS2 is essential for success.',
    sections: [
      {
        title: 'Recoil Control',
        content: 'Recoil in CS2 follows specific patterns for each weapon. Learning to counter these patterns by pulling your mouse in the opposite direction is crucial for accurate spraying.',
        image: 'https://via.placeholder.com/600x300?text=Recoil+Patterns',
      },
      {
        title: 'First Bullet Accuracy',
        content: 'The first bullet from a weapon is the most accurate. For precise shooting, use tapping or bursting techniques rather than spraying, especially at longer ranges.',
        image: 'https://via.placeholder.com/600x300?text=First+Bullet+Accuracy',
      },
      {
        title: 'Spray Control',
        content: 'When spraying, pull down gradually to counter the upward recoil, then adjust left or right according to the weapon\'s specific pattern.',
        image: 'https://via.placeholder.com/600x300?text=Spray+Control',
      },
    ],
  },
  movement: {
    title: 'Movement Techniques',
    description: 'Mastering movement in CS2 gives you a significant advantage in gunfights and positional play.',
    sections: [
      {
        title: 'Counter-Strafing',
        content: 'Quickly tap the opposite movement key to stop your movement instantly, allowing for accurate shots while maintaining mobility.',
        image: 'https://via.placeholder.com/600x300?text=Counter+Strafing',
      },
      {
        title: 'Peeking Techniques',
        content: 'Use jiggle peeking, shoulder peeking, and wide swings strategically depending on the situation. Each has advantages and disadvantages.',
        image: 'https://via.placeholder.com/600x300?text=Peeking+Techniques',
      },
      {
        title: 'Positioning',
        content: 'Positioning is crucial in CS2. Always have an escape route planned, maintain crosshair placement at head level, and use positions that give you an advantage.',
        image: 'https://via.placeholder.com/600x300?text=Positioning',
      },
    ],
  },
  utility: {
    title: 'Utility Usage',
    description: 'Effective use of grenades and utility can turn the tide of a round.',
    sections: [
      {
        title: 'Smoke Grenades',
        content: 'Smoke grenades block vision and can be used to cut off sightlines, create safe passage, or execute onto bombsites. Learning lineup spots is essential.',
        image: 'https://via.placeholder.com/600x300?text=Smoke+Grenades',
      },
      {
        title: 'Flashbangs',
        content: 'Flashbangs blind enemies and can be used for offensive or defensive purposes. Learn to pop-flash and coordinate with teammates.',
        image: 'https://via.placeholder.com/600x300?text=Flashbangs',
      },
      {
        title: 'Molotovs/Incendiaries',
        content: 'These grenades deny areas and force enemies to reposition. Use them to clear corners, delay pushes, or prevent defuses.',
        image: 'https://via.placeholder.com/600x300?text=Molotovs',
      },
    ],
  },
  economy: {
    title: 'Economy Management',
    description: 'Understanding the economic cycle is vital for maintaining a strong team economy.',
    sections: [
      {
        title: 'Buy Rounds vs. Eco Rounds',
        content: 'Knowing when to buy and when to save is crucial. Coordinate with your team to maintain a healthy economy throughout the match.',
        image: 'https://via.placeholder.com/600x300?text=Economy+Management',
      },
      {
        title: 'Force Buys',
        content: 'Sometimes a partial buy is necessary to prevent the enemy from running away with the game. Coordinate force buys with your team.',
        image: 'https://via.placeholder.com/600x300?text=Force+Buys',
      },
      {
        title: 'Loss Bonus',
        content: 'The loss bonus system provides increasing amounts of money for consecutive round losses, helping teams recover economically.',
        image: 'https://via.placeholder.com/600x300?text=Loss+Bonus',
      },
    ],
  },
};

const Mechanics = () => {
  const [activeMechanic, setActiveMechanic] = useState('shooting');
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
  }, [activeMechanic]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero 
          title="Gameplay Mechanics"
          subtitle="Master the fundamental mechanics and techniques of Counter-Strike 2 to elevate your gameplay."
          backgroundImage="https://images.unsplash.com/photo-1559511260-66a654ae982a?q=80&w=1470&auto=format&fit=crop"
        />
        
        <section className="py-12 px-6 bg-cs2-dark">
          <div className="container mx-auto">
            <Tabs defaultValue="shooting" onValueChange={setActiveMechanic} className="space-y-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-cs2-gray p-1 rounded-lg">
                <TabsTrigger value="shooting" className="data-[state=active]:bg-cs2-yellow data-[state=active]:text-black">
                  Shooting
                </TabsTrigger>
                <TabsTrigger value="movement" className="data-[state=active]:bg-cs2-yellow data-[state=active]:text-black">
                  Movement
                </TabsTrigger>
                <TabsTrigger value="utility" className="data-[state=active]:bg-cs2-yellow data-[state=active]:text-black">
                  Utility
                </TabsTrigger>
                <TabsTrigger value="economy" className="data-[state=active]:bg-cs2-yellow data-[state=active]:text-black">
                  Economy
                </TabsTrigger>
              </TabsList>
              
              {Object.entries(mechanicsData).map(([key, data]) => (
                <TabsContent key={key} value={key} className="space-y-8">
                  <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
                    <p className="text-white/60">{data.description}</p>
                  </div>
                  
                  {data.sections.map((section, index) => (
                    <div 
                      key={section.title} 
                      className={cn(
                        "grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 animate-on-scroll",
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      )}
                    >
                      <div className={cn(
                        "flex flex-col justify-center",
                        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                      )}>
                        <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                        <p className="text-white/70 mb-6">{section.content}</p>
                        <div className="flex items-center space-x-2 text-cs2-yellow">
                          <span className="text-sm font-medium">Learn more</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className={cn(
                        "overflow-hidden rounded-lg",
                        index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                      )}>
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-gradient-to-b from-cs2-gray to-cs2-dark">
          <div className="container mx-auto">
            <div className="bg-cs2-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Training Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-cs2-dark p-6 rounded-lg">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-black rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cs2-yellow">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Recoil Master Tutorial</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Learn how to control recoil for all weapons in CS2 with this comprehensive tutorial.
                  </p>
                  <a href="#" className="text-cs2-yellow hover:text-cs2-muted-yellow text-sm font-medium flex items-center">
                    Watch Video
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                
                <div className="bg-cs2-dark p-6 rounded-lg">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-black rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cs2-yellow">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Movement Mechanics</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Advanced movement techniques like counter-strafing and peeking explained in detail.
                  </p>
                  <a href="#" className="text-cs2-yellow hover:text-cs2-muted-yellow text-sm font-medium flex items-center">
                    Watch Video
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                
                <div className="bg-cs2-dark p-6 rounded-lg">
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-black rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cs2-yellow">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Utility Usage Guide</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Essential smoke, flash, and molotov lineups for all competitive maps.
                  </p>
                  <a href="#" className="text-cs2-yellow hover:text-cs2-muted-yellow text-sm font-medium flex items-center">
                    Watch Video
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
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

export default Mechanics;
