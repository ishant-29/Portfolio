import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'Machine Learning',
    description:
      'End-to-end model development — from data preparation and feature engineering to training, evaluation and tuning models that hold up in the real world.',
  },
  {
    number: '02',
    name: 'Generative AI',
    description:
      'LLM-powered products — multi-agent systems, RAG pipelines and semantic search that turn cutting-edge models into dependable, useful tools.',
  },
  {
    number: '03',
    name: 'Data Engineering',
    description:
      'Automated pipelines that turn messy, unstructured sources into clean, ML-ready datasets — built for scale, reproducibility and downstream analytics.',
  },
  {
    number: '04',
    name: 'Forecasting & Analytics',
    description:
      'Predictive modeling, risk scoring and time-series forecasting systems that help teams see what is coming and act with confidence.',
  },
  {
    number: '05',
    name: 'AI Product Development',
    description:
      'Taking AI features from prototype to production — APIs, dashboards and full-stack apps that put intelligent systems in front of real users.',
  },
]

export default function ServicesSection() {
  return (
    <section className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div className="flex flex-col gap-4 border-b border-[#0C0C0C]/15 py-8 sm:flex-row sm:gap-10 sm:py-10 md:gap-16 md:py-12">
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 pt-2">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
