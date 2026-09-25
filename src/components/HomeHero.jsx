import { motion, useReducedMotion } from 'framer-motion';
import { BookFrame } from './BookFrame';
import { WritingText } from './WritingText';

const entrance = [0.16, 1, 0.3, 1];

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  const homeLeft = (
    <div className="home-intro-column">
      <WritingText
        as="p"
        text="Page 01 — Introduction"
        className="font-hand mb-3 text-sky-900"
        speed={35}
        delay={100}
      />

      <WritingText
        as="h1"
        text="Graphic Designer"
        className="font-display-hand text-scrap-red text-5xl md:text-7xl leading-tight"
        speed={48}
        delay={450}
      />

      <WritingText
        as="p"
        text="Research-led experiences • Clear systems • Digital craft"
        className="font-hand mt-3 text-muted text-base md:text-lg"
        speed={16}
        delay={1200}
        cursor={false}
      />

      <motion.svg
        viewBox="0 0 240 24"
        className="home-flourish"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.75, delay: 1.4, ease: entrance }}
        aria-hidden="true"
      >
        <path
          d="M 4 14 C 48 4, 102 20, 152 11 S 218 6, 236 13"
          stroke="#c71925"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.figure
        className="scrapbook-polaroid home-hero-polaroid"
        initial={reduceMotion ? false : { opacity: 0, y: 32, rotate: -2.2, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, rotate: -1.1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7, ease: entrance }}
        whileHover={{ rotate: 0.25, y: -3, scale: 1.01, transition: { duration: 0.35 } }}
      >
        <img
          src="/images/profile/shyline-portrait.jpg"
          alt="Shyline Mwanza — Certified Graphic Designer"
          loading="lazy"
        />
        <figcaption>
          <WritingText
            as="span"
            text="Graphic thinking, made visible."
            className="font-hand"
            speed={26}
            delay={1700}
            cursor={false}
          />
        </figcaption>
      </motion.figure>
    </div>
  );

  return (
    <BookFrame pageName="Graphic Designer" leftContent={homeLeft}>
      <motion.div
        className="home-welcome-panel"
        initial={reduceMotion ? false : { opacity: 0, x: 28, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: entrance }}
      >
        <WritingText
          as="p"
          text="You're in the right place if you're looking for visual thinking to turn complex challenges into clear, useful, and thoughtful graphic experiences."
          className="font-hand text-ink text-lg md:text-2xl leading-relaxed mt-2"
          speed={15}
          delay={1900}
          cursor={false}
        />

        <motion.div
          className="home-method-note"
          initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: 0.8 }}
          animate={{ opacity: 1, y: 0, rotate: -0.55 }}
          transition={{ duration: 0.7, delay: 2.7, ease: entrance }}
        >
          <span className="home-method-label">THE PROCESS</span>
          <p>Listen closely. Make a mess. Find the signal. Build the thing that helps.</p>
        </motion.div>

        <div className="home-page-footer-note">
          <span className="home-page-footer-line" />
          <span className="font-hand">Hop into my work tab to explore my work ↗</span>
        </div>
      </motion.div>
    </BookFrame>
  );
}