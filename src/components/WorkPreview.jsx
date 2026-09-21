import { motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function WorkPreview({ item, isActive, mousePosition }) {
  const springX = useSpring(mousePosition.x, {
    stiffness: 120,
    damping: 16,
    mass: 0.7,
  });

  const springY = useSpring(mousePosition.y, {
    stiffness: 120,
    damping: 16,
    mass: 0.7,
  });

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia('(pointer: coarse)').matches
    );
  }, []);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="work-cursor-preview"
      style={{
        x: springX,
        y: springY,
      }}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.82,
        rotate: isActive ? item.rotate : item.rotate - 8,
      }}
      transition={{
        type: 'spring',
        stiffness: 160,
        damping: 17,
        mass: 0.75,
      }}
    >
      <div className="work-preview-polaroid">
        <div className="work-preview-image-wrap">
          <img src={item.image} alt="" />
        </div>

        <p className="work-preview-caption font-hand">
          {item.previewLabel}
        </p>

        <span className="work-preview-tape work-preview-tape-one" />
        <span className="work-preview-tape work-preview-tape-two" />
      </div>
    </motion.div>
  );
}