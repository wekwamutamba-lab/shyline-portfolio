import { Link } from 'react-router-dom';
import { useStaggerReveal } from '../hooks/useStaggerReveal';

export function ProjectCard({ project, index = 0 }) {
  const ref = useStaggerReveal(index);

  const spanClass =
    project.span === 'large'
      ? 'md:col-span-8'
      : project.span === 'medium'
      ? 'md:col-span-6'
      : 'md:col-span-4';

  return (
    <Link
      ref={ref}
      to={`/work/${project.category.toLowerCase().replace(/\s+/g, '-')}`}
      className={`group block ${spanClass} focus:outline-none reveal`}
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} — ${project.category}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025]"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <div>
          <h3 className="font-display text-xl md:text-2xl text-ink">
            {project.title}
          </h3>
          <p className="text-sm text-muted">{project.category}</p>
        </div>
        <span className="text-sky-900 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          →
        </span>
      </div>
    </Link>
  );
}