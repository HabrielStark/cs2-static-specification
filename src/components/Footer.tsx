
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cs2-dark border-t border-white/5 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-bold text-2xl text-white">
              <span className="text-cs2-yellow mr-1">CS</span>2
            </span>
          </div>
          <p className="text-white/60 text-sm">
            A comprehensive resource for Counter-Strike 2 players, providing detailed information on weapons, maps, mechanics, and the professional scene.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-white/60 hover:text-white text-sm transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/weapons" className="text-white/60 hover:text-white text-sm transition-colors">
                Weapons
              </Link>
            </li>
            <li>
              <Link to="/maps" className="text-white/60 hover:text-white text-sm transition-colors">
                Maps
              </Link>
            </li>
            <li>
              <Link to="/mechanics" className="text-white/60 hover:text-white text-sm transition-colors">
                Mechanics
              </Link>
            </li>
            <li>
              <Link to="/pro-scene" className="text-white/60 hover:text-white text-sm transition-colors">
                Pro Scene
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.counter-strike.net/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                Official CS2 Website
              </a>
            </li>
            <li>
              <a href="https://store.steampowered.com/app/730/CounterStrike_2/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                Steam Store
              </a>
            </li>
            <li>
              <a href="https://www.hltv.org/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                HLTV
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/r/GlobalOffensive/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                Reddit Community
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} CS2 Technical Specification. This is not affiliated with Valve Corporation.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            YouTube
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
