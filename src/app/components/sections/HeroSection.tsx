"use client";

import { motion } from "framer-motion";
import { ContentfulImage, HeroData } from "@/app/types/data";
import { useEffect, useState, useRef } from "react";
import { getEntries } from "@/app/lib/contentful";
import { useLocale, useTranslations } from "next-intl";
import { Pause, Play } from "lucide-react";

export default function HeroSection() {
  const [data, setData] = useState<HeroData[]>([]);
  const selectedLocale = useLocale();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const t = useTranslations();

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function fetchHeroData() {
      try {
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
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    }

    fetchHeroData();
  }, [selectedLocale]);

  const videoUrl = data[0]?.fields?.heroImage?.fields?.file?.url
    ? `https:${data[0].fields.heroImage.fields.file.url}`
    : null;

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.warn(
            "Video play failed, possibly due to browser policy:",
            error
          );
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    setIsPlaying(!videoElement.paused);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, [videoLoaded]);

  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-black">
      {videoUrl ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoUrl} type="video/mp4" />
          {t("hero.videoNotSupported", {
            defaultValue: "Tu navegador no soporta la etiqueta de vídeo.",
          })}
        </video>
      ) : (
        <div className="absolute inset-0 bg-gray-900 z-0"></div>
      )}

      <motion.div
        className="absolute inset-0 bg-black/80 z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 3 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
          >
            {data[0]?.fields?.heroTitulo ??
              t("hero.loadingTitle", { defaultValue: "Cargando Título..." })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl text-gray-200 mb-8 text-shadow-sm"
          >
            {data[0]?.fields?.heroDesc ??
              t("hero.loadingDesc", {
                defaultValue: "Cargando descripción...",
              })}
          </motion.p>
        </div>
      </div>

      {videoUrl && videoLoaded && (
        <div className="absolute bottom-5 right-5 z-20">
          <button
            onClick={togglePlayPause}
            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
            aria-label={
              isPlaying
                ? t("hero.pauseVideo", {
                    defaultValue: "Pausar vídeo de fondo",
                  })
                : t("hero.playVideo", {
                    defaultValue: "Reproducir vídeo de fondo",
                  })
            }
            title={
              isPlaying
                ? t("hero.pauseVideo", {
                    defaultValue: "Pausar vídeo de fondo",
                  })
                : t("hero.playVideo", {
                    defaultValue: "Reproducir vídeo de fondo",
                  })
            }
          >
            {isPlaying ? (
              <Pause size={20} aria-hidden="true" />
            ) : (
              <Play size={20} aria-hidden="true" />
            )}{" "}
          </button>
        </div>
      )}
    </section>
  );
}
