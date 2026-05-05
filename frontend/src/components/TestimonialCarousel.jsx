import React, { useEffect, useState } from 'react';
import Stars from './Stars';
import { TESTIMONIALS } from '../data/products';

const TestimonialCarousel = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  const t = TESTIMONIALS[i];

  return (
    <section
      data-testid="testimonial-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-[80vh] min-h-[520px] overflow-hidden"
    >
      {TESTIMONIALS.map((item, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${item.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}
      <div className="absolute inset-0 bg-[#0F0F0F]/70" />
      <div className="absolute inset-0 grain-overlay" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-10 grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-8 lg:col-span-7 space-y-7">
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C]">
              From the Table — Testimonials
            </div>
            <Stars value={5} size={18} />
            <h3 className="font-display text-4xl md:text-6xl text-white leading-tight text-balance">
              “{t.headline}”
            </h3>
            <p className="text-white/75 font-sans text-base md:text-lg leading-relaxed max-w-2xl text-balance">
              {t.quote}
            </p>
            <div className="pt-2 font-heading text-[11px] tracking-[0.3em] uppercase text-white/80">
              — {t.name} <span className="text-[#C9A84C] mx-2">·</span> {t.city}
            </div>
            <div className="flex items-center gap-3 pt-4">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  data-testid={`testimonial-dot-${idx}`}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-[2px] transition-all duration-500 ${idx === i ? 'w-12 bg-[#C9A84C]' : 'w-6 bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
