import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookFrame } from '../components/BookFrame';
import { ProjectImageViewer } from '../components/ProjectImageViewer';
import { WritingText } from '../components/WritingText';

const studioNotes = [
  {
    src: '/images/studio-notes/personal-study-01.jpeg',
    title: 'Personal study 01',
    note: 'A quiet fashion reference held onto for composition and mood.',
  },
  {
    src: '/images/studio-notes/personal-study-02.jpeg',
    title: 'Personal study 02',
    note: 'A bold personal experiment in scale, type, and contrast.',
  },
  {
    src: '/images/studio-notes/personal-study-03.jpeg',
    note: 'A small world of light, shadow, and imagined architecture.',
  },
  {
    src: '/images/studio-notes/personal-study-04.jpeg',
    title: 'Personal study 04',
    note: 'A visual note about presence, softness, and self-definition.',
  },
  {
    src: '/images/studio-notes/personal-study-05.jpeg',
    title: 'Personal study 05',
    note: 'A service identity sketch made to test clarity and hierarchy.',
  },
];

export function StudioNotes() {
  const [viewer, setViewer] = useState(null);

  const notesLeft = (
    <div>
      <WritingText
        as="p"
        text="Page 05 — Studio Notes"
        className="font-hand mb-3 text-sky-900"
        speed={34}
        delay={100}
      />
      <WritingText
        as="h1"
        text="Loose pages..."
        className="font-display-hand text-scrap-red text-5xl md:text-7xl leading-tight"
        speed={44}
        delay={400}
      />
      <WritingText
        as="p"
        text="A few personal studies, visual fragments, and ideas that are still finding their place. Some are polished; some are simply worth keeping."
        className="font-hand mt-6 text-base md:text-lg text-ink leading-relaxed"
        speed={15}
        delay={1100}
        cursor={false}
      />
      <div className="studio-notes-index">
        <span className="studio-notes-index-label">IN THIS ENVELOPE</span>
        <span>5 visual scraps</span>
        <span>1 evolving point of view</span>
        <span>0 perfect endings</span>
      </div>
    </div>
  );

  return (
    <>
      <BookFrame pageName="Studio Notes" leftContent={notesLeft}>
        <div className="studio-notes-page">
          <WritingText
            as="h2"
            text="Things I keep making"
            className="font-display-hand text-2xl md:text-3xl text-ink mt-6 mb-2"
            speed={30}
            delay={1700}
            cursor={false}
          />
          <WritingText
            as="p"
            text="Click any scrap to look closer ↗"
            className="font-hand text-sky-900 text-sm mb-5"
            speed={18}
            delay={2100}
            cursor={false}
          />
          <div className="studio-notes-collage">
            {studioNotes.map((item, index) => (
              <motion.button
                type="button"
                key={item.src}
                className={`studio-note studio-note-${index + 1}`}
                onClick={() => setViewer({ images: studioNotes.map((note) => note.src), index })}
                initial={{ opacity: 0, y: 18, rotate: [-1.2, 0.8, -0.5][index % 3] }}
                animate={{ opacity: 1, y: 0, rotate: [-0.45, 0.35, -0.2][index % 3] }}
                whileHover={{ y: -3, rotate: [-0.15, 0.12, -0.08][index % 3] }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.55, delay: 2.2 + index * 0.12 }}
                aria-label={`Open ${item.title || `personal study ${index + 1}`}`}
              >
                <span className="studio-note-tape" aria-hidden="true" />
                <img src={item.src} alt={item.note} loading="lazy" />
                <span className="studio-note-caption">{item.title || `Visual study ${index + 1}`}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </BookFrame>
      {viewer && (
        <ProjectImageViewer
          images={viewer.images}
          initialIndex={viewer.index}
          onClose={() => setViewer(null)}
        />
      )}
    </>
  );
}
