import { skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-mono text-xs tracking-[0.28em] text-gold uppercase">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="slash border border-line bg-ink-soft px-3 py-1.5 font-mono text-xs tracking-wide text-paper"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
