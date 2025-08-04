import LeftBanner from "../../assets/Left Image.jpg";
import RightBanner from "../../assets/Right Image.jpg";

const Hero = () => {
  return (
    <section
      aria-label="Featured products journey"
      className="flex flex-col w-full sm:h-screen overflow-hidden"
    >
      {/* Desktop layout */}
      <div className="hidden sm:flex flex-1 overflow-hidden">
        {/* Left image */}
        <figure className="flex-1 m-0">
          <picture>
            <source srcSet={LeftBanner} media="(min-width: 640px)" />
            <img
              src={LeftBanner}
              alt="Smiling children wearing stylish outfits outdoors"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </picture>
        </figure>

        {/* Center panel */}
        <div className="flex-1 relative flex items-center justify-center bg-[#FAF6F0] p-6 overflow-hidden">
          <div
            className="
              relative z-10 text-center 
              w-full px-4 sm:px-6 md:px-8 lg:px-0 
              max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
              mx-auto
            "
          >
            <h1
              className="
                font-bold 
                text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                text-[#495378] leading-tight
              "
            >
              Fashion for Every Playground
            </h1>
            <p
              className="
                mt-8 
                font-semibold 
                text-base sm:text-lg md:text-xl lg:text-2xl 
                text-[#495378]
              "
            >
              Discover the latest trends!
            </p>
            <a
              href="/shop"
              aria-label="Shop Fashion for Every Playground"
              className="
                mt-8 inline-block 
                px-6 py-3 sm:px-8 sm:py-4 
                bg-[#E32C3E]/80 hover:bg-white 
                text-white hover:text-red-500 
                font-bold rounded-sm transition 
                text-base sm:text-lg md:text-xl
              "
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Right image */}
        <figure className="flex-1 m-0">
          <picture>
            <source srcSet={RightBanner} media="(min-width: 640px)" />
            <img
              src={RightBanner}
              alt="Assorted kids’ outfits displayed colorfully"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </picture>
        </figure>
      </div>

      {/* Mobile layout */}
      <div className="sm:hidden flex flex-row h-1/2 overflow-hidden">
        <figure className="flex-1 m-0">
          <img
            src={LeftBanner}
            alt="Kids in playful outfits"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
        <figure className="flex-1 m-0">
          <img
            src={RightBanner}
            alt="Brightly colored children’s clothing"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>

      {/* Mobile CTA panel */}
      <div className="sm:hidden bg-[#FAF6F0] p-6">
        <h1 className="text-center font-bold text-2xl text-[#495378]">
          Fashion for Every Playground
        </h1>
        <p className="mt-2 text-center font-semibold text-base text-[#495378]">
          Discover the latest trends!
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="/shop"
            aria-label="Shop Fashion for Every Playground"
            className="
              px-6 py-3 
              bg-[#E32C3E]/80 hover:bg-white 
              text-white hover:text-red-500 
              font-bold rounded-sm transition text-lg
            "
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
