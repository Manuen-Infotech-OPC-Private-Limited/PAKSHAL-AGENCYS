import React from 'react';
import royalClub3Img from '../../assets/plywood/royalclub3.png';
import marine1Img from '../../assets/plywood/marine.png';
import gurjanClub1Img from '../../assets/plywood/gurjanclub1.png';
import gurjanKing1Img from '../../assets/plywood/gurjan king.png';
import gurjanGoldNewImg from '../../assets/plywood/gurjangold.png';
import gurjanStarImg from '../../assets/plywood/gurjanstar.png';
import centuryPlywood1Img from '../../assets/plywood/century.png';
import greenPlywood1Img from '../../assets/plywood/green1.png';
import centuryLaminatesImg from '../../assets/laminates/centurylaminates2.png';
import greenLaminatesImg from '../../assets/laminates/greenlaminates3.png';
import marineLaminateImg from '../../assets/laminates/marine_laminate.jpg';
import vistaLaminatesImg from '../../assets/laminates/vistalaminates2.png';
import chromaLaminates1Img from '../../assets/laminates/chromalaminates1.png';
import indigoLaminatesImg from '../../assets/laminates/indigolaminates.png';
import acrylicPanelsImg from '../../assets/laminates/acrylicpanels.png';
import merinoLaminatesImg from '../../assets/laminates/merinolaminates.png';
import merino1Img from '../../assets/plywood/merino.png';
import armaniBrandImg from '../../assets/brands/armani_acrylic.jpg';
import indigo710_1Img from '../../assets/plywood/indigo710/indigo710_1.png';
import armani710_1Img from '../../assets/plywood/armani710/armani710_1.png';
import veneer2Img from '../../assets/plywood/veneer2.png';
import fancyDoorsImg from '../../assets/doors/fancydoors.png';
import hardwareFittings1 from '../../assets/hardware/productspage-hardware&fittings.png';
import astdaxHardware1Img from '../../assets/hardware/Astdax hardware and fittings.png';
import kitchenAccessoriesImg from '../../assets/kitchen/kitchenaccessories.png';
import ebcoLogo from '../../assets/logos/ebco-logo.png';
import ebcoDigitalLockImg from '../../assets/hardware/ebco/ebco-digital-lock.png';
import ebcoSlimboxImg from '../../assets/hardware/ebco/ebco-promotion-slimbox.jpg';
import hettichLogo from '../../assets/logos/hettich-logo.png';
import hettichInnoTechImg from '../../assets/hardware/hettich/hettich-innotech-atira.jpg';
import hettichLockImg from '../../assets/hardware/hettich/hettich-door-lock-handle.jpg';
import hettichSlidingImg from '../../assets/hardware/hettich/hettich-topline-sliding.jpg';
import hettichFoldingImg from '../../assets/hardware/hettich/hettich-wingline-folding.jpg';
import hafeleLogo from '../../assets/logos/hafele-logo.png';
import hafeleLivingImg from '../../assets/hardware/hafele/hafele-architectural-living.jpg';
import godrejLogo from '../../assets/logos/godrej-logo.png';
import godrejArchImg from '../../assets/hardware/godrej/godrej-architectural-hardware.jpg';
import europaLogo from '../../assets/logos/europa-logo.png';
import europaRimLocksImg from '../../assets/hardware/europa/europa-anti-theft-rim-locks.jpg';
import nimmiLogo from '../../assets/logos/nimmi-logo.png';
import nimmiDoorHardwareImg from '../../assets/hardware/nimmi/nimmi-door-hardware.jpg';
import hardwareFittings6 from '../../assets/hardware/productspage-hardware&fittings6.png';

export const BRAND_CONFIG = [
  {
    name: 'Royal Club',
    displayName: 'ROYAL CLUB',
    trademark: true,
    image: royalClub3Img,
    categories: ['Plywood'],
    categorySummary: 'Plywood • BWP Marine Grade',
    tagline: "The Architect's Choice Since 1994",
    hallmark: '100% selected Gurjan timber with lifetime structural guarantee and boiling water proof resistance.',
    tags: ['100% Gurjan Core', 'BWP Grade', 'Lifetime Warranty'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 32 24" fill="currentColor">
        <path d="M4 19h24v2.5H4V19zm1.5-3l2.5-9 5.5 5 2.5-8 2.5 8 5.5-5 2.5 9H5.5z" />
        <circle cx="8" cy="6" r="1.5" />
        <circle cx="16" cy="3" r="1.8" />
        <circle cx="24" cy="6" r="1.5" />
      </svg>
    )
  },
  {
    name: 'Marine Club',
    displayName: 'MARINE CLUB',
    trademark: true,
    image: marine1Img,
    categories: ['Plywood'],
    categorySummary: 'Plywood • High Moisture Defense',
    tagline: 'Waterproof Shield for High-Moisture Zones',
    hallmark: 'Engineered specifically for kitchens, bathrooms and exterior decks with high-density hardwood core.',
    tags: ['BWP IS 710', 'High Density Wood', 'Weatherproof'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 34 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M3 15c5-6 10-6 15 0s9 6 13 0" />
        <path d="M6 8c4.5-5 9-5 13.5 0s8 5 11.5 0" strokeWidth="2" />
      </svg>
    )
  },
  {
    name: 'Gurjan Club',
    displayName: 'GURJAN CLUB',
    trademark: true,
    image: gurjanClub1Img,
    categories: ['Plywood'],
    categorySummary: 'Plywood • Calibrated Gurjan Core',
    tagline: 'Precision Calibrated for Zero Core Gaps',
    hallmark: 'Double-pressed with uniform thickness tolerance for flawless luxury cabinetry and premium veneer backing.',
    tags: ['Double Pressed', 'Zero Core Gaps', 'Phenolic Bonded'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="14" cy="14" r="12" fill="currentColor" fillOpacity="0.08" />
        <path d="M10 5.5c-1 3-1 6 0 8.5s1 5.5 0 8.5" />
        <path d="M14 3.5c-1.2 4-1.2 8 0 11.5s1.2 7.5 0 9.5" />
        <path d="M18 5.5c1 3 1 6 0 8.5s-1 5.5 0 8.5" />
      </svg>
    )
  },
  {
    name: 'Gurjan King',
    displayName: 'GURJAN KING',
    highlightWord: 'KING',
    trademark: true,
    image: gurjanKing1Img,
    categories: ['Plywood'],
    categorySummary: 'Plywood • Structural Heavy-Duty',
    tagline: 'Heavy Load-Bearing Structural Endurance',
    hallmark: 'Maximum-density structural plywood built for demanding load-bearing frameworks and high-traffic spaces.',
    tags: ['Heavy Duty', 'Maximum Density', 'Termite Proof'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 30 22" fill="currentColor">
        <path d="M3 18h24v2H3v-2zm1.8-2.5l2.2-8.5 5 4.5 4-7 4 7 5-4.5 2.2 8.5H4.8z" />
        <circle cx="15" cy="3.5" r="1.6" />
      </svg>
    )
  },
  {
    name: 'Gurjan Gold',
    displayName: 'GURJAN GOLD',
    highlightWord: 'GOLD',
    trademark: true,
    image: gurjanGoldNewImg,
    categories: ['Plywood'],
    categorySummary: 'Plywood • Commercial MR & BWR',
    tagline: 'Premium Commercial & Interior Fit-Outs',
    hallmark: 'Versatile, smooth-sanded calibrated plywood ideal for residential wardrobes, partitions, and office interior paneling.',
    tags: ['Smooth Sanded', 'Calibrated', 'Borer Proof'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="11" />
        <path d="M18.5 10.5a5.5 5.5 0 101.5 5.5H14" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Gurjan Star',
    displayName: 'GURJAN STAR',
    highlightWord: 'STAR',
    trademark: true,
    image: gurjanStarImg,
    categories: ['Plywood'],
    categorySummary: 'Plywood • 360° Flexible Plywood',
    tagline: 'Specially Formulated Bendable Flexible Ply',
    hallmark: 'Flexible grain-parallel plywood engineered for seamless curves, round counters, decorative arches, and columns.',
    tags: ['360° Flexibility', 'Grain Parallel Bending', 'No Splitting'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2.5 16.2 9.2 23.6 10.2 18.3 15.3 19.6 22.6 13 19.1 6.4 22.6 7.7 15.3 2.4 10.2 9.8 9.2 13 2.5" />
      </svg>
    )
  },
  {
    name: 'Century',
    displayName: 'CENTURY',
    trademark: true,
    image: centuryLaminatesImg,
    categoryImages: {
      'Plywood': centuryPlywood1Img,
      'Laminates': centuryLaminatesImg
    },
    categoryTags: {
      'Plywood': ['100% Gurjan Core', 'BWP Marine Grade', 'Termite Proof'],
      'Laminates': ['High Pressure Laminate', 'Antibacterial', 'Anti-Fingerprint']
    },
    categories: ['Laminates', 'Plywood'],
    categorySummary: 'Laminates & Plywood • Surface Solutions',
    tagline: "India's Benchmark for Decorative Surfaces",
    hallmark: 'Industry-standard high-pressure decorative laminates and structural plywood with antibacterial surface protection.',
    tags: ['High Pressure Laminate', 'Antibacterial', 'Anti-Fingerprint'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M15 9a4 4 0 100 6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: 'Green',
    displayName: 'GREEN',
    trademark: true,
    image: greenLaminatesImg,
    categoryImages: {
      'Plywood': greenPlywood1Img,
      'Laminates': greenLaminatesImg
    },
    categoryTags: {
      'Plywood': ['100% Calibrated', 'Borer Resistant', 'High Load Capacity'],
      'Laminates': ['Zero Emission', 'Scratch Resistant', 'Texture Rich']
    },
    categories: ['Laminates', 'Plywood'],
    categorySummary: 'Laminates & Plywood • Eco Luxury',
    tagline: 'Eco-Friendly Premium Surface Collection',
    hallmark: 'Sustainably sourced, zero-emission high-pressure laminates and calibrated plywood with natural organic textures.',
    tags: ['Zero Emission', 'Scratch Resistant', 'Texture Rich'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 5 16 5 21c5 0 11-3 13-12 1-4-1-1-1-1z" />
      </svg>
    )
  },
  {
    name: 'Marine',
    displayName: 'MARINE',
    trademark: true,
    image: marineLaminateImg,
    categoryImages: {
      'Laminates': marineLaminateImg
    },
    categories: ['Laminates'],
    categorySummary: 'Laminates • Moisture-Proof Finishes',
    tagline: 'High-Resilience Moisture Resistant Sheets',
    hallmark: 'Specially treated decorative laminates designed to resist steam, moisture, and temperature fluctuations in kitchens and baths.',
    tags: ['Steam Resistant', 'Non-Porous Surface', 'Easy Clean'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 15c4-3 8-3 12 0s6 3 6 0" />
        <path d="M3 9c4-3 8-3 12 0s6 3 6 0" />
      </svg>
    )
  },
  {
    name: 'Vista',
    displayName: 'VISTA',
    trademark: true,
    image: vistaLaminatesImg,
    categoryImages: {
      'Laminates': vistaLaminatesImg
    },
    categoryTags: {
      'Laminates': 'Stone Textures'
    },
    categories: ['Laminates'],
    categorySummary: 'Laminates • Contemporary Textures',
    tagline: 'Contemporary Textures & Designer Surfaces',
    hallmark: 'Sophisticated laminate range with modern textures, stone finishes, and impact resistance.',
    tags: ['Stone Textures', 'Anti-Fingerprint', 'Impact Resistant'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 3 21 12 12 21 3 12" />
      </svg>
    )
  },
  {
    name: 'Indigo 710',
    displayName: 'INDIGO 710',
    highlightWord: '710',
    trademark: true,
    image: indigo710_1Img,
    categoryImages: {
      'Plywood': indigo710_1Img
    },
    categoryTags: {
      'Plywood': ['IS 710 Certified', '100% Calibrated Core', '30 Years Warranty']
    },
    categories: ['Plywood'],
    categorySummary: 'Plywood • IS 710 Marine Grade BWP',
    tagline: 'Premium IS 710 Boiling Water Proof Marine Plywood',
    hallmark: 'Engineered with selected imported hardwoods and unextended phenolic resins, meeting rigorous IS 710 marine grade standards for waterproof durability.',
    tags: ['IS 710 Certified', '100% Calibrated Core', '30 Years Warranty'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 20 7 20 17 12 22 4 17 4 7" />
      </svg>
    )
  },
  {
    name: 'Armani 710',
    displayName: 'ARMANI 710',
    highlightWord: '710',
    trademark: true,
    image: armani710_1Img,
    categoryImages: {
      'Plywood': armani710_1Img
    },
    categoryTags: {
      'Plywood': ['IS 710 Marine Grade', '100% Double Calibrated', 'Lifetime Guarantee']
    },
    categories: ['Plywood'],
    categorySummary: 'Plywood • Luxury Calibrated Marine IS 710',
    tagline: 'Italian-Inspired Precision Calibrated Marine Plywood',
    hallmark: 'Luxury double-calibrated IS 710 marine plywood built with zero core gaps, uniform thickness, and unmatched boiling water proof resistance.',
    tags: ['IS 710 Marine Grade', '100% Double Calibrated', 'Lifetime Guarantee'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 12h5v7h10v-7h5z" />
      </svg>
    )
  },
  {
    name: 'Croma',
    displayName: 'CROMA',
    trademark: true,
    image: chromaLaminates1Img,
    categoryImages: {
      'Laminates': chromaLaminates1Img
    },
    categories: ['Laminates'],
    categorySummary: 'Laminates • Solid Colors & Woodgrains',
    tagline: 'Vibrant Colors & Timeless Wood Decors',
    hallmark: 'Expansive color palette of vibrant solids, pastels, and synchronized woodgrains for creative interior aesthetics.',
    tags: ['Vibrant Solids', 'Woodgrain Series', 'Fade Resistant'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="9" cy="10" r="2" />
        <circle cx="15" cy="10" r="2" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    )
  },
  {
    name: 'Indigo',
    displayName: 'INDIGO',
    trademark: true,
    image: indigoLaminatesImg,
    categoryImages: {
      'Laminates': indigoLaminatesImg
    },
    categories: ['Laminates'],
    categorySummary: 'Laminates • High-Gloss & Velvet Matte',
    tagline: 'Ultra High-Gloss & Velvet Touch Surfaces',
    hallmark: 'Mirror-finish gloss and soft-touch anti-scratch velvet laminates that elevate modern cabinetry and wardrobe doors.',
    tags: ['Mirror Gloss', 'Velvet Touch', 'Anti-Scratch'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 20 7 20 17 12 22 4 17 4 7" />
      </svg>
    )
  },
  {
    name: 'Merino',
    displayName: 'MERINO',
    trademark: true,
    image: merinoLaminatesImg,
    categoryImages: {
      'Laminates': merinoLaminatesImg,
      'Plywood': merino1Img
    },
    categories: ['Laminates'],
    categorySummary: 'Laminates • High-Pressure Surfaces',
    tagline: 'World-Class Decorative Laminates & Surfaces',
    hallmark: 'Trendsetting textures, anti-bacterial surfaces, and premium high-pressure decorative laminates for elegant spaces.',
    tags: ['Anti-Bacterial', 'Super Matt & High Gloss', 'Stain Resistant'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="4 14 9 9 14 14 20 8" />
      </svg>
    )
  },
  {
    name: 'Armani',
    displayName: 'ARMANI',
    trademark: true,
    image: armaniBrandImg,
    categories: ['Acrylic Panels'],
    categorySummary: 'Acrylic Panels • Ultra High-Gloss',
    tagline: 'Italian-Inspired Luxury High-Gloss Acrylics',
    hallmark: 'Crystal-clear acrylic panels with 6H pencil hardness scratch resistance, glass-like depth, and UV color fastness.',
    tags: ['6H Scratch Proof', 'Mirror Reflection', 'Zero Delamination'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L2 12h5v7h10v-7h5z" />
      </svg>
    )
  },
  {
    name: 'Architecture',
    displayName: 'ARCHITECTURE',
    trademark: true,
    image: veneer2Img,
    categories: ['Veneers'],
    categorySummary: 'Veneers • Exotic Natural Woods',
    tagline: 'Curated Natural & Smoked Wood Veneers',
    hallmark: 'Hand-selected natural wood species, flitch-matched smoked veneers, and open-grain wood surfaces.',
    tags: ['Natural Timber', 'Smoked Finishes', 'Bookmatched'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18M6 21V7l6-4 6 4v14" />
      </svg>
    )
  },
  {
    name: 'Ebco',
    displayName: 'EBCO',
    trademark: true,
    image: ebcoLogo,
    logo: ebcoLogo,
    categoryImages: {
      'Hardware & Fittings': ebcoDigitalLockImg,
      'Arch. Hardware': ebcoDigitalLockImg
    },
    categories: ['Hardware & Fittings'],
    categorySummary: 'Hardware & Fittings • Digital Locks • Pocket Doors • Spinova 360°',
    tagline: 'Smart Living, Pocket Door Systems & Spinova 360° Storage',
    hallmark: "India's pioneer manufacturer of advanced biometric digital locks, concealed pocket door systems, Spinova 360 rotating organizers, and precision hardware fittings.",
    tags: ['Smart Digital Locks', 'Pocket Door Systems', 'Spinova 360°', 'Soft-Close Motion'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <circle cx="6" cy="15" r="1" fill="currentColor" />
        <circle cx="10" cy="15" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Hettich',
    displayName: 'HETTICH',
    trademark: true,
    image: hettichLogo,
    logo: hettichLogo,
    categoryImages: {
      'Hardware & Fittings': hettichLockImg,
      'Arch. Hardware': hettichLockImg
    },
    categories: ['Hardware & Fittings'],
    categorySummary: 'Hardware & Fittings • Mortise Locks • Sliding & Folding Systems',
    tagline: 'Fascin[action] German Engineering: Locks, Sliding Systems & Cabinetry Fittings',
    hallmark: 'World-renowned German engineered hardware featuring precision mortise door locks, TopLine sliding systems, WingLine folding door gear, Sensys soft-close hinges, and Quadro runner channels.',
    tags: ['Mortise Door Locks', 'TopLine Sliding Gear', 'WingLine Folding Systems', 'Sensys Soft-Close', 'Quadro Runners'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    )
  },
  {
    name: 'Hafele',
    displayName: 'HÄFELE',
    trademark: true,
    image: hafeleLogo,
    logo: hafeleLogo,
    categoryImages: {
      'Hardware & Fittings': hafeleLivingImg,
      'Arch. Hardware': hafeleLivingImg,
      'Sliding Systems': hafeleLivingImg
    },
    categories: ['Hardware & Fittings'],
    categorySummary: 'Hardware & Fittings • Slido Sliding Systems • Loox LED Lighting • Bed Lift Mechanisms',
    tagline: 'German Hardware Systems, Slido Sliding Systems & Loox LED Lighting',
    hallmark: 'Global authority in premium hardware solutions, Slido top-hung sliding door gear, Loox 5 LED cabinet lighting, multifunctional hydraulic bed lift mechanisms, and Minifix connecting fittings.',
    tags: ['Slido Sliding Systems', 'Loox 5 LED Lighting', 'Multifunctional Bed Lift', 'Minifix Connecting Systems', 'German Engineering'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <path d="M14 9l3 3-3 3" />
      </svg>
    )
  },
  {
    name: 'Godrej',
    displayName: 'GODREJ',
    trademark: true,
    image: godrejLogo,
    logo: godrejLogo,
    categoryImages: {
      'Hardware & Fittings': godrejArchImg,
      'Arch. Hardware': godrejArchImg
    },
    categories: ['Hardware & Fittings'],
    categorySummary: 'Hardware & Fittings • Digital Locks • Safes • Door Fittings',
    tagline: "India's Benchmark for Smart Locks, Electronic Safes & Door Fittings",
    hallmark: 'Trusted high-security biometric digital locks, motorized home safes, Euro-profile anti-drill brass cylinders, hydraulic overhead door closers, and comprehensive modular furniture hardware.',
    tags: ['Biometric Smart Locks', 'Digital Home Safes', 'High Security Mortise', 'Hydraulic Closers', 'Furniture Fittings'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 018 0v4" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Europa',
    displayName: 'EUROPA',
    trademark: true,
    image: europaLogo,
    logo: europaLogo,
    categoryImages: {
      'Hardware & Fittings': europaRimLocksImg,
      'Arch. Hardware': europaRimLocksImg
    },
    categories: ['Hardware & Fittings'],
    categorySummary: 'Hardware & Fittings • Anti-Theft Door Locks • Rim Latches • Padlocks',
    tagline: 'India’s Foremost Anti-Theft Locking Solutions & High-Security Systems',
    hallmark: 'Advanced anti-theft security engineering featuring solid brass deadbolt mortise locks, precision computer dimple keys, automatic deadlocking rim latches, cylindrical knob locks, and ultra-tough boron alloy padlocks.',
    tags: ['Anti-Theft Engineering', 'Computer Dimple Key', 'Solid Brass Deadbolt', '15-Year Warranty'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    name: 'Nimmi',
    displayName: 'NIMMI',
    trademark: true,
    image: nimmiDoorHardwareImg,
    logo: nimmiLogo,
    categoryImages: {
      'Hardware & Fittings': nimmiDoorHardwareImg,
      'Arch. Hardware': nimmiDoorHardwareImg
    },
    categories: ['Hardware & Fittings'],
    categorySummary: 'Hardware & Fittings • Door Hardware • Kitchen Accessories • Furniture Fittings',
    tagline: 'Door Hardware, Kitchen Accessories & Furniture Fittings',
    hallmark: 'Durable door locks, handles, hinges, modular kitchen accessories, and furniture fittings.',
    tags: ['Door Hardware', 'Kitchen Storage', 'Cabinet Fittings', 'Profile Handles'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="8" cy="7" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="8" cy="17" r="1.5" fill="currentColor" />
      </svg>
    )
  },

  {
    name: 'Steel Wood',
    displayName: 'STEEL WOOD',
    trademark: true,
    image: hardwareFittings1,
    categories: ['Arch. Hardware', 'Hardware & Fittings', 'Sliding Systems'],
    categorySummary: 'Hardware & Fittings • Precision Fittings',
    tagline: 'Heavy-Duty Drawer Systems & Sliding Hardware',
    hallmark: 'German-engineered soft-close hinges, drawer channels, sliding wardrobe systems, and precision hardware fittings.',
    tags: ['Soft-Close Tested', 'High Load Capacity', 'Corrosion Free'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 12h16M12 4v16" />
      </svg>
    )
  },
  {
    name: 'Astdax',
    displayName: 'ASTDAX',
    trademark: true,
    image: astdaxHardware1Img,
    categories: ['Arch. Hardware', 'Hardware & Fittings'],
    categorySummary: 'Hardware & Fittings • Luxury Brass & Zinc',
    tagline: 'Designer Door Handles, Mortise Locks & Pulls',
    hallmark: 'Ergonomic solid brass and zinc door handles, concealed roses, digital locks, and precision furniture fittings.',
    tags: ['Solid Brass & Zinc', 'PVD Finish Guarantee', 'Concealed Screws'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="6" height="12" rx="3" />
        <path d="M9 10h11a1.5 1.5 0 011.5 1.5v0a1.5 1.5 0 01-1.5 1.5H9" />
        <circle cx="6" cy="12" r="1.2" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Sentex Gold',
    displayName: 'SENTEX GOLD',
    trademark: true,
    image: kitchenAccessoriesImg,
    categoryImages: {
      'Kitchen Accessories': kitchenAccessoriesImg
    },
    categories: ['Kitchen Accessories'],
    categorySummary: 'Modular Kitchen • Smart Storage Systems',
    tagline: 'Premium Modular Kitchen Accessories & Organizers',
    hallmark: 'High-grade SS 304 modular kitchen baskets, magic corners, pull-down elevators, rolling shutters, and silent tandem drawers.',
    tags: ['SS 304 Grade', 'Soft-Close Motion', 'Lifetime Rust Protection'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    )
  },
  {
    name: 'Fancy Doors',
    displayName: 'FANCY DOORS',
    trademark: true,
    image: fancyDoorsImg,
    categoryImages: {
      'Fancy Doors': fancyDoorsImg
    },
    categories: ['Fancy Doors'],
    categorySummary: 'Fancy Doors • Luxury Designer Entrances',
    tagline: 'Designer Doors for Stylish Living Spaces',
    hallmark: 'Premium solid core designer doors crafted with seasoned hardwoods, acoustic sound insulation, and luxury contemporary finishes.',
    tags: ['Solid Timber Core', 'Zero Warpage Guarantee', '15-Year Warranty'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
        <circle cx="8" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  }
];

