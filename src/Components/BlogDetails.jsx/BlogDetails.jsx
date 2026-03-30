import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { featureBlogs } from "../../data/FeatureBlogs";
import { latestBlog } from "../../data/LatestBlog";
import { AllBlogs } from "../../data/Blog";
import RelatedBlogs from "./RelatedBlogs";
import CommentSection from "./CommentSection";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Combine all blogs and remove duplicate IDs
  const blogs = [...featureBlogs, ...latestBlog, ...AllBlogs];
  const uniqueBlogs = Array.from(
    new Map(blogs.map((b) => [b.id, b])).values(),
  ).sort((a, b) => a.id - b.id);

  const currentIndex = uniqueBlogs.findIndex((b) => b.id.toString() === id);
  const blog = uniqueBlogs[currentIndex];

  // Handle not found
  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Blog not found
          </h2>
          <Link
            to="/blog"
            className="inline-block mt-4 px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Related blogs (exclude current, random 3)
  const relatedBlogs = uniqueBlogs
    .filter((b) => b.id.toString() !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const handlePrevious = () => {
    const prevIndex =
      currentIndex === 0 ? uniqueBlogs.length - 1 : currentIndex - 1;
    navigate(`/blog/${uniqueBlogs[prevIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === uniqueBlogs.length - 1 ? 0 : currentIndex + 1;
    navigate(`/blog/${uniqueBlogs[nextIndex].id}`);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Blog Card */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="p-6 md:p-8 lg:p-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="prose prose-gray max-w-none">
                {blog.description.map((para, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="flex justify-between mt-8 gap-4">
            <button
              onClick={handlePrevious}
              className="flex items-center gap-1 px-4 py-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
            >
              <BsArrowLeftShort size={20} /> Previous
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-4 py-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-all duration-200"
            >
              Next <BsArrowRightShort size={20} />
            </button>
          </div>

          {/* Related Blogs */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Related Blogs
            </h2>
            <RelatedBlogs relatedBlogs={relatedBlogs} />
          </div>

          {/* Comment Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Leave a Comment
            </h2>
            <CommentSection blogId={blog.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
