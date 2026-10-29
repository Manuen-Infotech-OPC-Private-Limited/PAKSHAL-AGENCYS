import royalClubImg from '../../assets/plywood/royalclub.png';
import royalClub2Img from '../../assets/plywood/royalclub2.png';
import royalClub3Img from '../../assets/plywood/royalclub3.png';
import royalClub4Img from '../../assets/plywood/royalclub4.png';
import royalClub5Img from '../../assets/plywood/royalclub5.png';
import marineClubImg from '../../assets/plywood/marineclub.png';
import marineClub2Img from '../../assets/plywood/marineclub2.png';
import marine1Img from '../../assets/plywood/marine.png';
import marine2Img from '../../assets/plywood/marine2.png';
import marine3Img from '../../assets/plywood/marine3.png';
import centuryPlywood1Img from '../../assets/plywood/century.png';
import centuryPlywood2Img from '../../assets/plywood/century2.png';
import centuryPlywood3Img from '../../assets/plywood/century3.png';
import greenPlywood1Img from '../../assets/plywood/green1.png';
import greenPlywood2Img from '../../assets/plywood/green2.png';
import greenPlywood3Img from '../../assets/plywood/green3.png';
import gurjanClub1Img from '../../assets/plywood/gurjanclub1.png';
import gurjanClub2Img from '../../assets/plywood/gurjanclub2.png';
import gurjanKing1Img from '../../assets/plywood/gurjan king.png';
import gurjanKing2Img from '../../assets/plywood/gurjanking2.png';
import gurjanKing3Img from '../../assets/plywood/gurjanking3.png';
import gurjanKing4Img from '../../assets/plywood/gurjanking4.png';
import gurjanKing5Img from '../../assets/plywood/gurjanking5.png';
import gurjanGoldNewImg from '../../assets/plywood/gurjangold.png';
import gurjanGoldNew2Img from '../../assets/plywood/gurjangold2.png';
import gurjanGold3Img from '../../assets/plywood/gurjangold3.png';
import gurjanGold4Img from '../../assets/plywood/gurjangold4.jpg';
import gurjanGold5Img from '../../assets/plywood/gurjangold5.png';
import gurjanStarImg from '../../assets/plywood/gurjanstar.png';
import gurjanStar2Img from '../../assets/plywood/gurjanstar2.png';
import gurjanStar3Img from '../../assets/plywood/gurjanstar3.png';
import gurjanStar4Img from '../../assets/plywood/gurjanstar4.png';
import vistaPlywood1Img from '../../assets/plywood/vistaplywood1.png';
import vistaPlywood2Img from '../../assets/plywood/vistaplywood2.png';
import vistaPlywood3Img from '../../assets/plywood/vistaplywood3.png';

export const plywoodSpreads = [
  {
    id: 1,
    brandId: 'royal-club',
    category: 'Plywood',
    pageNumLeft: 1,
    pageNumRight: 2,
    badge: 'Premium Collection',
    title: 'Unrivaled\nStrength.',
    tagline: "The Architect's Choice Since 1994",
    image: royalClubImg,
    brandName: 'Royal Club',
    desc: 'Crafted from 100% selected Gurjan timber, Royal Club stands as the pinnacle of structural integrity and aesthetic endurance.',
    thicknesses: ['6mm', '9mm', '12mm', '18mm', '25mm'],
    defaultThickness: '18mm',
    features: ['100% BWP Grade', 'Termite Proof', 'Borer Resistant'],
    applications: ['Kitchens', 'Wardrobes', 'Exteriors'],
    specs: {
      'Core Material': 'Imported Gurjan',
      'Bonding Adhesive': 'Phenolic Formaldehyde',
      'Manufacturer Warranty': 'Lifetime Guarantee'
    },
    heroSub: 'PREMIUM QUALITY. TIMELESS STRENGTH.',
    heroTitle: 'ROYAL CLUB',
    heroDesc: 'Crafted from 100% selected Gurjan timber, Royal Club stands as the pinnacle of structural integrity and aesthetic endurance.',
    heroTags: [
      { text: '100% Gurjan Core', icon: 'wood' },
      { text: 'BWP Grade', icon: 'droplet' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '100% Gurjan Core', desc: 'Selected premium Gurjan timber', icon: 'wood' },
      { title: 'BWP Grade', desc: 'Boiling Water Proof certified', icon: 'droplet' },
      { title: 'Termite Proof', desc: 'Highly resistant to termites & borers', icon: 'bug' },
      { title: 'Lifetime Warranty', desc: 'Long lasting performance', icon: 'shield' },
      { title: 'Eco Friendly', desc: 'Sustainable & environment safe', icon: 'leaf' }
    ]
  },
  {
    id: 12,
    brandId: 'royal-club-premium',
    category: 'Plywood',
    pageNumLeft: 3,
    pageNumRight: 4,
    hideFromIndex: true,
    parentBrandId: 'royal-club',
    badge: 'Exotic Collection',
    title: 'Calibrated\nPerfection.',
    tagline: 'Precision engineered for high-end carpentry',
    image: royalClub2Img,
    brandName: 'Royal Club',
    desc: 'Double-pressed and calibrated on both sides, Royal Club Premium offers the absolute smoothest surfaces and zero core gaps.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['100% Calibrated', 'Zero Core Gaps', 'Phenolic Bonded'],
    applications: ['Luxury Kitchens', 'Wardrobe Shutters', 'Wall Paneling'],
    specs: {
      'Core Material': 'Premium Gurjan',
      'Press Type': 'Double Hot Pressed',
      'Calibrated Tolerance': '± 0.2mm'
    },
    heroSub: 'DOUBLE PRESSED. CALIBRATED PERFECTION.',
    heroTitle: 'ROYAL CLUB',
    heroDesc: 'Double-pressed and calibrated on both sides, Royal Club Premium offers the absolute smoothest surfaces and zero core gaps for luxury cabinetry.',
    heroTags: [
      { text: '100% Calibrated', icon: 'calibrate' },
      { text: 'Zero Core Gaps', icon: 'wood' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Calibrated Precision', desc: 'Uniform thickness tolerance ±0.2mm', icon: 'calibrate' },
      { title: '100% Gurjan Core', desc: 'Selected imported premium plies', icon: 'wood' },
      { title: 'Boiling Water Proof', desc: 'Withstands heavy moisture exposure', icon: 'droplet' },
      { title: 'Zero Core Gaps', desc: 'No overlapping plies or voids', icon: 'wood' },
      { title: 'Lifetime Warranty', desc: 'Assured product warranty protection', icon: 'shield' }
    ]
  },
  {
    id: 121,
    brandId: 'royal-club-gold',
    category: 'Plywood',
    pageNumLeft: 3,
    pageNumRight: 4,
    hideFromIndex: true,
    parentBrandId: 'royal-club',
    badge: 'Architectural Gold',
    title: 'Architectural\nMastery.',
    tagline: 'Selected Gurjan Veneer Core with High Tensile Strength',
    image: royalClub3Img,
    brandName: 'Royal Club',
    desc: 'Royal Club Gold series incorporates multi-layer high-density hardwood plies bonded under extreme pressure for maximum structural stability.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Tensile Tested', 'Phenolic Formaldehyde', 'Borer Shield'],
    applications: ['Luxury Living Rooms', 'Heavy Partitions', 'Structural Frameworks'],
    specs: {
      'Core Timber': 'Selected Gurjan Hardwood',
      'Bonding': 'PF Synthetic Resin',
      'Moisture Content': '8% - 12%'
    },
    heroSub: 'ARCHITECTURAL GOLD. MAXIMUM TENSILE RIGIDITY.',
    heroTitle: 'ROYAL CLUB',
    heroDesc: 'Royal Club Gold series incorporates multi-layer high-density hardwood plies bonded under extreme pressure for maximum structural stability.',
    heroTags: [
      { text: 'Tensile Tested', icon: 'strength' },
      { text: '100% Gurjan', icon: 'wood' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Selected Timber', desc: 'Premium grade imported hardwood', icon: 'wood' },
      { title: 'PF Resin Bond', desc: 'Weather and moisture resistant', icon: 'droplet' },
      { title: 'Borer Proof', desc: 'Vacuum-pressure preservative treated', icon: 'shield' }
    ]
  },
  {
    id: 122,
    brandId: 'royal-club-marine',
    category: 'Plywood',
    pageNumLeft: 3,
    pageNumRight: 4,
    hideFromIndex: true,
    parentBrandId: 'royal-club',
    badge: 'Marine Grade Core',
    title: 'Boiling Water Proof\nEndurance.',
    tagline: 'Pure Phenolic Resin Bond for Severe Climate Areas',
    image: royalClub4Img,
    brandName: 'Royal Club',
    desc: 'Tested to withstand continuous 72-hour boiling water immersion, this marine-grade Royal Club sheet ensures zero delamination.',
    thicknesses: ['9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['72-Hr Boil Proof', 'Zero Delamination', 'Anti-Fungal'],
    applications: ['Modular Kitchen Sinks', 'Bathroom Vanities', 'Coastal Residences'],
    specs: {
      'Grade': 'BWP IS:710 Marine',
      'Core': '100% Calibrated Hardwood',
      'Adhesive': 'Phenolic Resin'
    },
    heroSub: '72-HOUR BOIL TESTED. ZERO DELAMINATION.',
    heroTitle: 'ROYAL CLUB',
    heroDesc: 'Tested to withstand continuous 72-hour boiling water immersion, this marine-grade Royal Club sheet ensures zero delamination in wet spaces.',
    heroTags: [
      { text: 'BWP IS:710 Marine', icon: 'droplet' },
      { text: 'Zero Delamination', icon: 'shield' },
      { text: 'Anti-Fungal', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Boiling Water Proof', desc: 'Full 72-hour boil certified', icon: 'droplet' },
      { title: 'Zero Delamination', desc: 'Seamlessly cross-laminated layers', icon: 'layers' },
      { title: 'Extreme Climate', desc: 'Resists coastal humidity & heat', icon: 'shield' }
    ]
  },
  {
    id: 123,
    brandId: 'royal-club-architect',
    category: 'Plywood',
    pageNumLeft: 3,
    pageNumRight: 4,
    hideFromIndex: true,
    parentBrandId: 'royal-club',
    badge: 'Precision Calibrated',
    title: 'Calibrated\nSuperiority.',
    tagline: 'Double-Sided Calibration with Mirror-Smooth Finish',
    image: royalClub5Img,
    brandName: 'Royal Club',
    desc: 'Surface-sanded with micro-grit abrasives to achieve perfectly flat veneer and laminate substrates with no telegraphing.',
    thicknesses: ['12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Micro-Sanded', 'Zero Telegraphing', 'High Screw Holding'],
    applications: ['Designer Wardrobes', 'Wall Paneling', 'Custom Joinery'],
    specs: {
      'Tolerance': '± 0.15mm',
      'Surface': 'Double-Sided 120 Grit Sanded',
      'Core Plies': 'Selected Hardwood'
    },
    heroSub: 'PRECISION CALIBRATED. ZERO TELEGRAPHING.',
    heroTitle: 'ROYAL CLUB',
    heroDesc: 'Surface-sanded with micro-grit abrasives to achieve perfectly flat veneer and laminate substrates with zero core telegraphing.',
    heroTags: [
      { text: 'Zero Telegraphing', icon: 'sparkles' },
      { text: 'Calibrated ±0.15mm', icon: 'calibrate' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Flat Substrate', desc: 'Ideal for laminates and veneers', icon: 'sparkles' },
      { title: 'High Density', desc: 'Superior screw and fastener retention', icon: 'gear' },
      { title: 'Dimensional Stability', desc: 'No warping or bowing across seasons', icon: 'shield' }
    ]
  },
  {
    id: 2,
    brandId: 'marine-club',
    category: 'Plywood',
    pageNumLeft: 5,
    pageNumRight: 6,
    badge: 'Marine Grade',
    title: 'Waterproof\nShield.',
    tagline: 'Defending against moisture and water damage',
    image: marine1Img,
    brandName: 'Marine Club',
    desc: 'Engineered specifically for high-moisture zones, Marine Club offers superior boiling-water-proof (BWP) protection.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['BWP Marine Grade', 'High Density Wood', 'Weather Proof'],
    applications: ['Bathrooms', 'Kitchen Cabinets', 'Outdoor Decks'],
    specs: {
      'Wood Species': 'Hardwood Core',
      'Bonding Glue': 'Marine Grade BWP Glue',
      'Manufacturer Warranty': '25 Years Warranty'
    },
    heroSub: 'WATERPROOF SHIELD. UNCOMPROMISING GRADE.',
    heroTitle: 'MARINE CLUB',
    heroDesc: 'Engineered specifically for high-moisture zones, Marine Club offers superior boiling-water-proof (BWP) protection.',
    heroTags: [
      { text: 'BWP Marine Grade', icon: 'droplet' },
      { text: 'High Density Wood', icon: 'wood' },
      { text: 'Weather Proof', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Boiling Water Proof', desc: 'Certified BWP grade protection', icon: 'droplet' },
      { title: 'Hardwood Core', desc: 'High-density select hardwood plies', icon: 'wood' },
      { title: 'No-Warp Design', desc: 'Stable block core construction', icon: 'calibrate' },
      { title: '25 Years Warranty', desc: 'Long term performance assurance', icon: 'shield' },
      { title: 'Eco Safe Resin', desc: 'Low emissions polymer bond', icon: 'leaf' }
    ]
  },
  {
    id: 21,
    brandId: 'marine-club-bwp',
    category: 'Plywood',
    pageNumLeft: 5,
    pageNumRight: 6,
    hideFromIndex: true,
    parentBrandId: 'marine-club',
    badge: 'Heavy-Duty Marine',
    title: 'Zero-Void\nCore.',
    tagline: 'Pre-pressed high density hardwood veneers',
    image: marine2Img,
    brandName: 'Marine Club',
    desc: 'Each veneer layer is individually treated with preservative chemicals and bonded with pure phenolic glue for zero core voiding.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['Zero Core Voids', 'High Screw Holding', 'Boiling Water Proof'],
    applications: ['Marine Craft & Docks', 'Commercial Wet Kitchens', 'Heavy Cabinetry'],
    specs: {
      'Bonding': 'Boiling Water Proof PF Resin',
      'Wood Plies': '100% Calibrated Hardwood',
      'Warranty': '25 Years Warranty'
    },
    heroSub: 'ZERO VOID CORE. EXTREME ENDURANCE.',
    heroTitle: 'MARINE CLUB',
    heroDesc: 'Each veneer layer is individually treated with preservative chemicals and bonded with pure phenolic glue for zero core voiding.',
    heroTags: [
      { text: 'Zero Core Voids', icon: 'layers' },
      { text: 'High Screw Holding', icon: 'gear' },
      { text: '25 Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Zero Core Gaps', desc: 'Solid continuous plies without voids', icon: 'layers' },
      { title: 'Extreme BWP', desc: 'Boiling-water proof resin bond', icon: 'droplet' },
      { title: 'Heavy Load Rating', desc: 'Built for high stress applications', icon: 'strength' }
    ]
  },
  {
    id: 22,
    brandId: 'marine-club-pro',
    category: 'Plywood',
    pageNumLeft: 5,
    pageNumRight: 6,
    hideFromIndex: true,
    parentBrandId: 'marine-club',
    badge: 'Marine Pro Grade',
    title: 'Marine Grade\nShield.',
    tagline: 'Superior boiling water proof and borer protection',
    image: marine3Img,
    brandName: 'Marine Club',
    desc: 'Marine Club Pro delivers double-sided calibrated smoothness and certified borer and termite resistance for all marine and home projects.',
    thicknesses: ['12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['Double-Sided Calibrated', 'Borer Proof', 'Termite Resistant'],
    applications: ['Luxury Kitchens', 'Bath Vanity Shutters', 'Outdoor Patio Units'],
    specs: {
      'Density': 'Above 750 kg/m³',
      'Glue Shear Strength': 'Exceeds IS:710 Standards',
      'Warranty': '25 Years Warranty'
    },
    heroSub: 'DOUBLE CALIBRATED. CERTIFIED IS:710.',
    heroTitle: 'MARINE CLUB',
    heroDesc: 'Marine Club Pro delivers double-sided calibrated smoothness and certified borer and termite resistance for all marine and home projects.',
    heroTags: [
      { text: 'IS:710 Certified', icon: 'cert' },
      { text: 'Density >750 kg/m³', icon: 'strength' },
      { text: '25 Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'High Density', desc: 'Compact solid core exceeding 750 kg/m³', icon: 'strength' },
      { title: 'Smooth Sanding', desc: 'Ready for laminate press without prep', icon: 'sparkles' },
      { title: 'Anti-Termite', desc: 'Lifelong protection against pests', icon: 'shield' }
    ]
  },
  {
    id: 301,
    brandId: 'century-plywood',
    category: 'Plywood',
    pageNumLeft: 7,
    pageNumRight: 8,
    badge: 'Architectural Grade',
    title: 'Engineered\nEndurance.',
    tagline: 'Century Plywood - BWP Marine Grade Core',
    image: centuryPlywood1Img,
    brandName: 'Century',
    desc: 'Century architectural plywood features calibrated core layers bonded with phenolic resin, engineered for extreme moisture resistance and load strength.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['100% Calibrated', 'BWP Grade', 'Borer & Termite Proof'],
    applications: ['Luxury Kitchens', 'Wardrobes', 'Paneling'],
    specs: {
      'Core Material': 'Hardwood & Gurjan',
      'Bonding Adhesive': 'BWP Phenolic Resin',
      'Warranty': '25 Years Warranty'
    },
    heroSub: 'CENTURY PLYWOOD. STRUCTURAL MASTERY.',
    heroTitle: 'CENTURY PLYWOOD',
    heroDesc: 'Century architectural plywood features calibrated core layers bonded with phenolic resin, engineered for extreme moisture resistance and load strength.',
    heroTags: [
      { text: '100% Calibrated', icon: 'calibrate' },
      { text: 'BWP Marine Grade', icon: 'droplet' },
      { text: '25 Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'BWP Marine Grade', desc: 'Withstands extreme boiling water test', icon: 'droplet' },
      { title: 'Calibrated Thickness', desc: 'Even surface on both sides', icon: 'calibrate' },
      { title: 'Termite Proof', desc: 'Treated with specialized preservative salts', icon: 'shield' }
    ]
  },
  {
    id: 3011,
    brandId: 'century-plywood-club',
    category: 'Plywood',
    pageNumLeft: 7,
    pageNumRight: 8,
    hideFromIndex: true,
    parentBrandId: 'century-plywood',
    badge: 'Century Club Prime',
    title: 'Century Club\nPrime.',
    tagline: 'Calibrated BWP Marine Grade Core with Glue Line Protection',
    image: centuryPlywood2Img,
    brandName: 'Century',
    desc: 'Century Club Prime is manufactured with patented Glue Line Protection (GLP) technology, making it 100% immune to borers and termites.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['GLP Technology', '25 Year Warranty', 'BWP Marine'],
    applications: ['Modular Kitchens', 'Heavy Wardrobes', 'Partition Paneling'],
    specs: {
      'Adhesive': 'Phenolic PF Formaldehyde',
      'Core Species': 'Selected Calibrated Hardwood',
      'Warranty': '25 Years Warranty'
    },
    heroSub: 'PATENTED GLP TECHNOLOGY. 100% BORER PROOF.',
    heroTitle: 'CENTURY PLYWOOD',
    heroDesc: 'Century Club Prime is manufactured with patented Glue Line Protection (GLP) technology, making it 100% immune to borers and termites.',
    heroTags: [
      { text: 'GLP Technology', icon: 'shield' },
      { text: '25 Year Warranty', icon: 'cert' },
      { text: 'BWP Marine', icon: 'droplet' }
    ],
    overviewFeatures: [
      { title: 'Glue Line Protection', desc: 'Organic preservative in adhesive line', icon: 'shield' },
      { title: 'BWP Marine', desc: 'Boiling-water resistant marine bond', icon: 'droplet' },
      { title: 'Calibrated Face', desc: 'Uniform thickness across all corners', icon: 'calibrate' }
    ]
  },
  {
    id: 3012,
    brandId: 'century-plywood-architect',
    category: 'Plywood',
    pageNumLeft: 7,
    pageNumRight: 8,
    hideFromIndex: true,
    parentBrandId: 'century-plywood',
    badge: 'Architect Selection',
    title: 'Century Architectural\nMastery.',
    tagline: 'Calibrated hardwood core for zero core gaps and flat surface',
    image: centuryPlywood3Img,
    brandName: 'Century',
    desc: 'Engineered for premium interior fit-outs requiring zero core overlapping and exceptional screw-holding capacity.',
    thicknesses: ['12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Zero Overlapping', 'High Density Core', 'Phenolic BWP'],
    applications: ['Luxury Furniture', 'Beds & Sofas', 'Designer Partitions'],
    specs: {
      'Bonding': 'PF Phenolic Resin',
      'Core': '100% Calibrated Plies',
      'Preservative': 'Pressure Impregnated'
    },
    heroSub: 'CALIBRATED HARDWOOD CORE. ZERO CORE GAPS.',
    heroTitle: 'CENTURY PLYWOOD',
    heroDesc: 'Engineered for premium interior fit-outs requiring zero core overlapping and exceptional screw-holding capacity.',
    heroTags: [
      { text: 'Zero Core Gaps', icon: 'wood' },
      { text: 'High Screw Grip', icon: 'gear' },
      { text: 'Lifetime Protection', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'High Density Hardwood', desc: 'Solid core with superior screw holding', icon: 'gear' },
      { title: 'Pressure Impregnated', desc: 'Chemical preservative vacuum-infused', icon: 'shield' },
      { title: 'Flawless Base', desc: 'Perfect foundation for veneers and laminates', icon: 'sparkles' }
    ]
  },
  {
    id: 302,
    brandId: 'green-plywood',
    category: 'Plywood',
    pageNumLeft: 11,
    pageNumRight: 12,
    badge: 'Sustainable Strength',
    title: 'Eco-Certified\nIntegrity.',
    tagline: 'Greenply Marine Grade BWP Plywood',
    image: greenPlywood1Img,
    brandName: 'Green',
    desc: 'Green premium plywood is crafted from ethically sourced hardwood veneers and bonded with high-grade synthetic resin for maximum durability and strength.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['BWP Grade', 'Zero Core Gaps', 'Termite Resistant'],
    applications: ['Kitchens', 'Heavy Furniture', 'Ceilings'],
    specs: {
      'Core Material': 'Selected Hardwood',
      'Bonding': 'Phenolic Resin',
      'Warranty': '20 Years Warranty'
    },
    heroSub: 'GREEN PLYWOOD. CERTIFIED QUALITY.',
    heroTitle: 'GREEN PLYWOOD',
    heroDesc: 'Green premium plywood is crafted from ethically sourced hardwood veneers and bonded with high-grade synthetic resin for maximum durability and strength.',
    heroTags: [
      { text: 'BWP Grade', icon: 'droplet' },
      { text: 'Zero Core Gaps', icon: 'wood' },
      { text: 'Termite Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'BWP Bonded', desc: 'Protected against boiling water and humidity', icon: 'droplet' },
      { title: 'Selected Hardwood', desc: 'Superior core density and screw-holding', icon: 'wood' },
      { title: 'Termite Protection', desc: 'Specially chemically treated', icon: 'shield' }
    ]
  },
  {
    id: 3021,
    brandId: 'green-plywood-gold',
    category: 'Plywood',
    pageNumLeft: 11,
    pageNumRight: 12,
    hideFromIndex: true,
    parentBrandId: 'green-plywood',
    badge: 'Greenply Club',
    title: 'Greenply Calibrated\nCore.',
    tagline: 'Zero Core Gaps with High-Density Hardwood Plies',
    image: greenPlywood2Img,
    brandName: 'Green',
    desc: 'Greenply Club calibrated plywood features quad-press technology ensuring flat surfaces, minimal thickness variation, and termite-proof durability.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['Quad-Press Tech', 'Emission Compliant', 'Anti-Termite'],
    applications: ['Modular Kitchens', 'Wardrobes', 'Bespoke Joinery'],
    specs: {
      'Bonding': 'Unextended Phenolic PF Resin',
      'Tolerance': '± 0.2mm',
      'Warranty': '20 Years Warranty'
    },
    heroSub: 'QUAD-PRESS CALIBRATED. ZERO CORE VOIDS.',
    heroTitle: 'GREEN PLYWOOD',
    heroDesc: 'Greenply Club calibrated plywood features quad-press technology ensuring flat surfaces, minimal thickness variation, and termite-proof durability.',
    heroTags: [
      { text: 'Quad-Press Tech', icon: 'calibrate' },
      { text: 'E0 Emission Safe', icon: 'leaf' },
      { text: '20 Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Quad-Press Calibration', desc: 'Uniform thickness and mirror flat surfaces', icon: 'calibrate' },
      { title: 'E0 Low Emission', desc: 'Certified safe for healthy indoor air', icon: 'leaf' },
      { title: 'Phenolic PF Resin', desc: 'Boiling-water proof bond', icon: 'droplet' }
    ]
  },
  {
    id: 3022,
    brandId: 'green-plywood-marine',
    category: 'Plywood',
    pageNumLeft: 11,
    pageNumRight: 12,
    hideFromIndex: true,
    parentBrandId: 'green-plywood',
    badge: 'Green Marine BWP',
    title: 'Greenply Eco-Safe\nBWP.',
    tagline: 'Sustainable timber matrix with 20-year assurance',
    image: greenPlywood3Img,
    brandName: 'Green',
    desc: 'Formulated with sustainable timber matrix and vacuum-pressure preservative infusion for extreme weather conditions.',
    thicknesses: ['9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Eco-Certified', 'Vacuum Infused', 'Weatherproof'],
    applications: ['Bathroom Cabinets', 'Heavy Desks', 'Partition Systems'],
    specs: {
      'Grade': 'BWP IS:710 Marine',
      'Core Density': 'High Density Hardwood',
      'Warranty': '20 Years Warranty'
    },
    heroSub: 'SUSTAINABLE TIMBER MATRIX. MARINE IS:710.',
    heroTitle: 'GREEN PLYWOOD',
    heroDesc: 'Formulated with sustainable timber matrix and vacuum-pressure preservative infusion for extreme weather conditions.',
    heroTags: [
      { text: 'BWP IS:710', icon: 'droplet' },
      { text: 'Vacuum Infused', icon: 'shield' },
      { text: '20 Year Warranty', icon: 'cert' }
    ],
    overviewFeatures: [
      { title: 'Sustainable Sourcing', desc: 'FSC-compliant plantation timber', icon: 'leaf' },
      { title: 'Moisture Immune', desc: 'Withstands water saturation without swelling', icon: 'droplet' },
      { title: 'Screw Retention', desc: 'Solid grip across edges and face', icon: 'gear' }
    ]
  },
  {
    id: 7,
    brandId: 'gurjan-club',
    category: 'Plywood',
    pageNumLeft: 35,
    pageNumRight: 36,
    badge: 'Structural Plywood',
    title: 'Elite Core\nIntegrity.',
    tagline: 'High load-bearing calibrated plywood',
    image: gurjanClub1Img,
    brandName: 'Gurjan Club',
    desc: '100% pure Gurjan core plywood, calibrated for uniform thickness and exceptional strength for heavy load-bearing furniture.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['100% Calibrated', 'Super Strength Core', 'No Warp Guarantee'],
    applications: ['Heavy Cabinets', 'Beds & Sofa Frames', 'Office Partitions'],
    specs: {
      'Calibrated Tolerance': '± 0.2mm',
      'Wood Species': 'Premium Gurjan',
      'Adhesive': 'Phenolic PF Resin'
    },
    heroSub: 'ELITE INTEGRITY. STRUCTURAL GRADE.',
    heroTitle: 'GURJAN CLUB',
    heroDesc: '100% pure Gurjan core plywood, calibrated for uniform thickness and exceptional strength for heavy load-bearing furniture.',
    heroTags: [
      { text: '100% Calibrated', icon: 'calibrate' },
      { text: 'Super Strength Core', icon: 'wood' },
      { text: 'No Warp Guarantee', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Calibrated Precision', desc: 'Uniform thickness tolerance ±0.2mm', icon: 'calibrate' },
      { title: '100% Gurjan Core', desc: 'Selected imported premium plies', icon: 'wood' },
      { title: 'BWP Adhesive', desc: 'Bonded with pure Phenolic PF resin', icon: 'droplet' },
      { title: 'No-Warp Frame', desc: 'Perfect for custom modular units', icon: 'calibrate' },
      { title: 'Lifetime Guarantee', desc: 'Assured product warranty protection', icon: 'shield' }
    ]
  },
  {
    id: 71,
    brandId: 'gurjan-club-calibrated',
    category: 'Plywood',
    pageNumLeft: 35,
    pageNumRight: 36,
    hideFromIndex: true,
    parentBrandId: 'gurjan-club',
    badge: 'Calibrated Gurjan',
    title: 'Calibrated\nStrength.',
    tagline: '100% Pure Gurjan Hardwood Construction',
    image: gurjanClub2Img,
    brandName: 'Gurjan Club',
    desc: 'Imported high-density Gurjan plies with phenolic resin infusion, engineered for lifetime defense against severe humidity.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['Selected Gurjan', 'Quad Calibrated', 'BWP Marine'],
    applications: ['Kitchen Counters', 'Wardrobe Frames', 'Heavy Framework'],
    specs: {
      'Timber': '100% Pure Gurjan',
      'Tolerance': '± 0.2mm',
      'Glue': 'BWP Phenolic Resin'
    },
    heroSub: '100% PURE GURJAN. CALIBRATED UNIFORMITY.',
    heroTitle: 'GURJAN CLUB',
    heroDesc: 'Imported high-density Gurjan plies with phenolic resin infusion, engineered for lifetime defense against severe humidity.',
    heroTags: [
      { text: 'Pure Gurjan', icon: 'wood' },
      { text: 'Quad Calibrated', icon: 'calibrate' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Pure Gurjan Timber', desc: 'Heavy density core timber from sustainable sources', icon: 'wood' },
      { title: 'Quad-Calibrated', desc: 'Even thickness on both faces', icon: 'calibrate' },
      { title: 'Boiling Water Proof', desc: 'Exceeds standard 72-hour boiling water test', icon: 'droplet' }
    ]
  },
  {
    id: 8,
    brandId: 'gurjan-king',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    badge: 'Premium Calibrated',
    title: 'The King of\nPlywoods.',
    tagline: 'Double-pressed flat surfaces for modular designs',
    image: gurjanKing1Img,
    brandName: 'Gurjan King',
    desc: 'Double-pressed calibrated plywood offering unmatched flat surfaces and zero-core gaps. The ultimate choice for modular kitchens.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['Zero Core Gaps', 'Sanded Smooth Finish', 'Moisture Resistant'],
    applications: ['Modular Kitchens', 'Wardrobes', 'Ceiling Panels'],
    specs: {
      'Press Type': 'Double Hot Pressed',
      'Core Plies': 'Selected Gurjan',
      'MR Rating': 'Water Resistant'
    },
    heroSub: 'DOUBLE PRESS. THE KING OF PLYWOODS.',
    heroTitle: 'GURJAN KING',
    heroDesc: 'Double-pressed calibrated plywood offering unmatched flat surfaces and zero-core gaps. The ultimate choice for modular kitchens.',
    heroTags: [
      { text: 'Zero Core Gaps', icon: 'calibrate' },
      { text: 'Sanded Smooth Finish', icon: 'sparkles' },
      { text: 'Moisture Resistant', icon: 'droplet' }
    ],
    overviewFeatures: [
      { title: 'Calibrated Precision', desc: 'Smooth uniform sanding on faces', icon: 'calibrate' },
      { title: 'Zero Core Gaps', desc: 'No overlapping plies or voids', icon: 'wood' },
      { title: 'Boiling Water Proof', desc: 'Withstands heavy moisture exposure', icon: 'droplet' },
      { title: 'Screw Holding', desc: 'Superior grip strength for hinges', icon: 'gear' }
    ]
  },
  {
    id: 82,
    brandId: 'gurjan-king-premium',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    hideFromIndex: true,
    parentBrandId: 'gurjan-king',
    badge: 'Architectural King',
    title: 'Double-Pressed\nFlatness.',
    tagline: 'King of calibrated zero-gap architectural plywood',
    image: gurjanKing2Img,
    brandName: 'Gurjan King',
    desc: 'Zero-core-void calibrated core ensures seamless screw fixing for European hinges, runners, and tandem drawer systems.',
    thicknesses: ['12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Zero Core Voids', 'Superior Screw Grip', 'Mirror Smooth'],
    applications: ['Modular Kitchens', 'Master Bedroom Wardrobes', 'Joinery'],
    specs: {
      'Pressing': 'Dual Hot Hydraulic Press',
      'Adhesive': 'Phenolic PF Resin',
      'Density': '780 kg/m³'
    },
    heroSub: 'ZERO CORE VOIDS. SUPERIOR FASTENER RETENTION.',
    heroTitle: 'GURJAN KING',
    heroDesc: 'Zero-core-void calibrated core ensures seamless screw fixing for European hinges, runners, and tandem drawer systems.',
    heroTags: [
      { text: 'Zero Core Voids', icon: 'layers' },
      { text: 'Fastener Grip', icon: 'gear' },
      { text: 'Mirror Smooth', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Zero Void Core', desc: 'Seamless solid timber core', icon: 'layers' },
      { title: 'Hinge Holding', desc: 'Withstands heavy repetitive door usage', icon: 'gear' },
      { title: 'Double Calibrated', desc: 'Smooth substrate for veneers and laminates', icon: 'sparkles' }
    ]
  },
  {
    id: 81,
    brandId: 'gurjan-gold',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    badge: 'Gold Calibrated BWP',
    title: 'Golden Standard\nExcellence.',
    tagline: '100% Selected Gurjan Core with 4-Press Technology',
    image: gurjanGoldNewImg,
    brandName: 'Gurjan Gold',
    desc: 'Engineered with 100% selected Gurjan veneers and 4-times hot pressed calibration. Offers superior bonding, termite protection, and mirror-flat finish for luxury interiors.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['4-Press Calibrated', '100% Gurjan Core', 'Lifetime Warranty'],
    applications: ['Luxury Kitchens', 'Wardrobes', 'Beds & Heavy Furniture'],
    specs: {
      'Press Type': '4-Times Hot Pressed',
      'Wood Species': '100% Selected Gurjan',
      'Bonding': 'Unextended BWP Phenolic Resin',
      'Warranty': 'Lifetime Guarantee'
    },
    heroSub: 'GOLD CALIBRATED. LIFETIME ENDURANCE.',
    heroTitle: 'GURJAN GOLD',
    heroDesc: 'Engineered with 100% selected Gurjan veneers and 4-times hot pressed calibration. Offers superior bonding, termite protection, and mirror-flat finish for luxury interiors.',
    heroTags: [
      { text: '4-Press Calibrated', icon: 'calibrate' },
      { text: '100% Gurjan Core', icon: 'wood' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '4-Press Calibration', desc: 'Mirror-flat surface with zero core voids', icon: 'calibrate' },
      { title: '100% Selected Gurjan', desc: 'Imported high-density hardwood plies', icon: 'wood' },
      { title: 'Phenolic PF Resin', desc: 'Boiling water proof marine endurance', icon: 'droplet' },
      { title: 'Borer & Termite Shield', desc: 'Deep vacuum-pressure chemical treatment', icon: 'shield' },
      { title: 'Screw Retention', desc: 'Maximum load bearing and hinge strength', icon: 'gear' }
    ]
  },
  {
    id: 811,
    brandId: 'gurjan-gold-elite',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    hideFromIndex: true,
    parentBrandId: 'gurjan-gold',
    badge: 'Gold Elite',
    title: '4-Press Golden\nCalibrated.',
    tagline: 'Unrivaled screw holding and structural integrity',
    image: gurjanGoldNew2Img,
    brandName: 'Gurjan Gold',
    desc: 'The gold benchmark in calibrated marine plywood, utilizing quad hot press cycles and unextended phenolic resin.',
    thicknesses: ['12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Quad-Pressed', 'Borer Immunity', 'Phenolic Marine'],
    applications: ['Luxury Wardrobes', 'Heavy Sofa Beds', 'Partition Frames'],
    specs: {
      'Core Plies': '100% Premium Gurjan',
      'Bonding': 'Phenolic PF',
      'Warranty': 'Lifetime Guarantee'
    },
    heroSub: 'QUAD-PRESSED GOLD. UNRIVALED STRUCTURAL INTEGRITY.',
    heroTitle: 'GURJAN GOLD',
    heroDesc: 'The gold benchmark in calibrated marine plywood, utilizing quad hot press cycles and unextended phenolic resin.',
    heroTags: [
      { text: 'Quad-Pressed', icon: 'calibrate' },
      { text: 'Lifetime Warranty', icon: 'shield' },
      { text: '100% Gurjan', icon: 'wood' }
    ],
    overviewFeatures: [
      { title: 'Quad-Press Integrity', desc: 'Four hydraulic heat cycles for zero voids', icon: 'calibrate' },
      { title: '100% Gurjan Core', desc: 'Dense structural timber core', icon: 'wood' },
      { title: 'Lifetime Assurance', desc: 'Guaranteed against delamination and borers', icon: 'shield' }
    ]
  },
  {
    id: 10,
    brandId: 'gurjan-star',
    category: 'Plywood',
    pageNumLeft: 49,
    pageNumRight: 50,
    badge: 'Flexible Design',
    title: 'Flexible\nSolutions.',
    tagline: 'Specially formulated bendable plywood for curved counters',
    image: gurjanStarImg,
    brandName: 'Gurjan Star',
    desc: 'Specially formulated bendable plywood designed for creating curved shapes, round counters, and architectural arches.',
    thicknesses: ['4mm', '6mm', '9mm', '12mm', '16mm'],
    defaultThickness: '6mm',
    features: ['360° Flexibility', 'Grain Parallel Bending', 'No Splitting'],
    applications: ['Reception Desks', 'Curved Pillars', 'Decorative Arches'],
    specs: {
      'Bending Radius': 'Min 10 cm',
      'Core Material': 'Flexible Gurjan',
      'Bonding': 'Flexible Resin adhesive'
    },
    heroSub: 'FLEXIBLE SOLUTIONS. BENDABLE DESIGN.',
    heroTitle: 'GURJAN STAR',
    heroDesc: 'Specially formulated bendable plywood designed for creating curved shapes, round counters, and architectural arches.',
    heroTags: [
      { text: '360° Flexibility', icon: 'flex' },
      { text: 'Grain Parallel Bending', icon: 'flex' },
      { text: 'No Splitting', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '360° Flexi Bending', desc: 'Arches, curved counters, columns', icon: 'flex' },
      { title: 'Grain Parallel Ply', desc: 'Uniform bend without splitting', icon: 'flex' },
      { title: 'Gurjan Quality Core', desc: 'Strong selected flexible plies', icon: 'wood' },
      { title: 'Resin Bonded', desc: 'Flexible polymer adhesive coat', icon: 'droplet' },
      { title: 'Zero Cracking', desc: 'Smooth seamless curved surfaces', icon: 'shield' }
    ]
  },
  {
    id: 83,
    brandId: 'gurjan-king-multilayer',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    hideFromIndex: true,
    parentBrandId: 'gurjan-king',
    badge: 'Multi-Layer Balanced Core',
    title: 'Balanced Multi-Layer\nIntegrity.',
    tagline: 'Multi-layered structural Gurjan plywood with precision edge profiling',
    image: gurjanKing3Img,
    brandName: 'Gurjan King',
    desc: 'Engineered with alternating cross-grain Gurjan plies, this multi-layer balanced core provides maximum deflection resistance and dimensional stability under severe environmental shifts.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Multi-Layer Core', 'Cross-Grain Balance', 'High Tensile Strength', 'BWP Marine Grade'],
    applications: ['Heavy Load Partitions', 'Modular Kitchen Carcasses', 'Luxury Wardrobes', 'Structural Ceilings'],
    specs: {
      'Core Material': '100% Selected Gurjan Hardwood',
      'Layer Construction': 'Balanced Multi-Layer Plies',
      'Thickness Tolerance': '± 0.2mm',
      'Bonding Adhesive': 'Unextended Phenolic Resin BWP'
    },
    heroSub: 'BALANCED MULTI-LAYER. MAXIMUM STABILITY.',
    heroTitle: 'GURJAN KING MULTI-LAYER',
    heroDesc: 'Engineered with alternating cross-grain Gurjan plies, this multi-layer balanced core provides maximum deflection resistance and dimensional stability.',
    heroTags: [
      { text: 'Multi-Layer Core', icon: 'calibrate' },
      { text: 'Cross-Grain Balance', icon: 'wood' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Balanced Multi-Layer', desc: 'Alternating grain direction prevents bending and warping', icon: 'calibrate' },
      { title: '100% Selected Gurjan', desc: 'High-density pure hardwood construction', icon: 'wood' },
      { title: 'BWP Marine Standard', desc: '72-hour boiling water resistant phenolic bond', icon: 'droplet' },
      { title: 'Termite & Borer Treated', desc: 'Pressure vacuum impregnated preservatives', icon: 'bug' },
      { title: 'Lifetime Structural Integrity', desc: 'Engineered for multi-generational reliability', icon: 'shield' }
    ]
  },
  {
    id: 84,
    brandId: 'gurjan-king-solid-edge',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    hideFromIndex: true,
    parentBrandId: 'gurjan-king',
    badge: 'Solid Edge Structural',
    title: 'Precision Calibrated\nSolid Edge.',
    tagline: 'Ultra-flat architectural panels with laser-straight calibrated edges',
    image: gurjanKing4Img,
    brandName: 'Gurjan King',
    desc: 'Featuring high-density Gurjan plies calibrated through 4-stage pneumatic sanding, providing zero core voids and an impeccable foundation for heavy architectural carpentry.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Solid Edge Calibrated', 'Zero Core Voids', 'High Screw Holding', 'Termite Proof'],
    applications: ['Structural Frameworks', 'Commercial Counters', 'Load-Bearing Shelving', 'Villa Cabinetry'],
    specs: {
      'Core Material': '100% Gurjan Timber',
      'Surface Finish': 'Quadruple Sanded Ultra-Smooth',
      'Calibration Tolerance': '± 0.2mm',
      'Warranty': 'Lifetime Guarantee'
    },
    heroSub: 'PRECISION SOLID EDGE. ULTRA-FLAT CALIBRATION.',
    heroTitle: 'GURJAN KING SOLID EDGE',
    heroDesc: 'Featuring high-density Gurjan plies calibrated through 4-stage pneumatic sanding, providing zero core voids and an impeccable foundation for heavy architectural carpentry.',
    heroTags: [
      { text: 'Solid Edge Core', icon: 'calibrate' },
      { text: 'High Screw Grip', icon: 'shield' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Solid Edge Calibrated', desc: 'Uniform thickness and laser-smooth edges', icon: 'calibrate' },
      { title: 'Zero Core Voids', desc: 'Full sheet core composition eliminates hollow spots', icon: 'wood' },
      { title: 'Extreme Screw Holding', desc: 'Holds heavy hinges and drawer runners securely', icon: 'shield' },
      { title: 'Phenolic Resin Bond', desc: 'Immune to moisture, heat, and fungal attack', icon: 'droplet' },
      { title: 'Flatness Guarantee', desc: 'Never warps or sags under continuous heavy load', icon: 'leaf' }
    ]
  },
  {
    id: 85,
    brandId: 'gurjan-king-veneer-grade',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    hideFromIndex: true,
    parentBrandId: 'gurjan-king',
    badge: 'Architectural Veneer Grade',
    title: 'Mirror-Smooth\nFace Veneer.',
    tagline: 'Zero-waviness face ply engineered for luxury laminates and veneers',
    image: gurjanKing5Img,
    brandName: 'Gurjan King',
    desc: 'Manufactured with premium Gurjan face and core veneers, ensuring an ultra-smooth, wave-free surface that guarantees bubble-free laminate adhesion and seamless natural veneer bonding.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Mirror-Smooth Face', 'Bubble-Free Adhesion', 'Quad Hot Pressed', 'Lifetime Warranty'],
    applications: ['Designer Wardrobe Shutters', 'Aesthetic Wall Panelling', 'Luxury Veneer Overlay', 'Display Cabinets'],
    specs: {
      'Face Veneer': 'A-Grade Gurjan Timber',
      'Core Veneer': '100% Imported Gurjan',
      'Adhesion Strength': 'Superior Glue Line Shear Tested',
      'Warranty': 'Lifetime Guarantee'
    },
    heroSub: 'MIRROR-SMOOTH FINISH. VENEER & LAMINATE BASE.',
    heroTitle: 'GURJAN KING VENEER GRADE',
    heroDesc: 'Manufactured with premium Gurjan face and core veneers, ensuring an ultra-smooth, wave-free surface that guarantees bubble-free laminate adhesion.',
    heroTags: [
      { text: 'Mirror-Smooth Face', icon: 'calibrate' },
      { text: 'Quad Hot Pressed', icon: 'wood' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Mirror-Smooth Face', desc: 'Prevents telegraphing or rippling under thin laminates', icon: 'calibrate' },
      { title: 'Bubble-Free Bonding', desc: 'Engineered resin absorption for permanent adhesion', icon: 'droplet' },
      { title: 'A-Grade Timber', desc: 'Hand-selected knot-free exterior face veneers', icon: 'wood' },
      { title: 'Anti-Termite Treatment', desc: 'Complete chemical defense against timber pests', icon: 'bug' },
      { title: 'Lifetime Assurance', desc: 'Uncompromising durability for interior craftsmanship', icon: 'shield' }
    ]
  },
  {
    id: 812,
    brandId: 'gurjan-gold-calibrated',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    hideFromIndex: true,
    parentBrandId: 'gurjan-gold',
    badge: 'Gold 4-Press Calibrated',
    title: 'Golden Standard\nCalibrated.',
    tagline: 'Four-time hot pressed calibrated Gurjan core for flawless carpentry',
    image: gurjanGold3Img,
    brandName: 'Gurjan Gold',
    desc: 'Gurjan Gold Calibrated Plywood undergoes 4-stage hydraulic pressing to ensure exact panel thickness, uniform weight distribution, and zero warping in demanding residential projects.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['4-Press Calibrated', 'Uniform Density', 'Termite Treated', 'BWP Marine Standard'],
    applications: ['Modular Kitchens', 'Wardrobes', 'Beds & Storage Units', 'Office Workstations'],
    specs: {
      'Core Material': 'Imported Gurjan Hardwood',
      'Press Cycles': '4-Times Hot Pressed',
      'Thickness Tolerance': '± 0.25mm',
      'Moisture Content': '8% - 12%'
    },
    heroSub: 'FOUR-PRESS CALIBRATED. UNIFORM PRECISION.',
    heroTitle: 'GURJAN GOLD CALIBRATED',
    heroDesc: 'Gurjan Gold Calibrated Plywood undergoes 4-stage hydraulic pressing to ensure exact panel thickness, uniform weight distribution, and zero warping.',
    heroTags: [
      { text: '4-Press Calibrated', icon: 'calibrate' },
      { text: 'Uniform Density', icon: 'wood' },
      { text: '25-Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '4-Press Calibrated', desc: 'Double hot pressed and double pre-pressed for flatness', icon: 'calibrate' },
      { title: 'Pure Hardwood Timber', desc: 'Dense tropical hardwood core plies', icon: 'wood' },
      { title: 'Moisture Barrier', desc: 'BWP synthetic resin stops moisture absorption', icon: 'droplet' },
      { title: 'Borer & Termite Proof', desc: 'Chemical dipped for lifelong pest resistance', icon: 'bug' },
      { title: '25 Years Warranty', desc: 'Guaranteed performance in modern homes', icon: 'shield' }
    ]
  },
  {
    id: 813,
    brandId: 'gurjan-gold-core',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    hideFromIndex: true,
    parentBrandId: 'gurjan-gold',
    badge: 'Dense Hardwood Core',
    title: 'High-Density\nSolid Hardwood.',
    tagline: 'Interlocking grain hardwood layers delivering maximum load capacity',
    image: gurjanGold4Img,
    brandName: 'Gurjan Gold',
    desc: 'Formulated with dense hardwood plies and high solid-content synthetic resin, providing high resistance to nail/screw pull-out and exceptional bending modulus.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Dense Hardwood Plies', 'High Load Capacity', 'Weather Resistant', 'Anti-Borer Treatment'],
    applications: ['Heavy Storage Shelves', 'Kitchen Base Units', 'TV Consoles', 'Commercial Furniture'],
    specs: {
      'Core Type': '100% Hardwood Gurjan Plies',
      'Resin Type': 'Phenolic Synthetic BWP',
      'Bending Strength': 'Exceeds IS 710 Standards',
      'Warranty': '25 Years Warranty'
    },
    heroSub: 'SOLID HARDWOOD CORE. HIGH LOAD CAPACITY.',
    heroTitle: 'GURJAN GOLD SOLID CORE',
    heroDesc: 'Formulated with dense hardwood plies and high solid-content synthetic resin, providing high resistance to nail/screw pull-out and exceptional bending modulus.',
    heroTags: [
      { text: 'Solid Hardwood', icon: 'wood' },
      { text: 'High Load Capacity', icon: 'shield' },
      { text: '25-Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Interlocking Grain Core', desc: 'Strong internal bond resists delamination under stress', icon: 'wood' },
      { title: 'High Load Capacity', desc: 'Ideal for heavy kitchen pantry and wardrobe storage', icon: 'shield' },
      { title: 'Weatherproof Adhesive', desc: 'Synthetic polymer withstands climate shifts', icon: 'droplet' },
      { title: 'Smooth Edge Cut', desc: 'Clean cuts with zero core splintering on circular saws', icon: 'calibrate' },
      { title: 'Long-Term Reliability', desc: 'Backed by 25-year structural performance promise', icon: 'leaf' }
    ]
  },
  {
    id: 814,
    brandId: 'gurjan-gold-warehouse',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    hideFromIndex: true,
    parentBrandId: 'gurjan-gold',
    badge: 'Commercial & Residential Fit-Out',
    title: 'Versatile Interior\nFit-Out Grade.',
    tagline: 'Certified boiling water proof plywood for custom cabinetry & paneling',
    image: gurjanGold5Img,
    brandName: 'Gurjan Gold',
    desc: 'The benchmark for master carpenters and architects, Gurjan Gold provides effortless cutting, smooth router channeling, and dependable moisture defense in kitchens and living spaces.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm'],
    defaultThickness: '19mm',
    features: ['Easy Router Channeling', 'Smooth Planing Edge', 'Boiling Water Proof', 'Eco-Certified'],
    applications: ['Kitchen Shutter Frames', 'Wardrobe Drawers', 'False Ceilings', 'Wall Paneling'],
    specs: {
      'Grade': 'BWP / BWR Grade',
      'Application': 'Wardrobes, Vanities, Partitions',
      'Density': '750+ kg/m³',
      'Warranty': '25 Years Warranty'
    },
    heroSub: 'INTERIOR FIT-OUT. VERSATILE PERFORMANCE.',
    heroTitle: 'GURJAN GOLD FIT-OUT',
    heroDesc: 'The benchmark for master carpenters and architects, Gurjan Gold provides effortless cutting, smooth router channeling, and dependable moisture defense.',
    heroTags: [
      { text: 'Easy Router Channeling', icon: 'calibrate' },
      { text: 'Boiling Water Proof', icon: 'droplet' },
      { text: '25-Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Smooth Planing & Routing', desc: 'Clean grooving for profile handles and edge-banding', icon: 'calibrate' },
      { title: 'BWP Water Defense', desc: 'Resists steam and sink spills in modular kitchens', icon: 'droplet' },
      { title: 'High Density 750+ kg/m³', desc: 'Solid wood feel and sturdy screw holding', icon: 'wood' },
      { title: 'Eco-Safe Certified', desc: 'Low formaldehyde emissions for healthy homes', icon: 'leaf' },
      { title: '25-Year Protection', desc: 'Comprehensive warranty against manufacturing defects', icon: 'shield' }
    ]
  },
  {
    id: 102,
    brandId: 'gurjan-star-flexi',
    category: 'Plywood',
    pageNumLeft: 49,
    pageNumRight: 50,
    hideFromIndex: true,
    parentBrandId: 'gurjan-star',
    badge: '360° Extreme Flex',
    title: 'Seamless Curved\nArchitecture.',
    tagline: 'Grain-parallel bendable plywood for tight radius curves and rounded counters',
    image: gurjanStar2Img,
    brandName: 'Gurjan Star',
    desc: 'Engineered specifically for curved surfaces, Gurjan Star flexes smoothly into round reception desks, cylindrical pillars, and artistic ceiling coves without cracking or surface splintering.',
    thicknesses: ['4mm', '6mm', '9mm', '12mm', '16mm'],
    defaultThickness: '6mm',
    features: ['360° Curve Radius', 'Grain Parallel Plies', 'Zero Splintering', 'Resin Bonded'],
    applications: ['Reception Desks', 'Curved Pillars', 'Decorative Arches', 'Circular Seating'],
    specs: {
      'Bending Radius': 'Down to 10cm',
      'Core Material': 'Selected Flexible Gurjan',
      'Adhesive': 'Flexible Melamine Polymer',
      'Application': 'Curved Pillars, Reception Desks'
    },
    heroSub: '360° CURVE RADIUS. SEAMLESS FLEXIBILITY.',
    heroTitle: 'GURJAN STAR FLEXI',
    heroDesc: 'Engineered specifically for curved surfaces, Gurjan Star flexes smoothly into round reception desks, cylindrical pillars, and artistic ceiling coves without cracking.',
    heroTags: [
      { text: '360° Flexibility', icon: 'flex' },
      { text: 'Grain Parallel Bending', icon: 'flex' },
      { text: 'No Splitting', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Extreme 360° Flexing', desc: 'Achieves tight curves without steaming or heat', icon: 'flex' },
      { title: 'Grain Parallel Plies', desc: 'Uniform continuous radius with zero flat spots', icon: 'flex' },
      { title: 'Zero Surface Splitting', desc: 'Smooth outer veneer stays intact under extreme tension', icon: 'shield' },
      { title: 'Flexible Polymer Bond', desc: 'Elastic adhesive holds plies together through bend cycles', icon: 'droplet' },
      { title: 'Architectural Curves', desc: 'Perfect for commercial counters, pillars and domes', icon: 'calibrate' }
    ]
  },
  {
    id: 103,
    brandId: 'gurjan-star-columns',
    category: 'Plywood',
    pageNumLeft: 49,
    pageNumRight: 50,
    hideFromIndex: true,
    parentBrandId: 'gurjan-star',
    badge: 'Designer Column & Arch',
    title: 'Architectural Arches\n& Round Columns.',
    tagline: 'Smooth sanded bendable ply ready for direct veneer & laminate pressing',
    image: gurjanStar3Img,
    brandName: 'Gurjan Star',
    desc: 'Specially treated to eliminate grain stress, allowing easy overlay of decorative veneers and laminates onto curved shapes without wrinkling or seam popping.',
    thicknesses: ['4mm', '6mm', '9mm', '12mm'],
    defaultThickness: '6mm',
    features: ['Stress-Free Bending', 'Flawless Veneer Base', 'Uniform Arc Contour', 'No Springback'],
    applications: ['Showroom Displays', 'Auditorium Acoustic Waves', 'Curved Ceiling Pelmets', 'Hotel Foyers'],
    specs: {
      'Core Veneer': 'Grade-A Flexible Gurjan',
      'Thickness': 'Calibrated 6mm / 9mm / 12mm',
      'Bonding': 'Boiling Water Resistant BWR',
      'Warranty': '15 Years Warranty'
    },
    heroSub: 'ARCHITECTURAL COLUMNS. STRESS-FREE BEND.',
    heroTitle: 'GURJAN STAR COLUMNS',
    heroDesc: 'Specially treated to eliminate grain stress, allowing easy overlay of decorative veneers and laminates onto curved shapes without wrinkling or seam popping.',
    heroTags: [
      { text: 'Stress-Free Bending', icon: 'flex' },
      { text: 'Veneer Ready Base', icon: 'calibrate' },
      { text: '15-Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Stress-Free Plies', desc: 'Relieved timber internal tension for permanent shape hold', icon: 'flex' },
      { title: 'Ideal Overlay Surface', desc: 'Accepts acrylic, laminates, and veneers on curves seamlessly', icon: 'calibrate' },
      { title: 'Calibrated Thickness', desc: 'Uniform gauge across the entire 8x4 sheet', icon: 'wood' },
      { title: 'Anti-Termite Treatment', desc: 'Treated against wood-boring insects and pests', icon: 'bug' },
      { title: '15 Years Warranty', desc: 'Guaranteed against ply separation and cracking', icon: 'shield' }
    ]
  },
  {
    id: 104,
    brandId: 'gurjan-star-warehouse',
    category: 'Plywood',
    pageNumLeft: 49,
    pageNumRight: 50,
    hideFromIndex: true,
    parentBrandId: 'gurjan-star',
    badge: 'Heavy-Duty Commercial Flex',
    title: 'Industrial Curve\nSpecialist.',
    tagline: 'Warehouse stock of flexible hardwood plywood for commercial project rollouts',
    image: gurjanStar4Img,
    brandName: 'Gurjan Star',
    desc: 'Standard 8x4 ft flexible Gurjan sheets designed for rapid commercial interior execution, offering predictable curvature, high edge retention, and enduring structural stability.',
    thicknesses: ['4mm', '6mm', '9mm', '12mm', '16mm'],
    defaultThickness: '6mm',
    features: ['Consistent Flexibility', 'High Edge Strength', '8x4 Standard Sheets', 'Termite Resistant'],
    applications: ['Commercial Fit-Outs', 'Hospitality Counters', 'Retail Display Podiums', 'Sculptural Furniture'],
    specs: {
      'Standard Size': '8ft x 4ft (2440 x 1220 mm)',
      'Core': '100% Gurjan Bendable Core',
      'Resin': 'Moisture Resistant Resin',
      'Warranty': '15 Years Warranty'
    },
    heroSub: 'COMMERCIAL FLEXIBILITY. PROJECT RELIABILITY.',
    heroTitle: 'GURJAN STAR COMMERCIAL',
    heroDesc: 'Standard 8x4 ft flexible Gurjan sheets designed for rapid commercial interior execution, offering predictable curvature and high edge retention.',
    heroTags: [
      { text: 'Consistent Flexibility', icon: 'flex' },
      { text: 'High Edge Strength', icon: 'shield' },
      { text: '15-Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Large Format 8x4 Sheets', desc: 'Cover tall columns and wide reception curves without joints', icon: 'calibrate' },
      { title: 'High Edge Screw Retention', desc: 'Holds framing screws firmly even on bent profiles', icon: 'shield' },
      { title: '100% Gurjan Core', desc: 'Premium timber veneers for superior strength', icon: 'wood' },
      { title: 'Moisture Resistant Resin', desc: 'Prevents delamination in conditioned spaces', icon: 'droplet' },
      { title: 'Project Tested', desc: 'Proven in leading hospitality and corporate installations', icon: 'leaf' }
    ]
  },
  {
    id: 23,
    brandId: 'marine-club-specimen',
    category: 'Plywood',
    pageNumLeft: 5,
    pageNumRight: 6,
    hideFromIndex: true,
    parentBrandId: 'marine-club',
    badge: 'Pakshal Certified Marine',
    title: 'Certified BWP\nMarine Specimen.',
    tagline: 'Official Pakshal Agencys certified 72-hour boiling water proof plywood',
    image: marineClub2Img,
    brandName: 'Marine Club',
    desc: 'High-density tropical hardwood marine ply engineered for extreme water exposure, wet kitchens, washrooms, and luxury boat cabinetry with zero delamination guarantee.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['100% Waterproof', 'High Density Core', 'Anti-Fungal Treatment', 'Lifetime Warranty'],
    applications: ['Wet Kitchens', 'Bathroom Vanities', 'Outdoor Patio Furniture', 'Marine Cabinetry'],
    specs: {
      'Standard': 'IS 710 Marine Grade',
      'Core Material': 'Selected Tropical Hardwood',
      'Bonding Adhesive': 'Unextended Phenolic Formaldehyde',
      'Warranty': 'Lifetime Guarantee'
    },
    heroSub: 'CERTIFIED BWP. 100% WATER DEFENSE.',
    heroTitle: 'MARINE CLUB CERTIFIED',
    heroDesc: 'High-density tropical hardwood marine ply engineered for extreme water exposure, wet kitchens, washrooms, and luxury boat cabinetry with zero delamination guarantee.',
    heroTags: [
      { text: 'IS 710 Marine Grade', icon: 'droplet' },
      { text: 'High Density Wood', icon: 'wood' },
      { text: 'Lifetime Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'IS 710 Marine Certified', desc: 'Tested to withstand continuous 72-hour boiling water immersion', icon: 'droplet' },
      { title: 'Selected Hardwood Core', desc: 'Dense tropical wood prevents swelling and rot', icon: 'wood' },
      { title: 'Unextended Resin Bond', desc: 'Maximum adhesion that never fails in high-humidity zones', icon: 'shield' },
      { title: 'Anti-Fungal & Anti-Borer', desc: 'Deep preservative penetration against mold and pests', icon: 'bug' },
      { title: 'Lifetime Assurance', desc: 'Guaranteed for wet area installations', icon: 'shield' }
    ]
  },
  {
    id: 950,
    brandId: 'vista-plywood',
    category: 'Plywood',
    pageNumLeft: 31,
    pageNumRight: 32,
    badge: 'Calibrated Collection',
    title: 'Precision\nCalibrated Core.',
    tagline: 'High-density calibrated plywood engineered for precision interiors',
    image: vistaPlywood1Img,
    brandName: 'Vista',
    desc: 'Vista Calibrated Plywood features imported hardwood core veneers double-pressed to uniform thickness with zero core gaps for flawless joinery and cabinetry.',
    thicknesses: ['6mm', '9mm', '12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['100% Calibrated', 'Zero Core Gaps', 'BWP Marine Grade', 'Termite Resistant'],
    applications: ['Modular Kitchens', 'Wardrobes', 'Architectural Paneling', 'Luxury Furniture'],
    specs: {
      'Core Material': 'Imported Hardwood',
      'Thickness Tolerance': '± 0.2mm',
      'Bonding': 'Phenolic Formaldehyde (BWP)',
      'Warranty': '25 Years Warranty'
    },
    heroSub: 'DOUBLE HOT PRESSED. 100% CALIBRATED.',
    heroTitle: 'VISTA PLYWOOD',
    heroDesc: 'Vista Calibrated Plywood features imported hardwood core veneers double-pressed to uniform thickness with zero core gaps for flawless joinery and cabinetry.',
    heroTags: [
      { text: '100% Calibrated Core', icon: 'calibrate' },
      { text: 'Zero Core Gaps', icon: 'wood' },
      { text: 'BWP Marine Grade', icon: 'droplet' }
    ],
    overviewFeatures: [
      { title: '100% Calibrated', desc: 'Uniform thickness across all corners for flawless lamination', icon: 'calibrate' },
      { title: 'Selected Hardwood Core', desc: 'Double-pressed structural stability and superior screw holding', icon: 'wood' },
      { title: 'BWP Grade Resin', desc: 'Resists extreme boiling water and moisture conditions', icon: 'droplet' },
      { title: 'Termite & Borer Proof', desc: 'Chemically treated for complete pest defense', icon: 'bug' },
      { title: 'Zero Core Gaps', desc: 'Eliminates warping, bending, and internal hollow spots', icon: 'shield' }
    ]
  },
  {
    id: 951,
    brandId: 'vista-plywood-bwp',
    category: 'Plywood',
    pageNumLeft: 31,
    pageNumRight: 32,
    hideFromIndex: true,
    parentBrandId: 'vista-plywood',
    badge: 'Marine Grade',
    title: 'Marine Grade\nBWP Plywood.',
    tagline: 'Moisture defense calibrated ply for high-humidity areas',
    image: vistaPlywood2Img,
    brandName: 'Vista',
    desc: 'Treated with advanced phenolic resins to ensure uncompromised bonding even under continuous contact with moisture and steam in kitchen and bath casework.',
    thicknesses: ['12mm', '16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['BWP IS 710', 'Boiling Water Resistant', 'High Screw Holding'],
    applications: ['Wet Kitchens', 'Bathroom Vanities', 'Sink Base Units'],
    specs: {
      'Core Material': 'High-Density Hardwood',
      'Standard': 'IS 710 BWP',
      'Warranty': '25 Years Warranty'
    },
    heroSub: 'CERTIFIED BWP. MAXIMUM WATER DEFENSE.',
    heroTitle: 'VISTA BWP PLYWOOD',
    heroDesc: 'Treated with advanced phenolic resins to ensure uncompromised bonding even under continuous contact with moisture and steam in kitchen and bath casework.',
    heroTags: [
      { text: 'IS 710 Certified', icon: 'droplet' },
      { text: 'Zero Swelling', icon: 'shield' },
      { text: 'High Density', icon: 'wood' }
    ],
    overviewFeatures: [
      { title: 'Water Resistance', desc: 'Uncompromised phenolic bonding', icon: 'droplet' },
      { title: 'Heavy Load Strength', desc: 'Dense hardwood layers support heavy kitchen hardware', icon: 'wood' }
    ]
  },
  {
    id: 952,
    brandId: 'vista-plywood-structural',
    category: 'Plywood',
    pageNumLeft: 31,
    pageNumRight: 32,
    hideFromIndex: true,
    parentBrandId: 'vista-plywood',
    badge: 'Structural Core',
    title: 'Architectural\nStructural Ply.',
    tagline: 'Heavy-duty calibrated core for load-bearing joinery',
    image: vistaPlywood3Img,
    brandName: 'Vista',
    desc: 'Multi-layer calibrated architectural core designed for zero warping across tall wardrobe doors, executive office credenzas, and floor-to-ceiling partitions.',
    thicknesses: ['16mm', '19mm', '25mm'],
    defaultThickness: '19mm',
    features: ['Zero Warping', 'Calibrated ±0.2mm', 'Termite Treated'],
    applications: ['Full-Height Doors', 'Executive Credenzas', 'Partitions'],
    specs: {
      'Core': 'Multi-Layer Hardwood',
      'Calibration': 'Double Sanded',
      'Warranty': 'Lifetime Guarantee'
    },
    heroSub: 'ZERO WARPING. PRECISION ARCHITECTURAL CORE.',
    heroTitle: 'VISTA STRUCTURAL PLY',
    heroDesc: 'Multi-layer calibrated architectural core designed for zero warping across tall wardrobe doors, executive office credenzas, and floor-to-ceiling partitions.',
    heroTags: [
      { text: 'Zero Warping', icon: 'shield' },
      { text: 'Double Sanded', icon: 'calibrate' },
      { text: 'Lifetime Guarantee', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Zero Warping', desc: 'Engineered for tall shutters and large spans', icon: 'shield' },
      { title: 'Double Sanded Surface', desc: 'Ready for instant laminate or veneer application', icon: 'calibrate' }
    ]
  }
];
