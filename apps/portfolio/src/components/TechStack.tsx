import { Link } from 'react-router-dom'
import { technologies } from '../data/technologies'

export default function TechStack() {
  return (
    <section className="relative">
      <div className="container my-16">
        <div className="max-w-md">
          <h2 className="mb-3 text-3xl">✌️ Tech Stack</h2>
          <p className="mb-6" style={{ color: '#5c5c5c' }}>
            Explore my favorite technology picks and frameworks.
          </p>
          <Link
            to="/toolbox"
            className="inline-flex items-center rounded-lg px-5 py-2 font-medium text-white no-underline transition-opacity hover:opacity-85"
            style={{ background: 'var(--color-brand)' }}
          >
            Learn More
          </Link>
        </div>
      </div>

      <ul
        className="m-0 grid list-none grid-cols-4 gap-2.5 p-2.5 sm:grid-cols-6 lg:grid-cols-8"
        style={{ backgroundColor: '#fafafa' }}
      >
        {technologies.map((tech) => (
          <li key={tech.id} className="flex items-center justify-center">
            <div className="flex aspect-square w-full items-center justify-center bg-white p-4">
              <img
                src={tech.logo}
                alt={tech.title}
                className="max-h-24 max-w-[70%] object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
