import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Header } from "@/components/Header";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

import localFont from "next/font/local";

import "../../styles/globals.css";

const mardoto = localFont({
  src: [
    {
      path: "../../../public/fonts/Mardoto-Medium.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mardoto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mardoto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mardoto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Գլխավոր | MinistryofHT",
  description: "…your Armenian description…",
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const LocaleLayout: React.FC<Props> = async ({ params, children }) => {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${mardoto.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
