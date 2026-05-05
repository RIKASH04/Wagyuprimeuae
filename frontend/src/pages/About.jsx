import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Leaf, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/products';
import Reveal from '../components/Reveal';

const REGIONS = [
  {
    flag: 'JP',
    country: 'Japan',
    title: 'The Origin',
    body: 'A5 Wagyu from Kagoshima, Hyogo and Miyazaki — purebred Kuroge Washu cattle, raised slowly to BMS 10–12 perfection.',
    image: IMAGES.A5,
  },
  {
    flag: 'AU',
    country: 'Australia',
    title: 'The Pioneer',
    body: 'Margaret River and NSW Wagyu farms producing rich, beefy MS5–9 cuts that introduced the world to grain-finished Wagyu.',
    image: IMAGES.AUS,
  },
  {
    flag: 'US',
    country: 'United States',
    title: 'The Innovator',
    body: 'Wagyu × Black Angus crossbred cattle from the Pacific Northwest and Texas — bold, accessible, marbled, American-scaled.',
    image: IMAGES.USA,
  },
];

const CERTS = [
  { Icon: Award, label: 'Award Winning' },
  { Icon: Leaf, label: 'GMO Free' },
  { Icon: ShieldCheck, label: 'Hormone Free' },
  { Icon: Sparkles, label: 'Sustainably Farmed' },
];

const About = () => {
  return (
    <div data-testid="about-page" className="bg-[#1A1A1A]">
      {/* Hero */}
      <section className="relative h-[78vh] min-h-[520px] overflow-hidden flex items-end">
        <img src={IMAGES.PLATING} alt="Fine dining plating" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-[#0F0F0F]/20" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-10 pb-14 md:pb-20">
          <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] animate-fade-up">
            Our Story
          </div>
          <h1 className="mt-4 font-display text-6xl md:text-8xl text-white leading-[0.95] tracking-tight max-w-3xl animate-fade-up" style={{ animationDelay: '160ms' }}>
            About <em className="italic text-[#C9A84C]">us.</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-10">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5">Mission</div>
            <h2 className="font-display text-4xl md:text-6xl text-white leading-[1.0] tracking-tight text-balance">
              The pursuit of the <em className="italic text-[#C9A84C]">perfect bite.</em>
            </h2>
            <div className="mt-8 space-y-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                WagyuPrimeUAE was founded by a small team of obsessive home cooks, butchers, and Michelin-trained chefs who travelled to Japan, Australia and the American Pacific Northwest to source what they couldn&apos;t find at home.
              </p>
              <p>
                Today we operate a tightly curated catalogue — only the cuts we would serve to our own families, only the farms whose practices we have personally inspected. No shortcuts, no compromise on welfare, no padding the catalogue with anything we do not love.
              </p>
              <p>
                We deliver fresh across the UAE — Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140} className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={IMAGES.A5} alt="A5 Wagyu marbling" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C]">
              Curated · Inspected · Traceable
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#0F0F0F] border-y border-[#C9A84C]/15 py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5">Certifications</div>
            <h2 className="font-display text-3xl md:text-5xl text-white tracking-tight">Standards we will <em className="italic text-[#C9A84C]">never</em> compromise.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {CERTS.map(({ Icon, label }, i) => (
              <Reveal key={label} delay={i * 100} className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C]">
                  <Icon size={26} strokeWidth={1.3} />
                </div>
                <div className="font-heading text-[10px] tracking-[0.3em] uppercase text-white">{label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal className="grid grid-cols-12 gap-8 mb-14">
            <div className="col-span-12 md:col-span-7">
              <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5">Sourcing</div>
              <h2 className="font-display text-4xl md:text-6xl text-white leading-[1.0] tracking-tight">
                Three regions. <em className="italic text-[#C9A84C]">One philosophy.</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {REGIONS.map((r, i) => (
              <Reveal key={r.country} delay={i * 120}>
                <article className="group relative overflow-hidden border border-[#C9A84C]/15 hover:border-[#C9A84C]/60 transition-colors">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={r.image} alt={r.country} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 space-y-3">
                    <div className="w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center font-heading text-xs tracking-widest text-[#C9A84C]">
                      {r.flag}
                    </div>
                    <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C]">{r.title}</div>
                    <h3 className="font-display text-3xl text-white">{r.country}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">{r.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/steaks"
              data-testid="about-explore-btn"
              className="inline-flex items-center gap-3 bg-[#8B0000] hover:bg-[#A50000] text-white font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
            >
              Explore our steaks <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
