import { motion } from 'framer-motion';

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
      <span className="work-menu-number font-hand">
        {item.number}
      </span>

      <span className="work-menu-title font-display-hand">
        {item.title}
      </span>

      <span className="work-menu-description font-hand">
        {item.description}
      </span>

      <span className="work-menu-arrow font-hand">
        ↗
      </span>
    </motion.button>
  );
}