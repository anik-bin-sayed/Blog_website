import { ArrowDown } from "lucide-react";
import image from "../../../assets/about/BlogMissionImage.png";

const BlogMission = () => {
  return (
    <section className="pb-20 md:pb-28">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-[2rem] border border-ink/10 bg-card lg:grid-cols-2">
          <div className="relative min-h-72 overflow-hidden">
            <img
              src={image}
              alt="Sophia writing at her desk"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <span className="absolute left-5 top-5 rounded-full bg-paper/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft backdrop-blur">
              The mission
            </span>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-14">
            <p className="eyebrow">Why this journal exists</p>
            <h2 className="mt-4 text-3xl leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-5xl">
              Inspire. Educate.
              <br />
              <em className="italic text-clay">Connect.</em>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                At the heart of this blog is a simple mission: to share the
                insights and stories that make a life feel bigger on the inside.
                Marketing lessons, travel notes, wellness rituals — all written
                with the same question in mind: is this actually useful?
              </p>
              <p>
                This is not a highlight reel. It is a field notebook from a life
                in progress, and you are welcome to read along.
              </p>
            </div>
            <a href="#newsletter" className="btn-primary mt-8 self-start">
              Subscribe to the letter
              <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMission;
