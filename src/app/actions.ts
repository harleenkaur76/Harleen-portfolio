"use server";

import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // If Resend is not configured, signal client to use mailto fallback
  if (!resend) {
    return {
      success: false,
      requiresFallback: true,
      error: null,
    };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "harleenbindra07@gmail.com",
      subject: `Portfolio Contact: ${subject || "New Message"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, error: null };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again or contact me directly.",
    };
  }
}
