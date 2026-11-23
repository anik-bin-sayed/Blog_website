import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PageNotFound = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[68vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">Error 404</p>

        <h1 className="fade-up mt-4 font-display text-[6.5rem] leading-none tracking-tight text-ink sm:text-[8rem] md:text-[10rem]">
          4<span className="italic text-clay">0</span>4
        </h1>

        <div className="fade-up" style={{ animationDelay: "0.15s" }}>
          <h2 className="text-3xl text-ink sm:text-4xl">
            This page took a wrong turn.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
            The link may be old, the story may have moved, or the address might
            have a typo. Either way, there is plenty of good reading nearby.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-primary">
              <ArrowLeft size={14} aria-hidden="true" />
              Go home
            </Link>
            <Link to="/blog" className="btn-outline">
              Read the journal
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
