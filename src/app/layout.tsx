import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Haliyora English Course — English for a brighter future',
  description: 'Kursus Bahasa Inggris interaktif untuk anak, remaja, dan dewasa muda. Belajar online atau offline dengan cara yang seru dan percaya diri.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
