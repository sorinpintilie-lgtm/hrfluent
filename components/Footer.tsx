import Link from "next/link";
import { Container } from "./Container";
import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-section-desktop">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 inline-block font-serif text-xl font-medium text-text">
              {content.brand.name}
            </Link>
            <p className="mb-4 text-[16px] leading-[1.7] text-muted">
              {content.brand.tagline}
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-medium text-text">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-primary transition-colors">
                  Strategic HR Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-primary transition-colors">
                  Compliance & Policy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-primary transition-colors">
                  Culture & DEI
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-primary transition-colors">
                  Employee Experience
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-primary transition-colors">
                  Leadership Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-medium text-text">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} {content.brand.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
