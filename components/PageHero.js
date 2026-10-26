import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, intro, accent = "green" }) {
  return (
    <section className={`page-hero page-hero-${accent}`}>
      <div className="page-hero-shape" aria-hidden="true" />
      <div className="section-shell">
        <Reveal className="page-hero-content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
