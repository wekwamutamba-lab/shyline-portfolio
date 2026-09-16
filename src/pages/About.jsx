import { BookFrame } from '../components/BookFrame';
import { WritingText } from '../components/WritingText';

export function About() {
  return (
    <BookFrame pageName="About Shyline">
      <WritingText
        as="p"
        text="Page 02 — About"
        className="font-hand mb-4 text-sky-900"
        speed={38}
        delay={100}
      />

      <WritingText
        as="h1"
        text="About Shyline"
        className="font-display-hand text-scrap-red text-5xl md:text-7xl"
        speed={72}
        delay={400}
      />

      <WritingText
        as="p"
        text="I’m Shyline Mwanza, a multidisciplinary designer focused on brand identity, visual design, and graphic design."
        className="font-hand mt-10 max-w-xl text-lg leading-relaxed text-ink md:text-2xl"
        speed={19}
        delay={1450}
      />

      <WritingText
        as="p"
        text="I build cohesive identities from one core idea. My work is guided by a simple belief: design is problem-solving, not decoration."
        className="font-hand mt-6 max-w-xl text-base leading-relaxed text-muted md:text-xl"
        speed={17}
        delay={3300}
      />
    </BookFrame>
  );
}