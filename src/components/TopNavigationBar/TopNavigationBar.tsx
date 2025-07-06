// TopNavigationBar.tsx
import AccountSheet from "./widgets/AccountCircle";
import DepositButton from "./widgets/DepositButton";

const TopNavigationBar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-purple-900/80 to-blue-900/80 border-b border-white/10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with glow effect */}
        <div className="flex items-center space-x-2">
          <img 
            src="/src/assets/Athletex 11 BIG.png" 
            alt="AthleteX Markets Exchange" 
            className="h-10 hover:scale-105 transition-transform duration-300 drop-shadow-glow"
          />
        </div>

        {/* Navigation with animated underline */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="relative group text-white/90 hover:text-white transition-colors">
            Markets
            <span className="absolute left-0 -bottom-1 h-0.5 bg-cyan-400 w-0 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/" className="relative group text-white/90 hover:text-white transition-colors">
            Portfolio
            <span className="absolute left-0 -bottom-1 h-0.5 bg-purple-400 w-0 group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        {/* Action buttons with pulse effect */}
        <div className="flex items-center space-x-4">
          <DepositButton />
          <AccountSheet />
        </div>
      </div>
    </nav>
  );
};

export default TopNavigationBar;