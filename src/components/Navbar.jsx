import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import DownloadPdfButton from './DownloadPdfButton'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg tracking-[0.18em] text-paper uppercase">
          Nem
          <span className="text-gold"> Profile</span>
        </a>

        <ul className="hidden items-center gap-7 font-mono text-xs tracking-[0.18em] text-paper uppercase md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-gold">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <DownloadPdfButton variant="nav" />
          </li>
        </ul>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-4 border-t border-line px-5 py-5 font-mono text-sm uppercase tracking-widest md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <DownloadPdfButton variant="nav" />
          </li>
        </ul>
      )}
    </header>
  )
}
