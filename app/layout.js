import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://platehopefoundation.org"),
  title: {
    default: "PlateHope Foundation | Towards a Better Tomorrow",
    template: "%s | PlateHope Foundation"
  },
  description:
    "PlateHope Foundation supports education, food service and brighter opportunities for children and communities in Gurugram, Haryana.",
  openGraph: {
    title: "PlateHope Foundation",
    description: "Education, food service and hope for every child.",
    images: ["/images/platehope-education.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
