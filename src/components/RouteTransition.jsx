import { AnimatePresence, motion } from 'framer-motion';

const sheetVariants = {
  hidden: (sheet) => ({
    y: '115%',
    rotate: sheet.rotateStart,
    scale: sheet.scaleStart,
    opacity: 1,
  }),

  covering: (sheet) => ({
    y: '0%',
    rotate: sheet.rotateEnd,
    scale: 1,
    opacity: 1,
    transition: {
      duration: sheet.duration,
      delay: sheet.delay,
      ease: [0.76, 0, 0.24, 1],
    },
  }),

  revealing: (sheet) => ({
    y: '-120%',
    rotate: sheet.rotateExit,
    scale: 1.02,
    opacity: 1,
    transition: {
      duration: sheet.exitDuration,
      delay: sheet.exitDelay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const sheets = [
  {
    className: 'pasted-sheet pasted-sheet-back',
    rotateStart: -8,
    rotateEnd: -2,
    rotateExit: 3,
    scaleStart: 0.94,
    delay: 0,
    duration: 0.7,
    exitDelay: 0.05,
    exitDuration: 0.72,
  },
  {
    className: 'pasted-sheet pasted-sheet-middle',
    rotateStart: 7,
    rotateEnd: 1,
    rotateExit: -2,
    scaleStart: 0.97,
    delay: 0.09,
    duration: 0.72,
    exitDelay: 0.1,
    exitDuration: 0.72,
  },
  {
    className: 'pasted-sheet pasted-sheet-front',
    rotateStart: -4,
    rotateEnd: 0,
    rotateExit: 1,
    scaleStart: 1,
    delay: 0.18,
    duration: 0.75,
    exitDelay: 0.16,
    exitDuration: 0.75,
  },
];

export function RouteTransition({ phase, label }) {
  const isVisible = phase === 'covering' || phase === 'revealing';

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="pasted-pages-transition" aria-hidden="true">
          {sheets.map((sheet, index) => (
            <motion.div
              key={sheet.className}
              custom={sheet}
              variants={sheetVariants}
              initial="hidden"
              animate={phase}
              className={sheet.className}
            >
              {index === sheets.length - 1 && (
                <>
                  <div className="pasted-sheet-grid" />

                  <motion.div
                    initial={{ opacity: 0, y: 28, rotate: -4 }}
                    animate={{
                      opacity: phase === 'covering' ? 1 : 0,
                      y: phase === 'covering' ? 0 : -24,
                      rotate: phase === 'covering' ? -4 : 2,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: phase === 'covering' ? 0.42 : 0,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="pasted-sheet-label font-display-hand"
                  >
                    {label}
                  </motion.div>

                  <div className="pasted-tape pasted-tape-top" />
                  <div className="pasted-tape pasted-tape-bottom" />

                  <div className="pasted-sheet-corner" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}