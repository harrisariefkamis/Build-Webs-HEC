export const whatsappPhone = '6282137209780';

export const whatsappUrl = (message: string) =>
  `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(message)}`;

export const contactEmail = 'haliyora@gmail.com';

export type ProgramCategory = 'kids' | 'adult' | 'private';
export type ProgramTheme =
  | 'dasher'
  | 'runner'
  | 'sprinter'
  | 'ranger'
  | 'explorer'
  | 'ielts'
  | 'toefl'
  | 'private'
  | 'corporate';

export type Program = {
  name: string;
  image: string;
  theme: ProgramTheme;
  audience: string;
  format: string;
  category: ProgramCategory;
  description: string;
  outcome: string;
};

const programArtwork = '/icon/icon english-puuzle.png';

export const programs: Program[] = [
  {
    name: 'Dasher',
    image: programArtwork,
    theme: 'dasher',
    audience: 'Usia 3–6 tahun',
    format: 'Reguler',
    category: 'kids',
    description:
      'Pengenalan fonik, kosakata dasar, dan keberanian berbicara melalui lagu serta permainan interaktif.',
    outcome: 'Online & Offline',
  },
  {
    name: 'Runner',
    image: programArtwork,
    theme: 'runner',
    audience: 'Usia 7–10 tahun',
    format: 'Reguler',
    category: 'kids',
    description:
      'Membangun kelancaran membaca, menyusun kalimat, dan percakapan sehari-hari dengan proyek kreatif.',
    outcome: 'Online & Offline',
  },
  {
    name: 'Sprinter',
    image: programArtwork,
    theme: 'sprinter',
    audience: 'Usia 11–14 tahun',
    format: 'Reguler',
    category: 'kids',
    description:
      'Grammar terapan, presentasi, dan pemahaman bacaan untuk mendukung pelajaran di sekolah.',
    outcome: 'Online & Offline',
  },
  {
    name: 'Ranger',
    image: programArtwork,
    theme: 'ranger',
    audience: 'Usia 15–18 tahun',
    format: 'Reguler',
    category: 'kids',
    description:
      'Debat, academic writing, dan komunikasi tingkat lanjut untuk pelajar SMA.',
    outcome: 'Online & Offline',
  },
  {
    name: 'Explorer',
    image: programArtwork,
    theme: 'explorer',
    audience: 'Usia 19–22 tahun',
    format: 'Reguler & privat',
    category: 'kids',
    description:
      'Public speaking, wawancara kerja, dan komunikasi akademik untuk mahasiswa dan pencari kerja.',
    outcome: 'Online & Offline',
  },
  {
    name: 'IELTS Complete Prep',
    image: programArtwork,
    theme: 'ielts',
    audience: 'Usia 15 tahun ke atas',
    format: 'Exam prep',
    category: 'adult',
    description:
      'Strategi Listening, Reading, Writing, dan Speaking dengan simulasi skor serta umpan balik personal.',
    outcome: 'Target band 7.0+',
  },
  {
    name: 'TOEFL ITP',
    image: programArtwork,
    theme: 'toefl',
    audience: 'Usia 15 tahun ke atas',
    format: 'Exam prep',
    category: 'adult',
    description:
      'Latihan Structure, Written Expression, dan Reading untuk kebutuhan beasiswa maupun wisuda.',
    outcome: 'Target skor 550+',
  },
  {
    name: 'Private Class',
    image: programArtwork,
    theme: 'private',
    audience: 'Explorer & exam prep',
    format: '1-on-1',
    category: 'private',
    description:
      'Materi dan jadwal disesuaikan dengan kebutuhan target skor atau karier bersama tutor khusus.',
    outcome: 'Jadwal fleksibel',
  },
  {
    name: 'Corporate English',
    image: programArtwork,
    theme: 'corporate',
    audience: 'Perusahaan & tim',
    format: 'In-house / online',
    category: 'private',
    description:
      'Pelatihan komunikasi bisnis, negosiasi, presentasi, dan korespondensi untuk tim perusahaan.',
    outcome: 'Jadwal fleksibel',
  },
];

export const programCategories: {
  id: ProgramCategory;
  label: string;
  description: string;
}[] = [
  {
    id: 'kids',
    label: 'Anak & remaja',
    description: 'Program bertahap untuk anak, remaja, dan dewasa muda.',
  },
  {
    id: 'adult',
    label: 'Dewasa & ujian',
    description: 'Komunikasi akademik dan persiapan tes.',
  },
  {
    id: 'private',
    label: 'Privat & korporat',
    description: 'Jadwal dan materi yang menyesuaikan tujuan.',
  },
];

export const testimonials = [
  {
    name: 'Riski Akbar Mologotu',
    detail: 'Alumni Pare 3 bulan · IELTS 7.5',
    quote:
      'Awalnya gugup setiap kali harus speaking di kelas. Setelah 3 bulan di Kampung Pare bareng tutor HEC, saya berani presentasi penuh dalam bahasa Inggris.',
    initials: 'RAM',
  },
  {
    name: 'Adik Aco',
    detail: 'Alumni Pare 3 bulan · TOEFL 583',
    quote:
      'Lingkungan camp-nya suportif banget. Setiap hari praktik speaking dan,saya bisa lancar speaking.',
    initials: 'AD',
  },
  {
    name: 'Saida Salmin Saragi',
    detail: 'Alumni Pare 3 bulan · Explorer',
    quote:
      'Programnya terstruktur dan tutornya sabar membimbing dari dasar. Setelah pulang dari Pare, saya lanjut ke perguruan tinggi dan lulus untuk mengasah kemampuan bahasa Inggris saya.',
    initials: 'SS',
  },
];

export const consultationTopics = [
  'Rekomendasi program usia',
  'Info promo HEC52',
  'Cabang atau online',
  'Program Pare 3 bulan',
];
