// components/HeroSection.jsx (o donde lo tengas)
"use client"; // Necesario para hooks y manejo de eventos

import { motion } from "framer-motion";
import { ContentfulImage, HeroData } from "@/app/types/data"; // Ajusta la ruta si es necesario
import { useEffect, useState, useRef } from "react"; // Importar useRef
import { getEntries } from "@/app/lib/contentful"; // Ajusta la ruta si es necesario
import { useLocale, useTranslations } from "next-intl"; // Importar useTranslations
import { Pause, Play } from "lucide-react"; // Importar iconos

export default function HeroSection() {
  const [data, setData] = useState<HeroData[]>([]);
  const selectedLocale = useLocale();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const t = useTranslations(); // Hook de traducción

  // Estado para controlar si el vídeo se está reproduciendo
  const [isPlaying, setIsPlaying] = useState(true);
  // Referencia al elemento <video>
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
        // Podrías establecer un estado de error aquí si lo necesitas
      }
    }

    fetchHeroData();
  }, [selectedLocale]);

  const videoUrl = data[0]?.fields?.heroImage?.fields?.file?.url
    ? `https:${data[0].fields.heroImage.fields.file.url}`
    : null;

  // Función para pausar/reanudar el vídeo
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // Intentar reproducir (puede fallar en algunos navegadores si no hay interacción previa)
        videoRef.current.play().catch((error) => {
          console.warn(
            "Video play failed, possibly due to browser policy:",
            error
          );
          // Forzar el estado a 'pausado' si falla la reproducción automática
          setIsPlaying(false);
        });
      }
      // Cambiar el estado *antes* de la posible corrección del catch
      setIsPlaying(!isPlaying);
    }
  };

  // Asegurar que el estado isPlaying refleje el estado real del video
  // (útil si el navegador pausa el video por otras razones)
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    // Sincronizar estado inicial por si autoplay falló silenciosamente
    setIsPlaying(!videoElement.paused);

    return () => {
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, [videoLoaded]); // Re-ejecutar si el video se carga/cambia

  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-black">
      {videoUrl ? (
        <video
          ref={videoRef} // Asignar la referencia
          autoPlay // Mantenemos autoplay inicial
          loop
          muted // Importante para autoplay en muchos navegadores
          playsInline // Importante para iOS
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          // Opcional: añadir poster para imagen estática mientras carga o si se pausa
          // poster="/path/to/your/poster-image.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback por si el navegador no soporta el formato/tag */}
          {t("hero.videoNotSupported", {
            defaultValue: "Tu navegador no soporta la etiqueta de vídeo.",
          })}
        </video>
      ) : (
        // Fallback si no hay URL de video (e.g., mostrar imagen estática o color)
        <div className="absolute inset-0 bg-gray-900 z-0"></div>
      )}

      {/* Overlay oscuro */}
      <motion.div
        className="absolute inset-0 bg-black/80 z-0" // Aumentado a 80 para mejor contraste del texto
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.8 }} // Ajustar la opacidad final si es necesario
        transition={{ duration: 3 }}
        aria-hidden="true" // Decorativo
      />

      {/* Contenido de texto */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow" // Añadido text-shadow opcional
          >
            {data[0]?.fields?.heroTitulo ??
              t("hero.loadingTitle", { defaultValue: "Cargando Título..." })}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl text-gray-200 mb-8 text-shadow-sm" // Añadido text-shadow opcional
          >
            {data[0]?.fields?.heroDesc ??
              t("hero.loadingDesc", {
                defaultValue: "Cargando descripción...",
              })}
          </motion.p>
        </div>
      </div>

      {/* --- Botón de Pausa/Play --- */}
      {videoUrl &&
        videoLoaded && ( // Mostrar solo si hay video y está cargado
          <div className="absolute bottom-5 right-5 z-20">
            <button
              onClick={togglePlayPause}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50"
              // Usa t() para las traducciones del aria-label
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
              } // Añadir title por si acaso
            >
              {isPlaying ? (
                <Pause size={20} aria-hidden="true" />
              ) : (
                <Play size={20} aria-hidden="true" />
              )}{" "}
              {/* Iconos son decorativos gracias al aria-label */}
            </button>
          </div>
        )}
      {/* --- FIN Botón Pausa/Play --- */}
    </section>
  );
}

// Helper para text-shadow si no lo tienes en tu config (opcional)
/*
Si quieres usar text-shadow y no lo has configurado en tailwind.config.js,
puedes añadir esto a tu archivo CSS global:

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
*/

// Asegúrate de añadir las claves 'hero.pauseVideo', 'hero.playVideo',
// 'hero.videoNotSupported', 'hero.loadingTitle', 'hero.loadingDesc'
// a tus archivos de traducción (e.g., messages/es.json, messages/ca.json).
