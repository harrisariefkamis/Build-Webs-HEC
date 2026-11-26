import {
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Youtube,
} from 'lucide-react';

const whatsappUrl =
  'https://api.whatsapp.com/send?phone=6282137209780&text=Assalamualaikum.%0AMr.%20Ismir%20saya%20mau%20mendaftar%20kursus%20bahasa%20Inggris%20di%20HALIYORA%20ENGLISH%20COURSE.';

const socialLinks = [
  { label: 'WhatsApp', href: whatsappUrl, icon: MessageCircle },
  { label: 'Email', href: 'mailto:haliyora@gmail.com', icon: Mail },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/issabri.mapra?_rdc=1&_rdr#',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/haliyoraenglishcourse?gwpx=MXRqaWplc29mMnB1MQ%3D%3D',
    icon: Instagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCKAXVtaXj6iS5TJSv6KRkbg',
    icon: Youtube,
  },
  {
    label: 'Lynk',
    href: 'https://lynk.id/haliyoracourse?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRzdgV0WzlleHRuA2FlbQIxMQBwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp4F0n-yF-IQpkpr5fcIguLXdFBICyps9lvNVfzE72oiu-qWQQIj5KCt2Z-ni_aem_i9h1C_yy5OBY2L1H9bqkLw',
    icon: ExternalLink,
  },
];

export default function ContactLinks() {
  return (
    <section
      className="contact-links-section"
      id="contact-links"
      aria-labelledby="contact-links-title"
    >
      <div className="contact-links-inner">
        <div className="contact-links-copy">
          <span className="contact-links-eyebrow">KAMI SIAP MEMBANTU</span>
          <h2 id="contact-links-title">Hubungi &amp; ikuti Haliyora</h2>
          <p>
            Pilih kanal yang paling nyaman untuk bertanya tentang kelas, jadwal,
            dan pendaftaran.
          </p>

          <div className="contact-link-grid">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{label}</span>
                <ExternalLink
                  className="contact-link-external"
                  size={13}
                  aria-hidden="true"
                />
              </a>
            ))}

            <a
              href="https://github.com/harrisariefkamis/Build-Webs-HEC"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} aria-hidden="true" />
              <span>GitHub Team IT</span>
              <ExternalLink
                className="contact-link-external"
                size={13}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="location-card">
          <div className="location-card-heading">
            <span className="location-icon">
              <MapPin size={18} />
            </span>
            <div>
              <h3>Kunjungi lokasi kami</h3>
              <p>Lihat lokasi Haliyora di peta</p>
            </div>
          </div>

          <iframe
            title="Lokasi Haliyora English Course di Google Maps"
            src="https://www.google.com/maps/embed?pb=!4v1795653000234!6m8!1m7!1sf9wZeJM6ylIRfEzwSMGjbg!2m2!1d0.8237784009244351!2d128.2420668264999!3f90.77186388791333!4f-8.297461333356125!5f0.7820865974627469"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <a
            className="location-directions"
            href="https://www.google.com/maps/search/?api=1&query=0.8237784009244351%2C128.2420668264999"
            target="_blank"
            rel="noreferrer"
          >
            Buka petunjuk arah <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
