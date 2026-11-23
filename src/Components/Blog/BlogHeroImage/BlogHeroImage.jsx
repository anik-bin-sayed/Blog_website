import bg from "../../../assets/blog/blog-hero.jpg";

const BlogHeroImage = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/60 to-ink/90"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[30rem] flex-col justify-end py-20 md:min-h-[36rem] md:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blush">
          The journal
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
          Notes on travel, technology
          <br />
          <em className="italic text-blush">&amp; living well.</em>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/70 md:text-base">
          Every story here starts with a question I couldn&apos;t stop thinking
          about — then becomes an excuse to look closer, travel further, or try
          something new.
        </p>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-paper/15 pt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/50">
          <span>12 stories</span>
          <span>Writing since 2016</span>
          <span>Updated weekly</span>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroImage;
