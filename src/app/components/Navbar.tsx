"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center">
      <a href="#home" className="text-xl font-bold text-gray-800">
        Efasol
      </a>

      <button
        // This is the button that toggles the menu only for mobile
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul
        className={`md:flex space-x-6 md:relative md:w-auto md:bg-transparent md:p-0 shadow-md md:shadow-none ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a href="#about" className="block py-2 px-4 text-gray-800">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#services" className="block py-2 px-4 text-gray-800">
            Servicios
          </a>
        </li>
        <li>
          <a href="#contact" className="block py-2 px-4 text-gray-800">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
