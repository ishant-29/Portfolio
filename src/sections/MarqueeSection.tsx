import { useEffect, useRef, useState } from 'react'

interface MarqueeCard {
  label: string
  title: string
  meta: string
  gradient: string
}

const GRADIENTS = {
  purple: 'linear-gradient(135deg, #1E0B38 0%, #0C0C0C 65%)',
  magenta: 'linear-gradient(135deg, #33082C 0%, #0C0C0C 65%)',
  blue: 'linear-gradient(135deg, #0A1A33 0%, #0C0C0C 65%)',
  orange: 'linear-gradient(135deg, #33190A 0%, #0C0C0C 65%)',
  teal: 'linear-gradient(135deg, #0A2E24 0%, #0C0C0C 65%)',
}

// Row 1 — projects & experience
const ROW_1: MarqueeCard[] = [
  {
    label: 'Generative AI',
    title: 'NexusMind',
    meta: 'Multi-agent AI chat platform — 4 agents, RAG document search, SSE streaming',
    gradient: GRADIENTS.purple,
  },
  {
    label: 'Deep Learning',
    title: 'EpiCast',
    meta: 'Disease-outbreak forecasting with a Transformer + LSTM hybrid ensemble',
    gradient: GRADIENTS.teal,
  },
  {
    label: 'Machine Learning',
    title: 'DAMA',
    meta: 'NSE-500 trading signal engine — XGBoost validation, 61% backtested win rate',
    gradient: GRADIENTS.blue,
  },
  {
    label: 'Cross-Platform',
    title: 'Droid',
    meta: 'Secure P2P file sharing in Flutter — TLS, mDNS discovery, resumable transfers',
    gradient: GRADIENTS.magenta,
  },
  {
    label: 'Desktop App',
    title: 'Chess Manager',
    meta: 'Swiss & round-robin tournament engine with tie-breaks and PDF reports',
    gradient: GRADIENTS.orange,
  },
  {
    label: 'Experience',
    title: 'SDE-1 · MetaWurks',
    meta: 'AI-driven product development and data initiatives — Apr 2026 to present',
    gradient: GRADIENTS.blue,
  },
  {
    label: 'Experience',
    title: 'AI Intern · cHeal',
    meta: '16+ years of unstructured IDSP outbreak reports turned into ML-ready datasets',
    gradient: GRADIENTS.purple,
  },
]

// Row 2 — stack, education & impact
const ROW_2: MarqueeCard[] = [
  {
    label: 'Core Stack',
    title: 'Python · PyTorch',
    meta: 'Pandas, NumPy, Scikit-learn — models that hold up in the real world',
    gradient: GRADIENTS.blue,
  },
  {
    label: 'GenAI Toolkit',
    title: 'LLMs · RAG · Agents',
    meta: 'Groq Llama 3.3, OpenAI embeddings, semantic search, agent orchestration',
    gradient: GRADIENTS.magenta,
  },
  {
    label: 'Backend',
    title: 'FastAPI · Postgres',
    meta: 'Redis caching, MongoDB Atlas, microservices, scheduled pipelines',
    gradient: GRADIENTS.teal,
  },
  {
    label: 'Frontend',
    title: 'React · TypeScript',
    meta: 'Next.js 14, Tailwind CSS, Framer Motion — interfaces people enjoy',
    gradient: GRADIENTS.purple,
  },
  {
    label: 'Cloud',
    title: 'AWS · GCP · Azure',
    meta: 'Deploying models, data pipelines and full-stack AI products',
    gradient: GRADIENTS.orange,
  },
  {
    label: 'Education',
    title: 'MCA · PES University',
    meta: 'CGPA 8.57 — C.N. Rao Merit Scholar, Semesters 1 & 3',
    gradient: GRADIENTS.blue,
  },
  {
    label: 'Impact',
    title: '641 Districts',
    meta: '35 states, 14 disease categories — one clean epidemiological dataset',
    gradient: GRADIENTS.magenta,
  },
]

// Bright glow hue for each gradient's first color stop
const GLOW_COLORS: Record<string, string> = {
  '#1E0B38': 'rgba(139, 92, 246, 0.32)', // purple
  '#33082C': 'rgba(236, 72, 153, 0.30)', // magenta
  '#0A1A33': 'rgba(59, 130, 246, 0.30)', // blue
  '#33190A': 'rgba(249, 115, 22, 0.30)', // orange
  '#0A2E24': 'rgba(45, 212, 191, 0.30)', // teal
}

function Tile({ card, seed }: { card: MarqueeCard; seed: number }) {
  const firstStop = card.gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] ?? '#1E0B38'
  const glow = GLOW_COLORS[firstStop] ?? GLOW_COLORS['#1E0B38']
  return (
    <div
      className="relative flex h-[270px] w-[420px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-[#D7E2EA]/15 p-7"
      style={{ background: card.gradient }}
    >
      <div
        className="tile-glow"
        aria-hidden
        style={{
          background: `radial-gradient(circle at center, ${glow} 0%, transparent 70%)`,
          animationDuration: `${10 + (seed % 5) * 2}s`,
          animationDelay: `${(seed % 7) * -1.9}s`,
        }}
      />
      <span className="relative text-xs font-light uppercase tracking-[0.25em] text-[#D7E2EA]/50">
        {card.label}
      </span>
      <div className="relative">
        <h3 className="hero-heading text-[1.7rem] font-bold uppercase leading-tight">
          {card.title}
        </h3>
        <p className="mt-2 text-sm font-light leading-relaxed text-[#D7E2EA]/60">
          {card.meta}
        </p>
      </div>
    </div>
  )
}

function MarqueeRow({
  cards,
  direction,
  offset,
  initialShift = 0,
}: {
  cards: MarqueeCard[]
  direction: 1 | -1
  offset: number
  initialShift?: number
}) {
  const tripled = [...cards, ...cards, ...cards]
  return (
    <div
      className="flex w-max gap-3"
      style={{
        transform: `translateX(${direction * (offset - 200) + initialShift}px)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((card, i) => (
        <Tile key={i} card={card} seed={i} />
      ))}
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-3 overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <MarqueeRow cards={ROW_1} direction={1} offset={offset} />
      {/* pre-shifted left so its right-drifting start position never exposes a gap */}
      <MarqueeRow cards={ROW_2} direction={-1} offset={offset} initialShift={-1296} />
    </section>
  )
}
