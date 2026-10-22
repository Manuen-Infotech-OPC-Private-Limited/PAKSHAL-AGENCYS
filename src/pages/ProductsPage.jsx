import React, { useState, useEffect } from 'react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import { kitchenAccessoriesSpreads } from '../components/KitchenAccessories';
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
import plywoodImg from '../assets/plywood/royalclub.png';
import royalClubImg from '../assets/plywood/royalclub.png';
import royalClub2Img from '../assets/plywood/royalclub2.png';
import marineClubImg from '../assets/plywood/marineclub.png';
import laminatesImg from '../assets/laminates/laminate-marble-slabs.jpg';
import laminates2Img from '../assets/laminates/laminates2.png';
import laminates3Img from '../assets/laminates/laminates3.png';
import centuryLaminateImg from '../assets/laminates/century_laminate.jpg';
import greenLaminateImg from '../assets/laminates/green_laminate.jpg';
import marineLaminateImg from '../assets/laminates/marine_laminate.jpg';
import vistaLaminateImg from '../assets/laminates/vista_laminate.jpg';
import cromaLaminateImg from '../assets/laminates/croma_laminate.jpg';
import acrylicPanelsImg from '../assets/laminates/acrylicpanels.png';
import acrylicPanels2Img from '../assets/laminates/acrylicpanels2.png';
import acrylicPanels3Img from '../assets/laminates/acrylicpanels3.png';
import acrylicPanels4Img from '../assets/laminates/acrylicpanels4.png';
import acrylicPanels5Img from '../assets/laminates/acrylicpanels5.png';
import acrylicPanels6Img from '../assets/laminates/acrylicpanels6.png';
import hardwareImg from '../assets/hardware/hardwarefittings.png';
import accessoriesImg from '../assets/kitchen/kitchenaccessories.png';
import slidingChannelsImg from '../assets/hardware/slidingchannels.png';
import gurjanStarImg from '../assets/plywood/gurjanstar.png';
import gurjanGoldImg from '../assets/plywood/gurjangold.jpg';
import tandemBoxImg from '../assets/kitchen/tandembox.png';
import fancyDoorsImg from '../assets/doors/fancydoors.png';
import designerDoorImg from '../assets/doors/homepage-designerdoor.png';
import doorFittingsImg from '../assets/doors/door_fittings.png';
import plywoodKingImg from '../assets/plywood/plywood-image.png';
import veneer2Img from '../assets/plywood/veneer2.png';
import veneer3Img from '../assets/plywood/veneer3.png';
import veneer4Img from '../assets/plywood/veneer4.png';
import kitchensCardImg from '../assets/kitchen/kitchens-card.jpg';
import wardrobesCardImg from '../assets/furniture/wardrobes-card.jpg';
import officefurniture from '../assets/furniture/officefurniture.jpg';
import interiorpanels from '../assets/laminates/interiorpanels.png';
import hardwareFittings1 from '../assets/hardware/productspage-hardware&fittings.png';
import hydraulicHingeImg from '../assets/hardware/hydraulichinge.png';
import hardwareFittings2 from '../assets/hardware/productspage-hardware&fittings2.png';
import drawerChannelImg from '../assets/hardware/drawerchannel.jpg';
import hardwareFittings3 from '../assets/hardware/productspage-hardware&fittings3.png';
import kitchenBasketImg from '../assets/kitchen/kitchenbasket.jpg';
import hardwareFittings4 from '../assets/hardware/productspage-hardware&fittings4.png';
import tandemBoxNewImg from '../assets/kitchen/tandembox.jpg';
import hardwareFittings5 from '../assets/hardware/productspage-hardware&fittings5.png';
import hardwareFittings6 from '../assets/hardware/productspage-hardware&fittings6.png';
import hardwareFittings7 from '../assets/hardware/productspage-hardware&fittings7.png';
import astdaxHandles1 from '../assets/hardware/astdax-handles-1.jpg';
import astdaxHandles2 from '../assets/hardware/astdax-handles-2.jpg';
import conceal from '../assets/hardware/conceal.png';
import conceal2 from '../assets/hardware/conceal2.png';
import knob from '../assets/hardware/knob.png';
import knob2 from '../assets/hardware/knob2.png';
import curtain from '../assets/hardware/curtain.png';
import curtain2 from '../assets/hardware/curtain2.png';
import mortise from '../assets/hardware/mortise.png';
import support from '../assets/hardware/support.png';
import sofaleg from '../assets/hardware/sofaleg.png';
import others from '../assets/hardware/others.png';

const SPREADS = [
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
    id: 2,
    brandId: 'marine-club',
    category: 'Plywood',
    pageNumLeft: 5,
    pageNumRight: 6,
    badge: 'Marine Grade',
    title: 'Waterproof\nShield.',
    tagline: 'Defending against moisture and water damage',
    image: marineClubImg,
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
    id: 3,
    brandId: 'century-laminates',
    category: 'Laminates',
    pageNumLeft: 7,
    pageNumRight: 8,
    badge: 'Architectural Collection',
    title: 'Timeless\nElegance.',
    tagline: 'High-pressure decorative laminates for interior surfaces',
    image: laminatesImg,
    brandName: 'Century',
    desc: 'Century Laminates offer high-pressure scratch-resistant surfaces, rich textures, and superior color fastness.',
    thicknesses: ['0.8mm', '1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Scratch Resistant', 'UV Protection', 'Anti-Bacterial'],
    applications: ['Tabletops', 'Cabinets', 'Wall Paneling'],
    specs: {
      'Material': 'Phenolic Resin Kraft',
      'Surface Finish': 'Suede / Matt / Gloss',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'TIMELESS ELEGANCE. ARCHITECTURAL GRADE.',
    heroTitle: 'CENTURY',
    heroDesc: 'Century Laminates offer high-pressure scratch-resistant surfaces, rich textures, and superior color fastness for luxury spaces.',
    heroTags: [
      { text: 'Scratch Resistant', icon: 'sparkles' },
      { text: 'UV Protection', icon: 'shield' },
      { text: 'Anti-Bacterial', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Scratch Resistant', desc: 'Protective top wear layer', icon: 'sparkles' },
      { title: 'UV Protected', desc: 'Zero color fading under sunlight', icon: 'shield' },
      { title: 'Anti-Bacterial', desc: 'Hygienic surface protection', icon: 'sparkles' },
      { title: 'Heat Proof', desc: 'Resists hot items up to 180°C', icon: 'droplet' },
      { title: 'Eco Safe Kraft', desc: 'Non-toxic raw materials', icon: 'leaf' }
    ]
  },
  {
    id: 11,
    brandId: 'green-laminates',
    category: 'Laminates',
    pageNumLeft: 9,
    pageNumRight: 10,
    badge: 'Eco Luxury',
    title: 'Natural\nTeak.',
    tagline: 'Sustainable green laminates crafted with eco-resins',
    image: greenLaminateImg,
    brandName: 'Green',
    desc: 'Green Laminates combine eco-friendly raw materials with authentic wood grain aesthetics and high durability.',
    thicknesses: ['0.8mm', '1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Eco-Friendly Core', 'Natural Teak Texture', 'Stain Resistant'],
    applications: ['Kitchen Cabinets', 'Wardrobes', 'Office Desks'],
    specs: {
      'Material': 'Eco Phenolic Kraft',
      'Surface Finish': 'Natural Teak Matte',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'ECO LUXURY. NATURAL TEAK TEXTURE.',
    heroTitle: 'GREEN',
    heroDesc: 'Green Laminates combine eco-friendly raw materials with authentic wood grain aesthetics and high durability.',
    heroTags: [
      { text: 'Eco-Friendly Core', icon: 'leaf' },
      { text: 'Natural Teak', icon: 'wood' },
      { text: 'Stain Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Eco-Friendly', desc: 'Sourced from sustainable timber matrices', icon: 'leaf' },
      { title: 'Natural Grain', desc: 'Authentic warm teak finish', icon: 'wood' },
      { title: 'Stain Proof', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'High Durability', desc: 'Long-lasting structural surface', icon: 'calibrate' },
      { title: 'Zero Toxins', desc: 'Low VOC emission certified', icon: 'sparkles' }
    ]
  },
  {
    id: 14,
    brandId: 'marine-laminates',
    category: 'Laminates',
    pageNumLeft: 11,
    pageNumRight: 12,
    badge: 'Waterproof Grade',
    title: 'Oceanic\nMarble.',
    tagline: 'Moisture-proof laminates for high-humidity areas',
    image: marineLaminateImg,
    brandName: 'Marine',
    desc: 'Marine Laminates feature specialized waterproof resin backing and glossy stone marble patterns for wet areas and kitchens.',
    thicknesses: ['1.0mm', '1.2mm', '1.5mm'],
    defaultThickness: '1.0mm',
    features: ['Waterproof Resin', 'Oceanic Marble Pattern', 'High Gloss Finish'],
    applications: ['Kitchen Countertops', 'Bathroom Cabinets', 'Vanities'],
    specs: {
      'Material': 'Marine Resin Kraft',
      'Surface Finish': 'Glossy Oceanic Marble',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'WATERPROOF GRADE. OCEANIC MARBLE.',
    heroTitle: 'MARINE',
    heroDesc: 'Marine Laminates feature specialized waterproof resin backing and glossy stone marble patterns for wet areas and kitchens.',
    heroTags: [
      { text: 'Waterproof Resin', icon: 'droplet' },
      { text: 'Oceanic Marble', icon: 'sparkles' },
      { text: 'High Gloss', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Waterproof Resin', desc: '100% boiling-water-proof bond', icon: 'droplet' },
      { title: 'Marble Pattern', desc: 'Sleek oceanic stone aesthetics', icon: 'sparkles' },
      { title: 'High Gloss', desc: 'Reflective mirror-like shine', icon: 'sparkles' },
      { title: 'Scratch Proof', desc: 'Resists kitchen cookware scuffs', icon: 'shield' },
      { title: 'UV Stabilized', desc: 'Color remains vibrant over time', icon: 'shield' }
    ]
  },
  {
    id: 25,
    brandId: 'vista-laminates',
    category: 'Laminates',
    pageNumLeft: 13,
    pageNumRight: 14,
    badge: 'Contemporary Collection',
    title: 'Warm\nWalnut.',
    tagline: 'Sophisticated walnut wood grains for modern interiors',
    image: vistaLaminateImg,
    brandName: 'Vista',
    desc: 'Vista Laminates highlight deep walnut tones and golden grain accents, creating a warm and luxurious atmosphere.',
    thicknesses: ['0.8mm', '1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Warm Walnut Grain', 'Anti-Fingerprint', 'Impact Resistant'],
    applications: ['Executive Offices', 'Living Room Consoles', 'Feature Walls'],
    specs: {
      'Material': 'Phenolic Resin Kraft',
      'Surface Finish': 'Walnut Woodgrain',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'CONTEMPORARY STYLE. WARM WALNUT.',
    heroTitle: 'VISTA',
    heroDesc: 'Vista Laminates highlight deep walnut tones and golden grain accents, creating a warm and luxurious atmosphere.',
    heroTags: [
      { text: 'Warm Walnut', icon: 'wood' },
      { text: 'Anti-Fingerprint', icon: 'sparkles' },
      { text: 'Impact Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Walnut Texture', desc: 'Deep warm woodgrain details', icon: 'wood' },
      { title: 'Anti-Fingerprint', desc: 'Smudge-free ultra smooth feel', icon: 'sparkles' },
      { title: 'Impact Resistant', desc: 'High resistance to physical knocks', icon: 'shield' },
      { title: 'Thermal Stability', desc: 'Resists temperature shifts', icon: 'droplet' },
      { title: 'Easy Maintenance', desc: 'Cleans effortlessly with damp cloth', icon: 'sparkles' }
    ]
  },
  {
    id: 26,
    brandId: 'croma-laminates',
    category: 'Laminates',
    pageNumLeft: 15,
    pageNumRight: 16,
    badge: 'Metallic Series',
    title: 'Brushed\nCopper.',
    tagline: 'Ultra-modern metallic chrome laminates for futuristic design',
    image: cromaLaminateImg,
    brandName: 'Croma',
    desc: 'Croma Metallic Laminates deliver brushed copper and chrome textures, adding a high-tech industrial aesthetic to spaces.',
    thicknesses: ['0.8mm', '1.0mm'],
    defaultThickness: '1.0mm',
    features: ['Brushed Copper Finish', 'Metallic Texture', 'Scratch Resistant'],
    applications: ['Commercial Bar Countertops', 'Reception Desks', 'Accent Panels'],
    specs: {
      'Material': 'Metallic Foil & Phenolic Kraft',
      'Surface Finish': 'Brushed Copper Chrome',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'METALLIC SERIES. BRUSHED COPPER.',
    heroTitle: 'CROMA',
    heroDesc: 'Croma Metallic Laminates deliver brushed copper and chrome textures, adding a high-tech industrial aesthetic to spaces.',
    heroTags: [
      { text: 'Brushed Copper', icon: 'sparkles' },
      { text: 'Metallic Texture', icon: 'gear' },
      { text: 'Scratch Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Brushed Metallic', desc: 'Real copper foil surface layer', icon: 'sparkles' },
      { title: 'Industrial Design', desc: 'Futuristic metallic sheen', icon: 'gear' },
      { title: 'Scratch Proof', desc: 'Coated for heavy daily commercial use', icon: 'shield' },
      { title: 'Fire Retardant', desc: 'Enhanced fire resistance properties', icon: 'shield' },
      { title: 'Anti-Corrosion', desc: 'Protective top clear sealant layer', icon: 'droplet' }
    ]
  },
  {
    id: 4,
    brandId: 'armani',
    category: 'Acrylic Panels',
    pageNumLeft: 13,
    pageNumRight: 14,
    badge: 'Luxury Interiors',
    title: 'Luxury\nDesign.',
    tagline: 'Italian-inspired elegance for sophisticated spaces',
    image: acrylicPanelsImg,
    brandName: 'Armani',
    desc: 'Premium Italian-inspired decorative panels and textured laminates that bring timeless elegance to your interiors.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Luxury Matt Finish', 'Eco-Friendly Core', 'Stain Resistant'],
    applications: ['Living Rooms', 'Lobbies', 'Executive Desks'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'LUXURY INTERIORS. ITALIAN-INSPIRED ELEGANCE.',
    heroTitle: 'ARMANI',
    heroDesc: 'Premium Italian-inspired decorative panels and textured laminates that bring timeless elegance to your modern interiors.',
    heroTags: [
      { text: 'Luxury Matt Finish', icon: 'sparkles' },
      { text: 'Eco-Friendly Core', icon: 'wood' },
      { text: 'Stain Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Super Matt Finish', desc: 'Ultra smooth, low-glare elegance', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 13,
    brandId: 'armani-premium',
    category: 'Acrylic Panels',
    pageNumLeft: 15,
    pageNumRight: 16,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Exotic Finishes',
    title: 'Seamless\nReflection.',
    tagline: 'High-gloss acrylic panels for premium wardrobes',
    image: acrylicPanels2Img,
    brandName: 'Armani',
    desc: 'Offering high UV resistance and brilliant glass-like reflections, Armani Premium Acrylic panels are scratch-resistant and eco-friendly.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Glass-like Gloss', 'Scratch Resistant', 'UV Stabilized'],
    applications: ['Kitchen Shutters', 'Wardrobes', 'Wall Paneling'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'HIGH GLOSS. SEAMLESS REFLECTION.',
    heroTitle: 'ARMANI',
    heroDesc: 'Offering high UV resistance and brilliant glass-like reflections, Armani Premium Acrylic panels are scratch-resistant and eco-friendly.',
    heroTags: [
      { text: 'Glass-like Gloss', icon: 'sparkles' },
      { text: 'Scratch Resistant', icon: 'sparkles' },
      { text: 'UV Stabilized', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Glass-like Gloss', desc: 'Brilliant mirror-like reflections', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 15,
    brandId: 'armani-premium-3',
    category: 'Acrylic Panels',
    pageNumLeft: 17,
    pageNumRight: 18,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Elegant Collection',
    title: 'Elegant\nTextures.',
    tagline: 'Textured acrylic panels for sophisticated look',
    image: acrylicPanels3Img,
    brandName: 'Armani',
    desc: 'Offering textured matte finishes and excellent scratch resistance, Armani Textured Acrylic panels are perfect for modern living spaces.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Elegant Matte', 'Scratch Resistant', 'Highly Durable'],
    applications: ['Living Rooms', 'Accent Walls', 'Office Cabinetry'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'ELEGANT TEXTURES. REFINED STYLE.',
    heroTitle: 'ARMANI',
    heroDesc: 'Offering textured matte finishes and excellent scratch resistance, Armani Textured Acrylic panels are perfect for modern living spaces.',
    heroTags: [
      { text: 'Elegant Matte', icon: 'sparkles' },
      { text: 'Scratch Resistant', icon: 'sparkles' },
      { text: 'Highly Durable', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Elegant Matte', desc: 'Textured matte look and feel', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 16,
    brandId: 'armani-premium-4',
    category: 'Acrylic Panels',
    pageNumLeft: 19,
    pageNumRight: 20,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Vibrant Collection',
    title: 'Vibrant\nHues.',
    tagline: 'Bold and beautiful colors to elevate kitchen design',
    image: acrylicPanels4Img,
    brandName: 'Armani',
    desc: 'Armani Vibrant Acrylic panels bring dynamic colors and premium glass-like gloss, adding an energetic modern touch to kitchen cabinets.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Dynamic Colors', 'Glass-like Gloss', 'UV Resistant'],
    applications: ['Kitchen Cabinets', 'Wardrobes', 'Retail Fixtures'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'DYNAMIC COLORS. MIRROR SHINE.',
    heroTitle: 'ARMANI',
    heroDesc: 'Armani Vibrant Acrylic panels bring dynamic colors and premium glass-like gloss, adding an energetic modern touch to kitchen cabinets.',
    heroTags: [
      { text: 'Dynamic Colors', icon: 'sparkles' },
      { text: 'Glass-like Gloss', icon: 'sparkles' },
      { text: 'UV Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Dynamic Colors', desc: 'Rich, deep pigment saturation', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 17,
    brandId: 'armani-premium-5',
    category: 'Acrylic Panels',
    pageNumLeft: 21,
    pageNumRight: 22,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Contemporary Collection',
    title: 'Modern\nMinimalism.',
    tagline: 'Sleek, clean aesthetic for contemporary workspaces',
    image: acrylicPanels5Img,
    brandName: 'Armani',
    desc: 'Combining high-impact resistance with an anti-fingerprint surface, Armani Minimalist Acrylic panels are ideal for tables and desks.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Anti-Fingerprint', 'Sleek Minimal', 'Impact Resistant'],
    applications: ['Executive Desks', 'Tabletops', 'Wall Panels'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'ANTI-FINGERPRINT. MINIMAL DESIGN.',
    heroTitle: 'ARMANI',
    heroDesc: 'Combining high-impact resistance with an anti-fingerprint surface, Armani Minimalist Acrylic panels are ideal for tables and desks.',
    heroTags: [
      { text: 'Anti-Fingerprint', icon: 'sparkles' },
      { text: 'Sleek Minimal', icon: 'sparkles' },
      { text: 'Impact Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Anti-Fingerprint', desc: 'Stays clean and smudge-free', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 18,
    brandId: 'armani-premium-6',
    category: 'Acrylic Panels',
    pageNumLeft: 23,
    pageNumRight: 24,
    hideFromIndex: true,
    parentBrandId: 'armani',
    badge: 'Shield Collection',
    title: 'Ultimate\nDurability.',
    tagline: 'Extra-thick acrylic protection for high-traffic zones',
    image: acrylicPanels6Img,
    brandName: 'Armani',
    desc: 'Specifically engineered for maximum wear resistance, Armani Shield panels combine heavy-duty thickness with elegant surface depth.',
    thicknesses: ['1.0mm', '1.5mm', '4mm'],
    defaultThickness: '1.0mm',
    features: ['Extra-Thick Coat', 'Maximum Wear', 'Italian Quality'],
    applications: ['Showrooms', 'Lobbies', 'Luxury Furniture'],
    specs: {
      'Origin': 'Italian Design',
      'Core Material': 'Refined Acrylic',
      'Scratch Rating': '4H Hardness'
    },
    heroSub: 'MAXIMUM WEAR RESISTANCE. SHIELD COAT.',
    heroTitle: 'ARMANI',
    heroDesc: 'Specifically engineered for maximum wear resistance, Armani Shield panels combine heavy-duty thickness with elegant surface depth.',
    heroTags: [
      { text: 'Extra-Thick Coat', icon: 'sparkles' },
      { text: 'Maximum Wear', icon: 'sparkles' },
      { text: 'Italian Quality', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Shield Coating', desc: 'Enhanced surface protection film', icon: 'sparkles' },
      { title: 'Eco Friendly Core', desc: 'Sustainable backing material', icon: 'wood' },
      { title: 'Stain Resistant', desc: 'Wipes clean with simple cloth', icon: 'shield' },
      { title: 'Scratch Proof', desc: 'High-grade durable acrylic coat', icon: 'calibrate' },
      { title: 'German Tech', desc: 'Precision engineered sheets', icon: 'gear' }
    ]
  },
  {
    id: 5,
    brandId: 'architecture',
    category: 'Veneers',
    pageNumLeft: 25,
    pageNumRight: 26,
    badge: 'Exotic Timber',
    title: 'Natural\nGrains.',
    tagline: 'Handpicked real wood veneers for architectural wonders',
    image: veneer2Img,
    brandName: 'Architecture',
    desc: 'Exquisite hand-selected natural wood veneers featuring rich textures and authentic wood grains from sustainable forests.',
    thicknesses: ['0.5mm', '4mm', '6mm'],
    defaultThickness: '0.5mm',
    features: ['Group Matched Grains', 'Natural Timber', 'Easy Polishable'],
    applications: ['High-end Furniture', 'Main Doors', 'Wall Feature Panels'],
    specs: {
      'Wood Group': 'Exotic Hardwoods',
      'Backing Paper': 'Fleece Backed',
      'Finish Options': 'Matt / High Gloss'
    },
    heroSub: 'NATURAL GRAINS. EXOTIC TIMBERS.',
    heroTitle: 'ARCHITECTURE',
    heroDesc: 'Exquisite hand-selected natural wood veneers featuring rich textures and authentic wood grains from sustainable forests.',
    heroTags: [
      { text: 'Group Matched Grains', icon: 'wood' },
      { text: 'Natural Timber', icon: 'wood' },
      { text: 'Easy Polishable', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Exotic Hardwoods', desc: 'Exquisite natural timber choice', icon: 'wood' },
      { title: 'Real Wood Grains', desc: 'Unique, authentic natural textures', icon: 'sparkles' },
      { title: 'Group Matched', desc: 'Symmetric sheet pattern layout', icon: 'calibrate' },
      { title: 'Easy Polishable', desc: 'Highly compatible with PU coat', icon: 'sparkles' },
      { title: 'Green Sourced', desc: '100% certified logging wood', icon: 'leaf' }
    ]
  },
  {
    id: 19,
    brandId: 'architecture-premium-2',
    category: 'Veneers',
    pageNumLeft: 27,
    pageNumRight: 28,
    hideFromIndex: true,
    parentBrandId: 'architecture',
    badge: 'Luxury Woods',
    title: 'Exotic\nHardwoods.',
    tagline: 'Premium imported wood veneers for designer furniture',
    image: veneer2Img,
    brandName: 'Architecture',
    desc: 'Handpicked exotic wood veneers boasting striking patterns and rich color tones, sourced from sustainable global timber tracks.',
    thicknesses: ['0.5mm', '4mm', '6mm'],
    defaultThickness: '0.5mm',
    features: ['Striking Patterns', 'Exotic Hardwoods', 'High Stability'],
    applications: ['Luxury Furniture', 'Wall Paneling', 'Main Doors'],
    specs: {
      'Wood Group': 'Premium Exotic Hardwoods',
      'Backing Paper': 'Fleece Backed',
      'Finish Options': 'Matt / High Gloss'
    },
    heroSub: 'EXOTIC WOODS. STRIKING PATTERNS.',
    heroTitle: 'ARCHITECTURE',
    heroDesc: 'Handpicked exotic wood veneers boasting striking patterns and rich color tones, sourced from sustainable global timber tracks.',
    heroTags: [
      { text: 'Striking Patterns', icon: 'wood' },
      { text: 'Exotic Hardwoods', icon: 'wood' },
      { text: 'High Stability', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Exotic Hardwoods', desc: 'Exquisite natural timber choice', icon: 'wood' },
      { title: 'Real Wood Grains', desc: 'Unique, authentic natural textures', icon: 'sparkles' },
      { title: 'Group Matched', desc: 'Symmetric sheet pattern layout', icon: 'calibrate' },
      { title: 'Easy Polishable', desc: 'Highly compatible with PU coat', icon: 'sparkles' },
      { title: 'Green Sourced', desc: '100% certified logging wood', icon: 'leaf' }
    ]
  },
  {
    id: 20,
    brandId: 'architecture-premium-3',
    category: 'Veneers',
    pageNumLeft: 29,
    pageNumRight: 30,
    hideFromIndex: true,
    parentBrandId: 'architecture',
    badge: 'Elite Collection',
    title: 'Flawless\nFinishes.',
    tagline: 'Sanded smooth to perfection for effortless polishing',
    image: veneer3Img,
    brandName: 'Architecture',
    desc: 'Pre-sanded and fleece-backed, Architecture Elite Veneers provide maximum durability and ease of polishing for premium modular components.',
    thicknesses: ['0.5mm', '4mm', '6mm'],
    defaultThickness: '0.5mm',
    features: ['Pre-Sanded Smooth', 'Fleece Backed', 'Effortless Polish'],
    applications: ['Kitchen Cabinets', 'Wardrobe Shutters', 'Executive Desks'],
    specs: {
      'Wood Group': 'Select European Timber',
      'Backing Paper': 'Fleece Backed',
      'Finish Options': 'Matt / High Gloss'
    },
    heroSub: 'PRE-SANDED SMOOTH. FLEECE BACKED.',
    heroTitle: 'ARCHITECTURE',
    heroDesc: 'Pre-sanded and fleece-backed, Architecture Elite Veneers provide maximum durability and ease of polishing for premium modular components.',
    heroTags: [
      { text: 'Pre-Sanded Smooth', icon: 'wood' },
      { text: 'Fleece Backed', icon: 'wood' },
      { text: 'Effortless Polish', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Exotic Hardwoods', desc: 'Exquisite natural timber choice', icon: 'wood' },
      { title: 'Real Wood Grains', desc: 'Unique, authentic natural textures', icon: 'sparkles' },
      { title: 'Group Matched', desc: 'Symmetric sheet pattern layout', icon: 'calibrate' },
      { title: 'Easy Polishable', desc: 'Highly compatible with PU coat', icon: 'sparkles' },
      { title: 'Green Sourced', desc: '100% certified logging wood', icon: 'leaf' }
    ]
  },
  {
    id: 21,
    brandId: 'architecture-premium-4',
    category: 'Veneers',
    pageNumLeft: 31,
    pageNumRight: 32,
    hideFromIndex: true,
    parentBrandId: 'architecture',
    badge: 'Artisan Selection',
    title: 'Timeless\nElegance.',
    tagline: 'Distinctive architectural veneers that stand out',
    image: veneer4Img,
    brandName: 'Architecture',
    desc: 'Featuring unique burl patterns and figure grains, our Artisan collection veneers are designed to create focus areas in luxury residences.',
    thicknesses: ['0.5mm', '4mm', '6mm'],
    defaultThickness: '0.5mm',
    features: ['Unique Burl Grains', 'Figure Grains', 'Timeless Appeal'],
    applications: ['Feature Walls', 'TV Consoles', 'Main Entrance Doors'],
    specs: {
      'Wood Group': 'Artisan Selection Burl',
      'Backing Paper': 'Fleece Backed',
      'Finish Options': 'Matt / High Gloss'
    },
    heroSub: 'UNIQUE BURL GRAINS. TIMELSS APPEAL.',
    heroTitle: 'ARCHITECTURE',
    heroDesc: 'Featuring unique burl patterns and figure grains, our Artisan collection veneers are designed to create focus areas in luxury residences.',
    heroTags: [
      { text: 'Unique Burl Grains', icon: 'wood' },
      { text: 'Figure Grains', icon: 'wood' },
      { text: 'Timeless Appeal', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Exotic Hardwoods', desc: 'Exquisite natural timber choice', icon: 'wood' },
      { title: 'Real Wood Grains', desc: 'Unique, authentic natural textures', icon: 'sparkles' },
      { title: 'Group Matched', desc: 'Symmetric sheet pattern layout', icon: 'calibrate' },
      { title: 'Easy Polishable', desc: 'Highly compatible with PU coat', icon: 'sparkles' },
      { title: 'Green Sourced', desc: '100% certified logging wood', icon: 'leaf' }
    ]
  },
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
  },
  {
    id: 6,
    brandId: 'steel-wood',
    category: 'Architectural Hardware',
    pageNumLeft: 33,
    pageNumRight: 34,
    badge: 'Precision Hardware',
    title: 'Perfect\nEngineering.',
    tagline: 'Heavy-duty architectural hardware built to last',
    image: hardwareImg,
    brandName: 'Steel Wood',
    desc: 'Heavy-duty cabinet hinges, drawer runners, and modular fittings designed for silent operation and longevity.',
    thicknesses: ['Standard', 'Heavy Duty'],
    defaultThickness: 'Heavy Duty',
    features: ['Soft-Close Cushioning', 'Rust-Proof SS 304', 'Cycle Tested 100k+'],
    applications: ['Kitchen Drawers', 'Wardrobe Doors', 'Pantry Units'],
    specs: {
      'Material Grade': 'SS 304 Stainless Steel',
      'Load Capacity': 'Up to 45 kg',
      'Opening Angle': '110 Degrees'
    },
    heroSub: 'PRECISION ENGINEERING. PERFECT FUNCTIONALITY.',
    heroTitle: 'STEEL WOOD',
    heroDesc: 'Heavy-duty cabinet hinges, drawer runners, and modular fittings designed for silent operation, soft-close, and lifelong durability.',
    heroTags: [
      { text: 'Soft-Close Cushioning', icon: 'gear' },
      { text: 'SS 304 Grade', icon: 'gear' },
      { text: 'Cycle Tested 100k+', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Soft-Close Tech', desc: 'Quiet and smooth hydraulic dampening', icon: 'gear' },
      { title: 'SS 304 Grade', desc: 'Maximum rust and corrosion resistance', icon: 'gear' },
      { title: '100k Cycle Tested', desc: 'Built to withstand lifetime usage', icon: 'shield' },
      { title: 'Heavy Load Capacity', desc: 'Holds up to 45 kg weight easily', icon: 'calibrate' },
      { title: 'Modern Styling', desc: 'Sleek look for modular interiors', icon: 'sparkles' }
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
    image: plywoodImg,
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
    id: 8,
    brandId: 'gurjan-king',
    category: 'Plywood',
    pageNumLeft: 37,
    pageNumRight: 38,
    badge: 'Premium Calibrated',
    title: 'The King of\nPlywoods.',
    tagline: 'Double-pressed flat surfaces for modular designs',
    image: plywoodKingImg,
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
      { title: 'Screw Holding', desc: 'Superior grip strength for hinges', icon: 'gear' },
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
    image: gurjanGoldImg,
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
    id: 9,
    brandId: 'hydraulic-hinge',
    category: 'Hardware&Fittings',
    pageNumLeft: 39,
    pageNumRight: 40,
    badge: 'Soft-Close Mechanism',
    title: 'Silent\nMovement.',
    tagline: 'Premium auto-close hydraulic hinges',
    image: hydraulicHingeImg,
    brandName: 'Hydraulic Hinge',
    desc: 'Premium grade auto-close hydraulic hinges crafted with high-strength stainless steel. Designed for silent cushioning and durable cabinetry operation.',
    thicknesses: ['Standard', 'Heavy Duty'],
    defaultThickness: 'Standard',
    features: ['Hydraulic Dampening', 'SS 304 Construction', '100k Cycle Tested'],
    applications: ['Kitchen Cabinets', 'Wardrobe Shutters', 'Office Cabinets'],
    specs: {
      'Material': 'SS 304 Stainless Steel',
      'Opening Angle': '110 Degrees',
      'Mounting Type': 'Clip-on Base'
    },
    heroSub: 'SOFT-CLOSE MECHANISM. SILENT MOVEMENT.',
    heroTitle: 'HYDRAULIC HINGE',
    heroDesc: 'Premium grade auto-close hydraulic hinges crafted with high-strength stainless steel. Designed for silent cushioning and durable cabinetry operation.',
    heroTags: [
      { text: 'Soft-Close Dampening', icon: 'gear' },
      { text: 'SS 304 Grade', icon: 'shield' },
      { text: '100k Cycles Tested', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Hydraulic Cushioning', desc: 'Slam-free smooth soft closing', icon: 'gear' },
      { title: 'Rust Proof SS 304', desc: 'Maximum durability in humid conditions', icon: 'shield' },
      { title: 'Full Overlay Design', desc: 'Perfect clean alignment for doors', icon: 'calibrate' },
      { title: '100k Cycle Tested', desc: 'Engineered for decades of reliable use', icon: 'shield' },
      { title: 'Easy Installation', desc: 'Clip-on mechanism for quick mounts', icon: 'gear' }
    ]
  },
  {
    id: 13,
    brandId: 'drawer-channel',
    category: 'Hardware&Fittings',
    pageNumLeft: 41,
    pageNumRight: 42,
    badge: 'Precision Slides',
    title: 'Smooth\nGlide.',
    tagline: 'Telescopic ball-bearing drawer slides',
    image: drawerChannelImg,
    brandName: 'Drawer Channel',
    desc: 'Heavy-duty telescopic drawer runners with precision ball-bearings, soft-close cushioning, and full extension travel for heavy drawers.',
    thicknesses: ['35kg Rating', '45kg Rating'],
    defaultThickness: '45kg Rating',
    features: ['Full Extension Travel', 'Soft-Close Mechanism', 'Carbon Steel Body'],
    applications: ['Kitchen Drawers', 'Office Storage', 'Modular Closets'],
    specs: {
      'Slide Type': 'Telescopic Ball-bearing',
      'Weight Capacity': '45 kg',
      'Extension': 'Full Extension'
    },
    heroSub: 'PRECISION SLIDES. SMOOTH GLIDE.',
    heroTitle: 'DRAWER CHANNEL',
    heroDesc: 'Heavy-duty telescopic drawer runners with precision ball-bearings, soft-close cushioning, and full extension travel for heavy modular drawer units.',
    heroTags: [
      { text: 'Full Extension', icon: 'calibrate' },
      { text: 'Soft-Close Action', icon: 'gear' },
      { text: '45kg Load Rating', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Telescopic Action', desc: 'Three-fold smooth full extension slides', icon: 'calibrate' },
      { title: 'Soft-Close Dampener', desc: 'Prevents rebound and closes silently', icon: 'gear' },
      { title: 'Hardened Steel Balls', desc: 'Maintains lateral stability under load', icon: 'shield' },
      { title: '45kg Weight Support', desc: 'Holds heavy cookware baskets with ease', icon: 'shield' },
      { title: 'Quick Release Lever', desc: 'Easy drawer removal and cleaning access', icon: 'gear' }
    ]
  },
  {
    id: 14,
    brandId: 'kitchen-basket',
    category: 'Hardware&Fittings',
    pageNumLeft: 43,
    pageNumRight: 44,
    badge: 'Modular Kitchen',
    title: 'Organized\nSpaces.',
    tagline: 'Stainless steel modular wire basket systems',
    image: kitchenBasketImg,
    brandName: 'Kitchen Basket',
    desc: 'Premium food-grade stainless steel modular kitchen baskets designed for plate storage, cup-saucer organization, and utensil load distribution.',
    thicknesses: ['Wire Basket', 'Perforated Sheet'],
    defaultThickness: 'Wire Basket',
    features: ['Anti-Rust Chrome', 'Easy to Clean', 'High Load Capacity'],
    applications: ['Under-counter Storage', 'Pantry Organizers', 'Pull-out Units'],
    specs: {
      'Basket Material': 'SS 304 Food-grade',
      'Finish Type': 'Chrome Electroplated',
      'Rust Resistance': 'Lifetime Warranty'
    },
    heroSub: 'MODULAR KITCHEN. ORGANIZED SPACES.',
    heroTitle: 'KITCHEN BASKET',
    heroDesc: 'Premium food-grade stainless steel modular kitchen baskets designed for plate storage, cup-saucer organization, and heavy modular kitchen setups.',
    heroTags: [
      { text: 'Anti-Rust Chrome', icon: 'sparkles' },
      { text: 'Food-grade SS 304', icon: 'shield' },
      { text: 'High Load Capacity', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'SS 304 Food-grade', desc: 'Completely safe and hygienic structure', icon: 'shield' },
      { title: 'Electroplated Chrome', desc: 'Mirror finish with extreme scratch resistance', icon: 'sparkles' },
      { title: 'Heavy Wire Mesh', desc: 'Deep welds for structural load bearing', icon: 'wood' },
      { title: 'Easy Slide Mounts', desc: 'Seamlessly compatible with telescopic runners', icon: 'gear' },
      { title: 'Optimum Ventilation', desc: 'Open mesh prevents moisture and odors', icon: 'droplet' }
    ]
  },
  {
    id: 15,
    brandId: 'tandem-box',
    category: 'Hardware&Fittings',
    pageNumLeft: 45,
    pageNumRight: 46,
    badge: 'Double-wall System',
    title: 'Luxury\nDrawers.',
    tagline: 'Premium double-wall modular drawer system',
    image: tandemBoxNewImg,
    brandName: 'Tandem Box',
    desc: 'German-engineered double-wall metal drawer systems with synchronized smooth action runners, built-in soft-close dampeners, and sleek modern side profile walls.',
    thicknesses: ['Slimline Wall', 'Standard Metal Wall'],
    defaultThickness: 'Standard Metal Wall',
    features: ['Synchronized Movement', 'Soft-Close Silent', 'Premium Metallic Sides'],
    applications: ['High-end Kitchens', 'Premium Closets', 'Luxury Office Credenzas'],
    specs: {
      'System Type': 'Double-Wall Metallic Drawer',
      'Dynamic Capacity': '65 kg',
      'Height Options': '90mm / 180mm'
    },
    heroSub: 'DOUBLE-WALL SYSTEM. LUXURY DRAWERS.',
    heroTitle: 'TANDEM BOX',
    heroDesc: 'German-engineered double-wall metal drawer systems with synchronized smooth action runners, built-in soft-close dampeners, and sleek modern side profile walls.',
    heroTags: [
      { text: 'Synchronized Run', icon: 'gear' },
      { text: '65kg Dynamic Load', icon: 'shield' },
      { text: 'Soft-Close Silent', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Sleek Double-Wall', desc: 'Saves internal space with ultra-thin profiles', icon: 'calibrate' },
      { title: 'Synchronized Slide', desc: 'Fluid movement without sag or friction', icon: 'gear' },
      { title: '65kg Dynamic Load', desc: 'Built for very heavy drawer drawer units', icon: 'shield' },
      { title: 'Soft-Close System', desc: 'Hydraulic mechanism for silent cushioning', icon: 'gear' },
      { title: 'Modern Colors', desc: 'Anthracite, grey, and metallic white finishes', icon: 'sparkles' }
    ]
  },
  {
    id: 16,
    brandId: 'corner-carousel',
    category: 'Hardware&Fittings',
    pageNumLeft: 47,
    pageNumRight: 48,
    badge: 'Space Optimization',
    title: 'Maximum\nAccess.',
    tagline: 'Blind corner swing-out shelf organizer',
    image: hardwareFittings5,
    brandName: 'Corner Carousel',
    desc: 'Innovative blind corner hardware systems designed to maximize kitchen corner cabinets, providing easy swing-out access to deep shelves.',
    thicknesses: ['Left Hand Swing', 'Right Hand Swing'],
    defaultThickness: 'Right Hand Swing',
    features: ['Anti-slip Shelves', 'Full Swing-out Mechanism', 'Soft-Close Swing Action'],
    applications: ['Blind Corner Cabinets', 'Deep Corner Pantries', 'L-shaped Kitchens'],
    specs: {
      'Shelf Type': 'Anti-slip Wooden / Wire Shelves',
      'Shelves Count': '2 Rotary Shelves',
      'Weight Capacity': '20 kg per shelf'
    },
    heroSub: 'SPACE OPTIMIZATION. MAXIMUM ACCESS.',
    heroTitle: 'CORNER CAROUSEL',
    heroDesc: 'Innovative blind corner hardware systems designed to maximize kitchen corner cabinets, providing easy swing-out access to deep shelves.',
    heroTags: [
      { text: 'Anti-slip Shelves', icon: 'sparkles' },
      { text: 'Full Swing-out', icon: 'calibrate' },
      { text: '20kg per Shelf', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Swing-out Access', desc: 'Brings all stored items out of the corner cabinet', icon: 'calibrate' },
      { title: 'Anti-slip Surface', desc: 'Keeps kitchenware securely in place during rotation', icon: 'sparkles' },
      { title: 'Height Adjustable', desc: 'Shelves can be raised or lowered to fit tall items', icon: 'gear' },
      { title: '20kg Capacity', desc: 'Strong steel support arms hold heavy cookware', icon: 'shield' },
      { title: 'Soft Closing Swing', desc: 'Pulls back into the cabinet with gentle dampening', icon: 'gear' }
    ]
  },
  {
    id: 22,
    brandId: 'astdax-hardwares',
    category: 'Hardware&Fittings',
    pageNumLeft: 51,
    pageNumRight: 52,
    badge: 'Premium Handles',
    title: 'Designer\nHandles.',
    tagline: 'Premium zinc alloy cabinet pulls with multi-finish options',
    image: astdaxHandles1,
    brandName: 'Astdax Hardwares',
    desc: 'Precision-crafted zinc alloy cabinet handles available in elegant multi-tone finishes. Perfect for modular kitchens, wardrobes, and premium furniture.',
    thicknesses: ['96 mm', '160 mm', '224 mm'],
    defaultThickness: '160 mm',
    features: ['Zinc Alloy Body', 'Multi-Tone Finish', 'Anti-Corrosion Coat'],
    applications: ['Kitchen Cabinets', 'Wardrobe Shutters', 'Furniture Drawers'],
    specs: {
      'Size (mm)': '96 | 160 | 224',
      'Finish': 'Rosegold-Black | Gold-Antique | Cp-Satin',
      'Surface Treatment': 'Electroplated Multi-Tone'
    },
    heroSub: 'PREMIUM HANDLES. DESIGNER FINISH.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Precision-crafted zinc alloy cabinet handles available in Rosegold-Black, Gold-Antique, and Cp-Satin finishes. A perfect complement to any modular kitchen or wardrobe.',
    heroTags: [
      { text: 'Zinc Alloy Body', icon: 'gear' },
      { text: 'Multi-Tone Finish', icon: 'sparkles' },
      { text: 'Anti-Corrosion', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Zinc Alloy Body', desc: 'Strong, lightweight precision casting', icon: 'gear' },
      { title: 'Multi-Tone Finish', desc: 'Rosegold-Black, Gold-Antique, Cp-Satin', icon: 'sparkles' },
      { title: 'Anti-Corrosion', desc: 'Long-lasting electroplated surface coat', icon: 'shield' },
      { title: 'Easy Install', desc: 'Standard screw spacing for quick fitting', icon: 'calibrate' },
      { title: 'Modern Design', desc: 'Sleek geometric profile for luxury look', icon: 'sparkles' }
    ]
  },
  {
    id: 23,
    brandId: 'astdax-hardwares-2',
    category: 'Hardware&Fittings',
    pageNumLeft: 53,
    pageNumRight: 54,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Premium Collection',
    title: 'Fusion\nHandles.',
    tagline: 'Dual-material fusion handles with wood & metal combination',
    image: astdaxHandles2,
    brandName: 'Astdax Hardwares',
    desc: 'Dual-material fusion cabinet handles combining premium zinc alloy with wood-effect inserts. Ideal for contemporary and transitional interior styles.',
    thicknesses: ['96 mm', '160 mm'],
    defaultThickness: '160 mm',
    thicknessLabel: 'Available Sizes (mm)',
    features: ['Dual-Material Design', 'Wood-Effect Insert', 'Premium Chrome Base'],
    applications: ['Modular Kitchens', 'Luxury Wardrobes', 'Designer Furniture'],
    specs: {
      'Size (mm)': '96 | 160',
      'Surface Treatment': 'Chrome Electroplated',
      'Style': 'Contemporary Fusion'
    },
    heroSub: 'FUSION DESIGN. PREMIUM HANDLES.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Dual-material fusion handles combining zinc alloy and wood-effect inserts for a warm, contemporary look. Available in 96mm and 160mm sizes.',
    heroTags: [
      { text: 'Dual-Material', icon: 'gear' },
      { text: 'Wood-Effect Insert', icon: 'wood' },
      { text: 'Chrome Base', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Dual-Material Body', desc: 'Zinc alloy frame with wood insert', icon: 'gear' },
      { title: 'Wood Effect Insert', desc: 'Warm natural texture contrast', icon: 'wood' },
      { title: 'Chrome Plated', desc: 'Polished chrome electroplated finish', icon: 'sparkles' },
      { title: 'Easy Install', desc: 'Standard screw spacing for quick fitting', icon: 'calibrate' },
      { title: 'Contemporary Look', desc: 'Perfect for modern modular kitchens', icon: 'sparkles' }
    ]
  },
  {
    id: 24,
    brandId: 'astdax-conceal',
    category: 'Hardware&Fittings',
    pageNumLeft: 55,
    pageNumRight: 56,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Conceal Handles',
    title: 'Conceal\nHandles.',
    tagline: 'Sleek recessed conceal handles with multi-finish options',
    image: conceal,
    brandName: 'Astdax Hardwares',
    desc: 'Premium zinc alloy concealed cabinet handles designed for seamless recessed installation with Satin-Rosegold, Antique-Gold, and Black-Gold finishes.',
    thicknesses: ['96 mm', '160 mm', '224 mm'],
    defaultThickness: '160 mm',
    thicknessLabel: 'Available Sizes (mm)',
    features: ['Recessed Flush Mount', 'Zinc Alloy Body', 'Anti-Corrosion Coating'],
    applications: ['Modular Kitchens', 'Wardrobe Shutters', 'Cabinet Drawers'],
    specs: {
      'Size (mm)': '96 | 160 | 224',
      'Finish': 'Satin-Rosegold | Antique-Gold | Black-Gold',
      'Mounting Type': 'Recessed / Flush Fit'
    },
    heroSub: 'CONCEAL HANDLES. RECESSED DESIGN.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Premium zinc alloy concealed cabinet handles available in Satin-Rosegold, Antique-Gold, and Black-Gold finishes across 96mm, 160mm, and 224mm sizes.',
    heroTags: [
      { text: 'Recessed Fit', icon: 'gear' },
      { text: 'Multi-Finish', icon: 'sparkles' },
      { text: 'Zinc Alloy', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Flush Mount', desc: 'Sits completely flush with shutter surface', icon: 'gear' },
      { title: 'Premium Finishes', desc: 'Satin-Rosegold, Antique-Gold, Black-Gold', icon: 'sparkles' },
      { title: 'Multi-Size Options', desc: 'Available in 96mm, 160mm, and 224mm', icon: 'calibrate' },
      { title: 'Durability', desc: 'Electroplated surface against tarnishing', icon: 'shield' }
    ]
  },
  {
    id: 25,
    brandId: 'astdax-conceal-2',
    category: 'Hardware&Fittings',
    pageNumLeft: 57,
    pageNumRight: 58,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Conceal Handles II',
    title: 'Conceal\nHandles II.',
    tagline: 'Dual-tone recessed conceal handles',
    image: conceal2,
    brandName: 'Astdax Hardwares',
    desc: 'Sophisticated dual-finish conceal handles offering superior flush aesthetic in Rosegold-Black, Gold-Black, and Black-Gold finishes.',
    thicknesses: ['96 mm', '160 mm', '224 mm'],
    defaultThickness: '160 mm',
    thicknessLabel: 'Available Sizes (mm)',
    features: ['Dual-Tone Finish', 'Seamless Flush Mount', 'Scratch Resistant Coat'],
    applications: ['Luxury Wardrobes', 'Kitchen Shutters', 'Modern Furniture'],
    specs: {
      'Size (mm)': '96 | 160 | 224',
      'Finish': 'Rosegold-Black | Gold-Black | Black-Gold',
      'Surface Treatment': 'Electroplated Dual Finish'
    },
    heroSub: 'CONCEAL HANDLES II. DUAL FINISH.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Sophisticated dual-finish conceal handles available in Rosegold-Black, Gold-Black, and Black-Gold finishes for luxury interiors.',
    heroTags: [
      { text: 'Dual-Tone', icon: 'sparkles' },
      { text: 'Flush Fit', icon: 'gear' },
      { text: '96/160/224 mm', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Dual-Finish Elegance', desc: 'Rosegold-Black, Gold-Black, Black-Gold', icon: 'sparkles' },
      { title: 'Seamless Flush', desc: 'Modern minimalist profile', icon: 'gear' },
      { title: 'Precision Cast', desc: 'Solid zinc alloy durability', icon: 'shield' }
    ]
  },
  {
    id: 26,
    brandId: 'astdax-curtain',
    category: 'Hardware&Fittings',
    pageNumLeft: 59,
    pageNumRight: 60,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Curtain Brackets',
    title: 'Curtain\nBrackets.',
    tagline: 'Designer curtain rod supports & finials',
    image: curtain,
    brandName: 'Astdax Hardwares',
    desc: 'Heavy-duty architectural curtain brackets crafted for elegant drapery support in CP, Antique, Rosegold, and Copper finishes.',
    thicknesses: ['CP', 'Antique', 'Rosegold', 'Copper'],
    defaultThickness: 'CP',
    thicknessLabel: 'Available Finishes',
    features: ['Heavy-Duty Support', 'Precision Electroplated', 'Easy Wall Mount'],
    applications: ['Living Room Curtains', 'Bedroom Drapery', 'Office Windows'],
    specs: {
      'Finish': 'CP | Antique | Rosegold | Copper',
      'Mounting Type': 'Wall Flange Mount',
      'Compatibility': 'Standard Drapery Rods'
    },
    heroSub: 'CURTAIN BRACKETS. DESIGNER FINISH.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Heavy-duty curtain brackets designed for stylish drape support in CP, Antique, Rosegold, and Copper finishes.',
    heroTags: [
      { text: 'Heavy Load', icon: 'shield' },
      { text: 'Multi-Finish', icon: 'sparkles' },
      { text: 'Wall Mount', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'High Load Support', desc: 'Supports heavy fabric curtains securely', icon: 'shield' },
      { title: '4 Premium Finishes', desc: 'CP, Antique, Rosegold, and Copper', icon: 'sparkles' },
      { title: 'Easy Fitting', desc: 'Concealed screw wall mounting flange', icon: 'calibrate' }
    ]
  },
  {
    id: 27,
    brandId: 'astdax-curtain-2',
    category: 'Hardware&Fittings',
    pageNumLeft: 61,
    pageNumRight: 62,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Curtain Brackets II',
    title: 'Curtain\nBrackets II.',
    tagline: 'Extended finish series curtain brackets',
    image: curtain2,
    brandName: 'Astdax Hardwares',
    desc: 'Premium decorative curtain rod supports featuring an extended array of luxurious finishes including CP, Antique, Rosegold, Copper, Silver, and Blackgold.',
    thicknesses: ['CP', 'Antique', 'Rosegold', 'Copper', 'Silver', 'Blackgold'],
    defaultThickness: 'CP',
    thicknessLabel: 'Available Finishes',
    features: ['Extended Color Palette', 'High Durability', 'Concealed Screws'],
    applications: ['Luxury Interiors', 'Hotel Suites', 'Residential Drapes'],
    specs: {
      'Finish': 'CP | Antique | Rosegold | Copper | Silver | Blackgold',
      'Mounting Type': 'Wall / Ceiling Flange Mount',
      'Quality Rating': 'Premium Architectural'
    },
    heroSub: 'CURTAIN BRACKETS II. LUXURY SELECTION.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Decorative curtain rod supports with an extended finish collection: CP, Antique, Rosegold, Copper, Silver, and Blackgold.',
    heroTags: [
      { text: '6 Finishes', icon: 'sparkles' },
      { text: 'High Strength', icon: 'shield' },
      { text: 'Flange Mount', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: '6 Color Options', desc: 'CP, Antique, Rosegold, Copper, Silver, Blackgold', icon: 'sparkles' },
      { title: 'Concealed Mounting', desc: 'Clean aesthetic with hidden screw holes', icon: 'gear' },
      { title: 'Corrosion Free', desc: 'Multi-layer anti-rust protection', icon: 'shield' }
    ]
  },
  {
    id: 28,
    brandId: 'astdax-knob',
    category: 'Hardware&Fittings',
    pageNumLeft: 63,
    pageNumRight: 64,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Designer Knobs',
    title: 'Designer\nKnobs.',
    tagline: 'Elegant dual-tone cabinet knobs',
    image: knob,
    brandName: 'Astdax Hardwares',
    desc: 'Architectural cabinet knobs styled to enhance modern cabinet doors, drawers, and wardrobe shutters.',
    thicknesses: ['Z Black-Gold', 'Z Black-Antique', 'Z Black-Rosegold', 'Satin-CP'],
    defaultThickness: 'Z Black-Gold',
    thicknessLabel: 'Available Finishes',
    features: ['Dual-Tone Elegance', 'Solid Metal Core', 'Ergonomic Grip'],
    applications: ['Cabinet Doors', 'Vanity Drawers', 'Wardrobes'],
    specs: {
      'Finish': 'Z Black-Gold | Z Black-Antique | Z Black-Rosegold | Satin-CP',
      'Threading': 'Standard M4 Screw Mount',
      'Style': 'Contemporary Accent'
    },
    heroSub: 'DESIGNER KNOBS. DUAL-TONE ACCENTS.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Architectural cabinet knobs styled in Z Black-Gold, Z Black-Antique, Z Black-Rosegold, and Satin-CP finishes.',
    heroTags: [
      { text: 'Dual-Tone', icon: 'sparkles' },
      { text: 'Solid Core', icon: 'shield' },
      { text: 'M4 Threading', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Contrast Finishes', desc: 'Z Black-Gold, Z Black-Antique, Z Black-Rosegold, Satin-CP', icon: 'sparkles' },
      { title: 'Ergonomic Touch', desc: 'Smooth rounded edges for comfortable grip', icon: 'gear' },
      { title: 'Universal Threading', desc: 'Standard M4 screw fitting for easy setup', icon: 'calibrate' }
    ]
  },
  {
    id: 29,
    brandId: 'astdax-knob-2',
    category: 'Hardware&Fittings',
    pageNumLeft: 65,
    pageNumRight: 66,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Designer Knobs II',
    title: 'Designer\nKnobs II.',
    tagline: 'Luxury accent cabinet knobs',
    image: knob2,
    brandName: 'Astdax Hardwares',
    desc: 'High-end decorative furniture knobs available in contrasting accent finishes including Rosegold-White, CP-Satin, Rosegold-Black, and Gold-Antique.',
    thicknesses: ['Rosegold-White', 'CP-Satin', 'Rosegold-Black', 'Gold-Antique'],
    defaultThickness: 'Rosegold-White',
    thicknessLabel: 'Available Finishes',
    features: ['Luxury Accent Styling', 'Scratch Resistant Coat', 'Precision Threading'],
    applications: ['Modular Kitchens', 'Dresser Drawers', 'Custom Furniture'],
    specs: {
      'Finish': 'Rosegold-White | CP-Satin | Rosegold-Black | Gold-Antique',
      'Mounting': 'Single Hole Rear Screw',
      'Suitability': 'Modular Furniture & Closets'
    },
    heroSub: 'DESIGNER KNOBS II. ACCENT FINISHES.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Luxury cabinet knobs offered in Rosegold-White, CP-Satin, Rosegold-Black, and Gold-Antique for high-end carpentry.',
    heroTags: [
      { text: 'Accent Style', icon: 'sparkles' },
      { text: 'Scratch Proof', icon: 'shield' },
      { text: 'Single Hole', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Accent Colors', desc: 'Rosegold-White, CP-Satin, Rosegold-Black, Gold-Antique', icon: 'sparkles' },
      { title: 'Scratch Resistant', desc: 'Protective top coat maintains shine', icon: 'shield' },
      { title: 'Single Hole Mount', desc: 'Fast, secure installation', icon: 'calibrate' }
    ]
  },
  {
    id: 30,
    brandId: 'astdax-others',
    category: 'Hardware&Fittings',
    pageNumLeft: 67,
    pageNumRight: 68,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Hardware Accessories',
    title: 'Hardware\nAccessories.',
    tagline: 'Essential cabinet studs, magnets & caster wheels',
    image: others,
    brandName: 'Astdax Hardwares',
    desc: 'High-performance utility hardware accessories including 6mm corner studs, magnetic catches, sixer wheels, and locking wheels.',
    thicknesses: ['6mm Corner Stud', 'Magnets', 'Sixer Wheels', 'Locking Wheel'],
    defaultThickness: '6mm Corner Stud',
    thicknessLabel: 'Available Accessories',
    features: ['Heavy Load Capacity', 'Smooth Caster Movement', 'Strong Magnetic Hold'],
    applications: ['Modular Furniture', 'Cabinet Assembly', 'Movable Storage Units'],
    specs: {},
    heroSub: 'HARDWARE ACCESSORIES. UTILITY & MOBILITY.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Essential cabinet accessories: 6mm corner studs, magnetic catches, sixer wheels, and locking wheels for complete furniture utility.',
    heroTags: [
      { text: '6mm Studs', icon: 'gear' },
      { text: 'Magnetic Catch', icon: 'shield' },
      { text: 'Caster Wheels', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: '6mm Corner Stud', desc: 'Strong corner reinforcement', icon: 'gear' },
      { title: 'Magnetic Catches', desc: 'Keeps cabinet doors firmly shut', icon: 'shield' },
      { title: 'Sixer & Locking Wheels', desc: 'Smooth heavy-duty trolley movement', icon: 'sparkles' }
    ]
  },
  {
    id: 31,
    brandId: 'astdax-sofaleg',
    category: 'Hardware&Fittings',
    pageNumLeft: 69,
    pageNumRight: 70,
    hideFromIndex: true,
    parentBrandId: 'astdax-hardwares',
    badge: 'Sofa Legs',
    title: 'Sofa\nLegs.',
    tagline: 'Heavy-duty decorative furniture & sofa legs',
    image: sofaleg,
    brandName: 'Astdax Hardwares',
    desc: 'Sturdy and stylish metallic sofa legs engineered to support heavy upholstered furniture in Antique, Copper, Wengi, and Silver finishes.',
    thicknesses: ['Antique', 'Copper', 'Wengi', 'Silver'],
    defaultThickness: 'Antique',
    thicknessLabel: 'Available Finishes',
    features: ['High Load Bearing', 'Protective Rubber Base', 'Corrosion Resistant'],
    applications: ['Sofas & Couches', 'Bed Frames', 'Cabinets & Sideboards'],
    specs: {
      'Finish': 'Antique | Copper | Wengi | Silver',
      'Material': 'Heavy Duty Alloy / Steel',
      'Base': 'Anti-scratch Rubber Pad',
      'Load Capacity': 'Up to 200kg per leg'
    },
    heroSub: 'SOFA LEGS. HEAVY-DUTY STRENGTH.',
    heroTitle: 'ASTDAX HARDWARES',
    heroDesc: 'Heavy-duty decorative sofa legs engineered for maximum weight capacity in Antique, Copper, Wengi, and Silver finishes.',
    heroTags: [
      { text: 'Heavy Load', icon: 'shield' },
      { text: '4 Finishes', icon: 'sparkles' },
      { text: 'Rubber Base', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: '200kg Load Rating', desc: 'Supports heavy couches and sofa sets', icon: 'shield' },
      { title: '4 Premium Finishes', desc: 'Antique, Copper, Wengi, Silver', icon: 'sparkles' },
      { title: 'Floor Protection', desc: 'Rubber base prevents floor scratching', icon: 'gear' }
    ]
  },

  ...kitchenAccessoriesSpreads,

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
  }
];

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
        return <Trees className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'droplet':
        return <Droplets className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'bug':
        return <Bug className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'shield':
        return <ShieldCheck className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'leaf':
        return <Leaf className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'calibrate':
        return <Ruler className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'sparkles':
        return <Sparkles className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'gear':
        return <Settings className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      case 'flex':
        return <RefreshCw className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
      default:
        return <ShieldCheck className="w-7 h-7 text-[#006e2f]" strokeWidth={2} />;
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
        return <Trees className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'glue':
        return <FlaskConical className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'grade':
        return <Lock className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'moisture':
        return <Droplets className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'ruler':
        return <Ruler className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'warranty':
        return <ShieldCheck className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      case 'cert':
        return <BadgeCheck className="w-5 h-5 text-[#006e2f]" strokeWidth={2} />;
      default:
        return null;
    }
  };

  const renderHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'water-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Shield className="w-7 h-7 text-[#006e2f] shrink-0" strokeWidth={1.8} />
            <Droplets className="absolute w-4 h-4 text-[#006e2f] top-[9px] shrink-0" strokeWidth={1.8} />
          </div>
        );
      case 'termite-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Bug className="w-6 h-6 text-[#006e2f] shrink-0" strokeWidth={1.8} />
            <Ban className="absolute inset-0 w-8 h-8 text-rose-500 opacity-90 shrink-0" strokeWidth={2} />
          </div>
        );
      case 'borer-proof':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Bug className="w-6 h-6 text-[#006e2f] rotate-90 shrink-0" strokeWidth={1.8} />
            <Ban className="absolute inset-0 w-8 h-8 text-rose-500 opacity-90 shrink-0" strokeWidth={2} />
          </div>
        );
      case 'strength':
        return (
          <div className="w-8 h-8 flex items-center justify-center">
            <Dumbbell className="w-7 h-7 text-[#006e2f] shrink-0" strokeWidth={1.8} />
          </div>
        );
      case 'finish':
        return (
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Layers className="w-6 h-6 text-[#006e2f] shrink-0" strokeWidth={1.8} />
            <Sparkles className="absolute top-0 right-0 w-3.5 h-3.5 text-amber-500 shrink-0" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 flex items-center justify-center">
            <Shield className="w-7 h-7 text-[#006e2f] shrink-0" strokeWidth={1.8} />
          </div>
        );
    }
  };

  const getIndexFromSearch = (searchStr) => {
    const params = new URLSearchParams(searchStr || '');
    const category = params.get('category');
    if (!category) return 0;
    const catLower = category.toLowerCase().trim();
    const foundIdx = SPREADS.findIndex(s => s.category.toLowerCase().replace(/[\s&]+/g, '-') === catLower.replace(/[\s&]+/g, '-'));
    if (foundIdx !== -1) return foundIdx;
    switch (catLower) {
      case 'plywood': return 0;
      case 'laminates': {
        const lIdx = SPREADS.findIndex(s => s.category === 'Laminates');
        return lIdx !== -1 ? lIdx : 0;
      }
      case 'fancy-doors':
      case 'doors':
      case 'fancy-door': {
        const fdIdx = SPREADS.findIndex(s => s.category === 'Fancy Doors' || s.brandId === 'fancy-doors');
        return fdIdx !== -1 ? fdIdx : 0;
      }
      case 'hardware':
      case 'hardware-fittings':
      case 'hardware&fittings': {
        const hfIdx = SPREADS.findIndex(s => s.category === 'Hardware&Fittings' || s.category === 'Hardware & Fittings');
        return hfIdx !== -1 ? hfIdx : 0;
      }
      case 'door-fittings': {
        const dfIdx = SPREADS.findIndex(s => s.brandId === 'astdax-hardwares' || s.brandId === 'steel-wood');
        return dfIdx !== -1 ? dfIdx : 0;
      }
      case 'kitchen-accessories': {
        const kaIdx = SPREADS.findIndex(s => s.category === 'Kitchen Accessories');
        return kaIdx !== -1 ? kaIdx : 0;
      }
      case 'sliding-channels': {
        const scIdx = SPREADS.findIndex(s => s.brandId === 'drawer-channel');
        return scIdx !== -1 ? scIdx : 0;
      }
      case 'tandem-boxes': {
        const tbIdx = SPREADS.findIndex(s => s.brandId === 'tandem-box');
        return tbIdx !== -1 ? tbIdx : 0;
      }
      default: return 0;
    }
  };

  const [currentSpreadIdx, setCurrentSpreadIdx] = useState(() => {
    return getIndexFromSearch(search || window.location.search);
  });

  useEffect(() => {
    const targetIdx = getIndexFromSearch(search || window.location.search);
    if (targetIdx !== currentSpreadIdx) {
      setCurrentSpreadIdx(targetIdx);
    }
  }, [search]);
  const [selectedThicknesses, setSelectedThicknesses] = useState({});
  const [selectedSize, setSelectedSize] = useState('8 x 4');
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [isBrochureDropdownOpen, setIsBrochureDropdownOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({
    'Plywood': true
  });
  const [selectedCategoryBrands, setSelectedCategoryBrands] = useState('Plywood');
  const [selectedBrand, setSelectedBrand] = useState(null);

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

  const getCategoryBrands = (catKey) => {
    if (!catKey) return [];
    if (catKey === 'Plywood') {
      return ['Royal Club', 'Marine Club', 'Gurjan Club', 'Gurjan King', 'Gurjan Gold', 'Gurjan Star'];
    }
    if (catKey === 'Laminates') {
      return ['Century', 'Green', 'Marine', 'Vista', 'Croma'];
    }
    const items = categories[catKey] || categories[catKey.replace('&', ' & ')] || categories[catKey.replace(' & ', '&')] || [];
    const brandSet = [];
    items.forEach(({ spread }) => {
      const name = spread.brandName;
      if (name && !brandSet.includes(name)) {
        brandSet.push(name);
      }
    });
    return brandSet;
  };

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

  const activeSpread = SPREADS[currentSpreadIdx];
  const activeCategorySpreads = SPREADS.filter(s => s.category === activeSpread.category);
  const activeCatIdx = activeCategorySpreads.findIndex(s => s.id === activeSpread.id);

  useEffect(() => {
    if (activeSpread && activeSpread.category) {
      setSelectedCategoryBrands(activeSpread.category);
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
    if (activeCategorySpreads.length > 1 && activeCatIdx !== -1) {
      const prevCatIdx = (activeCatIdx - 1 + activeCategorySpreads.length) % activeCategorySpreads.length;
      const targetSpread = activeCategorySpreads[prevCatIdx];
      const targetIdx = SPREADS.findIndex(s => s.id === targetSpread.id);
      if (targetIdx !== -1) setCurrentSpreadIdx(targetIdx);
    } else if (currentSpreadIdx > 0) {
      setCurrentSpreadIdx(prev => prev - 1);
    } else {
      setCurrentSpreadIdx(SPREADS.length - 1);
    }
  };

  const handleNextImage = (e) => {
    if (e) e.stopPropagation();
    if (activeCategorySpreads.length > 1 && activeCatIdx !== -1) {
      const nextCatIdx = (activeCatIdx + 1) % activeCategorySpreads.length;
      const targetSpread = activeCategorySpreads[nextCatIdx];
      const targetIdx = SPREADS.findIndex(s => s.id === targetSpread.id);
      if (targetIdx !== -1) setCurrentSpreadIdx(targetIdx);
    } else if (currentSpreadIdx < SPREADS.length - 1) {
      setCurrentSpreadIdx(prev => prev + 1);
    } else {
      setCurrentSpreadIdx(0);
    }
  };

  const handleThumbnailClick = (idx) => {
    if (idx >= 0 && idx < SPREADS.length) {
      setCurrentSpreadIdx(idx);
    }
  };

  const handleBrandClick = (brandName) => {
    if (selectedBrand && selectedBrand.toLowerCase() === brandName.toLowerCase()) {
      setSelectedBrand(null);
      return;
    }
    setSelectedBrand(brandName);
    const catKey = selectedCategoryBrands || activeSpread.category;
    const matchIdx = SPREADS.findIndex(s =>
      (s.category === catKey || s.category.replace(/\s+/g, '') === catKey.replace(/\s+/g, '')) &&
      s.brandName &&
      s.brandName.toLowerCase() === brandName.toLowerCase() &&
      !s.hideFromIndex
    );

    const fallbackIdx = SPREADS.findIndex(s =>
      s.brandName && s.brandName.toLowerCase() === brandName.toLowerCase() && !s.hideFromIndex
    );

    const targetIdx = matchIdx !== -1 ? matchIdx : fallbackIdx;

    if (targetIdx !== -1) {
      handleThumbnailClick(targetIdx);
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



  return (
    <div className="w-full min-h-screen bg-[#F8F8F6] font-sans pt-0 pb-4 select-none text-slate-800">

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/50 px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-scale-up font-bold text-xs uppercase tracking-wider">
          <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 7.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 11.586l3.293-3.293a1 1 0 011.414 1.414z" />
          </svg>
          {toastMsg}
        </div>
      )}

      {/* Compact Category Navigation Deck (Below Navbar) */}
      <div className="w-full bg-[#F5EDE0] text-slate-800 relative border-b border-[#FAF2DF] animate-fade-in mb-6 sm:mb-8 shadow-2xs pt-[116px] sm:pt-[96px] md:pt-[100px] pb-3.5 sm:pb-4.5">
        <div className="max-w-[1360px] mx-auto w-full px-3 sm:px-6 relative z-20">

          {/* Header Row (Hidden on mobile) */}
          <div className="hidden sm:flex items-center gap-2 mb-2 px-0.5">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#8c6d23]">
              Product Categories
            </span>
          </div>

          {/* Category Items - Compact Sizing, Text-Only Presentation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 sm:gap-2 lg:gap-2.5 pt-0.5 pb-1 px-0.5">
            {[
              { key: 'Plywood', title: 'Plywood' },
              { key: 'Laminates', title: 'Laminates' },
              { key: 'Acrylic Panels', title: 'Acrylic Panels' },
              { key: 'Veneers', title: 'Veneers' },
              { key: 'Fancy Doors', title: 'Fancy Doors' },
              { key: 'Architectural Hardware', title: 'Arch. Hardware' },
              { key: 'Hardware&Fittings', title: 'Hardware & Fittings' }
            ].map((cat) => {
              const isActive = (selectedCategoryBrands || activeSpread.category) === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => {
                    setSelectedCategoryBrands(cat.key);
                    setSelectedBrand(null); // By default no brand is selected!
                    setExpandedCategories(prev => ({
                      ...prev,
                      [cat.key]: true
                    }));
                    const firstMatch = SPREADS.findIndex(s =>
                      (s.category === cat.key || s.category.replace(/\s+/g, '') === cat.key.replace(/\s+/g, '')) &&
                      !s.hideFromIndex
                    );
                    if (firstMatch !== -1) {
                      handleThumbnailClick(firstMatch);
                    }
                  }}
                  className={`group flex items-center justify-center px-2 py-1.5 sm:px-2.5 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-200 cursor-pointer text-center select-none w-full border ${isActive
                    ? 'bg-[#006e2f] text-white border-[#006e2f] shadow-sm shadow-[#006e2f]/20 scale-[1.02]'
                    : 'bg-white hover:bg-[#FAF6EE] text-slate-800 hover:text-[#006e2f] border-slate-200/80 hover:border-[#8c6d23]/40 shadow-2xs hover:shadow-xs'
                    }`}
                >
                  <span className={`text-[11px] sm:text-[12px] font-black tracking-tight leading-tight transition-colors ${isActive ? 'text-white' : 'text-slate-800 group-hover:text-[#006e2f]'
                    }`}>
                    {cat.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Category Brand Names - Styled Distinctly as Brands */}
          {selectedCategoryBrands && (() => {
            const brandsList = getCategoryBrands(selectedCategoryBrands);

            if (!brandsList.length) {
              return (
                <div className="mt-2 text-center">
                  <span className="text-xs font-semibold text-slate-500 italic">No brand listings available</span>
                </div>
              );
            }

            // Split into exactly 2 rows if more than 3 brands exist
            const shouldSplit = brandsList.length > 3;
            const midpoint = shouldSplit ? Math.ceil(brandsList.length / 2) : brandsList.length;
            const row1 = brandsList.slice(0, midpoint);
            const row2 = shouldSplit ? brandsList.slice(midpoint) : [];

            return (
              <div className="mt-2.5 animate-fade-in w-full">

                {/* Desktop View: Normal single row */}
                <div className="hidden md:flex items-center justify-center gap-1.5 lg:gap-2 flex-wrap max-w-full px-1">
                  {brandsList.map((brandName) => {
                    const isBrandActive = selectedBrand && selectedBrand.toLowerCase() === brandName.toLowerCase();
                    return (
                      <button
                        key={brandName}
                        type="button"
                        onClick={() => handleBrandClick(brandName)}
                        className={`group flex items-center justify-center px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-[12px] font-bold border select-none transition-all cursor-pointer active:scale-95 whitespace-nowrap shadow-2xs ${isBrandActive
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#006e2f]/40 scale-[1.02]'
                          : 'bg-white hover:bg-[#FAF6EE] text-slate-800 hover:text-[#006e2f] border-slate-300/80 hover:border-[#8c6d23]/50'
                          }`}
                      >
                        <span>{brandName}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Mobile View: Exactly 2 rows */}
                <div className="flex md:hidden flex-col items-center justify-center gap-1.5 w-full">
                  {/* Row 1 */}
                  <div className="flex items-center justify-center gap-1.5 max-w-full overflow-x-auto no-scrollbar px-1">
                    {row1.map((brandName) => {
                      const isBrandActive = selectedBrand && selectedBrand.toLowerCase() === brandName.toLowerCase();
                      return (
                        <button
                          key={brandName}
                          type="button"
                          onClick={() => handleBrandClick(brandName)}
                          className={`group flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-bold border select-none transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs ${isBrandActive
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#006e2f]/40 scale-[1.02]'
                            : 'bg-white hover:bg-[#FAF6EE] text-slate-800 hover:text-[#006e2f] border-slate-300/80 hover:border-[#8c6d23]/50'
                            }`}
                        >
                          <span>{brandName}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Row 2 */}
                  {row2.length > 0 && (
                    <div className="flex items-center justify-center gap-1.5 max-w-full overflow-x-auto no-scrollbar px-1">
                      {row2.map((brandName) => {
                        const isBrandActive = selectedBrand && selectedBrand.toLowerCase() === brandName.toLowerCase();
                        return (
                          <button
                            key={brandName}
                            type="button"
                            onClick={() => handleBrandClick(brandName)}
                            className={`group flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-bold border select-none transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 shadow-2xs ${isBrandActive
                              ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#006e2f]/40 scale-[1.02]'
                              : 'bg-white hover:bg-[#FAF6EE] text-slate-800 hover:text-[#006e2f] border-slate-300/80 hover:border-[#8c6d23]/50'
                              }`}
                          >
                            <span>{brandName}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

        </div>
      </div>



      {/* Product Spotlight Showcase Section - Seamless 2-Column Layout */}
      <div
        id="catalogue-book-section"
        className="w-full max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 relative mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left: Product Image with Prev/Next Overlay Buttons */}
          <div className="lg:col-span-7 flex items-center justify-start">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-sm group">
              <img
                src={activeSpread.image}
                alt={activeSpread.brandName}
                className={`w-full max-h-[460px] sm:max-h-[520px] md:max-h-[580px] transition-transform duration-500 hover:scale-[1.01] ${activeSpread.category === 'Kitchen Accessories' || activeSpread.imageFit === 'contain'
                  ? 'object-contain'
                  : 'object-cover'
                  }`}
              />

              {/* Prev Button Overlay (<) - Transparent Frosted Glass */}
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/45 text-white shadow-md hover:shadow-lg backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                title="Previous Image"
                aria-label="Previous Image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {/* Next Button Overlay (>) - Transparent Frosted Glass */}
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/25 hover:bg-black/45 text-white shadow-md hover:shadow-lg backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                title="Next Image"
                aria-label="Next Image"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Text Content in the gap */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 text-left">


            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {activeSpread.brandName}
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

            {/* Action Buttons */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 pt-3">
              <button
                onClick={handleGetQuote}
                className="px-7 py-3.5 bg-[#006e2f] hover:bg-[#005a26] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Get Instant Quote</span>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              {/* Download Brochure Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsBrochureDropdownOpen(!isBrochureDropdownOpen)}
                  className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black tracking-wider uppercase rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                >
                  <Download className="w-4 h-4 text-slate-700" />
                  <span>Brochure</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-600 transition-transform duration-200 ${isBrochureDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isBrochureDropdownOpen && (
                  <div className="absolute left-0 sm:right-0 bottom-full mb-2 w-64 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden animate-fade-in text-left z-50 divide-y divide-slate-100">
                    <a
                      href={sgCatalogPdf}
                      download="SG CATALOG.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsBrochureDropdownOpen(false)}
                      className="block px-4 py-3 text-xs font-extrabold text-slate-800 hover:bg-[#f0f9f4] hover:text-[#006e2f] transition-colors cursor-pointer"
                    >
                      SG Product Catalogue
                    </a>
                    <a
                      href={hardwarePdf}
                      download="hardwareaccessories.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsBrochureDropdownOpen(false)}
                      className="block px-4 py-3 text-xs font-extrabold text-slate-800 hover:bg-[#f0f9f4] hover:text-[#006e2f] transition-colors cursor-pointer"
                    >
                      Hardware Accessories Catalogue
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Product Overview Section - Interactive Selection Component */}
      {(() => {
        const isPlywoodOrBoard = activeSpread.category === 'Plywood';

        if (!isPlywoodOrBoard) {
          // Render the standard Product Overview card for Laminates, Hardware, Veneers, etc.
          return (
            <div className="max-w-[1280px] mx-auto px-4 mt-4 md:mt-16 mb-12 md:mb-16 animate-fade-in">
              <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-sm p-8 md:p-12 hover:shadow-md transition-all duration-300">
                <div className="text-center mb-12">
                  <span className="text-[11px] font-black tracking-[0.25em] text-[#006e2f] uppercase block mb-2">
                    Product Overview
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                    {getOverviewTitle(activeSpread)}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 justify-items-stretch text-center mb-12">
                  {(activeSpread.overviewFeatures || []).map((feature, i) => (
                    <div key={i} className="flex flex-col items-center gap-4 group">
                      <div className="w-[60px] h-[60px] rounded-full bg-[#f0f9f4] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
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
                    className="w-full sm:w-auto px-10 py-4 bg-[#006e2f] hover:bg-[#005c26] text-white text-[11px] font-black tracking-widest uppercase rounded-lg shadow-sm transition-all flex items-center justify-center gap-3 cursor-pointer hover:shadow-md transform active:scale-95"
                  >
                    Get Quote
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                  <a
                    href={`https://wa.me/919247449522?text=${encodeURIComponent(`I am interested in ${getOverviewTitle(activeSpread)} (${activeThickness}). Please share pricing and availability.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-4 bg-white border border-[#006e2f] hover:bg-[#f0f9f4] text-[#006e2f] text-[11px] font-black tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-3 cursor-pointer shadow-sm hover:shadow-md transform active:scale-95"
                  >
                    Whatsapp Us
                    <svg className="w-4 h-4 fill-current text-[#006e2f]" viewBox="0 0 24 24">
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
          const strokeColor = isSelected ? '#ffffff' : '#006e2f';
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
                  <span className="h-[1px] w-8 md:w-16 bg-emerald-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-xs md:text-sm font-extrabold tracking-wider text-emerald-600 uppercase">AVAILABLE THICKNESS OPTIONS</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="h-[1px] w-8 md:w-16 bg-emerald-500"></span>
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
                                      ? 'bg-emerald-500 border-white ring-2 ring-emerald-400/50 scale-125'
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
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
                                      </span>
                                    ) : (
                                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white border-2 border-emerald-500 shrink-0"></span>
                                    )}
                                    <span className={`text-[11px] font-black uppercase tracking-wider select-none ${isSelected ? 'text-emerald-800 font-extrabold' : 'text-[#533b25]/85'}`}>
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
                        <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
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
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
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
                  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Other sizes available on request</span>
                </div>
                <span className="hidden md:inline text-gray-300">|</span>
                <div className="flex items-center space-x-1.5">
                  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>All thickness in mm</span>
                </div>
              </footer>

            </div>
          </div>
        );
      })()}

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
          <div className="bg-white rounded-[24px] border border-slate-200/50 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
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
                        className={`${style.bg} ${gridClass} rounded-[20px] border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between pt-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative h-fit sm:h-[268px]`}
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
              <div className="bg-white rounded-[24px] border border-slate-200/50 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
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

      {/* Floating Action Buttons (Hidden on mobile view) */}
      <div className="hidden sm:flex fixed sm:right-5 sm:bottom-6 z-[40] flex-col gap-2">
        <a
          href="https://wa.me/919247449522"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 sm:w-9 sm:h-9 bg-[#25d366] hover:bg-[#1ebd59] text-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          title="WhatsApp Support"
          aria-label="WhatsApp Support"
        >
          <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.9-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
          </svg>
        </a>
        <a
          href="tel:+919247449522"
          className="w-8 h-8 sm:w-9 sm:h-9 bg-slate-900 hover:bg-slate-800 text-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          title="Call Direct"
          aria-label="Call Direct"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
          </svg>
        </a>
        <button
          onClick={handleGetQuote}
          className="w-8 h-8 sm:w-9 sm:h-9 bg-white hover:bg-amber-50 text-slate-800 hover:text-[#0F5C3B] border border-slate-200 hover:border-[#0F5C3B]/40 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
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

