import Illustration from "@/assets/Catto Ezio.svg";
import Logo from "@/assets/Ezio Kids Logo.svg";
import { useState } from "react";
import { PiInstagramLogo, PiWhatsappLogo } from "react-icons/pi";
import { toast } from "react-toastify";

function UnderConstructionPage() {
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200">
      {/* Header */}
      <header className="flex py-12 px-8 md:px-16 md:justify-between justify-center items-center">
        <img src={Logo} alt="Ezio Kids Logo" className="h-10 md:h-12" />
      </header>

      {/* Main */}
      <main className="flex flex-col-reverse md:flex-row items-center flex-1 px-8 md:px-16 mb-8 justify-between space-y-8 md:space-y-0">
        {/* Content */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800">
            Ezio Kids is Coming Soon!
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            We’re stitching together something extraordinary—cute outfits,
            timeless essentials, and all the fun your little ones deserve.
          </p>

          {/* Email Form */}
          <form className="flex flex-col sm:flex-row gap-4 sm:gap-2 max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Your best email"
              className="flex-1 px-4 py-2 rounded-lg border-2 border-purple-300 focus:border-purple-500 outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email input for notifications"
            />
            <button
              className={`px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition ${
                validateEmail(email) && email !== ""
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              }`}
              onClick={(e) => {
                e.preventDefault();
                toast.success("Thank you for subscribing!");
              }}
              aria-label="Subscribe to notifications"
              disabled={!validateEmail(email) || email === ""}
            >
              Notify Me
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-4 flex justify-center md:justify-start gap-2">
            <a
              href="https://www.instagram.com/ezio_kids123/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
            >
              <PiInstagramLogo className="text-3xl" />
            </a>
            <a
              href="https://wa.me/6281310899214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 transition-transform transform hover:scale-110"
            >
              <PiWhatsappLogo className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <img
            src={Illustration}
            alt="Catto Ezio Illustration"
            className="w-1/2 max-w-md:max-w-lg h-auto md:w-3/4"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Ezio Kids. All rights reserved.
      </footer>
    </div>
  );
}

export default UnderConstructionPage;
