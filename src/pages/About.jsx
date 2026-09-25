import { motion } from 'framer-motion';
import { BookFrame } from '../components/BookFrame';
import { WritingText } from '../components/WritingText';

/* ─── Supplied course certificates ──────────────────────────────────────── */
const certifications = [
  {
    title: 'UX Design Foundations',
    issuer: 'Founders, Uxcel',
    issued: 'Mar 8, 2026',
    studentId: 'CERTIFICATE ID: 5GTYVQDMD12M',
    preview: '/images/certificates/ux-design-foundations.png',
    file: '/images/certificates/ux-design-foundations.pdf',
  },
  {
    title: 'UX Research',
    issuer: 'Founders, Uxcel',
    issued: 'Mar 9, 2026',
    studentId: 'CERTIFICATE ID: 5F5IV43OHJ11',
    preview: '/images/certificates/ux-research.png',
    file: '/images/certificates/ux-research.pdf',
  },
  {
    title: 'Core UI Components',
    issuer: 'Founders, Uxcel',
    issued: 'Mar 13, 2026',
    studentId: 'CERTIFICATE ID: VKX9JG4ZD4FX',
    preview: '/images/certificates/core-ui-components.png',
    file: '/images/certificates/core-ui-components.pdf',
  },
  {
    title: 'Typography',
    issuer: 'Founders, Uxcel',
    issued: 'Jul 30, 2026',
    studentId: 'CERTIFICATE ID: TB5TOWBID7WC',
    preview: '/images/certificates/typography.png',
    file: '/images/certificates/typography.pdf',
  },
];

const designTools = [
  { name: 'Figma', purpose: 'Interface & layout' },
  { name: 'Adobe Photoshop', purpose: 'Photo editing' },
  { name: 'Adobe Illustrator', purpose: 'Vector artwork' },
  { name: 'Canva', purpose: 'Quick brand assets' },
  { name: 'Affinity', purpose: 'Photo & design' },
];

const designSkills = [
  'Logo design',
  'Color systems',
  'Visual hierarchy',
  'Print design',
  'Wireframing',
];

/* ─── Textbook Margin Notes & Observations (Fun Facts) ───────────────────── */
const funFacts = [
  {
    tag: 'Rule #1: Ink before Figma',
    fact: 'I brainstorm every user journey in physical gridded notebooks with messy ink. If an interaction flow doesn\'t make sense on paper, no amount of Figma autolayout will save it.',
  },
  {
    tag: 'The 4px Debate',
    fact: 'Will unapologetically spend 20 minutes debating whether button padding should be 12px or 16px. Micro-details build macro user trust.',
  },
  {
    tag: 'Studio Soundtrack',
    fact: 'Deep Afro-house or lo-fi instrumentals on repeat. Silence invites second-guessing; vocal lyrics break the wireframe flow.',
  },
  {
    tag: 'Product Pet Peeve',
    fact: 'Products that hide their "Back" button or make cancellation a maze. Respecting human agency and time is the highest form of UX.',
  },
];

export function About() {
  /* ── Left Page: The Writing, Philosophy & Textbook Margin Notes ───────── */
  const aboutLeft = (
    <div>
      <WritingText
        as="p"
        text="Page 02 — About & Philosophy"
        className="font-hand mb-3 text-sky-900"
        speed={35}
        delay={100}
      />

      <WritingText
        as="h1"
        text="About ME..."
        className="font-display-hand text-scrap-red text-5xl md:text-7xl leading-tight"
        speed={48}
        delay={450}
      />

      <WritingText
        as="p"
        text="I'm Shyline Mwanza, a graphic designer who believes meaningful digital experiences begin by solving real human friction before pushing pixels."
        className="font-hand mt-6 text-lg md:text-xl text-ink leading-relaxed"
        speed={14}
        delay={1300}
        cursor={false}
      />

      <WritingText
        as="p"
        text="I work across user research, interface systems, and brand discovery. Design is intentional problem-solving; aesthetics are the natural byproduct of clarity."
        className="font-hand mt-4 text-base md:text-lg text-muted leading-relaxed"
        speed={14}
        delay={2600}
        cursor={false}
      />


      <motion.svg
        viewBox="0 0 200 20"
        style={{ width: '60%', overflow: 'visible', display: 'block', margin: '18px 0 10px' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.75, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <path
          d="M 4 12 C 40 4, 85 18, 125 9 S 180 5, 196 11"
          stroke="#c71925"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.div
        className="textbook-box"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {funFacts.map((item, idx) => (
          <motion.div
            key={item.tag}
            className="textbook-note-item"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3.8 + idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="textbook-highlight font-display-hand text-ink text-sm">
              {item.tag}:
            </span>{' '}
            <span>{item.fact}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        className="design-capabilities"
        aria-labelledby="design-capabilities-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="design-capabilities-heading">
          <span className="design-capabilities-label">Creative toolkit</span>
          <h2
            id="design-capabilities-title"
            className="font-display-hand text-xl md:text-2xl"
          >
            Tools &amp; skills for graphic design
          </h2>
          <p>
            From the first wireframe to the final artwork, I use a flexible
            toolkit to turn ideas into clear, purposeful visual systems.
          </p>
        </div>

        <div className="design-capabilities-grid">
          <section className="design-tools" aria-labelledby="design-tools-title">
            <h3 id="design-tools-title" className="font-display-hand">
              Tools I use
            </h3>
            <ul>
              {designTools.map((tool, index) => (
                <motion.li
                  key={tool.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 5.1 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="design-tool-name">{tool.name}</span>
                  <span className="design-tool-purpose">{tool.purpose}</span>
                </motion.li>
              ))}
            </ul>
          </section>

          <section className="design-skills" aria-labelledby="design-skills-title">
            <h3 id="design-skills-title" className="font-display-hand">
              Core skills
            </h3>
            <ul>
              {designSkills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 5.1 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="design-skill-marker" aria-hidden="true">✦</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </section>
        </div>
      </motion.section>
    </div>
  );

  return (
    <BookFrame pageName="About Shyline" leftContent={aboutLeft}>
      {/* ── Right Page: Studio Polaroid & Verified Certifications ────────── */}
      <div>
        {/* Certifications Section */}
        <WritingText
          as="h2"
          text="Course Certificates & Credentials"
          className="font-display-hand text-2xl md:text-3xl text-ink mt-6 mb-2"
          speed={35}
          delay={2000}
          cursor={false}
        />

        <WritingText
          as="p"
          text="Click any certificate to open the original PDF ↗"
          className="font-hand text-sky-900 text-sm mb-5"
          speed={18}
          delay={2500}
          cursor={false}
        />

        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.studentId}
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
              initial={{
                opacity: 0,
                y: 28,
                rotate: [-1.35, 1.2, -0.85, 1.05][index % 4],
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [-0.7, 0.6, -0.42, 0.52][index % 4],
              }}
              transition={{
                duration: 0.65,
                delay: 2.8 + index * 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.01,
                rotate: [-0.12, 0.1, -0.06, 0.08][index % 4],
                y: -3,
                transition: { duration: 0.25 },
              }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Open ${cert.title} certificate PDF`}
            >
              <div className="cert-card-image">
                <img
                  src={cert.preview}
                  alt={`${cert.title} certificate preview`}
                  loading="lazy"
                />
                <span className="cert-card-open-badge" aria-hidden="true">
                  Open PDF ↗
                </span>
              </div>

              <div className="cert-card-content">
                <h3 className="cert-card-title">{cert.title}</h3>
                <span className="cert-card-issuer">
                  {cert.issuer} • {cert.issued}
                </span>

                <span className="cert-card-id font-mono">
                  {cert.studentId}
                </span>

                <span className="cert-card-link-prompt">
                  Open certificate PDF ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </BookFrame>
  );
}