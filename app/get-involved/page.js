import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Get Involved",
  description: "Volunteer, partner or support PlateHope Foundation's work for children and communities in Gurugram. Join us in making a difference through education, food service and community programs.",
  keywords: ["volunteer Gurugram", "NGO volunteer", "donate to NGO", "partner with NGO", "support education", "charity work Haryana"],
  alternates: {
    canonical: "https://platehopefoundation.org/get-involved",
  },
  openGraph: {
    title: "Get Involved | PlateHope Foundation",
    description: "Volunteer, partner or support PlateHope Foundation's work for children and communities in Gurugram. Join us in making a difference.",
    url: "https://platehopefoundation.org/get-involved",
  },
};

const ways = [
  {
    image: "/images/programme-food-service.png",
    title: "Support",
    text: "Contribute towards education, nourishment and community-led action.",
    action: "Ask how to contribute",
    href: "/contact?interest=support"
  },
  {
    image: "/images/programme-education.png",
    title: "Volunteer",
    text: "Bring your time, professional skills and willingness to learn alongside us.",
    action: "Become a volunteer",
    href: "/contact?interest=volunteer"
  },
  {
    image: "/images/programme-community.png",
    title: "Partner",
    text: "Explore responsible collaborations for initiatives with meaningful local value.",
    action: "Start a conversation",
    href: "/contact?interest=partner"
  }
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="There is more than one way to make a difference."
        intro="Offer time, resources, skills or a partnership. We welcome support that is thoughtful, responsible and aligned with the people we serve."
        accent="red"
      />

      <section id="support" className="involved-section section-shell section-pad">
        <Reveal>
          <SectionHeading
            eyebrow="Choose your path"
            title="Turn goodwill into useful action"
            text="Start with the kind of contribution that feels right for you or your organisation."
          />
        </Reveal>
        <div className="involved-grid">
          {ways.map((way, index) => {
            return (
              <Reveal className="involved-card" key={way.title} delay={index * 0.08}>
                <div className="involved-image"><Image src={way.image} alt="" fill sizes="(max-width: 760px) 92vw, 33vw" /></div>
                <div className="involved-body"><span className="involved-number">0{index + 1}</span><h2>{way.title}</h2><p>{way.text}</p><Link href={way.href}>{way.action} <span aria-hidden="true">→</span></Link></div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="giving-note section-pad">
        <div className="section-shell giving-grid">
          <Reveal className="giving-quote">
            <span className="giant-quote">“</span>
            <blockquote>Small support becomes powerful when it is offered with consistency and care.</blockquote>
          </Reveal>
          <Reveal className="giving-copy" delay={0.12}>
            <span className="giving-label">Participate with purpose</span>
            <h2>Let us find the right fit.</h2>
            <p>
              Tell us what you would like to contribute. Our team can help identify a useful,
              practical way for you to participate.
            </p>
            <Link className="button button-light" href="/contact">
              Connect with our team <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="donation-clarity section-shell section-pad">
        <Reveal>
          <p className="eyebrow">A note on giving</p>
          <h2>Support with confidence.</h2>
          <p>
            Please contact PlateHope Foundation directly for current contribution details,
            programme needs and applicable documentation. This website does not currently
            collect online payments.
          </p>
          <a className="text-link" href="mailto:foundationplatehope@gmail.com">
            foundationplatehope@gmail.com <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </section>
    </>
  );
}
