import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BookFrame } from '../components/BookFrame';
import { WritingText } from '../components/WritingText';
import { WorkMenuItem } from '../components/WorkMenuItem';
import { WorkPreview } from '../components/WorkPreview';

const workAreas = [
  {
    number: '01',
    title: 'Brand Identity',
    slug: 'brand-identity',
    description: 'Building clear, memorable brands from one core idea.',
    image: '/images/brand-preview.jpg',
    previewLabel: 'Wander & Km / Identity',
    rotate: -1.2,
    color: 'blue',
  },
  {
    number: '02',
    title: 'Visual Design',
    slug: 'visual-design',
    description: 'Visual systems, social content, and digital experiences.',
    image: '/images/visual-preview.jpg',
    previewLabel: 'Plumbing Hub / UI',
    rotate: 1.3,
    color: 'red',
  },
  {
    number: '03',
    title: 'Graphic Design',
    slug: 'graphic-design',
    description: 'Editorial layouts and graphic communication with character.',
    image: '/images/graphic-preview.jpg',
    previewLabel: 'Uncommon / Editorial',
    rotate: -0.8,
    color: 'paper',
  },
];

export function Work() {
  const navigate = useNavigate();
  const [activePreview, setActivePreview] = useState(null);
  const [mousePosition, setMousePosition] = useState({
    x: -300,
    y: -300,
  });

  const activeItem = workAreas.find(
    (item) => item.slug === activePreview
  );

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX + 20,
      y: event.clientY + 20,
    });
  };

  const goToCategory = (slug) => {
    navigate(`/work/${slug}`);
  };

  return (
    <BookFrame pageName="Selected Work">
      <WorkPreview
        item={activeItem || workAreas[0]}
        isActive={Boolean(activeItem)}
        mousePosition={mousePosition}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 17,
          delay: 0.08,
        }}
      >
        <WritingText
          as="p"
          text="Page 03 — Work"
          className="font-hand mb-4 text-sky-900"
          speed={36}
          delay={100}
        />
      </motion.div>

      <WritingText
        as="h1"
        text="Selected Work"
        className="font-display-hand text-scrap-red text-5xl md:text-7xl"
        speed={65}
        delay={420}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 1.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="work-page-intro font-hand"
      >
        Hover over a discipline to peek inside the scrapbook.
      </motion.p>

      <div className="work-menu-list">
        {workAreas.map((item, index) => (
          <WorkMenuItem
            key={item.slug}
            item={item}
            index={index}
            onEnter={setActivePreview}
            onLeave={() => setActivePreview(null)}
            onMove={handleMouseMove}
            onClick={() => goToCategory(item.slug)}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 2.05,
        }}
        className="work-page-note font-hand"
      >
        Click a section to view the projects ↗
      </motion.p>
    </BookFrame>
  );
}