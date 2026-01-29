import { motion } from "framer-motion";

// Mockup logo placeholders
const logos = [
  { name: "TechInnovate", color: "#0F3D3E" },
  { name: "StartupX", color: "#1E40AF" },
  { name: "Global Solutions", color: "#7C3AED" },
  { name: "DataFlow", color: "#059669" },
  { name: "CloudScale", color: "#DC2626" },
  { name: "InnovateHub", color: "#F59E0B" },
  { name: "NexusTech", color: "#0891B2" },
  { name: "GrowthLabs", color: "#8B5CF6" },
];

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
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: "200px",
              height: "80px",
            }}
          >
            <div
              className="flex items-center justify-center h-full px-4 rounded-lg bg-surface border border-border"
              style={{
                backgroundColor: logo.color + "15", // 15% opacity
                borderColor: logo.color + "30", // 30% opacity
              }}
            >
              <span
                className="text-sm font-medium"
                style={{
                  color: logo.color,
                }}
              >
                {logo.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}