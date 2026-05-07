import React from 'react';

const items = [
  'Nationwide Shipping — Delivered fresh across the UAE',
  'Dubai · Abu Dhabi · Sharjah · Ajman · RAK · Fujairah · UAQ',
  'Halal Certified · Hormone Free · Sustainably Farmed',
];

const AnnouncementBar = () => {
  return (
    <div
      data-testid="announcement-bar"
      className="bg-[#1A1A1A] text-white border-b border-[#C9A84C]/15 overflow-hidden relative py-2"
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.32em] uppercase font-heading">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-3 md:gap-5">
            <span className="text-[#C9A84C]">★</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
