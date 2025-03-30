"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getEntries } from "@/app/lib/contentful";
import { useLocale, useTranslations } from "next-intl";
import { ContentfulImage, EnergiesSectionEntry } from "@/app/types/data";
import React from "react";

function parseMarkdown(text: string): React.ReactNode[] {
  const processedText = text.replace(/\\n/g, "\n");
  const parts = processedText.split(/(__.*?__)/g);

  return parts.flatMap((part, index) => {
    if (part.startsWith("__") && part.endsWith("__")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part.split("\n").flatMap((line, i, arr) => {
      if (i < arr.length - 1) {
        return [
          <span key={`${index}-${i}`}>{line}</span>,
          <br key={`br-${index}-${i}`} />,
        ];
      }
      return <span key={`${index}-${i}`}>{line}</span>;
    });
  });
}

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

        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0">
          {data.map((item, index) => {
            const backgroundUrl = item?.fields?.energiesImage?.fields?.file?.url
              ? `https:${item.fields.energiesImage.fields.file.url}`
              : "/placeholder-image.jpg";

            return (
              <motion.li
                key={item.sys.id}
                className="group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                  {/* Background Image Div */}
                  <div
                    className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${backgroundUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />

                  {/* Optional: Keep a lighter overall gradient if desired */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /* You can keep this lighter or remove it */
                    aria-hidden="true"
                  />

                  {/* --- NEW: Dedicated Text Background Strip --- */}
                  <div className="absolute bottom-0 left-0 w-full pt-10 pb-6 px-6 bg-gradient-to-t from-black/80 via-black/70 to-transparent">
                    {/* Adjust padding (pt, pb, px) and gradient strength (from/via) as needed */}
                    <h3 className="text-xl font-bold text-white">
                      {item.fields.tituloElemento ?? "Título no disponible"}
                    </h3>
                  </div>
                  {/* --- End Text Background Strip --- */}
                </div>

                {/* Description Paragraph */}
                <div className="flex-grow">
                  <p className="text-gray-600 text-left">
                    {parseMarkdown(
                      item.fields.descElemento ?? "Descripción no disponible..."
                    )}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
