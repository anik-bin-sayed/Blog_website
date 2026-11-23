import { Quote } from "lucide-react";

const Comments = () => {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <Quote
            size={40}
            strokeWidth={1}
            className="mx-auto text-blush"
            aria-hidden="true"
          />
          <p className="mt-8 font-display text-2xl leading-snug text-paper sm:text-3xl md:text-[2.1rem] md:leading-[1.35]">
            <em className="italic">
              &ldquo;Sophia&apos;s blog is a treasure trove of inspiration. Her
              travel stories transport you to new worlds, while her tech tips
              and wellness advice have genuinely improved my daily routine. It
              is like a dose of motivation straight to my inbox.&rdquo;
            </em>
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 font-display text-sm text-blush">
              ET
            </span>
            <div className="text-left">
              <p className="text-sm font-semibold text-paper">Emily Thompson</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-paper/50">
                Loyal reader, since 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
