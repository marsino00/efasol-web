"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { getEntries } from "@/app/lib/contentful";
import { AboutSectionEntry, ContentfulImage } from "@/app/types/data";

export default function AboutSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<AboutSectionEntry[]>([]);

  useEffect(() => {
    async function fetchAboutData() {
      const entries = await getEntries({
        content_type: "aboutSection",
        locale: selectedLocale,
      });
      const mappedData = entries.map((item) => ({
        fields: {
          aboutImage: item.fields.aboutImage as ContentfulImage,
          aboutList: item.fields.aboutList as string[],
          subtitulo: item.fields.subtitulo as string,
          text1: item.fields.text1 as string,
        },
        sys: {
          id: item.sys.id,
        },
      }));
      setData(mappedData);
    }
    fetchAboutData();
  }, [selectedLocale]);

  if (data.length === 0) {
    return (
      <section id="about" className="py-24 bg-gray-100 scroll-mt-5">
        <div className="container mx-auto px-4">
          <p className="text-center">Cargando...</p>
        </div>
      </section>
    );
  }

  const about = data[0].fields;

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
            {t("navbar.about")}
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
                alt="Imatge de l'About Section"
                src={`https:${about.aboutImage?.fields?.file?.url}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FAB03B] text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">+10</p>
              <p className="text-sm uppercase tracking-wider">
                {t("about-exp")}
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
              <p className="text-gray-700 leading-relaxed">{about.text1}</p>
            </div>

            <h3 className="text-2xl font-semibold">{about.subtitulo}</h3>

            <ul className="space-y-4">
              {about.aboutList.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <p className="text-gray-700">{service}</p>
                </li>
              ))}
            </ul>

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
                <span>{t("about-button")}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
