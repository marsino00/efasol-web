// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { getLocale } from "next-intl/server";
// --- Use your custom provider ---
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
    icon: "/logo.svg",
  },
};

// Define default messages as fallback
const defaultMessages = {
  skipLink: { label: "Skip to main content" },
  // Add other namespaces/keys if needed for initial render fallback
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // --- 1. Get locale on the server ---
  const locale = await getLocale();

  // --- 2. Load initial messages for the detected locale ---
  let initialMessages;
  try {
    initialMessages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.warn(
      `Could not load initial messages for locale: ${locale}. Falling back to default.`
    );
    initialMessages = defaultMessages;
  }

  // --- 3. Get the specific skip link label from the loaded initial messages ---
  const skipLinkLabel =
    initialMessages?.skipLink?.label ?? defaultMessages.skipLink.label;

  // --- Configuration for Header Height and Main Padding ---
  const headerHeightClass = "h-16"; // CHANGE THIS
  const mainPaddingTopClass = "pt-16"; // CHANGE THIS

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={`antialiased flex flex-col min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-700 focus:font-semibold focus:border-2 focus:border-blue-700 focus:rounded-md"
        >
          {skipLinkLabel}
        </a>

        {/* --- Use your custom ClientIntlProvider --- */}
        <ClientIntlProvider
          initialLocale={locale} // Pass the server-detected locale
          initialMessages={initialMessages} // Pass the server-loaded messages
        >
          {/* These components will now render within the context
              provided by your ClientIntlProvider's internal NextIntlClientProvider */}
          <Header />
          <main
            id="main-content"
            className={`${mainPaddingTopClass} flex-grow`}
          >
            {children}
          </main>
          <Footer />
          {/* LanguageSwitcher is rendered inside ClientIntlProvider */}
        </ClientIntlProvider>
        {/* --- End Provider --- */}
      </body>
    </html>
  );
}
