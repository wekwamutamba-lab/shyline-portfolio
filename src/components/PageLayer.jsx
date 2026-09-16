import { motion } from 'framer-motion';

export function PageLayer({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 38,
        rotate: delay % 2 === 0 ? -1.2 : 1.2,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}