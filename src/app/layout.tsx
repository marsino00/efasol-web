import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { getLocale } from "next-intl/server";
import ClientIntlProvider from "./ClientIntlProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efasol",
  description: "Energies renovables per a un món millor",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const initialLocale = "ca";
  // Importa las traducciones de forma sincrónica (en un entorno de producción puedes optimizar esto)
  // Nota: Esta importación es válida porque se ejecuta en el servidor.
  const initialMessages = (await import("../../messages/ca.json")).default;
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientIntlProvider
          initialLocale={initialLocale}
          initialMessages={initialMessages}
        >
          <Header />
          {children}
          <Footer />
        </ClientIntlProvider>
      </body>
    </html>
  );
}
