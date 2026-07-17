import { Link } from 'react-router-dom'
import capabilitiesGraphic from '../assets/capabilities-graphic.svg'

// Column-based colors matching the legacy 7-wide grid (magenta → purple → blue)
const COLUMN_COLORS = ['#be32d0', '#be32d0', '#be32d0', '#783cb9', '#783cb9', '#0050d8', '#0050d8']

// Shapes rendered transparent (empty cells) and shapes rendered as circles
const TRANSPARENT_SHAPES = new Set([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 21, 23, 29, 33])
const CIRCLE_SHAPES = new Set([5, 20, 25, 31, 35])

function ProcessGraphic() {
  const shapes = Array.from({ length: 35 }, (_, index) => index + 1)

  return (
    <div
      className="absolute grid opacity-10 xl:opacity-100"
      style={{
        gridTemplateColumns: 'repeat(7, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gap: '8px',
        maxWidth: '352px',
        right: '12px',
        bottom: '12px',
      }}
      aria-hidden="true"
    >
      {shapes.map((number) => {
        const isTransparent = TRANSPARENT_SHAPES.has(number)
        const column = (number - 1) % 7
        return (
          <div
            key={number}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: CIRCLE_SHAPES.has(number) ? '50%' : undefined,
              background: isTransparent ? 'transparent' : COLUMN_COLORS[column],
            }}
          />
        )
      })}
    </div>
  )
}

export default function Capabilities() {
  return (
    <section
      style={{
        background: 'linear-gradient(334deg, #be32d0, #0050d8)',
        backgroundSize: '180% 180%',
        animation: 'gradient-animation 6s ease infinite',
      }}
      className="py-12"
    >
      <div className="container my-4">
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Capabilities */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-xl">
            <img
              src={capabilitiesGraphic}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-12 -right-16 opacity-20 xl:opacity-100"
            />
            <div className="relative px-3 py-4">
              <div className="lg:w-2/3">
                <h2 className="mb-3 text-3xl">🔥 Capabilities</h2>
                <p className="mb-6" style={{ color: '#5c5c5c' }}>
                  Collaborating across disciplines to ensure a cohesive product experience that truly
                  addresses user needs.
                </p>
                <Link to="/approach" className="btn-gradient inline-flex">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-xl">
            <ProcessGraphic />
            <div className="relative px-3 py-4">
              <div className="lg:w-2/3">
                <h2 className="mb-3 text-3xl">💪 Design Process</h2>
                <p className="mb-6" style={{ color: '#5c5c5c' }}>
                  The foundation of a successful product is built on a diverse blend of methods and
                  technologies.
                </p>
                <Link to="/approach" className="btn-gradient inline-flex">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
