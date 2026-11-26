import type { Metadata } from 'next';
import ContactLinks from '@/components/contact-links';
import './globals.css';

export const metadata: Metadata = {
  title: 'Haliyora English Course — English for a brighter future',
  description:
    'Belajar Bahasa Inggris secara Online/Offline hanya di Haliyora English Course. Cukup dengan 100rb saja.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        {children}
        <ContactLinks />
      </body>
    </html>
  );
}
