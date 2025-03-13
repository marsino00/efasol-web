"use client";

import { motion } from "framer-motion";
import { ContentfulImage, HeroData } from "@/app/types/data";
import { useEffect, useState } from "react";
import { getEntries } from "@/app/lib/contentful";
import { useLocale } from "next-intl";

export default function HeroSection() {
  const [data, setData] = useState<HeroData[]>([]);
  const selectedLocale = useLocale();

  useEffect(() => {
    async function fetchHeroData() {
      const entries = await getEntries({
        content_type: "heroSection",
        locale: selectedLocale,
      });

      const mappedProducts = entries.map((item) => ({
        fields: {
          heroTitulo: item.fields.heroTitulo as string,
          heroDesc: item.fields.heroDesc as string,
          heroImage: item.fields.heroImage as ContentfulImage,
        },
        sys: {
          id: item.sys.id,
        },
      }));

      setData(mappedProducts);
    }

    fetchHeroData();
  }, [selectedLocale]);

  const backgroundUrl = `https:${data[0]?.fields?.heroImage?.fields?.file?.url}`;

  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
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
