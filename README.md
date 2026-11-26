# Haliyora English Course

Landing page responsif untuk Haliyora English Course, dibuat dengan Next.js App
Router, React, TypeScript, dan sistem desain CSS berbasis token.

## Fitur

- Halaman utama responsif mengikuti referensi desain Stitch.
- Pilihan program interaktif untuk anak/remaja, dewasa/ujian, serta privat/korporat.
- CTA konsultasi WhatsApp, panel kode promo, kanal sosial, dan lokasi cabang.
- Metadata SEO, navigasi mobile yang dapat diakses, serta dukungan reduced motion.

## Menjalankan secara lokal

**Prasyarat:** Node.js 20+ dan npm.

```bash
npm ci
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Pemeriksaan sebelum rilis:

```bash
npm run lint
npm run typecheck
npm run build
```

GitHub Actions menjalankan pemeriksaan yang sama pada setiap push dan pull
request, menggunakan `npm ci` agar instalasi konsisten dengan lockfile.

## Struktur proyek

```text
.
├── .github/workflows/ci.yml
├── docs/design-system.md
├── public/images/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── data/site-content.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

## Kustomisasi sebelum rilis

- Verifikasi nomor WhatsApp, alamat email, tautan sosial, dan lokasi pada
  `src/app/components/contact-links.tsx` serta `src/data/site-content.ts`.
- Konfirmasi detail promo dan ketersediaan program sebelum dipublikasikan.
- Pastikan foto dan testimoni yang digunakan telah mendapat persetujuan.

## Lisensi

Proyek ini mengikuti lisensi MIT yang tersedia di [`LICENSE`](./LICENSE).
