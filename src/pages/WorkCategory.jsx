import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { BookFrame } from '../components/BookFrame';
import { WritingText } from '../components/WritingText';
import { projects } from '../data/projects';

const categoryLabels = {
  'brand-identity': 'Brand Identity',
  'visual-design': 'Visual Design',
  'graphic-design': 'Graphic Design',
};

const categoryDescriptions = {
  'brand-identity':
    'Brand identity is more than visual marks. It is the living operating system of an organisation — aligning product purpose, voice, and every touchpoint around a single core truth.',
  'visual-design':
    'Designing digital interfaces that clarify rather than complicate. Focused on intuitive navigation, resilient design tokens, responsive typography, and user ergonomics.',
  'graphic-design':
    'Tactile editorial hierarchy and typographic craft. Exploring how visual pacing, weight, and layout structure guide attention with rhythm and personality.',
};

const categoryImages = {
  'brand-identity': '/images/projects/wander-and-kin/brand-book-spreads.jpg',
  'visual-design': '/images/projects/plumbing-hub/mobile-app-hero.jpg',
  'graphic-design': '/images/projects/wander-and-kin/travel-brochure.jpeg',
};

export function WorkCategory() {
  const { cat } = useParams();
  const navigate = useNavigate();

  const categoryName = categoryLabels[cat] || 'Selected Work';
  const categoryDesc =
    categoryDescriptions[cat] ||
    'Selected projects demonstrating problem-solving, structural clarity, and visual craftsmanship.';
  const categoryImage =
    categoryImages[cat] ||
    '/images/projects/wander-and-kin/brand-book-spreads.jpg';

  const categoryProjects = projects.filter(
    (project) => project.category === categoryName
  );

  /* ── Left Page: Back Button, Breadcrumb, Heading, Philosophy & Polaroid ─── */
  const categoryLeft = (
    <div>
      {/* Prominent Accessible Back Button */}
      <motion.button
        type="button"
        className="back-btn"
        onClick={() => navigate('/work')}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Return to Selected Work menu"
      >
        ← Back to Selected Work
      </motion.button>

      <WritingText
        as="p"
        text={`Work / ${categoryName}`}
        className="font-hand mb-2 text-sky-900"
        speed={34}
        delay={100}
      />

      <WritingText
        as="h1"
        text={categoryName}
        className="font-display-hand text-scrap-red text-5xl md:text-7xl leading-tight"
        speed={48}
        delay={380}
      />

      <WritingText
        as="p"
        text={categoryDesc}
        className="font-hand mt-5 text-base md:text-lg text-ink leading-relaxed"
        speed={14}
        delay={1200}
        cursor={false}
      />

      {/* Decorative Scribble */}
      <motion.svg
        viewBox="0 0 200 20"
        style={{ width: '60%', overflow: 'visible', display: 'block', margin: '16px 0 14px' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.75, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <path
          d="M 4 12 C 40 4, 85 18, 125 9 S 180 5, 196 11"
          stroke="#c71925"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Category Featured Polaroid Image */}
      <motion.figure
        className="scrapbook-polaroid max-w-[320px] -rotate-1 mt-6"
        initial={{ opacity: 0, y: 28, rotate: -2.2 }}
        animate={{ opacity: 1, y: 0, rotate: -0.7 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotate: 0.2, y: -3, scale: 1.01, transition: { duration: 0.3 } }}
      >
        <img
          src={categoryImage}
          alt={`${categoryName} featured showcase`}
          loading="lazy"
        />
        <figcaption className="font-hand">
          {categoryName} • archive entry
        </figcaption>
      </motion.figure>
    </div>
  );

  return (
    <BookFrame pageName={categoryName} leftContent={categoryLeft}>
      {/* ── Right Page: Projects Showcase Grid ────────────────────────────── */}
      <div>
        <WritingText
          as="p"
          text={`Showing ${categoryProjects.length} case studies in ${categoryName} ↗`}
          className="font-hand text-sky-900 text-sm mb-6"
          speed={18}
          delay={1400}
          cursor={false}
        />

        {categoryProjects.length === 0 ? (
          <WritingText
            as="p"
            text="Projects are currently being archived and will appear here shortly."
            className="font-hand text-muted text-base mt-8"
            speed={20}
            delay={1800}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categoryProjects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/work/${cat}/${project.slug}`}
                className="project-card-link"
                aria-label={`Open ${project.title} case study`}
              >
                <motion.div
                  className="project-paper-card group relative flex flex-col p-3 rounded bg-white/70 border border-black/10 shadow-sm hover:shadow-md transition-shadow"
                initial={{
                  opacity: 0,
                  y: 28,
                  rotate: [-0.55, 0.45, -0.3][index % 3],
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: [-0.22, 0.18, -0.12][index % 3],
                }}
                whileHover={{
                  y: -3,
                  rotate: [-0.12, 0.1, -0.06][index % 3],
                  transition: { duration: 0.22 },
                }}
                transition={{
                  duration: 0.65,
                  delay: 1.6 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="project-gallery">
                  {(project.gallery || [project.image]).map((image, imageIndex) => (
                    <figure
                      className={`project-gallery-item ${imageIndex === 0 ? 'project-gallery-featured' : ''}`}
                      key={image}
                    >
                      <img
                        src={image}
                        alt={`${project.title} — view ${imageIndex + 1}`}
                        loading="lazy"
                      />
                      {imageIndex === 0 && (
                        <figcaption>Primary view</figcaption>
                      )}
                    </figure>
                  ))}
                </div>

                <div className="mt-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-display-hand text-xl md:text-2xl text-ink">
                      {project.title}
                    </h2>
                    <p className="font-hand text-xs text-muted mt-1 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <span className="font-hand text-xs text-sky-900 mt-3 inline-flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                    Explore case study →
                  </span>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </BookFrame>
  );
}