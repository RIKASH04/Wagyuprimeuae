import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { MessageCircle, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { SITE, waLink } from '../lib/site';
import Reveal from '../components/Reveal';

const API = `${process.env.REACT_APP_BACKEND_URL || ''}/api`;

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success('Message received.', { description: 'We respond within 24 hours.' });
      setForm(initialForm);
    } catch (err) {
      toast.error('Could not send message', { description: err?.response?.data?.detail || 'Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page" className="bg-white text-[#0F0F0F]">
      <section className="pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5">Get in Touch</div>
            <h1 className="font-display text-5xl md:text-7xl text-[#0F0F0F] leading-[0.95] tracking-tight max-w-4xl">
              Let&apos;s talk about <em className="italic text-[#C9A84C]">your steak.</em>
            </h1>
            <p className="mt-5 text-[#0F0F0F]/70 max-w-2xl text-balance">
              Tell us what you&apos;re cooking, who you&apos;re feeding, and when. We&apos;ll handcraft a recommendation. We respond within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 md:px-10 pb-24 grid grid-cols-12 gap-10">
        {/* Form */}
        <div className="col-span-12 md:col-span-7">
          <form onSubmit={onSubmit} data-testid="contact-form" className="space-y-7">
            <Field label="Name" name="name" value={form.name} onChange={onChange} required testid="contact-name-input" />
            <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} required testid="contact-email-input" />
            <Field label="Subject" name="subject" value={form.subject} onChange={onChange} testid="contact-subject-input" />
            <div>
              <label className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] block mb-3">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                data-testid="contact-message-input"
                className="w-full bg-transparent border-b border-[#C9A84C]/40 focus:border-[#C9A84C] outline-none text-[#0F0F0F] py-2 placeholder-black/20 resize-none"
                placeholder="What are you cooking, when, and for how many?"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-btn"
              className="inline-flex items-center gap-3 bg-[#8B0000] hover:bg-[#A50000] disabled:opacity-50 text-white font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors"
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-4 md:col-start-9 space-y-10">
          <Reveal>
            <a
              href={waLink('Hello, I would like to enquire about your Wagyu selection.')}
              data-testid="contact-whatsapp-btn"
              className="group flex items-center justify-between gap-4 border border-[#25D366] hover:bg-[#25D366] hover:text-white text-[#25D366] px-6 py-5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={20} />
                <div>
                  <div className="font-heading text-[10px] tracking-[0.3em] uppercase">Chat on WhatsApp</div>
                  <div className="text-sm mt-1 font-medium">{SITE.whatsappDisplay}</div>
                </div>
              </div>
              <span className="font-heading text-[10px] tracking-[0.3em] uppercase">Open →</span>
            </a>
          </Reveal>

          <div className="space-y-6 text-sm text-[#0F0F0F]/80">
            <InfoItem Icon={Mail} title="Email" value={<a className="text-[#C9A84C] hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>} />
            <InfoItem Icon={MapPin} title="Delivery Coverage" value={SITE.cities.join(' · ')} />
          </div>

          <div className="border-t border-black/10 pt-7">
            <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] mb-4">Follow</div>
            <div className="flex items-center gap-4">
              <a aria-label="Instagram" href={SITE.social.instagram} className="w-10 h-10 border border-black/10 hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
              <a aria-label="Facebook" href={SITE.social.facebook} className="w-10 h-10 border border-black/10 hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="text-xs text-[#0F0F0F]/50 leading-relaxed italic">
            We respond within 24 hours, every day, including weekends and public holidays.
          </div>
        </aside>
      </section>
    </div>
  );
};

const Field = ({ label, name, value, onChange, type = 'text', required, testid }) => (
  <div>
    <label className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] block mb-3">
      {label}{required && ' *'}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      data-testid={testid}
      className="w-full bg-transparent border-b border-[#C9A84C]/40 focus:border-[#C9A84C] outline-none text-[#0F0F0F] py-2 placeholder-black/20"
    />
  </div>
);

const InfoItem = ({ Icon, title, value }) => (
  <div className="flex items-start gap-4 text-[#0F0F0F]">
    <span className="w-10 h-10 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] shrink-0">
      <Icon size={14} strokeWidth={1.6} />
    </span>
    <div>
      <div className="font-heading text-[9px] tracking-[0.32em] uppercase text-[#C9A84C]">{title}</div>
      <div className="mt-1">{value}</div>
    </div>
  </div>
);

export default Contact;
