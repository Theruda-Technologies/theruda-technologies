"use client";

import { FormEvent, useState } from "react";
import { IconArrow } from "./Icons";

const CONTACT_EMAIL = "herieshetu@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const SERVICES = [
  "Software Development",
  "UI/UX Design",
  "AI Solutions",
  "Graphics Design",
  "Not sure yet",
] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
          _subject: "New message from Theruda Contact form",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "Something went wrong sending your message. Please try again or email us directly.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="section glass-section relative"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)", opacity: 0.55 }}
        aria-hidden="true"
      />
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="section-label">Get in touch</p>
          <h2 id="contact-heading" className="section-title">
            Tell us what you&apos;re building
          </h2>
          <p className="section-lead">
            Share a few details and we&apos;ll reply within two business days
            with next steps — no hard sell, just a clear conversation.
          </p>
          <dl className="mt-10 m-0 space-y-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                Email
              </dt>
              <dd className="mt-1 m-0">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[var(--color-text)] no-underline transition-colors hover:text-[var(--color-accent)]"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                Location
              </dt>
              <dd className="mt-1 m-0 text-[var(--color-text)]">
                Remote-first · Worldwide
              </dd>
            </div>
          </dl>
        </div>

        <div className="glass-strong p-6 sm:p-8">
          {submitted ? (
            <div
              className="flex min-h-[20rem] flex-col items-start justify-center"
              role="status"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[var(--glow-brand-sm)]"
                style={{ background: "var(--gradient-brand)" }}
                aria-hidden="true"
              >
                ✓
              </div>
              <h3 className="m-0 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-text)]">
                Message sent
              </h3>
              <p className="mt-3 mb-0 max-w-md text-[var(--color-text-secondary)]">
                Thanks for reaching out. A Theruda teammate will get back to you
                shortly.
              </p>
              <button
                type="button"
                className="btn-ghost mt-8"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Alex Morgan"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="alex@company.com"
                />
              </div>
              <div>
                <label htmlFor="service" className={labelClass}>
                  Service interest
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Briefly describe your goals, timeline, and anything else we should know…"
                  className={`${inputClass} resize-y min-h-[8rem]`}
                />
              </div>
              {error ? (
                <p className="m-0 text-sm text-red-400" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
                disabled={sending}
              >
                {sending ? "Sending…" : "Send message"}
                {!sending ? <IconArrow /> : null}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const labelClass =
  "mb-2 block text-sm font-semibold text-[var(--color-text)]";

const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-[var(--glass-border)] bg-[rgba(5,10,14,0.45)] px-4 py-3 text-[var(--color-text)] backdrop-blur-md placeholder:text-[var(--color-text-secondary)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--glass-border-hover)] focus:border-[var(--color-accent)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(6,182,212,0.2)]";

function Field({
  id,
  label,
  type,
  autoComplete,
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
