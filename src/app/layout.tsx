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
    icon: "/logo.svg",
  },
};

const defaultMessages = {
  skipLink: { label: "Skip to main content" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  let initialMessages;
  try {
    initialMessages = (await import(`../../messages/${locale}.json`)).default;
  } catch (err) {
    console.warn(
      `${err}: Could not load initial messages for locale: ${locale}. Falling back to default.`
    );
    initialMessages = defaultMessages;
  }

  const skipLinkLabel =
    initialMessages?.skipLink?.label ?? defaultMessages.skipLink.label;

  // --- Configuration for Header Height and Main Padding ---
  const mainPaddingTopClass = "pt-16";

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

        <ClientIntlProvider
          initialLocale={locale}
          initialMessages={initialMessages}
        >
          <Header />
          <main
            id="main-content"
            className={`${mainPaddingTopClass} flex-grow`}
          >
            {children}
          </main>
          <Footer />
        </ClientIntlProvider>
      </body>
    </html>
  );
}
