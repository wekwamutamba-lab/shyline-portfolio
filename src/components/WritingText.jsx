import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export function WritingText({
  text,
  as: Tag = 'p',
  className = '',
  speed = 24,
  delay = 0,
  once = true,
}) {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, {
    once,
    amount: 0.35,
  });

  const shouldReduceMotion = useReducedMotion();
  const [visibleText, setVisibleText] = useState(
    shouldReduceMotion ? text : ''
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleText(text);
      return;
    }

    if (!isInView) {
      if (!once) setVisibleText('');
      return;
    }

    let characterIndex = 0;
    let timeoutId;

    const startWriting = window.setTimeout(() => {
      const writeNextCharacter = () => {
        characterIndex += 1;
        setVisibleText(text.slice(0, characterIndex));

        if (characterIndex < text.length) {
          timeoutId = window.setTimeout(writeNextCharacter, speed);
        }
      };

      writeNextCharacter();
    }, delay);

    return () => {
      window.clearTimeout(startWriting);
      window.clearTimeout(timeoutId);
    };
  }, [text, speed, delay, once, isInView, shouldReduceMotion]);

  return (
    <Tag
      ref={elementRef}
      className={`writing-text ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">{visibleText}</span>

      {!shouldReduceMotion && isInView && visibleText.length < text.length && (
        <span className="writing-cursor" aria-hidden="true">
          |
        </span>
      )}
    </Tag>
  );
}