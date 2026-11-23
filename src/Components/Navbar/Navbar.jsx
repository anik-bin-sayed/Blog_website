import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Journal" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="hidden bg-ink text-paper md:block">
        <div className="container-page flex h-9 items-center justify-between text-[10px] font-medium uppercase tracking-[0.24em]">
          <p className="text-paper/70">
            Travel · Technology · Wellness · Growth
          </p>
          <Link
            to="/blog"
            className="flex items-center gap-1.5 text-blush transition-colors hover:text-paper"
          >
            New issue — read the journal
            <ArrowUpRight size={12} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-paper/85 backdrop-blur-xl"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl italic tracking-tight text-ink">
              Sophia
            </span>
            <span className="font-display text-2xl tracking-tight text-ink">
              Ellis
            </span>
            <span className="mb-0.5 hidden text-[9px] font-semibold uppercase tracking-[0.3em] text-clay sm:block">
              Journal
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group relative py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-clay" : "text-ink hover:text-clay"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-clay transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-4 border-r border-ink/10 pr-5 xl:flex">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-ink-soft transition-colors hover:text-clay"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              className="hidden rounded-full bg-ink px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-paper transition-colors hover:bg-clay sm:inline-flex"
            >
              Say hello
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-paper p-6 shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl italic text-ink">
              Sophia <span className="not-italic">Ellis</span>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink"
              aria-label="Close menu"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col" aria-label="Mobile">
            {links.map(({ to, label }, index) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-baseline justify-between border-b border-ink/10 py-4 font-display text-3xl transition-colors ${
                    isActive ? "text-clay" : "text-ink hover:text-clay"
                  }`
                }
              >
                {label}
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-ink-soft/50">
                  0{index + 1}
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto space-y-5 pt-10">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full"
            >
              Say hello
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <div className="flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-clay hover:text-clay"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-ink-soft">
              info@sophiaellis.com
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
