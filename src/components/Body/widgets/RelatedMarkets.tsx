"use client";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,

} from "@/components/ui/carousel"

import { cn } from "@/lib/utils";


export function RelatedMarkets() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="mx-auto max-w-xs">
      <Carousel
        setApi={setApi}
        className="w-full max-w-xs mx-2"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="basis-3/5">
              <Card
                className={cn(
                  "bg-primary text-primary-foreground transition-all duration-500",
                  {
                    "opacity-30": index !== current - 1,
                  }
                )}
              >
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
