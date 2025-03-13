"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getEntries } from "@/app/lib/contentful";
import { useLocale, useTranslations } from "next-intl";
import { ContentfulImage, EnergiesSectionEntry } from "@/app/types/data";

export default function EnergiesSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<EnergiesSectionEntry[]>([]);

  useEffect(() => {
    async function fetchEnergiesData() {
      const entries = await getEntries({
        content_type: "energiesSection",
        locale: selectedLocale,
      });
      console.log("entries", entries);

      const mappedEntries = entries.map((item) => ({
        fields: {
          descElemento: item.fields.descElemento as string,
          energiesImage: item.fields.energiesImage as ContentfulImage,
          tituloElemento: item.fields.tituloElemento as string,
        },
        sys: {
          id: item.sys.id,
        },
      }));
      setData(mappedEntries);
    }

    fetchEnergiesData();
  }, [selectedLocale]);

  return (
    <section
      id="energies-renovables"
      className="py-20 bg-gray-100 scroll-mt-10"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#15223F]">
          {t("navbar.energies-renovables")}
        </h2>
        <div className="w-24 h-1 bg-[#FAB03B] mx-auto mb-10"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => {
            const backgroundUrl = `https:${item?.fields?.energiesImage?.fields?.file?.url}`;
            return (
              <motion.div
                key={item.sys.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${backgroundUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {item.fields.tituloElemento}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600">{item.fields.descElemento}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
