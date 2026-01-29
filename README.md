# HRFluent — Human Resources, spoken fluently.

A premium, modern consulting website for HRFluent, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, executive aesthetic with "quiet authority" — high-trust, modern, and professional
- **Responsive Layout**: Fully responsive design that works beautifully on all devices
- **Smooth Animations**: Subtle Framer Motion animations for enhanced user experience
- **Accessible**: Semantic HTML, proper heading hierarchy, and keyboard navigation support
- **Fast Performance**: Optimized for Lighthouse scores with Next.js App Router
- **Type-Safe**: Built with TypeScript for better developer experience and fewer bugs

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter (body) + DM Serif Display (headings) via next/font

## Pages

- **Home** (`/`): Hero section, value propositions, who we work with, and CTA
- **Services** (`/services`): Detailed service offerings with accordion interface
- **About** (`/about`): Company story, leadership profile, and philosophy
- **Contact** (`/contact`): Contact form with validation and success state

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
hrfluent/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page with form
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── layout.tsx                # Root layout with fonts
│   └── page.tsx                  # Homepage
├── components/
│   ├── Accordion.tsx              # Expandable accordion component
│   ├── Button.tsx                 # Reusable button with variants
│   ├── Card.tsx                  # Card component with variants
│   ├── CTABox.tsx                # Call-to-action section
│   ├── Container.tsx             # Max-width container
│   ├── Footer.tsx                # Site footer
│   ├── Header.tsx                # Sticky header with navigation
│   ├── IconBadge.tsx             # Icon + label component
│   ├── QuoteStrip.tsx            # Quote banner component
│   └── SectionHeader.tsx         # Section title component
├── lib/
│   ├── content.ts                # All site content as typed objects
│   └── utils.ts                  # Utility functions (cn helper)
├── styles/
│   └── globals.css               # Global styles and Tailwind directives
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Design System

### Colors

- **Background**: `#FBFBFA` — Off-white with subtle warm tint
- **Surface**: `#FFFFFF` — Pure white
- **Text**: `#0B1220` — Near-black navy
- **Muted**: `#475569` — Gray for secondary text
- **Border**: `#E5E7EB` — Light gray for lines
- **Primary**: `#0F766E` — Deep teal
- **Primary Hover**: `#115E59` — Darker teal
- **Secondary**: `#C7A76C` — Soft gold (subtle highlights only)

### Typography

- **Body Font**: Inter (400/500 weights)
- **Heading Font**: DM Serif Display
- **H1**: 44–56px desktop, 34–40px mobile
- **H2**: 28–34px
- **Line-height**: Generous for readability
- **Letter-spacing**: Slightly tightened for headings

### Spacing

- **Max Width**: 1120–1200px
- **Section Padding**: 72–96px desktop, 48–64px mobile
- **Grid**: 12-column approach internally

### Components

- **Buttons**: Rounded (999px), with hover effects and focus states
- **Cards**: Rounded (16px), with subtle shadows
- **Animations**: Fade + translateY 8–12px, duration 0.35–0.55s

## Customization

### Content

All site content is stored in `lib/content.ts` as typed objects. To update copy, simply edit the values in this file.

### Styling

The design system is configured in `tailwind.config.ts`. Modify colors, fonts, or spacing there.

### Components

All components are in the `components/` directory and can be customized as needed.

## Contact Form

The contact form includes:
- Client-side validation (required fields, email format)
- Success UI state
- API endpoint at `/api/contact` (returns 200 OK)

To integrate with a real backend:
1. Update `app/api/contact/route.ts` to send emails or store submissions
2. Update the contact form in `app/contact/page.tsx` to call the real API

## Accessibility

- Semantic HTML elements
- Proper heading hierarchy
- Focus states for interactive elements
- Keyboard navigation support
- ARIA labels where needed
- Respects `prefers-reduced-motion`

## Performance

- Next.js App Router for optimal performance
- Font optimization with next/font
- Image optimization with next/image
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind for efficient styling

## License

© 2025 HRFluent. All rights reserved.
