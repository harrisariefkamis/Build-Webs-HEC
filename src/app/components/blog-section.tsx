import { ArrowRight, BookOpenCheck, MessageCircle, Target } from 'lucide-react';

const insights = [
  {
    category: 'SPEAKING',
    title: 'Mulai speaking tanpa takut salah',
    excerpt:
      'Pilih topik yang dekat dengan keseharianmu, susun tiga kalimat sederhana, lalu ucapkan dengan suara lantang.',
    action: 'Lihat program speaking',
    href: '#program',
    icon: MessageCircle,
    theme: 'teal',
  },
  {
    category: 'KEBIASAAN BELAJAR',
    title: 'Bangun rutinitas belajar yang konsisten',
    excerpt:
      'Tentukan waktu latihan yang realistis dan catat kosakata baru agar proses belajarmu lebih terarah.',
    action: 'Lihat alur belajar',
    href: '#showcase',
    icon: BookOpenCheck,
    theme: 'violet',
  },
  {
    category: 'PILIHAN PROGRAM',
    title: 'Temukan kelas sesuai tujuanmu',
    excerpt:
      'Pertimbangkan usia, jadwal, dan kebutuhan—mulai dari percakapan harian hingga persiapan ujian.',
    action: 'Jelajahi program',
    href: '#program',
    icon: Target,
    theme: 'orange',
  },
];

export default function BlogSection() {
  return (
    <section
      className="blog-section section-space"
      id="blog"
      aria-labelledby="blog-heading"
    >
      <div className="section-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow eyebrow-dark">CATATAN BELAJAR HEC</span>
            <h2 id="blog-heading">
              Ide sederhana untuk <span>belajar lebih percaya diri.</span>
            </h2>
          </div>
          <p>
            Tips singkat untuk menemani langkah belajarmu, dari latihan pertama
            sampai menentukan program yang tepat.
          </p>
        </div>

        <div className="blog-grid">
          {insights.map(({ category, title, excerpt, action, href, icon: Icon, theme }) => (
            <article className="blog-card" key={title}>
              <div className={`blog-card-visual blog-card-visual-${theme}`} aria-hidden="true">
                <Icon size={34} strokeWidth={1.6} />
                <span>HALIYORA · INSIGHT</span>
              </div>
              <div className="blog-card-content">
                <span className="blog-card-category">{category}</span>
                <h3>{title}</h3>
                <p>{excerpt}</p>
                <a className="blog-card-link" href={href}>
                  {action} <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
