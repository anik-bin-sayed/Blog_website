import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import image from "../../../assets/about/wanderlust.jpg";

const Travel = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="relative">
            <div
              className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-ink/15"
              aria-hidden="true"
            />
            <img
              src={image}
              alt="A view worth travelling for"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-55px_rgba(25,23,19,0.5)]"
            />
          </div>
        </div>

        <div className="lg:col-span-6">
          <p className="eyebrow">Wanderlust</p>
          <h2 className="mt-4 text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Why I <em className="italic text-clay">travel.</em>
          </h2>
          <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              Travelling is more than a hobby — it is a way of life that shapes
              my perspective and enriches my soul. Each journey is a chance to
              step out of my comfort zone and immerse myself in cultures and
              landscapes that don&apos;t look like home.
            </p>
            <p>
              I travel to see the world through different eyes, to learn from
              the stories and traditions of others, and to be reminded of how
              beautiful and diverse this planet really is.
            </p>
          </div>
          <Link to="/blog" className="btn-outline mt-8">
            Read travel stories
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Travel;
