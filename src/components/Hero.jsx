import { ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import DownloadPdfButton from './DownloadPdfButton'

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs tracking-[0.28em] text-gold uppercase">
          <span className="inline-block size-2 animate-pulse bg-gold" />
          Player online
        </p>
        <h1 className="font-display text-6xl leading-[0.9] tracking-[0.06em] text-paper uppercase sm:text-8xl">
          Nemuel
          <span className="block text-gold">Lim</span>
        </h1>
        <p className="mt-4 font-display text-lg tracking-[0.16em] text-paper uppercase">
          {profile.fullName}
        </p>
        <p className="mt-2 font-mono text-sm tracking-[0.2em] text-paper uppercase">
          {profile.shortName} · Nem Profile
        </p>
        <p className="mt-5 text-xl font-medium tracking-wide text-gold-soft uppercase">
          {profile.title}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper sm:text-lg">
          {profile.headline}
        </p>
        <p className="mt-5 flex items-center gap-2 font-mono text-sm text-paper uppercase">
          <MapPin size={16} className="text-gold" />
          {profile.location}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <DownloadPdfButton />
          <a
            href="#contact"
            className="slash inline-flex items-center border border-line px-6 py-3 font-display text-sm tracking-[0.18em] text-paper uppercase transition hover:border-gold hover:text-gold"
          >
            Press start
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="slash inline-flex items-center gap-1 border border-line px-6 py-3 font-display text-sm tracking-[0.18em] text-paper uppercase transition hover:border-gold hover:text-gold"
          >
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute top-4 left-4 h-full w-full border border-rock" />
        <div className="absolute -top-3 -right-3 h-full w-full border border-gold" />
        <img
          src={profile.avatar}
          alt={`Portrait of ${profile.name}`}
          className="relative aspect-[4/5] w-full object-cover object-[center_18%] grayscale-[0.15] contrast-110"
        />
        {/* <p className="absolute right-3 bottom-3 font-mono text-[10px] tracking-[0.3em] text-gold uppercase">
          LVL 100
        </p> */}
      </div>
    </section>
  )
}
