import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="scrapbook-hero">
      <div className="scrapbook-binder">
        <div className="scrapbook-left-page">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-title font-display-hand text-scrap-red"
          >
            Creative Lead
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-disciplines font-hand"
          >
            <span>Photo</span>
            <span>•</span>
            <span>Video</span>
            <span>•</span>
            <span>Graphic Design</span>
            <br />
            <span>Music</span>
            <span>•</span>
            <span>Art</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="hero-introduction font-hand"
        >
          <p>
            I’m a multidisciplinary creative working across photo, video, and
            digital content. I help ideas take shape through strong visuals,
            thoughtful storytelling, and work that feels natural and
            intentional.
          </p>

          <p>
            I’m drawn to bold concepts, clean visuals, and creating content
            that connects not just content that looks good.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, rotate: -4, y: 24 }}
          animate={{ opacity: 1, rotate: -4, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          src="/images/polaroid-one.png"
          alt="Selected visual work"
          className="hero-polaroid hero-polaroid-one"
        />

        <motion.img
          initial={{ opacity: 0, rotate: 5, y: 24 }}
          animate={{ opacity: 1, rotate: 5, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          src="/images/polaroid-two.png"
          alt="Selected visual work"
          className="hero-polaroid hero-polaroid-two"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="hero-tv"
        >
          <img src="/images/retro-tv.png" alt="Change the channel television" />

          <button
            type="button"
            className="hero-channel-button font-hand"
            onClick={() => {
              document
                .getElementById('channels')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Try changing the channel →
          </button>
        </motion.div>
      </div>
    </section>
  );
}