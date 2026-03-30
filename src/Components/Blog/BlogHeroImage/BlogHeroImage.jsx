import React from "react";
import bg from "../../../assets/blog/blog-hero.jpg";

const BlogHeroImage = () => {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] lg:h-[calc(100vh-180px)] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4
                     animate-[fade-in-up_0.8s_ease-out]"
        >
          Adventures, Stories & Insights
          <br className="hidden lg:block" /> Await
        </h1>
        <p
          className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed
                     animate-[fade-in-up_0.8s_ease-out]"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to the heart of my blog, where stories of exploration,
          innovation, and personal growth come to life.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10">
        <div className="flex flex-col items-center gap-1 group">
          <span className="text-white/70 text-xs tracking-wider uppercase font-light mb-1 group-hover:text-white/90 transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center group-hover:border-white/90 transition-colors">
            <div
              className="w-1 h-2.5 bg-white/70 rounded-full mt-2
                         animate-[scroll-dot_1.5s_ease-in-out_infinite] group-hover:bg-white/90"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroImage;
