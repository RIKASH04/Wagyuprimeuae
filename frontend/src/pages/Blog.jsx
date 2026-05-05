import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/blog';
import Reveal from '../components/Reveal';

const TAGS = ['All', 'Wagyu Guide', 'Cooking', 'Sourcing'];

const Blog = () => {
  const [tag, setTag] = useState('All');
  const filtered = tag === 'All' ? POSTS : POSTS.filter((p) => p.tag === tag);
  const [hero, ...rest] = filtered;

  return (
    <div data-testid="blog-page" className="bg-[#1A1A1A]">
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5">The Journal</div>
            <h1 className="font-display text-5xl md:text-7xl text-white leading-[0.95] tracking-tight">
              Stories, science, <em className="italic text-[#C9A84C]">and ritual.</em>
            </h1>
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                data-testid={`blog-tag-${t.toLowerCase().replace(/\s/g, '-')}`}
                className={`font-heading text-[10px] tracking-[0.3em] uppercase px-5 py-2 border transition-colors ${tag === t ? 'border-[#C9A84C] text-[#1A1A1A] bg-[#C9A84C]' : 'border-[#C9A84C]/30 text-white hover:border-[#C9A84C]'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero post */}
      {hero && (
        <section className="px-6 md:px-10">
          <Reveal>
            <Link
              to={`/blog/${hero.slug}`}
              data-testid={`blog-hero-${hero.slug}`}
              className="group relative block overflow-hidden border border-[#C9A84C]/15 max-w-[1440px] mx-auto"
            >
              <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                <img src={hero.image} alt={hero.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] mb-3">
                  Featured · {hero.tag}
                </div>
                <h2 className="font-display text-3xl md:text-5xl text-white max-w-3xl leading-tight">
                  {hero.title}
                </h2>
                <p className="mt-4 text-white/80 max-w-2xl text-balance">{hero.excerpt}</p>
                <div className="mt-5 font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]">
                  {new Date(hero.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                </div>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* Grid */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <Link
                to={`/blog/${p.slug}`}
                data-testid={`blog-card-${p.slug}`}
                className="group block border-t border-[#C9A84C]/15 pt-6"
              >
                <div className="aspect-[4/3] overflow-hidden mb-5 bg-[#0F0F0F]">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>
                <div className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] mb-3">{p.tag}</div>
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight group-hover:text-[#C9A84C] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-white/45">
                  <span>{new Date(p.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                  <span className="font-heading tracking-[0.3em] uppercase text-[#C9A84C]">Read more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
