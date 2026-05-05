import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { SITE } from '../lib/site';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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
    <footer
      data-testid="site-footer"
      className="bg-[#0F0F0F] border-t border-[#C9A84C]/15 text-white mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-4 space-y-6">
          <div className="w-20 h-20 rounded-full border border-[#C9A84C] flex items-center justify-center">
            <div className="text-center leading-none">
              <div className="font-display italic text-[#C9A84C] text-lg">Wagyu</div>
              <div className="font-heading text-[8px] tracking-[0.3em] text-white mt-1">PRIME UAE</div>
            </div>
          </div>
          <p className="font-display italic text-xl text-balance text-white/80 max-w-sm leading-snug">
            “{SITE.tagline}”
          </p>
          <div className="flex items-center gap-4">
            <a aria-label="Instagram" href={SITE.social.instagram} className="w-10 h-10 border border-[#C9A84C]/40 hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center transition-colors" data-testid="footer-instagram">
              <Instagram size={16} />
            </a>
            <a aria-label="Facebook" href={SITE.social.facebook} className="w-10 h-10 border border-[#C9A84C]/40 hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center transition-colors" data-testid="footer-facebook">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Nav columns */}
        <div className="md:col-span-2">
          <div className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[#C9A84C] transition-colors">Home</Link></li>
            <li><Link to="/steaks" className="hover:text-[#C9A84C] transition-colors">All Steaks</Link></li>
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
    </footer>
  );
};

export default Footer;
