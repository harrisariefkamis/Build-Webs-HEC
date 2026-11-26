'use client';

import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, Check, ChevronDown, Clock3, GraduationCap, Instagram, MapPin, Menu, MessageCircle, Play, Sparkles, Star, Users, X, Youtube } from 'lucide-react';

const programs = [
  { name: 'Dasher', age: '3–6 tahun', detail: 'Langkah pertama belajar Inggris lewat cerita, lagu, dan permainan.', tone: 'peach', emoji: '🧸', tag: 'Little learners' },
  { name: 'Runner', age: '7–10 tahun', detail: 'Bangun kosakata dan berani ngobrol lewat aktivitas seru.', tone: 'blue', emoji: '🚀', tag: 'Young explorers' },
  { name: 'Sprinter', age: '11–14 tahun', detail: 'Asah komunikasi, kreativitas, dan percaya diri di setiap sesi.', tone: 'lilac', emoji: '🎧', tag: 'Curious minds' },
  { name: 'Ranger', age: '15–18 tahun', detail: 'Siap menghadapi sekolah, dunia nyata, dan kesempatan global.', tone: 'mint', emoji: '🌍', tag: 'Future ready' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyVoucher = async () => {
    try { await navigator.clipboard.writeText('SIAPUJIAN'); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { setCopied(false); }
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topline"><span>✨ Belajar Inggris, berani melangkah lebih jauh!</span><a href="#program">Temukan kelasmu <ArrowRight size={14} /></a></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Haliyora English Course home"><span className="brand-mark">h<span>.</span></span><span className="brand-copy">haliyora<small>ENGLISH COURSE</small></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a onClick={closeMenu} href="#about">Tentang kami</a>
          <a onClick={closeMenu} href="#program">Program <ChevronDown size={14} /></a>
          <a onClick={closeMenu} href="#promo">Promo</a>
          <a onClick={closeMenu} href="#stories">Cerita siswa</a>
          <a className="nav-cta" onClick={closeMenu} href="#contact">Konsultasi gratis <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot" /> YOUR ENGLISH, YOUR NEXT ADVENTURE</div>
          <h1>Small steps.<br /><span>Big world.</span></h1>
          <p className="hero-lead">Bantu si kecil tumbuh jadi komunikator yang percaya diri. Belajar Bahasa Inggris jadi pengalaman seru—di kelas maupun dari rumah.</p>
          <div className="hero-actions"><a className="button button-orange" href="#contact">Konsultasi di cabang <ArrowRight size={17} /></a><a className="button button-outline" href="https://wa.me/6281234567890?text=Halo%20Haliyora%2C%20saya%20ingin%20konsultasi%20kelas%20online" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Konsultasi online</a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>👩🏻</span><span>👦🏽</span><span>👧🏻</span><span>👨🏾</span></div><div><div className="stars">★★★★★ <b>4.9/5</b></div><small>Teman belajar untuk keluarga Indonesia</small></div></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85" alt="Anak-anak belajar bersama di kelas yang ceria" /><div className="photo-shade" /></div>
          <div className="floating-card float-top"><span className="float-icon purple"><Sparkles size={18} /></span><span><b>Belajar sambil bermain</b><small>Seru di setiap sesi!</small></span></div>
          <div className="floating-card float-bottom"><span className="float-icon orange"><GraduationCap size={20} /></span><span><b>Usia 3–18+</b><small>Ada kelas untuk semua</small></span></div>
          <div className="scribble">✳</div><div className="hero-sticker">Let's<br />speak! <span>💬</span></div>
        </div>
        <a className="scroll-hint" href="#program"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      </section>

      <section className="trust-strip" aria-label="Keunggulan Haliyora"><div><Users /><span><b>Small class,</b> big attention</span></div><div><BadgeCheck /><span><b>Pengajar</b> berpengalaman</span></div><div><BookOpen /><span><b>Belajar aktif,</b> bukan menghafal</span></div><div><Star /><span><b>Online & offline,</b> pilih caramu</span></div></section>

      <section className="program-section section-wrap" id="program">
        <div className="section-heading"><div><div className="eyebrow eyebrow-dark">FIND YOUR HAPPY CLASS</div><h2>One little step.<br /><span>A whole new world.</span></h2></div><p>Setiap anak punya cara belajar yang berbeda. Temukan program yang pas untuk usia, tujuan, dan rasa ingin tahunya.</p></div>
        <div className="program-grid">{programs.map((program, i) => <article className={`program-card ${program.tone}`} key={program.name}><div className="program-card-top"><span className="program-emoji">{program.emoji}</span><span className="program-tag">{program.tag}</span></div><div><span className="age-label">{program.age}</span><h3>{program.name}</h3><p>{program.detail}</p></div><a href="#contact" aria-label={`Konsultasi program ${program.name}`} className="card-arrow"><ArrowUpRight size={19} /></a><span className="card-number">0{i + 1}</span></article>)}</div>
        <div className="program-more"><span>Butuh target belajar yang lebih spesifik?</span><a href="#contact">Jelajahi IELTS, TOEFL, Private & Corporate <ArrowRight size={16} /></a></div>
      </section>

      <section className="about-section" id="about"><div className="about-image"><img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=950&q=85" alt="Pengajar mendampingi siswa dalam kegiatan belajar" /><div className="experience-badge"><b>Learn</b><span>with heart ♡</span></div></div><div className="about-copy"><div className="eyebrow eyebrow-dark">MORE THAN JUST ENGLISH</div><h2>Ruang aman untuk<br /><span>berani mencoba.</span></h2><p>Kami percaya bahasa tumbuh lewat pengalaman, bukan tekanan. Di Haliyora, siswa didukung untuk bertanya, bereksplorasi, dan menemukan suara mereka sendiri.</p><div className="benefit-list"><div><span><Check size={16} /></span><p><b>Pengajar yang peduli</b><small>Mentor suportif yang kenal setiap siswa.</small></p></div><div><span><Check size={16} /></span><p><b>Metode interaktif</b><small>Teknologi, aktivitas, dan praktik nyata.</small></p></div><div><span><Check size={16} /></span><p><b>Fleksibel untuk keluarga</b><small>Pilih belajar di cabang atau online.</small></p></div></div><a className="text-link" href="#contact">Kenali Haliyora lebih dekat <ArrowRight size={17} /></a></div></section>

      <section className="features-section"><div className="features-head"><div className="eyebrow">A LITTLE DIFFERENT, A LOT MORE FUN</div><h2>Learning that feels like <span>play.</span></h2><p>Pengalaman belajar yang bikin anak ingin datang lagi.</p></div><div className="feature-grid"><article className="feature-item"><div className="feature-icon icon-yellow">✦</div><h3>Words come alive</h3><p>Games, stories, and projects yang bikin bahasa Inggris terasa dekat.</p></article><article className="feature-item"><div className="feature-icon icon-pink">♡</div><h3>Confidence grows here</h3><p>Setiap suara didengar. Setiap progres, sekecil apa pun, dirayakan.</p></article><article className="feature-item"><div className="feature-icon icon-blue">◉</div><h3>Smart tools, real talk</h3><p>Teknologi bantu belajar—percakapan nyata bikin ilmunya melekat.</p></article><article className="feature-item"><div className="feature-icon icon-green">↗</div><h3>Progress you can see</h3><p>Tujuan belajar jelas dan perkembangan dibagikan dengan orang tua.</p></article></div></section>

      <section className="promo-section" id="promo"><div className="promo-decor decor-a">✳</div><div className="promo-decor decor-b">✦</div><div className="promo-copy"><span className="promo-pill">A LITTLE GIFT FOR YOUR BIG DREAMS</span><h2>Ready, set,<br />speak English!</h2><p>Mulai petualangan Bahasa Inggrismu dengan penawaran spesial. Kuota terbatas—yuk, tanya tim kami hari ini!</p><a className="button button-white" href="#contact">Klaim promo sekarang <ArrowRight size={17} /></a><small>*Syarat & ketentuan berlaku. Hubungi kami untuk info periode promo.</small></div><div className="voucher-card"><div className="voucher-top"><span>YOUR FIRST STEP STARTS HERE</span><span>✦ HEC</span></div><div className="voucher-middle"><small>PAKAI KODE SPESIAL</small><strong>SIAPUJIAN</strong><span>dan mulai belajar dengan lebih semangat</span></div><button onClick={copyVoucher} className="copy-button">{copied ? <><Check size={16} /> Tersalin!</> : <>Salin kode <ArrowRight size={16} /></>}</button><div className="voucher-bottom"><span>Haliyora English Course</span><span>LEARN WITH HEART ♡</span></div></div></section>

      <section className="stories-section section-wrap" id="stories"><div className="stories-image"><img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85" alt="Siswa menikmati kegiatan belajar bahasa bersama" /><span className="image-caption"><Play size={14} fill="currentColor" /> Real stories, real growth</span></div><div className="story-copy"><div className="eyebrow eyebrow-dark">GROWING, ONE STORY AT A TIME</div><h2>“Sekarang aku<br /><span>berani ngomong!</span>”</h2><div className="story-stars">★★★★★</div><blockquote>“Awalnya malu-malu banget kalau diminta bicara Bahasa Inggris. Setelah ikut kelas dan belajar bareng teman-teman, sekarang jadi lebih percaya diri. Belajarnya juga seru, nggak terasa seperti belajar!”</blockquote><div className="story-author"><div className="author-avatar">👧🏻</div><div><b>Nadia, 14 tahun</b><small>Program Sprinter · Alumni English Camp Pare</small></div></div><div className="story-dots"><span className="active" /><span /><span /></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-inner"><div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>Let’s make English<br />their <span>superpower.</span></h2><p>Ceritakan tujuan belajarmu. Tim kami siap bantu menemukan kelas yang paling cocok—tanpa biaya konsultasi.</p></div><div className="contact-card"><div className="contact-card-icon"><MessageCircle size={23} /></div><h3>Mulai dengan ngobrol</h3><p>Tanya jadwal, program, atau lokasi kelas. Kami senang bantu!</p><a href="https://wa.me/6281234567890?text=Halo%20Haliyora%2C%20saya%20ingin%20konsultasi" className="button button-orange" target="_blank" rel="noreferrer">Chat WhatsApp <ArrowRight size={17} /></a><a className="email-link" href="mailto:hello@haliyora.com">atau email hello@haliyora.com</a></div></div></section>

      <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="brand brand-light" href="#home"><span className="brand-mark">h<span>.</span></span><span className="brand-copy">haliyora<small>ENGLISH COURSE</small></span></a><p>Little steps, big world.<br />Bertumbuh bersama, satu kata baru setiap hari.</p><div className="socials"><a aria-label="Instagram" href="https://instagram.com"><Instagram size={17} /></a><a aria-label="YouTube" href="https://youtube.com"><Youtube size={18} /></a><a aria-label="WhatsApp" href="https://wa.me/6281234567890"><MessageCircle size={17} /></a></div></div><div className="footer-col"><b>Jelajahi</b><a href="#about">Tentang kami</a><a href="#program">Program belajar</a><a href="#promo">Promo</a><a href="#stories">Cerita siswa</a></div><div className="footer-col"><b>Program</b><a href="#program">Kids · 3–6 tahun</a><a href="#program">Juniors · 7–14 tahun</a><a href="#program">Teens · 15–18 tahun</a><a href="#contact">IELTS · TOEFL · Private</a></div><div className="footer-col"><b>Temukan kami</b><a href="https://maps.google.com" target="_blank" rel="noreferrer"><MapPin size={15} /> Lihat lokasi cabang</a><a href="mailto:hello@haliyora.com">hello@haliyora.com</a><a href="#contact">Corporate English</a></div></div><div className="footer-bottom"><span>© 2026 Haliyora English Course. Made with ♡ for curious minds.</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
