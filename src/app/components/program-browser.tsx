'use client';

import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import { useRef, useState, type KeyboardEvent } from 'react';
import {
  programCategories,
  programs,
  whatsappUrl,
  type ProgramCategory,
  type ProgramTheme,
} from '@/data/site-content';

const programThemeStyles: Record<
  ProgramTheme,
  { card: string; accent: string }
> = {
  dasher: { card: 'border-orange-200 bg-orange-50', accent: 'text-orange-800' },
  runner: { card: 'border-cyan-200 bg-cyan-50', accent: 'text-cyan-800' },
  sprinter: { card: 'border-lime-200 bg-lime-50', accent: 'text-lime-800' },
  ranger: { card: 'border-violet-200 bg-violet-50', accent: 'text-violet-800' },
  explorer: { card: 'border-indigo-200 bg-indigo-50', accent: 'text-indigo-800' },
  ielts: { card: 'border-blue-200 bg-blue-50', accent: 'text-blue-800' },
  toefl: { card: 'border-rose-200 bg-rose-50', accent: 'text-rose-800' },
  private: { card: 'border-teal-200 bg-teal-50', accent: 'text-teal-800' },
  corporate: { card: 'border-slate-300 bg-slate-100', accent: 'text-slate-800' },
};

export default function ProgramBrowser() {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>(
    programCategories[0].id,
  );
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const visiblePrograms = programs.filter(
    (program) => program.category === activeCategory,
  );
  const activeCategoryDescription = programCategories.find(
    (category) => category.id === activeCategory,
  )?.description;

  const selectTab = (index: number) => {
    const category = programCategories[index];

    if (!category) {
      return;
    }

    setActiveCategory(category.id);
    tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | undefined;

    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % programCategories.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + programCategories.length) % programCategories.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = programCategories.length - 1;
    }

    if (nextIndex !== undefined) {
      event.preventDefault();
      selectTab(nextIndex);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_12px_36px_rgba(15,23,42,0.04)] sm:p-6">
      <div
        className="flex w-full flex-nowrap gap-1 overflow-x-auto rounded-full bg-slate-100 p-1 sm:w-fit"
        role="tablist"
        aria-label="Kategori program"
      >
        {programCategories.map((category, index) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`program-tab-${category.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              className={`relative min-h-11 shrink-0 rounded-full px-4 text-xs font-semibold transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-0 after:border-b-2 after:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 ${
                isActive
                  ? 'bg-[#353578] text-white shadow-sm after:border-white forced-colors:after:border-[Highlight]'
                  : 'text-slate-600 hover:bg-white hover:text-[#353578] after:border-transparent'
              }`}
              onClick={() => setActiveCategory(category.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <p className="mb-5 mt-4 text-sm leading-6 text-slate-600">
        {activeCategoryDescription}
      </p>

      <div
        id="program-panel"
        className="outline-none focus-visible:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-500"
        role="tabpanel"
        aria-labelledby={`program-tab-${activeCategory}`}
        tabIndex={0}
      >
        <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visiblePrograms.map((program, index) => {
            const theme = programThemeStyles[program.theme];

            return (
              <article
                className={`group flex h-full min-h-[400px] min-w-0 flex-col rounded-2xl border p-5 shadow-sm motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-lg ${theme.card}`}
                key={program.name}
              >
                <div className="mb-3 grid h-[88px] shrink-0 place-items-center overflow-hidden rounded-xl border border-white/80 bg-white/70">
                  <Image
                    src={program.image}
                    alt=""
                    width={112}
                    height={112}
                    sizes="88px"
                    className="h-[88px] w-[88px] object-contain"
                  />
                </div>

                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-slate-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold text-slate-700">
                    {program.format}
                  </span>
                </div>

                <div className="flex-1">
                  <span className={`text-xs font-bold ${theme.accent}`}>
                    {program.audience}
                  </span>
                  <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-900">
                    {program.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {program.description}
                  </p>
                </div>

                <footer className="mt-5 flex items-center justify-between gap-3 border-t border-slate-200/80 pt-4">
                  <span className="inline-flex min-w-0 items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <Check
                      size={15}
                      className={`shrink-0 ${theme.accent}`}
                      aria-hidden="true"
                    />
                    <span>{program.outcome}</span>
                  </span>
                  <a
                    className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-[#353578] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#26265f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                    href={whatsappUrl(`Halo Haliyora, saya ingin bertanya tentang program ${program.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Konsultasi tentang program ${program.name}`}
                  >
                    Konsultasi
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </footer>
              </article>
            );
          })}
        </div>
      </div>

      <p className="mb-0 mt-5 text-center text-xs leading-5 text-slate-500">
        Belum yakin program yang tepat? Ceritakan usia dan target belajarmu saat
        konsultasi.
      </p>
    </div>
  );
}
