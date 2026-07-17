import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={project.link}
      className="group relative flex flex-col no-underline rounded-lg overflow-hidden"
      style={{ color: 'inherit' }}
    >
      {/* Badges — fixed to the card, outside the lift transform */}
      <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-2">
        {project.badges.map((badge) => (
          <span
            key={badge}
            className="px-2 py-1 rounded-md text-xs font-normal bg-white"
            style={{ border: `1px solid ${project.badgeBorder}`, color: '#212529' }}
          >
            {badge}
          </span>
        ))}
      </div>

      {/* Image + text + CTA lift together on hover, clipped by the card's rounded frame */}
      <div
        className="transition-transform duration-300 group-hover:-translate-y-10"
        style={{ transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)' }}
      >
        <div
          className="flex items-center justify-center p-3 text-center"
          style={{ background: project.cardBg, minHeight: '176px' }}
        >
          {project.image ? (
            <img src={project.image} alt={project.imageAlt ?? project.title} className="w-full h-full object-cover" />
          ) : (
            <p className="mb-0" style={{ color: '#5c5c5c' }}>Image coming soon</p>
          )}
        </div>

        <div className="pt-3">
          <h3 className="sr-only">{project.title}</h3>
          {project.text && (
            <p className="mb-0" style={{ color: '#5c5c5c', lineHeight: 1.6 }}>
              {project.text}
            </p>
          )}

          <div
            className="project-card-cta flex items-center mt-2"
            style={{ color: '#1b1b1b', fontWeight: 500 }}
          >
            <span className="project-card-highlight relative inline-block" style={{ '--highlight-color': project.cardBg } as React.CSSProperties}>
              <span className="relative">View Work</span>
            </span>
            <ArrowRight className="w-4 h-4 ms-2" />
          </div>
        </div>
      </div>
    </Link>
  )
}
