import { motion } from 'framer-motion';
import { BookFrame } from '../components/BookFrame';
import { WritingText } from '../components/WritingText';

export function Contact() {
  /* ── Left Page: Writing, Direct Email & Collaboration Note ──────────── */
  const contactLeft = (
    <div>
      <WritingText
        as="p"
        text="Page 04 — Contact & Inquiries"
        className="font-hand mb-3 text-sky-900"
        speed={35}
        delay={100}
      />

      <WritingText
        as="h1"
        text="Let's make something."
        className="font-display-hand text-scrap-red text-5xl md:text-7xl leading-tight"
        speed={48}
        delay={450}
      />

      <WritingText
        as="p"
        text="Have a digital product in need of clarity, a brand system requiring unified thinking, or a creative challenge? I would love to hear from you."
        className="font-hand mt-6 text-base md:text-lg text-ink leading-relaxed"
        speed={14}
        delay={1300}
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

      <WritingText
        as="p"
        text="Direct inbox:"
        className="font-hand mt-6 text-muted text-sm"
        speed={25}
        delay={2600}
        cursor={false}
      />

      <motion.a
        href="mailto:shylinemwanza59@gmail.com"
        className="font-display-hand mt-1 inline-block text-2xl md:text-3xl text-sky-900 underline decoration-scrap-red underline-offset-8 transition-transform hover:-translate-y-0.5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.0 }}
        aria-label="Send email to Shyline Mwanza"
      >
        shylinemwanza59@gmail.com
      </motion.a>

      <motion.div
        className="contact-availability-note mt-8 p-4 rounded bg-stone-100/70 border border-black/10 max-w-sm"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 3.4 }}
      >
        <p className="font-hand text-xs text-ink/80 leading-relaxed m-0">
          <span className="font-bold text-sky-900">Current Availability:</span>{' '}
          Open for freelance product design contracts, design system consultations, and select full-time creative roles.
        </p>
      </motion.div>
    </div>
  );

  return (
    <BookFrame pageName="Let's Talk" leftContent={contactLeft}>
      {/* ── Right Page: Studio Polaroid & Social Connections ───────────────── */}
      <div>
        {/* Supplied contact artwork */}
        <motion.figure
          className="scrapbook-polaroid contact-polaroid max-w-[320px] mx-auto -rotate-1 mb-8"
          initial={{ opacity: 0, y: 28, rotate: -1.8 }}
          animate={{ opacity: 1, y: 0, rotate: -0.65 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotate: 0.2, y: -3, scale: 1.01, transition: { duration: 0.3 } }}
        >
          <img
            src="/images/site/contact-doodle.jpg"
            alt="Shyline Mwanza — contact artwork"
            loading="lazy"
          />
          <figcaption className="font-hand">
            Hit me up... let's make something useful
          </figcaption>
        </motion.figure>

        <WritingText
          as="h2"
          text="Connect & Follow the Work"
          className="font-display-hand text-2xl md:text-3xl text-ink mt-8 mb-4"
          speed={35}
          delay={1600}
          cursor={false}
        />

        <div className="contact-links flex flex-col gap-4 max-w-sm">
          <motion.a
            href="https://www.linkedin.com/in/shyline-mwanza-6a73323aa"
            target="_blank"
            rel="noreferrer"
            className="contact-link flex items-center justify-between p-4 rounded bg-white/70 border border-black/10 shadow-sm hover:border-sky-900 hover:text-sky-900 transition-all font-hand text-base group"
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            whileHover={{ x: 3, y: -1 }}
          >
            <span>LinkedIn • Professional Profile</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/?deoia=1"
            target="_blank"
            rel="noreferrer"
            className="contact-link flex items-center justify-between p-4 rounded bg-white/70 border border-black/10 shadow-sm hover:border-sky-900 hover:text-sky-900 transition-all font-hand text-base group"
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            whileHover={{ x: 3, y: -1 }}
          >
            <span>Instagram • Visual Log & Sketches</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </motion.a>

          <motion.a
            href="mailto:shylinemwanza59@gmail.com"
            className="contact-link flex items-center justify-between p-4 rounded bg-white/70 border border-black/10 shadow-sm hover:border-sky-900 hover:text-sky-900 transition-all font-hand text-base group"
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            whileHover={{ x: 3, y: -1 }}
          >
            <span>Email Direct • shylinemwanza59@gmail.com</span>
            <span className="group-hover:translate-x-1 transition-transform">↗</span>
          </motion.a>
        </div>

        <p className="font-hand text-xs text-muted mt-6">
          * Usually responds to inquiries within 24–48 hours.
        </p>
      </div>
    </BookFrame>
  );
}