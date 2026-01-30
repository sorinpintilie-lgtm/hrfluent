import { motion } from "framer-motion";
import { useState } from "react";

// Actual company logos from the web
const logos = [
  { name: "Google", url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png", alt: "Google" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
  { name: "Slack", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", alt: "Slack" },
  { name: "Zoom", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg", alt: "Zoom" },
];

function LogoItem({ logo }: { logo: typeof logos[0] }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center"
      style={{
        width: "200px",
        height: "80px",
        display: isVisible ? "flex" : "none",
      }}
    >
      <div className="flex items-center justify-center h-full px-4 rounded-lg bg-surface border border-border">
        <img
          src={logo.url}
          alt={logo.alt}
          className="max-h-12 max-w-full object-contain"
          onError={() => setIsVisible(false)}
        />
      </div>
    </div>
  );
}

export function LogoTicker() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="absolute inset-0 pointer-events-none" />
      
      <motion.div
        className="flex items-center gap-12"
        animate={{
          x: [0, -1 * (logos.length * 200)], // Move left by total width of logos
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {/* Duplicate logos to create seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <LogoItem key={index} logo={logo} />
        ))}
      </motion.div>
    </div>
  );
}