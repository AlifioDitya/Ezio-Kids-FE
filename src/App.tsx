import Illustration from "@/assets/Catto Ezio.svg";
import Logo from "@/assets/Ezio Kids Logo.svg";
import { PiInstagramLogo, PiWhatsappLogo } from "react-icons/pi";

function App() {
  return (
    <div className="w-full h-screen bg-[#EEECED] flex flex-col">
      {/* Main Content */}
      <div className="flex items-center w-full h-full px-16">
        <div className="w-1/2 h-full flex flex-col gap-4 py-8">
          {/* Top Bar */}
          <div className="w-full flex items-center">
            <img src={Logo} alt="Ezio Kids Logo" className="h-12" />
          </div>

          <div className="w-full flex flex-col gap-2 mt-24">
            {/* Title */}
            <p className="text-4xl font-bold text-gray-800 mb-4">
              Coming Soon from Ezio Kids!
            </p>

            {/* Horizontal line */}
            <div className="w-1/4 h-1 bg-[#95171B] mb-4 rounded-lg" />
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600">
            We're putting the final touches on our brand new direct-to-consumer
            website. A playful, stylish online home for all things Ezio Kids.
            From adorable outfits to timeless essentials, your favorite kidswear
            will soon be just a click away.
          </p>

          <div className="flex flex-col gap-4">
            <p className="text-lg font-bold text-[#95171B]">
              Have questions? Reach out to us via Instagram or WhatsApp below.
            </p>

            <div className="flex gap-2 flex-col">
              <a
                href="https://www.instagram.com/ezio_kids123/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-blue-900 transition-colors w-fit"
              >
                <PiInstagramLogo className="inline-block text-3xl" />
                <span className="text-lg font-semibold">@ezio_kids123</span>
              </a>
              <a
                href="https://wa.me/6281310899214"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-800 hover:text-green-700 transition-colors w-fit"
              >
                <PiWhatsappLogo className="inline-block text-3xl" />
                <span className="text-lg font-semibold">+62 813-1089-9214</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            src={Illustration}
            alt="Catto Ezio Illustration"
            className="max-h-full object-contain"
          />
        </div>
      </div>
      {/* Footer */}
      <div className="w-full py-4 bg-[#2F3449] flex items-center justify-center text-white text-sm font-semibold">
        <p>© 2025 Ezio Kids. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
