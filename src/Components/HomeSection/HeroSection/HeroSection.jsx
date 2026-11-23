import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import image1 from "../../../assets/Hero_Img/hero-img-01.jpg";
import image2 from "../../../assets/Hero_Img/hero-img-02.jpg";
import image3 from "../../../assets/Hero_Img/hero-img-03.jpg";

const stats = [
  { value: "30K+", label: "Community" },
  { value: "15", label: "Countries" },
  { value: "200", label: "Stories" },
];

const topics = [
  "Slow travel",
  "Wearable tech",
  "Wellness rituals",
  "Personal growth",
  "Film photography",
  "Sunday letters",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-clay/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="fade-up lg:col-span-6">
          <p className="eyebrow">Lifestyle, travel &amp; the internet</p>
          <h1 className="mt-5 text-[2.75rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
            A slower way to
            <br />
            <em className="italic text-clay">see the world.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
            I&apos;m Sophia — a marketing professional writing about travel,
            technology, wellness, and the small habits that make a big life.
            Welcome to the journal.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/blog" className="btn-primary">
              Read the journal
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn-outline">
              About Sophia
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <dl className="mt-12 flex divide-x divide-ink/15">
            {stats.map(({ value, label }, index) => (
              <div key={label} className={index === 0 ? "pr-8" : "px-8"}>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-3xl text-ink md:text-4xl">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-up lg:col-span-6" style={{ animationDelay: "0.15s" }}>
          <div className="relative mx-auto w-full max-w-md pb-10 pl-6 lg:ml-auto lg:mr-0 lg:max-w-lg">
            <div
              className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2.25rem] border border-ink/15"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[2.25rem] bg-cream shadow-[0_50px_90px_-60px_rgba(25,23,19,0.55)]">
              <img
                src={image1}
                alt="Sophia exploring a new city"
                className="aspect-[4/5] w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent"
                aria-hidden="true"
              />
              <span className="chip absolute bottom-5 right-5 border-paper/20 bg-paper/15 text-paper">
                Vol. 24 — The slow issue
              </span>
            </div>

            <div className="absolute -bottom-2 left-0 hidden w-36 overflow-hidden rounded-2xl border-4 border-paper shadow-xl sm:block lg:w-44">
              <img
                src={image3}
                alt="A quiet moment on the road"
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="absolute -right-4 -top-7 flex h-28 w-28 items-center justify-center rounded-full bg-paper shadow-[0_18px_40px_-20px_rgba(25,23,19,0.4)] md:h-32 md:w-32">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full animate-[spin_26s_linear_infinite]"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="hero-badge-circle"
                    d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                  />
                </defs>
                <text className="fill-ink-soft text-[7.5px] font-semibold uppercase">
                  <textPath href="#hero-badge-circle" letterSpacing="2">
                    Sophia Ellis · The Journal ·
                  </textPath>
                </text>
              </svg>
              <span className="font-display text-2xl italic text-clay">SE</span>
            </div>

            <img
              src={image2}
              alt=""
              className="absolute -bottom-10 right-8 hidden h-20 w-20 rounded-full border-4 border-paper object-cover shadow-lg md:block"
            />
          </div>
        </div>
      </div>

      {/* Topic marquee */}
      <div className="border-y border-ink/10 py-4">
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center"
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="flex items-center text-[11px] font-semibold uppercase tracking-[0.3em] text-ink-soft/80"
                  >
                    <span className="px-6">{topic}</span>
                    <span className="text-clay" aria-hidden="true">
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
