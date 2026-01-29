import { Button } from "./Button";
import { Container } from "./Container";

interface CTABoxProps {
  headline: string;
  cta: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

export function CTABox({ headline, cta, ctaHref = "/contact", onCtaClick }: CTABoxProps) {
  return (
    <section className="bg-primary py-section-desktop text-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 font-serif text-[32px] leading-tight sm:text-[40px]">
            {headline}
          </h2>
          <Button
            variant="secondary"
            size="lg"
            onClick={onCtaClick}
            className="mt-8"
          >
            {cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
