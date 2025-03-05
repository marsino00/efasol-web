"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Navegació d'escriptori */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/#energies-renovables"
            className="relative inline-block text-[#15223F] font-semibold pb-1
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                       after:bottom-0 after:h-[2px] after:w-[20%] after:bg-[#FAB03B]
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Energies renovables
          </Link>
          <Link
            href="/#services"
            className="relative inline-block text-[#15223F] font-semibold pb-1
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                       after:bottom-0 after:h-[2px] after:w-[20%] after:bg-[#FAB03B]
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Serveis
          </Link>
          <Link
            href="/#about"
            className="relative inline-block text-[#15223F] font-semibold pb-1
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                       after:bottom-0 after:h-[2px] after:w-[20%] after:bg-[#FAB03B]
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Sobre nosaltres
          </Link>
          <Link
            href="/#contact"
            className="relative inline-block text-[#15223F] font-semibold pb-1
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                       after:bottom-0 after:h-[2px] after:w-[20%] after:bg-[#FAB03B]
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Contacta&apos;ns
          </Link>
        </nav>

        {/* Botó de menú mòbil */}
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

      {/* Navegació mòbil */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="px-10 py-4 flex flex-col space-y-4">
            <Link
              href="/#energies-renovables"
              className="text-[#15223F] font-semibold transition duration-300 hover:text-[#FAB03B]"
              onClick={() => setIsMenuOpen(false)}
            >
              Energies renovables
            </Link>
            <Link
              href="/#services"
              className="text-[#15223F] font-semibold transition duration-300 hover:text-[#FAB03B]"
              onClick={() => setIsMenuOpen(false)}
            >
              Serveis
            </Link>
            <Link
              href="/#about"
              className="text-[#15223F] font-semibold transition duration-300 hover:text-[#FAB03B]"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre nosaltres
            </Link>
            <Link
              href="/#contact"
              className="text-[#15223F] font-semibold transition duration-300 hover:text-[#FAB03B]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacta&apos;ns
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
