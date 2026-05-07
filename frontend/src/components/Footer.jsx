import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { SITE } from '../lib/site';

const API = `${process.env.REACT_APP_BACKEND_URL || ''}/api`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgError, setImgError] = useState(false);

  const onSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success('Welcome to the table.', { description: 'You are on the list.' });
      setEmail('');
    } catch (err) {
      toast.error('Could not subscribe', { description: 'Please try again in a moment.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer data-testid="site-footer" className="text-white mt-24">
      {/* Premium banner strip — damask-style dark luxury */}
      <div className="relative overflow-hidden border-t border-[#C9A84C]/30 border-b border-b-[#C9A84C]/15">
        {/* Damask pattern background via CSS */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, rgba(15,15,15,0.97) 0%, rgba(26,26,26,0.93) 50%, rgba(15,15,15,0.97) 100%),
              repeating-conic-gradient(rgba(201,168,76,0.04) 0% 25%, transparent 0% 50%) 0 0 / 40px 40px,
              repeating-conic-gradient(rgba(201,168,76,0.03) 0% 25%, transparent 0% 50%) 20px 20px / 40px 40px
            `,
          }}
        />
        {/* Ornate overlay pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(201,168,76,0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(201,168,76,0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)
            `,
          }}
        />
        {/* Subtle border accents */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 py-6 md:py-10">
          <div className="flex items-center justify-center">
            {/* Center — Logo bull */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-[#C9A84C]/50 shadow-[0_0_40px_rgba(201,168,76,0.2)]">
              {!imgError ? (
                <img
                  src="/logo/logo.png"
                  alt="Wagyu Prime UAE"
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center">
                  <div className="text-center leading-none">
                    <div className="font-display italic text-[#C9A84C] text-sm">W</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-[#0F0F0F]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-6">
            <p className="font-display italic text-xl text-balance text-white/80 max-w-sm leading-snug">
              "{SITE.tagline}"
            </p>
            <div className="flex items-center gap-3 text-xs text-white/50">
              <MapPin size={13} className="text-[#C9A84C]/60" />
              <span>{SITE.cities.join(' · ')}</span>
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-2">
            <div className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#C9A84C] transition-colors">Home</Link></li>
              <li><Link to="/steaks" className="hover:text-[#C9A84C] transition-colors">Catalogue</Link></li>
              <li><Link to="/about" className="hover:text-[#C9A84C] transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-[#C9A84C] transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-[#C9A84C] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">Delivery</div>
            <ul className="space-y-3 text-sm text-white/75">
              {SITE.cities.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <div className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
              Sign up & save
            </div>
            <p className="text-sm text-white/70 mb-5 max-w-sm">
              Quiet emails. New cuts, rare drops, occasional invitations to private tastings.
            </p>
            <form onSubmit={onSubscribe} className="flex items-center gap-3 border-b border-[#C9A84C]/40 focus-within:border-[#C9A84C] transition-colors py-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                data-testid="newsletter-email-input"
                className="flex-1 bg-transparent outline-none border-none text-sm text-white placeholder-white/40 py-2"
              />
              <button
                type="submit"
                disabled={loading}
                data-testid="newsletter-submit-btn"
                className="text-[#C9A84C] hover:text-white transition-colors disabled:opacity-50"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
            <div className="mt-6 text-xs text-white/50">
              <div>Email: <a href={`mailto:${SITE.email}`} className="text-[#C9A84C] hover:underline">{SITE.email}</a></div>
              <div className="mt-1">WhatsApp: <a href={`https://wa.me/${SITE.whatsappNumber}`} className="text-[#C9A84C] hover:underline">{SITE.whatsappDisplay}</a></div>
            </div>
          </div>
        </div>

        <div className="gold-divider mx-6 md:mx-10" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <div>© 2025 WagyuPrimeUAE. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-[#C9A84C] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
