
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Weapons', path: '/weapons' },
  { name: 'Maps', path: '/maps' },
  { name: 'Mechanics', path: '/mechanics' },
  { name: 'Pro Scene', path: '/pro-scene' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active index based on current route
  useEffect(() => {
    const index = routes.findIndex(route => route.path === location.pathname);
    setActiveIndex(index >= 0 ? index : null);
  }, [location.pathname]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled 
          ? 'bg-black/70 backdrop-blur-lg shadow-lg border-b border-white/5' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="font-bold text-2xl flex items-center text-white group"
        >
          <span className="text-cs2-yellow mr-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">CS</span>
          <span className="relative">
            2
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-cs2-yellow rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-300"></span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          {routes.map((route, index) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                'text-sm font-medium transition-all duration-300 relative py-2 px-1 overflow-hidden group',
                location.pathname === route.path
                  ? 'text-cs2-yellow' 
                  : 'text-white/80 hover:text-white'
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(location.pathname === route.path ? index : null)}
            >
              <span className="relative z-10">{route.name}</span>
              <span 
                className={cn(
                  "absolute bottom-0 left-0 w-full h-[2px] bg-cs2-yellow transform transition-transform duration-300 origin-left",
                  location.pathname === route.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}
              ></span>
              {activeIndex === index && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cs2-yellow rounded-full animate-pulse"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white relative z-20 w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className={cn(
            "absolute block w-6 h-0.5 bg-white transition-all duration-300",
            mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
          )}></span>
          <span className={cn(
            "absolute block w-6 h-0.5 bg-white transition-all duration-300",
            mobileMenuOpen ? "opacity-0" : "opacity-100"
          )}></span>
          <span className={cn(
            "absolute block w-6 h-0.5 bg-white transition-all duration-300",
            mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
          )}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-black/95 z-10 md:hidden flex flex-col pt-20 px-6 transition-all duration-500',
          mobileMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <nav className="flex flex-col space-y-8 items-center mt-10">
          {routes.map((route, index) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                'text-2xl font-medium transition-all duration-300 relative overflow-hidden',
                location.pathname === route.path
                  ? 'text-cs2-yellow' 
                  : 'text-white/80 hover:text-white'
              )}
            >
              <div className="flex items-center">
                <span className="relative">
                  {route.name}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-[2px] bg-cs2-yellow transform transition-transform duration-300 origin-left",
                      location.pathname === route.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  ></span>
                </span>
                <ChevronRight 
                  className={cn(
                    "ml-2 transition-transform duration-300", 
                    location.pathname === route.path ? "translate-x-1 text-cs2-yellow" : "translate-x-0 text-white/40"
                  )} 
                  size={16} 
                />
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
