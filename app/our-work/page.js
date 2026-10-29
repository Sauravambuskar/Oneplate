import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Our Work",
  description: "Explore PlateHope Foundation's focus on education support, food service and community development opportunities for children in Gurugram, Haryana.",
  keywords: ["education programs", "food service NGO", "child education", "community development", "skill building", "meal support Gurugram"],
  alternates: {
    canonical: "https://platehopefoundation.org/our-work",
  },
  openGraph: {
    title: "Our Work | PlateHope Foundation",
    description: "Explore PlateHope Foundation's focus on education support, food service and community development opportunities for children in Gurugram, Haryana.",
    url: "https://platehopefoundation.org/our-work",
  },
};

const programmes = [
  {
    image: "/images/programme-education.png",
    alt: "Children learning together in a community classroom",
    number: "01",
    title: "Education",
    intro: "Supporting the confidence and continuity children need to keep learning.",
    points: ["Learning material support", "School participation", "Foundational skills", "Encouragement and mentorship"]
  },
  {
    image: "/images/programme-food-service.png",
    alt: "Volunteers serving nutritious meals to children",
    number: "02",
    title: "Food Service",
    intro: "Helping make nourishment a reliable part of a child’s day.",
    points: ["Meal support", "Nutrition awareness", "Respectful distribution", "Community participation"]
  },
  {
    image: "/images/programme-community.png",
    alt: "Community members learning practical skills together",
    number: "03",
    title: "Hope for Every Child",
    intro: "Creating pathways that strengthen children, families and communities together.",
    points: ["Skill building", "Child-focused support", "Women and child empowerment", "Stronger local networks"]
  }
];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Three connected needs. One hopeful direction."
        intro="A child’s ability to flourish is shaped by more than one moment. Our focus areas work together to support the whole journey."
        accent="gold"
      />

      <section className="programme-intro section-shell section-pad">
        <Reveal>
          <SectionHeading
            eyebrow="Our approach"
            title="Practical support, shaped with communities"
            text="We aim to listen first, work locally and build support that respects the people at the centre of it."
          />
        </Reveal>
        <Reveal className="approach-note">
          <span className="approach-mark" aria-hidden="true">Together</span>
          <p>Partnership turns one-time help into stronger, more dependable support.</p>
        </Reveal>
      </section>

      <section className="programme-section section-shell">
        {programmes.map((programme, index) => {
          return (
            <Reveal className="programme-row" key={programme.title}>
              <div className="programme-number">{programme.number}</div>
              <div className="programme-thumb"><Image src={programme.image} alt={programme.alt} fill sizes="120px" /></div>
              <div className="programme-main">
                <h2>{programme.title}</h2>
                <p>{programme.intro}</p>
              </div>
              <ul>
                {programme.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </Reveal>
          );
        })}
      </section>

      <section className="work-image-band section-pad">
        <div className="section-shell work-image-grid">
          <Reveal className="work-image">
            <Image src="/images/programme-community.png" alt="Community members developing practical skills together" fill sizes="(max-width: 820px) 92vw, 52vw" />
          </Reveal>
          <Reveal className="work-image-copy" delay={0.12}>
            <span className="photo-kicker" aria-hidden="true">Care · Action · Dignity</span>
            <p className="eyebrow">The PlateHope principle</p>
            <h2>Support should open the next door.</h2>
            <p>We want every act of service to lead towards greater confidence, participation and possibility.</p>
          </Reveal>
        </div>
      </section>

      <CallToAction eyebrow="Stand behind the work" title="Your support can strengthen every focus area." />
    </>
  );
}
