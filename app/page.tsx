"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { LinkButton } from "@/components/LinkButton";
import { Card } from "@/components/Card";
import { IconBadge } from "@/components/IconBadge";
import { FeatureCard } from "@/components/FeatureCard";
import { TrustBar } from "@/components/TrustBar";
import { ProcessStrip } from "@/components/ProcessStrip";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Accordion } from "@/components/Accordion";
import { CTABox } from "@/components/CTABox";
import { LogoTicker } from "@/components/LogoTicker";
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
      <section className="relative">
        {/* Image Container */}
        <div className="relative">
          <img
            src="/hero.jpg"
            alt="HRFluent - Professional HR Consulting"
            className="w-full h-auto"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          
          {/* Text Content Overlaid on Image */}
          <div className="absolute inset-0 container mx-auto px-4 md:px-8 lg:px-12">
            <div className="flex items-center h-full">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="max-w-2xl"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-px w-6 bg-primary" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
                <h1 className="mb-3 font-serif text-[24px] md:text-[36px] lg:text-[42px] leading-[1.1] text-white">
                  {content.home.hero.h1.split('<br>').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < content.home.hero.h1.split('<br>').length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                <div className="h-px w-16 bg-primary mb-3" />
                <p className="mb-4 text-[14px] md:text-[15px] leading-[1.5] text-gray-200">
                  {content.home.hero.body}
                </p>
                {/* Trust row with pills */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs text-white">
                    <svg className="h-3 w-3 text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1L12 6L17 6L14 9L16 14L10 11L4 14L5 9L1 6L6 6L8 1Z" fill="currentColor"/>
                    </svg>
                    Fractional HR
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs text-white">
                    <svg className="h-3 w-3 text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1L12 6L17 6L14 9L16 14L10 11L4 14L5 9L1 6L6 6L8 1Z" fill="currentColor"/>
                    </svg>
                    Remote-first
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs text-white">
                    <svg className="h-3 w-3 text-primary" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 1L12 6L17 6L14 9L16 14L10 11L4 14L5 9L1 6L6 6L8 1Z" fill="currentColor"/>
                    </svg>
                    Data-driven
                  </span>
                </div>
                {/* Button */}
                <div className="flex flex-wrap gap-3">
                  <LinkButton size="lg" href="/contact">
                    {content.home.hero.cta}
                  </LinkButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="gradient-line" />

      {/* What We Do Section */}
      <section className="py-section-desktop section-alt">
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
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <FeatureCard
                  image={prop.image}
                  title={prop.title}
                  description={prop.body}
                  className="h-full"
                />
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
            <div className="rounded-card border border-border bg-white/70 p-8">
              <div className="mb-8">
                {/* Partners list with bullet points */}
                <ul className="space-y-3">
                  {content.home.who.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted hover:text-primary transition-all duration-200"
                    >
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Logo Ticker */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="mb-6 text-sm font-medium uppercase tracking-wider text-primary text-center">
                  Trusted by innovative companies
                </h4>
                <LogoTicker />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Process Strip */}
      <ProcessStrip
        steps={[
          {
            number: 1,
            title: "Discovery",
            description: "We start with a deep dive into your organization's people challenges and goals. Through comprehensive assessments, stakeholder interviews, and data analysis, we identify gaps, opportunities, and key priorities that will drive your HR transformation forward.",
          },
          {
            number: 2,
            title: "Strategy",
            description: "Developing a tailored HR strategy aligned with your business objectives. We create actionable roadmaps covering talent acquisition, performance management, employee engagement, compliance, and organizational development - all customized to your unique culture and growth stage.",
          },
          {
            number: 3,
            title: "Implementation",
            description: "Executing the plan with ongoing support and continuous improvement. We work alongside your team to implement solutions, train stakeholders, establish metrics, and refine processes based on real-world feedback to ensure sustainable long-term success.",
          },
        ]}
      />

      {/* Testimonials */}
      <section className="py-section-desktop">
        <Container>
          <SectionHeader
            title="What Our Clients Say"
            description="Hear from leaders who transformed their people operations with our guidance."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Working with HRFluent transformed our approach to people operations. Their strategic guidance helped us build a culture that attracts and retains top talent."
              author="Sarah Johnson"
              role="CEO"
              company="TechInnovate"
            />
            <TestimonialCard
              quote="The fractional HR model was perfect for our scale. We got the expertise we needed without the overhead of a full-time HR department."
              author="Michael Chen"
              role="Founder"
              company="StartupX"
            />
            <TestimonialCard
              quote="Their data-driven approach to HR transformed how we make people decisions. We're now more agile and strategic."
              author="Emily Rodriguez"
              role="COO"
              company="Global Solutions"
            />
          </div>
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section className="py-section-desktop section-alt">
        <Container>
          <SectionHeader
            title="Frequently Asked Questions"
            description="Everything you need to know about fractional HR and our services."
          />
          <div className="mx-auto max-w-3xl">
            <Accordion
              items={[
                {
                  title: "What is fractional HR?",
                  items: [
                    "Fractional HR is a flexible service model where you get access to HR expertise on a part-time or project basis.",
                    "Perfect for small and medium-sized businesses that need HR support without hiring a full-time director.",
                  ],
                },
                {
                  title: "How is fractional HR different from traditional HR?",
                  items: [
                    "Traditional HR is typically a full-time role focused on day-to-day operations.",
                    "Fractional HR takes a strategic approach, focusing on long-term people strategy and business alignment.",
                  ],
                },
                {
                  title: "What industries do you work with?",
                  items: [
                    "We work with a wide range of industries including tech, professional services, e-commerce, and more.",
                    "Our approach is tailored to your specific industry challenges and business model.",
                  ],
                },
                {
                  title: "How do you measure success?",
                  items: [
                    "We track key metrics like employee engagement, retention rates, time-to-hire, and HR compliance.",
                    "Success is measured by tangible business outcomes tied to your people strategy.",
                  ],
                },
              ]}
            />
          </div>
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
