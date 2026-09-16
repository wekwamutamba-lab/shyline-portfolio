import { motion } from 'framer-motion';

export function ChannelFlash({ show }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 0.25 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 bg-sky-900 pointer-events-none z-50"
    />
  );
}