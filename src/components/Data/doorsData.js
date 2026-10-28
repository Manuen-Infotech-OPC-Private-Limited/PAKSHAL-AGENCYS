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
    id: 41,
    brandId: 'carved-timber-doors',
    category: 'Fancy Doors',
    pageNumLeft: 33,
    pageNumRight: 34,
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
