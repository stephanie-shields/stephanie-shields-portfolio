import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ChevronRight, X } from 'lucide-react'

const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="w-10 h-10 shrink-0">
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#be32d0', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#fd4496', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path fill="url(#logo-gradient)" d="M18.96 22.36c-4.34-1.6-7.14-3.53-8.58-5.89L8.9 14.04l-.66 2.77c-1.36 5.72 1 11.47 5.74 13.98.71.35 1.84.85 3.38 1.15.82.15 1.61.22 2.4.22h.21l.3-.04c2.31-.62 3.67-2.63 3.49-5.14-.27-2.74-2.72-3.91-4.8-4.62Zm.81 7.46c-.65 0-1.3-.06-1.98-.18-1.24-.24-2.13-.63-2.74-.93-3.55-1.89-4.79-5.66-4.82-8.74 1.84 1.79 4.45 3.29 7.95 4.58 2.23.76 3.14 1.5 3.26 2.62.04.5.02 2.16-1.66 2.64ZM26.01 9.2c-.71-.35-1.83-.85-3.38-1.15-.82-.15-1.61-.22-2.4-.22h-.21l-.29.04c-2.31.62-3.68 2.63-3.49 5.14.27 2.74 2.71 3.91 4.8 4.62 4.33 1.6 7.14 3.53 8.58 5.89l1.48 2.43.65-2.77c1.36-5.72-1-11.47-5.74-13.98Zm3.76 10.82c-1.84-1.79-4.45-3.29-7.95-4.58-2.23-.76-3.14-1.5-3.25-2.62-.04-.49-.02-2.13 1.66-2.64.65 0 1.3.06 1.98.18 1.24.24 2.12.62 2.74.93 3.55 1.89 4.79 5.66 4.82 8.74Z" />
    <path fill="url(#logo-gradient)" d="M36.33 8.46a17.589 17.589 0 0 0-4.32-4.45A19.854 19.854 0 0 0 20 0C8.97 0 0 8.97 0 20c0 4.17 1.27 8.16 3.67 11.54 1.19 1.75 2.64 3.25 4.32 4.45C11.48 38.61 15.63 40 20 40c11.03 0 20-8.97 20-20 0-4.17-1.27-8.16-3.67-11.54ZM37.67 20c0 9.74-7.92 17.66-17.66 17.66-3.86 0-7.53-1.23-10.62-3.55a15.416 15.416 0 0 1-3.78-3.9c-2.13-3-3.26-6.53-3.26-10.21C2.34 10.26 10.26 2.34 20 2.34c3.86 0 7.53 1.23 10.62 3.55 1.47 1.05 2.74 2.36 3.78 3.9 2.13 3 3.26 6.53 3.26 10.21Z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" fill="currentColor" className="w-5 h-5">
    <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 0 48.9043 0C21.8203 0 0 22.1074 0 49.1914C0 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" />
  </svg>
)

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/work', label: 'Work' },
  { to: '/approach', label: 'Approach' },
  { to: '/toolbox', label: 'Toolbox' },
]

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      {/* Main header */}
      <header className="bg-white border-b border-gray-200 py-3">
        <div className="container">
          <div className="flex items-center justify-between py-1">
            {/* Logo + desktop nav */}
            <div className="flex items-center gap-10">
              <Link to="/" className="flex items-center gap-2 no-underline group shrink-0">
                <LogoSVG />
                <span className="gradient-text text-xl font-bold whitespace-nowrap group-hover:opacity-75 transition-opacity">
                  Stephanie Shields
                </span>
              </Link>

              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `text-gray-700 font-medium no-underline hover:text-gray-900 transition-colors ${
                        isActive ? 'text-gray-900 font-semibold' : ''
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Desktop social icons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://github.com/stephanie-shields"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/steph-shields/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center btn-gradient"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!drawerOpen}
      >
        <div className="flex items-center justify-end p-4 border-b border-gray-100">
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav>
          <ul className="list-none m-0 p-0">
            {[{ to: '/', label: 'Home' }, ...navLinks].map(({ to, label }) => (
              <li key={to} className="border-b border-dashed border-gray-200">
                <NavLink
                  to={to}
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-between px-6 py-4 font-semibold text-gray-800 no-underline hover:text-brand transition-colors"
                >
                  {label}
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
