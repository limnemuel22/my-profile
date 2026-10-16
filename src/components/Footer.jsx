import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-xs tracking-widest text-paper uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.fullName} · {profile.name} · {profile.shortName}
        </p>
        <p>Nem Profile</p>
      </div>
    </footer>
  )
}
