"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="PlateHope Foundation home">
          <Image
            src="/images/platehope-logo.jpg"
            alt=""
            width={64}
            height={64}
            priority
          />
          <span className="brand-copy">
            <strong>
              Plate<span>Hope</span>
            </strong>
            <small>Foundation</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`menu-glyph ${open ? "is-open" : ""}`} aria-hidden="true">
            <i /><i /><i />
          </span>
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button button-small button-primary" href="/get-involved#support">
            Support the mission
          </Link>
        </nav>
      </div>
    </header>
  );
}
