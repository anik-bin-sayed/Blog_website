import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import image1 from "../../../assets/about/about-hero-01.jpg";
import image2 from "../../../assets/about/about-hero-02.jpg";

const stats = [
  { value: "15", label: "Countries explored" },
  { value: "10+", label: "Years in marketing" },
  { value: "200", label: "Stories published" },
  { value: "30", label: "Books a year" },
  { value: "3", label: "Languages spoken" },
];

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-clay/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">About Sophia</p>
            <h1 className="mt-5 text-[2.75rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
              Marketing mind.
              <br />
              <em className="italic text-clay">Wanderer&apos;s heart.</em>
            </h1>
            <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
              <p>
                I&apos;m Sophia Ellis — a marketing professional with a zest for
                life and an insatiable curiosity about the world. This journal
                is where storytelling, discovery, and personal growth converge.
              </p>
              <p>
                For the past decade I&apos;ve built brands by day and collected
                stories the rest of the time: from quiet kitchens in Lisbon to
                the latest quietly brilliant gadget on my desk.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/blog" className="btn-primary">
                Read the journal
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Say hello
              </Link>
            </div>
            <p className="mt-10 font-display text-3xl italic text-clay">
              Sophia
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none lg:pl-10">
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-cream"
                aria-hidden="true"
              />
              <img
                src={image1}
                alt="Sophia travelling"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_50px_90px_-60px_rgba(25,23,19,0.55)]"
              />
              <div className="absolute -bottom-10 -left-4 w-40 overflow-hidden rounded-2xl border-4 border-paper shadow-xl sm:-left-8 sm:w-52">
                <img
                  src={image2}
                  alt="Working on a new story"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <span className="absolute -right-3 top-6 rounded-full border border-ink/10 bg-paper px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft shadow-sm sm:-right-5">
                10 years — one journal
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream/50 py-12">
        <div className="container-page grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-4xl text-ink md:text-5xl">
                {value}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <Quote
              size={32}
              strokeWidth={1}
              className="mx-auto text-clay"
              aria-hidden="true"
            />
            <blockquote className="mt-6 font-display text-2xl italic leading-snug text-ink sm:text-3xl md:text-4xl">
              &ldquo;Travel makes one modest. You see what a tiny place you
              occupy in the world.&rdquo;
            </blockquote>
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-soft/70">
              Gustave Flaubert
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
