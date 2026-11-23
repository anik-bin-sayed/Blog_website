import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { featuredPosts } from "../../../data/posts";
import BlogCard from "../../shared/BlogCard";
import SectionHeading from "../../shared/SectionHeading";

const FeatureBlog = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          index="01"
          eyebrow="Featured stories"
          title={
            <>
              Reader favourites,
              <br />
              <em className="italic text-clay">hand-picked.</em>
            </>
          }
          description="Three pieces I keep coming back to — on seeing more, owning less, and living a little slower."
          action={
            <Link to="/blog" className="text-link">
              All stories
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BlogCard post={featuredPosts[0]} variant="overlay" />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            {featuredPosts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} variant="compact" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlog;
