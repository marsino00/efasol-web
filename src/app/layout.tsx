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
  icons: {
    icon: "/logo.svg", // O si usas otro formato: "/favicon.png"
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const initialLocale = "ca";
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
