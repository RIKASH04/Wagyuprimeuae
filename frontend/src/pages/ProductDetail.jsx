import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, Leaf, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { waLink } from '../lib/site';
import Stars from '../components/Stars';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(0);

  if (!product) return <Navigate to="/steaks" replace />;

  const related = PRODUCTS.filter((p) => p.sub === product.sub && p.slug !== product.slug).slice(0, 4);

  return (
    <div data-testid="product-detail-page" className="bg-[#1A1A1A] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-2 flex items-center gap-2 text-xs text-white/50 font-heading tracking-[0.18em] uppercase">
        <Link to="/" className="hover:text-[#C9A84C]">Home</Link>
        <ChevronRight size={12} />
        <Link to="/steaks" className="hover:text-[#C9A84C]">Steaks</Link>
        <ChevronRight size={12} />
        <span className="text-[#C9A84C] truncate">{product.name}</span>
      </div>

      {/* Detail */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 md:py-16 grid grid-cols-12 gap-10">
        {/* Gallery */}
        <div className="col-span-12 md:col-span-7">
          <div className="aspect-[4/5] overflow-hidden bg-[#0F0F0F] border border-[#C9A84C]/15">
            <img
              src={product.gallery[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                data-testid={`gallery-thumb-${i}`}
                className={`aspect-square overflow-hidden border transition-colors ${i === activeImg ? 'border-[#C9A84C]' : 'border-[#C9A84C]/15 hover:border-[#C9A84C]/40'}`}
              >
                <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="col-span-12 md:col-span-5 md:pl-4">
          <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C]">
            {product.grade}
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-white leading-tight tracking-tight">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <Stars value={product.rating} size={14} />
            <span className="text-xs text-white/60">{product.reviews} reviews</span>
          </div>

          {/* Origin badge */}
          <div className="mt-6 inline-flex items-center gap-3 border border-[#C9A84C]/40 px-4 py-2">
            <span className="w-9 h-9 rounded-full border border-[#C9A84C]/60 flex items-center justify-center font-heading text-[9px] tracking-widest text-[#C9A84C]">
              {product.flag}
            </span>
            <span className="font-heading text-[10px] tracking-[0.28em] uppercase text-white/85">
              {product.origin}
            </span>
          </div>

          <p className="mt-7 text-white/75 text-base leading-relaxed">
            {product.description}
          </p>

          {/* Variant pills */}
          <div className="mt-8">
            <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] mb-3">
              Available Weights
            </div>
            <div className="flex flex-wrap gap-3">
              {product.weights.map((w, i) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(i)}
                  data-testid={`weight-pill-${i}`}
                  className={`font-heading text-[10px] tracking-[0.28em] uppercase px-4 py-2 border transition-colors ${
                    i === selectedWeight ? 'border-[#C9A84C] text-[#1A1A1A] bg-[#C9A84C]' : 'border-[#C9A84C]/30 text-white hover:border-[#C9A84C]'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
            <div className="mt-3 text-xs text-white/50">Reference price: AED {product.price.toLocaleString()} · contact to confirm.</div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex items-center gap-5 flex-wrap">
            {[{ Icon: Leaf, label: 'GMO Free' }, { Icon: ShieldCheck, label: 'Hormone Free' }, { Icon: Sparkles, label: 'Sustainably Farmed' }].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <span className="w-9 h-9 rounded-full border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C]">
                  <Icon size={14} strokeWidth={1.4} />
                </span>
                <span className="font-heading text-[9px] tracking-[0.3em] uppercase">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={waLink(`Hello, I would like to enquire about: ${product.name} (${product.weights[selectedWeight]}).`)}
              data-testid="contact-to-order-btn"
              className="inline-flex items-center gap-3 bg-[#8B0000] hover:bg-[#A50000] text-white font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
            >
              <MessageCircle size={16} /> Contact to Order
            </a>
            <Link
              to="/steaks"
              className="inline-flex items-center gap-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#1A1A1A] font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
            >
              Back to all steaks
            </Link>
          </div>

          {/* Flavour & cooking */}
          <div className="mt-10 space-y-5 text-sm text-white/75">
            <div>
              <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] mb-2">Flavour Notes</div>
              <p>{product.flavour}</p>
            </div>
            <div>
              <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] mb-2">Cooking Suggestion</div>
              <p>{product.cooking}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider mx-6 md:mx-10" />

      {/* Reviews section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <Reveal className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-4">From the Table</div>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              {product.rating.toFixed(1)} <span className="text-[#C9A84C]">/ 5</span>
            </h2>
            <Stars value={product.rating} size={16} className="mt-3" />
            <div className="mt-2 text-sm text-white/60">{product.reviews} reviews · verified buyers</div>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-t border-[#C9A84C]/15 pt-5">
                <div className="flex items-center justify-between">
                  <Stars value={5} size={12} />
                  <div className="font-heading text-[9px] tracking-[0.3em] uppercase text-white/50">
                    Verified Buyer · UAE
                  </div>
                </div>
                <p className="mt-3 text-white/80 text-base leading-relaxed">
                  {[
                    'Outstanding marbling — the cooking notes were spot on. Thank you for the personal touch.',
                    'Arrived perfectly chilled. The flavour was beyond what I expected from any meat sourced locally.',
                    'A genuine experience. The team\'s recommendation made our anniversary dinner exceptional.',
                  ][i - 1]}
                </p>
                <div className="mt-3 text-xs text-white/45 font-heading tracking-[0.2em] uppercase">
                  — {['Hassan A.', 'Jenna K.', 'Omar D.'][i - 1]} · Dubai
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#0F0F0F] py-16 md:py-24 border-t border-[#C9A84C]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-3">More Like This</div>
                <h3 className="font-display text-3xl md:text-4xl text-white">You might also love</h3>
              </div>
              <Link to="/steaks" className="hidden sm:inline-flex items-center gap-2 font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C] border-b border-[#C9A84C]">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scrollbar-none -mx-6 md:mx-0 px-6 md:px-0">
              {related.map((p, i) => (
                <div key={p.slug} className="min-w-[260px] md:min-w-0">
                  <ProductCard product={p} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
