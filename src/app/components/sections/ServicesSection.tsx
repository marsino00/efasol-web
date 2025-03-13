"use client";

import { getEntries } from "@/app/lib/contentful";
import { ContentfulImage, ServicesSectionEntry } from "@/app/types/data";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function ServicesSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<ServicesSectionEntry[]>([]);

  useEffect(() => {
    async function fetchServicesData() {
      const entries = await getEntries({
        content_type: "servicesSection",
        locale: selectedLocale,
      });
      const mappedEntries = entries.map((item) => ({
        fields: {
          descElemento: item.fields.descElemento as string,
          servicesImage: item.fields.servicesImage as ContentfulImage,
          tituloElemento: item.fields.tituloElemento as string,
        },
        sys: {
          id: item.sys.id,
        },
      }));
      setData(mappedEntries);
    }

    fetchServicesData();
  }, [selectedLocale]);

  return (
    <section id="services" className="py-20 bg-gray-100 scroll-mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-3 text-[#15223F]">
          {t("why-chosse-us")}
        </h2>
        <div className="w-24 h-1 bg-[#FAB03B] mx-auto mb-10"></div>

        <div className="grid md:grid-cols-3 gap-12">
          {data.map((item, index) => {
            const backgroundUrl = `https:${item?.fields?.servicesImage?.fields?.file?.url}`;
            return (
              <motion.div
                key={item.sys.id}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-lg group">
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${backgroundUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {item.fields.tituloElemento}
                </h3>
                <p className="text-gray-600">{item.fields.descElemento}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
