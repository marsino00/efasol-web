"use client";

import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import EnergiesSection from "./components/sections/EnergiesSection";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EnergiesSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
