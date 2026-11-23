import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Meta = ({ post, className = "" }) => (
  <div
    className={`flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft/80 ${className}`}
  >
    <span>{post.date}</span>
    <span className="h-px w-4 bg-ink/20" aria-hidden="true" />
    <span>{post.readTime}</span>
  </div>
);

const ArrowDot = ({ className = "" }) => (
  <span
    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-paper ${className}`}
  >
    <ArrowUpRight size={15} aria-hidden="true" />
  </span>
);

const BlogCard = ({ post, variant = "default" }) => {
  const href = `/blog/${post.id}`;

  if (variant === "overlay") {
    return (
      <article className="group relative h-full overflow-hidden rounded-[2rem] bg-ink">
        <Link to={href} className="block h-full">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[34rem]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
            aria-hidden="true"
          />
          <span className="chip absolute left-5 top-5 border-paper/20 bg-paper/15 text-paper">
            {post.category}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-6 text-paper md:p-8">
            <Meta post={post} className="text-paper/60" />
            <h3 className="mt-3 font-display text-2xl leading-tight md:text-3xl">
              {post.title}
            </h3>
            <p className="mt-3 hidden max-w-lg text-sm leading-relaxed text-paper/70 md:block">
              {post.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blush">
              Read story
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group flex flex-1 gap-4 rounded-[1.5rem] border border-ink/10 bg-card p-3 transition-all duration-300 hover:border-ink/20 hover:shadow-[0_24px_50px_-36px_rgba(25,23,19,0.45)]">
        <Link
          to={href}
          className="relative block w-28 shrink-0 overflow-hidden rounded-[1.1rem] sm:w-36"
        >
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full min-h-28 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="flex flex-1 flex-col py-2 pr-2">
          <Meta post={post} />
          <h3 className="mt-2 font-display text-lg leading-snug text-ink transition-colors duration-300 group-hover:text-clay">
            <Link to={href}>{post.title}</Link>
          </h3>
          <div className="mt-auto flex items-center justify-between pt-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft/80">
              {post.category}
            </span>
            <ArrowDot />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-card p-3 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_28px_60px_-36px_rgba(25,23,19,0.45)]">
      <Link
        to={href}
        className="relative block overflow-hidden rounded-[1.25rem]"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="chip absolute left-3 top-3">{post.category}</span>
      </Link>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <Meta post={post} />
        <h3 className="mt-3 font-display text-xl leading-snug text-ink">
          <Link
            to={href}
            className="transition-colors duration-300 group-hover:text-clay"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft/80 transition-colors group-hover:text-clay">
            Read story
          </span>
          <ArrowDot />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
