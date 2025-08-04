"use client";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SampleImage from "../../assets/Right Image.jpg";

const products = [
  { id: 1, title: "Sprint Tennis Skirt", price: "Rp80.000" },
  { id: 2, title: "Playa Swim Trunk", price: "Rp.120.000" },
  { id: 3, title: "Safari Two Piece Swim", price: "Rp150.000" },
  { id: 4, title: "Rise & Shine Romper", price: "Rp100.000" },
  { id: 5, title: "Poolside Flutter Tank", price: "Rp100.000" },
  { id: 6, title: "Sunny Day Dress", price: "Rp300.000" },
  { id: 7, title: "Adventure Shorts", price: "Rp100.000" },
  { id: 8, title: "Beachcomber Tee", price: "Rp100.000" },
  { id: 9, title: "Explorer Cargo Pants", price: "Rp100.000" },
  { id: 10, title: "Sunset Hoodie", price: "Rp100.000" },
];

export function ProductCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    const updateSnaps = () => {
      const snaps = api.scrollSnapList();
      setSnapCount(snaps.length);
      setSelectedSnap(api.selectedScrollSnap());
    };
    updateSnaps();

    api.on("select", () => setSelectedSnap(api.selectedScrollSnap()));
    api.on("reInit", updateSnaps);

    return () => {
      api.off("select", () => {});
      api.off("reInit", updateSnaps);
    };
  }, [api]);

  const scrollToSnap = (i: number) => api?.scrollTo(i);

  return (
    <section className="bg-blue-50 py-8 pb-10 lg:py-12">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-3">
          <h2 className="text-xl text-center sm:text-left font-semibold text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
            New Arrivals for Your Little Ones
          </h2>
          <div className="flex space-x-2">
            {Array.from({ length: snapCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSnap(idx)}
                className={`
                  h-2 w-2 rounded-full transition-colors cursor-pointer
                  ${selectedSnap === idx ? "bg-gray-900" : "bg-gray-400"}
                `}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
            <CarouselPrevious
              className="
                absolute left-0 top-1/2 -translate-y-1/2
                p-2 bg-white/80 hover:bg-red-main
                text-gray-900 hover:text-white
                rounded-full z-10 cursor-pointer
                border-none
              "
            >
              ←
            </CarouselPrevious>

            <CarouselContent className="-ml-4">
              {products.map((prod) => (
                <CarouselItem
                  key={prod.id}
                  className="
                    pl-4 
                    flex-none
                    basis-1/2 sm:basis-1/2 md:basis-1/3
                    lg:basis-1/4 xl:basis-1/5
                    hover:scale-[98%] transition-transform
                    duration-300 cursor-pointer flex
                  "
                >
                  <div className="flex flex-col h-full w-full gap-3">
                    <div className="overflow-hidden rounded-md flex-shrink-0 aspect-[3/4]">
                      <img
                        src={SampleImage}
                        alt={prod.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-gray-900">
                        {prod.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{prod.price}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselNext
              className="
                absolute right-0 top-1/2 -translate-y-1/2
                p-2 bg-white/80 hover:bg-red-main
                text-gray-900 hover:text-white
                rounded-full z-10 cursor-pointer
                border-none
              "
            >
              →
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
