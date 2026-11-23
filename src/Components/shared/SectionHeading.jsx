const SectionHeading = ({ index, eyebrow, title, description, action }) => (
  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div className="max-w-2xl">
      <p className="eyebrow">
        {index && <span className="mr-3 text-ink-soft/50">{index}</span>}
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
    {action && <div className="shrink-0 md:pb-2">{action}</div>}
  </div>
);

export default SectionHeading;
