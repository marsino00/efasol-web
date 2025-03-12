"use client";

import { motion } from "framer-motion";
import { HeroData } from "@/app/types/data";
import { useEffect, useState } from "react";
import { getEntries } from "@/app/lib/contentful";

export default function HeroSection() {
  const [data, setData] = useState<HeroData[]>([]);

  useEffect(() => {
    async function fetchHeroData() {
      const data = await getEntries("heroSection");

      const mappedProducts = data.map((item) => ({
        fields: {
          heroTitulo: item.fields.heroTitulo as string,
          heroDesc: item.fields.heroDesc as string,
        },
        sys: {
          id: item.sys.id,
        },
      }));

      setData(mappedProducts);
    }

    fetchHeroData();
  }, []);
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/plaques.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/80"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 3 }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {data[0]?.fields?.heroTitulo ?? "Cargando..."}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {data[0]?.fields?.heroDesc ?? "Cargando..."}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
