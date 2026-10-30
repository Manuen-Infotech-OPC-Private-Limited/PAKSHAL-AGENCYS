import React from 'react';
import marinePlywoodImg from '../../assets/plywood/homepage-marineplywood.png';
import veneersImg from '../../assets/plywood/veneer2.png';
import laminatesImg from '../../assets/laminates/laminate-marble-slabs.jpg';
import hardwareFittingsImg from '../../assets/hardware/hardwarefittings.png';
import doorsImg from '../../assets/doors/fancydoors.png';
import kitchenAccessoriesImg from '../../assets/kitchen/kitchenaccessories.png';

import sgCatalogPdf from '../../assets/Broucher/SG CATALOG.pdf';
import hardwarePdf from '../../assets/Broucher/hardwareaccessories.pdf';

import {
  BRAND_CONFIG,
  CATEGORY_DEFINITIONS,
  SPREADS,
  getCategoriesForBrand,
  getCanonicalCategory,
  isPlywoodOrLaminateBrand,
  isBrandMatch,
  isBrandCategoryMatch,
  getBrandImage,
  getBrandTag
} from './index';

// 6 Primary Architectural Product Categories for Pakshal Agencys Products Page
export const PRODUCT_PAGE_CATEGORIES = [
  {
    title: "PLYWOOD",
    subtitle: "Strong. Durable. Reliable.",
    highlight: "IS 710 Boiling Water Proof",
    image: marinePlywoodImg,
    categoryKey: "Plywood"
  },
  {
    title: "VENEERS",
    subtitle: "Natural Beauty. Perfect Finish",
    highlight: "Exotic Natural & Teak Grain",
    image: veneersImg,
    categoryKey: "Veneers"
  },
  {
    title: "LAMINATES",
    subtitle: "Style That Stands Out",
    highlight: "1.0mm Matt, Gloss & Texture",
    image: laminatesImg,
    categoryKey: "Laminates"
  },
  {
    title: "HARDWARE FITTINGS",
    subtitle: "Precision in Every Detail",
    highlight: "Hydraulic Hinges & Channels",
    image: hardwareFittingsImg,
    categoryKey: "Hardware & Fittings"
  },
  {
    title: "KITCHEN ACCESSORIES",
    subtitle: "Modern Luxury & Storage",
    highlight: "SS 304 Baskets & Tandem Systems",
    image: kitchenAccessoriesImg,
    categoryKey: "Kitchen Accessories"
  },
  {
    title: "DOORS & ACCESSORIES",
    subtitle: "Complete Your Interior",
    highlight: "Solid Core & Designer Doors",
    image: doorsImg,
    categoryKey: "Fancy Doors"
  }
];

// Product page editorial metadata & descriptions
export const PRODUCTS_PAGE_METADATA = {
  metaTitle: "Plywood, Cabinet Fittings & Kitchen Accessories | Pakshal",
  metaDescription: "Explore our extensive catalog of Hettich, Ebco, Dorset, and Hafele modular kitchen accessories, drawer channels, tandem boxes, and premium doors.",
  editorialCategoryTag: "ARCHITECTURAL CATALOGUE",
  editorialCategoryTitle: "Select a Category to Explore",
  editorialCategoryDesc: "Explore our premium architectural categories. Select any category below to view authorized brands and technical specifications."
};

// Re-export all master datasets and helpers for ProductsPage
export {
  sgCatalogPdf,
  hardwarePdf,
  BRAND_CONFIG,
  CATEGORY_DEFINITIONS,
  SPREADS,
  getCategoriesForBrand,
  getCanonicalCategory,
  isPlywoodOrLaminateBrand,
  isBrandMatch,
  isBrandCategoryMatch,
  getBrandImage,
  getBrandTag
};

