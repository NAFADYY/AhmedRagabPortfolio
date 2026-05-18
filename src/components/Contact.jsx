import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const recipientEmail = 'nafady.352001@gmail.com';
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormError('');

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus('missingConfig');
      return;
    }

    setFormStatus('sending');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: recipientEmail,
            from_name: name,
            from_email: email,
            subject,
            message
          }
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText || 'Email service request failed'}`);
      }

      form.reset();
      setFormStatus('success');
    } catch (error) {
      setFormError(error.message);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="space-y-12">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('contact')}</h4>
        <h2 className="text-4xl font-bold">{t('contact_heading')}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Mail, label: t('contact_email_label'), value: personalData.email },
              { icon: Phone, label: t('contact_phone_label'), value: personalData.phone },
              { icon: MapPin, label: t('contact_address_label'), value: t('location') }
            ].map((info, i) => (
              <motion.div
                key={i}
                className="glass p-6 rounded-2xl space-y-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <info.icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{info.label}</p>
                  <p className="text-sm font-bold truncate">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass p-8 rounded-premium bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold mb-4">{t('contact_availability_title')}</h3>
            <p className="text-zinc-400 leading-relaxed">
              {t('contact_availability_text')}
            </p>
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass p-8 rounded-premium space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase font-black text-zinc-500 ml-1">{t('contact_name_label')}</label>
              <input type="text" name="name" placeholder={t('contact_name_placeholder')} className="w-full input-field" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-black text-zinc-500 ml-1">{t('contact_email_label')}</label>
              <input type="email" name="email" placeholder={t('contact_email_placeholder')} className="w-full input-field" required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-black text-zinc-500 ml-1">{t('contact_subject_label')}</label>
            <input type="text" name="subject" placeholder={t('contact_subject_placeholder')} className="w-full input-field" required />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase font-black text-zinc-500 ml-1">{t('contact_message_label')}</label>
            <textarea name="message" placeholder={t('contact_message_placeholder')} rows={4} className="w-full input-field resize-none" required></textarea>
          </div>
          {formStatus !== 'idle' && (
            <p className={`text-sm font-bold ${
              formStatus === 'success' ? 'text-emerald-400' : 'text-amber-400'
            }`}>
              {t(`contact_form_${formStatus}`)}
              {formError && <span className="block mt-2 text-xs text-zinc-400">{formError}</span>}
            </p>
          )}
          <button
            type="submit"
            disabled={formStatus === 'sending'}
            className="w-full py-4 bg-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={18} />
            <span>{formStatus === 'sending' ? t('contact_form_sending') : t('contact_send_message')}</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
