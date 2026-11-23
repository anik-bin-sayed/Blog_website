import image from "../../../assets/about/about-hero-03.jpg";
import { aboutStory } from "../../../data/about";

const StorySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] border border-ink/15"
              aria-hidden="true"
            />
            <img
              src={image}
              alt="Sophia's journey so far"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-55px_rgba(25,23,19,0.55)]"
            />
            <span className="absolute -bottom-4 left-6 rounded-full border border-ink/10 bg-paper px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft shadow-sm">
              Chapter one
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">The story so far</p>
          <h2 className="mt-4 text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            From agency desks
            <br />
            to <em className="italic text-clay">airport windows.</em>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
            {aboutStory.map(({ text }) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
