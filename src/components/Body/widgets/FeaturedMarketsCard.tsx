import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { PredictionChart } from "./PredictionChart";

export function FeaturedMarketCard() {
  return (
    <Card className="bg-background border border-gold-300/20 hover:border-gold-300/40 transition-all group overflow-hidden">
      {/* Glossy header with subtle gold gradient */}
      <CardHeader className="bg-gradient-to-r from-black to-gold-900/10 border-b border-gold-300/10 p-6">
        <CardTitle className="text-xl font-serif text-gold-300 group-hover:text-gold-200 transition-colors">
          Will Multi Reality be suspended by the Nika before October 2025?
        </CardTitle>
      </CardHeader>
      
      {/* Chart content */}
      <CardContent className="p-0">
        <PredictionChart />
      </CardContent>
      
      {/* Luxe footer */}
      <CardFooter className="bg-gradient-to-b from-transparent to-black/30 p-6 flex justify-between items-center">
        <div className="text-sm text-gold-400/80">
          <span className="font-medium">Total Volume:</span> 1,240,500
        </div>
        <button className="text-xs uppercase tracking-wider text-gold-300 hover:text-gold-100 transition-colors">
          View Details →
        </button>
      </CardFooter>
    </Card>
  )
}