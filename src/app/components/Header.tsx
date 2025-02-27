"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" width={90} height={90} alt="logo_efasol" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-gray-600 hover:text-gray-900">
              Sobre nosaltres
            </Link>
            <Link
              href="/#services"
              className="text-gray-600 hover:text-gray-900"
            >
              Serveis
            </Link>
            <Link
              href="/#contact"
              className="text-gray-600 hover:text-gray-900"
            >
              Contacta&apos;ns
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#about"
                className="text-gray-600 hover:text-gray-900 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nosaltres
              </Link>
              <Link
                href="/#services"
                className="text-gray-600 hover:text-gray-900 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Serveis
              </Link>
              <Link
                href="/#contact"
                className="text-gray-600 hover:text-gray-900 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacta&apos;ns
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
