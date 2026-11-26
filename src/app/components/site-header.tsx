'use client';

import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const navigation = [
  {
    id: 'about',
    label: 'Tentang',
    items: [
      {
        href: '#tentang',
        label: 'Profil Company',
        description: 'Kenali pendekatan belajar Haliyora.',
      },
      {
        href: '#tentang',
        label: 'Founder & Teamwork',
        description: 'Pelajari cara tim kami mendampingi siswa.',
      },
    ],
  },
  {
    id: 'programs',
    label: 'Program',
    items: [
      {
        href: '#program',
        label: 'Class Reguler',
        description: 'Program bertahap untuk berbagai usia.',
      },
      {
        href: '#program',
        label: 'Class Privat',
        description: 'Belajar sesuai kebutuhan dan jadwal.',
      },
    ],
  },
  {
    id: 'promotions',
    label: 'Promo',
    items: [
      {
        href: '#promo',
        label: 'Paket bulanan',
        description: 'Tanyakan promo kelas yang sedang tersedia.',
      },
      {
        href: '#promo',
        label: 'Paket tahunan',
        description: 'Konsultasikan rencana belajar jangka panjang.',
      },
    ],
  },
  {
    id: 'alumni',
    label: 'Cerita Alumni',
    items: [
      {
        href: '#testimoni',
        label: 'Testimoni alumni',
        description: 'Baca cerita dan progres para alumni.',
      },
    ],
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownButtonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const closeNavigation = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <div className="announcement">
        <span>Mulai belajar dari Rp100.000</span>
        <a href="#promo">
          Lihat promo HEC <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <header className="site-header">
        <div className="site-header-inner">
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
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => {
              setMenuOpen((open) => !open);
              setOpenDropdown(null);
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav
            id="primary-navigation"
            className={`nav-links${menuOpen ? ' is-open' : ''}`}
            aria-label="Navigasi utama"
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                const triggerToFocus = menuOpen
                  ? menuButtonRef.current
                  : dropdownButtonRefs.current[openDropdown ?? ''];
                closeNavigation();
                triggerToFocus?.focus();
              }
            }}
          >
            {navigation.map((item) => {
              const isOpen = openDropdown === item.id;
              const menuId = `nav-dropdown-${item.id}`;

              return (
                <div className="nav-dropdown" key={item.id}>
                  <button
                    ref={(element) => {
                      dropdownButtonRefs.current[item.id] = element;
                    }}
                    className="nav-dropdown-trigger"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className={isOpen ? 'chevron is-open' : 'chevron'}
                    />
                  </button>
                  <div
                    className="nav-dropdown-menu"
                    id={menuId}
                    hidden={!isOpen}
                  >
                    {item.items.map((subitem) => (
                      <a
                        className="nav-dropdown-link"
                        href={subitem.href}
                        key={subitem.label}
                        onClick={closeNavigation}
                      >
                        <span>{subitem.label}</span>
                        <small>{subitem.description}</small>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
            <a
              className="button button-small button-primary nav-cta magnetic-cta"
              href="#konsultasi"
              onClick={closeNavigation}
            >
              Langganan Sekarang <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
