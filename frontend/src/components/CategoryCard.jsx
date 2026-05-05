import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';

const CategoryCard = ({ image, name, blurb, to, index = 0 }) => {
  return (
    <Link
      to={to}
      data-testid={`category-card-${name.toLowerCase().replace(/\s/g, '-')}`}
      className="group block relative overflow-hidden bg-[#0F0F0F] border border-[#C9A84C]/15 hover:border-[#C9A84C]/60 transition-colors duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 space-y-4">
        <Stars value={5} size={12} />
        <h3 className="font-display text-3xl md:text-4xl text-white leading-tight">
          {name}
        </h3>
        <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]">
          {blurb}
        </p>
        <div className="pt-2">
          <span className="inline-flex items-center gap-2 bg-[#8B0000] hover:bg-[#A50000] text-white font-heading text-[10px] tracking-[0.3em] uppercase px-6 py-3 transition-colors duration-300">
            View Steaks →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
