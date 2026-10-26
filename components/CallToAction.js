import Link from "next/link";
import Reveal from "./Reveal";

export default function CallToAction({
  eyebrow = "A better tomorrow starts today",
  title = "Bring your time, skills or support to the table.",
  text = "Every thoughtful contribution can help a child learn, grow and move forward with confidence."
}) {
  return (
    <section className="cta-wrap section-shell">
      <Reveal className="cta-panel">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="button button-light" href="/get-involved">
          Get involved <span aria-hidden="true">↗</span>
        </Link>
      </Reveal>
    </section>
  );
}
