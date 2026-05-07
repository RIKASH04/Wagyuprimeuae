// Product catalogue — display only (no e-commerce)
// Organized by origin country with proper meat types and cuts

// ─── HIGH QUALITY UNSPLASH IMAGES ───────────────────────────────────────────

// Beef cuts
// Beef cuts — all unique verified steak/beef photos
const IMG_RIBEYE      = 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=75'; // seared ribeye
const IMG_STRIPLOIN   = 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=75'; // sliced steak
const IMG_TENDERLOIN  = 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=800&q=75'; // steak in pan
const IMG_BRISKET     = 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=800&q=75'; // slow brisket
const IMG_WAGYU_BURGER= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=75'; // wagyu burger
const IMG_MINCE       = 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=75'; // ground beef dish
const IMG_SHORT_RIBS  = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=75'; // beef short ribs
const IMG_KNUCKLE     = 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=75'; // raw beef on board
const IMG_CHUCK_ROLL  = 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=75'; // wagyu plate
const IMG_RUMP        = 'https://images.unsplash.com/photo-1615937691194-97dbd3f3f29c?auto=format&fit=crop&w=800&q=75'; // wagyu marbling

// Wagyu specific
const IMG_WAGYU_MARBLE  = 'https://images.unsplash.com/photo-1615937691194-97dbd3f3f29c?auto=format&fit=crop&w=900&q=75'; // wagyu marbling
const IMG_JAPANESE_WAGYU= 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=75'; // japanese wagyu plate
const IMG_BLACK_ANGUS   = 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=75'; // grilled angus steak
const IMG_GRASSFED      = 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=900&q=75'; // steak in cast iron
const IMG_GRAINFED      = 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=900&q=75'; // raw beef steak

// Lamb & Mutton — beef/lamb images only
const IMG_LAMB         = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=75'; // rack of ribs
const IMG_LAMB_SHOULDER= 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=800&q=75'; // slow-cooked shoulder
const IMG_LAMB_LEG     = 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=75'; // sliced leg meat
const IMG_LAMB_LOIN    = 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=75'; // loin steak
const IMG_LAMB_RIB     = 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=75'; // rib cut
const IMG_LAMB_SHANK   = 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=75'; // braised cut
const IMG_MUTTON       = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=75'; // robust meat cut

// Veal
const IMG_VEAL      = 'https://images.unsplash.com/photo-1615937691194-97dbd3f3f29c?auto=format&fit=crop&w=800&q=75'; // fine marbled cut
const IMG_VEAL_RACK = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=75'; // rack of ribs
const IMG_VEAL_OSSO = 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=800&q=75'; // slow braised cut

// Venison
const IMG_VENISON      = 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=75'; // lean dark meat
const IMG_VENISON_LOIN = 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=75'; // loin cut

// Hero / general
const HERO    = 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1400&q=80';
const PLATING = 'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?auto=format&fit=crop&w=900&q=75';
const A5      = 'https://images.unsplash.com/photo-1615937691194-97dbd3f3f29c?auto=format&fit=crop&w=900&q=75';

// ─── COUNTRY FLAG IMAGES (from flagcdn.com for high quality) ────────────────

const FLAGS = {
  AU: 'https://flagcdn.com/w320/au.png',
  JP: 'https://flagcdn.com/w320/jp.png',
  KE: 'https://flagcdn.com/w320/ke.png',
  BR: 'https://flagcdn.com/w320/br.png',
  NZ: 'https://flagcdn.com/w320/nz.png',
};

export const IMAGES = { HERO, A5, PLATING, IMG_WAGYU_MARBLE, IMG_JAPANESE_WAGYU, IMG_GRASSFED, IMG_LAMB, IMG_VEAL, IMG_VENISON };

// ─── COUNTRIES ──────────────────────────────────────────────────────────────

export const COUNTRIES = [
  {
    code: 'AU',
    name: 'Australia',
    flag: FLAGS.AU,
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=1200&q=80',
    blurb: 'Wagyu · Black Angus · Grassfed · Grainfed · Lamb · Mutton',
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: FLAGS.JP,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=75',
    blurb: 'Japanese Wagyu — A5 Grade',
  },
  {
    code: 'KE',
    name: 'Kenya',
    flag: FLAGS.KE,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=75',
    blurb: 'Premium Mutton',
  },
  {
    code: 'BR',
    name: 'Brazil',
    flag: FLAGS.BR,
    image: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&w=900&q=75',
    blurb: 'Grassfed Beef',
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    flag: FLAGS.NZ,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=75',
    blurb: 'Grassfed Beef',
  },
];

// ─── CATEGORIES (by country → meat type) ────────────────────────────────────

export const CATEGORIES = [
  // Australia
  { slug: 'au-wagyu', name: 'Wagyu Beef', country: 'AU', image: IMG_WAGYU_MARBLE, blurb: 'Premium Australian Wagyu · Marble Score 5–9' },
  { slug: 'au-black-angus', name: 'Black Angus', country: 'AU', image: IMG_BLACK_ANGUS, blurb: 'Australian Black Angus · Grain & Grass Fed' },
  { slug: 'au-grassfed', name: 'Grassfed Beef', country: 'AU', image: IMG_GRASSFED, blurb: 'Australian Grassfed · Natural & Clean' },
  { slug: 'au-grainfed', name: 'Grainfed Beef', country: 'AU', image: IMG_GRAINFED, blurb: 'Australian Grainfed · Rich & Consistent' },
  { slug: 'au-lamb', name: 'Lamb', country: 'AU', image: IMG_LAMB, blurb: 'Australian Lamb · Tender & Mild' },
  { slug: 'au-mutton', name: 'Mutton', country: 'AU', image: IMG_MUTTON, blurb: 'Australian Mutton · Full Flavour' },

  // Japan
  { slug: 'jp-wagyu', name: 'Japanese Wagyu', country: 'JP', image: IMG_JAPANESE_WAGYU, blurb: 'A5 Grade · BMS 10–12 · Hyogo · Kagoshima' },

  // Kenya
  { slug: 'ke-mutton', name: 'Mutton', country: 'KE', image: IMG_MUTTON, blurb: 'Kenyan Mutton · Traditional & Robust' },

  // Brazil
  { slug: 'br-grassfed', name: 'Grassfed Beef', country: 'BR', image: IMG_GRASSFED, blurb: 'Brazilian Grassfed · Bold & Natural' },

  // New Zealand
  { slug: 'nz-grassfed', name: 'Grassfed Beef', country: 'NZ', image: IMG_GRASSFED, blurb: 'New Zealand Grassfed · Pure & Clean' },

  // General
  { slug: 'gen-veal', name: 'Veal', country: 'GEN', image: IMG_VEAL, blurb: 'Premium Veal · Tender & Delicate' },
  { slug: 'gen-venison', name: 'Venison', country: 'GEN', image: IMG_VENISON, blurb: 'Wild Game · Lean & Rich' },
];

// ─── STANDARD CUTS ──────────────────────────────────────────────────────────

const BEEF_CUTS = ['Ribeye', 'Striploin', 'Tenderloin', 'Brisket', 'Wagyu Burgers', 'Wagyu Minced Beef', 'Short Ribs', 'Knuckle', 'Chuck Roll', 'Rump'];
const LAMB_MUTTON_CUTS = ['Shoulder', 'Leg', 'Loin', 'Rib', 'Breast', 'Shank', 'Neck', 'Flank', 'Cubes'];

const BEEF_CUT_IMAGES = {
  'Ribeye': IMG_RIBEYE,
  'Striploin': IMG_STRIPLOIN,
  'Tenderloin': IMG_TENDERLOIN,
  'Brisket': IMG_BRISKET,
  'Wagyu Burgers': IMG_WAGYU_BURGER,
  'Wagyu Minced Beef': IMG_MINCE,
  'Short Ribs': IMG_SHORT_RIBS,
  'Knuckle': IMG_KNUCKLE,
  'Chuck Roll': IMG_CHUCK_ROLL,
  'Rump': IMG_RUMP,
};

const LAMB_CUT_IMAGES = {
  'Shoulder': IMG_LAMB_SHOULDER,
  'Leg': IMG_LAMB_LEG,
  'Loin': IMG_LAMB_LOIN,
  'Rib': IMG_LAMB_RIB,
  'Breast': IMG_LAMB,
  'Shank': IMG_LAMB_SHANK,
  'Neck': IMG_LAMB,
  'Flank': IMG_LAMB,
  'Cubes': IMG_LAMB,
};

// Helper to generate products for a category
function generateBeefProducts(categorySlug, categoryName, countryCode, countryName, cuts = BEEF_CUTS) {
  return cuts.map((cut) => ({
    slug: `${categorySlug}-${cut.toLowerCase().replace(/\s+/g, '-')}`,
    name: `${categoryName} ${cut}`,
    category: categorySlug,
    origin: countryName,
    flag: countryCode,
    flagImg: FLAGS[countryCode] || '',
    image: BEEF_CUT_IMAGES[cut] || IMG_RIBEYE,
    gallery: [BEEF_CUT_IMAGES[cut] || IMG_RIBEYE, IMG_WAGYU_MARBLE, IMG_RIBEYE],
    inStock: true,
    cut,
  }));
}

function generateLambMuttonProducts(categorySlug, categoryName, countryCode, countryName, cuts = LAMB_MUTTON_CUTS) {
  return cuts.map((cut) => ({
    slug: `${categorySlug}-${cut.toLowerCase().replace(/\s+/g, '-')}`,
    name: `${categoryName} ${cut}`,
    category: categorySlug,
    origin: countryName,
    flag: countryCode,
    flagImg: FLAGS[countryCode] || '',
    image: LAMB_CUT_IMAGES[cut] || IMG_LAMB,
    gallery: [LAMB_CUT_IMAGES[cut] || IMG_LAMB, IMG_LAMB, IMG_LAMB_RIB],
    inStock: true,
    cut,
  }));
}

// ─── ALL PRODUCTS ───────────────────────────────────────────────────────────

export const PRODUCTS = [
  // ── AUSTRALIA ─────────────────────────────────────────────────────────────
  ...generateBeefProducts('au-wagyu', 'Wagyu Beef', 'AU', 'Australia'),
  ...generateBeefProducts('au-black-angus', 'Black Angus', 'AU', 'Australia'),
  ...generateBeefProducts('au-grassfed', 'Grassfed Beef', 'AU', 'Australia'),
  ...generateBeefProducts('au-grainfed', 'Grainfed Beef', 'AU', 'Australia'),
  ...generateLambMuttonProducts('au-lamb', 'Lamb', 'AU', 'Australia'),
  ...generateLambMuttonProducts('au-mutton', 'Mutton', 'AU', 'Australia'),

  // ── JAPAN ─────────────────────────────────────────────────────────────────
  ...generateBeefProducts('jp-wagyu', 'Japanese Wagyu', 'JP', 'Japan'),

  // ── KENYA ─────────────────────────────────────────────────────────────────
  ...generateLambMuttonProducts('ke-mutton', 'Mutton', 'KE', 'Kenya'),

  // ── BRAZIL ────────────────────────────────────────────────────────────────
  ...generateBeefProducts('br-grassfed', 'Grassfed Beef', 'BR', 'Brazil'),
  // Brazil also has Shoulder (lamb-type cut for grassfed)
  {
    slug: 'br-grassfed-shoulder',
    name: 'Grassfed Beef Shoulder',
    category: 'br-grassfed',
    origin: 'Brazil',
    flag: 'BR',
    flagImg: FLAGS.BR,
    image: IMG_LAMB_SHOULDER,
    gallery: [IMG_LAMB_SHOULDER, IMG_GRASSFED, IMG_RIBEYE],
    inStock: true,
    cut: 'Shoulder',
  },

  // ── NEW ZEALAND ───────────────────────────────────────────────────────────
  ...generateBeefProducts('nz-grassfed', 'Grassfed Beef', 'NZ', 'New Zealand'),

  // ── GENERAL: VEAL ─────────────────────────────────────────────────────────
  ...['Leg', 'Loin', 'Rib', 'Breast', 'Shank', 'Neck', 'Flank', 'Veal Tenderloin / Fillet', 'Veal Striploin', 'Veal Osso Buco', 'Veal Frenched Rack', 'Veal Rack', 'Veal Loin', 'Veal Cheek', 'Veal Topside'].map((cut) => ({
    slug: `gen-veal-${cut.toLowerCase().replace(/[\s\/]+/g, '-')}`,
    name: `Veal ${cut.startsWith('Veal') ? cut.replace('Veal ', '') : cut}`,
    category: 'gen-veal',
    origin: 'Various',
    flag: 'GEN',
    flagImg: '',
    image: cut.includes('Osso') ? IMG_VEAL_OSSO : cut.includes('Rack') || cut.includes('Frenched') ? IMG_VEAL_RACK : IMG_VEAL,
    gallery: [IMG_VEAL, IMG_VEAL_RACK, IMG_VEAL_OSSO],
    inStock: true,
    cut,
  })),

  // ── GENERAL: VENISON ──────────────────────────────────────────────────────
  ...['Loin', 'Tenderloin', 'Leg', 'Shoulder', 'Shank', 'Neck', 'Ribs', 'Flank', 'Ground Venison', 'Cubes'].map((cut) => ({
    slug: `gen-venison-${cut.toLowerCase().replace(/\s+/g, '-')}`,
    name: `Venison ${cut}`,
    category: 'gen-venison',
    origin: 'Various',
    flag: 'GEN',
    flagImg: '',
    image: cut === 'Loin' ? IMG_VENISON_LOIN : IMG_VENISON,
    gallery: [IMG_VENISON, IMG_VENISON_LOIN, IMG_VENISON],
    inStock: true,
    cut,
  })),
];

// ─── CATEGORY TABS (for filter sidebar) ─────────────────────────────────────

export const CATEGORY_TABS = [
  {
    key: 'AU',
    label: '🇦🇺 Australia',
    flag: FLAGS.AU,
    subs: [
      { key: 'au-wagyu', label: 'Wagyu Beef' },
      { key: 'au-black-angus', label: 'Black Angus' },
      { key: 'au-grassfed', label: 'Grassfed Beef' },
      { key: 'au-grainfed', label: 'Grainfed Beef' },
      { key: 'au-lamb', label: 'Lamb' },
      { key: 'au-mutton', label: 'Mutton' },
    ],
  },
  {
    key: 'JP',
    label: '🇯🇵 Japan',
    flag: FLAGS.JP,
    subs: [
      { key: 'jp-wagyu', label: 'Japanese Wagyu' },
    ],
  },
  {
    key: 'KE',
    label: '🇰🇪 Kenya',
    flag: FLAGS.KE,
    subs: [
      { key: 'ke-mutton', label: 'Mutton' },
    ],
  },
  {
    key: 'BR',
    label: '🇧🇷 Brazil',
    flag: FLAGS.BR,
    subs: [
      { key: 'br-grassfed', label: 'Grassfed Beef' },
    ],
  },
  {
    key: 'NZ',
    label: '🇳🇿 New Zealand',
    flag: FLAGS.NZ,
    subs: [
      { key: 'nz-grassfed', label: 'Grassfed Beef' },
    ],
  },
  {
    key: 'GEN',
    label: 'General',
    subs: [
      { key: 'gen-veal', label: 'Veal' },
      { key: 'gen-venison', label: 'Venison' },
    ],
  },
];

export const TESTIMONIALS = [
  {
    headline: 'Better than Tokyo',
    quote:
      'I have eaten A5 in Tokyo, Hong Kong and London. Wagyu Prime UAE delivered the best ribeye I have had in five years. Genuinely.',
    name: 'Faisal Al-Mansoori',
    city: 'Dubai',
    bg: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=75',
  },
  {
    headline: 'A dinner party legend',
    quote:
      'The tomahawk arrived in pristine condition, perfectly trimmed. My guests still talk about it three months later.',
    name: 'Layla Mubarak',
    city: 'Abu Dhabi',
    bg: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=75',
  },
  {
    headline: 'The only butcher I trust',
    quote:
      'Their sourcing is honest. Their packaging is immaculate. Their answer to "what cut should I get?" is always right.',
    name: 'Karim Saleh',
    city: 'Sharjah',
    bg: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=75',
  },
];
