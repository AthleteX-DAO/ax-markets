// TopNavigationBar.tsx
import AccountSheet from "./widgets/AccountCircle";
import DepositButton from "./widgets/DepositButton";
import { cn } from "@/lib/utils";

const TopNavigationBar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-gold-500/20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with gold accent */}
        <div className="flex items-center space-x-2 group">
          <img 
            src="/src/assets/x.png" 
            alt="AthleteX Markets Exchange" 
            className="h-10 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Navigation with gold underline */}
        <div className="hidden md:flex space-x-8">
          {['Markets', 'Portfolio', 'Leaderboard'].map((item) => (
            <a 
              key={item}
              href="/" 
              className={cn(
                "relative group text-gold-300/90 hover:text-gold-100 transition-colors",
                "font-serif text-lg tracking-wide"
              )}
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-px bg-gradient-to-r from-gold-500 to-gold-300 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Action buttons with gold accents */}
        <div className="flex items-center space-x-4">
          <DepositButton />
          <AccountSheet />
        </div>
      </div>
    </nav>
  );
};

export default TopNavigationBar;