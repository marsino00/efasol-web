// src/app/components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const services = [
    "Estudi, disseny i muntatge d'Instal·lacions Fotovoltaiques (Autoconsum, Aïllades, connexió a xarxa).",
    "Manteniments de plantes Fotovoltaiques.",
    "Direcció presencial d'instal·lacions fotovoltaiques en altres Països (Amèrica Llatina, Àfrica, etc...).",
    "Estudi, disseny i muntatge d'Instal·lacions Solars tèrmiques, Biomassa i Geotèrmica.",
    "Manteniments Solar tèrmiques, Biomassa i geotèrmiques.",
  ];

  return (
    <section id="about" className="py-24 bg-gray-100 scroll-mt-5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-3 text-[#15223F]">
            Sobre nosaltres
          </h2>
          <div className="w-24 h-1 bg-[#FAB03B] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                alt="EFASOL team working on solar installation"
                src="/plaques.jpg"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FAB03B] text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">+10</p>
              <p className="text-sm uppercase tracking-wider">
                Anys d&apos;experiència
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#FAB03B] shadow-md">
              <p className="text-gray-700 leading-relaxed">
                Efasol es una empresa jove, nascuda de l&apos;empresa SOLnet2000
                i compta amb més de 10 anys d&apos;experiència en el sector,
                portant actualment instal·lats més de 2 MegaWatts fotovoltaics i
                duent-ne a terme el seu manteniment preventiu i correctiu.
              </p>
            </div>

            <h3 className="text-2xl font-semibold">Els nostres serveis</h3>

            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                className="group flex items-center gap-2"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>Contacta amb nosaltres</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
