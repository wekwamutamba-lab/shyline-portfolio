import { useNavigate } from 'react-router-dom';
import { BookFrame } from '../components/BookFrame';
import { WritingText } from '../components/WritingText';

const categories = [
  { label: 'Brand Identity', slug: 'brand-identity', number: '01' },
  { label: 'Visual Design', slug: 'visual-design', number: '02' },
  { label: 'Graphic Design', slug: 'graphic-design', number: '03' },
];

export function Work() {
  const navigate = useNavigate();

  return (
    <BookFrame pageName="Selected Work">
      <WritingText
        as="p"
        text="Page 03 — Work"
        className="font-hand mb-4 text-sky-900"
        speed={38}
        delay={100}
      />

      <WritingText
        as="h1"
        text="Selected Work"
        className="font-display-hand text-scrap-red text-5xl md:text-7xl"
        speed={70}
        delay={400}
      />

      <div className="mt-10 space-y-4">
        {categories.map((category, index) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => navigate(`/work/${category.slug}`)}
            className="group flex w-full items-center justify-between border-b border-ink/20 py-4 text-left"
            style={{
              animation: `work-item-enter 700ms cubic-bezier(.16,1,.3,1) ${
                1.6 + index * 0.2
              }s both`,
            }}
          >
            <span className="font-hand text-xl text-muted">
              {category.number}
            </span>

            <span className="font-display-hand text-2xl text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
              {category.label}
            </span>

            <span className="font-hand text-sky-900">↗</span>
          </button>
        ))}
      </div>
    </BookFrame>
  );
}