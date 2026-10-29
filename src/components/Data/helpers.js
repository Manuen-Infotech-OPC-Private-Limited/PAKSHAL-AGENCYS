import { BRAND_CONFIG } from './brandConfig';

export const getCategoriesForBrand = (brandName) => {
  if (!brandName) return ['Plywood'];
  const brand = BRAND_CONFIG.find(
    b => b.name.toLowerCase() === brandName.toLowerCase()
  );
  if (brand && brand.categories && brand.categories.length > 0) {
    return brand.categories;
  }
  return ['Plywood'];
};

export const getCanonicalCategory = (categoryName) => {
  if (!categoryName) return '';
  const c = categoryName.toLowerCase().trim();
  if (c === 'door fittings' || c === 'door-fittings') return 'Hardware & Fittings';
  if (c.includes('door')) return 'Fancy Doors';
  if (c === 'arch. hardware' || c.includes('arch') || c.includes('architectural')) return 'Arch. Hardware';
  if (c === 'hardware & fittings' || c.includes('hardware') || c.includes('fittings')) return 'Hardware & Fittings';
  if (c.includes('sliding')) return 'Sliding Systems';
  if (c.includes('plywood')) return 'Plywood';
  if (c.includes('laminate')) return 'Laminates';
  if (c.includes('acrylic')) return 'Acrylic Panels';
  if (c.includes('veneer')) return 'Veneers';
  if (c.includes('kitchen')) return 'Kitchen Accessories';
  return categoryName;
};

export const isPlywoodOrLaminateBrand = (brandName) => {
  if (!brandName) return false;
  const bLower = brandName.toLowerCase().trim();
  const targetBrands = [
    'royal club',
    'marine club',
    'gurjan club',
    'gurjan king',
    'gurjan star',
    'gurjan gold',
    'century',
    'green',
    'marine',
    'vista',
    'croma',
    'indigo',
    'merino',
    'armani',
    'architecture',
    'fancy doors',
    'carved timber doors',
    'modern fancy doors',
    'royal fancy doors',
    'architectural fancy doors'
  ];
  return targetBrands.some(b => bLower === b || bLower.startsWith(b));
};

export const isBrandMatch = (s, brandName) => {
  if (!s || !brandName) return false;
  const bLower = brandName.toLowerCase().trim();
  const sBrand = (s.brandName || '').toLowerCase().trim();
  const sCat = getCanonicalCategory(s.category);

  if (bLower === 'armani') {
    return sCat === 'Acrylic Panels' || sBrand.includes('armani') || sBrand.includes('acrylic');
  }
  if (bLower === 'fancy doors') {
    return sCat === 'Fancy Doors' || sBrand.includes('fancy doors') || sBrand.includes('door');
  }
  if (bLower === 'architecture') {
    return sCat === 'Veneers' || sBrand.includes('architecture');
  }
  if (bLower === 'astdax') {
    return sBrand.includes('astdax');
  }
  if (bLower === 'steel wood') {
    return sBrand.includes('steel') || sCat === 'Sliding Systems' || sCat === 'Kitchen Accessories' || sBrand.includes('sliding');
  }
  return sBrand === bLower;
};

export const isBrandCategoryMatch = (s, brandName, categoryName) => {
  if (!s) return false;
  const targetCategory = categoryName ? getCanonicalCategory(categoryName) : null;
  const sCat = getCanonicalCategory(s.category);
  if (targetCategory) {
    if (targetCategory === 'Sliding Systems') {
      const isSliding = sCat === 'Sliding Systems' || (s.brandName || '').toLowerCase().includes('sliding');
      if (!isSliding) return false;
    } else if (sCat !== targetCategory) {
      return false;
    }
  }
  if (brandName && !isBrandMatch(s, brandName)) return false;
  return true;
};

export const getBrandImage = (brand, targetCategory) => {
  if (!brand) return '';
  if (targetCategory && brand.categoryImages) {
    const canonical = getCanonicalCategory(targetCategory);
    if (brand.categoryImages[canonical]) {
      return brand.categoryImages[canonical];
    }
    const matchKey = Object.keys(brand.categoryImages).find(
      cat => getCanonicalCategory(cat) === canonical
    );
    if (matchKey) {
      return brand.categoryImages[matchKey];
    }
  }
  return brand.image || '';
};

export const getBrandTag = (brand, targetCategory) => {
  if (!brand) return '';
  if (targetCategory && brand.categoryTags) {
    const canonical = getCanonicalCategory(targetCategory);
    const tags = brand.categoryTags[canonical];
    if (tags && tags.length > 0) return tags[0];
    const matchKey = Object.keys(brand.categoryTags).find(
      cat => getCanonicalCategory(cat) === canonical
    );
    if (matchKey && brand.categoryTags[matchKey]?.length > 0) {
      return brand.categoryTags[matchKey][0];
    }
  }
  return brand.tags?.[0] || '';
};

