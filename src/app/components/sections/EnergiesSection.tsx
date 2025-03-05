"use client";

import { motion } from "framer-motion";
import { Leaf, RotateCw, Sun, Thermometer } from "lucide-react";

export default function EnergiesSection() {
  return (
    <section
      id="energies-renovables"
      className="py-20 bg-gray-100 scroll-mt-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#15223F]">
          Energies Renovables
        </h2>
        <div className="w-24 h-1 bg-[#FAB03B] mx-auto mb-10"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Residential Solar Panels */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("/renovables_1.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-yellow-500 p-3 rounded-full inline-flex mb-3">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Solar Fotovoltaica
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Dissenyem i instal·lem qualsevol tipus d&apos;instal·lació
              d&apos;energia solar fotovoltaica.
            </p>
          </motion.div>

          {/* Commercial Solar */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("/renovables_2.gif")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-red-500 p-3 rounded-full inline-flex mb-3">
                  <Thermometer className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Solar tèrmica</h3>
              </div>
            </div>
            <p className="text-gray-600">
              Utilitza l&apos;energia del sol per escalfar l&apos;aigua de casa
              vostra! Dissenyem i instal·lem sistemes d&apos;aigua calenta
              d&apos;energia solar tèrmica.
            </p>
          </motion.div>

          {/* Solar Farms */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("/renovables_3.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-green-500 p-3 rounded-full inline-flex mb-3">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Biomassa</h3>
              </div>
            </div>
            <p className="text-gray-600">
              Efasol us ofereix les calderes de Pellets ÖkoFEN, de fabricació
              Austríaca amb 20 anys d&apos;experiència. Les seves calderes
              presenten un dels més grans rendiments i eficiència del mercat
              europeu, així com també unes molt baixes emissions de
              contaminants.
            </p>
          </motion.div>

          {/* Maintenance & Support */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: 'url("/renovables_4.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-purple-500 p-3 rounded-full inline-flex mb-3">
                  <RotateCw className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Geotèrmica</h3>
              </div>
            </div>
            <p className="text-gray-600">
              Les bombes geotèrmiques aprofiten la temperatura constant que ens
              ofereix el subsòl per proporcionar Calefacció a l&apos;hivern i
              refrigeració a l&apos;estiu.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
