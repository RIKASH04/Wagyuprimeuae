// Central site config
export const SITE = {
  brand: 'WagyuPrimeUAE',
  brandShort: 'Wagyu Prime',
  tagline: 'Enjoy the journey and remember, the perfect steak chooses you...',
  whatsappNumber: '9686541863', // raw digits, no symbols
  whatsappDisplay: '+91 96865 41863',
  email: 'rikashrikash04@gmail.com',
  cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK', 'Fujairah', 'UAQ'],
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
  },
};

export const waLink = (msg = 'Hello, I would like to enquire about your Wagyu selection.') =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
