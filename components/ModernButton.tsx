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
  const baseClasses = "btn flex items-center justify-center gap-3 md:gap-4 rounded-full font-bold uppercase tracking-[0.18em] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 font-heading text-sm md:text-xl w-full max-w-[150px] md:max-w-[280px]";

  const styles: Record<Variant, string> = {
    ocean: "bg-[#090909] text-white hover:opacity-90",
    purple: "bg-[#090909] text-white hover:opacity-90",
    teal: "bg-[#090909] text-white hover:opacity-90",
    ghost: "bg-[#090909] text-white hover:opacity-90",
    dark: "bg-[#090909] text-white hover:opacity-90"
  };

  const glows: Record<Variant, string> = {
    ocean: "rgba(147,51,234,0.72)",
    purple: "rgba(147,51,234,0.72)",
    teal: "rgba(147,51,234,0.72)",
    ghost: "rgba(147,51,234,0.72)",
    dark: "rgba(147,51,234,0.72)"
  };

  const selectedStyle = styles[variant];
  const glowColor = glows[variant];

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
