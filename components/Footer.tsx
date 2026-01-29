"use client";

import Link from "next/link";
import { Container } from "./Container";
import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-medium text-text">
              {content.brand.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              {content.footer.tagline}
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 md:justify-end">
            <Link
              href="/"
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {content.nav.home}
            </Link>
            <Link
              href="/services"
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {content.nav.services}
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {content.nav.about}
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted transition-colors hover:text-primary"
            >
              {content.nav.contact}
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xs text-muted">
            {content.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
