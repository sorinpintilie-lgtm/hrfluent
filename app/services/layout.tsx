import type { Metadata } from "next";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: `Services — ${content.brand.name}`,
  description: content.services.hero.intro,
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
