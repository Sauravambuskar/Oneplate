import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "About Us",
  description: "Learn about PlateHope Foundation, a Section 8 non-profit organization from Gurugram, Haryana. Discover our purpose, values, mission and MCA registration details.",
  keywords: ["PlateHope Foundation", "NGO Gurugram", "Section 8 company", "non-profit Haryana", "child welfare organization"],
  alternates: {
    canonical: "https://www.platehope.in/about",
  },
  openGraph: {
    title: "About Us | PlateHope Foundation",
    description: "Learn about PlateHope Foundation, a Section 8 non-profit organization from Gurugram, Haryana. Discover our purpose, values and mission.",
    url: "https://www.platehope.in/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Built on care. Focused on possibility."
        intro="PlateHope Foundation is a Section 8 non-profit from Gurugram, Haryana, working towards a more supported future for children and communities."
      />

      <section className="about-story section-shell section-pad">
        <Reveal className="about-image">
          <Image
            src="/images/platehope-community.jpg"
            alt="PlateHope Foundation team with children"
            fill
            sizes="(max-width: 820px) 92vw, 45vw"
          />
        </Reveal>
        <Reveal className="about-copy" delay={0.12}>
          <p className="eyebrow">Our beginning</p>
          <h2>A foundation created to put hope within reach.</h2>
          <p>
            PlateHope Foundation was incorporated on 23 October 2026 with a clear social
            purpose: to support education, food service and brighter opportunities for every child.
          </p>
          <p>
            We believe lasting progress grows from grounded action, trusted relationships
            and programmes shaped around the realities of the communities they serve.
          </p>
          <div className="registry-note">
            <span className="registry-seal" aria-hidden="true">MCA</span>
            <div><strong>MCA Registered</strong><span>CIN: U88900HR2026NPL152073</span></div>
          </div>
        </Reveal>
      </section>

      <section className="purpose-section section-pad">
        <div className="section-shell">
          <Reveal>
            <SectionHeading eyebrow="Our compass" title="Purpose with a human centre" align="center" />
          </Reveal>
          <div className="purpose-grid">
            <Reveal className="purpose-card">
              <span className="purpose-index">01</span>
              <p className="eyebrow">Mission</p>
              <h3>Meet essential needs with dignity.</h3>
              <p>Support learning, nourishment and opportunity through thoughtful community action.</p>
            </Reveal>
            <Reveal className="purpose-card purpose-card-featured" delay={0.08}>
              <span className="purpose-index">02</span>
              <p className="eyebrow">Vision</p>
              <h3>A fairer future for every child.</h3>
              <p>A tomorrow where a child’s circumstances do not decide how far they can go.</p>
            </Reveal>
            <Reveal className="purpose-card" delay={0.16}>
              <span className="purpose-index">03</span>
              <p className="eyebrow">Promise</p>
              <h3>Care that is respectful and responsible.</h3>
              <p>Keep people, accountability and long-term value at the heart of every effort.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="values-section section-shell section-pad">
        <Reveal>
          <SectionHeading eyebrow="How we show up" title="Values that guide the work" />
        </Reveal>
        <div className="values-list">
          {["Dignity before display", "Community before assumption", "Consistency before spectacle", "Accountability at every step"].map((value, index) => (
            <Reveal className="value-row" key={value} delay={index * 0.05}>
              <span>0{index + 1}</span><h3>{value}</h3><i className="value-check" aria-hidden="true">✓</i>
            </Reveal>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
