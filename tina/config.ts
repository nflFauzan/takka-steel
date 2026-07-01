import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "", // Get this from tina.io
  token: process.env.TINA_TOKEN || "", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "products",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "products",
        label: "Produk",
        path: "content/products",
        format: "json", // using json to match the original structure more closely, but md is fine too
        fields: [
          {
            type: "string",
            name: "name",
            label: "Nama Produk",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategori (contoh: Baja Ringan)",
            required: true,
          },
          {
            type: "string",
            name: "department",
            label: "Department (Slug)",
            options: [
              "struktur-baja",
              "atap-spandek",
              "atap-upvc",
              "plafon-interior",
              "pipa-saluran",
              "aksesoris-perkakas",
            ],
            required: true,
          },
          {
            type: "string",
            name: "brand",
            label: "Merk / Brand",
          },
          {
            type: "string",
            name: "badge",
            label: "Badge / Label (contoh: Galvalume)",
          },
          {
            type: "string",
            name: "stock",
            label: "Status Stok",
            options: ["ready", "indent"],
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Produk Unggulan?",
          },
          {
            type: "string",
            name: "priceFrom",
            label: "Harga Mulai Dari",
          },
          {
            type: "image",
            name: "image",
            label: "Foto Produk",
          },
          {
            type: "string",
            name: "summary",
            label: "Ringkasan Singkat (Muncul di Card)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "description",
            label: "Deskripsi Lengkap",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "specs",
            label: "Spesifikasi",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label (contoh: Panjang)" },
              { type: "string", name: "value", label: "Nilai (contoh: 6 meter)" },
            ],
          },
          {
            type: "string",
            name: "uses",
            label: "Kegunaan / Aplikasi",
            list: true,
          },
        ],
      },
      {
        name: "articles",
        label: "Artikel / Blog",
        path: "content/articles",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Judul Artikel",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Ringkasan (Excerpt)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "date",
            label: "Tanggal Posting",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Penulis",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Gambar Utama (Bisa link URL atau file)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Isi Artikel",
            isBody: true,
          },
        ],
      },
    ],
  },
});
