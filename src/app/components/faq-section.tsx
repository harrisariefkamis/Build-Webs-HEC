'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, CircleHelp } from 'lucide-react';
import { whatsappUrl } from '@/data/site-content';

const questions: { id: string; question: string; answer: ReactNode }[] = [
  {
    id: 'age',
    question: 'Program Haliyora cocok untuk usia berapa?',
    answer: (
      <p>
        Pilihan kelas tersedia untuk anak mulai usia 3 tahun, remaja, hingga
        dewasa.{' '}
        <a href="#program">Lihat program berdasarkan usia</a> atau konsultasikan
        kebutuhan belajarmu dengan tim kami.
      </p>
    ),
  },
  {
    id: 'format',
    question: 'Apakah kelas tersedia secara online dan tatap muka?',
    answer: (
      <p>
        Ya. Sejumlah program tersedia secara online maupun di cabang Haliyora.
        Tanyakan <a href="#konsultasi">pilihan kelas dan lokasi</a> yang sesuai
        dengan jadwalmu.
      </p>
    ),
  },
  {
    id: 'exam-prep',
    question: 'Apakah ada kelas persiapan IELTS dan TOEFL?',
    answer: (
      <p>
        Tersedia program IELTS Complete Prep dan TOEFL ITP untuk usia 15 tahun
        ke atas.{' '}
        <a href="#program">Jelajahi program persiapan ujian</a> untuk melihat
        detail dan mendiskusikan target belajarmu.
      </p>
    ),
  },
  {
    id: 'private',
    question: 'Bisakah saya mengambil kelas privat?',
    answer: (
      <p>
        Bisa. Private Class menggunakan format 1-on-1 dengan materi dan jadwal
        yang dapat disesuaikan dengan kebutuhan.{' '}
        <a href={whatsappUrl('Halo Haliyora, saya ingin bertanya tentang kelas privat.')}>
          Hubungi tim Haliyora
        </a>{' '}
        untuk konsultasi.
      </p>
    ),
  },
  {
    id: 'price',
    question: 'Berapa biaya kursus di Haliyora?',
    answer: (
      <p>
        Kelas reguler mulai dari Rp100.000. Biaya dan ketersediaan paket dapat
        berbeda menurut program serta format kelas;{' '}
        <a href="#konsultasi">tanyakan rincian terbaru</a> kepada tim kami.
      </p>
    ),
  },
  {
    id: 'pare',
    question: 'Apa itu program intensif Pare?',
    answer: (
      <p>
        Program ini menawarkan pengalaman belajar intensif selama tiga bulan di
        Kampung Inggris, Pare. Untuk informasi jadwal dan biaya, silakan{' '}
        <a href="#konsultasi">konsultasi dengan tim Haliyora</a>.
      </p>
    ),
  },
  {
    id: 'placement',
    question: 'Bagaimana cara memilih kelas yang tepat?',
    answer: (
      <p>
        Pertimbangkan usia, tujuan belajar, jadwal, dan format kelas yang
        diinginkan. Tim kami dapat membantu merekomendasikan pilihan—mulai
        konsultasi melalui{' '}
        <a href={whatsappUrl('Halo Haliyora, bantu saya memilih kelas Bahasa Inggris yang sesuai.')}>
          WhatsApp
        </a>
        .
      </p>
    ),
  },
  {
    id: 'corporate',
    question: 'Apakah tersedia pelatihan Bahasa Inggris untuk perusahaan?',
    answer: (
      <p>
        Ya. Corporate English menyediakan pelatihan untuk tim, termasuk
        komunikasi bisnis, negosiasi, presentasi, dan korespondensi.{' '}
        <a href="#konsultasi">Diskusikan kebutuhan tim Anda</a> dengan Haliyora.
      </p>
    ),
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contextRef = useRef<ReturnType<typeof gsap.context> | null>(null);
  const panelsRef = useRef(new Map<string, HTMLDivElement>());
  const chevronsRef = useRef(new Map<string, SVGSVGElement>());
  const openIdRef = useRef<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {}, section);
    contextRef.current = context;

    panelsRef.current.forEach((panel) => {
      if (panel.hidden) panel.setAttribute('hidden', 'until-found');
    });

    const handleBeforeMatch = (event: Event) => {
      const panel = event.target;
      if (!(panel instanceof HTMLElement)) return;

      const id = panel.dataset.faqId;
      if (!id) return;

      const previousId = openIdRef.current;
      if (previousId && previousId !== id) {
        const previousPanel = panelsRef.current.get(previousId);
        const previousChevron = chevronsRef.current.get(previousId);
        if (previousPanel) {
          previousPanel.inert = true;
          previousPanel.setAttribute('hidden', 'until-found');
          gsap.set(previousPanel, { clearProps: 'height,opacity' });
        }
        if (previousChevron) gsap.set(previousChevron, { rotation: 0 });
      }

      panel.inert = false;
      const chevron = chevronsRef.current.get(id);
      if (chevron) gsap.set(chevron, { rotation: 180 });
      openIdRef.current = id;
      setOpenId(id);
    };

    section.addEventListener('beforematch', handleBeforeMatch);

    return () => {
      section.removeEventListener('beforematch', handleBeforeMatch);
      context.revert();
      contextRef.current = null;
    };
  }, []);

  const toggleQuestion = (id: string) => {
    const closingId = openId;
    const nextOpenId = closingId === id ? null : id;
    const closingPanel = closingId ? panelsRef.current.get(closingId) : null;
    const openingPanel = nextOpenId ? panelsRef.current.get(nextOpenId) : null;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const animate = () => {
      if (closingPanel && closingId !== nextOpenId) {
        gsap.killTweensOf(closingPanel);
        closingPanel.inert = true;

        if (reducedMotion) {
          gsap.set(closingPanel, { height: 0, opacity: 0 });
          closingPanel.setAttribute('hidden', 'until-found');
        } else {
          gsap.to(closingPanel, {
            height: 0,
            opacity: 0,
            duration: 0.28,
            ease: 'power2.inOut',
            onComplete: () => {
              closingPanel.setAttribute('hidden', 'until-found');
              gsap.set(closingPanel, { clearProps: 'height,opacity' });
            },
          });
        }
      }

      if (openingPanel && openingPanel !== closingPanel) {
        gsap.killTweensOf(openingPanel);
        openingPanel.removeAttribute('hidden');
        openingPanel.inert = false;

        if (reducedMotion) {
          gsap.set(openingPanel, { height: 'auto', opacity: 1 });
        } else {
          gsap.set(openingPanel, { height: 0, opacity: 0 });
          gsap.to(openingPanel, {
            height: 'auto',
            opacity: 1,
            duration: 0.36,
            ease: 'power2.out',
            onComplete: () => {
              gsap.set(openingPanel, { clearProps: 'height,opacity' });
            },
          });
        }
      }

      const chevron = chevronsRef.current.get(id);
      if (chevron) {
        gsap.to(chevron, {
          rotation: nextOpenId === id ? 180 : 0,
          duration: reducedMotion ? 0 : 0.24,
          ease: 'power2.inOut',
        });
      }

      if (closingId && closingId !== id) {
        const closingChevron = chevronsRef.current.get(closingId);
        if (closingChevron) {
          gsap.to(closingChevron, {
            rotation: 0,
            duration: reducedMotion ? 0 : 0.24,
            ease: 'power2.inOut',
          });
        }
      }
    };

    if (contextRef.current) {
      contextRef.current.add(animate);
    } else {
      animate();
    }

    openIdRef.current = nextOpenId;
    setOpenId(nextOpenId);
  };

  return (
    <section
      className="faq-section section-space"
      aria-labelledby="faq-heading"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="faq-content">
          <div className="faq-heading">
            <span className="eyebrow">ADA YANG INGIN DITANYAKAN?</span>
            <h2 id="faq-heading">Pertanyaan yang sering diajukan</h2>
            <p>
              Temukan jawaban singkat tentang kelas, program, dan cara memulai
              belajar bersama Haliyora.
            </p>
          </div>

          <div className="faq-list">
            {questions.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-answer-${item.id}`;

              return (
                <article
                  className={`faq-item${isOpen ? ' is-open' : ''}`}
                  key={item.id}
                >
                  <h3 className="faq-question-heading">
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleQuestion(item.id)}
                    >
                      <CircleHelp
                        className="faq-question-icon"
                        size={20}
                        aria-hidden="true"
                      />
                      <span>{item.question}</span>
                      <ChevronDown
                        className="faq-chevron"
                        size={18}
                        aria-hidden="true"
                        ref={(node) => {
                          if (node) chevronsRef.current.set(item.id, node);
                          else chevronsRef.current.delete(item.id);
                        }}
                      />
                    </button>
                  </h3>
                  <div
                    className="faq-answer"
                    id={panelId}
                    data-faq-id={item.id}
                    aria-hidden={!isOpen}
                    hidden
                    inert={!isOpen}
                    ref={(node) => {
                      if (node) {
                        node.inert = !isOpen;
                        panelsRef.current.set(item.id, node);
                      } else {
                        panelsRef.current.delete(item.id);
                      }
                    }}
                  >
                    <div className="faq-answer-content">{item.answer}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
