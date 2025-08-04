import Logo from "@/assets/Ezio Kids Logo.svg";
import { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Shop All", to: "/collections/all" },
  { label: "Girls", to: "/collections/girls" },
  { label: "Boys", to: "/collections/boys" },
  { label: "Baby & Toddler", to: "/collections/baby" },
] as const;

export default function TopBar() {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigation = (to: string) => {
    setOpen(false);
    nav(to);
  };

  const NavButton = ({ label, to }: (typeof links)[number]) => (
    <button
      onClick={() => handleNavigation(to)}
      className="flex items-center
                  text-[#2E3C69]
                  hover:text-red-600
                  transition
                  hover:underline hover:underline-offset-6
                  py-2
                  cursor-pointer"
    >
      <span className="font-semibold">{label}</span>
    </button>
  );

  return (
    <>
      {/** MOBILE NAVIGATION */}
      <nav
        aria-label="Mobile navigation"
        className="lg:hidden fixed inset-x-0 top-0 z-50 bg-white border-b"
      >
        <div className="relative flex items-center h-16 px-4">
          {/* Hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="text-2xl text-gray-700"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          {/* Logo centered */}
          <div className="absolute inset-x-0 flex justify-center pointer-events-none">
            <img src={Logo} alt="Ezio Kids" className="h-6" />
          </div>

          {/* Search & Cart */}
          <div className="ml-auto flex items-center space-x-4">
            <CiSearch className="text-xl text-gray-600 hover:text-gray-800 transition cursor-pointer" />
            <CiShoppingCart className="text-xl text-gray-600 hover:text-gray-800 transition cursor-pointer" />
          </div>
        </div>

        {/* Slide-down menu */}
        {open && (
          <div className="bg-white border-t">
            <div className="flex flex-col px-4 py-2 space-y-2">
              {links.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNavigation(link.to)}
                  className="flex items-center justify-between w-full py-2 text-left text-gray-700 hover:text-red-600 transition"
                >
                  <span className="font-semibold">{link.label}</span>
                  {link.label !== "Shop All" && <GoChevronDown />}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/** DESKTOP NAVIGATION */}
      <nav
        aria-label="Main navigation"
        className="hidden lg:flex fixed inset-x-0 top-0 z-50 h-16 items-center justify-between bg-white border-b px-12 shadow-sm"
      >
        {/* Left: logo */}
        <div className="flex items-center space-x-12">
          <img src={Logo} alt="Ezio Kids" className="h-6" />
        </div>

        {/* Center: Links */}
        <ul role="menubar" className="flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.to} role="none">
              <NavButton {...link} />
            </li>
          ))}
        </ul>

        {/* Right: search & cart */}
        <div className="flex items-center space-x-6">
          <CiSearch className="text-2xl text-gray-600 hover:text-gray-800 transition cursor-pointer" />
          <CiShoppingCart className="text-2xl text-gray-600 hover:text-gray-800 transition cursor-pointer" />
        </div>
      </nav>
    </>
  );
}
