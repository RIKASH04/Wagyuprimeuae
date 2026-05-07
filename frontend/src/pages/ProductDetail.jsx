import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, Leaf, ShieldCheck, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { waLink } from '../lib/site';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/steaks" replace />;

  // Find category info
  const category = CATEGORIES.find((c) => c.slug === product.category);

  // Flag image
  const flagUrl = product.flagImg || (product.flag && product.flag !== 'GEN'
    ? `https://flagcdn.com/w320/${product.flag.toLowerCase()}.png`
    : null);

  // Related products from same category
  const related = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div data-testid="product-detail-page" className="bg-[#1A1A1A] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-2 flex items-center gap-2 text-xs text-white/50 font-heading tracking-[0.18em] uppercase">
        <Link to="/" className="hover:text-[#C9A84C]">Home</Link>
        <ChevronRight size={12} />
        <Link to="/steaks" className="hover:text-[#C9A84C]">Catalogue</Link>
        <ChevronRight size={12} />
        {category && (
          <>
            <Link to={`/steaks?sub=${category.slug}`} className="hover:text-[#C9A84C]">{category.name}</Link>
            <ChevronRight size={12} />
          </>
        )}
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
          {category && (
            <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C]">
              {category.name}
            </div>
          )}
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-white leading-tight tracking-tight">
            {product.name}
          </h1>

          {/* Origin badge with flag */}
          <div className="mt-6 inline-flex items-center gap-3 border border-[#C9A84C]/40 px-4 py-2">
            {flagUrl ? (
              <div className="w-10 h-7 rounded overflow-hidden border border-white/20">
                <img src={flagUrl} alt={product.origin} className="w-full h-full object-cover" />
              </div>
            ) : (
              <span className="w-9 h-9 rounded-full border border-[#C9A84C]/60 flex items-center justify-center font-heading text-[9px] tracking-widest text-[#C9A84C]">
                {product.flag}
              </span>
            )}
            <span className="font-heading text-[10px] tracking-[0.28em] uppercase text-white/85">
              {product.origin}
            </span>
          </div>

          {/* Cut info */}
          <div className="mt-7 space-y-4">
            <div className="font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C]">
              Cut
            </div>
            <div className="text-white/90 text-lg font-display">
              {product.cut}
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex items-center gap-5 flex-wrap">
            {[{ Icon: Leaf, label: 'Quality Assured' }, { Icon: ShieldCheck, label: 'Hormone Free' }, { Icon: Sparkles, label: 'Premium Grade' }].map(({ Icon, label }) => (
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
              href={waLink(`Hello, I would like to enquire about: ${product.name} from ${product.origin}.`)}
              data-testid="contact-to-order-btn"
              className="inline-flex items-center gap-3 bg-[#8B0000] hover:bg-[#A50000] text-white font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
            >
              <MessageCircle size={16} /> Contact to Order
            </a>
            <Link
              to="/steaks"
              className="inline-flex items-center gap-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#1A1A1A] font-heading text-xs tracking-[0.32em] uppercase px-9 py-4 transition-colors duration-300"
            >
              Back to Catalogue
            </Link>
          </div>
        </div>
      </section>

      <div className="gold-divider mx-6 md:mx-10" />

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#0F0F0F] py-16 md:py-24 border-t border-[#C9A84C]/15">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="font-heading text-[10px] tracking-[0.4em] uppercase text-[#C9A84C] mb-3">More Like This</div>
                <h3 className="font-display text-3xl md:text-4xl text-white">Other cuts from {category?.name || 'this category'}</h3>
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
