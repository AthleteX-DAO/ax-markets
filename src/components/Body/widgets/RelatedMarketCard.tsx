import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

export function RelatedMarketCard({ title, volume, active }: { 
  title: string; 
  volume: string; 
  active?: boolean 
}) {
  return (
    <Card className={cn(
      "bg-background border transition-all duration-300 h-full flex flex-col",
      active 
        ? "border-gold-400 shadow-lg shadow-gold-500/10" 
        : "border-transparent opacity-70 hover:opacity-90"
    )}>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-auto pt-0">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gold-500">Volume:</span>
          <span className="text-sm font-medium">{volume}</span>
        </div>
      </CardContent>
    </Card>
  )
}