"use client";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-red-600 shadow-md">
      <div className="container mx-auto justify-between items-center px-4 py-4">
        <Navbar />
      </div>
    </header>
  );
}
