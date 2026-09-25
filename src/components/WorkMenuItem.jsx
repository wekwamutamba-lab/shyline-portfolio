import { motion } from 'framer-motion';
import { WritingText } from './WritingText';

export function WorkMenuItem({
  item,
  index,
  onEnter,
  onLeave,
  onMove,
  onClick,
}) {
  return (
    <motion.button
      type="button"
      className={`work-menu-item work-menu-item-${item.color}`}
      initial={{
        opacity: 0,
        y: 46,
        rotate: index % 2 === 0 ? -2 : 2,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: item.rotate,
      }}
      transition={{
        type: 'spring',
        stiffness: 115,
        damping: 15,
        mass: 0.85,
        delay: 0.18 + index * 0.1,
      }}
      whileHover={{
        x: 10,
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.965,
        y: 5,
      }}
      onMouseEnter={() => onEnter(item.slug)}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      onFocus={() => onEnter(item.slug)}
      onBlur={onLeave}
      onClick={onClick}
    >
      <WritingText
        as="span"
        text={item.number}
        className="work-menu-number font-hand"
        speed={45}
        delay={1700 + index * 260}
        cursor={false}
      />

      <WritingText
        as="span"
        text={item.title}
        className="work-menu-title font-display-hand"
        speed={44}
        delay={1820 + index * 360}
        cursor={false}
      />

      <WritingText
        as="span"
        text={item.description}
        className="work-menu-description font-hand"
        speed={12}
        delay={2500 + index * 520}
        cursor={false}
      />

      <WritingText
        as="span"
        text="↗"
        className="work-menu-arrow font-hand"
        speed={50}
        delay={2100 + index * 360}
        cursor={false}
      />
    </motion.button>
  );
}