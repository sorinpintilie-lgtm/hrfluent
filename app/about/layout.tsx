import type { Metadata } from "next";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: `About — ${content.brand.name}`,
  description: content.about.hero.body,
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
