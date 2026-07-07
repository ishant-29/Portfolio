import FadeIn from '../components/FadeIn'

const INTERNSHIPS = [
  {
    number: '01',
    company: 'MetaWurks',
    role: 'SDE-1',
    period: 'Apr 2026 — Present',
    description:
      'Contributing to AI-driven product development and data initiatives as part of the core engineering team.',
  },
  {
    number: '02',
    company: 'cHeal',
    role: 'AI & Data Intern',
    period: 'Jan 2026 — Mar 2026',
    description:
      'Built an automated Python pipeline that extracted and structured 16+ years of unstructured IDSP disease-outbreak PDF reports into clean, ML-ready datasets — 641 districts, 35 states, 14 disease categories — powering epidemic forecasting and risk-scoring models with a faculty research mentor.',
  },
]

const EDUCATION = [
  {
    degree: 'MCA',
    school: 'PES University, Bengaluru',
    period: '2024 — 2026',
    score: 'CGPA 8.57 · C.N. Rao Scholar (Sem 1 & 3)',
  },
  {
    degree: 'BCA',
    school: 'NIMS University, Jaipur',
    period: '2021 — 2024',
    score: 'CGPA 8.51',
  },
  {
    degree: 'Class XII',
    school: 'RBSE',
    period: '2021',
    score: '96.2%',
  },
  {
    degree: 'Class X',
    school: 'RBSE',
    period: '2019',
    score: '84.83%',
  },
]

const ACHIEVEMENTS = [
  'C.N. Rao Merit Scholarship — Sem 1 & 3',
  'Hindustan Scout & Guide — State Award',
  'Kabaddi — State Level',
  'Chess & Cricket — Academic Level',
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {INTERNSHIPS.map((job, i) => (
          <FadeIn key={job.number} delay={i * 0.1}>
            <div className="flex flex-col gap-4 border-b border-[#D7E2EA]/15 py-8 sm:flex-row sm:gap-10 sm:py-10 md:gap-16 md:py-12">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {job.number}
              </span>
              <div className="flex flex-col gap-3 pt-2">
                <h3
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {job.role} · {job.company}
                </h3>
                <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-50 sm:text-sm">
                  {job.period}
                </span>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#D7E2EA] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {job.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.15}>
          <h3 className="mb-6 mt-16 text-sm font-light uppercase tracking-[0.3em] text-[#D7E2EA] opacity-50 sm:mt-20">
            Education
          </h3>
        </FadeIn>
        <div className="grid gap-x-10 sm:grid-cols-2">
          {EDUCATION.map((edu, i) => (
            <FadeIn key={edu.degree} delay={0.2 + i * 0.08}>
              <div className="flex flex-col gap-1 border-b border-[#D7E2EA]/15 py-6 sm:py-8">
                <h4
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 1.8vw, 1.6rem)' }}
                >
                  {edu.degree}
                </h4>
                <span className="font-light text-[#D7E2EA] opacity-60">
                  {edu.school} · {edu.period}
                </span>
                <span className="text-sm font-light uppercase tracking-wider text-[#D7E2EA] opacity-50">
                  {edu.score}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <h3 className="mb-6 mt-16 text-sm font-light uppercase tracking-[0.3em] text-[#D7E2EA] opacity-50 sm:mt-20">
            Achievements
          </h3>
        </FadeIn>
        <div className="flex flex-wrap gap-3">
          {ACHIEVEMENTS.map((achievement, i) => (
            <FadeIn key={achievement} delay={0.25 + i * 0.08}>
              <span className="inline-block rounded-full border border-[#D7E2EA]/25 px-5 py-2 text-xs font-light uppercase tracking-wider text-[#D7E2EA] sm:text-sm">
                {achievement}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
