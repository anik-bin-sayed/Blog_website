import { passion } from "../../../data/Passion";
import SectionHeading from "../../shared/SectionHeading";

const Passion = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="What moves me"
          title={
            <>
              Four passions,
              <br />
              <em className="italic text-clay">one journal.</em>
            </>
          }
          description="The things that fill my weekends, fill my notebooks, and quietly shape how I see the world."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {passion.map(({ id, icon: Icon, title, description }, index) => (
            <div
              key={id}
              className="group relative flex flex-col rounded-[1.75rem] border border-ink/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_28px_60px_-40px_rgba(25,23,19,0.45)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-paper">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-display text-sm italic text-ink-soft/40">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-8 text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passion;
