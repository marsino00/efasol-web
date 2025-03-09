"use client";

import { motion } from "framer-motion";
import { Product } from "@/app/types/product";

type HeroSectionProps = {
  products: Product[];
};

export default function HeroSection({ products }: HeroSectionProps) {
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
            Especialistes en energies renovables solar fotovoltaica i tèrmica
          </motion.h1>

          <motion.p
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            EL FUTUR ESTÀ AQUÍ! Descobreix el que EFASOL pot fer per tu i pel
            planeta.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
