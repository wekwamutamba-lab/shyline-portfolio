import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { BookFrame } from '../components/BookFrame';
import { ProjectImageViewer } from '../components/ProjectImageViewer';
import { WritingText } from '../components/WritingText';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { project: projectSlug } = useParams();
  const [viewer, setViewer] = useState(null);
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return (
      <BookFrame pageName="Project not found">
        <div className="project-detail-missing">
          <WritingText
            as="h1"
            text="That project is not in the archive."
            className="font-display-hand text-4xl text-ink"
            speed={30}
          />
          <Link className="back-btn mt-6" to="/work">
            ← Return to Selected Work
          </Link>
        </div>
      </BookFrame>
    );
  }

  const categorySlug = project.category.toLowerCase().replace(/\s+/g, '-');
  const images = project.gallery?.length ? project.gallery : [project.image];

  const detailLeft = (
    <div>
      <Link to={`/work/${categorySlug}`} className="back-btn">
        ← Back to {project.category}
      </Link>

      <WritingText
        as="p"
        text={`Case study / ${project.category}`}
        className="font-hand mb-2 text-sky-900"
        speed={30}
        delay={100}
      />

      <WritingText
        as="h1"
        text={project.title}
        className="font-display-hand text-scrap-red text-4xl md:text-6xl leading-tight"
        speed={38}
        delay={350}
      />

      <WritingText
        as="p"
        text={project.summary}
        className="font-hand mt-5 text-base md:text-lg text-ink leading-relaxed"
        speed={13}
        delay={1100}
        cursor={false}
      />

      {project.designNote && (
        <div className="project-detail-design-note">
          <span>GRAPHIC DESIGN NOTE</span>
          <p>{project.designNote}</p>
          {project.designFocus?.length > 0 && (
            <ul className="project-detail-focus-list" aria-label="Graphic design focus">
              {project.designFocus.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      <motion.svg
        viewBox="0 0 200 20"
        className="detail-flourish"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <path
          d="M 4 12 C 40 4, 85 18, 125 9 S 180 5, 196 11"
          stroke="#c71925"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      <div className="project-detail-facts">
        <div>
          <span>Archive</span>
          <strong>{project.category}</strong>
        </div>
        <div>
          <span>Views</span>
          <strong>{images.length} image{images.length === 1 ? '' : 's'}</strong>
        </div>
        <div>
          <span>Format</span>
          <strong>Visual case study</strong>
        </div>
      </div>

      <div className="project-detail-note">
        <span>NOTEBOOK NOTE</span>
        <p>
          The useful details live in the pictures. Open each frame to inspect the
          work on its own, then return to the archive when you are ready.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <BookFrame pageName={project.title} leftContent={detailLeft}>
        <div className="project-detail-page">
          <WritingText
            as="p"
            text="Click any image to inspect it independently ↗"
            className="font-hand text-sky-900 text-sm md:text-base mb-5"
            speed={18}
            delay={1400}
            cursor={false}
          />

          <div className="project-detail-gallery">
            {images.map((image, index) => (
              <motion.button
                type="button"
                key={image}
                className="project-detail-image"
                onClick={() => setViewer({ images, index })}
                initial={{
                  opacity: 0,
                  y: 18,
                  rotate: [-0.4, 0.32, -0.22][index % 3],
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: [-0.14, 0.12, -0.08][index % 3],
                }}
                transition={{
                  duration: 0.55,
                  delay: 1.55 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ rotate: [-0.08, 0.07, -0.04][index % 3], y: -3 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Open ${project.title} image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${project.title} — project view ${index + 1}`}
                  loading="lazy"
                />
                <span>Open image ↗</span>
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
