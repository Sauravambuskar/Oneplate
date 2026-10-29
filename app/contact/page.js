import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Contact PlateHope Foundation in Bhondsi, Gurugram, Haryana. Call +91 97738 85463 or email foundationplatehope@gmail.com for inquiries about volunteering, partnerships and support.",
  keywords: ["contact PlateHope", "NGO Gurugram contact", "volunteer inquiry", "donate inquiry", "Bhondsi Gurugram", "Haryana NGO contact"],
  alternates: {
    canonical: "https://platehope.in/contact",
  },
  openGraph: {
    title: "Contact | PlateHope Foundation",
    description: "Contact PlateHope Foundation in Bhondsi, Gurugram, Haryana. Reach us for inquiries about volunteering, partnerships and support.",
    url: "https://platehope.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us start with a conversation."
        intro="Whether you want to volunteer, collaborate, support a programme or simply learn more, we would be glad to hear from you."
      />

      <section className="contact-section section-shell section-pad">
        <Reveal className="contact-details">
          <p className="eyebrow">Reach PlateHope</p>
          <h2>We are based in Gurugram, Haryana.</h2>
          <div className="contact-list">
            <a href="tel:+919773885463"><span><small>Call</small>+91 97738 85463</span></a>
            <a href="mailto:foundationplatehope@gmail.com"><span><small>Email</small>foundationplatehope@gmail.com</span></a>
            <a href="https://www.instagram.com/officialplatehope_005" target="_blank" rel="noreferrer"><span><small>Instagram</small>@officialplatehope_005</span></a>
            <p><span><small>Registered office</small>House No. 20, Gali No. 2, Block-D, Mohan Nagar, near Maruti Kunj Road, Bhondsi, Gurugram, Haryana 122102</span></p>
          </div>
          <div className="response-note">We aim to respond as soon as possible.</div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={0.12}>
          <h2>Send an enquiry</h2>
          <p>Required fields are marked with an asterisk. Your message will open in WhatsApp.</p>
          <ContactForm />
        </Reveal>
      </section>

      <section className="contact-poster section-shell section-pad">
        <Reveal className="poster-image">
          <Image
            src="/images/platehope-contact.jpg"
            alt="PlateHope Foundation registration and contact information"
            fill
            sizes="(max-width: 760px) 92vw, 560px"
          />
        </Reveal>
        <Reveal className="poster-copy" delay={0.12}>
          <p className="eyebrow">Official details</p>
          <h2>PlateHope Foundation</h2>
          <p>A Section 8 Company registered with the Ministry of Corporate Affairs.</p>
          <dl>
            <div><dt>CIN</dt><dd>U88900HR2026NPL152073</dd></div>
            <div><dt>Incorporated</dt><dd>23 October 2026</dd></div>
            <div><dt>State</dt><dd>Haryana</dd></div>
          </dl>
        </Reveal>
      </section>
    </>
  );
}
