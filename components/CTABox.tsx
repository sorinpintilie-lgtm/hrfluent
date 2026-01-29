import { LinkButton } from "./LinkButton";
import { Container } from "./Container";

interface CTABoxProps {
  headline: string;
  cta: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export function CTABox({ headline, cta, ctaHref = "/contact", onCtaClick }: CTABoxProps) {
  return (
    <section className="bg-background-alt py-section-desktop">
      <Container>
        <div className="mx-auto max-w-2xl rounded-card border border-border bg-white/70 p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
          <div className="text-center relative z-10">
            <h2 className="mb-6 font-serif text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-text">
              {headline}
            </h2>
            <LinkButton
              variant="primary"
              size="lg"
              href={ctaHref}
              onClick={onCtaClick}
              className="mt-8"
            >
              {cta}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
