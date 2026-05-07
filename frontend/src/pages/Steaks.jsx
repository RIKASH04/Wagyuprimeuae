import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS, CATEGORY_TABS, COUNTRIES } from '../data/products';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';

const Steaks = () => {
  const [params, setParams] = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeCat = params.get('cat') || 'all';
  const activeSub = params.get('sub') || 'all';

  const setCat = (c) => {
    const next = new URLSearchParams(params);
    if (c === 'all') next.delete('cat'); else next.set('cat', c);
    next.delete('sub');
    setParams(next);
  };
  const setSub = (s) => {
    const next = new URLSearchParams(params);
    if (s === 'all') next.delete('sub'); else next.set('sub', s);
    setParams(next);
  };

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (activeCat !== 'all') {
        // activeCat is a country code like 'AU', 'JP', etc. or 'GEN'
        const tab = CATEGORY_TABS.find((t) => t.key === activeCat);
        if (tab) {
          const subKeys = tab.subs.map((s) => s.key);
          if (!subKeys.includes(p.category)) return false;
        }
      }
      if (activeSub !== 'all' && p.category !== activeSub) return false;
      return true;
    });
  }, [activeCat, activeSub]);

  const subFilters = activeCat === 'all'
    ? []
    : (CATEGORY_TABS.find((t) => t.key === activeCat)?.subs || []);

  // Get active country info for display
  const activeCountry = COUNTRIES.find((c) => c.code === activeCat);

  return (
    <div data-testid="steaks-page" className="bg-[#1A1A1A] min-h-screen">
      {/* Page header */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-5">
              The Catalogue
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white leading-[0.95] tracking-tight">
              Premium Meats <span className="italic text-[#C9A84C]">by Origin</span>
            </h1>
            <p className="mt-5 text-white/65 text-base md:text-lg max-w-2xl">
              {filtered.length} curated cuts — sourced from Australia, Japan, Kenya, Brazil, and New Zealand. Display only — contact us to order.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Top country tiles */}
      <section className="border-y border-[#C9A84C]/15 bg-[#0F0F0F]/40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex items-center gap-3 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setCat('all')}
            data-testid="filter-cat-all"
            className={`shrink-0 font-heading text-[10px] tracking-[0.32em] uppercase px-5 py-2 border transition-colors ${activeCat === 'all' ? 'border-[#C9A84C] text-[#1A1A1A] bg-[#C9A84C]' : 'border-[#C9A84C]/30 text-white hover:border-[#C9A84C]'}`}
          >
            All
          </button>
          {CATEGORY_TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setCat(t.key)}
              data-testid={`filter-cat-${t.key}`}
              className={`shrink-0 flex items-center gap-2 font-heading text-[10px] tracking-[0.32em] uppercase px-5 py-2 border transition-colors ${activeCat === t.key ? 'border-[#C9A84C] text-[#1A1A1A] bg-[#C9A84C]' : 'border-[#C9A84C]/30 text-white hover:border-[#C9A84C]'}`}
            >
              {t.flag && (
                <img src={t.flag} alt={t.label} className="w-5 h-3.5 object-cover rounded-sm" />
              )}
              {t.label.replace(/^[\u{1F1E6}-\u{1F1FF}]{2}\s*/u, '')}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-3 shrink-0">
            <button
              onClick={() => setDrawerOpen(true)}
              data-testid="open-filter-drawer"
              className="md:hidden flex items-center gap-2 font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] border border-[#C9A84C]/40 px-4 py-2"
            >
              <SlidersHorizontal size={14} /> Filters
            </button>
            <span className="hidden md:inline-block font-heading text-[10px] tracking-[0.32em] uppercase text-white/60">
              {filtered.length} products
            </span>
          </div>
        </div>
      </section>

      {/* Active country hero banner */}
      {activeCountry && (
        <section className="border-b border-[#C9A84C]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-8">
            <div className="flex items-center gap-5">
              <img
                src={activeCountry.flag}
                alt={`${activeCountry.name} flag`}
                className="w-16 h-11 object-cover rounded shadow-lg border border-white/10"
              />
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-white">
                  {activeCountry.name}
                </h2>
                <p className="text-white/60 text-sm mt-1">{activeCountry.blurb}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-12 gap-10">
        {/* Sidebar (desktop) */}
        <aside className="hidden md:block col-span-3 space-y-10 sticky top-28 self-start">
          <FilterColumn
            activeCat={activeCat}
            activeSub={activeSub}
            setCat={setCat}
            setSub={setSub}
            subFilters={subFilters}
          />
        </aside>

        {/* Mobile drawer */}
        {drawerOpen && (
          <div className="fixed inset-0 z-[70] flex md:hidden">
            <div className="absolute inset-0 bg-black/70" onClick={() => setDrawerOpen(false)} />
            <div className="relative ml-auto w-[80%] max-w-xs h-full bg-[#0F0F0F] border-l border-[#C9A84C]/20 p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]">Filter</span>
                <button onClick={() => setDrawerOpen(false)} aria-label="Close filters" data-testid="close-filter-drawer" className="text-white">
                  <X size={22} />
                </button>
              </div>
              <FilterColumn
                activeCat={activeCat}
                activeSub={activeSub}
                setCat={(c) => { setCat(c); }}
                setSub={(s) => { setSub(s); }}
                subFilters={subFilters}
              />
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="col-span-12 md:col-span-9">
          {filtered.length === 0 ? (
            <div className="text-center py-32 text-white/60">
              <div className="font-display italic text-2xl">No products match your filters.</div>
              <button
                onClick={() => { setCat('all'); setSub('all'); }}
                className="mt-4 font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] border-b border-[#C9A84C]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 80}>
                  <ProductCard product={p} index={i} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const FilterColumn = ({ activeCat, activeSub, setCat, setSub, subFilters }) => (
  <div className="space-y-10">
    <div>
      <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] mb-5">
        Origin Country
      </div>
      <ul className="space-y-3">
        <li>
          <button
            onClick={() => setCat('all')}
            data-testid="side-cat-all"
            className={`text-sm tracking-wide ${activeCat === 'all' ? 'text-[#C9A84C]' : 'text-white/75 hover:text-white'}`}
          >
            All Products
          </button>
        </li>
        {CATEGORY_TABS.map((t) => (
          <li key={t.key}>
            <button
              onClick={() => setCat(t.key)}
              data-testid={`side-cat-${t.key}`}
              className={`flex items-center gap-2.5 text-sm tracking-wide ${activeCat === t.key ? 'text-[#C9A84C]' : 'text-white/75 hover:text-white'}`}
            >
              {t.flag && (
                <img src={t.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm" />
              )}
              {t.label.replace(/^[\u{1F1E6}-\u{1F1FF}]{2}\s*/u, '')}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {subFilters.length > 0 && (
      <div>
        <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] mb-5">
          Meat Type
        </div>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => setSub('all')}
              data-testid="side-sub-all"
              className={`text-sm tracking-wide ${activeSub === 'all' ? 'text-[#C9A84C]' : 'text-white/75 hover:text-white'}`}
            >
              All
            </button>
          </li>
          {subFilters.map((s) => (
            <li key={s.key}>
              <button
                onClick={() => setSub(s.key)}
                data-testid={`side-sub-${s.key}`}
                className={`text-sm tracking-wide ${activeSub === s.key ? 'text-[#C9A84C]' : 'text-white/75 hover:text-white'}`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}

    <div className="pt-6 border-t border-[#C9A84C]/15 text-xs text-white/40 leading-relaxed">
      All cuts are display only. Contact us via WhatsApp to order.
    </div>
  </div>
);

export default Steaks;
