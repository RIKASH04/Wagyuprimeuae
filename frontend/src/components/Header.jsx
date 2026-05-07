import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE } from '../lib/site';

const NAV = [
  { to: '/steaks', label: 'Catalogue' },
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Logo = ({ className = '' }) => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <Link
      to="/"
      aria-label="WagyuPrimeUAE home"
      data-testid="header-logo"
      className={`group inline-flex items-center justify-center ${className}`}
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C9A84C]/70 flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src="/logo/logo.png"
            alt="Wagyu Prime UAE"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-center leading-none">
            <div className="font-display italic text-[#C9A84C] text-[14px] md:text-[15px]">Wagyu</div>
            <div className="font-heading text-[7px] md:text-[8px] tracking-[0.3em] text-white mt-0.5">PRIME UAE</div>
          </div>
        )}
      </div>
    </Link>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1A1A1A]/85 backdrop-blur-xl border-b border-[#C9A84C]/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-3 md:py-4 grid grid-cols-3 items-center">
        {/* Left nav (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.32em] uppercase font-heading">
          {NAV.slice(0, 2).map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, '-')}`}
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-300 ${
                  isActive ? 'text-[#C9A84C]' : 'text-white hover:text-[#C9A84C]'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          data-testid="mobile-menu-btn"
          className="md:hidden text-white justify-self-start"
        >
          <Menu size={26} />
        </button>

        {/* Logo */}
        <div className="justify-self-center">
          <Logo />
        </div>

        {/* Right nav */}
        <nav className="hidden md:flex items-center gap-8 justify-end text-[11px] tracking-[0.32em] uppercase font-heading">
          {NAV.slice(2).map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, '-')}`}
              className={({ isActive }) =>
                `relative pb-1 transition-colors duration-300 ${
                  isActive ? 'text-[#C9A84C]' : 'text-white hover:text-[#C9A84C]'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Empty cell on mobile right */}
        <div className="md:hidden justify-self-end" />
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          data-testid="mobile-menu-overlay"
          className="fixed inset-0 z-[60] bg-[#0F0F0F] flex flex-col animate-fade-in"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#C9A84C]/15">
            <Logo />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              data-testid="mobile-menu-close"
              className="text-white"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-start justify-center px-8 gap-7">
            {NAV.map((n, i) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s/g, '-')}`}
                style={{ animationDelay: `${i * 80}ms` }}
                className={({ isActive }) =>
                  `font-display italic text-4xl animate-fade-up ${
                    isActive ? 'text-[#C9A84C]' : 'text-white'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="gold-divider w-32 mt-6" />
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              className="text-[11px] tracking-[0.3em] uppercase font-heading text-[#C9A84C]"
            >
              Chat on WhatsApp →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
