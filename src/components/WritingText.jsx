import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export function WritingText({
  text,
  as: Tag = 'p',
  className = '',
  speed = 18,
  delay = 0,
  cursor = true,
  replayOnScroll = false,
  href,
  target,
  rel,
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(ref, {
    amount: 0.15,
    once: !replayOnScroll,
  });

  const [displayedText, setDisplayedText] = useState('');
  const renderedText = shouldReduceMotion ? text : displayedText;

  useEffect(() => {
    if (shouldReduceMotion) return undefined;

    let currentCharacter = 0;
    let delayTimer;
    let typingTimer;
    let resetTimer;

    const clearTimers = () => {
      window.clearTimeout(delayTimer);
      window.clearTimeout(typingTimer);
      window.clearTimeout(resetTimer);
    };

    const typeNextCharacter = () => {
      currentCharacter += 1;
      setDisplayedText(text.slice(0, currentCharacter));

      if (currentCharacter < text.length) {
        typingTimer = window.setTimeout(typeNextCharacter, speed);
      }
    };

    if (!isInView) {
      if (replayOnScroll) {
        resetTimer = window.setTimeout(() => setDisplayedText(''), 0);
      }

      return clearTimers;
    }

    resetTimer = window.setTimeout(() => {
      setDisplayedText('');
      delayTimer = window.setTimeout(typeNextCharacter, delay);
    }, 0);

    return clearTimers;
  }, [
    text,
    speed,
    delay,
    isInView,
    replayOnScroll,
    shouldReduceMotion,
  ]);

  const isTyping =
    !shouldReduceMotion &&
    isInView &&
    renderedText.length < text.length;

  return (
    <Tag
      ref={ref}
      className={`writing-text ${className}`}
      href={href}
      target={target}
      rel={rel}
      aria-label={text}
    >
      <span aria-hidden="true">{renderedText}</span>

      {cursor && isTyping && (
        <span className="writing-cursor" aria-hidden="true">
          |
        </span>
      )}
    </Tag>
  );
}