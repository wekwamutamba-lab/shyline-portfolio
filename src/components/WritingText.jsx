import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export function WritingText({
  text,
  as: Tag = 'p',
  className = '',
  speed = 20,
  delay = 0,
  once = true,
  cursor = true,
}) {
  const elementRef = useRef(null);

  const isInView = useInView(elementRef, {
    once,
    amount: 0.22,
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
      if (!once) {
        setVisibleText('');
      }

      return;
    }

    let characterIndex = 0;
    let startTimeout;
    let writingTimeout;

    startTimeout = window.setTimeout(() => {
      const writeCharacter = () => {
        characterIndex += 1;
        setVisibleText(text.slice(0, characterIndex));

        if (characterIndex < text.length) {
          writingTimeout = window.setTimeout(writeCharacter, speed);
        }
      };

      writeCharacter();
    }, delay);

    return () => {
      window.clearTimeout(startTimeout);
      window.clearTimeout(writingTimeout);
    };
  }, [text, speed, delay, once, isInView, shouldReduceMotion]);

  const isStillWriting =
    !shouldReduceMotion &&
    isInView &&
    visibleText.length < text.length;

  return (
    <Tag
      ref={elementRef}
      className={`writing-text ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">{visibleText}</span>

      {cursor && isStillWriting && (
        <span className="writing-cursor" aria-hidden="true">
          |
        </span>
      )}
    </Tag>
  );
}