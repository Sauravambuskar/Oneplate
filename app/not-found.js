import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found section-shell">
      <p className="eyebrow">404</p>
      <h1>This page could not be found.</h1>
      <p>Let us take you back to the work that matters.</p>
      <Link className="button button-primary" href="/">
        Return home
      </Link>
    </section>
  );
}
