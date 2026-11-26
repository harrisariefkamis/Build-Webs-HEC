import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Haliyora English Course | Kursus Bahasa Inggris Online & Offline',
  description:
    'Kursus Bahasa Inggris interaktif untuk anak, remaja, dewasa, dan profesional. Pilih kelas online, tatap muka, privat, IELTS, atau TOEFL.',
  openGraph: {
    title: 'Haliyora English Course',
    description:
      'Belajar Bahasa Inggris dari dasar dengan kelas online dan tatap muka untuk setiap usia.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
