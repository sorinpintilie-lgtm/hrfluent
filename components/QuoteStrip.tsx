import { Container } from "./Container";

interface QuoteStripProps {
  quote: string;
}

export function QuoteStrip({ quote }: QuoteStripProps) {
  return (
    <section className="bg-surface py-12">
      <Container>
        <blockquote className="text-center">
          <p className="font-serif text-2xl italic text-text sm:text-3xl">
            "{quote}"
          </p>
        </blockquote>
      </Container>
    </section>
  );
}
