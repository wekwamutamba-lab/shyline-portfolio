import { ProjectCard } from './ProjectCard';

export function ProjectGrid({ projects = [] }) {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}