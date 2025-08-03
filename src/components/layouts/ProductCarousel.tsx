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
import RightBanner from "../../assets/Right Image.jpg";

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

  // 1) once Embla is ready, grab its snap list length
  useEffect(() => {
    if (!api) return;
    const updateSnaps = () => {
      const snaps = api.scrollSnapList();
      setSnapCount(snaps.length);
      setSelectedSnap(api.selectedScrollSnap());
    };
    updateSnaps();

    // on every select OR reInit (resize, DOM change), update
    api.on("select", () => setSelectedSnap(api.selectedScrollSnap()));
    api.on("reInit", updateSnaps);

    return () => {
      api.off("select", () => {});
      api.off("reInit", updateSnaps);
    };
  }, [api]);

  // jump to that exact snap
  const scrollToSnap = (i: number) => api?.scrollTo(i);

  return (
    <section className="bg-blue-50 py-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header + exactly one dot per snap */}
        <div className="flex justify-between items-center mb-6 flex-col sm:flex-row gap-3">
          <h2 className="text-xl text-center sm:text-left font-semibold text-gray-900 sm:text-2xl">
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
                    basis-1/2 sm:basis-1/3 md:basis-1/4
                    lg:basis-1/5 xl:basis-1/6
                    hover:scale-[98%] transition-transform
                    duration-300 cursor-pointer flex
                  "
                >
                  <div className="flex flex-col h-full w-full">
                    <div className="overflow-hidden rounded-t-xl flex-shrink-0">
                      <img
                        src={RightBanner}
                        alt={prod.title}
                        className="w-full h-60 object-cover"
                      />
                    </div>
                    <div className="bg-white rounded-b-xl p-4 flex flex-col justify-between flex-1">
                      <h3 className="text-base font-semibold text-gray-900">
                        {prod.title}
                      </h3>
                      <p className="mt-2 text-gray-700 text-sm">{prod.price}</p>
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
