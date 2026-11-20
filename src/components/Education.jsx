import { education } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="border-t border-line">
      <div className="pdf-keep mx-auto max-w-6xl px-5 py-20">
        <SectionHeading>Education</SectionHeading>
        <ol>
          {education.map((item) => (
            <li key={item.school} className="pdf-keep grid gap-2 border-t border-line py-8 md:grid-cols-[220px_1fr]">
              <p className="font-mono text-xs tracking-widest text-paper uppercase">{item.period}</p>
              <div>
                <h3 className="font-display text-2xl tracking-wide text-paper uppercase">{item.degree}</h3>
                <p className="mt-1 text-gold">{item.school}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
