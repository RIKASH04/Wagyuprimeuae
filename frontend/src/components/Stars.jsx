import React from 'react';
import { Star } from 'lucide-react';

const Stars = ({ value = 5, size = 14, className = '' }) => {
  return (
    <div className={`flex items-center gap-0.5 text-[#C9A84C] ${className}`} aria-label={`${value} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} className={i < Math.round(value) ? '' : 'opacity-30'} />
      ))}
    </div>
  );
};

export default Stars;
