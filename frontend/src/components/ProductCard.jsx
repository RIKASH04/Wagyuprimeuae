import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

const ProductCard = ({ product, index = 0 }) => {
  return (
    <Link
      to={`/steaks/${product.slug}`}
      data-testid={`product-card-${product.slug}`}
      className="group block bg-[#1A1A1A] border border-[#C9A84C]/15 hover:border-[#C9A84C]/60 transition-colors duration-500"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0F0F0F]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.badge && (
            <span className="font-heading text-[9px] tracking-[0.3em] uppercase bg-[#C9A84C] text-[#1A1A1A] px-3 py-1">
              {product.badge}
            </span>
          )}
          {!product.inStock && (
            <span className="font-heading text-[9px] tracking-[0.3em] uppercase bg-[#1A1A1A] text-white border border-white/30 px-3 py-1">
              Sold Out
            </span>
          )}
        </div>
        {/* Origin flag */}
        <div className="absolute top-4 right-4">
          <span className="w-9 h-9 rounded-full border border-[#C9A84C]/60 flex items-center justify-center font-heading text-[9px] tracking-widest text-[#C9A84C] bg-[#1A1A1A]/70 backdrop-blur-sm">
            {product.flag}
          </span>
        </div>
        {/* Bottom hover overlay */}
        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="inline-block font-heading text-[10px] tracking-[0.32em] uppercase text-[#C9A84C] border-b border-[#C9A84C] pb-0.5">
            View Details →
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <span className="font-heading text-[9px] tracking-[0.32em] uppercase text-[#C9A84C]">
            {product.grade}
          </span>
          <Stars value={product.rating} size={11} />
        </div>
        <h3 className="font-heading text-[13px] md:text-[14px] tracking-[0.18em] uppercase text-white leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center justify-between text-xs text-white/55">
          <span>{product.weights.join(' · ')}</span>
          <span>{product.reviews} reviews</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
