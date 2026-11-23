import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Link2,
} from "lucide-react";
import { allPosts, findPost } from "../../data/posts";
import Title from "../../utils/Title";
import RelatedBlogs from "./RelatedBlogs";
import CommentSection from "./CommentSection";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = findPost(id);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  if (!blog) {
    return (
      <section className="container-page flex min-h-[55vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">404 — Story not found</p>
        <h1 className="mt-4 text-4xl text-ink sm:text-5xl">
          This page has wandered off.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          The story you are looking for may have moved, or the link might be a
          little dusty. The rest of the journal is right where you left it.
        </p>
        <Link to="/blog" className="btn-primary mt-8">
          Back to the journal
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </section>
    );
  }

  const currentIndex = allPosts.findIndex((post) => post.id === blog.id);
  const previous = allPosts[currentIndex - 1];
  const next = allPosts[currentIndex + 1];

  const relatedBlogs = [
    ...allPosts.filter(
      (post) => post.id !== blog.id && post.category === blog.category,
    ),
    ...allPosts.filter(
      (post) => post.id !== blog.id && post.category !== blog.category,
    ),
  ].slice(0, 3);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article>
      <Title value={`${blog.title} — Sophia Ellis`} />

      <header className="container-page pt-12 md:pt-16">
        <div className="mx-auto max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/60"
          >
            <Link to="/" className="transition-colors hover:text-clay">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog" className="transition-colors hover:text-clay">
              Journal
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-clay">{blog.category}</span>
          </nav>

          <h1 className="mt-6 text-3xl leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            {blog.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
            {blog.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-y border-ink/10 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-sm text-paper">
                SE
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Sophia Ellis</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-soft/60">
                  Writer &amp; marketing strategist
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
              <span>{blog.date}</span>
              <span className="h-3 w-px bg-ink/15" aria-hidden="true" />
              <span>{blog.readTime}</span>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1.5 transition-colors hover:border-ink hover:text-clay"
              >
                {copied ? (
                  <Check size={13} aria-hidden="true" />
                ) : (
                  <Link2 size={13} aria-hidden="true" />
                )}
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-page mt-10">
        <img
          src={blog.image}
          alt={blog.title}
          className="mx-auto aspect-[16/10] w-full max-w-5xl rounded-[2rem] object-cover shadow-[0_50px_100px_-70px_rgba(25,23,19,0.6)] md:aspect-[2/1]"
        />
      </div>

      <div className="container-page">
        <div className="mx-auto mt-12 max-w-3xl">
          {blog.description.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 24)}
              className={`mb-6 text-[1.02rem] leading-8 text-ink-soft md:text-[1.1rem] md:leading-9 ${
                index === 0 ? "lede text-ink" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-10 flex items-center gap-3 border-t border-ink/10 pt-6">
            <span className="chip">{blog.category}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft/70">
              {blog.readTime}
            </span>
          </div>

          {/* Previous / Next */}
          <nav
            className="mt-12 grid gap-4 sm:grid-cols-2"
            aria-label="More stories"
          >
            {previous ? (
              <button
                type="button"
                onClick={() => navigate(`/blog/${previous.id}`)}
                className="group rounded-3xl border border-ink/10 bg-card p-6 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_24px_50px_-40px_rgba(25,23,19,0.5)]"
              >
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                  <ArrowLeft size={13} aria-hidden="true" />
                  Previous story
                </span>
                <span className="mt-3 block font-display text-lg leading-snug text-ink transition-colors group-hover:text-clay">
                  {previous.title}
                </span>
              </button>
            ) : (
              <span aria-hidden="true" />
            )}

            {next && (
              <button
                type="button"
                onClick={() => navigate(`/blog/${next.id}`)}
                className="group rounded-3xl border border-ink/10 bg-card p-6 text-right transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_24px_50px_-40px_rgba(25,23,19,0.5)] sm:col-start-2"
              >
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                  Next story
                  <ArrowRight size={13} aria-hidden="true" />
                </span>
                <span className="mt-3 block font-display text-lg leading-snug text-ink transition-colors group-hover:text-clay">
                  {next.title}
                </span>
              </button>
            )}
          </nav>

        </div>
      </div>

      <section className="container-page mt-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Keep reading</p>
              <h2 className="mt-3 text-3xl text-ink">More from the journal</h2>
            </div>
            <Link to="/blog" className="text-link hidden sm:inline-flex">
              All stories
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8">
            <RelatedBlogs relatedBlogs={relatedBlogs} />
          </div>
        </div>
      </section>

      <div className="container-page">
        <div className="mx-auto mt-16 max-w-3xl border-t border-ink/10 pt-10">
          <p className="eyebrow">The conversation</p>
          <h2 className="mt-3 text-3xl text-ink">Leave a note</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            I read every comment. Kind thoughts, good questions, and book
            recommendations are all welcome.
          </p>
          <div className="mt-8">
            <CommentSection />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
