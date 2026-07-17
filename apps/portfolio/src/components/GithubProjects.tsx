import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface Repo {
  id: number
  name: string
  html_url: string
  description: string | null
  topics: string[]
}

function GithubCard({ repo }: { repo: Repo }) {
  return (
    <div
      className="relative flex h-full flex-col overflow-hidden rounded-2xl p-5"
      style={{
        border: '4px solid transparent',
        background:
          'linear-gradient(white, white) padding-box, linear-gradient(45deg, rgba(190,50,208,.1), rgba(0,80,216,.1)) border-box',
      }}
    >
      <div className="flex-1">
        <h3 className="text-xl">{repo.name}</h3>
        {repo.topics.length > 0 && (
          <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
            {repo.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-md px-2 py-1 text-sm font-normal"
                style={{ background: '#cff4fc', color: '#212529' }}
              >
                {topic}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-4">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center font-medium no-underline"
          style={{ color: '#1b1b1b' }}
        >
          <span>View Repository</span>
          <ArrowRight className="ms-2 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export default function GithubProjects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let active = true
    fetch('https://api.github.com/users/stephanie-shields/repos')
      .then((res) => (res.ok ? res.json() : []))
      .then((data: Repo[]) => {
        if (active) setRepos(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        if (active) setRepos([])
      })
      .finally(() => {
        if (active) setIsLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('[data-card]')
    const amount = (card?.offsetWidth ?? track.clientWidth) + 24
    track.scrollBy({ left: amount * direction, behavior: 'smooth' })
  }

  return (
    <section className="container py-16">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Intro */}
        <div className="lg:col-span-1">
          <h2 className="mb-3 text-3xl">🚀 GitHub</h2>
          <p className="mb-6 pe-8" style={{ color: '#5c5c5c' }}>
            Dive into my GitHub to discover a showcase of my design and development expertise.
          </p>
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              aria-label="Previous repository"
              onClick={() => scrollByCard(-1)}
              className="btn-gradient flex h-10 w-10 items-center justify-center rounded-full"
              style={{ padding: 0 }}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next repository"
              onClick={() => scrollByCard(1)}
              className="btn-gradient flex h-10 w-10 items-center justify-center rounded-full"
              style={{ padding: 0 }}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <a
            href="https://github.com/stephanie-shields"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center font-medium no-underline"
            style={{ color: 'var(--color-brand)' }}
          >
            <span>Visit My GitHub</span>
            <ArrowRight className="ms-2 h-4 w-4" />
          </a>
        </div>

        {/* Carousel */}
        <div className="lg:col-span-2">
          {isLoading ? (
            <p style={{ color: '#5c5c5c' }}>Loading…</p>
          ) : repos.length === 0 ? (
            <p style={{ color: '#5c5c5c' }}>Repositories are unavailable right now.</p>
          ) : (
            <div
              ref={trackRef}
              className="flex gap-6 overflow-x-auto pb-2"
              style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
            >
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  data-card
                  className="w-[300px] shrink-0"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <GithubCard repo={repo} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
