import { useState } from 'react';
import { ScrapbookPage } from '../components/ScrapbookPage';
import { Hero } from '../components/Hero';
import { Statement } from '../components/Statement';
import { ChannelFlash } from '../components/ChannelFlash';
import { ProjectGrid } from '../components/ProjectGrid';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const channels = [
  { label: 'Brand Identity', slug: 'brand-identity' },
  { label: 'Visual Design', slug: 'visual-design' },
  { label: 'Graphic Design', slug: 'graphic-design' },
];

export function Home() {
  const [showFlash, setShowFlash] = useState(false);
  const [activeChannel, setActiveChannel] = useState(0);

  const handleChannelChange = (index) => {
    if (index === activeChannel) return;
    setShowFlash(true);
    setActiveChannel(index);
    setTimeout(() => setShowFlash(false), 250);
  };

  const activeLabel = channels[activeChannel].label;
  const filteredProjects =
    activeChannel === 0
      ? projects // show all for the first “channel” if you prefer
      : projects.filter((p) => p.category === activeLabel);

  return (
    <ScrapbookPage>
      <ChannelFlash show={showFlash} />
      <main>
        <Hero />
        <Statement />

        {/* Channel nav */}
        <section className="container py-12">
          <div className="mb-4 text-sm text-muted">
            Try changing the channel →
          </div>

          <ul className="flex gap-6 text-lg">
            {channels.map((c, i) => (
              <li key={c.slug}>
                <motion.button
                  onClick={() => handleChannelChange(i)}
                  whileHover={{ opacity: 0.7 }}
                  className="block px-2 py-1 transition-opacity"
                  style={{
                    textDecoration:
                      activeChannel === i ? 'underline' : 'none',
                    textDecorationColor: '#0747A1',
                    textUnderlineOffset: '4px',
                  }}
                >
                  {c.label}
                </motion.button>
              </li>
            ))}
          </ul>
        </section>

        {/* Filtered project grid */}
        <section className="container py-12">
          <ProjectGrid projects={filteredProjects} />
        </section>
      </main>
    </ScrapbookPage>
  );
}