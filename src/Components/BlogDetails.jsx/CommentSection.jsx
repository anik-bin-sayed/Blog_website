import React, { useState } from 'react'
import './CommentSection.css'

const CommentSection = ({ blogId }) => {
    const [comment, setComment] = useState("");

    const submitComment = (e) => {
        e.preventDefault();
        // Handle comment submission logic here
        alert(`Comment submitted! Blog ID: ${blogId}, Comment: ${comment}`);
        setComment("");
    }
    return (

        <div className="comment-section pt-4">
            <form onSubmit={submitComment}>
                <textarea
                    className="w-full p-2 rounded-md focus:outline-none"
                    rows="6"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    placeholder="Write your comment here..."
                ></textarea>
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 cursor-pointer"
                >
                    Submit Comment
                </button>
            </form>
        </div>

    )
}

export default CommentSection