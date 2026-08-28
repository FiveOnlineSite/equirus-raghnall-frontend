import nodemailer from "nodemailer";
import { commercialMenu } from "@/data/commercialServices";
import { privateClientsMenu } from "@/data/privateClientServices";
import { reinsuranceMenu } from "@/data/reinsuranceServices";

export const runtime = "nodejs";

const services = [
  ...privateClientsMenu.flatMap((section) => section.links),
  ...commercialMenu.flatMap((section) => section.links),
  ...reinsuranceMenu.flatMap((section) => section.links),
];

const serviceNames = new Map(
  services.map((service) => [service.slug, service.label]),
);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character],
  );
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (clean(body.website, 200)) {
      return Response.json({ ok: true });
    }

    const firstName = clean(body.firstName, 80);
    const lastName = clean(body.lastName, 80);
    const phone = clean(body.phone, 10);
    const email = clean(body.email, 254).toLowerCase();
    const organization = clean(body.organization, 150);
    const service = clean(body.service, 120);
    const message = clean(body.message, 4000);
    const serviceName = serviceNames.get(service);

    if (
      !firstName ||
      !lastName ||
      !/^\d{10}$/.test(phone) ||
      !emailPattern.test(email) ||
      !organization ||
      !serviceName
    ) {
      return Response.json(
        { message: "Please complete the first six fields and enter a valid 10-digit phone number." },
        { status: 400 },
      );
    }

    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpAppPassword = process.env.SMTP_APP_PASSWORD;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || smtpEmail;

    if (!smtpEmail || !smtpAppPassword || !recipientEmail) {
      console.error("Contact email environment variables are not configured.");
      return Response.json(
        { message: "Email service is not configured yet." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpEmail, pass: smtpAppPassword },
    });

    const fullName = `${firstName} ${lastName}`.trim() || "Website visitor";
    const safe = {
      fullName: escapeHtml(fullName),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      organization: escapeHtml(organization || "Not provided"),
      serviceName: escapeHtml(serviceName),
      message: escapeHtml(message || "No message provided").replace(
        /\n/g,
        "<br />",
      ),
    };

    await transporter.sendMail({
      from: `Equirus Raghnall Website <${smtpEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `Website enquiry: ${serviceName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${organization || "Not provided"}\nService: ${serviceName}\n\nMessage:\n${message || "No message provided"}`,
      html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${safe.fullName}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Organization:</strong> ${safe.organization}</p><p><strong>Service:</strong> ${safe.serviceName}</p><p><strong>Message:</strong><br />${safe.message}</p>`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return Response.json(
      { message: "Unable to send your message. Please try again." },
      { status: 500 },
    );
  }
}
