import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { RelatedMarketCard } from "./RelatedMarketCard";

const relatedMarkets = [
  { title: "Will Ethereum hit $10K before 2026?", volume: "842K" },
  { title: "AI CEO replacement probability", volume: "1.2M" },
  { title: "Next US election winner odds", volume: "3.4M" },
  { title: "Climate milestone predictions", volume: "560K" },
  { title: "Who will marry Kevin Kamto? ", volume: "400k"},
  { title: "US Oil Prices in June?", volume: "1.6M" },
  { title: "Bitcoin price above $50K by 2024?", volume: "900K" },
  { title: "SpaceX Mars landing by 2030?", volume: "1.1M" },
  { title: "Global recession in 2024?", volume: "750K" },
  { title: "Apple stock price above $200?", volume: "820K" },
  { title: "Next FIFA World Cup winner?", volume: "1.3M" },
  { title: "Electric vehicle adoption by 2035?", volume: "600K" }
];

export function RelatedMarkets() {
  return (
    <Carousel opts={{ align: "start", slidesToScroll: 1 }} className="w-full">
      <CarouselContent className="-ml-2">
        {relatedMarkets.map((market, index) => (
          <CarouselItem key={index} className="pl-2 basis-2/3 sm:basis-1/3 lg:basis-1/4">
            <RelatedMarketCard 
              title={market.title}
              volume={market.volume}
              active={index === 1} // Example for active state
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}