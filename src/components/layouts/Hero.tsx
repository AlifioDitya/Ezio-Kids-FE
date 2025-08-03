import LeftBanner from "../../assets/Left Image.jpg";
import RightBanner from "../../assets/Right Image.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col w-full sm:h-screen overflow-hidden">
      {/** DESKTOP LAYOUT */}
      <div className="hidden sm:flex flex-1 overflow-hidden">
        {/* Left */}
        <div className="flex-1">
          <img
            src={LeftBanner}
            alt="Kids wearing stylish clothes"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center */}
        <div className="flex-1 relative flex items-center justify-center bg-[#FAF6F0] p-6 overflow-hidden">
          <div
            className="
                        relative z-10 text-center 
                        w-full px-4 
                        sm:px-6 md:px-8 lg:px-0 
                        max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                        mx-auto
                      "
          >
            <h2
              className="
                          font-bold 
                          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                          text-[#495378] leading-tight
                        "
            >
              Fashion for Every Playground
            </h2>
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

        {/* Right */}
        <div className="flex-1">
          <img
            src={RightBanner}
            alt="Collection of kids’ outfits"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/** MOBILE LAYOUT */}
      <div className="sm:hidden flex flex-row h-1/2 overflow-hidden">
        {/* Left */}
        <div className="flex-1">
          <img
            src={LeftBanner}
            alt="Kids wearing stylish clothes"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right */}
        <div className="flex-1">
          <img
            src={RightBanner}
            alt="Collection of kids’ outfits"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/** MOBILE SHOP PANEL */}
      <div className="sm:hidden relative flex items-center justify-center bg-[#FAF6F0] p-12 overflow-hidden">
        <div className="relative z-10 text-center max-w-sm mx-auto w-full">
          <h2 className="font-bold text-2xl text-[#495378]">
            Fashion for Every Playground
          </h2>
          <p className="mt-4 font-semibold text-base text-[#495378]">
            Discover the latest trends!
          </p>
          <a
            href="/shop"
            className="mt-6 inline-block px-6 py-3 bg-[#E32C3E]/80 hover:bg-white text-white hover:text-red-500 font-bold rounded-sm transition text-lg w-full sm:w-fit"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
