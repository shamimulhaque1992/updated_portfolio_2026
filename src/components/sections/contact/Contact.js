"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";

const contactContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

function cls(error) {
  return [
    "w-full bg-[var(--background)] text-[var(--foreground)] text-sm px-4 py-2.5",
    "border outline-none transition-colors duration-200",
    "placeholder:text-[var(--foreground-muted)]",
    error
      ? "border-red-500/60 focus:border-red-500"
      : "border-[var(--border)] focus:border-[var(--primary)]/60",
  ].join(" ");
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
        {label}
      </label>
      {children}
      {error && <p className="text-[10px] text-red-500">{error}</p>}
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email))
      errs.email = "Invalid email address";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_8v0g16t",
          template_id: "template_aplx028",
          user_id: "r_Jp7EQHeaPgTraiG",
          template_params: {
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          },
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contactSection" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/3 h-64 w-64 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

      <Container>
        <motion.div
          variants={contactContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16"
        >
          {/* Heading */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)]">
              Get in Touch
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
              Let&apos;s work together
            </h2>
          </motion.div>

          {/* 12-col grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-12 gap-4">
            {/* ── ROW 1 ── */}

            {/* Availability card — col 1–6 */}
            <div className="col-span-12 lg:col-span-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                  </span>
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    Available for new opportunities
                  </p>
                </div>
                <p className="text-sm leading-7 text-[var(--foreground-muted)] font-light">
                  I&apos;m a full-stack developer with 3+ years of experience
                  building scalable web applications. Open to full-time roles,
                  part-time engagements, contract work, and freelance projects —
                  remote or on-site.
                </p>
                <p className="text-sm leading-7 text-[var(--foreground-muted)] font-light">
                  Whether you have a product idea, need an extra hand on your
                  team, or just want to talk tech — feel free to reach out.
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { label: "Experience", value: "3+ Years" },
                    { label: "Projects", value: "10+ Delivered" },
                    {
                      label: "Stack",
                      value: "Typescript . Next · Express · PostgreSQL",
                    },
                    { label: "Location", value: "Dhaka, BD · Remote" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2"
                    >
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--foreground-muted)]">
                        {label}
                      </p>
                      <p className="mt-0.5 font-medium text-[var(--foreground)]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Full-time", "Part-time", "Contract", "Freelance"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-0.5 text-xs font-medium text-[var(--foreground-muted)]"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* 4 social square cards — col 7–12, 2×2 grid */}
            <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
              {[
                {
                  label: "Email",
                  icon: Mail,
                  href: "mailto:khandokershamimulhaque@gmail.com",
                  value: "khandokershamimulhaque\n@gmail.com",
                },
                {
                  label: "LinkedIn",
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/khandoker-shamimul-haque/",
                  value: "khandoker-shamimul\n-haque",
                },
                {
                  label: "GitHub",
                  icon: Github,
                  href: "https://github.com/shamimulhaque1992",
                  value: "shamimulhaque1992",
                },
                {
                  label: "Twitter",
                  icon: Twitter,
                  href: "https://twitter.com/shamimul_hq1992",
                  value: "shamimul_hq1992",
                },
              ].map(({ label, icon: Icon, href, value }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm text-center transition-all duration-300 hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10 transition-colors duration-300 group-hover:bg-[var(--primary)]/20">
                    <Icon
                      className="h-5 w-5"
                      style={{ color: "var(--primary)" }}
                    />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                      {label}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[var(--foreground)] leading-tight whitespace-pre-line">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* ── ROW 2 ── */}

            {/* Contact form — col 1–6 */}
            <div className="col-span-12 lg:col-span-6">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 shadow-sm text-center"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10">
                      <CheckCircle2
                        className="h-6 w-6"
                        style={{ color: "var(--primary)" }}
                      />
                    </span>
                    <div className="space-y-1">
                      <p className="font-semibold text-[var(--foreground)]">
                        Message sent!
                      </p>
                      <p className="text-sm text-[var(--foreground-muted)]">
                        I&apos;ll get back to you as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus(null)}
                      className="mt-1 rounded-full border border-[var(--border)] px-5 py-1.5 text-xs font-semibold text-[var(--foreground-muted)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onSubmit={onSubmit}
                    noValidate
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm flex flex-col gap-3"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name" error={errors.name}>
                        <input
                          name="name"
                          value={form.name}
                          onChange={onChange}
                          placeholder="Your name"
                          className={cls(errors.name) + " rounded-full"}
                        />
                      </Field>
                      <Field label="Email" error={errors.email}>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={onChange}
                          placeholder="your@email.com"
                          className={cls(errors.email) + " rounded-full"}
                        />
                      </Field>
                    </div>

                    <Field label="Subject" error={errors.subject}>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={onChange}
                        placeholder="What's this about?"
                        className={cls(errors.subject) + " rounded-full"}
                      />
                    </Field>

                    <Field label="Message" error={errors.message}>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        placeholder="Your message…"
                        rows={4}
                        className={
                          cls(errors.message) + " resize-none rounded-2xl"
                        }
                      />
                    </Field>

                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-2.5 text-xs text-red-500">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-auto inline-flex w-full items-center justify-center gap-1 rounded-full border border-[var(--primary)]/40 bg-[#0077c0] px-2 py-3 text-[5px] font-semibold text-white transition-colors duration-200 hover:bg-[#0069a8] disabled:opacity-60 dark:bg-[#697565] dark:text-[#ffffff] dark:hover:bg-[#5a6357]"
                    >
                      <Send className="h-4 w-4" />
                      {status === "loading" ? "Sending…" : "Send Message"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Address & contact info — col 7–12 */}
            <div className="col-span-12 lg:col-span-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm flex flex-col gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--foreground-muted)] mb-4">
                  Contact Details
                </p>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
                      <Phone
                        className="h-3.5 w-3.5"
                        style={{ color: "var(--primary)" }}
                      />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                        Phone
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-[var(--foreground)]">
                        +880 1521-547 789
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
                      <Mail
                        className="h-3.5 w-3.5"
                        style={{ color: "var(--primary)" }}
                      />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                        Email
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-[var(--foreground)] break-all">
                        khandokershamimulhaque@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10">
                      <MapPin
                        className="h-3.5 w-3.5"
                        style={{ color: "var(--primary)" }}
                      />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                        Address
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-[var(--foreground)] leading-relaxed">
                        Uttar Badda, Dhaka
                        <br />
                        Bangladesh — 1212
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-[var(--border)]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)] mb-1">
                  Response time
                </p>
                <p className="text-sm text-[var(--foreground-muted)] font-light">
                  Usually within{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "var(--primary)" }}
                  >
                    24 hours
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
