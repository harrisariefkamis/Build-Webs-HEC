'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const profiles = [
  {
    image: '/images/founder_hec.jpeg',
    role: 'Founder Haliyora English Course',
    name: 'Ismir A. Maneke',
    description:
      'Membangun lingkungan belajar yang suportif agar siswa dapat berkembang dan percaya diri menggunakan Bahasa Inggris.',
  },
  {
    image: '/images/mentor-k-ange-hec.jpeg',
    role: 'Teacher & Mentor LPDP',
    name: 'Alhasan Mahabatullah',
    description:
      'Mendampingi proses belajar dengan arahan yang terstruktur, latihan yang konsisten, dan perhatian pada progres setiap siswa.',
  },
  {
    image: '/images/mentor_puni.jpg',
    role: 'Teacher & Mentor LPDP',
    name: 'Mr. Puni',
    description:
      'Menciptakan suasana belajar yang nyaman dan membantu siswa membangun keterampilan komunikasi secara bertahap.',
  },
  {
    image: '/images/team-frontend.jpeg',
    role: 'Software Developer',
    name: 'Rhavi A. Syamsi',
    description:
      'Membangun pengalaman belajar digital melalui antarmuka yang informatif, mudah digunakan, dan responsif.',
  },
  {
    image: '/images/team_harryyss.jpg',
    role: 'Data Enthusiast',
    name: 'harryyss.arf',
    description:
      'Membangun infrastruktur database dan menjaga privasi data untuk menjamin kebutuhan belajar di Haliyora English Course.',
  },
];

export default function ProfilCompany() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToProfile = (index: number) => {
    const carousel = carouselRef.current;
    const card = cardRefs.current[index];

    if (!carousel || !card) {
      return;
    }

    carousel.scrollTo({
      left: card.offsetLeft - (carousel.clientWidth - card.clientWidth) / 2,
      behavior: 'auto',
    });
    setActiveIndex(index);
  };

  const moveCarousel = (direction: -1 | 1) => {
    goToProfile((activeIndex + direction + profiles.length) % profiles.length);
  };

  return (
    <section
      className="section-space scroll-mt-24 bg-gradient-to-b from-teal-50 via-white to-cyan-50"
      id="profil-company"
      aria-labelledby="profile-company-title"
    >
      <div className="section-container">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-12">
          <span className="eyebrow eyebrow-dark">PROFIL COMPANY</span>
          <h2
            className="mt-3 text-balance font-[Inter] text-3xl font-extrabold leading-tight tracking-tight text-[#353578] sm:text-4xl"
            id="profile-company-title"
          >
            Dibimbing oleh Teacher dan Mentor yang berpengalaman
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Berangkat dari kesadaran akan keterbatasan pembelajaran digital, kami bersama para pengajar, founder, dan teamwork berkomitmen menghadirkan pengalaman belajar bahasa Inggris digital yang berkualitas di Haliyora English Course.
          </p>
        </div>

        <div
          className="mx-auto max-w-6xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Profil Founder, Teacher, Mentor, dan Teamwork IT Haliyora"
        >
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto sm:gap-6"
            onScroll={(event) => {
              const carousel = event.currentTarget;
              const carouselCenter =
                carousel.scrollLeft + carousel.clientWidth / 2;
              let nearestIndex = 0;
              let nearestDistance = Number.POSITIVE_INFINITY;

              cardRefs.current.forEach((card, index) => {
                if (!card) {
                  return;
                }

                const cardCenter = card.offsetLeft + card.clientWidth / 2;
                const distance = Math.abs(carouselCenter - cardCenter);

                if (distance < nearestDistance) {
                  nearestIndex = index;
                  nearestDistance = distance;
                }
              });

              setActiveIndex((currentIndex) =>
                currentIndex === nearestIndex ? currentIndex : nearestIndex,
              );
            }}
          >
            {profiles.map((profile, index) => (
              <article
                key={`${profile.role}-${profile.image}`}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                id={profile.role === 'Teamwork IT' && index === 3 ? 'teamwork' : undefined}
                className="flex h-[470px] min-w-0 scroll-mt-24 shrink-0 basis-[84%] snap-center flex-col overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-[0_12px_34px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_18px_42px_rgba(15,23,42,0.13)] sm:basis-[48%] lg:basis-[32%]"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} dari ${profiles.length}: ${profile.role}`}
              >
                <div className="relative h-60 shrink-0 overflow-hidden bg-teal-50">
                  <Image
                    src={profile.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 48vw, 32vw"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6">
                  <span className="mb-3 w-fit rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-teal-800">
                    {profile.role}
                  </span>
                  <h3 className="mb-2 font-[Inter] text-lg font-bold text-slate-900">
                    {profile.name}
                  </h3>
                  <p className="line-clamp-4 text-sm leading-6 text-slate-600">
                    {profile.description}
                  </p>
                </div>
              </article>
            ))}
            <span
              className="basis-[8%] shrink-0 sm:basis-[26%] lg:basis-[34%]"
              aria-hidden="true"
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              className="grid size-11 place-items-center rounded-full border border-teal-100 bg-white text-teal-800 shadow-sm transition hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              aria-label="Lihat profil sebelumnya"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" aria-label="Pilih profil">
              {profiles.map((profile, index) => (
                <button
                  key={`${profile.role}-dot-${index}`}
                  type="button"
                  onClick={() => goToProfile(index)}
                  className={`grid size-8 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                    activeIndex === index
                      ? 'bg-teal-100'
                      : 'bg-transparent hover:bg-teal-50'
                  }`}
                  aria-label={`Tampilkan profil ${index + 1}: ${profile.name}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                >
                  <span
                    className={`size-2.5 rounded-full ${
                      activeIndex === index
                        ? 'scale-125 bg-teal-800 ring-2 ring-teal-800 ring-offset-2'
                        : 'bg-teal-300'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => moveCarousel(1)}
              className="grid size-11 place-items-center rounded-full border border-teal-100 bg-white text-teal-800 shadow-sm transition hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              aria-label="Lihat profil berikutnya"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Profil {activeIndex + 1} dari {profiles.length}:{' '}
            {profiles[activeIndex].role}, {profiles[activeIndex].name}
          </p>
        </div>
      </div>
    </section>
  );
}
