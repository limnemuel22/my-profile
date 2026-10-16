import { experience } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading index={2}>Experience</SectionHeading>
        <ol>
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-4 border-t border-line py-8 md:grid-cols-[220px_1fr]"
            >
              <p className="font-mono text-xs tracking-widest text-muted uppercase">{job.period}</p>
              <div>
                <h3 className="font-display text-2xl tracking-wide text-paper uppercase">
                  {job.role}
                  <span className="text-gold"> / {job.company}</span>
                </h3>
                <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">{job.location}</p>
                <ul className="mt-4 space-y-2 text-muted">
                  {job.highlights.map((item) => (
                    <li key={item} className="pl-4 before:mr-2 before:-ml-4 before:text-gold before:content-['▸']">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
