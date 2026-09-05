import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll-triggered reveal — the brand's motion ceiling (opacity/position
 * only, no scale/bounce/parallax) applied on scroll-into-view instead of
 * once at mount, so content below the fold actually animates for a real
 * visitor. See docs/website/13_MOTION_SYSTEM.md.
 */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
