import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import image from "../../../assets/introduce/who-am-img.jpg";
import { introduce } from "../../../data/introduce";

const Introduce = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] bg-cream"
              aria-hidden="true"
            />
            <img
              src={image}
              alt="Sophia Ellis"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-55px_rgba(25,23,19,0.55)]"
            />
            <span className="absolute -bottom-4 right-6 rounded-full border border-ink/10 bg-paper px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft shadow-sm">
              Est. 2016 — the journal
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">Hello, I&apos;m Sophia</p>
          <h2 className="mt-4 text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            The person behind
            <br />
            <em className="italic text-clay">the posts.</em>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
            {introduce[0].description.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8 font-display text-3xl italic text-clay">
            Sophia
          </p>

          <Link to="/about" className="btn-outline mt-8">
            Read my story
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
