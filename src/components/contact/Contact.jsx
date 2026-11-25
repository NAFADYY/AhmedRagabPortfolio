import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Copy, Check, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../shared/Icons';
import { profile } from '../../data/profile';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { t } = useTranslation();
  const mountedAt = useRef(0);
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | missingConfig
  const [serverError, setServerError] = useState('');
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '', company: '' });
  const [errors, setErrors] = useState({});

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const validate = () => {
    const next = {};
    if (fields.name.trim().length < 2) next.name = t('err_name');
    if (!EMAIL_RE.test(fields.email.trim())) next.email = t('err_email');
    if (fields.subject.trim().length < 3) next.subject = t('err_subject');
    if (fields.message.trim().length < 10) next.message = t('err_message');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    // Honeypot & minimum fill-time spam guard
    if (fields.company.trim() !== '') {
      setStatus('success');
      return;
    }
    if (Date.now() - mountedAt.current < 1500) {
      setServerError(t('err_spam'));
      setStatus('error');
      return;
    }

    if (!validate()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('missingConfig');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: profile.email,
            from_name: fields.name.trim(),
            from_email: fields.email.trim(),
            subject: fields.subject.trim(),
            message: fields.message.trim(),
          },
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Status ${response.status}`);
      }

      setFields({ name: '', email: '', subject: '', message: '', company: '' });
      setStatus('success');
    } catch (err) {
      setServerError(err.message || '');
      setStatus('error');
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-28">
      <div className="container-x space-y-12">
        <SectionHeading
          index="07"
          eyebrow={t('contact_eyebrow')}
          title={t('contact_title')}
          lead={t('contact_lead')}
          id="contact-heading"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Direct channels */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5" data-reveal>
            <div className="card space-y-6 p-7 sm:p-8">
              <p className="eyebrow">{t('contact_direct')}</p>

              {/* Email with copy */}
              <div className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-bg p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-text">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted">{t('form_email')}</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="block truncate font-mono text-sm font-semibold text-fg hover:text-accent-text"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={t('copy_email')}
                  title={copied ? t('copied') : t('copy_email')}
                  className="icon-btn h-9 w-9 shrink-0"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Social links */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { label: 'LinkedIn', value: 'linkedin.com/in/nafady', href: profile.linkedin, Icon: LinkedinIcon },
                  { label: 'GitHub', value: 'github.com/NAFADYY', href: profile.github, Icon: GithubIcon },
                  { label: 'WhatsApp', value: profile.phoneDisplay, href: profile.whatsapp, Icon: WhatsappIcon },
                ].map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-line bg-bg p-4 transition-colors hover:border-accent/50"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors group-hover:text-accent-text">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted">{label}</p>
                      <p className="truncate font-mono text-xs font-medium text-fg" dir="ltr">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2.5 border-t border-line pt-5 text-xs text-muted">
                <MapPin size={15} className="shrink-0 text-accent-2" aria-hidden="true" />
                <span>{t('contact_location')}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-7 sm:p-9 lg:col-span-7" data-reveal>
            {status === 'success' ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 text-center" role="status">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-400">
                  <CheckCircle2 size={28} aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-fg">{t('form_success_title')}</h3>
                <p className="max-w-md text-sm text-muted">{t('form_success')}</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn btn-ghost mt-2"
                >
                  {t('form_send_another')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot field for bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={fields.company}
                    onChange={onChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-muted">
                      {t('form_name')} *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={t('form_name_ph')}
                      value={fields.name}
                      onChange={onChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      className="field"
                      required
                    />
                    {errors.name && (
                      <p id="err-name" className="text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-muted">
                      {t('form_email')} *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={t('form_email_ph')}
                      value={fields.email}
                      onChange={onChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className="field"
                      required
                    />
                    {errors.email && (
                      <p id="err-email" className="text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="block font-mono text-xs uppercase tracking-wider text-muted">
                    {t('form_subject')} *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder={t('form_subject_ph')}
                    value={fields.subject}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'err-subject' : undefined}
                    className="field"
                    required
                  />
                  {errors.subject && (
                    <p id="err-subject" className="text-xs text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-wider text-muted">
                    {t('form_message')} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder={t('form_message_ph')}
                    value={fields.message}
                    onChange={onChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    className="field resize-y"
                    required
                  />
                  {errors.message && (
                    <p id="err-message" className="text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {(status === 'error' || status === 'missingConfig') && (
                  <div role="alert" className="flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-sm text-amber-300">
                    <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p>{status === 'missingConfig' ? t('form_missing_config') : t('form_error')}</p>
                      {serverError && <p className="mt-1 font-mono text-xs opacity-80">{serverError}</p>}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <Send size={16} aria-hidden="true" />
                  <span>{status === 'sending' ? t('form_sending') : t('form_send')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
