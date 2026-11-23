import image1 from "../../../assets/about/flavours-01.jpg";
import image2 from "../../../assets/about/flavours-02.jpg";

const Journey = () => {
  return (
    <section className="border-y border-ink/10 bg-cream/50 py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow">In the kitchen</p>
          <h2 className="mt-4 text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            A journey through
            <br />
            <em className="italic text-clay">flavours.</em>
          </h2>
          <div className="mt-6 max-w-lg space-y-4 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              The kitchen is my creative sanctuary. Whether I&apos;m
              experimenting with a new recipe or recreating a family favourite,
              cooking is how I slow down and turn an ordinary Tuesday into
              something worth remembering.
            </p>
            <p>
              These passions are more than hobbies — they are part of who I am
              and what I bring to the table. Through this journal, I hope to
              inspire you to explore your own interests and find joy in the
              process, not just the result.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-md pb-10 pr-4 lg:ml-auto lg:mr-0">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-paper"
              aria-hidden="true"
            />
            <img
              src={image2}
              alt="A table set for a slow dinner"
              loading="lazy"
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-55px_rgba(25,23,19,0.5)]"
            />
            <div className="absolute -bottom-2 -left-2 w-36 overflow-hidden rounded-2xl border-4 border-paper shadow-xl sm:-left-6 sm:w-44">
              <img
                src={image1}
                alt="Fresh ingredients on the counter"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
