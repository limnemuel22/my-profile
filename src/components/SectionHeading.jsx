export default function SectionHeading({ children }) {
  return (
    <div className="pdf-heading mb-12">
      <p className="font-mono text-xs tracking-[0.35em] text-gold">//</p>
      <h2 className="mt-2 font-display text-4xl uppercase tracking-[0.12em] text-paper md:text-5xl">
        {children}
      </h2>
      <span className="mt-3 block h-1 w-14 bg-gold" />
    </div>
  )
}
