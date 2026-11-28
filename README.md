# Haliyora English Course

Pengembangan website responsif untuk Haliyora English Course (HEC) yang dirancang dengan Next.js App
Router, React, TypeScript, dan sistem desain CSS berbasis token.

## Fitur

- Halaman utama responsif mengikuti referensi desain Stitch.
- Pilihan program interaktif untuk anak/remaja, dewasa/ujian, serta privat/korporat.
- CTA konsultasi WhatsApp, panel kode promo, kanal sosial, dan lokasi cabang.
- Metadata SEO, navigasi mobile yang dapat diakses, serta dukungan reduced motion.

## Stack Tech
Stack utama Anda adalah **Next.js 14 dengan React 18 dan TypeScript**, menggunakan **App Router**. Komposisi bahasa GitHub mencatat HTML 94,7%, TypeScript 3,2%, dan CSS 2,1%; angka HTML yang dominan bisa mencerminkan markup JSX/TSX yang digunakan pada antarmuka.

| Bagian | Teknologi yang digunakan |
|---|---|
| Framework frontend | Next.js `14.2.15`, dengan React `18.3.1` |
| Bahasa | TypeScript dan JavaScript |
| UI / rendering | React, Next.js App Router (`src/app`) |
| Styling | CSS biasa melalui `src/app/globals.css` |
| Animasi | GSAP `3.15.1` |
| Grafis 3D | Three.js `0.182.0` dan React Three Fiber `8.18.0` |
| Ikon | Lucide React |
| Lint & pemeriksaan tipe | ESLint, `next lint`, dan TypeScript `tsc --noEmit` |
| CI | GitHub Actions: lint, type-check, dan build; menggunakan Node.js 20 |
| Optimasi gambar | Next.js Image remote pattern dikonfigurasi untuk `images.unsplash.com` |

Bukti konfigurasi: [`package.json`](https://github.com/harrisariefkamis/Build-Webs-HEC/blob/4e6d608681cd29bffe25443c50882958b14a18d2/package.json), [`tsconfig.json`](https://github.com/harrisariefkamis/Build-Webs-HEC/blob/4e6d608681cd29bffe25443c50882958b14a18d2/tsconfig.json), [`next.config.js`](https://github.com/harrisariefkamis/Build-Webs-HEC/blob/4e6d608681cd29bffe25443c50882958b14a18d2/next.config.js), dan [workflow CI](https://github.com/harrisariefkamis/Build-Webs-HEC/blob/4e6d608681cd29bffe25443c50882958b14a18d2/.github/workflows/ci.yml).

**Notes penting:** backend/API, database, autentikasi, atau layanan cloud seperti Supabase, MySQL, Redis, Firebase, maupun GCP. Vercel juga belum terkonfirmasi dari file yang diperiksa, jadi teknologi-teknologi tersebut sebaiknya disebut sebagai rencana integrasi saja—bukan bagian dari stack yang sudah digunakan.

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
