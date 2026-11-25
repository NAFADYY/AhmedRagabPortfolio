/**
 * Consistent section header: mono index label + large display heading + optional lead.
 */
const SectionHeading = ({ index, eyebrow, title, lead, align = 'start', as: Tag = 'h2', id, children }) => (
  <header className={`flex flex-col gap-5 ${align === 'center' ? 'items-center text-center' : ''}`} data-reveal>
    <p className="eyebrow flex items-center gap-3">
      {index && <span className="text-accent-text">{index}</span>}
      <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
      <span>{eyebrow}</span>
    </p>
    <Tag id={id} className="font-display text-balance text-[clamp(2.1rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em] max-w-4xl">
      {title}
    </Tag>
    {lead && <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{lead}</p>}
    {children}
  </header>
);

export default SectionHeading;
