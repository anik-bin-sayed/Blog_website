import React, { useState } from "react";

const CommentSection = ({ blogId }) => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);

  const submitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setError("Comment cannot be empty");
      return;
    }
    setError(null);
    // Handle comment submission logic here
    alert(`Comment submitted! Blog ID: ${blogId}, Comment: ${comment}`);
    setComment("");
  };

  return (
    <div className="w-full">
      <form onSubmit={submitComment} className="space-y-4">
        <textarea
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-200 focus:border-teal-500 outline-none transition-all resize-y"
          rows="6"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          placeholder="Write your comment here..."
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2 bg-teal-600 text-white font-medium rounded-full shadow-md hover:bg-teal-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Submit Comment
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
