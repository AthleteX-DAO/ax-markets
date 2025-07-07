
const BottomNavigationBar = () => {
  return (
    <footer className="w-full border-t border-gold-500/20 bg-black/90 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/src/assets/Athletex 11.png" 
                alt="AthleteX Markets Exchange" 
                className="h-8"
              />
              <span className="text-gold-500 font-serif italic text-sm">
                AthelteX Prediction Exchange
              </span>
            </div>
            <p className="text-gold-400/70 text-sm">
              The social platform for high stakes conversations in sports, media, and culture.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="text-gold-300 font-serif text-lg mb-2">Navigation</h3>
            <ul className="space-y-2">
              {['Markets', 'Portfolio', 'Leaderboard', 'API Docs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gold-400/80 hover:text-gold-200 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-gold-300 font-serif text-lg mb-2">Legal</h3>
            <ul className="space-y-2">
              {['Terms', 'Privacy', 'Risk Disclosure', 'AML Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gold-400/80 hover:text-gold-200 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social/Contact */}
          <div className="space-y-3">
            <h3 className="text-gold-300 font-serif text-lg mb-2">Connect</h3>
            <div className="flex space-x-4">
              {['Twitter', 'Discord', 'Telegram', 'Email'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gold-400/80 hover:text-gold-200 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-xs text-gold-500/60">
                For support: support@axmarkets.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and divider */}
        <div className="border-t border-gold-500/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gold-500/60 text-sm">
            &copy; {new Date().getFullYear()} Ax Markets. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p className="text-gold-500/60 text-sm">Version 2.4.1</p>
            <p className="text-gold-500/60 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomNavigationBar;