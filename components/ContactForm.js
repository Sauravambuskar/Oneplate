"use client";

import { useEffect, useState } from "react";
import { createWhatsAppUrl } from "@/lib/whatsapp.mjs";

export default function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [interest, setInterest] = useState("");

  useEffect(() => {
    const requestedInterest = new URLSearchParams(window.location.search).get("interest");
    const validInterests = ["volunteer", "partner", "support", "general"];
    if (validInterests.includes(requestedInterest)) setInterest(requestedInterest);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Preparing WhatsApp..." });
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const interestLabels = {
      volunteer: "Volunteer",
      partner: "Partner with PlateHope",
      support: "Support a programme",
      general: "Ask a question"
    };
    const whatsappMessage = [
      "Hello PlateHope Foundation,",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      `Interest: ${interestLabels[payload.interest] || payload.interest}`,
      "",
      "Message:",
      payload.message,
      "",
      "Sent from the PlateHope Foundation website."
    ].join("\n");
    const whatsappUrl = createWhatsAppUrl(whatsappMessage);
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus({
      type: "success",
      message: "Your message is ready in WhatsApp. Please press Send there to complete it."
    });

    if (!whatsappWindow) window.location.href = whatsappUrl;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Your name <span>*</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email address <span>*</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          I want to <span>*</span>
          <select
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="volunteer">Volunteer</option>
            <option value="partner">Partner with PlateHope</option>
            <option value="support">Support a programme</option>
            <option value="general">Ask a question</option>
          </select>
        </label>
      </div>
      <label>
        Your message <span>*</span>
        <textarea name="message" rows="6" required />
      </label>
      <button className="button button-primary" type="submit" disabled={status.type === "loading"}>
        {status.type === "loading" ? "Preparing..." : "Continue on WhatsApp"}
        {status.type !== "loading" && <span aria-hidden="true">→</span>}
      </button>
      {status.message && (
        <p className={`form-status ${status.type}`} role="status">
          {status.type === "success" && <span className="status-check" aria-hidden="true">✓</span>}
          {status.message}
        </p>
      )}
    </form>
  );
}
