"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CTABox } from "@/components/CTABox";
import { content } from "@/lib/content";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-section-desktop hero-gradient">
        <Container>
          <div className="glass-card rounded-card border border-border p-8 md:p-12 shadow-soft">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-6 flex items-center gap-2">
                <div className="h-px w-8 bg-primary" />
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <h1 className="mb-6 font-serif text-[34px] md:text-[52px] lg:text-[60px] leading-[1.05]">
                {content.about.hero.h1}
              </h1>
              <div className="h-px w-24 bg-primary mb-6" />
              <p className="max-w-2xl text-[16px] md:text-[18px] leading-[1.7] text-muted">
                {content.about.hero.body}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <div className="gradient-line" />

      {/* About Oana Section */}
      <section className="py-section-desktop section-alt">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45 }}
            >
              <SectionHeader
                title={content.about.oana.h2}
                description={content.about.oana.intro}
              />
              <p className="mb-4 text-[16px] md:text-[18px] leading-[1.7] text-muted">
                {content.about.oana.blend}
              </p>
              <ul className="mb-8 space-y-2">
                {content.about.oana.blendItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-4 text-[16px] md:text-[18px] leading-[1.7] text-muted">
                {content.about.oana.initiatives}
              </p>
              <ul className="space-y-2">
                {content.about.oana.initiativeItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <div className="relative h-[650px] rounded-card overflow-hidden border border-border bg-white/70 shadow-soft">
                <img
                  src="/liftapp-4.jpeg"
                  alt="Oana Breen - Professional"
                  className="h-full w-full object-cover"
                />
              </div>
              <Card variant="elevated" className="flex-1">
                <h3 className="mb-6 font-serif text-[20px] md:text-[24px]">Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1L12 6L17 6L13 9L14 14L10 11L6 14L7 9L3 6L8 6L10 1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">People Strategy</p>
                      <p className="text-sm text-muted">
                        KPI development and alignment
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1L12 6L17 6L13 9L14 14L10 11L6 14L7 9L3 6L8 6L10 1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Compliance</p>
                      <p className="text-sm text-muted">
                        Policy governance and audits
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1L12 6L17 6L13 9L14 14L10 11L6 14L7 9L3 6L8 6L10 1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Culture & DEI</p>
                      <p className="text-sm text-muted">
                        Engagement and inclusion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1L12 6L17 6L13 9L14 14L10 11L6 14L7 9L3 6L8 6L10 1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Employee Experience</p>
                      <p className="text-sm text-muted">
                        Onboarding and lifecycle
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1L12 6L17 6L13 9L14 14L10 11L6 14L7 9L3 6L8 6L10 1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Compensation & Benefits</p>
                      <p className="text-sm text-muted">
                        Benchmarking and wellness
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1L12 6L17 6L13 9L14 14L10 11L6 14L7 9L3 6L8 6L10 1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Leadership Development</p>
                      <p className="text-sm text-muted">
                        Coaching and team growth
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 1L12 6L17 6L13 9L14 14L10 11L6 14L7 9L3 6L8 6L10 1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">People Operations</p>
                      <p className="text-sm text-muted">
                        HRIS and analytics
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      <div className="gradient-line" />

      {/* Philosophy Section */}
      <section className="py-section-desktop">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
          >
            <Card variant="bordered" className="max-w-3xl">
              <h2 className="mb-4 font-serif text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">
                {content.about.philosophy.h2}
              </h2>
              <p className="mb-6 text-[16px] md:text-[18px] leading-[1.7] text-muted">
                {content.about.philosophy.intro}
              </p>
              <p className="mb-4 text-[16px] md:text-[18px] leading-[1.7] text-muted">
                {content.about.philosophy.belief}
              </p>
              <ul className="space-y-3">
                {content.about.philosophy.beliefItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </Container>
      </section>

      <div className="gradient-line" />

      {/* Contact Information Section */}
      <section className="py-section-desktop">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 font-serif text-[20px] md:text-[24px]">Contact Information</h3>
                <div className="rounded-card border border-border bg-white/70 p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <svg
                        className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.75-9.25a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5zm-3 .75a.75.75 0 011.5 0v2a.75.75 0 01-1.5 0v-2z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-[16px] md:text-[18px] leading-[1.7] text-muted">
                        5708 Hollister Ave Suite A PMB 1020<br />
                        Goleta, CA 93117
                      </p>
                        <div className="mt-6">
                          <p className="text-[16px] md:text-[18px] leading-[1.7] text-muted">
                            Schedule a free consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative h-[400px] rounded-card overflow-hidden border border-border bg-white/70">
                    <img
                      src="/liftapp-4.jpeg"
                      alt="Oana Breen - Professional"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="relative h-[400px] rounded-card overflow-hidden border border-border bg-white/70">
                    <img
                      src="/liftapp-7.png"
                      alt="Oana Breen - Consultation"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
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
