"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./Navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopLinkClasses =
    "relative inline-block text-[#15223F] font-semibold pb-1 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-[20%] after:bg-[#FAB03B] after:transition-all after:duration-300 hover:after:w-full";

  const desktopContainerClasses = "hidden md:flex items-center space-x-8";

  const mobileLinkClasses =
    "text-[#15223F] font-semibold transition duration-300 hover:text-[#FAB03B]";

  const mobileContainerClasses =
    "md:hidden bg-white border-t border-gray-200 px-10 py-4 flex flex-col space-y-4";

  return (
    <header className="fixed w-full bg-white z-50 shadow-2xl">
      <div className="w-full px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center p-2">
          <Image
            src="/logo_estirat.svg"
            width={300}
            height={50}
            alt="Logo d'Energies Renovables"
          />
        </Link>

        {/* Desktop nav */}
        <NavBar
          containerClassName={desktopContainerClasses}
          linkClassName={desktopLinkClasses}
        />

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Alterna el menú"
        >
          <svg
            className="h-6 w-6 text-[#15223F]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <NavBar
          containerClassName={mobileContainerClasses}
          linkClassName={mobileLinkClasses}
          onLinkClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
