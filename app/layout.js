import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationSchema } from "./organization-schema";

export const metadata = {
  metadataBase: new URL("https://platehopefoundation.org"),
  title: {
    default: "PlateHope Foundation | Towards a Better Tomorrow",
    template: "%s | PlateHope Foundation"
  },
  description:
    "PlateHope Foundation supports education, food service and brighter opportunities for children and communities in Gurugram, Haryana.",
  keywords: [
    "NGO Gurugram",
    "child education NGO",
    "food service foundation",
    "Haryana NGO",
    "PlateHope Foundation",
    "education support",
    "community development",
    "child welfare",
    "Bhondsi NGO",
    "non-profit organization India"
  ],
  authors: [{ name: "PlateHope Foundation" }],
  creator: "PlateHope Foundation",
  publisher: "PlateHope Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://platehopefoundation.org",
    siteName: "PlateHope Foundation",
    title: "PlateHope Foundation | Towards a Better Tomorrow",
    description: "Education, food service and hope for every child in Gurugram, Haryana.",
    images: [
      {
        url: "/images/platehope-education.jpg",
        width: 1200,
        height: 630,
        alt: "PlateHope Foundation - Education and Food Service for Children"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PlateHope Foundation | Towards a Better Tomorrow",
    description: "Education, food service and hope for every child in Gurugram, Haryana.",
    images: ["/images/platehope-education.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://platehopefoundation.org",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2D5A3D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
