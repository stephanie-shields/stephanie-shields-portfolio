import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import selfPicture from '../assets/self-picture.png'

const PolygonSVG = () => (
  <svg width="120" height="113" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.37 44.18 59.9 3.84l55.53 40.34-21.21 65.28H25.58L4.37 44.18Z"
      stroke="#fff"
      strokeOpacity=".45"
      strokeWidth="7"
    />
  </svg>
)

function ProgressItem({
  label, status, statusColor, progress, barColor,
}: {
  label: string; status: string; statusColor: string; progress: number; barColor: string
}) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</span>
        <span className="text-sm font-medium" style={{ color: statusColor }}>{status}</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div className="h-full rounded-full" style={{ width: `${progress}%`, background: barColor }} />
      </div>
    </div>
  )
}

function ProductMockup() {
  const chips = ['#f472b6', '#d946b0', '#a855f7', '#818cf8', '#60a5fa', '#38bdf8', '#22d3ee']
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl w-full" style={{ background: '#0d0f1e' }}>
      <div className="flex items-center justify-between px-5 py-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center gap-3.5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>vellox · reverser</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#22d3ee' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22d3ee' }} />
          Running
        </div>
      </div>
      <div className="p-5">
        <div className="mb-5">
          <h3 className="text-white font-bold text-base mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
            Job #4821 — sample.dll
          </h3>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>
            DLL exports · 14 selected · resume enabled
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <ProgressItem label="Unpack" status="Done" statusColor="rgba(255,255,255,0.55)" progress={100} barColor="#22d3ee" />
          <ProgressItem label="Disassemble" status="Done" statusColor="#22d3ee" progress={100} barColor="#22d3ee" />
          <ProgressItem label="Detect signatures" status="64%" statusColor="#f472b6" progress={64} barColor="#f472b6" />
        </div>
        <div className="flex gap-1.5">
          {chips.map((color, i) => (
            <div key={i} className="flex-1 rounded-full" style={{ height: '9px', background: color }} />
          ))}
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

      <div className="container relative py-16" style={{ zIndex: 1 }}>
        <div className="grid xl:[grid-template-columns:1fr_1.15fr] items-center gap-8 xl:gap-12">

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
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#be32d0' }} />
              Booz Allen · Vellox Agentic Cyber
            </div>

            {/* Heading — PT Serif + original highlight */}
            <h1 className="font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
              <span
                className="block text-lg font-light text-gray-500 mb-3"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                👋 Hello, I'm Stephanie
              </span>
              <mark className="hero-highlight bg-transparent">
                Scaling design across an agentic cyber product suite
              </mark>
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
            <div className="relative shrink-0 z-10" style={{ width: '200px' }}>
              <div
                className="absolute pointer-events-none"
                style={{ top: '-48px', left: '-72px', animation: 'polygonFloat 3s ease alternate-reverse infinite' }}
              >
                <PolygonSVG />
              </div>
              <img
                src={selfPicture}
                alt="Stephanie Shields"
                className="w-full block rounded-2xl shadow-lg"
                style={{ objectFit: 'cover' }}
              />
              {/* Heart badge */}
              <div
                className="absolute flex items-center justify-center text-2xl bg-white rounded-full shadow-md border border-gray-100"
                style={{ width: '56px', height: '56px', left: '-36px', bottom: '48px' }}
              >
                💜
              </div>
            </div>

            {/* Product mockup — overlaps photo */}
            <div className="z-0 flex-1 min-w-0" style={{ marginLeft: '-20px', marginTop: '32px' }}>
              <ProductMockup />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes polygonFloat {
          0%   { transform: scale(1) rotate(0deg); }
          100% { opacity: 0.5; transform: scale(1.15) rotate(20deg); }
        }
      `}</style>
    </section>
  )
}
