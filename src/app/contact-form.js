"use client";

import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [draftPrepared, setDraftPrepared] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setDraftPrepared(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setDraftPrepared(false);
      return;
    }

    const subject = `Portfolio contact form message from ${values.name.trim()}`;
    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`;
    const query = new URLSearchParams({ subject, body });

    window.location.href = `mailto:zaidsaleem375@gmail.com?${query.toString()}`;
    setDraftPrepared(true);
  }

  return (
    <form className="contact-form relative" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="form-label" htmlFor="contact-name">
          Name
        </label>
        <input
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
          className="form-input"
          id="contact-name"
          name="name"
          onChange={updateField}
          placeholder="Your name"
          value={values.name}
        />
        {errors.name && (
          <p className="form-error" id="contact-name-error">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="form-label" htmlFor="contact-email">
          Email
        </label>
        <input
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          className="form-input"
          id="contact-email"
          name="email"
          onChange={updateField}
          placeholder="you@example.com"
          type="email"
          value={values.email}
        />
        {errors.email && (
          <p className="form-error" id="contact-email-error">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="form-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          aria-invalid={Boolean(errors.message)}
          className="form-input form-textarea"
          id="contact-message"
          name="message"
          onChange={updateField}
          placeholder="Tell me a little about your project..."
          rows={4}
          value={values.message}
        />
        {errors.message && (
          <p className="form-error" id="contact-message-error">
            {errors.message}
          </p>
        )}
      </div>

      <button
        className="button-primary form-submit"
        type="submit"
      >
        Prepare email
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 8h10m-4-4 4 4-4 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      <p aria-live="polite" className="form-status">
        {draftPrepared &&
          "Your email app should open with a draft. Press Send there to send your message."}
      </p>
    </form>
  );
}
