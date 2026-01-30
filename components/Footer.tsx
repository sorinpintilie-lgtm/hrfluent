import Link from "next/link";
import { Container } from "./Container";
import { content } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#fbfbf7] py-16">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <img 
                src="/logohr.png" 
                alt={content.brand.name}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mb-6 text-[15px] leading-relaxed text-muted">
              {content.brand.tagline}
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Strategic HR Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Compliance & Policy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Culture & DEI
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Employee Experience
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Leadership Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[15px] text-muted hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-[15px] text-muted hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@hrfluent.com" className="text-[15px] text-muted hover:text-primary transition-colors">
                  info@hrfluent.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-[14px] text-muted">
            &copy; {new Date().getFullYear()} {content.brand.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
