import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socials = [
  { Icon: FaFacebook, href: "#", label: "Facebook" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

const Follow = () => {
  return (
    <section className="border-t border-ink/10 bg-cream/50 py-16 md:py-20">
      <div className="container-page flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="eyebrow">Keep in touch</p>
          <a
            href="mailto:info@sophiaellis.com"
            className="mt-3 block font-display text-3xl text-ink transition-colors hover:text-clay md:text-4xl"
          >
            info@sophiaellis.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-clay hover:bg-clay hover:text-paper"
            >
              <Icon size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Follow;
