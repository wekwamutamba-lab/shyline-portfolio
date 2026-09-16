import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const channels = [
  { label: 'Brand Identity', slug: 'brand-identity' },
  { label: 'Visual Design', slug: 'visual-design' },
  { label: 'Graphic Design', slug: 'graphic-design' },
];

export function ChannelNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container py-12">
      <div className="mb-4 text-sm text-muted">
        Try changing the channel →
      </div>

      <div className="relative inline-block">
        {/* Channel indicator background */}
        <motion.div
          className="absolute inset-0 bg-sky-900/10 rounded-md"
          initial={false}
          animate={{
            width: '100%',
            x: 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        <ul className="relative flex gap-6 text-lg">
          {channels.map((c, i) => (
            <li key={c.slug}>
              <Link
                to={`/work/${c.slug}`}
                onMouseEnter={() => setActiveIndex(i)}
                className="block px-2 py-1 hover:opacity-70 transition-opacity"
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Underline “channel” marker */}
        <motion.div
          className="absolute -bottom-1 left-0 h-px bg-sky-900"
          initial={false}
          animate={{
            width: '33.33%',
            x: `${activeIndex * 33.33}%`,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
}