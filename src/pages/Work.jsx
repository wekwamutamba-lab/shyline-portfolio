import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookFrame } from '../components/BookFrame';
import { WritingText } from '../components/WritingText';

const categories = [
  {
    number: '01',
    title: 'Brand Identity',
    slug: 'brand-identity',
    description: 'Living brand systems built from one core problem-solving idea.',
    image: '/images/projects/wander-and-kin/brand-book-spreads.jpg',
    tags: ['Brand Strategy', 'Visual Identity', 'Guidelines', 'Collateral'],
    caseCount: '4 Case Studies',
  },
  {
    number: '02',
    title: 'Visual Design',
    slug: 'visual-design',
    description: 'Human-centered digital interfaces, design systems, and web apps.',
    image: '/images/projects/plumbing-hub/mobile-app-hero.jpg',
    tags: ['UX/UI Design', 'Design Systems', 'Tokens', 'Web Applications'],
    caseCount: '3 Case Studies',
  },
  {
    number: '03',
    title: 'Graphic Design',
    slug: 'graphic-design',
    description: 'Editorial layouts, visual pacing, and tactile brand communication.',
    image: '/images/projects/wander-and-kin/travel-brochure.jpeg',
    tags: ['Typography', 'Editorial Pacing', 'Print Collateral', 'Brochures'],
    caseCount: '3 Case Studies',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discover & Understand',
    desc: 'Uncovering the real human friction, business constraints, and core objectives.',
  },
  {
    num: '02',
    title: 'Information Architecture',
    desc: 'Rapid paper wireframing, flow diagrams, and structural hierarchy before visuals.',
  },
  {
    num: '03',
    title: 'Design Systems & Tokens',
    desc: 'Accessible type scales, robust color variables, and modular UI components.',
  },
  {
    num: '04',
    title: 'Prototyping & Polish',
    desc: 'High-fidelity interactive states, usability testing, and seamless dev handoff.',
  },
];

export function Work() {
  const navigate = useNavigate();

  /* ── Left Page: Writing, Philosophy, Process & Methodology Memo ───── */
  const workLeft = (
    <div>
      <WritingText
        as="p"
        text="Page 03 — Work & Process"
        className="font-hand mb-3 text-sky-900"
        speed={35}
        delay={100}
      />

      <WritingText
        as="h1"
        text="Selected Work"
        className="font-display-hand text-scrap-red text-5xl md:text-7xl leading-tight"
        speed={48}
        delay={450}
      />

      <WritingText
        as="p"
        text="Every project in this archive is grounded in product thinking: treating design as structured problem-solving rather than superficial decoration."
        className="font-hand mt-5 text-base md:text-lg text-ink leading-relaxed"
        speed={14}
        delay={1300}
        cursor={false}
      />

      {/* Decorative Scribble Underline */}
      <motion.svg
        viewBox="0 0 200 20"
        style={{ width: '58%', overflow: 'visible', display: 'block', margin: '14px 0 12px' }}
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

      {/* Design Framework / Process Flow */}
      <WritingText
        as="h2"
        text="Product Design Framework"
        className="font-display-hand text-xl md:text-2xl text-ink mt-5 mb-2"
        speed={30}
        delay={2500}
        cursor={false}
      />

      <div className="process-flow">
        {processSteps.map((step, idx) => (
          <motion.div
            key={step.num}
            className="process-step"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 2.8 + idx * 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="process-step-num">{step.num}</span>
            <div className="process-step-info">
              <span className="process-step-title">{step.title}</span>
              <span className="process-step-desc">{step.desc}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Creative Methodology & Tooling Memo (Utilises left-page space meaningfully) */}
      <motion.div
        className="methodology-memo"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 3.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="methodology-memo-title font-display-hand">
          ✎ DESIGN TOOLKIT & METHODS
        </h3>
        <div className="methodology-memo-grid">
          <div className="methodology-memo-item">
            <strong>Discovery:</strong> User journey mapping, empathy maps, whitespace audits.
          </div>
          <div className="methodology-memo-item">
            <strong>Structure:</strong> Low-fi paper sketches, task flows, wireframe specs.
          </div>
          <div className="methodology-memo-item">
            <strong>Tooling:</strong> Figma, Pen & Grid Paper, Tokens Studio, Component Systems.
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <BookFrame pageName="Selected Work" leftContent={workLeft}>
      {/* ── Right Page: Clean Discipline Cards with Zero Text Overlap ──────── */}
      <div>
        <WritingText
          as="p"
          text="Select a discipline to view case studies and interactive systems ↗"
          className="font-hand text-sky-900 text-sm md:text-base mb-6"
          speed={20}
          delay={1600}
          cursor={false}
        />

        <div className="flex flex-col gap-5">
          {categories.map((category, index) => (
            <motion.button
              key={category.slug}
              type="button"
              onClick={() => navigate(`/work/${category.slug}`)}
              className="discipline-card group"
              initial={{
                opacity: 0,
                y: 28,
                rotate: [-1.2, 0.95, -0.65][index % 3],
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [-0.65, 0.55, -0.35][index % 3],
              }}
              transition={{
                duration: 0.65,
                delay: 2.0 + index * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.008,
                rotate: [-0.18, 0.14, -0.1][index % 3],
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Open ${category.title} case studies`}
            >
              {/* Forefront Thumbnail Image */}
              <div className="discipline-card-thumb">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                />
              </div>

              {/* Card Body with No Overlapping Elements */}
              <div className="discipline-card-body">
                <div className="discipline-card-header">
                  <span className="discipline-card-num">
                    {category.number} / ARCHIVE
                  </span>
                  <h3 className="discipline-card-title">
                    {category.title}
                  </h3>
                </div>

                <p className="discipline-card-desc">
                  {category.description}
                </p>

                {/* Tags Pill Row */}
                <div className="discipline-card-tags">
                  {category.tags.map((tag) => (
                    <span key={tag} className="discipline-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Indicator */}
              <div className="discipline-card-action">
                <span>View</span>
                <span>→</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Meaningful Creative Scrapbook Footer Note (Fills lower right page space) */}
        <motion.div
          className="work-archive-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.8 }}
        >
          <p className="m-0">
            <strong>Case Archive:</strong> All case studies include problem framing, research synthesis, paper iterations, and production handoff deliverables.
          </p>
        </motion.div>
      </div>
    </BookFrame>
  );
}