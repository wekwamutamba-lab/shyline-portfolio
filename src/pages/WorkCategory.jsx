import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ScrapbookPage } from '../components/ScrapbookPage';

const slugToLabel = {
  'brand-identity': 'Brand Identity',
  'visual-design': 'Visual Design',
  'graphic-design': 'Graphic Design',
};

export function WorkCategory() {
  const { cat } = useParams();
  const label = slugToLabel[cat];
  const filtered = projects.filter((p) => p.category === label);

  return (
    <ScrapbookPage>
      <main className="container py-12">
        <div className="mb-8">
          <h1 className="font-display text-display text-ink">{label}</h1>
          <p className="mt-2 max-w-xl text-lead text-muted">
            Selected projects demonstrating process and thinking behind the work.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </main>
    </ScrapbookPage>
  );
}
