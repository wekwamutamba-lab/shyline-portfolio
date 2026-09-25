import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function ProjectImageViewer({ images, initialIndex = 0, onClose }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const total = images.length;

  useEffect(() => {
    if (!total) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current + 1) % total);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + total) % total);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, total]);

  if (!total) return null;

  const changeImage = (amount) => {
    setActiveIndex((current) => (current + amount + total) % total);
  };

  return (
    <motion.div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="image-lightbox-paper"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="image-lightbox-header">
          <span className="image-lightbox-label">PROJECT IMAGE NOTE</span>
          <span className="image-lightbox-count" aria-live="polite">
            {activeIndex + 1} / {total}
          </span>
          <button
            type="button"
            className="image-lightbox-close"
            onClick={onClose}
            aria-label="Close image viewer"
          >
            Close ×
          </button>
        </div>

        <div className="image-lightbox-stage">
          <button
            type="button"
            className="image-lightbox-nav image-lightbox-previous"
            onClick={() => changeImage(-1)}
            aria-label="View previous project image"
          >
            ←
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={images[activeIndex]}
              className="image-lightbox-image"
              src={images[activeIndex]}
              alt={`Project image ${activeIndex + 1} of ${total}`}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          <button
            type="button"
            className="image-lightbox-nav image-lightbox-next"
            onClick={() => changeImage(1)}
            aria-label="View next project image"
          >
            →
          </button>
        </div>

        <div className="image-lightbox-thumbnails" aria-label="Choose a project image">
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              className={`image-lightbox-thumbnail ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open project image ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            >
              <img src={image} alt="" />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
