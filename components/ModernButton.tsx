import React from 'react';
import { motion } from 'framer-motion';

type Variant = 'ocean' | 'purple' | 'ghost' | 'teal' | 'dark';

interface ModernButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: Variant;
  className?: string;
}

export const ModernButton: React.FC<ModernButtonProps> = ({
  text,
  icon,
  onClick,
  href,
  variant = 'ocean',
  className = ''
}) => {
  const isMediaButton = ['Watch Now', 'Stream Now', 'Play on Spotify'].includes(text);
  const baseClasses = "btn flex items-center justify-center gap-3 md:gap-4 rounded-full font-bold uppercase tracking-[0.18em] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 font-heading text-sm md:text-xl w-full max-w-[150px] md:max-w-[280px]";

  const styles: Record<Variant, string> = {
    ocean: "bg-[#2872A1] text-white hover:bg-[#1f5b82]",
    purple: "bg-[#5F4A8B] text-white hover:bg-[#49396b]",
    teal: "bg-teal-600 text-white hover:bg-teal-500",
    ghost: "bg-transparent text-white border border-white/20 hover:bg-white/10",
    dark: "bg-[#0B0D0F] text-white hover:bg-black"
  };

  const glows: Record<Variant, string> = {
    ocean: "rgba(40,114,161,0.6)",
    purple: "rgba(95,74,139,0.6)",
    teal: "rgba(13,148,136,0.6)",
    ghost: "rgba(255,255,255,0.2)",
    dark: "rgba(11,13,15,0.6)"
  };

  const selectedStyle = isMediaButton ? "media-glass-btn text-white" : styles[variant];
  const glowColor = isMediaButton ? "rgba(128,0,255,0.6)" : glows[variant];

  // The continuous 4s breathing/floating animation loop
  const floatAnimation = {
    y: [0, -6, 0],
    boxShadow: [
      `0px 0px 10px ${glowColor}`,
      `0px 10px 25px ${glowColor}`,
      `0px 0px 10px ${glowColor}`
    ],
    transition: {
      duration: 4,
      ease: "easeInOut" as const,
      repeat: Infinity
    }
  };

  const InnerContent = () => (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        animate={floatAnimation}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} ${selectedStyle} ${className} inline-flex`}
      >
        <InnerContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      animate={floatAnimation}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${selectedStyle} ${className}`}
    >
      <InnerContent />
    </motion.button>
  );
};
