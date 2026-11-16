import fancyDoorsImg from '../../assets/doors/fancydoors.png';
import fancyDoors2Img from '../../assets/doors/fancydoors2.png';
import fancyDoors3Img from '../../assets/doors/fancydoors3.png';
import fancyDoors4Img from '../../assets/doors/fancydoors4.png';
import designerDoorImg from '../../assets/doors/homepage-designerdoor.png';

export const doorsSpreads = [
  {
    id: 40,
    brandId: 'fancy-doors',
    category: 'Fancy Doors',
    pageNumLeft: 31,
    pageNumRight: 32,
    badge: 'Designer Collection',
    title: 'Designer\nDoors.',
    tagline: 'Designer doors for stylish spaces',
    image: fancyDoorsImg,
    brandName: 'Fancy Doors',
    desc: 'Premium solid core designer doors crafted with seasoned hardwoods, acoustic sound insulation, and luxury contemporary finishes.',
    thicknesses: ['30mm', '32mm', '35mm', '38mm', '40mm'],
    defaultThickness: '35mm',
    thicknessLabel: 'Standard Thicknesses',
    features: ['Solid Timber Core', 'Zero Warpage Guarantee', 'Termite & Borer Proof', 'Sound Insulating Core', 'BWP Resin Bonded'],
    applications: ['Main Entrance Doors', 'Bedroom Doors', 'Luxury Villas', 'Commercial Spaces', 'Pooja Room Doors'],
    specs: {
      'Core Type': 'Kiln-Seasoned Solid Pine',
      'Bonding Adhesive': 'BWP Phenolic Synthetic Resin',
      'Face Veneer': 'Natural Teak & Hardwood',
      'Moisture Content': '8% - 12% Seasoned Timber',
      'Warranty': '15 Years Guarantee',
      'Certification': 'IS: 2202 Flush Doors'
    },
    heroSub: 'DESIGNER DOORS FOR STYLISH SPACES',
    heroTitle: 'FANCY DOORS',
    heroDesc: 'Crafted with premium seasoned hardwoods and designer surface finishes, our luxury doors combine acoustic privacy, thermal stability, and timeless architectural aesthetics.',
    heroTags: [
      { text: 'Solid Timber Core', icon: 'wood' },
      { text: '100% Seasoned', icon: 'calibrate' },
      { text: '15-Year Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Solid Seasoned Core', desc: 'Kiln dried treated pine prevents warping & bending', icon: 'wood' },
      { title: 'BWP Resin Bonded', desc: 'Resin bonded under high heat & hydraulic pressure', icon: 'droplet' },
      { title: 'Sound Insulation', desc: 'High density internal core dampens sound & vibrations', icon: 'shield' },
      { title: 'Multiple Finishes', desc: 'Available in veneer, laminate, and polishable skins', icon: 'sparkles' },
      { title: 'Termite & Borer Proof', desc: 'Chemically vacuum impregnated against insects', icon: 'shield' }
    ]
  },
  {
    id: 42,
    brandId: 'modern-fancy-doors',
    category: 'Fancy Doors',
    pageNumLeft: 33,
    pageNumRight: 34,
    badge: 'Contemporary Series',
    title: 'Modern Laminated\nDoors.',
    tagline: 'Sleek architectural laminate finish for luxury residences',
    image: fancyDoors2Img,
    brandName: 'Modern Laminated Fancy Doors',
    desc: 'Pre-finished high-pressure decorative laminated doors with impact-resistant edges, scratch-proof surfaces, and zero maintenance requirements.',
    thicknesses: ['30mm', '32mm', '35mm', '38mm', '40mm'],
    defaultThickness: '35mm',
    thicknessLabel: 'Standard Thicknesses',
    features: ['Scratch & Stain Resistant', 'Zero Maintenance Surface', 'BWP Resin Bonded', 'Impact Resistant Edges', 'Calibrated Solid Core'],
    applications: ['Master Bedrooms', 'Luxury Apartments', 'Office Cabins', 'Hotel Rooms'],
    specs: {
      'Core Type': 'Calibrated Solid Pine Core',
      'Surface Finish': 'High-Pressure Decorative Laminate',
      'Bonding Adhesive': 'BWP Phenolic Resin',
      'Edge Protection': 'Solid Hardwood Lipping',
      'Warranty': '15 Years Guarantee',
      'Certification': 'IS: 2202 Flush Doors'
    },
    heroSub: 'PRE-FINISHED ARCHITECTURAL LAMINATE SURFACES',
    heroTitle: 'MODERN LAMINATED DOORS',
    heroDesc: 'Pre-finished high-pressure decorative laminated doors with impact-resistant edges, scratch-proof surfaces, and zero maintenance requirements.',
    heroTags: [
      { text: 'High-Pressure Laminate', icon: 'sparkles' },
      { text: 'Zero Maintenance', icon: 'shield' },
      { text: '15-Year Warranty', icon: 'wood' }
    ],
    overviewFeatures: [
      { title: 'Scratch & Stain Proof', desc: 'Pre-cured high-pressure laminate resists scuffs and marks', icon: 'shield' },
      { title: 'Calibrated Solid Core', desc: 'Uniform thickness prevents waviness and door warp', icon: 'calibrate' },
      { title: 'BWP Resin Bonded', desc: 'Synthetic resin bonding under high hydraulic pressure', icon: 'droplet' },
      { title: 'Impact Resistant Edges', desc: 'Solid wood edge lipping on all four perimeters', icon: 'wood' },
      { title: 'Ready to Install', desc: 'No painting or polishing needed, saving on-site labour', icon: 'sparkles' }
    ]
  },
  {
    id: 43,
    brandId: 'royal-fancy-doors',
    category: 'Fancy Doors',
    pageNumLeft: 35,
    pageNumRight: 36,
    badge: 'Royal Elegance',
    title: 'Luxury Veneered\nDoors.',
    tagline: 'Natural wood grains with bookmatched architectural symmetry',
    image: fancyDoors3Img,
    brandName: 'Luxury Veneered Fancy Doors',
    desc: 'Exquisite hand-selected natural exotic teak and walnut veneer doors protected with multi-layer UV polyurethane seal and acoustic core.',
    thicknesses: ['32mm', '35mm', '38mm', '40mm', '45mm'],
    defaultThickness: '38mm',
    thicknessLabel: 'Standard Thicknesses',
    features: ['Hand-Selected Veneers', 'Acoustic Sound Barrier', 'UV Polyurethane Seal', 'Smart Lock Compatible', 'Solid Hardwood Core'],
    applications: ['Luxury Villa Main Doors', 'Executive Suites', 'Living Areas', 'Pooja Rooms'],
    specs: {
      'Core Type': 'Selected Seasoned Hardwood',
      'Face Veneer': 'Exotic Teak & Walnut',
      'Surface Finish': 'Multi-Layer UV Polyurethane',
      'Sound Insulation': 'High Density Sound Barrier Core',
      'Warranty': '15 Years Guarantee',
      'Certification': 'IS: 2202 Flush Doors'
    },
    heroSub: 'NATURAL EXOTIC TEAK & WALNUT VENEERS',
    heroTitle: 'LUXURY VENEERED DOORS',
    heroDesc: 'Exquisite hand-selected natural exotic teak and walnut veneer doors protected with multi-layer UV polyurethane seal and acoustic core.',
    heroTags: [
      { text: 'Natural Teak Veneer', icon: 'wood' },
      { text: 'Acoustic Insulation', icon: 'shield' },
      { text: '15-Year Warranty', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Bookmatched Grains', desc: 'Symmetrical grain alignment for opulent aesthetics', icon: 'sparkles' },
      { title: 'Seasoned Hardwood Core', desc: 'Vacuum treated timber prevents warp and shrinking', icon: 'wood' },
      { title: 'UV Polyurethane Coat', desc: 'Shields natural wood against yellowing and sunlight', icon: 'droplet' },
      { title: 'Acoustic Barrier', desc: 'Internal core dampens external noise and vibration', icon: 'shield' },
      { title: 'Heavy Lock Ready', desc: 'Reinforced stile block supports electronic smart locks', icon: 'calibrate' }
    ]
  },
  {
    id: 44,
    brandId: 'architectural-fancy-doors',
    category: 'Fancy Doors',
    pageNumLeft: 37,
    pageNumRight: 38,
    badge: 'Elite Craft',
    title: 'Architectural Grooved\nDoors.',
    tagline: 'Precision engineered groove patterns & contemporary geometric styling',
    image: fancyDoors4Img,
    brandName: 'Architectural Grooved Fancy Doors',
    desc: 'Precision CNC routed geometric V-groove patterns on calibrated high-density faces with sprayable smooth surfaces and solid core.',
    thicknesses: ['32mm', '35mm', '38mm', '40mm', '45mm'],
    defaultThickness: '35mm',
    thicknessLabel: 'Standard Thicknesses',
    features: ['Precision CNC Routing', 'Solid Tubular/Timber Core', 'Smooth Sprayable Finish', 'Zero Shrinkage Core', 'BWP Bonded'],
    applications: ['Contemporary Homes', 'Apartment Interiors', 'Designer Bedrooms', 'Commercial Offices'],
    specs: {
      'Core Type': 'Calibrated Hardwood Core',
      'Groove Detailing': 'Precision CNC V-Groove Patterns',
      'Surface Finish': 'High-Density Skin with PU Coating',
      'Bonding Adhesive': 'BWP Synthetic Resin',
      'Warranty': '15 Years Guarantee',
      'Certification': 'IS: 2202 Flush Doors'
    },
    heroSub: 'PRECISION CNC GEOMETRIC DETAILING',
    heroTitle: 'ARCHITECTURAL GROOVED DOORS',
    heroDesc: 'Precision CNC routed geometric V-groove patterns on calibrated high-density faces with sprayable smooth surfaces and solid core.',
    heroTags: [
      { text: 'CNC V-Grooves', icon: 'calibrate' },
      { text: 'High Density Skin', icon: 'shield' },
      { text: '15-Year Warranty', icon: 'wood' }
    ],
    overviewFeatures: [
      { title: 'Precision CNC Milling', desc: 'Deep, crisp geometric patterns with uniform depth', icon: 'calibrate' },
      { title: 'Calibrated Hardwood Core', desc: 'Kiln dried timber blocks resist moisture fluctuations', icon: 'wood' },
      { title: 'High Density Face', desc: 'Ready for high gloss PU or ultra-matt spray finishes', icon: 'sparkles' },
      { title: 'Zero Shrinkage Core', desc: 'Pre-stabilized materials eliminate post-install gaps', icon: 'shield' },
      { title: 'BWP Resin Bonded', desc: 'Synthetic thermosetting resin for lifetime bond strength', icon: 'droplet' }
    ]
  },
  {
    id: 41,
    brandId: 'carved-timber-doors',
    category: 'Fancy Doors',
    pageNumLeft: 39,
    pageNumRight: 40,
    badge: 'Solid Timber',
    title: 'Carved\nTimber Doors.',
    tagline: 'Handcrafted solid wood doors with traditional & modern carvings',
    image: designerDoorImg,
    brandName: 'Carved Timber Doors',
    desc: 'Handcrafted solid timber doors featuring intricate architectural carvings, rich grain aesthetics, and exceptional structural durability for grand entrance ways.',
    thicknesses: ['35mm', '40mm', '45mm', '50mm'],
    defaultThickness: '40mm',
    thicknessLabel: 'Standard Thicknesses',
    features: ['100% Solid Teak/Hardwood', 'Handcrafted 3D Carvings', 'Weather Resistant Coating', 'Deep Grain Finish', 'Heavy-Duty Core'],
    applications: ['Grand Main Entrances', 'Bungalows & Villas', 'Pooja Rooms', 'Heritage Projects'],
    specs: {
      'Wood Species': 'Selected Burma Teak / Sal',
      'Carving Style': 'Architectural 3D Relief',
      'Surface Coating': 'Multi-Layer PU Polish',
      'Hardware Compatibility': 'Heavy Duty Mortise & Smart Locks',
      'Warranty': 'Lifetime Durability'
    },
    heroSub: 'SOLID TIMBER. TIMELESS ELEGANCE.',
    heroTitle: 'CARVED TIMBER DOORS',
    heroDesc: 'Handcrafted solid timber doors featuring intricate architectural carvings, rich grain aesthetics, and exceptional structural durability for grand entrance ways.',
    heroTags: [
      { text: 'Solid Burma Teak', icon: 'wood' },
      { text: '3D Relief Carving', icon: 'sparkles' },
      { text: 'Lifetime Durability', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '100% Solid Hardwood', desc: 'Sourced from genuine sustainable teak timber', icon: 'wood' },
      { title: 'Precision 3D Carvings', desc: 'High relief decorative CNC & hand carved details', icon: 'sparkles' },
      { title: 'Weather Shield PU', desc: 'UV and rainwater proof protective polish coat', icon: 'droplet' },
      { title: 'Heavy Duty Core', desc: 'Handles high traffic and heavy security hardware', icon: 'shield' },
      { title: 'Bespoke Sizing', desc: 'Customizable heights up to 10 feet for grand entries', icon: 'calibrate' }
    ]
  }
];
