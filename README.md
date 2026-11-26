# Haliyora English Course

Landing page responsif untuk Haliyora English Course (HEC), tempat kursus Bahasa Inggris interaktif dengan pilihan belajar online dan offline untuk anak, remaja, serta dewasa muda. Dibangun menggunakan Next.js App Router, React, TypeScript, dan CSS.

## Fitur

- Hero section dengan CTA konsultasi cabang dan konsultasi online.
- Kartu program Dasher, Runner, Sprinter, dan Ranger, beserta jalur lanjutan IELTS, TOEFL, kelas privat, dan Corporate English.
- Bagian keunggulan belajar, promo dengan tombol salin kode voucher, testimoni, kontak WhatsApp/email, dan tautan sosial.
- Desain responsif untuk ponsel dan desktop, navigasi mobile, metadata SEO, serta dukungan preferensi reduced motion.

## Menjalankan secara lokal

**Prasyarat:** Node.js 18.17+ dan npm.

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000). Untuk pemeriksaan build produksi:

```bash
npm run build
npm run start
```

## Struktur proyek

```text
.
├── public/                 # Aset statis (gambar, ikon, dan berkas publik)
├── src/
│   └── app/
│       ├── globals.css     # Token desain, komponen UI, dan breakpoint responsif
│       ├── layout.tsx      # Root layout, font, dan metadata SEO
│       └── page.tsx        # Halaman landing dan konten utama
├── .eslintrc.json          # Konfigurasi ESLint Next.js
├── next.config.js          # Konfigurasi Next.js
├── package.json            # Skrip dan dependensi
└── tsconfig.json           # Konfigurasi TypeScript
```

## Teknologi

- **Frontend:** Next.js 14, React 18, TypeScript, Lucide React.
- **Styling:** CSS responsif dan Google Fonts (DM Sans, Manrope).
- **Rencana integrasi:** Supabase untuk data/autentikasi, Vercel untuk deployment, serta Cloudflare untuk CDN dapat ditambahkan sesuai kebutuhan backend dan operasional.

## Kustomisasi sebelum rilis

- Ganti nomor WhatsApp contoh `6281234567890`, email `hello@haliyora.com`, serta tautan sosial dan lokasi dengan akun resmi.
- Tinjau kembali periode dan syarat promo sebelum publikasi; kode voucher pada landing page adalah contoh.
- Ganti foto stok dengan dokumentasi Haliyora dan pastikan izin penggunaannya.
- Lengkapi detail pendiri, profil perusahaan, tim, dan testimoni yang telah disetujui.

## Lisensi

Proyek ini mengikuti lisensi MIT yang tersedia di [`LICENSE`](./LICENSE).
