'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#program', label: 'Program' },
  { href: '#promo', label: 'Promo' },
  { href: '#testimoni', label: 'Cerita alumni' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement">
        <span>Mulai belajar dari Rp100.000</span>
        <a href="#promo">
          Lihat promo HEC <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Haliyora English Course">
          <Image
            src="/images/haliyora-mark.png"
            alt=""
            width={140}
            height={40}
            priority
          />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          id="primary-navigation"
          className={`nav-links${menuOpen ? ' is-open' : ''}`}
          aria-label="Navigasi utama"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="button button-small button-primary nav-cta"
            href="#konsultasi"
            onClick={() => setMenuOpen(false)}
          >
            Konsultasi gratis <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>
    </>
  );
}
