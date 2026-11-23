import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Check,
  Send,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import image from "../../assets/Contact/contact-profile.png";

const socials = [
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please tell me your name.";
    if (!formData.email) {
      newErrors.email = "An email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "That email does not look right.";
    }
    if (formData.message.length < 10) {
      newErrors.message = "A little more detail, please — at least 10 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Say <em className="italic text-clay">hello.</em>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Questions, collaborations, or just a note about something you read —
            I would love to hear from you. Every message reaches my actual
            inbox, and I reply to as many as I can.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Info */}
          <aside className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[2rem] border border-ink/10 bg-cream/60 p-6 md:p-8">
              <div className="flex items-center gap-4">
                <img
                  src={image}
                  alt="Sophia Ellis"
                  className="h-16 w-16 rounded-full border-2 border-paper object-cover shadow-sm"
                />
                <div>
                  <p className="font-display text-xl text-ink">Sophia Ellis</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70">
                    Writer · Marketing strategist
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5 border-t border-ink/10 pt-8">
                <a
                  href="mailto:info@sophiaellis.com"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-clay">
                    <Mail size={16} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                      Email
                    </span>
                    <span className="mt-1 block text-sm font-medium text-ink transition-colors group-hover:text-clay">
                      info@sophiaellis.com
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-clay">
                    <MapPin size={16} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                      Based in
                    </span>
                    <span className="mt-1 block text-sm font-medium text-ink">
                      Dhaka · often somewhere with a window seat
                    </span>
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-clay">
                    <Clock size={16} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                      Response time
                    </span>
                    <span className="mt-1 block text-sm font-medium text-ink">
                      Usually within 48 hours
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/60">
                  Elsewhere
                </p>
                <div className="mt-3 flex gap-3">
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
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-ink/10 bg-card p-6 md:p-10">
              {sent ? (
                <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-clay">
                    <Check size={24} aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-3xl text-ink">Message received.</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
                    Thank you for writing. I will get back to you as soon as I
                    can — usually within two days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="btn-outline mt-8"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70"
                      >
                        Name <span className="text-clay">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="field"
                      />
                      {errors.name && (
                        <p className="mt-2 text-xs text-clay" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70"
                      >
                        Email <span className="text-clay">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="field"
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs text-clay" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="field"
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft/70"
                    >
                      Message <span className="text-clay">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="field resize-y"
                    />
                    {errors.message && (
                      <p className="mt-2 text-xs text-clay" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-ink-soft/60">
                      This form is a demo — nothing is sent to a server.
                    </p>
                    <button type="submit" className="btn-primary">
                      Send message
                      <Send size={13} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
