import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading>About</SectionHeading>
        <div className="space-y-5 text-base leading-relaxed text-paper sm:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="border-t-2 border-gold pt-4">
                <dt className="font-display text-3xl tracking-wide text-gold uppercase">{stat.value}</dt>
                <dd className="mt-2 font-mono text-xs tracking-widest text-paper uppercase">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
