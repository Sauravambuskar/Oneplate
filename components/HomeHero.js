"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function HomeHero() {
  const hero = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-hero='eyebrow']", { y: 18, autoAlpha: 0, duration: 0.55 })
        .from("[data-hero='title']", { y: 44, autoAlpha: 0, duration: 0.85 }, "-=0.25")
        .from("[data-hero='copy']", { y: 24, autoAlpha: 0, duration: 0.65 }, "-=0.45")
        .from("[data-hero='actions']", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.35")
        .from("[data-hero='visual']", { x: 55, autoAlpha: 0, scale: 0.96, duration: 1 }, "-=0.8")
        .from("[data-hero='note']", { y: 24, autoAlpha: 0, rotate: 2, duration: 0.6 }, "-=0.4");
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <section className="home-hero" ref={hero}>
      <div className="hero-orbit orbit-one" aria-hidden="true" />
      <div className="hero-orbit orbit-two" aria-hidden="true" />
      <div className="section-shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow" data-hero="eyebrow">Education · Food Service · Hope</p>
          <h1 data-hero="title">
            A full plate.<br />
            <span>A fair chance.</span>
          </h1>
          <p className="hero-intro" data-hero="copy">
            We stand with children and underserved communities by supporting learning,
            nourishment and pathways to a brighter future.
          </p>
          <div className="hero-actions" data-hero="actions">
            <Link className="button button-primary" href="/get-involved">
              Be part of the change <span aria-hidden="true">→</span>
            </Link>
            <Link className="text-link" href="/our-work">
              Explore our work
            </Link>
          </div>
          <div className="hero-trust" data-hero="copy">
            <span className="trust-dot" aria-hidden="true" />
            <span>Section 8 Company · MCA Registered</span>
          </div>
        </div>

        <div className="hero-visual" data-hero="visual">
          <div className="hero-image-frame">
            <Image
              src="/images/platehope-community.jpg"
              alt="PlateHope Foundation founders with smiling children"
              fill
              priority
              sizes="(max-width: 860px) 92vw, 48vw"
            />
          </div>
          <div className="hero-note" data-hero="note">
            <span className="note-number">01</span>
            <p>Small acts can become lasting change.</p>
          </div>
          <div className="hero-mark" aria-hidden="true">hope</div>
        </div>
      </div>
      <div className="hero-ribbon" aria-label="Our focus areas">
        <span>Education</span><i />
        <span>Food Service</span><i />
        <span>Community</span><i />
        <span>Opportunity</span>
      </div>
    </section>
  );
}
