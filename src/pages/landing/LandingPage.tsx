import BestSeller from "@/components/layouts/BestSeller";
import Footer from "@/components/layouts/Footer";
import Hero from "@/components/layouts/Hero";
import { NewArrivalCarousel } from "@/components/layouts/NewArrivalCarousel";
import TopBar from "@/components/layouts/TopBar";

export default function LandingPage() {
  return (
    <>
      {/* React 19 will hoist these into <head> */}
      <title>Home – Ezio Kids</title>
      <meta
        name="description"
        content="Welcome to Ezio Kids—bright, sustainable kidswear for every adventure. Shop our latest arrivals and best sellers."
      />
      <link rel="canonical" href="https://www.eziokids.com/" />

      <header>
        <TopBar />
      </header>

      <main
        aria-label="Homepage content"
        className="mt-16 w-full flex flex-col overflow-x-hidden bg-background"
      >
        {/* Hero Section */}
        <section aria-label="Hero section">
          <Hero />
        </section>

        {/* Best Seller Section */}
        <BestSeller />

        {/* New Arrivals */}
        <section aria-labelledby="new-arrivals-heading">
          <NewArrivalCarousel />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
