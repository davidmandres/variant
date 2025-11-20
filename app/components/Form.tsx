"use client";
import { useRef, useState } from "react";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/425472f00ba2fd347b5d27066eba9eb5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else throw new Error("Network error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form">
      <div className="u-margin-bottom-m">
        <h2 className="heading-secondary">Start booking now</h2>
      </div>

      <div className="name-group">
        <div className="group">
          <input
            id="gname"
            name="givenName"
            type="text"
            placeholder="Given name"
            required
            autoComplete="given-name"
          />
          <label htmlFor="gname">Given name</label>
        </div>
        <div className="group">
          <input
            id="fname"
            name="familyName"
            type="text"
            placeholder="Family name"
            required
            autoComplete="family-name"
          />
          <label htmlFor="fname">Family name</label>
        </div>
      </div>

      <div className="group">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="group">
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what you need (optional)"
          rows={4}
        />
        <label htmlFor="message">Message</label>
      </div>

      <div className="form--submission">
        <button
          className="btn--green btn--animated"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending..." : "Get in touch →"}
        </button>

        <span
          className={`submit-message${
            status === "success"
              ? " success"
              : status === "error"
              ? " error"
              : ""
          }`}
        >
          {status === "success"
            ? "Thanks! We’ll be in touch soon."
            : status === "error"
            ? "Oops! Something went wrong."
            : ""}
          &nbsp;
        </span>
      </div>
    </form>
  );
}
