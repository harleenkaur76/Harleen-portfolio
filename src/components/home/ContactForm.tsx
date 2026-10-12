"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendContactEmail, type ContactState } from "@/app/actions";
import { mailto } from "@/content/site";

const initial: ContactState = { status: "idle" };

const field =
  "mt-1.5 w-full border-0 border-b border-ink bg-transparent px-0 py-2 text-base placeholder:text-ink-soft/60 focus:border-oxblood focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initial);
  const draft = useRef({ name: "", message: "" });

  // If the server can't deliver, open the visitor's email app with the
  // message already written, so nothing they typed is lost.
  useEffect(() => {
    if (state.status !== "fallback") return;
    const { name, message } = draft.current;
    window.location.href = mailto(`Portfolio enquiry from ${name}`, message);
  }, [state]);

  if (state.status === "sent") {
    return (
      <p className="note" role="status">
        Sent. Thank you, I read everything that arrives here.
      </p>
    );
  }

  return (
    <form
      action={(formData) => {
        draft.current = {
          name: String(formData.get("name") ?? ""),
          message: String(formData.get("message") ?? ""),
        };
        action(formData);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="label">Your name</span>
          <input name="name" type="text" defaultValue={state.values?.name} required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="label">Your email</span>
          <input name="email" type="email" defaultValue={state.values?.email} required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="label">What are you working on?</span>
        <textarea name="message" defaultValue={state.values?.message} required rows={4} maxLength={5000} className={`${field} resize-y`} />
      </label>
      {/* Honeypot, hidden from people and assistive tech */}
      <input name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={pending} className="btn btn-solid cursor-pointer disabled:opacity-60">
          {pending ? "Sending…" : "Send it"}
        </button>
        <p className="text-sm text-ink-soft" role="status" aria-live="polite">
          {state.status === "error" && <span className="text-oxblood">{state.message}</span>}
          {state.status === "fallback" &&
            "Opening your email app with the message ready to send."}
        </p>
      </div>
    </form>
  );
}
