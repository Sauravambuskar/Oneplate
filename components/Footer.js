import Image from "next/image";
import Link from "next/link";
import { createWhatsAppUrl } from "@/lib/whatsapp.mjs";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image
            src="/images/platehope-logo.jpg"
            alt="PlateHope Foundation"
            width={92}
            height={92}
          />
          <div>
            <h2>Hope, served with dignity.</h2>
            <p>Education, food service and opportunity for every child.</p>
          </div>
        </div>

        <div className="footer-links">
          <p className="footer-label">Explore</p>
          <Link href="/about">Who we are</Link>
          <Link href="/our-work">Our focus</Link>
          <Link href="/get-involved">Get involved</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <p className="footer-label">Connect</p>
          <a href="tel:+919773885463">Call · +91 97738 85463</a>
          <a href={createWhatsAppUrl("Hello PlateHope Foundation, I found you through your website.")} target="_blank" rel="noreferrer">WhatsApp · Message us</a>
          <a href="mailto:foundationplatehope@gmail.com">Mail · Email us</a>
          <a href="https://www.instagram.com/officialplatehope_005" target="_blank" rel="noreferrer">
            Social · Instagram
          </a>
          <p>Place · Bhondsi, Gurugram, Haryana</p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} PlateHope Foundation</span>
        <span>Section 8 Company · MCA Registered</span>
      </div>
    </footer>
  );
}
