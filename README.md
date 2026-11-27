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
Build-Webs-HEC/
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── README.MD
│   └── design-system.md
├── public/
│   ├── icon/
│   │   └── image
│   └── images/
│       ├── 600466751_18525596368066223_4481419998765621177_n.jpg
│       ├── 621213994_18077789804601175_7571309659021509180_n.jpg
│       ├── IMG-20250703-WA0019(1).jpg
│       ├── Instagram.mhtml
│       ├── Screenshot_26-11-2026_163547_www.instagram.com.jpeg
│       ├── course-poster.png
│       ├── haliyora-mark.png
│       └── instagram -hec.html
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ParticleField.tsx
│   │   │   ├── contact-links.tsx
│   │   │   ├── faq-section.tsx
│   │   │   ├── page-animations.tsx
│   │   │   ├── particle-field-loader.tsx
│   │   │   ├── program-browser.tsx
│   │   │   ├── promotion-panel.tsx
│   │   │   └── site-header.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── data/
│   │   └── site-content.ts
│   └── types/
│       └── css.d.ts
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── next.config.js
├── package-lock.json
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
