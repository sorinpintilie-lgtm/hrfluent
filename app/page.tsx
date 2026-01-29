"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { LinkButton } from "@/components/LinkButton";
import { Card } from "@/components/Card";
import { IconBadge } from "@/components/IconBadge";
import { CTABox } from "@/components/CTABox";
import { content } from "@/lib/content";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-section-desktop sm:py-section-desktop">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col justify-center"
            >
              <h1 className="mb-6 font-serif text-[40px] leading-tight sm:text-[48px] lg:text-[56px]">
                {content.home.hero.h1}
              </h1>
              <p className="mb-6 text-lg leading-relaxed text-muted lg:text-xl">
                {content.home.hero.body}
              </p>
              <p className="mb-8 text-base leading-relaxed text-muted">
                {content.home.hero.sub}
              </p>
              <LinkButton size="lg" href="/contact">
                {content.home.hero.cta}
              </LinkButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative h-full w-full rounded-card bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 p-8">
                <div className="absolute inset-0 rounded-card border border-border" />
                <svg
                  className="h-full w-full text-primary/20"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="200" cy="150" r="80" stroke="currentColor" strokeWidth="1" />
                  <circle cx="200" cy="150" r="120" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="200" cy="150" r="160" stroke="currentColor" strokeWidth="0.5" />
                  <path
                    d="M200 70 L200 230"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M120 150 L280 150"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                  <circle cx="200" cy="150" r="8" fill="currentColor" />
                  <circle cx="280" cy="90" r="4" fill="currentColor" opacity="0.5" />
                  <circle cx="120" cy="210" r="4" fill="currentColor" opacity="0.5" />
                  <circle cx="280" cy="210" r="4" fill="currentColor" opacity="0.5" />
                  <circle cx="120" cy="90" r="4" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <div className="gradient-line" />

      {/* What We Do Section */}
      <section className="py-section-desktop">
        <Container>
          <SectionHeader
            title={content.home.whatWeDo.h2}
            description={content.home.whatWeDo.body}
          />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {content.home.valueProps.map((prop, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card variant="elevated">
                  <h3 className="mb-3 font-serif text-xl">{prop.title}</h3>
                  <p className="text-muted">{prop.body}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <div className="gradient-line" />

      {/* Who We Work With Section */}
      <section className="py-section-desktop">
        <Container>
          <SectionHeader title={content.home.who.h2} />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
          >
            <Card variant="bordered">
              <div className="space-y-4">
                {content.home.who.items.map((item, index) => (
                  <IconBadge
                    key={index}
                    icon={
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 1L10 6L15 6L11 9L12 14L8 11L4 14L5 9L1 6L6 6L8 1Z"
                          fill="currentColor"
                        />
                      </svg>
                    }
                    label={item}
                  />
                ))}
              </div>
            </Card>
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
