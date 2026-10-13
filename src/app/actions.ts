"use server";

import { Resend } from "resend";
import { site } from "@/content/site";

export type ContactState = {
  status: "idle" | "sent" | "error" | "fallback";
  message?: string;
  // Echoed back on error so the form keeps what the visitor typed.
  values?: { name: string; email: string; message: string };
};

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export async function sendContactEmail(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot: real people never fill this hidden field.
  if (formData.get("company")) return { status: "sent" };

  const values = { name, email, message };

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and a message.", values };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email address doesn’t look right.", values };
  }
  if (message.length > 5000) {
    return {
      status: "error",
      message: "That message is a little long. Could you trim it?",
      values,
    };
  }

  // Without a Resend key the form hands over to the visitor's own email app.
  if (!resend) return { status: "fallback", values };

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: site.email,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      html: `<p><strong>${escapeHtml(name)}</strong> (${escapeHtml(email)}) wrote:</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    if (error) throw new Error(error.message);
    return { status: "sent" };
  } catch (error) {
    console.error("Contact form failed:", error);
    return { status: "fallback", values };
  }
}
