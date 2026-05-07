import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Leaf, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { COUNTRIES, IMAGES } from '../data/products';
import { SITE, waLink } from '../lib/site';
import CategoryCard from '../components/CategoryCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Reveal from '../components/Reveal';

const TrustBadge = ({ Icon, label }) => (
  <div className="flex flex-col items-center gap-3" data-testid={`trust-${label.toLowerCase().replace(/\s/g, '-')}`}>
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C9A84C]/60 flex items-center justify-center text-[#C9A84C]">
      <Icon size={20} strokeWidth={1.4} />
    </div>
    <div className="font-heading text-[9px] tracking-[0.3em] uppercase text-white/85 text-center">
      {label}
    </div>
  </div>
);

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden" data-testid="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.04] animate-fade-in"
          poster={IMAGES.HERO}
        >
          <source src="/Video2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-[#0F0F0F]/30" />
        <div className="absolute inset-0 grain-overlay" />

        {/* Circular promo badge */}
        <div className="absolute top-28 right-6 md:top-32 md:right-12 z-10">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-[#C9A84C] bg-[#1A1A1A]/40 backdrop-blur-sm flex items-center justify-center text-center p-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div>
              <div className="font-heading text-[8px] md:text-[9px] tracking-[0.32em] uppercase text-[#C9A84C] mb-1">Sourced From</div>
              <div className="font-display italic text-white text-sm md:text-base leading-tight">
                Australia<br />Japan<br />New Zealand
              </div>
              <div className="font-heading text-[8px] md:text-[9px] tracking-[0.32em] uppercase text-[#C9A84C] mt-1">& More</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <div className="font-heading text-[10px] md:text-[11px] tracking-[0.45em] uppercase text-[#C9A84C] animate-fade-up" style={{ animationDelay: '120ms' }}>
              The Finest in the UAE — Est. 2025
            </div>
            <h1
              className="mt-5 font-display text-[56px] sm:text-7xl md:text-8xl lg:text-[112px] leading-[0.95] tracking-tight text-white animate-fade-up"
              style={{ animationDelay: '260ms' }}
            >
              Wagyu, <span className="italic text-[#C9A84C]">perfected.</span>
            </h1>
            <p
              className="mt-6 font-display italic text-xl md:text-2xl text-white/85 max-w-2xl leading-snug text-balance animate-fade-up"
              style={{ animationDelay: '420ms' }}
            >
              Premium Meats — UAE&apos;s Finest Selection. Wagyu · Beef · Lamb · Veal · Venison.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '580ms' }}>
              <Link
                to="/steaks"
                data-testid="hero-explore-btn"
                className="inline-flex items-center gap-3 bg-[#8B0000] hover:bg-[#A50000] text-white font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
              >
                Explore Catalogue <ArrowRight size={16} />
              </Link>
              <a
                href={waLink('Hello, I would love to learn more about your meat selection.')}
                data-testid="hero-whatsapp-btn"
                className="inline-flex items-center gap-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#1A1A1A] font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
              >
                Contact to Order
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-16 grid grid-cols-4 gap-5 max-w-2xl animate-fade-up" style={{ animationDelay: '760ms' }}>
              <TrustBadge Icon={Award} label="Award Winning" />
              <TrustBadge Icon={Leaf} label="GMO Free" />
              <TrustBadge Icon={ShieldCheck} label="Hormone Free" />
              <TrustBadge Icon={Sparkles} label="Sustainably Farmed" />
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES — Browse by Origin */}
      <section className="bg-[#1A1A1A] py-24 md:py-32" data-testid="categories-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal className="grid grid-cols-12 gap-8 mb-14 md:mb-20">
            <div className="col-span-12 md:col-span-7">
              <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5">
                Five Origins · One Standard
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-white leading-[0.95] tracking-tight">
                Browse by <span className="italic text-[#C9A84C]">origin.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 flex md:items-end">
              <p className="text-white/70 text-base md:text-lg leading-relaxed text-balance">
                From Australia to Japan, Kenya to New Zealand — each region brings its own tradition and quality. We source only the finest.
              </p>
            </div>
          </Reveal>

          {/* Country flags row */}
          <Reveal>
            <div className="flex items-center justify-center gap-6 md:gap-10 mb-14 flex-wrap">
              {COUNTRIES.map((c) => (
                <Link
                  key={c.code}
                  to={`/steaks?cat=${c.code}`}
                  className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
                  data-testid={`country-flag-${c.code}`}
                >
                  <div className="w-16 h-11 md:w-20 md:h-14 rounded-lg overflow-hidden shadow-lg border-2 border-transparent group-hover:border-[#C9A84C] transition-colors">
                    <img src={c.flag} alt={`${c.name} flag`} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-heading text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/70 group-hover:text-[#C9A84C] transition-colors">
                    {c.name}
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Country cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {COUNTRIES.slice(0, 3).map((c, i) => (
              <Reveal key={c.code} delay={i * 120}>
                <CategoryCard
                  image={c.image}
                  name={c.name}
                  blurb={c.blurb}
                  flag={c.flag}
                  countryName={c.name}
                  to={`/steaks?cat=${c.code}`}
                  index={i}
                />
              </Reveal>
            ))}
          </div>

          {/* Second row for remaining countries */}
          {COUNTRIES.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
              {COUNTRIES.slice(3).map((c, i) => (
                <Reveal key={c.code} delay={(i + 3) * 120}>
                  <CategoryCard
                    image={c.image}
                    name={c.name}
                    blurb={c.blurb}
                    flag={c.flag}
                    countryName={c.name}
                    to={`/steaks?cat=${c.code}`}
                    index={i + 3}
                  />
                </Reveal>
              ))}
            </div>
          )}

          {/* View all link */}
          <Reveal>
            <div className="mt-12 text-center">
              <Link
                to="/steaks"
                className="inline-flex items-center gap-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#1A1A1A] font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
              >
                View Full Catalogue <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="gold-divider mx-6 md:mx-10" />

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      <div className="gold-divider mx-6 md:mx-10" />

      {/* PHILOSOPHY (light section) */}
      <section className="bg-[#FAFAFA] text-[#1A1A1A] py-20 md:py-28" data-testid="philosophy-section">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#B8860B] mb-6">
              The Philosophy
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
              "We believe enjoying a steak is as much about <em className="text-[#B8860B]">finding</em> the right one as actually eating it."
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed max-w-xl text-[#1A1A1A]/75">
              We will educate you on the different regions, cuts, and ratings — so you can find and enjoy the absolute perfect steak.
            </p>
            <div className="mt-10">
              <Link
                to="/about"
                data-testid="philosophy-about-link"
                className="inline-flex items-center gap-2 font-heading text-[11px] tracking-[0.32em] uppercase border-b border-[#B8860B] text-[#1A1A1A] pb-1 hover:text-[#B8860B] transition-colors"
              >
                Read our story <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140} className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-4">
            <div className="aspect-[3/2] md:aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
              <img src={IMAGES.PLATING} alt="Chef plating premium steak" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="font-display italic text-xl text-[#1A1A1A]/70 text-balance">
              "The perfect steak chooses you..."
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT IS WAGYU */}
      <section className="bg-[#1A1A1A] py-20 md:py-28" data-testid="what-is-wagyu-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-10 md:gap-16 items-center">
            {/* LEFT — Text */}
            <Reveal className="col-span-12 md:col-span-7">
              <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-6">
                Education
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-white leading-[1.0] tracking-tight">
                What is Wagyu and why is it so <em className="italic text-[#C9A84C]">special?</em>
              </h2>
              <p className="mt-7 text-white/75 text-base md:text-lg leading-relaxed max-w-lg">
                Wagyu cows are the only livestock in the world that metabolises fat <em className="not-italic text-[#C9A84C]">internally</em>, integrating it within the muscle. This is what causes the marbling and fat to run through the steak — and not just on the outside.
              </p>
              <div className="mt-10">
                <Link
                  to="/steaks"
                  data-testid="explore-all-steaks-btn"
                  className="inline-flex items-center gap-3 bg-[#8B0000] hover:bg-[#A50000] text-white font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
                >
                  Explore all cuts <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>

            {/* RIGHT — Video */}
            <Reveal delay={160} className="col-span-12 md:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                <video
                  src="/video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  poster={IMAGES.A5}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F0F]/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div className="font-heading text-[9px] tracking-[0.28em] uppercase text-[#C9A84C]">BMS 12 · A5 · Japanese Wagyu</div>
                  <div className="w-10 h-7 rounded overflow-hidden border border-white/20 shadow-lg">
                    <img src="https://flagcdn.com/w80/jp.png" alt="Japan" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOGO + TAGLINE */}
      <section className="bg-[#FAFAFA] text-[#1A1A1A] py-28 md:py-36" data-testid="tagline-section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            {/* Logo — fills the circle perfectly */}
            <div className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#B8860B] overflow-hidden">
              <img
                src="/logo/logo.png"
                alt="Wagyu Prime UAE"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback text logo if image not found
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;">
                      <div>
                        <div style="font-family:var(--font-display);font-style:italic;color:#B8860B;font-size:1.5rem;">Wagyu</div>
                        <div style="font-family:var(--font-heading);font-size:10px;letter-spacing:0.3em;text-transform:uppercase;margin-top:4px;">Prime UAE</div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
            <p className="mt-10 font-display italic text-3xl md:text-5xl leading-tight text-balance">
              "Enjoy the journey, and remember — the perfect steak chooses you..."
            </p>
            <div className="mt-10 mx-auto w-24 gold-divider" />
            <div className="mt-8 font-heading text-[10px] tracking-[0.4em] uppercase text-[#1A1A1A]/60">
              Delivered fresh across the UAE — {SITE.cities.join(' · ')}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
