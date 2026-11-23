import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { allPosts, categories } from "../../../data/posts";
import BlogCard from "../../shared/BlogCard";

const blogsPerPage = 9;

const getPaginationItems = (totalPages, currentPage) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  const pages = new Set([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);
  const sorted = [...pages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);
  const items = [];
  sorted.forEach((page, index) => {
    if (index > 0 && page - sorted[index - 1] > 1) items.push("ellipsis");
    items.push(page);
  });
  return items;
};

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.category === activeCategory);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / blogsPerPage),
  );
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * blogsPerPage;
  const visiblePosts = filteredPosts.slice(start, start + blogsPerPage);
  const paginationItems = getPaginationItems(totalPages, safePage);

  const changeCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-4 border-b border-ink/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Archive</p>
            <h2 className="mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
              All stories
            </h2>
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft/70">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "story" : "stories"} in{" "}
            {activeCategory === "All" ? "the journal" : activeCategory}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-ink-soft hover:border-ink hover:text-ink"
                }`}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <nav
            className="mt-14 flex flex-wrap items-center justify-center gap-2"
            aria-label="Pagination"
          >
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/15 px-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:border-ink enabled:hover:text-clay"
            >
              <ArrowLeft size={13} aria-hidden="true" />
              Previous
            </button>

            {paginationItems.map((item, index) =>
              item === "ellipsis" ? (
                <span
                  key={`ellipsis-${index}`}
                  className="px-1 text-sm text-ink-soft/50"
                  aria-hidden="true"
                >
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCurrentPage(item)}
                  aria-current={item === safePage ? "page" : undefined}
                  className={`h-10 w-10 rounded-full border text-xs font-semibold transition-colors ${
                    item === safePage
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink-soft hover:border-ink hover:text-clay"
                  }`}
                >
                  {item}
                </button>
              ),
            )}

            <button
              type="button"
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              disabled={safePage === totalPages}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-ink/15 px-4 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors disabled:cursor-not-allowed disabled:opacity-40 enabled:hover:border-ink enabled:hover:text-clay"
            >
              Next
              <ArrowRight size={13} aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Blogs;
