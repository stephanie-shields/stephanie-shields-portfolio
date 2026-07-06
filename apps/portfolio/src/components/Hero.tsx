import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Astroid, FileCode2, Search, GitBranch, Settings } from 'lucide-react'
import selfPicture from '../assets/self-picture.png'


function TokenRow({ children }: { children: ReactNode }) {
  return <div style={{ paddingLeft: '16px' }}>{children}</div>
}

function TokensPanel() {
  const mono = { fontFamily: "'IBM Plex Mono', monospace" }
  const key = { color: '#8fb8f0' }
  const str = { color: '#f791c1' }
  const num = { color: '#c9a3ff' }
  const punct = { color: '#6f5a78' }
  const swatches = ['#be32d0', '#fd4496', '#0050d8', '#21c834', '#fbdcff']

  const sidebarIcons = [
    { Icon: FileCode2, active: true },
    { Icon: Search, active: false },
    { Icon: GitBranch, active: false },
    { Icon: Settings, active: false },
  ]

  return (
    <div className="flex rounded-lg overflow-hidden shadow-2xl w-full" style={{ background: '#1d1322', border: '1px solid #2e1f34' }}>
      {/* Activity bar */}
      <div className="flex flex-col items-center gap-4 py-4" style={{ background: '#150d18', borderRight: '1px solid #2e1f34', width: '44px', flexShrink: 0 }}>
        {sidebarIcons.map(({ Icon, active }, i) => (
          <Icon key={i} size={16} style={{ color: active ? '#fd4496' : '#6f5a78' }} />
        ))}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between px-4.5 py-3" style={{ borderBottom: '1px solid #2e1f34', ...mono, fontSize: '11px', color: '#6f5a78' }}>
          <span>tokens/stephanie.json</span>
          <span className="flex items-center gap-1.5" style={{ color: '#fd4496' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#fd4496' }} />
            live
          </span>
        </div>
        <div className="px-4.5 py-4.5" style={{ ...mono, fontSize: '12.5px', lineHeight: 1.9 }}>
          <div style={punct}>{'{'}</div>
          <TokenRow><span style={key}>"role"</span><span style={punct}>:</span> <span style={str}>"design ∩ engineering"</span><span style={punct}>,</span></TokenRow>
          <TokenRow><span style={key}>"brand.primary"</span><span style={punct}>:</span> <span style={str}>"#BE32D0"</span><span style={punct}>,</span></TokenRow>
          <TokenRow><span style={key}>"brand.accent"</span><span style={punct}>:</span> <span style={str}>"#FD4496"</span><span style={punct}>,</span></TokenRow>
          <TokenRow><span style={key}>"a11y"</span><span style={punct}>:</span> <span style={str}>"WCAG 2.1 AA, always"</span><span style={punct}>,</span></TokenRow>
          <TokenRow><span style={key}>"users.served"</span><span style={punct}>:</span> <span style={num}>29_000_000</span><span style={punct}>,</span></TokenRow>
          <TokenRow><span style={key}>"status"</span><span style={punct}>:</span> <span style={str}>"open to remarkable teams"</span></TokenRow>
          <div style={punct}>{'}'}</div>
        </div>
        <div className="flex items-center gap-2 px-4.5 py-3.5" style={{ borderTop: '1px solid #2e1f34' }}>
          {swatches.map((color) => (
            <div key={color} className="rounded" style={{ width: '22px', height: '22px', background: color }} />
          ))}
          <span style={{ ...mono, fontSize: '11px', color: '#6f5a78', marginLeft: '6px' }}>brand palette / live</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Gradient orb — original-style, top-right, xl only */}
      <div
        className="absolute hidden xl:block pointer-events-none"
        aria-hidden="true"
        style={{
          width: '1400px',
          height: '1400px',
          clipPath: 'circle(700px)',
          background: 'linear-gradient(90deg, #be32d0 0%, #f35131 100%)',
          top: '-980px',
          right: '-560px',
          overflow: 'hidden',
          zIndex: 0,
          transform: 'skewY(-8deg)',
          transformOrigin: '0',
        }}
      >
        {['rgba(0,0,0,0.1)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.05)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.05)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0)'].map((bg, i) => (
          <span key={i} style={{ position: 'absolute', top: `${192 * i}px`, left: 0, width: '100%', height: '192px', background: bg }} />
        ))}
      </div>

      <div className="container relative pt-10 pb-16" style={{ zIndex: 1 }}>
        <div className="grid xl:[grid-template-columns:1fr_1.3fr] items-center gap-8 xl:gap-12">

          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(190,50,208,0.08), rgba(253,68,150,0.08))',
                border: '1px solid rgba(190,50,208,0.22)',
                color: '#be32d0',
              }}
            >
              <Astroid className="w-2.5 h-2.5" fill="#be32d0" style={{ color: '#be32d0' }} />
              UX Engineer · Washington, D.C.
            </div>

            {/* Heading — 4c marquee style: gradient word + italic accent */}
            <h1 className="font-bold mb-6" style={{ lineHeight: 0.98 }}>
              <span
                className="block"
                style={{
                  fontSize: 'clamp(3.25rem, 7.5vw, 6.5rem)',
                  letterSpacing: '-.02em',
                  background: 'linear-gradient(100deg, #be32d0 10%, #fd4496 55%, #f35131 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                designer
              </span>
              <span
                className="block"
                style={{ fontSize: 'clamp(3.25rem, 7.5vw, 6.5rem)', letterSpacing: '-.02em', color: '#1b1b1b' }}
              >
                who <em style={{ fontStyle: 'italic' }}>ships</em>
              </span>
            </h1>

            {/* Body */}
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              I build the design system, the agentic guardrails, and the front-end that let a
              portfolio of 6+ security products ship consistently — and let AI coding agents
              build to spec.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link to="/work" className="inline-flex btn-gradient btn-gradient-lg">
                See My Work
              </Link>
              <a
                href="https://www.linkedin.com/in/steph-shields/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-lg font-semibold no-underline hover:opacity-75 transition-opacity"
                style={{ color: '#be32d0' }}
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: photo + product mockup */}
          <div className="hidden xl:flex items-center pt-8">
            {/* Profile photo card */}
            <div className="relative shrink-0 z-10" style={{ width: '252px' }}>
              <img
                src={selfPicture}
                alt="Stephanie Shields"
                className="w-full block rounded-2xl shadow-lg"
                style={{ height: '302px', objectFit: 'cover' }}
              />

              {/* Redline: outset border (gradient) */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: '-12px', top: '-12px', right: '-12px', bottom: '-12px',
                  borderRadius: '12px',
                  padding: '1.5px',
                  background: 'linear-gradient(180deg, #fd4496 0%, #be32d0 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              {/* Redline: corner ticks */}
              <div
                className="absolute bg-white pointer-events-none"
                style={{ left: '-4px', top: '-16px', width: '8px', height: '8px', border: '1.5px solid #fd4496' }}
              />
              <div
                className="absolute bg-white pointer-events-none"
                style={{ right: '-4px', bottom: '-16px', width: '8px', height: '8px', border: '1.5px solid #be32d0' }}
              />
              {/* Wave badge */}
              <div
                className="absolute flex items-center justify-center text-3xl bg-white rounded-full shadow-md border border-gray-100"
                style={{ width: '68px', height: '68px', left: '-50px', bottom: '52px' }}
              >
                👋
              </div>
            </div>

            {/* Product mockup — overlaps photo */}
            <div className="z-0 flex-1 min-w-0" style={{ marginLeft: '-40px', marginTop: '-96px' }}>
              <TokensPanel />
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
