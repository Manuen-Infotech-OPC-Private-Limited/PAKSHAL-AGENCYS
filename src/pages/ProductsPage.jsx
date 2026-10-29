import React, { useState, useEffect, useRef } from 'react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import marinePlywoodImg from '../assets/plywood/homepage-marineplywood.png';
import veneersImg from '../assets/plywood/veneer2.png';
import laminatesImg from '../assets/laminates/laminate-marble-slabs.jpg';
import hardwareFittingsImg from '../assets/hardware/hardwarefittings.png';
import doorsImg from '../assets/doors/fancydoors.png';

const PRODUCT_PAGE_CATEGORIES = [
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
    title: "DOORS & ACCESSORIES",
    subtitle: "Complete Your Interior",
    highlight: "Solid Core & Designer Doors",
    image: doorsImg,
    categoryKey: "Fancy Doors"
  }
];
import KitchenAccessories from '../components/KitchenAccessories';
import FancyDoors from '../components/FancyDoors';
import {
  Trees,
  FlaskConical,
  Lock,
  Layers,
  Droplets,
  Ruler,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  Settings,
  RefreshCw,
  Bug,
  Leaf,
  Shield,
  Ban,
  Dumbbell,
  FileText,
  Download,
  ChevronDown,
  BookOpen,
  Wrench
} from 'lucide-react';
import sgCatalogPdf from '../assets/Broucher/SG CATALOG.pdf';
import hardwarePdf from '../assets/Broucher/hardwareaccessories.pdf';
import {
  SPREADS,
  BRAND_CONFIG,
  CATEGORY_DEFINITIONS,
  getCategoriesForBrand,
  getCanonicalCategory,
  isPlywoodOrLaminateBrand,
  isBrandMatch,
  isBrandCategoryMatch,
  getBrandImage,
  getBrandTag
} from '../components/Data';

// Re-export data definitions and helpers for backward compatibility
export {
  SPREADS,
  BRAND_CONFIG,
  CATEGORY_DEFINITIONS,
  getCategoriesForBrand,
  getCanonicalCategory,
  isPlywoodOrLaminateBrand,
  isBrandMatch,
  isBrandCategoryMatch,
  getBrandImage,
  getBrandTag
};

export const ProductsPage = ({ onNavigate, search }) => {
  useDocumentMetadata(
    "Plywood, Cabinet Fittings & Kitchen Accessories | Pakshal",
    "Explore our extensive catalog of Hettich, Ebco, Dorset, and Hafele modular kitchen accessories, drawer channels, tandem boxes, and premium doors."
  );
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1280,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const renderHeroTagIcon = (iconName) => {
    switch (iconName) {
      case 'wood':
        return <Trees className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'droplet':
        return <Droplets className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'gear':
        return <Settings className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'calibrate':
        return <Ruler className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      case 'flex':
        return <RefreshCw className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#C6961A]" strokeWidth={2.5} />;
    }
  };

  const renderOverviewTagIcon = (iconName) => {
    switch (iconName) {
      case 'wood':
        return <Trees className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      case 'droplet':
        return <Droplets className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      case 'bug':
        return <Bug className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      case 'shield':
        return <ShieldCheck className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      case 'leaf':
        return <Leaf className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      case 'calibrate':
        return <Ruler className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      case 'sparkles':
        return <Sparkles className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      case 'gear':
        return <Settings className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      case 'flex':
        return <RefreshCw className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#C9A44C]" strokeWidth={2} />;
    }
  };

  const getOverviewTitle = (spread) => {
    const brand = spread.brandName;
    const cat = spread.category;
    const lowerBrand = brand.toLowerCase();
    const lowerCat = cat.toLowerCase();

    if (
      lowerBrand.includes(lowerCat) ||
      (lowerCat === 'acrylic panels' && lowerBrand.includes('panels')) ||
      (lowerCat === 'architectural hardware' && lowerBrand.includes('hardware')) ||
      lowerBrand.includes('plywood') ||
      lowerBrand.includes('laminate') ||
      lowerBrand.includes('veneer') ||
      lowerBrand.includes('doors') ||
      lowerCat === 'fancy doors' ||
      lowerBrand.includes('hardware&fittings')
    ) {
      return brand;
    }
    return `${brand} ${cat}`;
  };


  const getTechnicalSpecs = (spread) => {
    const cat = spread.category;

    if (cat === 'Plywood') {
      return {
        specs: [
          { label: 'Core Material', value: spread.specs['Core Material'] || spread.specs['Wood Species'] || 'Imported Gurjan', icon: 'tree' },
          { label: 'Adhesive', value: spread.specs['Bonding Adhesive'] || spread.specs['Bonding Glue'] || 'Phenolic Formaldehyde', icon: 'glue' },
          { label: 'Grade', value: spread.brandId.includes('marine') ? 'BWP Marine Grade (IS 710)' : 'BWP (Boiling Water Proof)', icon: 'grade' },
          { label: 'Density', value: 'High Density Hardwood', icon: 'layers' },
          { label: 'Moisture Content', value: 'Below 12%', icon: 'moisture' },
          { label: 'Thickness Tolerance', value: '±0.5mm', icon: 'ruler' },
          { label: 'Warranty', value: spread.specs['Manufacturer Warranty'] || 'Lifetime Guarantee', icon: 'warranty' },
          { label: 'Certification', value: 'ISO 9001:2015 Certified', icon: 'cert' }
        ],
        highlights: [
          { title: 'Water Proof', desc: 'Withstands boiling water conditions', icon: 'water-proof' },
          { title: 'Termite Proof', desc: 'Special treatment for termite resistance', icon: 'termite-proof' },
          { title: 'Borer Resistant', desc: 'Highly resistant to borers & fungi', icon: 'borer-proof' },
          { title: 'High Strength', desc: 'Superior load bearing capacity', icon: 'strength' },
          { title: 'Smooth Finish', desc: 'Calibrated & uniform thickness', icon: 'finish' }
        ]
      };
    } else if (cat === 'Laminates' || cat === 'Acrylic Panels' || cat === 'Veneers') {
      return {
        specs: [
          { label: 'Base Material', value: 'Phenolic Resin Kraft / Acrylic', icon: 'layers' },
          { label: 'Surface Finish', value: spread.specs['Surface Finish'] || 'Matt / Glossy / Textured', icon: 'finish' },
          { label: 'Thickness', value: spread.defaultThickness || '1.0mm', icon: 'ruler' },
          { label: 'Heat Resistance', value: 'Up to 180°C', icon: 'moisture' },
          { label: 'Stain Resistance', value: 'Excellent (Wipe Clean)', icon: 'cert' },
          { label: 'Scratch Rating', value: '4H Hardness (High Scratch Res.)', icon: 'grade' },
          { label: 'Warranty', value: '10 Years Warranty', icon: 'warranty' },
          { label: 'Eco Certification', value: 'GreenGuard Certified / Non-Toxic', icon: 'tree' }
        ],
        highlights: [
          { title: 'Scratch Resistant', desc: 'Protective top wear layer prevents scuffs', icon: 'grade' },
          { title: 'Stain Proof', desc: 'Does not absorb household liquids or stains', icon: 'cert' },
          { title: 'Heat Proof', desc: 'Resists thermal damage up to 180°C', icon: 'water-proof' },
          { title: 'UV Stabilized', desc: 'No color fading under standard indoor sunlight', icon: 'finish' },
          { title: 'Eco Friendly', desc: 'Sourced from sustainable wood pulp matrices', icon: 'tree' }
        ]
      };
    } else if (cat === 'Fancy Doors') {
      return {
        specs: [
          { label: 'Core Material', value: spread.specs['Core Type'] || 'Kiln-Seasoned Pine / Hardwood Core', icon: 'tree' },
          { label: 'Bonding Adhesive', value: spread.specs['Bonding Adhesive'] || 'BWP Synthetic Resin Adhesive', icon: 'glue' },
          { label: 'Standard Thickness', value: spread.defaultThickness || '35mm', icon: 'ruler' },
          { label: 'Surface Finish', value: spread.specs['Face Veneer'] || 'Natural Veneer / Laminated / Polishable', icon: 'finish' },
          { label: 'Moisture Content', value: spread.specs['Moisture Content'] || '8% - 12% Seasoned Timber', icon: 'moisture' },
          { label: 'Warpage Rating', value: 'Zero Warpage Tested', icon: 'grade' },
          { label: 'Warranty', value: spread.specs['Warranty'] || '15 Years Warranty', icon: 'warranty' },
          { label: 'Standard Certification', value: spread.specs['Certification'] || 'IS: 2202 Flush Doors', icon: 'cert' }
        ],
        highlights: [
          { title: 'Solid Seasoned Core', desc: '100% kiln-dried timber blocks eliminate twisting', icon: 'water-proof' },
          { title: 'BWP Resin Bonded', desc: 'Hydraulically pressed with boiling water proof resin', icon: 'cert' },
          { title: 'Sound Insulation', desc: 'High acoustic density dampens corridor noise', icon: 'strength' },
          { title: 'Termite Proof', desc: 'Vacuum pressure treated against borer and termites', icon: 'grade' },
          { title: 'Smooth Edge Finish', desc: 'Solid hardwood lipping for secure lock fitting', icon: 'finish' }
        ]
      };
    } else {
      // Architectural Hardware etc.
      return {
        specs: [
          { label: 'Material Grade', value: spread.specs['Material Grade'] || 'SS 304 Stainless Steel', icon: 'layers' },
          { label: 'Mechanism', value: 'Hydraulic soft-close damping', icon: 'glue' },
          { label: 'Load Capacity', value: spread.specs['Load Capacity'] || '45 kg per pair', icon: 'strength' },
          { label: 'Cycle Testing', value: '100,000+ opening cycles', icon: 'cert' },
          { label: 'Opening Angle', value: spread.specs['Opening Angle'] || '110 Degrees', icon: 'ruler' },
          { label: 'Finish', value: 'Satin Finish / Electroplated Black', icon: 'finish' },
          { label: 'Rust Protection', value: 'Rust-free salt spray tested', icon: 'grade' },
          { label: 'Warranty', value: 'Lifetime Rust-Free Guarantee', icon: 'warranty' }
        ],
        highlights: [
          { title: 'Soft Close Tech', desc: 'Integrated silent closure mechanism', icon: 'water-proof' },
          { title: 'SS 304 Grade', desc: 'Superior rust and corrosion resistance', icon: 'cert' },
          { title: 'Cycle Tested', desc: 'Tested to withstand daily kitchen/room use', icon: 'grade' },
          { title: 'Heavy Load Rating', desc: 'Excellent support for wider drawer panels', icon: 'strength' },
          { title: '3D Adjustability', desc: 'Easy alignment and leveling controls', icon: 'finish' }
        ]
      };
    }
  };

  const renderSpecIcon = (iconName) => {
    switch (iconName) {
      case 'tree':
        return <Trees className="w-5 h-5 text-[#C9A44C]" strokeWidth={2} />;
      case 'glue':
        return <FlaskConical className="w-5 h-5 text-[#C9A44C]" strokeWidth={2} />;
      case 'grade':
        return <Lock className="w-5 h-5 text-[#C9A44C]" strokeWidth={2} />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#C9A44C]" strokeWidth={2} />;
      case 'moisture':
        return <Droplets className="w-5 h-5 text-[#C9A44C]" strokeWidth={2} />;
      case 'ruler':
        return <Ruler className="w-5 h-5 text-[#C9A44C]" strokeWidth={2} />;
      case 'warranty':
        return <ShieldCheck className="w-5 h-5 text-[#C9A44C]" strokeWidth={2} />;
      case 'cert':
        return <BadgeCheck className="w-5 h-5 text-[#C9A44C]" strokeWidth={2} />;
      default:
        return null;
    }
  };

  const renderHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'water-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Shield className="w-7 h-7 text-[#C9A44C] shrink-0" strokeWidth={1.8} />
            <Droplets className="absolute w-4 h-4 text-[#C9A44C] top-[9px] shrink-0" strokeWidth={1.8} />
          </div>
        );
      case 'termite-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Bug className="w-6 h-6 text-[#C9A44C] shrink-0" strokeWidth={1.8} />
            <Ban className="absolute inset-0 w-8 h-8 text-rose-500 opacity-90 shrink-0" strokeWidth={2} />
          </div>
        );
      case 'borer-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Bug className="w-6 h-6 text-[#C9A44C] rotate-90 shrink-0" strokeWidth={1.8} />
            <Ban className="absolute inset-0 w-8 h-8 text-rose-500 opacity-90 shrink-0" strokeWidth={2} />
          </div>
        );
      case 'strength':
        return (
          <div className="w-8 h-8 flex items-center justify-center">
            <Dumbbell className="w-7 h-7 text-[#C9A44C] shrink-0" strokeWidth={1.8} />
          </div>
        );
      case 'finish':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Layers className="w-6 h-6 text-[#C9A44C] shrink-0" strokeWidth={1.8} />
            <Sparkles className="absolute top-0 right-0 w-3.5 h-3.5 text-amber-500 shrink-0" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center">
            <Shield className="w-7 h-7 text-[#C9A44C] shrink-0" strokeWidth={1.8} />
          </div>
        );
    }
  };

  const getIndexFromSearch = (searchStr) => {
    const params = new URLSearchParams(searchStr || '');
    const brand = params.get('brand');
    const category = params.get('category');

    if (brand && category) {
      const canonical = getCanonicalCategory(category);
      const exactIdx = SPREADS.findIndex(s => !s.hideFromIndex && isBrandCategoryMatch(s, brand, canonical));
      if (exactIdx !== -1) return exactIdx;
    }

    if (brand) {
      const bIdx = SPREADS.findIndex(s => !s.hideFromIndex && isBrandMatch(s, brand));
      if (bIdx !== -1) return bIdx;
    }

    if (category) {
      const canonical = getCanonicalCategory(category);
      const catIdx = SPREADS.findIndex(s => !s.hideFromIndex && getCanonicalCategory(s.category) === canonical);
      if (catIdx !== -1) return catIdx;
    }

    return 0;
  };

  const [currentSpreadIdx, setCurrentSpreadIdx] = useState(() => {
    return getIndexFromSearch(search || window.location.search);
  });

  const [selectedThicknesses, setSelectedThicknesses] = useState({});
  const [selectedSize, setSelectedSize] = useState('8 x 4');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [isBrochureDropdownOpen, setIsBrochureDropdownOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({
    'Plywood': true
  });
  const [selectedBrand, setSelectedBrand] = useState(() => {
    const params = new URLSearchParams(search || (typeof window !== 'undefined' ? window.location.search : ''));
    const brandParam = params.get('brand');
    if (brandParam) {
      const matched = BRAND_CONFIG.find(b => b.name.toLowerCase() === brandParam.toLowerCase().trim());
      if (matched) return matched.name;
      return brandParam;
    }
    const catParam = params.get('category');
    if (catParam) {
      const canonical = getCanonicalCategory(catParam);
      const brandForCat = BRAND_CONFIG.find(b =>
        b.categories && b.categories.map(c => getCanonicalCategory(c)).includes(canonical)
      );
      if (brandForCat) return brandForCat.name;
    }
    return null;
  });
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const params = new URLSearchParams(search || (typeof window !== 'undefined' ? window.location.search : ''));
    const catParam = params.get('category');
    if (catParam) return getCanonicalCategory(catParam);
    const brandParam = params.get('brand');
    if (brandParam) {
      const matched = BRAND_CONFIG.find(b => b.name.toLowerCase() === brandParam.toLowerCase().trim());
      if (matched && matched.categories && matched.categories.length > 0) {
        return getCanonicalCategory(matched.categories[0]);
      }
    }
    return 'Plywood';
  });

  const [brandCategoryFilter, setBrandCategoryFilter] = useState('All');
  const [brandSearchTerm, setBrandSearchTerm] = useState('');
  const [categoryCoverIdx, setCategoryCoverIdx] = useState(() => {
    const params = new URLSearchParams(search || (typeof window !== 'undefined' ? window.location.search : ''));
    const catParam = params.get('category');
    if (catParam) {
      const canonical = getCanonicalCategory(catParam);
      const catIdx = PRODUCT_PAGE_CATEGORIES.findIndex(c => getCanonicalCategory(c.categoryKey) === canonical);
      if (catIdx !== -1) return catIdx;
    }
    return 0;
  });

  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(() => {
    const params = new URLSearchParams(search || (typeof window !== 'undefined' ? window.location.search : ''));
    return Boolean(params.get('category'));
  });

  useEffect(() => {
    const params = new URLSearchParams(search || window.location.search);
    const cat = params.get('category');
    const brand = params.get('brand');
    if (brand) {
      const matched = BRAND_CONFIG.find(b => b.name.toLowerCase() === brand.toLowerCase().trim());
      setSelectedBrand(matched ? matched.name : brand);
      if (matched && matched.categories && matched.categories.length > 0) {
        setSelectedCategory(getCanonicalCategory(matched.categories[0]));
      }
      const targetIdx = getIndexFromSearch(search || window.location.search);
      setCurrentSpreadIdx(targetIdx);
    } else if (cat) {
      const canonical = getCanonicalCategory(cat);
      setSelectedCategory(canonical);
      const catIdx = PRODUCT_PAGE_CATEGORIES.findIndex(c => getCanonicalCategory(c.categoryKey) === canonical);
      if (catIdx !== -1) setCategoryCoverIdx(catIdx);
      setSelectedBrand(null);
      setMobileCategoryOpen(true);
      const targetIdx = getIndexFromSearch(search || window.location.search);
      setCurrentSpreadIdx(targetIdx);
    } else {
      setSelectedBrand(null);
      setMobileCategoryOpen(false);
    }
  }, [search]);

  useEffect(() => {
    const handlePop = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      const brand = params.get('brand');
      if (brand) {
        const matched = BRAND_CONFIG.find(b => b.name.toLowerCase() === brand.toLowerCase().trim());
        setSelectedBrand(matched ? matched.name : brand);
      } else if (cat) {
        const canonical = getCanonicalCategory(cat);
        setSelectedCategory(canonical);
        const catIdx = PRODUCT_PAGE_CATEGORIES.findIndex(c => getCanonicalCategory(c.categoryKey) === canonical);
        if (catIdx !== -1) setCategoryCoverIdx(catIdx);
        setSelectedBrand(null);
        setMobileCategoryOpen(true);
      } else {
        setSelectedBrand(null);
        setMobileCategoryOpen(false);
      }
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  useEffect(() => {
    setSelectedSize('8 x 4');
  }, [currentSpreadIdx]);

  // Group spreads by category
  const categories = SPREADS.reduce((acc, spread, idx) => {
    if (spread.hideFromIndex) return acc;
    if (!acc[spread.category]) {
      acc[spread.category] = [];
    }
    acc[spread.category].push({ spread, idx });
    return acc;
  }, {});

  const toggleCategory = (catName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catName]: !prev[catName]
    }));

    const firstMatch = SPREADS.findIndex(s => s.category === catName && !s.hideFromIndex);
    if (firstMatch !== -1) {
      handleThumbnailClick(firstMatch);
    }
  };

  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const activeCategory = selectedCategory || getCanonicalCategory(SPREADS[currentSpreadIdx]?.category) || 'Plywood';
  const matchingSpreads = SPREADS.filter(s => isBrandCategoryMatch(s, selectedBrand, activeCategory));
  const activeCategorySpreads = matchingSpreads.length > 0
    ? matchingSpreads
    : SPREADS.filter(s => getCanonicalCategory(s.category) === activeCategory);

  const activeSpread = SPREADS[currentSpreadIdx] || activeCategorySpreads[0] || SPREADS[0];
  const activeCatIdx = activeCategorySpreads.indexOf(activeSpread);

  // Sync category expansion whenever activeSpread changes
  useEffect(() => {
    if (activeSpread) {
      setExpandedCategories(prev => ({
        ...prev,
        [activeSpread.category]: true
      }));
    }
  }, [currentSpreadIdx, activeSpread]);

  // Update default message whenever active brand or thickness changes
  useEffect(() => {
    const thicknessStr = selectedThicknesses[currentSpreadIdx] || activeSpread.defaultThickness;
    setEnquiryForm(prev => ({
      ...prev,
      message: `I am interested in ${activeSpread.brandName} (${thicknessStr}). Please share pricing and availability.`
    }));
  }, [currentSpreadIdx, selectedThicknesses, activeSpread]);

  const handleThicknessSelect = (thickness) => {
    setSelectedThicknesses(prev => ({
      ...prev,
      [currentSpreadIdx]: thickness
    }));
  };

  const handleGetQuote = () => {
    const isPlywoodOrBoard = activeSpread.category === 'Plywood';
    const thicknessStr = selectedThicknesses[currentSpreadIdx] || activeSpread.defaultThickness;

    let message = '';
    if (isPlywoodOrBoard) {
      message = `I am interested in ${activeSpread.brandName} Plywood - ${thicknessStr}. Please share pricing and availability.`;
    } else {
      message = `I am interested in ${getOverviewTitle(activeSpread)} (${thicknessStr}). Please share pricing and availability.`;
    }

    // Update path to /contact with parameters
    const searchParams = new URLSearchParams();
    searchParams.set('subject', 'quote');
    searchParams.set('message', message);

    window.history.pushState({}, '', `/contact?${searchParams.toString()}`);
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const handlePrev = () => {
    if (currentSpreadIdx > 0) {
      setCurrentSpreadIdx(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentSpreadIdx < SPREADS.length - 1) {
      setCurrentSpreadIdx(prev => prev + 1);
    }
  };

  const handlePrevImage = (e) => {
    if (e) e.stopPropagation();
    if (activeCategorySpreads.length > 0) {
      const currentIdxInCat = activeCatIdx !== -1 ? activeCatIdx : 0;
      const prevCatIdx = (currentIdxInCat - 1 + activeCategorySpreads.length) % activeCategorySpreads.length;
      const targetSpread = activeCategorySpreads[prevCatIdx];
      const targetIdx = SPREADS.indexOf(targetSpread);
      if (targetIdx !== -1) {
        setCurrentSpreadIdx(targetIdx);
      }
    }
  };

  const handleNextImage = (e) => {
    if (e) e.stopPropagation();
    if (activeCategorySpreads.length > 0) {
      const currentIdxInCat = activeCatIdx !== -1 ? activeCatIdx : 0;
      const nextCatIdx = (currentIdxInCat + 1) % activeCategorySpreads.length;
      const targetSpread = activeCategorySpreads[nextCatIdx];
      const targetIdx = SPREADS.indexOf(targetSpread);
      if (targetIdx !== -1) {
        setCurrentSpreadIdx(targetIdx);
      }
    }
  };

  const handleThumbnailClick = (idx) => {
    if (idx >= 0 && idx < SPREADS.length) {
      setCurrentSpreadIdx(idx);
    }
  };

  const navigateToBrandCategory = (brandName, categoryName) => {
    const bLower = (brandName || '').toLowerCase().trim();
    const targetCanonical = categoryName ? getCanonicalCategory(categoryName) : null;

    // 1. If both brand and category are provided, find exact match
    if (bLower && targetCanonical) {
      const exactIdx = SPREADS.findIndex(s => {
        if (s.hideFromIndex) return false;
        const bMatch = s.brandName && (
          s.brandName.toLowerCase().trim() === bLower ||
          (bLower === 'armani' && (s.category === 'Acrylic Panels' || s.brandName.toLowerCase().includes('acrylic'))) ||
          (bLower === 'astdax' && s.brandName.toLowerCase().includes('astdax')) ||
          (bLower === 'steel wood' && s.brandName.toLowerCase().includes('steel'))
        );
        if (!bMatch) return false;

        return getCanonicalCategory(s.category) === targetCanonical;
      });

      if (exactIdx !== -1) {
        handleThumbnailClick(exactIdx);
        return;
      }
    }

    // 2. If brand was specified, find first spread matching brand
    if (bLower) {
      const brandIdx = SPREADS.findIndex(s => {
        if (s.hideFromIndex) return false;
        return s.brandName && (
          s.brandName.toLowerCase().trim() === bLower ||
          (bLower === 'armani' && (s.category === 'Acrylic Panels' || s.brandName.toLowerCase().includes('acrylic'))) ||
          (bLower === 'astdax' && s.brandName.toLowerCase().includes('astdax')) ||
          (bLower === 'steel wood' && s.brandName.toLowerCase().includes('steel'))
        );
      });

      if (brandIdx !== -1) {
        handleThumbnailClick(brandIdx);
        return;
      }
    }

    // 3. If category was specified, find first spread matching this category
    if (targetCanonical) {
      const catIdx = SPREADS.findIndex(s => {
        if (s.hideFromIndex) return false;
        return getCanonicalCategory(s.category) === targetCanonical;
      });

      if (catIdx !== -1) {
        handleThumbnailClick(catIdx);
        return;
      }
    }
  };

  const handleCategoryClick = (cat, idx) => {
    setCategoryCoverIdx(idx);
    setSelectedCategory(cat.categoryKey);
    setBrandSearchTerm('');
    setMobileCategoryOpen(true);

    const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
    const newPath = `${basePrefix}/products?category=${encodeURIComponent(cat.categoryKey.toLowerCase())}`;
    if (window.location.pathname + window.location.search !== newPath) {
      window.history.pushState({ category: cat.categoryKey }, '', newPath);
    }

    // On mobile view (< 1024px), instantly open the category's brands page at top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // On desktop view (>= 1024px), smooth scroll to the brands section below if needed
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const el = document.getElementById('category-brands-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleBackToCategories = () => {
    setMobileCategoryOpen(false);
    setBrandSearchTerm('');
    const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
    window.history.pushState({}, '', `${basePrefix}/products`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBrandSelect = (brandName) => {
    if (!brandName) return;
    const bLower = brandName.toLowerCase().trim();
    setSelectedBrand(brandName);

    const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
    const newPath = `${basePrefix}/products?brand=${encodeURIComponent(brandName)}`;
    if (window.location.pathname + window.location.search !== newPath) {
      window.history.pushState({ brand: brandName }, '', newPath);
    }

    // 1. Check if the currently selected category has spreads for this brand
    if (selectedCategory) {
      const spreadsInCurrentCat = SPREADS.filter(s => isBrandCategoryMatch(s, brandName, selectedCategory));
      if (spreadsInCurrentCat.length > 0) {
        const targetIdx = SPREADS.indexOf(spreadsInCurrentCat[0]);
        if (targetIdx !== -1) {
          setCurrentSpreadIdx(targetIdx);
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
    }

    // 2. Find first category that has spreads for this brand
    const brandSpreads = SPREADS.filter(s => isBrandMatch(s, brandName));
    if (brandSpreads.length > 0) {
      const firstSpread = brandSpreads[0];
      const newCat = getCanonicalCategory(firstSpread.category);
      setSelectedCategory(newCat);
      const targetIdx = SPREADS.indexOf(firstSpread);
      if (targetIdx !== -1) {
        setCurrentSpreadIdx(targetIdx);
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // 3. Fallback to brand config defined categories
    const brandObj = BRAND_CONFIG.find(b => b.name.toLowerCase() === bLower);
    if (brandObj && brandObj.categories && brandObj.categories.length > 0) {
      const newCat = getCanonicalCategory(brandObj.categories[0]);
      setSelectedCategory(newCat);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToAllBrands = () => {
    setSelectedBrand(null);
    const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
    const targetCat = selectedCategory || PRODUCT_PAGE_CATEGORIES[categoryCoverIdx]?.categoryKey;
    if (targetCat) {
      setMobileCategoryOpen(true);
      const newPath = `${basePrefix}/products?category=${encodeURIComponent(targetCat.toLowerCase())}`;
      window.history.pushState({ category: targetCat }, '', newPath);
    } else {
      setMobileCategoryOpen(false);
      window.history.pushState({}, '', `${basePrefix}/products`);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleCategorySelect = (categoryName) => {
    if (!categoryName) return;
    const canonical = getCanonicalCategory(categoryName);
    setSelectedCategory(canonical);

    // Keep selectedBrand locked! Do NOT shift or change selectedBrand when category changes.
    // 1. If currently selectedBrand has spreads in this new category, select that spread
    if (selectedBrand) {
      const spreadsInBrandAndCat = SPREADS.filter(s => isBrandCategoryMatch(s, selectedBrand, canonical));
      if (spreadsInBrandAndCat.length > 0) {
        const targetIdx = SPREADS.indexOf(spreadsInBrandAndCat[0]);
        if (targetIdx !== -1) {
          setCurrentSpreadIdx(targetIdx);
        }
        return;
      }
    }

    // 2. If selectedBrand does not have spreads in this category, show the first spread of this category
    const catSpreads = SPREADS.filter(s => getCanonicalCategory(s.category) === canonical);
    if (catSpreads.length > 0) {
      const targetIdx = SPREADS.indexOf(catSpreads[0]);
      if (targetIdx !== -1) {
        setCurrentSpreadIdx(targetIdx);
      }
    }
  };

  const handleDownload = () => {
    setToastMsg(`Preparing ${activeSpread.brandName} Catalogue PDF...`);
    setTimeout(() => {
      setToastMsg(`Catalog PDF for ${activeSpread.brandName} downloaded successfully!`);
      setTimeout(() => {
        setToastMsg('');
      }, 2500);
    }, 1500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToastMsg('Thank you! Your enquiry has been received.');
    setShowEnquiryModal(false);
    setTimeout(() => {
      setToastMsg('');
    }, 4000);
  };

  const activeThickness = selectedThicknesses[currentSpreadIdx] || activeSpread.defaultThickness;

  const brandScrollRef = useRef(null);
  const brandButtonRefs = useRef({});

  const scrollBrands = (direction) => {
    if (brandScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      brandScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (selectedBrand && brandScrollRef.current) {
      const matchedKey = Object.keys(brandButtonRefs.current).find(
        k => k.toLowerCase() === selectedBrand.toLowerCase()
      );
      const button = matchedKey ? brandButtonRefs.current[matchedKey] : null;
      if (button) {
        const container = brandScrollRef.current;
        const targetScroll = button.offsetLeft - (container.offsetWidth / 2) + (button.offsetWidth / 2);
        container.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: 'smooth'
        });
      }
    }
  }, [selectedBrand]);

  const activeBrandDisplay = (() => {
    const canonical = getCanonicalCategory(activeSpread?.category || selectedCategory);
    if (canonical === 'Fancy Doors') return 'Fancy Doors';
    if (selectedBrand) return selectedBrand;
    if (!activeSpread) return 'Royal Club';
    if (canonical === 'Acrylic Panels') return 'Armani';
    const b = activeSpread.brandName || '';
    if (b.toLowerCase().includes('astdax')) return 'Astdax';
    if (b.toLowerCase().includes('steel wood')) return 'Steel Wood';
    return b || 'Royal Club';
  })();

  return (
    <div className="w-full min-h-screen bg-[#FAF8F5] font-sans pt-0 pb-12 select-none text-slate-800">

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/50 px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-scale-up font-bold text-xs uppercase tracking-wider">
          <svg className="w-4 h-4 text-[#C9A44C] fill-current" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 7.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 11.586l3.293-3.293a1 1 0 011.414 1.414z" />
          </svg>
          {toastMsg}
        </div>
      )}

      {!selectedBrand ? (
        /* CATEGORIES FIRST, THEN ITS BRANDS VIEW */
        <div className="w-full pt-[96px] sm:pt-[104px] pb-16 animate-fade-in">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Category Selection Grid - On mobile, hidden when mobileCategoryOpen */}
            <div className={`transition-all duration-300 ${mobileCategoryOpen ? 'hidden lg:block' : 'block'}`}>
              {/* Editorial Category Header */}
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8 sm:mb-10">
                <span className="text-[10.5px] font-black uppercase tracking-[0.25em] text-[#C9A44C] block leading-none mb-3">
                  ARCHITECTURAL CATALOGUE
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-sans leading-tight mb-3">
                  Select a <span className="text-[#C9A44C] italic font-serif font-extrabold">Category</span> to Explore
                </h1>
                <p className="text-sm sm:text-base text-stone-600 font-medium leading-relaxed max-w-2xl">
                  Explore our premium architectural categories. Select any category below to view authorized brands and technical specifications.
                </p>
              </div>

              {/* 5 Premium Category Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-4 xl:gap-5 mb-10 sm:mb-12">
                {PRODUCT_PAGE_CATEGORIES.map((cat, idx) => {
                  const isActive = (PRODUCT_PAGE_CATEGORIES[categoryCoverIdx]?.categoryKey === cat.categoryKey) || (selectedCategory === cat.categoryKey);

                  return (
                    <div
                      key={cat.categoryKey}
                      onClick={() => handleCategoryClick(cat, idx)}
                      className={`group relative rounded-3xl overflow-hidden cursor-pointer select-none transition-all duration-300 flex flex-col justify-end p-5 sm:p-6 text-left min-h-[360px] sm:min-h-[390px] lg:min-h-[410px] ${
                        isActive
                          ? 'border-2 border-[#C9A44C] ring-4 ring-[#C9A44C]/30 shadow-[0_16px_36px_rgba(201,164,76,0.28)] lg:-translate-y-2'
                          : 'border border-stone-200/90 hover:border-[#C9A44C]/70 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)] hover:-translate-y-2'
                      } bg-stone-900`}
                    >
                      {/* Background Image with Zoom */}
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.72] group-hover:brightness-[0.80]"
                      />

                      {/* Gradient Overlay for Text Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30 z-0 pointer-events-none" />

                      {/* Warm Gold Tint on Active / Hover */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                          isActive ? 'bg-[#C9A44C]/15 opacity-100' : 'bg-transparent group-hover:bg-[#C9A44C]/10'
                        }`}
                      />

                      {/* Bottom Content */}
                      <div className="relative z-10 text-left flex flex-col gap-1.5">
                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight uppercase font-sans tracking-tight group-hover:text-[#F3D78A] transition-colors">
                          {cat.title}
                        </h3>

                        <p className="text-[11.5px] sm:text-xs text-stone-300 font-medium leading-snug line-clamp-2">
                          {cat.subtitle}
                        </p>

                        {cat.highlight && (
                          <div className="mt-1 text-[9.5px] sm:text-[10px] font-bold text-[#E5C378] tracking-wider uppercase flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C] flex-shrink-0" />
                            <span className="truncate">{cat.highlight}</span>
                          </div>
                        )}

                        {/* Interactive Bottom CTA Button */}
                        {/* On Mobile: Always clear 'Explore Brands →' */}
                        <div className="mt-3 w-full py-2.5 px-3.5 rounded-xl bg-white/15 backdrop-blur-md group-hover:bg-[#C9A44C] text-white group-hover:text-stone-950 border border-white/25 group-hover:border-[#C9A44C] font-black text-[10.5px] uppercase tracking-wider flex items-center justify-between transition-all duration-300 shadow-xs lg:hidden">
                          <span>Explore Brands</span>
                          <svg className="w-3.5 h-3.5 text-[#E5C378] group-hover:text-stone-950 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>

                        {/* On Desktop: Show Viewing Brands if active */}
                        <div className="hidden lg:block">
                          {isActive ? (
                            <div className="mt-3 w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#996f1d] via-[#8c6d23] to-[#735515] text-white font-black text-[10.5px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md">
                              <span>Viewing Brands</span>
                              <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                              </svg>
                            </div>
                          ) : (
                            <div className="mt-3 w-full py-2.5 px-3.5 rounded-xl bg-white/15 backdrop-blur-md group-hover:bg-[#C9A44C] text-white group-hover:text-stone-950 border border-white/25 group-hover:border-[#C9A44C] font-black text-[10.5px] uppercase tracking-wider flex items-center justify-between transition-all duration-300 shadow-xs">
                              <span>Explore Category</span>
                              <svg className="w-3.5 h-3.5 text-[#E5C378] group-hover:text-stone-950 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Brands Section (Shows Particular Brands for Selected Category) */}
            <div
              id="category-brands-section"
              className={`pt-2 mb-6 border-t border-stone-200/80 animate-fade-in ${
                !mobileCategoryOpen ? 'hidden lg:block' : 'block'
              }`}
            >
              {/* Mobile-Only Top Navigation Bar: Back Button & Quick Category Switcher */}
              <div className="lg:hidden mb-6">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200/80">
                  <button
                    type="button"
                    onClick={handleBackToCategories}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200/90 text-stone-800 text-xs font-black uppercase tracking-wider shadow-xs hover:bg-[#FAF6EE] hover:text-[#8c6d23] hover:border-[#C9A44C]/50 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4 text-[#C9A44C]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    <span>Back to Categories</span>
                  </button>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8c6d23] px-2.5 py-1 bg-[#FAF6EE] rounded-lg border border-[#C9A44C]/30">
                    {PRODUCT_PAGE_CATEGORIES[categoryCoverIdx]?.title}
                  </span>
                </div>

                {/* Horizontal Quick Category Switcher Pills */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block mb-2 text-left">
                    Switch Category:
                  </span>
                  <div className="-mx-4 px-4 overflow-x-auto no-scrollbar flex items-center gap-2 pb-2">
                    {PRODUCT_PAGE_CATEGORIES.map((cat, idx) => {
                      const isCurrent = categoryCoverIdx === idx;
                      return (
                        <button
                          key={cat.categoryKey}
                          type="button"
                          onClick={() => {
                            setCategoryCoverIdx(idx);
                            setSelectedCategory(cat.categoryKey);
                            setBrandSearchTerm('');
                            const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
                            window.history.pushState({ category: cat.categoryKey }, '', `${basePrefix}/products?category=${encodeURIComponent(cat.categoryKey.toLowerCase())}`);
                            window.scrollTo({ top: 0, behavior: 'instant' });
                          }}
                          className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                            isCurrent
                              ? 'bg-stone-900 text-[#F3D78A] shadow-sm border border-stone-800'
                              : 'bg-white text-stone-700 border border-stone-200/90 hover:border-[#C9A44C]/50'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-[#C9A44C]' : 'bg-stone-300'}`} />
                          <span>{cat.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Header Section for Brands */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pt-2">
                <div className="text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#C9A44C]/35 text-[#8c6d23] text-[10px] font-black uppercase tracking-widest mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                    {PRODUCT_PAGE_CATEGORIES[categoryCoverIdx]?.title}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 font-sans tracking-tight">
                    Authorized Brands for <span className="text-[#C9A44C] italic font-serif font-extrabold">{PRODUCT_PAGE_CATEGORIES[categoryCoverIdx]?.categoryKey}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-500 font-medium mt-1">
                    Click any brand below to view its specific products, catalogues, and finishes.
                  </p>
                </div>
              </div>

              {/* Centered Brand Search Input */}
              <div className="relative w-full max-w-lg mx-auto mb-8">
                <input
                  type="text"
                  value={brandSearchTerm}
                  onChange={(e) => setBrandSearchTerm(e.target.value)}
                  placeholder="Search brands in this category..."
                  className="w-full bg-white border border-stone-200/90 rounded-2xl pl-11 pr-10 py-3.5 text-xs sm:text-sm font-semibold text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#C9A44C] focus:ring-4 focus:ring-[#C9A44C]/15 transition-all shadow-sm"
                />
                <svg className="w-5 h-5 text-[#8c6d23] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                {brandSearchTerm && (
                  <button
                    type="button"
                    onClick={() => setBrandSearchTerm('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs font-bold w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Brands Grid (Filtered by Active Category and/or Search Term) */}
            {(() => {
              const activeCatKey = PRODUCT_PAGE_CATEGORIES[categoryCoverIdx]?.categoryKey || 'Laminates';
              const filteredBrands = BRAND_CONFIG.filter((b) => {
                const bCats = (b.categories || []).map(c => getCanonicalCategory(c));
                const targetCat = getCanonicalCategory(activeCatKey);
                const matchesCat = bCats.includes(targetCat) ||
                  (targetCat === 'Hardware & Fittings' && bCats.includes('Arch. Hardware')) ||
                  (targetCat === 'Fancy Doors' && (b.name === 'Fancy Doors' || bCats.includes('Fancy Doors')));
                if (!matchesCat) return false;

                if (brandSearchTerm.trim()) {
                  const term = brandSearchTerm.toLowerCase().trim();
                  const matchesName = b.name.toLowerCase().includes(term) || (b.displayName || '').toLowerCase().includes(term);
                  const matchesTagline = (b.tagline || '').toLowerCase().includes(term);
                  const matchesHallmark = (b.hallmark || '').toLowerCase().includes(term);
                  if (!matchesName && !matchesTagline && !matchesHallmark) return false;
                }
                return true;
              });

              if (filteredBrands.length === 0) {
                return (
                  <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto">
                    <p className="text-stone-500 font-medium text-sm mb-4">No brands found matching "{brandSearchTerm}".</p>
                    <button
                      type="button"
                      onClick={() => setBrandSearchTerm('')}
                      className="px-5 py-2.5 bg-[#C9A44C] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                    >
                      Clear Search
                    </button>
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                  {filteredBrands.map((b) => {
                    const brandImg = getBrandImage(b, activeCatKey);
                    const brandTag = getBrandTag(b, activeCatKey);

                    return (
                      <div
                        key={b.name}
                        onClick={() => handleBrandSelect(b.name)}
                        className="group relative bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between cursor-pointer overflow-hidden"
                      >
                        {/* Top Image Showcase (NO brand logos! Authentic product imagery) */}
                        <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-stone-100">
                          <img
                            src={brandImg}
                            alt={b.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Gradient scrim for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                          {/* Overlaid Brand Title at Bottom of Image */}
                          <div className="absolute bottom-3.5 inset-x-4">
                            <h3 className="font-serif text-2xl font-black tracking-wide text-white drop-shadow-md leading-tight flex items-baseline gap-1">
                              {b.name}
                              {b.trademark && (
                                <span className="text-[10px] font-sans font-semibold text-[#C9A44C] relative -top-2">®</span>
                              )}
                            </h3>
                            {b.tagline && (
                              <p className="text-[11px] font-bold text-[#FAF6EE]/90 tracking-wide line-clamp-1 mt-0.5 drop-shadow-sm">
                                {b.tagline}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 sm:p-6 bg-white flex flex-col justify-between flex-grow">
                          <div>
                            {/* Hallmark description */}
                            <p className="text-xs text-stone-600 font-medium leading-relaxed mb-4 line-clamp-2">
                              {b.hallmark}
                            </p>

                            {/* Brand Categories Chips */}
                            <div className="mb-5">
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 block mb-2">
                                Product Categories
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {(b.categories || []).map((cat, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-lg bg-[#FAF8F5] text-stone-800 border border-stone-200/90"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Action CTA Button with hover effect */}
                          <div className="w-full py-3.5 px-4 bg-stone-900 group-hover:bg-[#8c6d23] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-between transition-colors duration-200 shadow-xs group-hover:shadow-md cursor-pointer">
                            <span className="tracking-wide">Explore Products</span>
                            <svg
                              className="w-4 h-4 text-[#C9A44C] group-hover:text-white transition-all duration-200 group-hover:translate-x-1.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })} 
                </div>
              );
            })()}
          </div>
        </div>
      ) : (
        /* BRAND PRODUCTS VIEW (Categories and products appear!) */
        <>
          {/* ARCHITECTURAL BRAND SHOWCASE HEADER */}
          {(() => {
            const brandObj = BRAND_CONFIG.find(b => b.name.toLowerCase() === (selectedBrand || '').toLowerCase()) || {
              name: selectedBrand,
              displayName: selectedBrand?.toUpperCase(),
              tagline: activeSpread?.tagline || 'Authorized Architectural Collection',
              hallmark: activeSpread?.desc || 'Double-pressed calibrated core engineered for structural integrity.',
              tags: activeSpread?.features || ['100% Calibrated', 'Boiling Water Proof', 'Lifetime Warranty'],
              categories: [activeSpread?.category || 'Plywood']
            };
            const brandCats = (brandObj && brandObj.categories) ? brandObj.categories.map(c => getCanonicalCategory(c)) : [];
            const availableCats = CATEGORY_DEFINITIONS.filter(cat => brandCats.includes(getCanonicalCategory(cat.key)));

            return (
              <div className="w-full pt-[96px] sm:pt-[104px] pb-8 mb-8 bg-gradient-to-b from-[#F5F0E4]/70 via-[#FAF8F5] to-[#FAF8F5] border-b border-[#E8DEC8]/80 animate-fade-in">
                <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

                  {/* Top Row: Clean Compact Back Navigation */}
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-stone-200/60 mb-5">
                    <button
                      type="button"
                      onClick={handleBackToAllBrands}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-[#8c6d23] transition-colors cursor-pointer group"
                    >
                      <svg className="w-3.5 h-3.5 text-[#C9A44C] group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                      <span>Back to {selectedCategory || 'Authorized'} Brands</span>
                      <span className="text-stone-300 mx-1">/</span>
                      <span className="text-stone-800 font-extrabold">{selectedBrand}</span>
                    </button>

                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider hidden sm:inline">
                      PAKSHAL AGENCYS
                    </span>
                  </div>

                  {/* Brand Identity & Hallmark Summary */}
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="max-w-3xl space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#C9A44C]/40 text-[#8c6d23] text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                          Authorized Brand Range
                        </span>
                        {brandObj.categories?.[0] && (
                          <span className="text-[11px] font-bold text-stone-400 tracking-wider uppercase">
                            • {brandObj.categories.join(' & ')}
                          </span>
                        )}
                      </div>

                      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
                        {brandObj.displayName || selectedBrand}
                      </h1>

                      {brandObj.tagline && (
                        <p className="text-[#8c6d23] font-bold text-sm sm:text-base leading-snug">
                          {brandObj.tagline}
                        </p>
                      )}

                      {brandObj.hallmark && (
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl pt-0.5">
                          {brandObj.hallmark}
                        </p>
                      )}

                      {/* Brand Key Highlights / Hallmark Tags */}
                      {brandObj.tags && brandObj.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          {brandObj.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-white/80 border border-stone-200/90 text-stone-700 text-[11px] font-bold flex items-center gap-1.5 shadow-2xs"
                            >
                              <svg className="w-3.5 h-3.5 text-[#C9A44C]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Segmented Category Switcher (if brand has multiple lines) */}
                    {availableCats.length > 1 && (
                      <div className="shrink-0 flex flex-col items-start lg:items-end gap-1.5 pt-2 lg:pt-0">
                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                          Select Brand Line:
                        </span>
                        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl border border-stone-200/90">
                          {availableCats.map((cat) => {
                            const canonicalKey = getCanonicalCategory(cat.key);
                            const isCatActive = Boolean(selectedCategory && canonicalKey === getCanonicalCategory(selectedCategory));

                            return (
                              <button
                                key={cat.key}
                                type="button"
                                onClick={() => handleCategorySelect(cat.key)}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${isCatActive
                                  ? 'bg-white text-[#8c6d23] shadow-xs border border-stone-200/60'
                                  : 'text-stone-500 hover:text-stone-800'
                                  }`}
                              >
                                {typeof cat.icon === 'function' ? cat.icon(isCatActive) : cat.icon}
                                <span>{cat.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Product Spotlight Showcase Section - 2-Column Architectural Layout */}
          <div
            id="catalogue-book-section"
            className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative mb-14"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left: Product Image with Controlled Size & Frosted Glass Navigation */}
              <div className="lg:col-span-5 flex items-center justify-center lg:justify-start">
                <div className="relative w-full max-w-md xl:max-w-lg overflow-hidden rounded-2xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-white">
                  <img
                    src={activeSpread.image}
                    alt={activeSpread.brandName}
                    className={`w-full h-auto max-h-[290px] sm:max-h-[330px] md:max-h-[350px] ${activeSpread.category === 'Kitchen Accessories' || activeSpread.category === 'Arch. Hardware' || activeSpread.category === 'Hardware & Fittings' || activeSpread.imageFit === 'contain'
                      ? 'object-contain bg-white p-4 sm:p-5'
                      : 'object-cover'
                      }`}
                  />

                  {/* Prev Button Overlay (<) - Transparent Frosted Glass */}
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white shadow-md backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors cursor-pointer"
                    title="Previous Image"
                    aria-label="Previous Image"
                  >
                    <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>

                  {/* Next Button Overlay (>) - Transparent Frosted Glass */}
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white shadow-md backdrop-blur-md border border-white/30 flex items-center justify-center transition-colors cursor-pointer"
                    title="Next Image"
                    aria-label="Next Image"
                  >
                    <svg className="w-5 h-5 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>

                  {/* Carousel Pagination Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                    {activeCategorySpreads.slice(0, Math.min(activeCategorySpreads.length, 12)).map((dotSpread, dotIdx) => {
                      const isDotActive = activeCatIdx === dotIdx;
                      return (
                        <button
                          key={dotSpread.id || dotIdx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const targetIdx = SPREADS.indexOf(dotSpread);
                            if (targetIdx !== -1) {
                              setCurrentSpreadIdx(targetIdx);
                            }
                          }}
                          className={`rounded-full cursor-pointer transition-colors ${isDotActive
                            ? 'w-2.5 h-2.5 bg-white shadow-xs'
                            : 'w-2 h-2 bg-white/60 hover:bg-white/90'
                            }`}
                          aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right: Product Specifications & Instant Inquiry Actions */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-3.5 text-left">

                {/* Category & Badge */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#C9A44C]/35 text-[#8c6d23] text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                    {activeSpread.category || 'Plywood'}
                  </span>
                  <span className="text-[11px] font-bold text-stone-400 tracking-wider uppercase">
                    {activeSpread.badge || 'Official Specification'}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {activeSpread.title ? activeSpread.title.replace('\n', ' ') : (activeSpread.heroTitle || activeBrandDisplay)}
                </h2>

                {activeSpread.tagline && (
                  <p className="text-[#8c6d23] font-bold text-sm sm:text-base">
                    {activeSpread.tagline}
                  </p>
                )}

                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeSpread.desc}
                </p>

                {/* Material & Color Tags */}
                {(activeSpread.material || activeSpread.colors) && (
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-800">
                    {activeSpread.material && (
                      <div className="flex gap-1.5 items-center bg-[#FAF6EE] px-3 py-1 rounded-lg border border-[#C9A44C]/30">
                        <span className="text-[#8c6d23] font-black uppercase text-[10px] tracking-wider">Material:</span>
                        <span className="font-bold text-slate-900">{activeSpread.material}</span>
                      </div>
                    )}
                    {activeSpread.colors && (
                      <div className="flex gap-1.5 items-center bg-[#FAF6EE] px-3 py-1 rounded-lg border border-[#C9A44C]/30">
                        <span className="text-[#8c6d23] font-black uppercase text-[10px] tracking-wider">Color:</span>
                        <span className="font-bold text-slate-900">{activeSpread.colors}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons: Get Quote, Brochure, WhatsApp */}
                <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-2">
                  <button
                    onClick={handleGetQuote}
                    className="px-6 py-3.5 bg-[#C9A44C] hover:bg-[#b38e3b] text-black text-xs font-black tracking-widest uppercase rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>

                  {/* Download Brochure Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsBrochureDropdownOpen(!isBrochureDropdownOpen)}
                      className="px-5 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-black tracking-wider uppercase rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-stone-700" />
                      <span>Brochure</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-stone-600 transition-transform duration-200 ${isBrochureDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isBrochureDropdownOpen && (
                      <div className="absolute left-0 sm:right-0 bottom-full mb-2 w-64 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden animate-fade-in text-left z-50 divide-y divide-slate-100">
                        <a
                          href={sgCatalogPdf}
                          download="SG CATALOG.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsBrochureDropdownOpen(false)}
                          className="block px-4 py-3 text-xs font-extrabold text-slate-800 hover:bg-[#FAF6EE] hover:text-[#8c6d23] transition-colors cursor-pointer"
                        >
                          SG Product Catalogue
                        </a>
                        <a
                          href={hardwarePdf}
                          download="hardwareaccessories.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsBrochureDropdownOpen(false)}
                          className="block px-4 py-3 text-xs font-extrabold text-slate-800 hover:bg-[#FAF6EE] hover:text-[#8c6d23] transition-colors cursor-pointer"
                        >
                          Hardware Accessories Catalogue
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Direct WhatsApp Concierge Button */}
                  <a
                    href={`https://wa.me/919247449522?text=${encodeURIComponent(`Hello Pakshal Agencys, I am interested in ${selectedBrand} - ${activeSpread.category || 'Products'}. Please share pricing and catalogue.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black tracking-wider uppercase rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    title="Chat on WhatsApp"
                  >
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.95-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Explore Complete Brand Lineup Grid (Riyansh Plywood inspired catalog browsing) */}
          {activeCategorySpreads.length > 1 && (
            <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-14 animate-fade-in">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-stone-200/80">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#8c6d23] block mb-1">
                    Complete Range
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    {selectedBrand} Product Collection ({activeCategorySpreads.length})
                  </h3>
                </div>
                <span className="text-xs font-bold text-stone-400 hidden sm:inline">
                  Click any product to view in spotlight
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {activeCategorySpreads.map((spreadItem, sIdx) => {
                  const isCurrent = activeCatIdx === sIdx;
                  return (
                    <div
                      key={spreadItem.id || sIdx}
                      onClick={() => {
                        const targetIdx = SPREADS.indexOf(spreadItem);
                        if (targetIdx !== -1) {
                          setCurrentSpreadIdx(targetIdx);
                          const el = document.getElementById('catalogue-book-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className={`group relative bg-white rounded-2xl border transition-all duration-200 cursor-pointer p-4 flex flex-col justify-between overflow-hidden ${isCurrent
                          ? 'border-[#C9A44C] ring-2 ring-[#C9A44C]/25 shadow-md'
                          : 'border-stone-200/80 hover:border-[#C9A44C]/60 shadow-xs'
                        }`}
                    >
                      <div className="relative h-32 sm:h-36 w-full rounded-xl overflow-hidden bg-stone-50 mb-3 border border-stone-100 flex items-center justify-center">
                        <img
                          src={spreadItem.image}
                          alt={spreadItem.brandName}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                        {isCurrent && (
                          <div className="absolute top-2 right-2 bg-[#8c6d23] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-md shadow-xs">
                            Active
                          </div>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#8c6d23]">
                            {spreadItem.category}
                          </span>
                        </div>
                        <h4 className="text-sm font-extrabold text-stone-900 group-hover:text-[#8c6d23] transition-colors line-clamp-1">
                          {spreadItem.title ? spreadItem.title.replace('\n', ' ') : spreadItem.brandName}
                        </h4>
                        <p className="text-[11px] text-stone-500 line-clamp-2 mt-1 leading-snug">
                          {spreadItem.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-bold text-stone-700">
                        <span>{spreadItem.thicknesses?.[0] ? `${spreadItem.thicknesses.length} Thicknesses` : 'Standard Specs'}</span>
                        <span className="text-[#8c6d23] group-hover:translate-x-0.5 transition-transform">View Details →</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Product Overview Section - Interactive Selection Component */}
          {(() => {
            const isPlywoodOrBoard = activeSpread.category === 'Plywood';

            if (!isPlywoodOrBoard) {
              // Render the standard Product Overview card for Laminates, Hardware, Veneers, etc.
              return (
                <div className="max-w-[1280px] mx-auto px-4 mt-4 md:mt-16 mb-12 md:mb-16 animate-fade-in">
                  <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-sm p-8 md:p-12">
                    <div className="text-center mb-12">
                      <span className="text-[11px] font-black tracking-[0.25em] text-[#8c6d23] uppercase block mb-2">
                        Product Overview
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                        {getOverviewTitle(activeSpread)}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 justify-items-stretch text-center mb-12">
                      {(activeSpread.overviewFeatures || []).map((feature, i) => (
                        <div key={i} className="flex flex-col items-center gap-4">
                          <div className="w-[60px] h-[60px] rounded-full bg-[#FAF6EE] border border-[#C9A44C]/25 flex items-center justify-center shrink-0">
                            {renderOverviewTagIcon(feature.icon)}
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <h4 className="text-[15px] font-black text-slate-900 leading-tight tracking-tight">
                              {feature.title}
                            </h4>
                            <p className="text-[12.5px] font-semibold text-slate-500 mt-1.5 leading-snug max-w-[185px]">
                              {feature.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full border-t border-slate-100 pt-10">
                      <button
                        onClick={handleGetQuote}
                        className="w-full sm:w-auto px-10 py-4 bg-[#C9A44C] hover:bg-[#b38e3b] text-black text-[11px] font-black tracking-widest uppercase rounded-lg shadow-sm transition-colors flex items-center justify-center gap-3 cursor-pointer"
                      >
                        Get Quote
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                      <a
                        href={`https://wa.me/919247449522?text=${encodeURIComponent(`I am interested in ${getOverviewTitle(activeSpread)} (${activeThickness}). Please share pricing and availability.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-10 py-4 bg-white border border-[#C9A44C] hover:bg-[#FAF6EE] text-[#8c6d23] text-[11px] font-black tracking-widest uppercase rounded-lg transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-sm"
                      >
                        Whatsapp Us
                        <svg className="w-4 h-4 fill-current text-[#8c6d23]" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.95-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            // Otherwise, render the Plywood Interactive Visualizer Section inside the card wrapper
            const thicknessOptions = [
              { value: '25mm', thickness: '25MM', tag: 'Extra Strong', desc: 'Heavy Duty', icon: 'weight', scale: 0.72, mt: '0px', layerHeight: 'h-6', miniHeight: 'h-3' },
              { value: '18mm', thickness: '18MM', tag: 'Most Preferred', desc: 'All Purpose', icon: 'star', scale: 0.80, mt: '-18px', layerHeight: 'h-[18px]', miniHeight: 'h-2.5' },
              { value: '12mm', thickness: '12MM', tag: 'Ideal for Furniture', desc: 'Furniture Use', icon: 'chair', scale: 0.88, mt: '-24px', layerHeight: 'h-[12px]', miniHeight: 'h-2' },
              { value: '9mm', thickness: '9MM', tag: 'Best for Interiors', desc: 'Interiors', icon: 'door', scale: 0.94, mt: '-28px', layerHeight: 'h-[9px]', miniHeight: 'h-1.5' },
              { value: '6mm', thickness: '6MM', tag: 'Lightweight', desc: 'Decor Use', icon: 'leaf', scale: 1.00, mt: '-30px', layerHeight: 'h-[6px]', miniHeight: 'h-1' }
            ];

            const rawThicknesses = [...(activeSpread.thicknesses || ['6mm', '9mm', '12mm', '18mm', '25mm'])].reverse();
            const stackThicknesses = [];
            for (let i = 0; i < 5; i++) {
              stackThicknesses.push(rawThicknesses[i] || 'N/A');
            }

            const selectedSpecSize = selectedSize || '8 x 4';
            const selectedSpecGrade = activeSpread.specs['Grade'] || activeSpread.specs['Wood Species'] || activeSpread.features[0] || 'BWP';
            const selectedSpecWarranty = activeSpread.specs['Manufacturer Warranty'] || 'Lifetime';
            const selectedSpecFeature = activeSpread.features[1] || 'Boiling Water Proof';

            const renderSelectorIcon = (iconName, isSelected) => {
              const strokeColor = isSelected ? '#ffffff' : '#8c6d23';
              const className = `w-5 h-5 transition-colors duration-200`;
              switch (iconName) {
                case 'weight':
                  return (
                    <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  );
                case 'star':
                  return (
                    <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  );
                case 'chair':
                  return (
                    <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  );
                case 'door':
                  return (
                    <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M5 3v18h14V3H5zm4 9h2v2H9v-2z" />
                    </svg>
                  );
                case 'leaf':
                  return (
                    <svg className={className} fill="none" stroke={strokeColor} strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  );
                default:
                  return null;
              }
            };

            return (
              <div className="max-w-[1280px] mx-auto px-4 mt-4 md:mt-16 mb-12 md:mb-16 animate-fade-in text-center">
                <div className="bg-white rounded-[32px] border border-slate-200/50 shadow-xl p-4 sm:p-10 md:p-12">

                  {/* HEADER SECTION */}
                  <header className="text-center mb-8 md:mb-10">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <span className="h-[1px] w-8 md:w-16 bg-[#C9A44C]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]"></span>
                      <span className="text-xs md:text-sm font-extrabold tracking-wider text-[#8c6d23] uppercase">AVAILABLE THICKNESS OPTIONS</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]"></span>
                      <span className="h-[1px] w-8 md:w-16 bg-[#C9A44C]"></span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#0c2340] tracking-tight mb-2">
                      Choose the Right Fit for Your Project
                    </h1>
                    <p className="text-sm md:text-base text-gray-500 font-medium">
                      Premium BWP Grade Plywood in multiple thickness options
                    </p>
                  </header>

                  {(() => {
                    const factors = { length: 1.0, width: 1.0 };

                    return (
                      <>
                        {/* MOBILE VIEW (< 1024px) - Arranged matching reference image structure */}
                        <div className="block lg:hidden w-full my-2 animate-fade-in">
                          {/* TIER 2: 3D Stack Stage with Left Leader Pins */}
                          <div className="relative w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center py-3 sm:py-5 px-1 select-none" style={{ perspective: '1000px' }}>
                            {thicknessOptions.map((opt, i) => {
                              const displayVal = stackThicknesses[i];
                              if (displayVal === 'N/A') return null;

                              const isSelected = displayVal.toLowerCase() === activeThickness.toLowerCase();
                              const isThinnest = i === 4;
                              const mtVal = parseInt(opt.mt) || 0;
                              const computedMt = `${(mtVal * factors.width) * 0.85}px`;

                              return (
                                <div
                                  key={opt.value}
                                  onClick={() => handleThicknessSelect(displayVal)}
                                  className={`sheet-container ply-shadow rounded bg-stone-100 transition-all duration-300 relative cursor-pointer ${isSelected ? 'sheet-active' : ''
                                    }`}
                                  style={{
                                    width: `${opt.scale * factors.length * 96}%`,
                                    transform: 'rotateX(22deg) rotateY(-8deg) rotateZ(1deg)',
                                    marginTop: computedMt,
                                    zIndex: 10 + i * 10
                                  }}
                                >
                                  {/* Plywood Surface */}
                                  <div
                                    className={`wood-top-grain rounded-t relative ${isThinnest ? 'pr-10 flex items-center justify-end' : ''}`}
                                    style={{
                                      height: `${(isThinnest ? 54 : 46) * factors.width}px`
                                    }}
                                  >
                                    {/* Left Leader Badge (Matching Reference Image) */}
                                    <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 z-20">
                                      <span
                                        className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all duration-200 shadow-xs ${isSelected
                                          ? 'bg-[#8c6d23] text-white ring-2 ring-[#8c6d23]/40 scale-105'
                                          : 'bg-white/95 text-slate-800 border border-slate-200/90'
                                          }`}
                                      >
                                        {displayVal}
                                      </span>
                                      <span className="w-2.5 h-[1.5px] bg-[#8c6d23]/60 hidden sm:inline-block" />
                                      <span
                                        className={`w-2 h-2 rounded-full border-2 transition-all shrink-0 ${isSelected
                                          ? 'bg-[#C9A44C] border-white ring-2 ring-[#C9A44C]/50 scale-125'
                                          : 'bg-white border-[#8c6d23]'
                                          }`}
                                      />
                                    </div>
                                  </div>

                                  {/* Layer Depth Edge */}
                                  <div className={`plywood-layers rounded-b ${opt.layerHeight}`} />
                                </div>
                              );
                            })}
                          </div>

                          {/* TIER 3: Horizontal 5-Card Row (Matching Reference Image) */}
                          <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 w-full max-w-md mx-auto my-4 sm:my-5">
                            {thicknessOptions.map((opt, i) => {
                              const displayVal = stackThicknesses[i];
                              if (displayVal === 'N/A') return null;

                              const isSelected = displayVal.toLowerCase() === activeThickness.toLowerCase();

                              return (
                                <button
                                  key={opt.value}
                                  onClick={() => handleThicknessSelect(displayVal)}
                                  className={`flex flex-col items-center p-1 sm:p-2 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer text-center outline-none ${isSelected
                                    ? 'bg-white border-[#8c6d23] ring-2 ring-[#8c6d23]/40 shadow-md scale-[1.03]'
                                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                                    }`}
                                >
                                  {/* Mini Wood Slice Preview */}
                                  <div className="w-full h-8 sm:h-10 rounded-lg wood-top-grain relative overflow-hidden border border-[#533b25]/20 flex flex-col justify-end">
                                    <div className={`plywood-layers w-full ${opt.miniHeight || 'h-2'}`} />
                                    {isSelected && (
                                      <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#8c6d23] text-white flex items-center justify-center shadow-xs">
                                        <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                      </div>
                                    )}
                                  </div>

                                  {/* Thickness Text */}
                                  <span className={`text-[11px] sm:text-xs font-black mt-1.5 tracking-tight ${isSelected ? 'text-[#8c6d23]' : 'text-slate-800'
                                    }`}>
                                    {displayVal.toUpperCase()}
                                  </span>

                                  {/* Use-Case Description */}
                                  <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 truncate w-full leading-tight mt-0.5">
                                    {opt.value === '18mm' ? 'All Purpose' : opt.desc}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {/* TIER 4: Bottom Summary Card & Quote CTA (Matching Reference Image) */}
                          <div className="w-full max-w-md mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-md p-4 sm:p-5 text-left overflow-hidden">
                            {/* Top: Thickness info */}
                            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl sm:text-3xl font-black text-[#0c2340] leading-none tracking-tight">
                                  {activeThickness.toUpperCase()}
                                </span>
                                <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                                  THICKNESS
                                </span>
                              </div>
                            </div>

                            {/* Middle: 3 Specs evenly balanced across 3 columns with zero horizontal overflow */}
                            <div className="grid grid-cols-3 gap-2 py-3 border-b border-slate-100 text-center items-center">
                              {/* Grade */}
                              <div className="flex flex-col items-center justify-center min-w-0">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#fdf8ee] flex items-center justify-center text-[#8c6d23] mb-1">
                                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.2} />
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight truncate w-full px-0.5">
                                  {selectedSpecGrade}
                                </span>
                                <span className="text-[8px] font-bold text-slate-400 uppercase mt-0.5">Grade</span>
                              </div>

                              {/* Warranty */}
                              <div className="flex flex-col items-center justify-center min-w-0 border-x border-slate-100 px-1">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#fdf8ee] flex items-center justify-center text-[#8c6d23] mb-1">
                                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.2} />
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight truncate w-full px-0.5">
                                  {selectedSpecWarranty.replace(' Guarantee*', '').replace(' Guarantee', '').replace(' Warranty', '')}
                                </span>
                                <span className="text-[8px] font-bold text-slate-400 uppercase mt-0.5">Warranty</span>
                              </div>

                              {/* Feature */}
                              <div className="flex flex-col items-center justify-center min-w-0">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#fdf8ee] flex items-center justify-center text-[#8c6d23] mb-1">
                                  <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.2} />
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight truncate w-full px-0.5">
                                  {selectedSpecFeature}
                                </span>
                                <span className="text-[8px] font-bold text-slate-400 uppercase mt-0.5">Feature</span>
                              </div>
                            </div>

                            {/* Full Width GET QUOTE Button */}
                            <button
                              onClick={handleGetQuote}
                              className="w-full mt-3.5 bg-gradient-to-r from-[#996f1d] via-[#8c6d23] to-[#735515] hover:from-[#8c6d23] hover:to-[#614710] text-white font-black py-3 sm:py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer text-xs sm:text-sm tracking-widest uppercase"
                            >
                              <span>GET QUOTE</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* DESKTOP VIEW (>= 1024px) - Preserved 3-Column Layout */}
                        <div className="hidden lg:grid grid-cols-12 gap-8 items-center justify-center my-4 animate-fade-in">
                          {/* LEFT SELECTOR PANEL */}
                          <div className="col-span-3 flex flex-col gap-4 z-20">
                            {thicknessOptions.map((opt, i) => {
                              const displayVal = stackThicknesses[i];
                              if (displayVal === 'N/A') return null;

                              const isSelected = displayVal.toLowerCase() === activeThickness.toLowerCase();

                              return (
                                <button
                                  key={opt.value}
                                  onClick={() => handleThicknessSelect(displayVal)}
                                  className={`flex items-center space-x-4 p-3 rounded-2xl border-2 transition-all duration-300 shadow-md cursor-pointer w-full text-left outline-none ${isSelected
                                    ? 'border-[#8c6d23] bg-[#fdf8ee]/60 shadow-md'
                                    : 'border-slate-100 bg-white hover:bg-slate-50/50 shadow-sm'
                                    }`}
                                >
                                  <div className={`icon-circle flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-[#8c6d23] text-white shadow-md' : 'bg-gray-100 text-[#8c6d23]'
                                    }`}>
                                    {renderSelectorIcon(opt.icon, isSelected)}
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-[#0c2340]">
                                      {displayVal.toUpperCase()} <span className="text-xs font-semibold text-gray-400 ml-1">THICKNESS</span>
                                    </div>
                                    <div className="text-xs text-gray-500 leading-tight mt-0.5">
                                      {opt.value === '18mm' ? (
                                        <>
                                          <span className="font-semibold text-[#8c6d23]">Most Preferred</span> · All Purpose Use
                                        </>
                                      ) : opt.desc}
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* CENTER 3D STACK INTERACTIVE VISUALIZATION */}
                          <div className="col-span-6 flex flex-col items-center justify-center relative min-h-[420px] py-4 select-none">
                            <div className="relative w-full max-w-lg mx-auto flex flex-col items-center space-y-2 py-8 px-4" style={{ perspective: '1200px' }}>
                              {thicknessOptions.map((opt, i) => {
                                const displayVal = stackThicknesses[i];
                                if (displayVal === 'N/A') return null;

                                const isSelected = displayVal.toLowerCase() === activeThickness.toLowerCase();
                                const isThinnest = i === 4;
                                const mtVal = parseInt(opt.mt) || 0;
                                const computedMt = `${mtVal * factors.width}px`;

                                return (
                                  <div
                                    key={opt.value}
                                    onClick={() => handleThicknessSelect(displayVal)}
                                    className={`sheet-container ply-shadow rounded bg-stone-100 transition-all duration-300 relative ${isSelected ? 'sheet-active' : ''
                                      }`}
                                    style={{
                                      width: `${opt.scale * factors.length * 100}%`,
                                      transform: 'rotateX(24deg) rotateY(-8deg) rotateZ(1deg)',
                                      marginTop: computedMt,
                                      zIndex: 10 + i * 10
                                    }}
                                  >
                                    {/* Plywood surface */}
                                    <div
                                      className={`wood-top-grain rounded-t relative ${isThinnest ? 'pr-16 flex items-center justify-end' : ''}`}
                                      style={{
                                        height: `${(isThinnest ? 72 : 64) * factors.width}px`
                                      }}
                                    >
                                      {/* Hotspot with Label */}
                                      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                        {isSelected ? (
                                          <span className="relative flex h-4 w-4 shrink-0">
                                            <span className="absolute inline-flex h-full w-full rounded-full bg-[#C9A44C] opacity-75 animate-ping"></span>
                                            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#8c6d23] border-2 border-white"></span>
                                          </span>
                                        ) : (
                                          <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-[#C9A44C] shrink-0"></span>
                                        )}
                                        <span className={`text-[11px] font-black uppercase tracking-wider select-none ${isSelected ? 'text-[#8c6d23] font-extrabold' : 'text-[#533b25]/85'}`}>
                                          {displayVal}
                                        </span>
                                      </div>
                                    </div>
                                    {/* Layer Depth edges */}
                                    <div className={`plywood-layers rounded-b ${opt.layerHeight}`}></div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* RIGHT DETAIL CARD */}
                          <div className="col-span-3 flex justify-center z-20">
                            <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                              <div className="bg-[#8c6d23] text-white text-center py-3.5 px-4 text-xs font-bold tracking-widest uppercase">
                                Selected Option
                              </div>
                              <div className="p-6 md:p-8 space-y-6">
                                <div className="text-center">
                                  <span className="text-5xl font-black text-[#0c2340] tracking-tight">{activeThickness.toUpperCase()}</span>
                                  <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mt-1">Thickness</p>
                                </div>
                                <div className="h-[1px] bg-slate-100 w-full"></div>

                                <div className="space-y-4">
                                  {/* Size */}
                                  <div className="flex items-center space-x-4 text-left">
                                    <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <Ruler className="w-5 h-5 text-[#8c6d23]" />
                                    </div>
                                    <div className="flex-grow text-left">
                                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Size (ft)</div>
                                      <div className="text-sm font-bold text-slate-800">{selectedSpecSize}</div>
                                    </div>
                                  </div>
                                  {/* Grade */}
                                  <div className="flex items-center space-x-4 text-left">
                                    <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <Layers className="w-5 h-5 text-[#8c6d23]" />
                                    </div>
                                    <div className="flex-grow text-left">
                                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Grade</div>
                                      <div className="text-sm font-bold text-slate-800">{selectedSpecGrade}</div>
                                    </div>
                                  </div>
                                  {/* Warranty */}
                                  <div className="flex items-center space-x-4 text-left">
                                    <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <Shield className="w-5 h-5 text-[#8c6d23]" />
                                    </div>
                                    <div className="flex-grow text-left">
                                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Warranty</div>
                                      <div className="text-sm font-bold text-slate-800">{selectedSpecWarranty}</div>
                                    </div>
                                  </div>
                                  {/* Feature */}
                                  <div className="flex items-center space-x-4 text-left">
                                    <div className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <Droplets className="w-5 h-5 text-[#8c6d23]" />
                                    </div>
                                    <div className="flex-grow text-left">
                                      <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Feature</div>
                                      <div className="text-sm font-bold text-slate-800 truncate max-w-[150px]">{selectedSpecFeature}</div>
                                    </div>
                                  </div>
                                </div>

                                <button
                                  onClick={handleGetQuote}
                                  className="w-full bg-[#8c6d23] hover:bg-[#735515] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:shadow-[#8c6d23]/20 active:scale-[0.98] transition-all duration-300 cursor-pointer"
                                >
                                  <span>GET QUOTE</span>
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}

                  {/* BOTTOM ACCREDITATIONS BAR */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {(activeSpread.overviewFeatures || []).slice(0, 4).map((feature, i) => (
                        <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100/80 flex items-start space-x-4">
                          <div className="w-12 h-12 bg-[#FAF6EE] text-[#8c6d23] border border-[#C9A44C]/25 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                            {renderOverviewTagIcon(feature.icon)}
                          </div>
                          <div className="text-left">
                            <div className="text-sm font-bold text-[#0c2340]">{feature.title}</div>
                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{feature.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FOOTER CERTIFICATION METRIC BADGES */}
                  <footer className="mt-8 pt-6 border-t border-gray-100/80 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-semibold">
                    <div className="flex items-center space-x-1.5">
                      <svg className="w-4 h-4 text-[#8c6d23] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Other sizes available on request</span>
                    </div>
                    <span className="hidden md:inline text-gray-300">|</span>
                    <div className="flex items-center space-x-1.5">
                      <svg className="w-4 h-4 text-[#8c6d23] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>All thickness in mm</span>
                    </div>
                  </footer>

                </div>
              </div>
            );
          })()}

          {/* Kitchen Accessories Full Collection Showcase (All 26 Products) */}
          {(getCanonicalCategory(activeSpread.category) === 'Kitchen Accessories' || getCanonicalCategory(selectedCategory) === 'Kitchen Accessories') && (
            <div id="kitchen-accessories-grid-section" className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 mt-4 mb-16 animate-fade-in">
              <KitchenAccessories
                activeId={activeSpread.id}
                onSelectItem={(item) => {
                  const targetIdx = SPREADS.findIndex(s => s.id === item.id);
                  if (targetIdx !== -1) {
                    setCurrentSpreadIdx(targetIdx);
                    const bookElem = document.getElementById('catalogue-book-section');
                    if (bookElem) {
                      bookElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
              />
            </div>
          )}

          {/* Fancy Doors Full Collection Showcase (All 5 Models) */}
          {(getCanonicalCategory(activeSpread.category) === 'Fancy Doors' || getCanonicalCategory(selectedCategory) === 'Fancy Doors') && (
            <div id="fancy-doors-grid-section" className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 mt-4 mb-16 animate-fade-in">
              <FancyDoors
                activeId={activeSpread.id}
                onSelectItem={(item) => {
                  const targetIdx = SPREADS.findIndex(s => s.id === item.id);
                  if (targetIdx !== -1) {
                    setCurrentSpreadIdx(targetIdx);
                    const bookElem = document.getElementById('catalogue-book-section');
                    if (bookElem) {
                      bookElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
              />
            </div>
          )}

          {/* Technical Specifications Section */}
          <div className="max-w-[1380px] mx-auto px-2 mb-16 animate-fade-in text-center">
            {/* Header Badge */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#006e2f]" />
                <div className="w-16 h-0.5 bg-[#006e2f]/40" />
              </div>
              <span className="px-6 py-2.5 bg-[#006e2f] text-white text-[11px] font-black uppercase tracking-widest rounded-md shadow-sm">
                Technical Specifications
              </span>
              <div className="hidden sm:flex items-center gap-1.5">
                <div className="w-16 h-0.5 bg-[#006e2f]/40" />
                <span className="w-2 h-2 rounded-full bg-[#006e2f]" />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight font-sans">
              Built for Strength. Made to Last.
            </h3>
            <div className="h-1 w-16 bg-[#006e2f] mx-auto mt-4 mb-12 rounded-full" />

            {/* Specifications Grid panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Left card: Specifications list table */}
              <div className="bg-white rounded-[24px] border border-slate-200/50 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
                <div className="space-y-1">
                  {getTechnicalSpecs(activeSpread).specs.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-4 w-[45%]">
                        <div className="w-10 h-10 rounded-full bg-[#f0f9f4] flex items-center justify-center shrink-0">
                          {renderSpecIcon(item.icon)}
                        </div>
                        <span className="text-[15px] font-extrabold text-slate-900 leading-tight">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-slate-300 font-light text-sm">|</span>
                      <div className="w-[50%] text-left pl-4">
                        <span className="text-[15px] font-bold text-slate-600 leading-relaxed">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right card: Highlights list or 3-and-2 cards */}
              {(() => {
                const isPlywoodOrBoard = activeSpread.category === 'Plywood';

                if (isPlywoodOrBoard) {
                  const highlights = getTechnicalSpecs(activeSpread).highlights;
                  const cardStyles = [
                    { bg: 'bg-[#f4f7f5]' }, // Water Proof: Soft greenish-grey
                    { bg: 'bg-[#edf3ed]' }, // Termite Proof: Soft sage-green
                    { bg: 'bg-[#f5efe4]' }, // Borer Resistant: Soft warm beige
                    { bg: 'bg-[#ebf2f2]' }, // High Strength: Soft blueish-grey
                    { bg: 'bg-[#f5eae0]' }  // Smooth Finish: Soft warm wood
                  ];

                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-3.5 w-full self-start content-start">
                      {highlights.map((item, index) => {
                        const style = cardStyles[index] || { bg: 'bg-slate-50' };

                        let gridClass = "col-span-1 sm:col-span-2";
                        if (index === 3) {
                          gridClass = "col-span-1 sm:col-start-2 sm:col-span-2";
                        } else if (index === 4) {
                          gridClass = "col-span-1 sm:col-start-4 sm:col-span-2";
                        }

                        return (
                          <div
                            key={index}
                            className={`${style.bg} ${gridClass} rounded-[20px] border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between pt-6 relative h-fit sm:h-[268px]`}
                          >
                            <div className="flex flex-col items-center justify-center flex-grow">
                              {/* Icon Container */}
                              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-[0_6px_15px_-3px_rgba(0,0,0,0.06)] mx-auto relative mb-3">
                                <div className="scale-90 flex items-center justify-center">
                                  {renderHighlightIcon(item.icon)}
                                </div>
                              </div>

                              {/* Title */}
                              <h4 className="text-[17px] sm:text-[18px] font-black text-slate-900 leading-tight tracking-tight text-center px-2">
                                {item.title}
                              </h4>

                              {/* Green Underline Line */}
                              <div className="w-7 h-[2px] bg-[#006e2f] rounded-full mx-auto my-2.5" />

                              {/* Description */}
                              <p className="text-[12px] sm:text-[13px] font-bold text-slate-500 leading-normal text-center px-4 max-w-[170px] mx-auto">
                                {item.desc}
                              </p>
                            </div>

                            {/* Plywood bottom layered wood strip */}
                            <div
                              className="w-full h-4 border-t border-amber-900/10 mt-4"
                              style={{
                                background: 'repeating-linear-gradient(to bottom, #bd9265 0px, #bd9265 2.5px, #865732 2.5px, #865732 5px, #caa175 5px, #caa175 7.5px, #623a1a 7.5px, #623a1a 10px, #bd9265 10px, #bd9265 12.5px)'
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                }

                // For other categories, render the normal Highlights list
                return (
                  <div className="bg-white rounded-[24px] border border-slate-200/50 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
                    <div className="flex flex-col justify-between h-full py-1">
                      {getTechnicalSpecs(activeSpread).highlights.map((item, index) => (
                        <div key={index} className="flex items-center gap-5 py-3.5 last:py-0 last:border-b-0 border-b border-slate-100 border-dashed">
                          <div className="w-14 h-14 rounded-full bg-[#f0f9f4] flex items-center justify-center shrink-0">
                            {renderHighlightIcon(item.icon)}
                          </div>
                          <div className="flex flex-col text-left border-l-[3px] border-[#006e2f] pl-5">
                            <h4 className="text-[17px] sm:text-[18px] font-black text-slate-900 leading-tight tracking-tight">
                              {item.title}
                            </h4>
                            <p className="text-[12.5px] sm:text-[13.5px] font-bold text-slate-500 mt-1.5 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </>
      )}

      {/* Floating Action Buttons (Hidden on mobile view) */}
      <div className="hidden sm:flex fixed sm:right-5 sm:bottom-6 z-[40] flex-col gap-2">
        <a
          href="https://wa.me/919247449522"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 bg-[#25d366] hover:bg-[#1ebd59] text-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-colors duration-200 cursor-pointer"
          title="WhatsApp Support"
          aria-label="WhatsApp Support"
        >
          <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.95-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
          </svg>
        </a>
        <a
          href="tel:+919247449522"
          className="w-8 h-8 sm:w-9 sm:h-9 bg-slate-900 hover:bg-slate-800 text-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-colors duration-200 cursor-pointer"
          title="Call Direct"
          aria-label="Call Direct"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
          </svg>
        </a>
        <button
          onClick={handleGetQuote}
          className="w-8 h-8 sm:w-9 sm:h-9 bg-white hover:bg-amber-50 text-slate-800 hover:text-[#0F5C3B] border border-slate-200 hover:border-[#0F5C3B]/40 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-colors duration-200 cursor-pointer"
          title="Inquiry Form"
          aria-label="Inquiry Form"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </button>
      </div>


    </div>
  );
};

