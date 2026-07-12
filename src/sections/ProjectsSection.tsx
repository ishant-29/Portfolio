import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const og = (repo: string) => `https://opengraph.githubassets.com/1/ishant-29/${repo}`

const PROJECTS = [
  {
    number: '01',
    name: 'NexusMind',
    category: 'Generative AI',
    href: 'https://nexus-mind-multi-agent-ai-chat-plat.vercel.app/',
    linkLabel: 'Live Project',
    images: [og('NexusMind-Multi-Agent-AI-Chat-Platform'), '/nexus2.webp', '/nexus.webp'],
    tileBg: ['#EAEDF8', '#EEF2F9'],
  },
  {
    number: '02',
    name: 'EpiCast',
    category: 'Deep Learning',
    href: 'https://github.com/ishant-29/EpiCast',
    linkLabel: 'View Code',
    images: [og('EpiCast'), '/epicast1.webp', '/epicast2.webp'],
    tileBg: ['#F7F3ED', '#EEEFE8'],
  },
  {
    number: '03',
    name: 'DAMA',
    category: 'Machine Learning',
    href: 'https://github.com/ishant-29/DAMA',
    linkLabel: 'View Code',
    images: [og('DAMA'), '/dama2.webp', '/dama1.webp'],
    tileBg: ['#EAEEF7', '#E6EBF3'],
  },
  {
    number: '04',
    name: 'Droid',
    category: 'Cross-Platform',
    href: 'https://github.com/ishant-29/Droid',
    linkLabel: 'View Code',
    images: [og('Droid'), '/droid2.webp', '/droid1.webp'],
    tileBg: ['#030618', '#010315'],
  },
  {
    number: '05',
    name: 'Chess Manager',
    category: 'Desktop App',
    href: 'https://github.com/ishant-29/Chess_tournament_manager',
    linkLabel: 'View Code',
    images: [og('Chess_tournament_manager'), '/chess2.webp', '/chess.webp'],
    tileBg: ['#F8F8FC', '#F7F7FD'],
  },
]

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof PROJECTS)[number]
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="sticky top-24 h-[85vh]">
      <motion.div
        style={{ scale, top: `${index * 20}px` }}
        className="relative origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 px-2 pb-4 sm:px-4 sm:pb-6">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, min(10vw, 15vh), 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {project.category}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.href} label={project.linkLabel} />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.images[0]}
              alt={`${project.name} preview`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, min(16vw, 19vh), 230px)' }}
            />
            <img
              src={project.images[1]}
              alt={`${project.name} visual`}
              loading="lazy"
              className="w-full rounded-[40px] object-contain sm:rounded-[50px] md:rounded-[60px]"
              style={{
                height: 'clamp(160px, min(22vw, 27vh), 340px)',
                background: project.tileBg[0],
              }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.images[2]}
              alt={`${project.name} visual`}
              loading="lazy"
              className="h-full w-full rounded-[40px] object-contain sm:rounded-[50px] md:rounded-[60px]"
              style={{ background: project.tileBg[1] }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
