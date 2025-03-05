// src/app/components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-100 scroll-mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#15223F]">
          Perquè escollir EFASOL
        </h2>
        <div className="w-24 h-1 bg-[#FAB03B] mx-auto mb-10"></div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Manteniment d'instal·lacions fotovoltaiques */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg group">
              <div
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("/rounded_1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Manteniment d&apos;instal·lacions fotovoltaiques
            </h3>
            <p className="text-gray-600">
              Oferim un seguiment i manteniment complet i professional en totes
              les instal·lacions. Serveis de manteniment preventiu i correctiu.
            </p>
          </motion.div>

          {/* Autoconsum */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg group">
              <div
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Autoconsum</h3>
            <p className="text-gray-600">
              Redueix la factura de la llum fins a un 35% utilitzant panells
              solars fotovoltaics. Una instal·lació de ràpida amortització amb
              una vida útil de 25 anys sense manteniment.
            </p>
          </motion.div>

          {/* Assessorament i pressupostos a mida */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg group">
              <div
                className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("/rounded_3.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Assessorament i pressupostos a mida
            </h3>
            <p className="text-gray-600">
              Estudiem el vostre projecte i us oferim un pressupost adaptat a
              les vostres necessitats.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
