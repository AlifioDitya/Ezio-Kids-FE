"use client";

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
  { label: "Baby", to: "/collections/baby" },
];

export default function TopBar() {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = (to: string) => {
    setOpen(false);
    nav(to);
  };

  return (
    <>
      {/** MOBILE BAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-gray-200 shadow-sm lg:hidden">
        <div className="relative h-20">
          {/* burger */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-700"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>

          {/* centered logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={Logo} alt="Ezio Kids Logo" className="h-8" />
          </div>

          {/* icons */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-4">
            <CiSearch className="text-gray-600 text-3xl cursor-pointer hover:text-gray-800" />
            <CiShoppingCart className="text-gray-600 text-3xl cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* slide-down menu */}
        {open && (
          <nav className="bg-white border-t border-gray-200 px-4 py-2 space-y-2">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.to)}
                className="w-full text-left flex items-center text-[#2E3C69] hover:text-red-600 transition py-2"
              >
                <span className="font-semibold">{link.label}</span>
                {link.label !== "Shop All" && (
                  <GoChevronDown className="ml-1" />
                )}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/** DESKTOP BAR */}
      <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 h-20 items-center bg-background border-b border-gray-200 shadow-sm px-12 justify-between">
        {/* left: logo + links */}
        <div className="flex items-center space-x-12">
          <img src={Logo} alt="Ezio Kids Logo" className="h-8" />
          <nav className="flex items-center space-x-10">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.to)}
                className="flex items-center text-[#2E3C69] hover:text-red-600 transition"
              >
                <span className="font-semibold">{link.label}</span>
                {link.label !== "Shop All" && (
                  <GoChevronDown className="ml-1 text-base" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* right: icons */}
        <div className="flex items-center space-x-6">
          <CiSearch className="text-gray-600 text-3xl hover:text-gray-800 cursor-pointer" />
          <CiShoppingCart className="text-gray-600 text-3xl hover:text-gray-800 cursor-pointer" />
        </div>
      </header>
    </>
  );
}
