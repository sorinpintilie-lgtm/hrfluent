"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion } from "@/components/Accordion";
import { CTABox } from "@/components/CTABox";
import { content } from "@/lib/content";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-section-desktop">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 className="mb-6 font-serif text-[40px] leading-tight sm:text-[48px] lg:text-[56px]">
              {content.services.hero.h1}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {content.services.hero.intro}
            </p>
          </motion.div>
        </Container>
      </section>

      <div className="gradient-line" />

      {/* Services Accordion */}
      <section className="py-section-desktop">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
          >
            <Accordion items={content.services.sections} />
          </motion.div>
        </Container>
      </section>

      <div className="gradient-line" />

      {/* How Engagement Works */}
      <section className="py-section-desktop">
        <Container>
          <SectionHeader
            title={content.services.engagement.title}
            description=""
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {content.services.engagement.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="rounded-card border border-border bg-surface p-6"
              >
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                  {item.label}
                </p>
                <p className="text-lg font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Closing CTA */}
      <CTABox
        headline={content.home.closing.headline}
        cta={content.home.closing.cta}
      />
    </>
  );
}
