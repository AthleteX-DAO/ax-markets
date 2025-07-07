import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { FeaturedMarketCard } from "./FeaturedMarketsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function FeaturedMarkets() {
  return (
    <div className="relative">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <FeaturedMarketCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom gold navigation arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/80 border border-gold-500/30 hover:bg-gold-900/20 transition-colors">
          <ChevronLeft className="w-6 h-6 text-gold-400" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/80 border border-gold-500/30 hover:bg-gold-900/20 transition-colors">
          <ChevronRight className="w-6 h-6 text-gold-400" />
        </button>
      </Carousel>
    </div>
  )
}