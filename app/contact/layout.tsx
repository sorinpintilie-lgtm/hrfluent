import type { Metadata } from "next";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${content.brand.name}`,
  description: content.contact.hero.body,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
