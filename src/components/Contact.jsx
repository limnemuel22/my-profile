import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

const contacts = [
  {
    label: 'Gmail',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: profile.social.linkedin.replace('https://www.', ''),
    href: profile.social.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/limnemuel22',
    href: profile.social.github,
    icon: Github,
  },
  {
    label: 'Contact no',
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index={6}>Contact</SectionHeading>
        <h3 className="max-w-2xl font-display text-4xl tracking-[0.08em] text-paper uppercase md:text-5xl">
          Drop a line.
        </h3>
        <p className="mt-5 max-w-xl text-muted">
          Open to senior frontend, Angular, and full-stack roles. Email, call, or message me here.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-start gap-4 border border-line border-l-4 border-l-gold bg-ink-soft p-5 transition hover:border-gold hover:border-l-rock"
                >
                  <Icon size={20} className="mt-0.5 shrink-0 text-gold" />
                  <span>
                    <span className="block font-mono text-xs tracking-widest text-muted uppercase">{item.label}</span>
                    <span className="mt-1 block break-all text-paper">{item.value}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
