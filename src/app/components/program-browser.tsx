'use client';

import { ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import {
  programCategories,
  programs,
  whatsappUrl,
} from '@/data/site-content';

export default function ProgramBrowser() {
  const [activeCategory, setActiveCategory] = useState(
    programCategories[0].id,
  );
  const visiblePrograms = programs.filter(
    (program) => program.category === activeCategory,
  );

  return (
    <div className="program-browser">
      <div className="program-tabs" aria-label="Kategori program">
        {programCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`program-tab${activeCategory === category.id ? ' is-active' : ''}`}
            aria-pressed={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <p className="program-category-copy">
        {programCategories.find((category) => category.id === activeCategory)?.description}
      </p>
      <div className="program-grid" aria-live="polite">
        {visiblePrograms.map((program, index) => (
          <article className={`program-card program-card-${index + 1}`} key={program.name}>
            <div className="program-card-top">
              <span className="program-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="program-format">{program.format}</span>
            </div>
            <div className="program-card-copy">
              <span className="program-audience">{program.audience}</span>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
            </div>
            <div className="program-card-footer">
              <span><Check size={15} aria-hidden="true" /> {program.outcome}</span>
              <a
                href={whatsappUrl(`Halo Haliyora, saya ingin bertanya tentang program ${program.name}.`)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Tanya tentang program ${program.name}`}
              >
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="program-note">
        Belum yakin program yang tepat? Ceritakan usia dan target belajarmu saat
        konsultasi.
      </p>
    </div>
  );
}
