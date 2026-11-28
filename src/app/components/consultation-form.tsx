'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { consultationTopics, whatsappUrl } from '@/data/site-content';

type ConsultationField = 'name' | 'phone' | 'topic';

export default function ConsultationForm() {
  const [invalidFields, setInvalidFields] = useState<ConsultationField[]>([]);

  const clearError = (field: ConsultationField) => {
    setInvalidFields((current) =>
      current.filter((invalidField) => invalidField !== field),
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const topic = formData.get('topic');
    const normalizedName = typeof name === 'string' ? name.trim() : '';
    const normalizedPhone = typeof phone === 'string' ? phone.trim() : '';
    const normalizedTopic = typeof topic === 'string' ? topic.trim() : '';
    const invalidOnSubmit: ConsultationField[] = [];

    if (!normalizedName) invalidOnSubmit.push('name');
    if (!normalizedPhone) invalidOnSubmit.push('phone');
    if (!normalizedTopic) invalidOnSubmit.push('topic');

    if (invalidOnSubmit.length > 0) {
      setInvalidFields(invalidOnSubmit);
      return;
    }

    setInvalidFields([]);
    const message = [
      'Halo Haliyora, saya ingin berkonsultasi.',
      `Nama: ${normalizedName}`,
      `Nomor WhatsApp: ${normalizedPhone}`,
      `Topik: ${normalizedTopic}`,
    ].join('\n');

    window.location.assign(whatsappUrl(message));
  };

  const error = invalidFields.length > 0;
  const errorDescription = error ? 'consultation-form-error' : undefined;

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <label htmlFor="consultation-name">
        Nama lengkap <span>Wajib diisi</span>
      </label>
      <input
        id="consultation-name"
        name="name"
        type="text"
        autoComplete="name"
        minLength={2}
        maxLength={80}
        aria-describedby={errorDescription}
        aria-invalid={invalidFields.includes('name')}
        onChange={() => clearError('name')}
        required
      />

      <label htmlFor="consultation-phone">
        Nomor WhatsApp <span>Wajib diisi</span>
      </label>
      <input
        id="consultation-phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        maxLength={24}
        aria-describedby={errorDescription}
        aria-invalid={invalidFields.includes('phone')}
        onChange={() => clearError('phone')}
        required
      />

      <label htmlFor="consultation-topic">
        Topik konsultasi <span>Wajib diisi</span>
      </label>
      <select
        id="consultation-topic"
        name="topic"
        defaultValue=""
        aria-describedby={errorDescription}
        aria-invalid={invalidFields.includes('topic')}
        onChange={() => clearError('topic')}
        required
      >
        <option value="" disabled>
          Pilih topik
        </option>
        {consultationTopics.map((topic) => (
          <option value={topic} key={topic}>
            {topic}
          </option>
        ))}
      </select>

      {error && (
        <p className="consultation-form-error" id="consultation-form-error" role="alert">
          {error}
        </p>
      )}

      <button className="button button-primary" type="submit">
        <MessageCircle size={17} aria-hidden="true" />
        Lanjut ke WhatsApp
        <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <p className="consultation-disclaimer">
        Pesan WhatsApp akan terbuka untuk ditinjau sebelum kamu mengirimkannya.
      </p>
    </form>
  );
}
