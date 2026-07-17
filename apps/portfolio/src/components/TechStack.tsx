import { Link } from 'react-router-dom'
import { technologies } from '../data/technologies'

// AI tools get a second copy per deck so they stand out; everything else (incl.
// the modern core stack) already appears reliably once per deck.
const featuredIds = new Set(['anthropic', 'openai', 'cursor', 'github-copilot'])

const featured = technologies.filter((t) => featuredIds.has(t.id))

// One "deck" holds every tech once (so all of them appear — variety) plus the
// featured set a second time (so the latest/greatest stand out without any one
// logo clustering). Decks are shuffled independently and dealt until the
// oversized, rotated grid is full.
const deck = [...technologies, ...featured]
const TOTAL_CELLS = 220

const backgroundLogos = (() => {
  // mulberry32 — deterministic PRNG so the layout is identical every render.
  let seed = 0x9e3779b9
  const random = () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  const pool: typeof technologies = []
  while (pool.length < TOTAL_CELLS) {
    const shuffled = [...deck]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    pool.push(...shuffled)
  }
  pool.length = TOTAL_CELLS
  return pool
})()

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Diagonal brand-logo grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute select-none"
        style={{
          inset: '-60%',
          transform: 'rotate(-15deg)',
        }}
      >
        <ul
          className="m-0 grid list-none justify-center gap-0 p-0"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}
        >
          {backgroundLogos.map((tech, i) => (
            <li
              key={i}
              className="flex aspect-square items-center justify-center p-7"
              style={{ border: '1px solid rgba(0, 0, 0, 0.05)' }}
            >
              <img
                src={tech.logo}
                alt=""
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Foreground gradient card */}
      <div className="container relative py-20 sm:py-24">
        <div
          className="max-w-md rounded-2xl p-8 text-white shadow-2xl sm:p-10"
          style={{
            background:
              'linear-gradient(135deg, var(--color-brand), var(--color-brand-end))',
          }}
        >
          <h2 className="mb-3 text-3xl text-white">✌️ Tech Stack</h2>
          <p className="mb-6 text-white/90">
            Explore my favorite technology picks and frameworks.
          </p>
          <Link
            to="/toolbox"
            className="inline-flex items-center rounded-lg border border-white/80 px-5 py-2 font-medium text-white no-underline transition-colors hover:bg-white/15"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
