import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="intro-section section-shell section-pad">
        <Reveal className="intro-index">02</Reveal>
        <Reveal className="intro-statement">
          <p className="eyebrow">Why PlateHope exists</p>
          <h2>Potential should never be limited by an empty plate or an unopened book.</h2>
        </Reveal>
        <Reveal className="intro-detail" delay={0.12}>
          <p>
            PlateHope Foundation is a Gurugram-based non-profit working towards a future
            where children can access the essentials they need to thrive.
          </p>
          <Link className="text-link" href="/about">Meet PlateHope <span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>

      <section className="work-preview section-pad">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our focus"
              title="Care that meets real needs"
              text="Our work connects the foundations of a healthy childhood with the opportunities that help communities move forward."
            />
          </Reveal>
          <div className="focus-grid">
            <Reveal className="focus-card focus-card-green">
              <span className="focus-number">01</span>
              <div className="focus-image"><Image src="/images/programme-education.png" alt="Children learning together in a community classroom" fill sizes="(max-width: 760px) 92vw, 33vw" /></div>
              <div className="focus-body"><h3>Education</h3><p>Encouraging access to learning, school support and confidence-building opportunities.</p></div>
            </Reveal>
            <Reveal className="focus-card focus-card-gold" delay={0.08}>
              <span className="focus-number">02</span>
              <div className="focus-image"><Image src="/images/programme-food-service.png" alt="Volunteers serving a nutritious meal to children" fill sizes="(max-width: 760px) 92vw, 33vw" /></div>
              <div className="focus-body"><h3>Food Service</h3><p>Supporting nourishment with dignity so children can focus, participate and grow.</p></div>
            </Reveal>
            <Reveal className="focus-card focus-card-red" delay={0.16}>
              <span className="focus-number">03</span>
              <div className="focus-image"><Image src="/images/programme-community.png" alt="Women and young people in a community skill-building workshop" fill sizes="(max-width: 760px) 92vw, 33vw" /></div>
              <div className="focus-body"><h3>Hope for Every Child</h3><p>Creating pathways for stronger childhoods and more resilient communities.</p></div>
            </Reveal>
          </div>
          <Reveal className="work-link-row">
            <Link className="button button-outline" href="/our-work">
              See how we work <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="story-section section-shell section-pad">
        <Reveal className="story-visual">
          <Image
            src="/images/programme-education.png"
            alt="Children learning together in a classroom"
            fill
            sizes="(max-width: 820px) 92vw, 48vw"
          />
          <div className="story-badge">Hope in action</div>
        </Reveal>
        <Reveal className="story-copy" delay={0.12}>
          <p className="eyebrow">A simple belief</p>
          <h2>Every child deserves the space to learn, dream and succeed.</h2>
          <p>
            Change becomes meaningful when support is consistent, local and rooted in
            respect. We aim to bring people together around practical acts of care.
          </p>
          <div className="quote-line">
            <span aria-hidden="true" />
            <p>Small support. Big possibility.</p>
          </div>
        </Reveal>
      </section>

      <CallToAction />
    </>
  );
}
