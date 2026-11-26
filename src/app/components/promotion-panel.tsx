'use client';

import { ArrowRight, Check, Copy, Sparkles } from 'lucide-react';
import { useState } from 'react';

const promoCode = 'HEC52';

export default function PromotionPanel() {
  const [status, setStatus] = useState('');

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setStatus('Kode promo berhasil disalin.');
    } catch {
      setStatus(`Tidak dapat menyalin otomatis. Gunakan kode ${promoCode}.`);
    }
  };

  return (
    <section className="promotion-section section-space" id="promo">
      <div className="section-container promotion-layout">
        <div className="promotion-copy">
          <span className="eyebrow eyebrow-on-color">
            <Sparkles size={15} aria-hidden="true" /> PROMO HALIYORA
          </span>
          <h2>Taklukkan target Bahasa Inggrismu.</h2>
          <p>
            Tanyakan cara menggunakan kode promo resmi HEC dan cek program yang
            termasuk penawaran kepada tim kami.
          </p>
          <a className="button button-light" href="#konsultasi">
            Lihat cara klaim <ArrowRight size={17} aria-hidden="true" />
          </a>
          <small>Syarat, periode, dan ketersediaan promo dikonfirmasi saat konsultasi.</small>
        </div>

        <div className="voucher-card">
          <div className="voucher-heading">
            <span>KODE PROMO RESMI HEC</span>
            <span className="voucher-stamp">HEC ✳</span>
          </div>
          <p className="voucher-label">Gunakan kode</p>
          <p className="voucher-code">{promoCode}</p>
          <p className="voucher-caption">Hemat hingga 52% untuk program terpilih</p>
          <button className="copy-button" type="button" onClick={copyCode}>
            {status.startsWith('Kode') ? (
              <Check size={17} aria-hidden="true" />
            ) : (
              <Copy size={16} aria-hidden="true" />
            )}
            {status.startsWith('Kode') ? 'Tersalin' : 'Salin kode'}
          </button>
          <p className="copy-status" aria-live="polite">{status}</p>
          <div className="voucher-footer">
            <span>Haliyora English Course</span>
            <span>LEARN WITH HEART</span>
          </div>
        </div>
      </div>
    </section>
  );
}
