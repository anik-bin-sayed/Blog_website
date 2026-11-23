import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import img1 from "../../assets/Footer/footer-01.jpg";
import img2 from "../../assets/Footer/footer-02.jpg";
import img3 from "../../assets/Footer/footer-03.jpg";
import img4 from "../../assets/Footer/footer-04.jpg";

const gallery = [img1, img2, img3, img4];

const explore = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const topics = ["Travel", "Technology", "Wellness", "Growth"];

const socials = [
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("That email does not look quite right.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="mt-20 md:mt-28">
      {/* Newsletter */}
      <section id="newsletter" className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-paper md:px-14 md:py-20">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-clay/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blush/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blush">
                The Sunday letter
              </p>
              <h2 className="mt-4 text-4xl leading-[1.05] text-paper md:text-5xl">
                A slower inbox,
                <br />
                <em className="italic text-blush">once a week.</em>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/60">
                Join 4,000+ readers who get one thoughtful note every Sunday —
                new stories, small rituals, and the things I am loving lately.
                No noise, ever.
              </p>
            </div>

            <div className="md:justify-self-end md:w-full md:max-w-md">
              {subscribed ? (
                <div className="rounded-2xl border border-paper/15 bg-paper/5 p-6">
                  <p className="font-display text-2xl text-paper">
                    You are on the list.
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    Look out for the first letter this Sunday. Until then, pour
                    something warm and read a story or two.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} noValidate>
                  <label
                    htmlFor="newsletter-email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.22em] text-paper/50"
                  >
                    Email address
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-full border border-paper/20 bg-paper/5 px-5 py-3.5 text-sm text-paper outline-none transition placeholder:text-paper/35 focus:border-blush focus:ring-2 focus:ring-blush/20"
                    />
                    <button type="submit" className="btn-light shrink-0">
                      Subscribe
                      <ArrowRight size={14} aria-hidden="true" />
                    </button>
                  </div>
                  {error && (
                    <p className="mt-3 text-xs text-red-300" role="alert">
                      {error}
                    </p>
                  )}
                  <p className="mt-3 text-[11px] text-paper/35">
                    Unsubscribe any time. Your inbox stays yours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram strip */}
      <section className="container-page py-14 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">On Instagram</p>
            <h2 className="mt-3 text-3xl text-ink">Life between the lines</h2>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            @sophiaellis
            <Instagram size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-2xl bg-cream"
              aria-label={`Instagram post ${index + 1}`}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram size={22} className="text-paper" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer body */}
      <div className="border-t border-ink/10">
        <div className="container-page grid gap-10 py-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-baseline gap-2">
              <span className="font-display text-2xl italic text-ink">
                Sophia
              </span>
              <span className="font-display text-2xl text-ink">Ellis</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
              A lifestyle journal about travel, technology, wellness, and the
              quiet habits that make a big life. Written from wherever I happen
              to be.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-clay hover:bg-clay hover:text-paper"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft/60">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {explore.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-ink-soft transition-colors hover:text-clay"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft/60">
              Topics
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {topics.map((topic) => (
                <li key={topic}>
                  <Link
                    to="/blog"
                    className="text-ink-soft transition-colors hover:text-clay"
                  >
                    {topic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-soft/60">
              Get in touch
            </p>
            <a
              href="mailto:info@sophiaellis.com"
              className="mt-4 block font-display text-xl text-ink transition-colors hover:text-clay"
            >
              info@sophiaellis.com
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For collaborations, press, or just a kind note. I usually reply
              within 48 hours.
            </p>
          </div>
        </div>

        <div className="border-t border-ink/10">
          <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-soft/70 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Sophia Ellis. All rights reserved.
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 transition-colors hover:text-clay"
            >
              Back to top
              <ArrowUp size={13} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating scroll to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper shadow-lg transition-all duration-300 hover:bg-clay md:right-8 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp size={17} aria-hidden="true" />
      </button>
    </footer>
  );
};

export default Footer;
