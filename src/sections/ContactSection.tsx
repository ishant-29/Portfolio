import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import ContactButton from '../components/ContactButton'
import FadeIn from '../components/FadeIn'

const SOCIAL_LINKS = [
  { icon: Mail, href: 'mailto:bishnoiishu00@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+917597619150', label: 'Phone' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ishant-bishnoi', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/ishant-29', label: 'GitHub' },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-[#0C0C0C] px-5 py-24 text-center sm:px-8 sm:py-32 md:px-10"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="mt-8 max-w-md font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
          style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
        >
          open to ai engineering roles, collaborations and interesting problems
        </p>
      </FadeIn>

      <FadeIn delay={0.3} y={20} className="mt-12">
        <ContactButton />
      </FadeIn>

      <FadeIn delay={0.45} y={20} className="mt-10">
        <div className="flex items-center gap-4 sm:gap-6">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="rounded-full border border-[#D7E2EA]/25 p-3 text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:p-4"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </FadeIn>

      <p className="mt-16 text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-40">
        © 2026 Ishant Bishnoi — AI Engineer
      </p>
    </section>
  )
}
