import { Home, Activity, BarChart2, Twitter, Mail, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { cn } from "@/lib/utils";


const BottomNavigationBar = () => {
  const location = useLocation();
  const mobileLinks = [
    { path: '/', icon: Home, label: 'Markets' },
    { path: '/portfolio', icon: Activity, label: 'Portfolio' },
    { path: '/leaderboard', icon: BarChart2, label: 'Leaderboard' },
  ];

  return (
    <>
      {/* Desktop Footer (simplified) */}
      <footer className="hidden md:block w-full border-t border-gold-500/20 bg-black/90 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <div className="flex space-x-8">
              {['Markets', 'Portfolio', 'Leaderboard', 'API Docs'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Markets' ? '/' : `/${item.toLowerCase()}`}
                  className={cn(
                    "text-gold-400/80 hover:text-gold-200 transition-colors text-sm",
                    location.pathname === `/${item.toLowerCase()}` && "text-gold-300"
                  )}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Social Icons (gold accents) */}
            <div className="flex space-x-4">
              <a href="#" className="text-gold-400/80 hover:text-gold-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gold-400/80 hover:text-gold-200 transition-colors">
                <MessageCircle className="w-5 h-5" /> {/* Discord icon substitute */}
              </a>
              <a href="#" className="text-gold-400/80 hover:text-gold-200 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav (sticky, icon-only) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-black/90 backdrop-blur-lg border-t border-gold-500/20 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-around">
            {mobileLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex flex-col items-center p-2",
                  location.pathname === link.path ? "text-gold-300" : "text-gold-400/70"
                )}
              >
                <link.icon className="w-6 h-6" />
                <span className="text-xs mt-1">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default BottomNavigationBar;