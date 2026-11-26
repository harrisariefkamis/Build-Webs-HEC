import Image from 'next/image';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Check,
  GraduationCap,
  MessageCircle,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react';
import ContactLinks from './components/contact-links';
import FaqSection from './components/faq-section';
import ParticleFieldLoader from './components/particle-field-loader';
import PageAnimations from './components/page-animations';
import ProgramBrowser from './components/program-browser';
import PromotionPanel from './components/promotion-panel';
import SiteHeader from './components/site-header';
import {
  contactEmail,
  consultationTopics,
  testimonials,
  whatsappUrl,
} from '@/data/site-content';

const heroPhoto =
  "/images/Screenshot_26-11-2026_163547_www.instagram.com.jpeg";

const strengths = [
  {
    icon: UsersRound,
    title: 'Tutor yang mendampingi',
    detail:
      'Dapatkan arahan dan umpan balik yang membantu setiap siswa bertumbuh.',
  },
  {
    icon: MessageCircle,
    title: 'Latihan speaking aktif',
    detail:
      'Bangun keberanian berbicara melalui praktik dan percakapan.',
  },
  {
    icon: MonitorPlay,
    title: 'Online & tatap muka',
    detail:
      'Pilih cara belajar yang paling sesuai dengan rutinitasmu.',
  },
  {
    icon: GraduationCap,
    title: 'Program untuk berbagai usia',
    detail:
      'Mulai dari kelas anak hingga persiapan untuk kebutuhan profesional.',
  },
  {
    icon: BookOpenCheck,
    title: 'Modul dan aktivitas interaktif',
    detail:
      'Gunakan materi dan latihan untuk mendukung perkembangan di kelas.',
  },
  {
    icon: ShieldCheck,
    title: 'Target belajar lebih terarah',
    detail:
      'Pilih jalur reguler, privat, ujian, atau program intensif sesuai tujuan.',
  },
];

const learningSteps = [
  {
    number: '01',
    icon: Target,
    label: 'Kenali tujuan',
    title: 'Mulai dari kebutuhanmu.',
    detail:
      'Ceritakan usia, level, jadwal, dan target belajar agar kami memahami titik awalmu.',
  },
  {
    number: '02',
    icon: UsersRound,
    label: 'Pilih jalur',
    title: 'Temukan kelas yang pas.',
    detail:
      'Pilih program reguler, privat, persiapan ujian, online, atau tatap muka.',
  },
  {
    number: '03',
    icon: MessageCircle,
    label: 'Praktik aktif',
    title: 'Belajar dengan berani.',
    detail:
      'Bangun kosakata dan kepercayaan diri melalui praktik bersama tutor.',
  },
  {
    number: '04',
    icon: GraduationCap,
    label: 'Lihat progres',
    title: 'Terus melangkah maju.',
    detail:
      'Tinjau perkembangan dan sesuaikan langkah belajar berikutnya.',
  },
];

const plans = [
  {
    name: 'Kelas Reguler',
    description: 'Belajar bertahap dalam kelas bersama teman.',
    price: 'Mulai Rp100.000',
    priceNote: 'Tanyakan ketersediaan paket dan jadwal.',
    features: [
      'Pilihan program sesuai usia',
      'Latihan speaking dan kosakata',
      'Pilihan belajar online atau cabang',
    ],
    featured: true,
  },
  {
    name: 'Kelas Privat',
    description: 'Materi dan jadwal yang mengikuti kebutuhanmu.',
    price: 'Biaya fleksibel',
    priceNote: 'Disesuaikan dengan tujuan dan format kelas.',
    features: [
      'Pendampingan lebih personal',
      'Fokus pada target belajar',
      'Jadwal dapat dikonsultasikan',
    ],
    featured: false,
  },
  {
    name: 'Program Intensif Pare',
    description: 'Pengalaman belajar intensif di Kampung Inggris.',
    price: 'Program 3 bulan',
    priceNote: 'Tanyakan jadwal dan biaya program.',
    features: [
      'Praktik Bahasa Inggris harian',
      'Lingkungan belajar yang suportif',
      'Konsultasi program dan keberangkatan',
    ],
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="landing-page">
        <PageAnimations />
        <section className="hero-section" id="home">
          <ParticleFieldLoader />
          <div className="hero-container">
            <div className="hero-copy">
              <span className="eyebrow" data-hero-reveal>
                KURSUS BAHASA INGGRIS ONLINE & TATAP MUKA
              </span>
              <h1 data-hero-reveal>
                Hanya 100rb.
                <span>Lancar Speaking.</span>
              </h1>
              <p className="hero-description" data-hero-reveal>
                Belajar Bahasa Inggris dari nol, online atau tatap muka, bersama
                tutor yang mendampingi setiap progres.
              </p>
              <div className="hero-actions" data-hero-reveal>
                <a className="button button-primary magnetic-cta" href="#program">
                  Temukan program <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  className="button button-outline"
                  href={whatsappUrl('Halo Haliyora, saya ingin konsultasi kelas Bahasa Inggris.')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} aria-hidden="true" /> Konsultasi online
                </a>
              </div>
              <div className="hero-proof" data-hero-reveal>
                <div className="proof-avatars" aria-hidden="true">
                  <span>H</span><span>E</span><span>C</span>
                </div>
                <p>
                  <strong>Untuk setiap tahap belajar</strong>
                  <span>Usia 3 tahun hingga kebutuhan profesional</span>
                </p>
              </div>
            </div>
            <div className="hero-visual" data-hero-reveal>
              <div className="hero-photo">
                <Image
                  src={heroPhoto}
                  alt="Suasana kelas anak-anak dan tutor sedang belajar bersama"
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 52vw"
                />
              </div>
              <div className="hero-photo-note">
                <span className="note-icon"><Sparkles size={18} aria-hidden="true" /></span>
                <span><strong>Berani mencoba</strong><small>Belajar tanpa takut salah</small></span>
              </div>
              <span className="hero-sticker" aria-hidden="true">Hello,<br />future!</span>
              <span className="hero-sparkle sparkle-one" aria-hidden="true">✳</span>
              <span className="hero-sparkle sparkle-two" aria-hidden="true">✦</span>
            </div>
            <a className="scroll-cue" href="#tentang">
              Kenali Haliyora <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section
          className="strength-section bento-section section-space"
          id="tentang"
        >
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow eyebrow-dark">WHY HALIYORA</span>
                <h2>
                  Belajar Bahasa Inggris dengan <span>ruang untuk bertumbuh.</span>
                </h2>
              </div>
              <p>
                Kami percaya proses belajar yang menyenangkan dan pendampingan
                yang tepat membantu setiap siswa menemukan suaranya.
              </p>
            </div>
            <div className="bento-grid">
              {strengths.map(({ icon: Icon, title, detail }, index) => (
                <article
                  className={`feature-card feature-card-${index + 1}`}
                  key={title}
                >
                  <span className={`strength-icon strength-icon-${(index % 3) + 1}`}>
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="feature-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section section-space" id="showcase">
          <div className="section-container showcase-content">
            <div className="section-heading showcase-heading">
              <div>
                <span className="eyebrow eyebrow-dark">YOUR LEARNING JOURNEY</span>
                <h2>
                  Langkah kecil, <span>progres yang nyata.</span>
                </h2>
              </div>
              <p>
                Kenali alur belajar Haliyora—dari konsultasi pertama sampai
                tujuan belajarmu semakin dekat.
              </p>
            </div>
            <p className="showcase-hint">
              Jelajahi tahap perjalanan belajarmu
              <ArrowRight size={15} aria-hidden="true" />
            </p>
            <div
              className="showcase-viewport"
              role="region"
              aria-label="Langkah perjalanan belajar Haliyora"
              tabIndex={0}
            >
              <div className="showcase-track">
                {learningSteps.map(({ number, icon: Icon, label, title, detail }) => (
                  <article className="journey-card" key={number}>
                    <div className="journey-card-top">
                      <span className="journey-icon">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <span className="journey-number">{number}</span>
                    </div>
                    <span className="journey-label">{label}</span>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                    <span className="journey-decoration" aria-hidden="true">
                      HEC
                    </span>
                  </article>
                ))}
              </div>
            </div>
            <span className="showcase-mobile-hint">
              Geser kartu ke samping untuk melihat seluruh langkah
            </span>
          </div>
        </section>

        <section className="program-section section-space" id="program">
          <div className="section-container">
            <div className="section-heading program-heading">
              <div>
                <span className="eyebrow eyebrow-dark">FIND YOUR LEARNING PATH</span>
                <h2>Pilih program sesuai <span>usia & target belajar.</span></h2>
              </div>
              <p>
                Dari kelas pertama hingga kebutuhan profesional, temukan
                pembelajaran yang paling sesuai dengan tujuanmu.
              </p>
            </div>
            <ProgramBrowser />
          </div>
        </section>

        <section className="starter-section section-space">
          <div className="section-container starter-layout">
            <div className="starter-poster">
              <Image
                src="/images/course-poster.png"
                alt="Poster program belajar Bahasa Inggris dari nol secara online dan offline"
                width={512}
                height={512}
                sizes="(max-width: 760px) 90vw, 420px"
              />
            </div>
            <div className="starter-copy">
              <span className="eyebrow eyebrow-dark">START WITH THE BASICS</span>
              <h2>Mulai belajar Bahasa Inggris <span>dari nol.</span></h2>
              <p>
                Bangun fondasi yang kuat melalui latihan speaking, grammar,
                kosakata sehari-hari, dan pronunciation bersama tutor.
              </p>
              <ul className="starter-list">
                <li><Check size={17} aria-hidden="true" /> Speaking & perkenalan</li>
                <li><Check size={17} aria-hidden="true" /> Grammar untuk komunikasi</li>
                <li><Check size={17} aria-hidden="true" /> Kosakata & pronunciation</li>
              </ul>
              <a className="text-link" href="#konsultasi">
                Tanyakan kelas pemula <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <PromotionPanel />

        <section className="pricing-section section-space" id="paket">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow eyebrow-dark">PILIH JALUR BELAJARMU</span>
                <h2>
                  Program yang pas untuk <span>targetmu.</span>
                </h2>
              </div>
              <p>
                Biaya dan ketersediaan bergantung pada jenjang serta jadwal.
                Konsultasikan pilihan paket bersama tim Haliyora.
              </p>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article
                  className={`pricing-card${plan.featured ? ' pricing-card-featured' : ''}`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <span className="popular-badge">Pilihan populer</span>
                  )}
                  <h3>{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>
                  <p className="pricing-amount">{plan.price}</p>
                  <p className="pricing-note">{plan.priceNote}</p>
                  <ul className="pricing-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} aria-hidden="true" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`button ${plan.featured ? 'button-primary' : 'button-outline'}`}
                    href={whatsappUrl(`Halo Haliyora, saya ingin konsultasi tentang ${plan.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Konsultasi paket <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section section-space" id="testimoni">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow eyebrow-dark">REAL PEOPLE, REAL PROGRESS</span>
                <h2>Cerita alumni <span>program intensif Pare.</span></h2>
              </div>
              <p>
                Pengalaman belajar yang dibagikan oleh alumni program intensif
                Haliyora di Kampung Inggris Pare.
              </p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <div className="rating" aria-label="5 dari 5 bintang">
                    <span aria-hidden="true">★★★★★</span>
                    <BookOpenCheck size={17} aria-hidden="true" />
                  </div>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <div className="testimonial-author">
                    <span className="author-avatar" aria-hidden="true">{testimonial.initials}</span>
                    <span>
                      <strong>{testimonial.name}</strong>
                      <small>{testimonial.detail}</small>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="consultation-section section-space" id="konsultasi">
          <div className="section-container consultation-layout">
            <div className="consultation-copy">
              <span className="eyebrow eyebrow-on-color">
                <GraduationCap size={16} aria-hidden="true" /> YOUR NEXT STEP STARTS HERE
              </span>
              <h2>Haiya, kami siap <span>membantu.</span></h2>
              <p>
                Tanyakan rekomendasi kelas, jadwal, pilihan belajar, atau
                program intensif. Tim Haliyora akan membantu lewat WhatsApp.
              </p>
              <a
                className="button button-light"
                href={whatsappUrl('Halo Haliyora, saya ingin konsultasi gratis tentang kelas Bahasa Inggris.')}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} aria-hidden="true" /> Chat WhatsApp
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="consultation-card">
              <div className="consultation-card-heading">
                <span className="consultation-avatar"><MessageCircle size={19} aria-hidden="true" /></span>
                <span><strong>Konsultasi Haliyora</strong><small>Tim kami siap membantu</small></span>
                <span className="online-indicator">Online</span>
              </div>
              <p className="consultation-prompt">
                Hai! Pilih topik untuk mulai bertanya kepada tim kami:
              </p>
              <div className="consultation-topics">
                {consultationTopics.map((topic) => (
                  <a
                    href={whatsappUrl(`Halo Haliyora, saya ingin bertanya: ${topic}.`)}
                    key={topic}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {topic} <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="consultation-disclaimer">
                Konsultasi dilanjutkan langsung dengan tim melalui WhatsApp.
              </p>
            </div>
          </div>
        </section>

        <FaqSection />

        <ContactLinks />
      </main>
      <footer className="site-footer">
        <div className="section-container footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home" aria-label="Kembali ke atas">
              <Image
                src="/images/haliyora-mark.png"
                alt="Haliyora English Course"
                width={140}
                height={40}
              />
            </a>
            <p>
              Kursus Bahasa Inggris interaktif untuk tumbuh, berani mencoba,
              dan melangkah lebih jauh.
            </p>
          </div>
          <div className="footer-column">
            <strong>Jelajahi</strong>
            <a href="#tentang">Tentang Haliyora</a>
            <a href="#showcase">Alur belajar</a>
            <a href="#program">Program belajar</a>
            <a href="#paket">Paket belajar</a>
            <a href="#promo">Promo</a>
            <a href="#testimoni">Cerita alumni</a>
          </div>
          <div className="footer-column">
            <strong>Hubungi kami</strong>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a
              href={whatsappUrl('Halo Haliyora, saya ingin bertanya tentang kelas.')}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="#contact-links">Lokasi & kanal resmi</a>
          </div>
        </div>
        <div className="section-container footer-bottom">
          <span>© {new Date().getFullYear()} Haliyora English Course. Seluruh hak cipta dilindungi.</span>
          <a href="#home">Kembali ke atas <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  );
}
