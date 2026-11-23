import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { latestPosts } from "../../../data/posts";
import BlogCard from "../../shared/BlogCard";
import SectionHeading from "../../shared/SectionHeading";

const LatestBlog = () => {
  return (
    <section className="border-y border-ink/10 bg-cream/50 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="From the journal"
          title={
            <>
              Latest <em className="italic text-clay">stories.</em>
            </>
          }
          description="Fresh notes on places, tools, habits, and everything in between."
          action={
            <Link to="/blog" className="text-link">
              Browse the journal
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
