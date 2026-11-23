import { useState } from "react";
import { Check, Send } from "lucide-react";

const CommentSection = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitComment = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      setError("Please add your name first.");
      return;
    }
    if (comment.trim().length < 4) {
      setError("Your note needs a few more words than that.");
      return;
    }
    setError("");
    setSubmitted(true);
    setName("");
    setComment("");
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-ink/10 bg-card p-8 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-clay">
          <Check size={20} aria-hidden="true" />
        </span>
        <p className="mt-4 font-display text-2xl text-ink">
          Thank you for reading.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Your note is saved for the next round of replies.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-link"
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submitComment}
      noValidate
      className="rounded-3xl border border-ink/10 bg-card p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="comment-name"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70"
          >
            Name
          </label>
          <input
            id="comment-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className="field"
          />
        </div>
        <div>
          <label
            htmlFor="comment-email"
            className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70"
          >
            Email <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="comment-email"
            type="email"
            placeholder="you@example.com"
            className="field"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="comment-body"
          className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70"
        >
          Note
        </label>
        <textarea
          id="comment-body"
          rows="5"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Share a thought, a question, or a story of your own..."
          className="field resize-y"
        />
      </div>

      {error && (
        <p className="mt-3 text-xs text-clay" role="alert">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-soft/60">
          Be kind. Comments are published after a quick read.
        </p>
        <button type="submit" className="btn-primary">
          Submit note
          <Send size={13} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
};

export default CommentSection;
