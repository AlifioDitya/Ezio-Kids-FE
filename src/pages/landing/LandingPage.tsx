import Hero from "@/components/layouts/Hero";
import { ProductCarousel } from "@/components/layouts/ProductCarousel";
import TopBar from "@/components/layouts/TopBar";

function LandingPage() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden bg-background">
      <TopBar />

      <div className="mt-14 w-full flex flex-col">
        <Hero />
        <ProductCarousel />
      </div>
    </div>
  );
}

export default LandingPage;
