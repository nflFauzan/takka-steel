"use client";

import { useState } from "react";
import Icon from "./Icon";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Gagal mengirim pesan.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Terjadi kesalahan.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-green-100 text-green-600">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="text-lg font-bold text-steel-900">Pesan Terkirim!</h3>
        <p className="mt-1 text-sm text-steel-600">
          Terima kasih. Tim kami akan segera menghubungi Anda kembali.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-5"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nama Lengkap" name="name" required placeholder="Nama Anda" />
        <Field
          label="Nomor WhatsApp"
          name="phone"
          required
          placeholder="08xxxxxxxxxx"
          type="tel"
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="email@contoh.com (opsional)"
      />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-steel-800">
          Pesan / Kebutuhan Material <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Contoh: Saya butuh besi beton ulir 10mm sebanyak 50 batang untuk proyek di Bogor..."
          className="w-full rounded-md border border-steel-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
      </button>
      <p className="text-center text-xs text-steel-500">
        Atau hubungi kami langsung melalui WhatsApp untuk respon lebih cepat.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-steel-800">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-steel-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
