"use client";

import {
  PhoneCall,
  Mail,
  Leaf,
  Thermometer,
  Sun,
  RotateCw,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Button from "./components/Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getEntries } from "./lib/contentful";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  type Product = {
    fields: {
      productName: string;
    };
    sys: {
      id: string;
    };
  };

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
  if (products.length > 0) {
    console.log(products[0].fields.productName);
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res);

      if (res.ok) {
        alert("Missatge enviat correctament");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error al enviar el missatge");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el missatge");
    }
  };
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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
          <div>
            <h2>Lista de Productos</h2>
            <ul>
              {products.map((product) => (
                <li key={product.sys.id}>{product.fields.productName}</li>
              ))}
            </ul>
          </div>
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

      {/* Solar Solutions Section */}
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
                  <h3 className="text-xl font-bold text-white">
                    Solar tèrmica
                  </h3>
                </div>
              </div>
              <p className="text-gray-600">
                Utilitza l&apos;energia del sol per escalfar l&apos;aigua de
                casa vostra! Dissenyem i instal·lem sistemes d&apos;aigua
                calenta d&apos;energia solar tèrmica.
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
                Les bombes geotèrmiques aprofiten la temperatura constant que
                ens ofereix el subsòl per proporcionar Calefacció a
                l&apos;hivern i refrigeració a l&apos;estiu.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solar Importance Section */}
      <section id="services" className="py-20 bg-gray-100 scroll-mt-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-[#15223F]">
            Perquè escollir EFASOL
          </h2>
          <div className="w-24 h-1 bg-[#FAB03B] mx-auto mb-10"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Environmental Impact */}
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
                Oferim un seguiment i manteniment complet i professional en
                totes les instal·lacions. Serveis de manteniment preventiu i
                correctiu.
              </p>
            </motion.div>

            {/* Economic Benefits */}
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

            {/* Energy Independence */}
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
                Assesorament i pressupostos a mida
              </h3>
              <p className="text-gray-600">
                Estudiem el vostre projecte i us oferim un pressupost adaptat a
                les vostres necessitats.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                ></Image>
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
                  Efasol es una empresa jove, nascuda de l&apos;empresa
                  SOLnet2000 i compta amb més de 10 anys d&apos;experiència en
                  el sector, portant actualment instal·lats més de 2 MegaWatts
                  fotovoltaics i duent-ne a terme el seu manteniment preventiu i
                  correctiu.
                </p>
              </div>

              <h3 className="text-2xl font-semibold">Els nostres serveis</h3>

              <div className="space-y-4">
                {[
                  "Estudi, disseny i muntatge d'Instal·lacions Fotovoltaiques (Autoconsum, Aïllades, connexió a xarxa).",
                  "Manteniments de plantes Fotovoltaiques.",
                  "Direcció presencial d'instal·lacions fotovoltaiques en altres Països (Amèrica Llatina, Àfrica, etc...)",
                  "Estudi, disseny i muntatge d'Instal·lacions Solars tèrmiques, Biomassa i Geotèrmica.",
                  "Manteniments Solar tèrmiques, Biomassa i geotèrmiques.",
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
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
                      element.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <span>Contacta amb nosaltres</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equip Expert</h3>
              <p className="text-gray-600">
                Professionals amb experiència en el sector de les energies
                renovables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Compromís Sostenible
              </h3>
              <p className="text-gray-600">
                Treballem per un futur més sostenible i respectuós amb el medi
                ambient.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualitat Garantida</h3>
              <p className="text-gray-600">
                Oferim solucions de qualitat amb garantia i suport tècnic
                continuat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section*/}
      <section id="contact" className="py-16 bg-white relative scroll-mt-12">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-3 text-[#15223F]">
              Contacta&apos;ns
            </h2>
            <div className="w-24 h-1 bg-[#FAB03B] mx-auto mb-10"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estàs interessat en les nostres solucions d&apos;energia
              renovable? Contacta amb nosaltres i t&apos;ajudarem a trobar la
              millor opció per a les teves necessitats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="bg-[#FAB03B] p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Informació de contacte
                  </h3>
                  <p className="text-[#FAB03B]-100">Estem aquí per ajudar-te</p>
                </div>

                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <PhoneCall className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telèfon</h4>
                      <p className="text-gray-600">661 523 509</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@efasol.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adreça</h4>
                      <p className="text-gray-600">
                        Carrer Montsant, 6, 08272 Sant Fruitós de Bages,
                        Barcelona, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Horari</h4>
                      <p className="text-gray-600">
                        Dilluns - Divendres: 9:00 – 19:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-2"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6">
                    Envia&apos;ns un missatge
                  </h3>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                          placeholder="El teu nom"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Correu electrònic
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                          placeholder="email@exemple.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Missatge
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                        placeholder="En què podem ajudar-te?"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-3 text-base bg-[#FAB03B] text-white rounded-md"
                      >
                        Enviar missatge
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11906.902169177563!2d1.8528092318893443!3d41.74801244201304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4f82857b55a07%3A0x46f2a5af17f0bf43!2sEFASOL%20Energies%20Renovables!5e0!3m2!1sca!2ses!4v1740842575397!5m2!1sca!2ses"
              width="100%"
              height="450"
              loading="lazy"
              className="w-full"
              title="EFASOL location map"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
