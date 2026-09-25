import { motion } from 'framer-motion';

// Right-page words that animate individually on hover
const introWords = [
  "I'm", "a", "multidisciplinary", "creative", "working", "across",
  "photo,", "video,", "and", "digital", "content.", "I", "help", "ideas",
  "take", "shape", "through", "strong", "visuals,", "thoughtful",
  "storytelling,", "and", "work", "that", "feels", "natural", "and", "intentional.",
];

const introWords2 = [
  "I'm", "drawn", "to", "bold", "concepts,", "clean", "visuals,", "and",
  "creating", "content", "that", "connects", "—", "not", "just", "content",
  "that", "looks", "good.",
];

function AnimatedWord({ word, delay = 0 }) {
  return (
    <motion.span
      style={{ display: 'inline-block', marginRight: '0.28em', cursor: 'default' }}
      whileHover={{
        scale: 1.18,
        rotate: [-2, 3, -1, 0],
        color: '#c71925',
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {word}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section className="scrapbook-hero">
      <div className="scrapbook-binder">
        {/* ── LEFT PAGE ────────────────────────────── */}
        <div className="scrapbook-left-page">
          {/* Arc text via SVG textPath */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg
              viewBox="0 0 400 160"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', overflow: 'visible' }}
            >
              <defs>
                {/* A gentle upward arc path */}
                <path
                  id="arc"
                  d="M 20 130 Q 200 20 380 130"
                />
              </defs>
              <text
                fill="#c71925"
                fontFamily="'Permanent Marker', cursive"
                fontWeight="900"
                fontSize="46"
                letterSpacing="-1"
              >
                <textPath href="#arc" startOffset="50%" textAnchor="middle">
                  Product Design
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Lightweight sketch mark keeps the legacy hero from repeating the portrait. */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="hero-left-image-wrap hero-doodle-mark"
            aria-hidden="true"
          >
            <span className="font-display-hand">Sketch → shape → ship</span>
          </motion.div>
        </div>

        {/* ── RIGHT PAGE ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-introduction font-hand"
        >
          <p>
            {introWords.map((w, i) => (
              <AnimatedWord key={`p1-${i}`} word={w} delay={0.5 + i * 0.025} />
            ))}
          </p>

          <p>
            {introWords2.map((w, i) => (
              <AnimatedWord key={`p2-${i}`} word={w} delay={0.9 + i * 0.025} />
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}