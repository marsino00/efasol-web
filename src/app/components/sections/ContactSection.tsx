"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getEntries } from "@/app/lib/contentful";
import { ContactEntry } from "@/app/types/data";

export default function ContactSection() {
  const t = useTranslations();
  const selectedLocale = useLocale();
  const [data, setData] = useState<ContactEntry[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    async function fetchContactData() {
      const entries = await getEntries({
        content_type: "contactSection",
        locale: selectedLocale,
      });
      const mappedContacts = entries.map((item) => ({
        fields: {
          address: item.fields.address as string,
          desc: item.fields.desc as string,
          email: item.fields.email as string,
          phone: item.fields.phone as string,
          schedule: item.fields.schedule as string,
          title: item.fields.title as string,
          intro: item.fields.intro as string,
        },
        sys: {
          id: item.sys.id,
        },
      }));

      setData(mappedContacts);
    }

    fetchContactData();
  }, [selectedLocale]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
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

  const address = data[0]?.fields?.address ?? "Cargando...";
  const desc = data[0]?.fields?.desc ?? "Cargando...";
  const email = data[0]?.fields?.email ?? "Cargando...";
  const phone = data[0]?.fields?.phone ?? "Cargando...";
  const schedule = data[0]?.fields?.schedule ?? "Cargando...";
  const title = data[0]?.fields?.title ?? "Cargando...";
  const intro = data[0]?.fields?.intro ?? "Cargando...";

  return (
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
            {t("navbar.contact")}
          </h2>
          <div className="w-24 h-1 bg-[#FAB03B] mx-auto mb-10"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">{intro}</p>
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
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-[#FAB03B]-100">{desc}</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <PhoneCall className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("phone")}
                    </h4>
                    <p className="text-gray-600">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("email")}
                    </h4>
                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("address")}
                    </h4>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {t("schedule")}
                    </h4>
                    <p className="text-gray-600">{schedule}</p>
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
                  {t("contact-form.title")}
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contact-form.name")}
                      </label>
                      <input
                        autoComplete="name"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                        placeholder={t("contact-form.placeholder.name")}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {t("contact-form.email")}
                      </label>
                      <input
                        autoComplete="email"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                        placeholder={t("contact-form.placeholder.email")}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("contact-form.message")}
                    </label>
                    <textarea
                      autoComplete="message"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                      placeholder={t("contact-form.placeholder.message")}
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 text-base bg-[#FAB03B] text-white rounded-md"
                    >
                      {t("contact-form.send")}
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
  );
}
