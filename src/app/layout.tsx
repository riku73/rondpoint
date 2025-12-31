import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garage um Rond Point | Réparation & Vente Auto Luxembourg",
  description:
    "Garage automobile à Luxembourg. Entretien, réparation, vente de véhicules neufs et d'occasion. Service professionnel et prix transparents. Demandez votre devis gratuit.",
  keywords: [
    "garage automobile Luxembourg",
    "réparation voiture Luxembourg",
    "entretien auto Luxembourg",
    "vente voiture Luxembourg",
    "garage mécanique Luxembourg",
    "vidange huile Luxembourg",
    "pneus auto Luxembourg",
    "véhicule occasion Luxembourg",
  ],
  authors: [{ name: "Garage um Rond Point Sàrl" }],
  creator: "Garage um Rond Point Sàrl",
  openGraph: {
    title: "Garage um Rond Point | Réparation & Vente Auto Luxembourg",
    description:
      "Votre garage de confiance au Luxembourg. Entretien, réparation et vente automobile.",
    url: "https://rondpoint.lu",
    siteName: "Garage um Rond Point",
    locale: "fr_LU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garage um Rond Point | Réparation & Vente Auto Luxembourg",
    description:
      "Votre garage de confiance au Luxembourg. Entretien, réparation et vente automobile.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rondpoint.lu",
  },
};

// JSON-LD structured data for local business SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Garage um Rond Point Sàrl",
  image: "https://rondpoint.lu/images/garage.jpg",
  url: "https://rondpoint.lu",
  telephone: "+352 XX XX XX XX",
  email: "info@rondpoint.lu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[Votre adresse]",
    addressLocality: "Luxembourg",
    postalCode: "[Code postal]",
    addressCountry: "LU",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Luxembourg",
  },
  sameAs: ["https://www.instagram.com/garage_um_rond_point/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
