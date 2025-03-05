"use client";

import { useEffect, useState } from "react";
import { getEntries } from "./lib/contentful";
import { Product } from "./types/product";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import EnergiesSection from "./components/sections/EnergiesSection";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getEntries("product");
      const mappedProducts = data.map((item) => ({
        fields: {
          productName: item.fields.productName as string,
        },
        sys: {
          id: item.sys.id,
        },
      }));

      setProducts(mappedProducts);
    }

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection products={products} />
      <EnergiesSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
