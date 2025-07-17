// PortfolioPage.tsx
import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900/50 text-gold-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="mb-12">
          <div className="flex justify-between items-end border-b border-gold-500/20 pb-6">
            <div>
              <h1 className="text-4xl font-serif font-medium text-gold-300 mb-2">Portfolio</h1>
              <p className="text-gold-300/80">GM Trader, Here's your portfolio's summary</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gold-300/60">Total Value</p>
              <p className="text-3xl font-medium text-gold-200">$3.53</p>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Rank Card */}
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-6">
            <h3 className="font-serif text-lg text-gold-300 mb-4">Rank</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gold-300/60">Positions</p>
                <p className="text-xl">-</p>
              </div>
              <div>
                <p className="text-sm text-gold-300/60">To win</p>
                <p className="text-xl">-</p>
              </div>
              <div>
                <p className="text-sm text-gold-300/60">Bronze</p>
                <div className="ml-4 mt-1 space-y-2">
                  <p className="text-sm">USD -</p>
                  <p className="text-sm">USD -</p>
                </div>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-6">
            <h3 className="font-serif text-lg text-gold-300 mb-4">Available Balance</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gold-300/60">Today's rewards</p>
                <p className="text-xl">$0.00</p>
              </div>
              <div>
                <p className="text-sm text-gold-300/60">Points</p>
                <p className="text-xl">-</p>
              </div>
            </div>
          </div>

          {/* Profit/Loss Card */}
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-6">
            <h3 className="font-serif text-lg text-gold-300 mb-4">Profit/Loss</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xl">$0.00</p>
                <p className="text-sm text-gold-300/60">All Time</p>
              </div>
              <div className="pt-4 border-t border-gold-500/10">
                <p className="text-sm text-gold-300/60">Garnet value</p>
                <p className="text-xl">-</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investments Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-medium text-gold-300">Investments</h2>
            <div className="flex space-x-4">
              <button className={cn(
                "px-4 py-2 text-sm rounded-md",
                "bg-gold-500/10 text-gold-300 border border-gold-500/20",
                "hover:bg-gold-500/20 transition-colors"
              )}>
                Everything
              </button>
              <button className={cn(
                "px-4 py-2 text-sm rounded-md",
                "bg-transparent text-gold-300/70 border border-gold-500/10",
                "hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              )}>
                Positions
              </button>
              <button className={cn(
                "px-4 py-2 text-sm rounded-md",
                "bg-transparent text-gold-300/70 border border-gold-500/10",
                "hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              )}>
                Open orders
              </button>
              <button className={cn(
                "px-4 py-2 text-sm rounded-md",
                "bg-transparent text-gold-300/70 border border-gold-500/10",
                "hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              )}>
                History
              </button>
            </div>
          </div>

          {/* Active Position */}
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gold-300">Position: 0x5761 recently</h3>
              <span className="text-sm text-green-400/80">+$0.02 (1%)</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gold-300/60">Market</p>
                <p>Yes - Fed maintains rate</p>
              </div>
              <div>
                <p className="text-sm text-gold-300/60">Contracts</p>
                <p>2</p>
              </div>
              <div>
                <p className="text-sm text-gold-300/60">Cost</p>
                <p>$1.90</p>
              </div>
              <div>
                <p className="text-sm text-gold-300/60">Market value</p>
                <p>$1.92</p>
              </div>
            </div>
          </div>

          {/* Empty State */}
          <div className="bg-black/50 border border-gold-500/20 rounded-lg p-12 text-center">
            <p className="text-gold-300/70">No positions were found</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;