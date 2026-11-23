import BlogCard from "../shared/BlogCard";

const RelatedBlogs = ({ relatedBlogs }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {relatedBlogs?.map((blog) => (
        <BlogCard key={blog.id} post={blog} />
      ))}
    </div>
  );
};

export default RelatedBlogs;
