import { Link } from 'react-router-dom';

const disciplines = [
  { label: 'Brand Identity', slug: 'brand-identity' },
  { label: 'Visual Design', slug: 'visual-design' },
  { label: 'Graphic Design', slug: 'graphic-design' },
];

export function DisciplineNav() {
  return (
    <section className="container py-12">
      <ul className="flex flex-wrap gap-6 text-lg">
        {disciplines.map((d) => (
          <li key={d.slug}>
            <Link
              to={`/work/${d.slug}`}
              className="hover:underline decoration-sky-900 underline-offset-4"
            >
              {d.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}