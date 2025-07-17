// LeaderboardPage.tsx
import { cn } from "@/lib/utils";

const LeaderboardPage = () => {
  const leaderboardData = [
    { rank: 1, username: "DumfagMAWIO", address: "0x5761...437", volume: "33,412,547 USDC" },
    { rank: 2, username: "JumfagMama", address: "0x5761...197", volume: "12,460,422 USDC" },
    { rank: 3, username: "JumfagMama", address: "0x5761...473", volume: "11,390,540 USDC" },
    { rank: 4, username: "JumfagMama", address: "0x5761...322", volume: "10,037,283 USDC" },
    { rank: 5, username: "JumfagMama", address: "0x5761...384", volume: "9,983,071 USDC" },
    { rank: 6, username: "JumfagMama", address: "0x5761...462", volume: "9,280,739 USDC" },
    { rank: 7, username: "LeadTCM", address: "0x5761...GILD", volume: "9,138,289 USDC" },
    { rank: 8, username: "JumfagMama", address: "0x5761...438", volume: "8,509,635 USDC" },
    { rank: 9, username: "JumfagMama", address: "0x5761...538", volume: "8,400,909 USDC" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900/50 text-gold-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gold-500/20 pb-6">
            <div>
              <h1 className="text-4xl font-serif font-medium text-gold-300 mb-2">Volume Leaderboard</h1>
              <p className="text-gold-300/80">Top traders by monthly volume</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <button className={cn(
                "px-4 py-2 text-sm rounded-md",
                "bg-gold-500/10 text-gold-300 border border-gold-500/20",
                "hover:bg-gold-500/20 transition-colors"
              )}>
                Monthly
              </button>
              <button className={cn(
                "px-4 py-2 text-sm rounded-md",
                "bg-transparent text-gold-300/70 border border-gold-500/10",
                "hover:bg-gold-500/10 hover:text-gold-300 transition-colors"
              )}>
                All Time
              </button>
            </div>
          </div>
          <div className="mt-2 text-sm text-gold-300/60">
            All time: 1,637 traders
          </div>
        </section>

        {/* Leaderboard Table */}
        <section className="bg-black/50 border border-gold-500/20 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-black/80 border-b border-gold-500/20">
            <div className="col-span-1 text-sm font-medium text-gold-300/80">Rank</div>
            <div className="col-span-5 md:col-span-4 text-sm font-medium text-gold-300/80">Trader</div>
            <div className="col-span-6 md:col-span-4 text-sm font-medium text-gold-300/80">Address</div>
            <div className="col-span-12 md:col-span-3 text-right text-sm font-medium text-gold-300/80">Volume</div>
          </div>

          {/* Table Rows */}
          {leaderboardData.map((trader) => (
            <div 
              key={trader.rank}
              className={cn(
                "grid grid-cols-12 gap-4 px-6 py-4 border-b border-gold-500/10 last:border-0",
                "hover:bg-gold-500/5 transition-colors"
              )}
            >
              <div className="col-span-1 flex items-center">
                <span className={cn(
                  "w-6 h-6 flex items-center justify-center rounded-full text-sm",
                  trader.rank === 1 ? "bg-gold-500/20 text-gold-300" : "text-gold-300/70"
                )}>
                  {trader.rank}
                </span>
              </div>
              <div className="col-span-5 md:col-span-4 flex items-center">
                <span className="font-medium text-gold-200">{trader.username}</span>
              </div>
              <div className="col-span-6 md:col-span-4 flex items-center">
                <span className="text-sm text-gold-300/70 font-mono">{trader.address}</span>
              </div>
              <div className="col-span-12 md:col-span-3 flex items-center justify-end">
                <span className="text-gold-200">{trader.volume}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Your Position (if logged in) */}
        <section className="mt-8 bg-black/50 border border-gold-500/20 rounded-lg p-6">
          <h3 className="font-serif text-lg text-gold-300 mb-4">Your Position</h3>
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-1 text-gold-300/70">-</div>
            <div className="col-span-5 md:col-span-4 text-gold-300/70">Not ranked</div>
            <div className="col-span-6 md:col-span-4 text-sm text-gold-300/50">Connect wallet to see your position</div>
            <div className="col-span-12 md:col-span-3 text-right text-gold-300/70">- USDC</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeaderboardPage;