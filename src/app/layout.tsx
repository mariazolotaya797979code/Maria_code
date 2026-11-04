import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { DocumentTitle } from "@/components/DocumentTitle";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/lib/i18n";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  description:
    "Продающие лендинги, сайты, кабинеты, CRM, боты и автоматизация. Maria работает по всему миру и адаптирует системы под нужные языки.",
  openGraph: {
    title: "Maria — системы для бизнеса",
    description:
      "От продающего лендинга до системы, которая заменяет пять таблиц. Работа по всему миру, адаптация под языки клиента.",
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/portrait.jpg", width: 1200, height: 1600, alt: "Maria" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  email: site.email,
  url: site.url || undefined,
  areaServed: "Worldwide",
  sameAs: [site.telegramUrl],
  description:
    "Landing pages, websites, client cabinets, CRMs, bots and automation, adapted to the languages a business needs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>
          <DocumentTitle />
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
