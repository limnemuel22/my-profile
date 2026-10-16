import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

function GitHubIcon({ size = 20, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 10.0.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.936.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  )
}

function LinkedInIcon({ size = 20, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

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
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/limnemuel22',
    href: profile.social.github,
    icon: GitHubIcon,
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
