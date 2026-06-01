import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

/**
 * Contact form handler.
 *
 * By default it validates and logs the submission to the server console.
 * If CONTACT_WEBHOOK_URL is set (e.g. a Discord/Slack webhook, Zapier, or a
 * Google Apps Script endpoint), the submission is forwarded there too.
 */
export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Format permintaan tidak valid." },
      { status: 400 }
    );
  }

  const name = data.name?.trim();
  const phone = data.phone?.trim();
  const message = data.message?.trim();

  if (!name || !phone || !message) {
    return NextResponse.json(
      { ok: false, message: "Nama, nomor WhatsApp, dan pesan wajib diisi." },
      { status: 422 }
    );
  }

  const submission = {
    name,
    phone,
    email: data.email?.trim() || "-",
    message,
    receivedAt: new Date().toISOString(),
  };

  // Always log on the server (visible in hosting logs).
  console.log("[contact] new submission:", submission);

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📩 *Pesan baru dari website TAKKA STEEL*\nNama: ${submission.name}\nWA: ${submission.phone}\nEmail: ${submission.email}\nPesan: ${submission.message}`,
          submission,
        }),
      });
    } catch (err) {
      // Don't fail the user's request if the webhook is down — we already logged it.
      console.error("[contact] webhook forward failed:", err);
    }
  }

  return NextResponse.json({ ok: true, message: "Pesan diterima." });
}
