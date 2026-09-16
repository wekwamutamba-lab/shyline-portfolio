import { BookFrame } from '../components/BookFrame';
import { WritingText } from '../components/WritingText';

export function Contact() {
  return (
    <BookFrame pageName="Let’s Talk">
      <WritingText
        as="p"
        text="Page 04 — Contact"
        className="font-hand mb-4 text-sky-900"
        speed={38}
        delay={100}
      />

      <WritingText
        as="h1"
        text="Let’s make something."
        className="font-display-hand text-scrap-red text-5xl md:text-7xl"
        speed={70}
        delay={400}
      />

      <WritingText
        as="p"
        text="Have a project, collaboration, or creative challenge in mind? I’d love to hear about it."
        className="font-hand mt-10 max-w-xl text-lg leading-relaxed text-ink md:text-2xl"
        speed={18}
        delay={1850}
      />

      <div className="mt-10">
        <WritingText
          as="p"
          text="Email me at:"
          className="font-hand text-base text-muted md:text-xl"
          speed={28}
          delay={3600}
        />

        <a
          href="mailto:your-email@example.com"
          className="mt-3 inline-block font-display-hand text-2xl text-sky-900 underline decoration-scrap-red underline-offset-8 md:text-4xl"
        >
          your-email@example.com
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-5">
        <a href="#" className="font-hand text-lg text-ink hover:text-sky-900">
          LinkedIn ↗
        </a>

        <a href="#" className="font-hand text-lg text-ink hover:text-sky-900">
          Instagram ↗
        </a>
      </div>
    </BookFrame>
  );
}