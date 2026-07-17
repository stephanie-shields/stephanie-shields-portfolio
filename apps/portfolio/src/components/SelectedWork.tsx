import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function SelectedWork() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-card]')
    const amount = (card?.offsetWidth ?? track.clientWidth) + 32
    track.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl">✨ Selected Work</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => scrollByCard(-1)}
            className="nav-btn-outline flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => scrollByCard(1)}
            className="nav-btn-dark flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-0 md:gap-6 lg:gap-8 overflow-x-auto pb-2 mb-8"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            data-card
            className="shrink-0 w-[85%] sm:w-[calc(58%-16px)] lg:w-[calc(33.333%-22px)]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <Link
        to="/work"
        className="nav-btn-outline inline-flex items-center px-4 py-2 rounded-md font-medium no-underline transition-colors"
        style={{ borderWidth: '2px' }}
      >
        View All Work
      </Link>
    </section>
  )
}
