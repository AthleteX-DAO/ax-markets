// MarketDetail.tsx
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, MessageSquare, BarChart2, Share2, Bookmark } from "lucide-react";

const MarketDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900/50 text-gold-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Market Header */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-gold-500/20 pb-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-serif font-medium text-gold-300 leading-tight">
                Will Jerome Powell be replaced as Fed Chair before Dec 31, 2025?
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <span className="bg-gold-500/10 text-gold-300 px-3 py-1 rounded-full text-sm">POLITICS</span>
                <span className="text-gold-300/60 text-sm">Market ID: #FED-437</span>
                <span className="text-gold-300/60 text-sm">Volume: 84,688,732 USDC</span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-right mb-2">
                <p className="text-gold-300/60 text-sm">Closing date</p>
                <p className="text-xl text-gold-200">Dec 31, 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400/80 animate-pulse"></div>
                <span className="text-sm text-green-400/80">LIVE</span>
              </div>
            </div>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-between mt-6 border-b border-gold-500/10 pb-2">
            {['Jul 31', 'Aug 31', 'Dec 31'].map((date) => (
              <button
                key={date}
                className={cn(
                  "px-4 py-2 text-sm font-medium",
                  date === 'Dec 31' 
                    ? "text-gold-300 border-b-2 border-gold-300" 
                    : "text-gold-300/60 hover:text-gold-200"
                )}
              >
                {date}
              </button>
            ))}
          </div>
        </section>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Trading & Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Probability & Chart */}
            <section className="bg-black/50 border border-gold-500/20 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-serif text-gold-300">21% <span className="text-sm text-red-400/80">▼ 2%</span></h2>
                  <p className="text-gold-300/60 text-sm">Current probability</p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-xs px-3 py-1 bg-gold-500/10 text-gold-300 rounded-md">1H</button>
                  <button className="text-xs px-3 py-1 bg-black/30 text-gold-300/60 rounded-md">6H</button>
                  <button className="text-xs px-3 py-1 bg-black/30 text-gold-300/60 rounded-md">1D</button>
                  <button className="text-xs px-3 py-1 bg-black/30 text-gold-300/60 rounded-md">ALL</button>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="h-64 bg-black/30 border border-gold-500/10 rounded-lg mb-4 relative overflow-hidden">
                {/* Mock chart data visualization */}
                <div className="absolute inset-0 flex items-end">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div 
                      key={i}
                      className="flex-1 h-0 bg-gradient-to-t from-gold-500/80 to-gold-500/20"
                      style={{ height: `${Math.random() * 80 + 10}%` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex justify-between text-xs text-gold-300/60">
                <span>Jul 1</span>
                <span>Now</span>
                <span>Dec 31</span>
              </div>
            </section>

            {/* Trading Interface */}
            <section className="bg-black/50 border border-gold-500/20 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <button className="bg-green-500/10 hover:bg-green-500/20 text-green-300 border border-green-500/20 py-4 rounded-lg transition-colors">
                  <div className="text-xl font-medium">Buy YES</div>
                  <div className="text-sm">21% probability</div>
                </button>
                <button className="bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20 py-4 rounded-lg transition-colors">
                  <div className="text-xl font-medium">Buy NO</div>
                  <div className="text-sm">79% probability</div>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gold-300/80 text-sm mb-2">Amount</label>
                  <div className="relative">
                    <input 
                      type="range" 
                      min="0" 
                      max="1000" 
                      className="w-full h-2 bg-gold-500/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gold-300/60 mt-1">
                      <span>0</span>
                      <span>250</span>
                      <span>500</span>
                      <span>750</span>
                      <span>1000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gold-300/80 text-sm mb-2">Price Limit (¢)</label>
                  <div className="relative">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      defaultValue="21"
                      className="w-full h-2 bg-gold-500/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gold-300/60 mt-1">
                      <span>0</span>
                      <span>25</span>
                      <span>50</span>
                      <span>75</span>
                      <span>100</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gold-500/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-gold-300/80">Cost</span>
                    <span className="text-gold-200">1.92 USDC</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gold-300/80">Potential payout</span>
                    <span className="text-green-300">9.52 USDC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gold-300/80">Fees</span>
                    <span className="text-gold-300/60">0.02 USDC</span>
                  </div>
                </div>

                <button className="w-full bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/20 py-3 rounded-lg mt-4 transition-colors">
                  Place Order (1.92 USDC)
                </button>

                <p className="text-xs text-gold-300/50 text-center mt-2">
                  By trading, you agree to our Terms of Use
                </p>
              </div>
            </section>

            {/* Rules & Context */}
            <section className="bg-black/50 border border-gold-500/20 rounded-lg p-6">
              <h3 className="text-xl font-serif text-gold-300 mb-4">Market Rules</h3>
              <div className="prose prose-invert text-gold-300/80">
                <p>
                  This market will resolve to "Yes" if Jerome Powell ceases to be the Chair of the U.S. Federal Reserve 
                  for any period of time between now and December 31, 2025. This includes resignation, termination, 
                  or failure to be reappointed.
                </p>
                <p className="mt-4">
                  Resolution will be based on official announcements from the White House or Federal Reserve, 
                  with secondary verification from major news outlets including Bloomberg, Reuters, and Wall Street Journal.
                </p>
              </div>
              <button className="flex items-center text-gold-300/60 hover:text-gold-300 mt-4 text-sm transition-colors">
                Show full resolution criteria <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </section>

            {/* Comments Section */}
            <section className="bg-black/50 border border-gold-500/20 rounded-lg overflow-hidden">
              <div className="border-b border-gold-500/20 p-6">
                <h3 className="text-xl font-serif text-gold-300 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" /> Discussion (220)
                </h3>
              </div>

              {/* Comment Input */}
              <div className="p-6 border-b border-gold-500/10">
                <textarea 
                  placeholder="Add your analysis or prediction..."
                  className="w-full bg-black/30 border border-gold-500/20 rounded-lg px-4 py-3 text-gold-100 placeholder-gold-300/50 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <div className="flex space-x-2">
                    <button className="text-gold-300/50 hover:text-gold-300 p-1">
                      <BarChart2 className="h-5 w-5" />
                    </button>
                    <button className="text-gold-300/50 hover:text-gold-300 p-1">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <button className="bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 px-4 py-2 rounded-md text-sm transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Sample Comments */}
              {[1, 2, 3].map((comment) => (
                <div key={comment} className="p-6 border-b border-gold-500/10 last:border-0">
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-300">
                      U{comment}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-gold-200">Trader{comment}</h4>
                        <span className="text-xs text-gold-300/50">2h ago</span>
                      </div>
                      <p className="mt-1 text-gold-300/80">
                        {comment === 1 
                          ? "Powell's reappointment seems unlikely given current political climate. Placing 500 USDC on YES."
                          : comment === 2
                          ? "Market is underestimating institutional inertia. NO is the safer bet here."
                          : "Anyone else noticing the unusual volume spikes at 3PM EST?"}
                      </p>
                      <div className="flex items-center mt-3 space-x-4">
                        <button className="flex items-center text-sm text-gold-300/60 hover:text-gold-300">
                          <ChevronUp className="h-4 w-4 mr-1" /> 12
                        </button>
                        <button className="flex items-center text-sm text-gold-300/60 hover:text-gold-300">
                          <ChevronDown className="h-4 w-4 mr-1" />
                        </button>
                        <button className="text-sm text-gold-300/60 hover:text-gold-300">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Related Markets */}
            <section className="bg-black/50 border border-gold-500/20 rounded-lg overflow-hidden">
              <div className="border-b border-gold-500/20 p-6">
                <h3 className="text-xl font-serif text-gold-300">Related Markets</h3>
              </div>
              <div className="divide-y divide-gold-500/10">
                {[
                  "Will Trump appoint next Fed Chair?",
                  "Fed abolished in 2025?",
                  "Fed rate hike in 2025?",
                  "US recession before 2026?"
                ].map((market, i) => (
                  <div key={i} className="p-4 hover:bg-gold-500/5 transition-colors cursor-pointer">
                    <h4 className="text-gold-200">{market}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-gold-300/60">30% probability</span>
                      <span className="text-xs bg-gold-500/10 text-gold-300 px-2 py-1 rounded">+2%</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Holders */}
            <section className="bg-black/50 border border-gold-500/20 rounded-lg overflow-hidden">
              <div className="border-b border-gold-500/20 p-6">
                <h3 className="text-xl font-serif text-gold-300">Top Holders</h3>
              </div>
              <div className="divide-y divide-gold-500/10">
                {[
                  { name: "0x4f3...21d", position: "YES", amount: "420K USDC" },
                  { name: "0x7b2...e9f", position: "NO", amount: "380K USDC" },
                  { name: "0x1c8...a4b", position: "YES", amount: "295K USDC" },
                  { name: "0x9d3...76c", position: "NO", amount: "210K USDC" },
                ].map((holder, i) => (
                  <div key={i} className="p-4 hover:bg-gold-500/5 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-gold-300">{holder.name}</span>
                      <span className={cn(
                        "text-xs px-2 py-1 rounded",
                        holder.position === "YES" 
                          ? "bg-green-500/10 text-green-300" 
                          : "bg-red-500/10 text-red-300"
                      )}>
                        {holder.position}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-gold-300/80">{holder.amount}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Market Stats */}
            <section className="bg-black/50 border border-gold-500/20 rounded-lg p-6">
              <h3 className="text-xl font-serif text-gold-300 mb-4">Market Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gold-300/60">Total Volume</p>
                  <p className="text-lg text-gold-200">84,688,732 USDC</p>
                </div>
                <div>
                  <p className="text-sm text-gold-300/60">Open Interest</p>
                  <p className="text-lg text-gold-200">12,420,000 USDC</p>
                </div>
                <div>
                  <p className="text-sm text-gold-300/60">Liquidity</p>
                  <p className="text-lg text-gold-200">5,840,000 USDC</p>
                </div>
                <div>
                  <p className="text-sm text-gold-300/60">Created</p>
                  <p className="text-gold-200">Jun 15, 2025</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetail;