import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="flex flex-col border border-line border-l-4 border-l-gold bg-ink-soft p-6 transition hover:border-gold hover:border-l-rock"
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-paper">
                QUEST {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-wide text-paper uppercase">{project.name}</h3>
              {project.company ? <p className="mt-1 font-mono text-xs tracking-widest text-gold uppercase">{project.company}</p> : null}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paper">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="font-mono text-[10px] tracking-widest text-gold uppercase">
                    {tag}
                  </li>
                ))}
              </ul>
              {project.live && (
                <div className="mt-6 flex gap-4 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs tracking-widest text-paper uppercase hover:text-gold"
                  >
                    Live <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
