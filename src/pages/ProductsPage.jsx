import React, { useState, useEffect, useRef } from 'react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';
import KitchenAccessories, { kitchenAccessoriesSpreads } from '../components/KitchenAccessories';
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
import gurjanKingBrandImg from '../assets/brands/gurjan_king_plywood.jpg';
import centuryBrandImg from '../assets/brands/century_laminates.jpg';
import armaniBrandImg from '../assets/brands/armani_acrylic.jpg';
import astdaxBrandImg from '../assets/brands/astdax_hardware.jpg';
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
import fancyDoors2Img from '../assets/doors/fancydoors2.png';
import fancyDoors3Img from '../assets/doors/fancydoors3.png';
import fancyDoors4Img from '../assets/doors/fancydoors4.png';
import designerDoorImg from '../assets/doors/homepage-designerdoor.png';
import FancyDoors from '../components/FancyDoors';
import plywoodKingImg from '../assets/plywood/plywood-image.png';
import veneer2Img from '../assets/plywood/veneer2.png';
import veneer3Img from '../assets/plywood/veneer3.png';
import veneer4Img from '../assets/plywood/veneer4.png';
import royalClub3Img from '../assets/plywood/royalclub3.png';
import royalClub4Img from '../assets/plywood/royalclub4.png';
import royalClub5Img from '../assets/plywood/royalclub5.png';
import marine1Img from '../assets/plywood/marine.png';
import marine2Img from '../assets/plywood/marine2.png';
import marine3Img from '../assets/plywood/marine3.png';
import gurjanClub1Img from '../assets/plywood/gurjanclub1.png';
import gurjanClub2Img from '../assets/plywood/gurjanclub2.png';
import gurjanKing1Img from '../assets/plywood/gurjan king.png';
import gurjanKing2Img from '../assets/plywood/gurjanking2.png';
import gurjanGoldNewImg from '../assets/plywood/gurjangold.png';
import gurjanGoldNew2Img from '../assets/plywood/gurjangold2.png';
import centuryPlywood1Img from '../assets/plywood/century.png';
import centuryPlywood2Img from '../assets/plywood/century2.png';
import centuryPlywood3Img from '../assets/plywood/century3.png';
import greenPlywood1Img from '../assets/plywood/green1.png';
import greenPlywood2Img from '../assets/plywood/green2.png';
import greenPlywood3Img from '../assets/plywood/green3.png';
import merino1Img from '../assets/plywood/merino.png';
import merino2Img from '../assets/plywood/Merino2.png';
import merino3Img from '../assets/plywood/merino3.png';
import vista1Img from '../assets/plywood/vista1.png';
import vista2Img from '../assets/plywood/vista2.png';
import vista3Img from '../assets/plywood/vista3.png';
import chroma1Img from '../assets/plywood/chroma1.png';
import chroma2Img from '../assets/plywood/chroma2.png';
import chroma3Img from '../assets/plywood/chroma3.png';
import centuryLaminates1Img from '../assets/laminates/centurylaminates1.jpg';
import centuryLaminates2Img from '../assets/laminates/centurylaminates2.png';
import centuryLaminates3Img from '../assets/laminates/centurylaminates3.png';
import centuryLaminates4Img from '../assets/laminates/centurylaminates4.png';
import chromaLaminates1Img from '../assets/laminates/chromalaminates1.png';
import chromaLaminates2Img from '../assets/laminates/chromalaminates2.png';
import astdaxHardware1Img from '../assets/hardware/Astdax hardware and fittings.png';
import astdaxHardware2Img from '../assets/hardware/Astdax hardware and fittings2.png';
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
import hardwareFittings8 from '../assets/hardware/productspage-hardware&fittings8.png';
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
    id: 3,
    brandId: 'century-laminates',
    category: 'Laminates',
    pageNumLeft: 7,
    pageNumRight: 8,
    badge: 'Architectural Collection',
    title: 'Timeless\nElegance.',
    tagline: 'Century Decorative Laminates for Luxury Interiors',
    image: centuryLaminates1Img,
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
    id: 31,
    brandId: 'century-laminates-textures',
    category: 'Laminates',
    pageNumLeft: 7,
    pageNumRight: 8,
    hideFromIndex: true,
    parentBrandId: 'century-laminates',
    badge: 'Embossed Series',
    title: 'Textured\nRealism.',
    tagline: 'Deep tactile woodgrains and natural stone finishes',
    image: centuryLaminates2Img,
    brandName: 'Century',
    desc: 'Deep textured embossing mirrors real wood grains and split slate stones, creating sensational tactile visual interest.',
    thicknesses: ['1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Synchronized Grain', 'Tactile Texture', 'Wear Resistant'],
    applications: ['Feature Walls', 'Living Room Credenzas', 'Bar Counters'],
    specs: {
      'Texture': 'Synchronized Deep Grain',
      'Wear Layer': 'High Scratch Melamine',
      'Standard Size': '8ft x 4ft'
    },
    heroSub: 'TEXTURED REALISM. SYNCHRONIZED DEEP GRAIN.',
    heroTitle: 'CENTURY',
    heroDesc: 'Deep textured embossing mirrors real wood grains and split slate stones, creating sensational tactile visual interest.',
    heroTags: [
      { text: 'Synchronized Grain', icon: 'wood' },
      { text: 'Tactile Texture', icon: 'sparkles' },
      { text: 'Wear Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Tactile Grain', desc: 'Real texture matched to wood patterns', icon: 'wood' },
      { title: 'Scratch Resistant', desc: 'Tough melamine top protection', icon: 'shield' },
      { title: 'Anti-Bacterial', desc: 'Silver nano hygiene shield', icon: 'sparkles' }
    ]
  },
  {
    id: 32,
    brandId: 'century-laminates-architectural',
    category: 'Laminates',
    pageNumLeft: 7,
    pageNumRight: 8,
    hideFromIndex: true,
    parentBrandId: 'century-laminates',
    badge: 'Designer Palette',
    title: 'Architectural\nVeneer Grain.',
    tagline: 'Premium exotic wood aesthetics with laminate durability',
    image: centuryLaminates3Img,
    brandName: 'Century',
    desc: 'Architectural woodgrain decors replicate rare veneers like smoked oak, Santos rosewood, and American walnut with zero maintenance.',
    thicknesses: ['1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Veneer Look-Alike', 'Zero Maintenance', 'Stain Resistant'],
    applications: ['Executive Desks', 'Conference Tables', 'Bespoke Wardrobes'],
    specs: {
      'Decor': 'Smoked Architectural Oak',
      'Resistance': '180°C Heat Tested',
      'Core': 'Phenolic Kraft'
    },
    heroSub: 'EXOTIC VENEER AESTHETICS. ZERO MAINTENANCE.',
    heroTitle: 'CENTURY',
    heroDesc: 'Architectural woodgrain decors replicate rare veneers like smoked oak, Santos rosewood, and American walnut with zero maintenance.',
    heroTags: [
      { text: 'Veneer Look-Alike', icon: 'wood' },
      { text: 'Zero Maintenance', icon: 'sparkles' },
      { text: 'Stain Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Exotic Grain', desc: 'Flitch-matched timber decor look', icon: 'wood' },
      { title: 'Zero Maintenance', desc: 'No polishing or lacquering required', icon: 'sparkles' },
      { title: 'Stain Resistance', desc: 'Impervious to household chemicals', icon: 'shield' }
    ]
  },
  {
    id: 33,
    brandId: 'century-laminates-stone',
    category: 'Laminates',
    pageNumLeft: 7,
    pageNumRight: 8,
    hideFromIndex: true,
    parentBrandId: 'century-laminates',
    badge: 'Anti-Fingerprint Matte',
    title: 'Super Matte\nVelvet.',
    tagline: 'Anti-fingerprint thermal healing surface technology',
    image: centuryLaminates4Img,
    brandName: 'Century',
    desc: 'Engineered with ultra-low gloss velvet touch, Century Super Matte resists smudges and provides an ultra-luxurious feel for modern kitchens.',
    thicknesses: ['1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Anti-Fingerprint', 'Velvet Touch', 'Low Light Reflection'],
    applications: ['Kitchen Shutter Fronts', 'Wardrobes', 'Luxury Partitions'],
    specs: {
      'Finish': 'Ultra Matte Velvet',
      'Surface Reflection': 'Below 5 Gloss Units',
      'Cleaning': 'Easy Microfiber Wipe'
    },
    heroSub: 'SUPER MATTE VELVET. ANTI-FINGERPRINT TOUCH.',
    heroTitle: 'CENTURY',
    heroDesc: 'Engineered with ultra-low gloss velvet touch, Century Super Matte resists smudges and provides an ultra-luxurious feel for modern kitchens.',
    heroTags: [
      { text: 'Anti-Fingerprint', icon: 'sparkles' },
      { text: 'Velvet Touch', icon: 'sparkles' },
      { text: 'Zero Reflection', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Anti-Fingerprint', desc: 'Stays pristine under daily touch', icon: 'sparkles' },
      { title: 'Silky Texture', desc: 'Soft-touch velvet sensory feel', icon: 'sparkles' },
      { title: 'Thermal Healing', desc: 'Micro-scratches buff out easily', icon: 'shield' }
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
    id: 27,
    brandId: 'indigo-laminates',
    category: 'Laminates',
    pageNumLeft: 53,
    pageNumRight: 54,
    badge: 'Matt Finish Collection',
    title: 'Contemporary\nElegance.',
    tagline: 'Superior Matt Finish & Anti-Fingerprint Surfaces',
    image: laminates2Img,
    brandName: 'Indigo',
    desc: 'Indigo premium laminates deliver ultra-smooth matte textures with superior scratch and fingerprint resistance for sophisticated interiors.',
    thicknesses: ['0.8mm', '1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Anti-Fingerprint', 'High Scratch Resistance', 'Color Fastness'],
    applications: ['Wardrobes', 'Kitchen Cabinets', 'Office Furniture'],
    specs: {
      'Surface Finish': 'Ultra Matt / Suede',
      'Thickness': '1.0mm European Grade',
      'Scratch Resistance': 'High Grade'
    },
    heroSub: 'ULTRA MATT FINISH. TIMELESS SOPHISTICATION.',
    heroTitle: 'INDIGO LAMINATES',
    heroDesc: 'Indigo premium laminates deliver ultra-smooth matte textures with superior scratch and fingerprint resistance for sophisticated interiors.',
    heroTags: [
      { text: 'Anti-Fingerprint', icon: 'sparkles' },
      { text: 'High Scratch Resistance', icon: 'shield' },
      { text: 'Color Fastness', icon: 'droplet' }
    ],
    overviewFeatures: [
      { title: 'Anti-Fingerprint Surface', desc: 'Resists smudges and fingerprints', icon: 'sparkles' },
      { title: 'Scratch Resistant', desc: 'Durable finish for high-traffic use', icon: 'shield' },
      { title: 'Moisture Resistant', desc: 'Protected against ambient humidity', icon: 'droplet' },
      { title: 'Eco Friendly', desc: 'Low VOC compliant materials', icon: 'leaf' }
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
    title: 'Natural Stone &\nMarble.',
    tagline: 'Sophisticated architectural laminate textures for luxury interiors',
    image: vista1Img,
    brandName: 'Vista',
    desc: 'Vista Laminates highlight deep walnut tones, realistic marble veining, and contemporary tactile textures, creating an inspiring ambience.',
    thicknesses: ['0.8mm', '1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Natural Stone Grain', 'Anti-Fingerprint', 'Impact Resistant'],
    applications: ['Executive Offices', 'Living Room Consoles', 'Feature Walls'],
    specs: {
      'Material': 'Phenolic Resin Kraft',
      'Surface Finish': 'Stone & Walnut Texture',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'CONTEMPORARY STYLE. NATURAL STONE & MARBLE.',
    heroTitle: 'VISTA',
    heroDesc: 'Vista Laminates highlight deep walnut tones, realistic marble veining, and contemporary tactile textures for luxury spaces.',
    heroTags: [
      { text: 'Natural Stone', icon: 'sparkles' },
      { text: 'Anti-Fingerprint', icon: 'sparkles' },
      { text: 'Impact Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Stone & Wood Textures', desc: 'Deep warm architectural details', icon: 'wood' },
      { title: 'Anti-Fingerprint', desc: 'Smudge-free ultra smooth feel', icon: 'sparkles' },
      { title: 'Impact Resistant', desc: 'High resistance to physical knocks', icon: 'shield' },
      { title: 'Thermal Stability', desc: 'Resists temperature shifts', icon: 'droplet' },
      { title: 'Easy Maintenance', desc: 'Cleans effortlessly with damp cloth', icon: 'sparkles' }
    ]
  },
  {
    id: 251,
    brandId: 'vista-laminates-walnut',
    category: 'Laminates',
    pageNumLeft: 13,
    pageNumRight: 14,
    hideFromIndex: true,
    parentBrandId: 'vista-laminates',
    badge: 'Warm Walnut',
    title: 'Warm Walnut\nTextures.',
    tagline: 'Deep walnut tones with golden woodgrain accents',
    image: vista2Img,
    brandName: 'Vista',
    desc: 'Rich walnut woodgrain decor with synchronised golden pores brings organic warmth to executive furniture and living room joinery.',
    thicknesses: ['1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Golden Grain Accents', 'Suede Texture', 'Color Fast'],
    applications: ['Executive Desks', 'TV Consoles', 'Bed Headboards'],
    specs: {
      'Finish': 'Suede Walnut',
      'Moisture Resistance': 'High Resistant',
      'Standard Size': '8ft x 4ft'
    },
    heroSub: 'WARM WALNUT TONES. GOLDEN GRAIN ACCENTS.',
    heroTitle: 'VISTA',
    heroDesc: 'Rich walnut woodgrain decor with synchronised golden pores brings organic warmth to executive furniture and living room joinery.',
    heroTags: [
      { text: 'Golden Woodgrain', icon: 'wood' },
      { text: 'Suede Finish', icon: 'sparkles' },
      { text: 'Scratch Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Warm Walnut Grain', desc: 'Authentic golden-tinged pores', icon: 'wood' },
      { title: 'Scratch Resistant', desc: 'Protected by high-wear melamine resin', icon: 'shield' },
      { title: 'UV Protection', desc: 'Retains rich color without yellowing', icon: 'sparkles' }
    ]
  },
  {
    id: 252,
    brandId: 'vista-laminates-stone',
    category: 'Laminates',
    pageNumLeft: 13,
    pageNumRight: 14,
    hideFromIndex: true,
    parentBrandId: 'vista-laminates',
    badge: 'Architectural Stone',
    title: 'Contemporary\nTactile Stone.',
    tagline: 'Realistic split slate and marble textures for feature walls',
    image: vista3Img,
    brandName: 'Vista',
    desc: 'Sophisticated stone finishes offering the cool grandeur of Italian marble combined with light weight and seamless edge bonding.',
    thicknesses: ['1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Italian Marble Decor', 'Tactile Touch', 'Stain Resistant'],
    applications: ['Kitchen Backsplashes', 'Reception Desks', 'Wall Cladding'],
    specs: {
      'Texture': 'Split Slate / Calacatta',
      'Heat Resistance': 'Up to 180°C',
      'Maintenance': 'Wipe Clean'
    },
    heroSub: 'COOL STONE TEXTURE. ITALIAN MARBLE AESTHETICS.',
    heroTitle: 'VISTA',
    heroDesc: 'Sophisticated stone finishes offering the cool grandeur of Italian marble combined with light weight and seamless edge bonding.',
    heroTags: [
      { text: 'Marble Aesthetics', icon: 'sparkles' },
      { text: 'Heat Proof 180°C', icon: 'droplet' },
      { text: 'Stain Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Marble Elegance', desc: 'Seamless veining without heavy stone slabs', icon: 'sparkles' },
      { title: 'Heat Resistant', desc: 'Resists boiling water and hot cookware', icon: 'droplet' },
      { title: 'Easy Maintenance', desc: 'Simple wipe with microfiber cloth', icon: 'leaf' }
    ]
  },
  {
    id: 26,
    brandId: 'croma-laminates',
    category: 'Laminates',
    pageNumLeft: 15,
    pageNumRight: 16,
    badge: 'Modern Surfaces',
    title: 'Decorative Surfaces\n& Colors.',
    tagline: 'Ultra-modern metallic and decorative laminates',
    image: chromaLaminates1Img,
    brandName: 'Croma',
    desc: 'Croma Decorative Laminates deliver brushed copper, metallic chrome, and synchronized woodgrain decors for visionary spaces.',
    thicknesses: ['0.8mm', '1.0mm'],
    defaultThickness: '1.0mm',
    features: ['Brushed Metal Finish', 'Vibrant Solids', 'Scratch Resistant'],
    applications: ['Commercial Bar Countertops', 'Reception Desks', 'Accent Panels'],
    specs: {
      'Material': 'Metallic Foil & Phenolic Kraft',
      'Surface Finish': 'Brushed Copper Chrome & High Gloss',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'MODERN SURFACES. VIBRANT COLORS & METALLICS.',
    heroTitle: 'CROMA',
    heroDesc: 'Croma Decorative Laminates deliver brushed copper, metallic chrome, and synchronized woodgrain decors for visionary interior designs.',
    heroTags: [
      { text: 'Brushed Metallic', icon: 'sparkles' },
      { text: 'Vibrant Solids', icon: 'gear' },
      { text: 'Scratch Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Brushed Metallic', desc: 'Real copper and chrome foil textures', icon: 'sparkles' },
      { title: 'Industrial Design', desc: 'Futuristic high-tech sheen', icon: 'gear' },
      { title: 'Scratch Proof', desc: 'Coated for heavy daily commercial use', icon: 'shield' },
      { title: 'Fire Retardant', desc: 'Enhanced fire resistance properties', icon: 'shield' },
      { title: 'Anti-Corrosion', desc: 'Protective top clear sealant layer', icon: 'droplet' }
    ]
  },
  {
    id: 261,
    brandId: 'croma-laminates-gloss',
    category: 'Laminates',
    pageNumLeft: 15,
    pageNumRight: 16,
    hideFromIndex: true,
    parentBrandId: 'croma-laminates',
    badge: 'High Gloss Series',
    title: 'Vibrant Solids &\nHigh Gloss.',
    tagline: 'Expansive color palette and mirror-like reflection',
    image: chromaLaminates2Img,
    brandName: 'Croma',
    desc: 'Mirror-finish gloss laminate sheets in striking modern hues, ideal for wardrobe shutters and designer kitchen cabinets.',
    thicknesses: ['1.0mm'],
    defaultThickness: '1.0mm',
    features: ['Mirror Reflection', 'Anti-Yellowing', 'High Wear'],
    applications: ['Wardrobes', 'Kitchen Shutters', 'Retail Displays'],
    specs: {
      'Finish': 'Mirror Gloss',
      'Reflectivity': '>90 Gloss Units',
      'Cleaning': 'Anti-Static Dust Repellent'
    },
    heroSub: 'MIRROR REFLECTION. VIBRANT MODERN HUES.',
    heroTitle: 'CROMA',
    heroDesc: 'Mirror-finish gloss laminate sheets in striking modern hues, ideal for wardrobe shutters and designer kitchen cabinets.',
    heroTags: [
      { text: 'Mirror Gloss', icon: 'sparkles' },
      { text: 'Dust Repellent', icon: 'shield' },
      { text: 'UV Fast', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Mirror Gloss', desc: 'Glass-like depth and reflection', icon: 'sparkles' },
      { title: 'Color Fastness', desc: 'Zero fading under bright showroom lights', icon: 'shield' },
      { title: 'Scratch Barrier', desc: 'Resistant to daily scuffs and wipes', icon: 'gear' }
    ]
  },
  {
    id: 262,
    brandId: 'croma-laminates-metallic',
    category: 'Laminates',
    pageNumLeft: 15,
    pageNumRight: 16,
    hideFromIndex: true,
    parentBrandId: 'croma-laminates',
    badge: 'Brushed Copper',
    title: 'Brushed Copper\nMetallic.',
    tagline: 'Real metallic foil top surface for futuristic accents',
    image: chroma1Img,
    brandName: 'Croma',
    desc: 'Real brushed copper metallic foil bonded with phenolic kraft backing, offering an authentic industrial feel.',
    thicknesses: ['1.0mm'],
    defaultThickness: '1.0mm',
    features: ['Real Copper Foil', 'Anti-Oxidant Coat', 'Scratch Resistant'],
    applications: ['Bar Counters', 'Elevator Lobbies', 'Feature Pillars'],
    specs: {
      'Material': 'Genuine Metallic Copper Foil',
      'Top Coat': 'Polyurethane Protective Sealant',
      'Standard Size': '8ft x 4ft'
    },
    heroSub: 'GENUINE COPPER FOIL. INDUSTRIAL SHEEN.',
    heroTitle: 'CROMA',
    heroDesc: 'Real brushed copper metallic foil bonded with phenolic kraft backing, offering an authentic industrial feel.',
    heroTags: [
      { text: 'Copper Foil', icon: 'sparkles' },
      { text: 'Anti-Oxidant', icon: 'shield' },
      { text: 'Futuristic', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Authentic Metal', desc: 'Tactile brushed copper foil feel', icon: 'sparkles' },
      { title: 'Sealant Protected', desc: 'No tarnishing or oxidation', icon: 'shield' },
      { title: 'Accent Ready', desc: 'Perfect contrast for dark wood and stone', icon: 'gear' }
    ]
  },
  {
    id: 263,
    brandId: 'croma-laminates-chrome',
    category: 'Laminates',
    pageNumLeft: 15,
    pageNumRight: 16,
    hideFromIndex: true,
    parentBrandId: 'croma-laminates',
    badge: 'Industrial Chrome',
    title: 'Industrial Chrome\nSheen.',
    tagline: 'High-tech brushed chrome finish for bars and counters',
    image: chroma2Img,
    brandName: 'Croma',
    desc: 'Sleek brushed chrome foil laminate providing a clean, tech-forward architectural look for modern retail and hospitality projects.',
    thicknesses: ['1.0mm'],
    defaultThickness: '1.0mm',
    features: ['Brushed Chrome', 'Non-Corrosive', 'High Thermal Stability'],
    applications: ['Showrooms', 'Reception Counters', 'Commercial Partitions'],
    specs: {
      'Foil': 'Brushed Aluminum / Chrome',
      'Adhesive': 'Phenolic Thermosetting Resin',
      'Resistance': '180°C Heat Tested'
    },
    heroSub: 'BRUSHED CHROME. HI-TECH ARCHITECTURAL FINISH.',
    heroTitle: 'CROMA',
    heroDesc: 'Sleek brushed chrome foil laminate providing a clean, tech-forward architectural look for modern retail and hospitality projects.',
    heroTags: [
      { text: 'Brushed Chrome', icon: 'gear' },
      { text: 'Non-Corrosive', icon: 'shield' },
      { text: 'High Tech', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Brushed Aluminum', desc: 'Clean metallic reflections', icon: 'gear' },
      { title: 'Heavy Duty', desc: 'Built for high traffic public spaces', icon: 'shield' },
      { title: 'Precision Cut', desc: 'Crisp edges without metal burrs', icon: 'calibrate' }
    ]
  },
  {
    id: 264,
    brandId: 'croma-laminates-decor',
    category: 'Laminates',
    pageNumLeft: 15,
    pageNumRight: 16,
    hideFromIndex: true,
    parentBrandId: 'croma-laminates',
    badge: 'Synchronized Decors',
    title: 'Contemporary\nWood Decors.',
    tagline: 'Fade-resistant surface with modern synchronized grain',
    image: chroma3Img,
    brandName: 'Croma',
    desc: 'Warm synchronized wood decors engineered to withstand severe humidity and everyday wear with timeless style.',
    thicknesses: ['1.0mm'],
    defaultThickness: '1.0mm',
    features: ['Synchronized Grain', 'Fade Resistant', 'Stain Resistant'],
    applications: ['Wardrobes', 'Kitchen Cabinets', 'Study Desks'],
    specs: {
      'Texture': 'Natural Matt Woodgrain',
      'Heat Resistance': 'Up to 180°C',
      'Cleaning': 'Damp Cloth'
    },
    heroSub: 'SYNCHRONIZED WOOD DECOR. FADE RESISTANT.',
    heroTitle: 'CROMA',
    heroDesc: 'Warm synchronized wood decors engineered to withstand severe humidity and everyday wear with timeless style.',
    heroTags: [
      { text: 'Woodgrain Series', icon: 'wood' },
      { text: 'Fade Resistant', icon: 'sparkles' },
      { text: 'Stain Proof', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Natural Woodgrain', desc: 'Tactile realistic timber texture', icon: 'wood' },
      { title: 'Fade Resistant', desc: 'UV stabilized pigments retain beauty', icon: 'sparkles' },
      { title: 'Durable Kraft', desc: 'Phenolic resin core ensures zero warping', icon: 'shield' }
    ]
  },
  {
    id: 401,
    brandId: 'merino-laminates',
    category: 'Laminates',
    pageNumLeft: 17,
    pageNumRight: 18,
    badge: 'Surface Innovations',
    title: 'Design Mastery &\nHigh Pressure.',
    tagline: 'Merino Decorative Laminates for Modern Interiors',
    image: merino1Img,
    brandName: 'Merino',
    desc: 'Merino high-pressure decorative laminates combine trendsetting surface aesthetics with exceptional scratch and stain durability.',
    thicknesses: ['0.8mm', '1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Anti-Bacterial', 'Super Matt & High Gloss', 'Stain Resistant'],
    applications: ['Living Spaces', 'Kitchen Counters', 'Bespoke Wardrobes'],
    specs: {
      'Material': 'Phenolic Resin Kraft',
      'Surface Finish': 'Matt / Suede / Gloss',
      'Heat Resistance': 'Up to 180°C'
    },
    heroSub: 'MERINO LAMINATES. SURFACE MASTERY.',
    heroTitle: 'MERINO',
    heroDesc: 'Merino high-pressure decorative laminates combine trendsetting surface aesthetics with exceptional scratch and stain durability.',
    heroTags: [
      { text: 'Anti-Bacterial', icon: 'sparkles' },
      { text: 'Super Matt & Gloss', icon: 'sparkles' },
      { text: 'Stain Resistant', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Anti-Bacterial Protection', desc: 'Certified silver nano antibacterial shield', icon: 'sparkles' },
      { title: 'Scratch Resistant', desc: 'Heavy-duty melamine top layer', icon: 'shield' },
      { title: 'Moisture Immune', desc: 'Withstands ambient kitchen steam and spills', icon: 'droplet' },
      { title: 'UV Color Stability', desc: 'Maintains vibrant depth over decades', icon: 'sparkles' },
      { title: 'Eco Friendly Kraft', desc: 'Sustainably sourced kraft paper matrix', icon: 'leaf' }
    ]
  },
  {
    id: 402,
    brandId: 'merino-laminates-textures',
    category: 'Laminates',
    pageNumLeft: 17,
    pageNumRight: 18,
    hideFromIndex: true,
    parentBrandId: 'merino-laminates',
    badge: 'Architectural Woods',
    title: 'Architectural Grain &\nStone Looks.',
    tagline: 'Rich synchronized woodgrains and rustic textures',
    image: merino2Img,
    brandName: 'Merino',
    desc: 'Authentic synchronized tactile decors bringing Scandinavian woods and Italian stones to life in contemporary interiors.',
    thicknesses: ['1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Synchronized Grain', 'Tactile Texture', 'Impact Resistant'],
    applications: ['Wall Paneling', 'Modular Shutters', 'Executive Cabins'],
    specs: {
      'Texture': 'Synchronized Architectural Timber',
      'Impact Rating': 'Exceeds EN 438 Standards',
      'Standard Size': '8ft x 4ft'
    },
    heroSub: 'SYNCHRONIZED WOODGRAINS. ARCHITECTURAL TEXTURES.',
    heroTitle: 'MERINO',
    heroDesc: 'Authentic synchronized tactile decors bringing Scandinavian woods and Italian stones to life in contemporary interiors.',
    heroTags: [
      { text: 'Synchronized Grain', icon: 'wood' },
      { text: 'Impact Resistant', icon: 'shield' },
      { text: 'Stone Decors', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Deep Texture', desc: 'Tactile surface matching visual woodgrain', icon: 'wood' },
      { title: 'Impact Resistance', desc: 'Resists accidental blows and scratches', icon: 'shield' },
      { title: 'Seamless Edging', desc: 'Blends cleanly with matching edge bands', icon: 'calibrate' }
    ]
  },
  {
    id: 403,
    brandId: 'merino-laminates-matt',
    category: 'Laminates',
    pageNumLeft: 17,
    pageNumRight: 18,
    hideFromIndex: true,
    parentBrandId: 'merino-laminates',
    badge: 'Super Matt Series',
    title: 'Super Matt &\nVelvet Touch.',
    tagline: 'Anti-fingerprint silky surface for luxury wardrobes and shutters',
    image: merino3Img,
    brandName: 'Merino',
    desc: 'Silky, anti-fingerprint velvet matte surface with microscopic light diffusion, creating an ultra-premium visual stillness.',
    thicknesses: ['1.0mm', '1.2mm'],
    defaultThickness: '1.0mm',
    features: ['Anti-Fingerprint', 'Velvet Smoothness', 'Thermal Healing'],
    applications: ['Kitchen Cabinets', 'Master Wardrobes', 'Vanity Fronts'],
    specs: {
      'Finish': 'Velvet Super Matt',
      'Gloss': 'Ultra-Low (<3 Gloss Units)',
      'Cleaning': 'Soft Microfiber Wipe'
    },
    heroSub: 'VELVET SUPER MATT. ZERO FINGERPRINT RESIDUE.',
    heroTitle: 'MERINO',
    heroDesc: 'Silky, anti-fingerprint velvet matte surface with microscopic light diffusion, creating an ultra-premium visual stillness.',
    heroTags: [
      { text: 'Anti-Fingerprint', icon: 'sparkles' },
      { text: 'Velvet Soft Touch', icon: 'sparkles' },
      { text: 'Zero Glare', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Zero Glare', desc: 'Soft ambient light diffusion without harsh reflection', icon: 'sparkles' },
      { title: 'Smudge Free', desc: 'Fingerprints wipe away effortlessly without marks', icon: 'shield' },
      { title: 'Velvet Feel', desc: 'Indulgent, warm tactile response under touch', icon: 'sparkles' }
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
    brandName: 'Acrylic Panels',
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
    heroTitle: 'ACRYLIC PANELS',
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
    brandName: 'Acrylic Panels',
    desc: 'Offering high UV resistance and brilliant glass-like reflections, Premium Acrylic panels are scratch-resistant and eco-friendly.',
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
    heroTitle: 'ACRYLIC PANELS',
    heroDesc: 'Offering high UV resistance and brilliant glass-like reflections, Premium Acrylic panels are scratch-resistant and eco-friendly.',
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
    brandName: 'Acrylic Panels',
    desc: 'Offering textured matte finishes and excellent scratch resistance, Textured Acrylic panels are perfect for modern living spaces.',
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
    heroTitle: 'ACRYLIC PANELS',
    heroDesc: 'Offering textured matte finishes and excellent scratch resistance, Textured Acrylic panels are perfect for modern living spaces.',
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
    brandName: 'Acrylic Panels',
    desc: 'Vibrant Acrylic panels bring dynamic colors and premium glass-like gloss, adding an energetic modern touch to kitchen cabinets.',
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
    heroTitle: 'ACRYLIC PANELS',
    heroDesc: 'Vibrant Acrylic panels bring dynamic colors and premium glass-like gloss, adding an energetic modern touch to kitchen cabinets.',
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
    brandName: 'Acrylic Panels',
    desc: 'Combining high-impact resistance with an anti-fingerprint surface, Minimalist Acrylic panels are ideal for tables and desks.',
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
    heroTitle: 'ACRYLIC PANELS',
    heroDesc: 'Combining high-impact resistance with an anti-fingerprint surface, Minimalist Acrylic panels are ideal for tables and desks.',
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
    brandName: 'Acrylic Panels',
    desc: 'Specifically engineered for maximum wear resistance, Shield Acrylic panels combine heavy-duty thickness with elegant surface depth.',
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
    heroTitle: 'ACRYLIC PANELS',
    heroDesc: 'Specifically engineered for maximum wear resistance, Shield Acrylic panels combine heavy-duty thickness with elegant surface depth.',
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
    id: 200,
    brandId: 'steel-wood',
    category: 'Arch. Hardware',
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
    id: 232,
    brandId: 'hydraulic-hinge',
    category: 'Hardware & Fittings',
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
    id: 213,
    brandId: 'drawer-channel',
    category: 'Hardware & Fittings',
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
    id: 206,
    brandId: 'sliding-channels',
    category: 'Hardware & Fittings',
    pageNumLeft: 43,
    pageNumRight: 44,
    badge: 'Heavy Duty Slides',
    title: 'Heavy Duty\nSliding Channels.',
    tagline: 'Precision roll-formed steel sliding track and channel systems',
    image: slidingChannelsImg,
    brandName: 'Sliding Channels',
    desc: 'Heavy-duty precision sliding channel systems built from roll-formed high tensile carbon steel for silent and reliable sliding wardrobe doors and partitions.',
    thicknesses: ['Standard 45kg', 'Heavy Duty 65kg'],
    defaultThickness: 'Heavy Duty 65kg',
    features: ['Smooth Roller Action', 'High Load Capacity', 'Corrosion Resistant'],
    applications: ['Wardrobes', 'Kitchen Pull-outs', 'Pocket Doors'],
    specs: {
      'Material': 'Roll-formed Cold Rolled Steel',
      'Track Length': 'Up to 3.6m',
      'Load Rating': '65 kg'
    },
    heroSub: 'HEAVY DUTY SLIDES. SILENT GLIDE.',
    heroTitle: 'SLIDING CHANNELS',
    heroDesc: 'Heavy-duty precision sliding channel systems built from roll-formed high tensile carbon steel for silent and reliable sliding wardrobe doors and partitions.',
    heroTags: [
      { text: 'Smooth Roller Action', icon: 'gear' },
      { text: 'Heavy Duty Steel', icon: 'shield' },
      { text: '65kg Rating', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Smooth Roller Action', desc: 'Low-noise nylon bearing wheels for silent operation', icon: 'gear' },
      { title: 'Heavy Duty Steel', desc: 'High gauge rolled steel withstands repeated cycling', icon: 'shield' },
      { title: 'Precision Alignment', desc: 'Anti-jump and anti-derail track channels', icon: 'calibrate' },
      { title: 'Zinc Passivated', desc: 'Double surface coating prevents oxidation', icon: 'droplet' }
    ]
  },
  {
    id: 207,
    brandId: 'steelwood-butt-hinges',
    category: 'Hardware & Fittings',
    pageNumLeft: 45,
    pageNumRight: 46,
    badge: 'Butt Hinges',
    title: 'SS 304\nButt Hinges.',
    tagline: 'High load bearing stainless steel architectural butt hinges',
    image: hydraulicHingeImg,
    brandName: 'Steel Wood',
    desc: 'Heavy-duty AISI 304 grade architectural butt hinges with two precision ball bearings, ensuring frictionless rotation and lifetime durability for heavy doors.',
    thicknesses: ['4 x 3 x 3 mm', '5 x 3 x 3 mm'],
    defaultThickness: '5 x 3 x 3 mm',
    features: ['SS 304 Grade', 'Two Ball Bearings', 'High Load Bearing'],
    applications: ['Main Doors', 'Bedroom Doors', 'Heavy Flush Doors'],
    specs: {
      'Material': 'AISI 304 Stainless Steel',
      'Bearing': '2 Heavy Precision Ball Bearings',
      'Load Capacity': 'Up to 80 kg per pair'
    },
    heroSub: 'ARCHITECTURAL HINGES. SOLID SS 304.',
    heroTitle: 'STEEL WOOD BUTT HINGES',
    heroDesc: 'Heavy-duty AISI 304 grade architectural butt hinges with two precision ball bearings, ensuring frictionless rotation and lifetime durability for heavy doors.',
    heroTags: [
      { text: 'SS 304 Grade', icon: 'shield' },
      { text: 'Twin Ball Bearings', icon: 'gear' },
      { text: '80kg Load Rating', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'SS 304 Construction', desc: 'Marine grade stainless steel rust resistance', icon: 'shield' },
      { title: 'Twin Ball Bearings', desc: 'Frictionless rotation with zero hinge squeak', icon: 'gear' },
      { title: 'Countersunk Holes', desc: 'Flat flush screw mounting on door frames', icon: 'calibrate' },
      { title: '80kg Door Support', desc: 'Designed for solid wood and heavy veneered doors', icon: 'shield' }
    ]
  },
  {
    id: 216,
    brandId: 'corner-carousel',
    category: 'Hardware & Fittings',
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
    id: 208,
    brandId: 'sliding-systems',
    category: 'Hardware & Fittings',
    pageNumLeft: 49,
    pageNumRight: 50,
    badge: 'Sliding Hardware',
    title: 'Sliding &\nPivot Systems.',
    tagline: 'Smooth synchronized wardrobe sliding and pivot mechanisms',
    image: hardwareFittings1,
    brandName: 'Sliding & Pivot Systems',
    desc: 'High-performance sliding and pivot door gear systems engineered for silent gliding, heavy shutter support, and synchronized movement across modular wardrobes.',
    thicknesses: ['Top-Hung', 'Bottom-Rolling'],
    defaultThickness: 'Top-Hung',
    features: ['Synchronized Sliding', 'Soft-Damping Stopper', 'Quiet Nylon Bearings'],
    applications: ['Full-height Wardrobes', 'Glass Sliding Partitions', 'Walk-in Closets'],
    specs: {
      'Track Type': 'Heavy Extruded Aluminium',
      'Weight Rating': '80 kg per shutter',
      'Door Thickness': '18mm - 32mm'
    },
    heroSub: 'SLIDING & PIVOT SYSTEMS. PRECISION GEAR.',
    heroTitle: 'SLIDING & PIVOT SYSTEMS',
    heroDesc: 'High-performance sliding and pivot door gear systems engineered for silent gliding, heavy shutter support, and synchronized movement across modular wardrobes.',
    heroTags: [
      { text: 'Synchronized Sliding', icon: 'gear' },
      { text: 'Soft-Damping Stopper', icon: 'gear' },
      { text: '80kg Shutter Support', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Synchronized Run', desc: 'Both doors slide simultaneously with gentle touch', icon: 'gear' },
      { title: 'Soft-Close Dampers', desc: 'Hydraulic brakes stop door gently at both ends', icon: 'gear' },
      { title: 'Extruded Aluminium', desc: 'Rigid alloy track prevents bowing over long spans', icon: 'calibrate' },
      { title: 'Concealed Rollers', desc: 'Clean interior looks without visible hardware', icon: 'sparkles' }
    ]
  },
  {
    id: 209,
    brandId: 'drawer-runners-ii',
    category: 'Hardware & Fittings',
    pageNumLeft: 51,
    pageNumRight: 52,
    badge: 'Telescopic Runners',
    title: 'Precision\nDrawer Runners.',
    tagline: 'Full-extension soft-close ball bearing drawer runners',
    image: hardwareFittings2,
    brandName: 'Drawer Runners II',
    desc: 'Heavy-gauge zinc passivated cold-rolled steel telescopic runners engineered for heavy modular drawers with hydraulic buffering and silent smooth extension.',
    thicknesses: ['14 inch', '16 inch', '18 inch', '20 inch'],
    defaultThickness: '18 inch',
    features: ['Full Extension', 'Integrated Hydraulic Buffer', 'High Tensile Steel'],
    applications: ['Modular Kitchen Drawers', 'Office Pedestals', 'Filing Cabinets'],
    specs: {
      'Extension': '100% Full Extension',
      'Load Rating': '45 kg Dynamic',
      'Finish': 'Zinc Plated / Black'
    },
    heroSub: 'PRECISION RUNNERS. SILENT HYDRAULIC.',
    heroTitle: 'DRAWER RUNNERS II',
    heroDesc: 'Heavy-gauge zinc passivated cold-rolled steel telescopic runners engineered for heavy modular drawers with hydraulic buffering and silent smooth extension.',
    heroTags: [
      { text: 'Full Extension', icon: 'calibrate' },
      { text: 'Hydraulic Buffer', icon: 'gear' },
      { text: '45kg Dynamic Load', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Triple Fold Design', desc: 'Allows complete drawer box to pull out for easy reach', icon: 'calibrate' },
      { title: 'Silent Soft-Close', desc: 'Hydraulic piston gently pulls drawer shut silently', icon: 'gear' },
      { title: 'Micro-Gap Adjustment', desc: 'Fine adjustment tabs for perfect drawer spacing', icon: 'calibrate' },
      { title: 'Tested 80,000 Cycles', desc: 'Guaranteed smooth glide through daily repetitive use', icon: 'shield' }
    ]
  },
  {
    id: 210,
    brandId: 'undermount-slides',
    category: 'Hardware & Fittings',
    pageNumLeft: 53,
    pageNumRight: 54,
    badge: 'Concealed Slides',
    title: 'Concealed\nUndermount Slides.',
    tagline: 'Concealed bottom-mount runners with integrated dampening',
    image: hardwareFittings3,
    brandName: 'Undermount Slides',
    desc: 'Hidden bottom-mounted drawer runners that preserve the natural wood beauty of drawer boxes, featuring synchronized fluid action and feather-light touch soft-closing.',
    thicknesses: ['Soft-Close', 'Push-to-Open'],
    defaultThickness: 'Soft-Close',
    features: ['Concealed Installation', 'Synchronized Action', 'Tool-Free Quick Release'],
    applications: ['Luxury Bathroom Vanities', 'High-end Kitchens', 'Dresser Drawers'],
    specs: {
      'Mounting': 'Concealed Under-Drawer Mount',
      'Dynamic Load': '35 kg',
      'Drawer Thickness': 'Up to 16mm wood'
    },
    heroSub: 'CONCEALED SLIDES. INVISIBLE LUXURY.',
    heroTitle: 'UNDERMOUNT SLIDES',
    heroDesc: 'Hidden bottom-mounted drawer runners that preserve the natural wood beauty of drawer boxes, featuring synchronized fluid action and feather-light touch soft-closing.',
    heroTags: [
      { text: 'Concealed Mount', icon: 'sparkles' },
      { text: 'Synchronized Action', icon: 'gear' },
      { text: '35kg Dynamic Load', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Invisible Hardware', desc: 'Hidden beneath drawer bottom for pure wooden aesthetics', icon: 'sparkles' },
      { title: 'Synchronized Rack', desc: 'Eliminates drawer wiggle and tilt under heavy loads', icon: 'gear' },
      { title: 'Tool-Free Clip Release', desc: 'Quick front release clips for swift removal and cleaning', icon: 'calibrate' },
      { title: 'Smooth Feather Motion', desc: 'Effortless opening and cushioned soft closing', icon: 'gear' }
    ]
  },
  {
    id: 211,
    brandId: 'wardrobe-sliding-system',
    category: 'Hardware & Fittings',
    pageNumLeft: 55,
    pageNumRight: 56,
    badge: 'Wardrobe Systems',
    title: 'Modular\nWardrobe Systems.',
    tagline: 'Heavy-duty top hung and bottom rolling wardrobe fittings',
    image: hardwareFittings4,
    brandName: 'Wardrobe Sliding System',
    desc: 'Complete architectural wardrobe sliding fitting system featuring double-direction soft damping, heavy-duty aluminium profile tracks, and anti-jump safety rollers.',
    thicknesses: ['2-Door System', '3-Door System'],
    defaultThickness: '2-Door System',
    features: ['Top-Hung Concealed Track', 'Two-Way Dampening', 'Heavy Door Support'],
    applications: ['Floor-to-Ceiling Wardrobes', 'Modular Bedroom Closets', 'Commercial Partitions'],
    specs: {
      'Max Door Weight': '100 kg per door',
      'Door Height': 'Up to 2.8m',
      'Guide Mechanism': 'Self-cleaning roller guides'
    },
    heroSub: 'WARDROBE SYSTEMS. ARCHITECTURAL GRADE.',
    heroTitle: 'WARDROBE SLIDING SYSTEM',
    heroDesc: 'Complete architectural wardrobe sliding fitting system featuring double-direction soft damping, heavy-duty aluminium profile tracks, and anti-jump safety rollers.',
    heroTags: [
      { text: '100kg Capacity', icon: 'shield' },
      { text: 'Two-Way Dampening', icon: 'gear' },
      { text: 'Aluminium Track', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: '100kg Capacity', desc: 'Engineered for full solid-core and veneered large doors', icon: 'shield' },
      { title: 'Bi-Directional Soft-Close', desc: 'Gentle cushioning on both open and close stops', icon: 'gear' },
      { title: 'Floor-Clearance Freedom', desc: 'Top-hung design leaves floor completely unobstructed', icon: 'calibrate' },
      { title: 'Anti-Jump Safety Clips', desc: 'Prevents shutter dislodgement even with rapid slides', icon: 'shield' }
    ]
  },
  {
    id: 212,
    brandId: 'utility-fittings',
    category: 'Hardware & Fittings',
    pageNumLeft: 57,
    pageNumRight: 58,
    badge: 'Cabinet Fittings',
    title: 'Modular\nCabinet Fittings.',
    tagline: 'Heavy-duty brackets, gas springs and modular cabinet fittings',
    image: hardwareFittings8,
    brandName: 'Utility Fittings',
    desc: 'Heavy-duty overhead gas spring lifts, flap fittings, and structural cabinet brackets engineered to support seamless upward opening and secure cabinetry assembly.',
    thicknesses: ['Gas Spring 100N', 'Gas Spring 150N', 'Cabinet Brackets'],
    defaultThickness: 'Gas Spring 100N',
    features: ['High Pneumatic Force', 'Rust-Resistant Cylinder', 'Easy Pivot Mounting'],
    applications: ['Overhead Kitchen Cabinets', 'Lift-up Flap Doors', 'Under-bed Storage'],
    specs: {
      'Force Rating': '100N / 150N / 200N',
      'Stroke Length': '90mm',
      'Cycle Life': '50,000 Cycles'
    },
    heroSub: 'CABINET FITTINGS. PNEUMATIC UTILITY.',
    heroTitle: 'UTILITY FITTINGS',
    heroDesc: 'Heavy-duty overhead gas spring lifts, flap fittings, and structural cabinet brackets engineered to support seamless upward opening and secure cabinetry assembly.',
    heroTags: [
      { text: 'Pneumatic Lift', icon: 'gear' },
      { text: '50k Cycles Tested', icon: 'shield' },
      { text: 'Heavy Load Brackets', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Pneumatic Lift Assist', desc: 'Effortless opening and stay-open support for flap doors', icon: 'gear' },
      { title: 'Nitrogen-Charged Cylinder', desc: 'Consistent damping force without pressure drop', icon: 'shield' },
      { title: 'Reinforced Mount Brackets', desc: 'Distributes load safely across cabinet sides', icon: 'calibrate' },
      { title: 'Quick Click Installation', desc: 'Snap-on ball socket connectors for easy fitting', icon: 'gear' }
    ]
  },
  {
    id: 230,
    brandId: 'astdax-others',
    category: 'Hardware & Fittings',
    pageNumLeft: 59,
    pageNumRight: 60,
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
    id: 231,
    brandId: 'astdax-sofaleg',
    category: 'Hardware & Fittings',
    pageNumLeft: 61,
    pageNumRight: 62,
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
  {
    id: 222,
    brandId: 'astdax-hardwares',
    category: 'Arch. Hardware',
    pageNumLeft: 63,
    pageNumRight: 64,
    badge: 'Premium Handles',
    title: 'Designer\nHandles.',
    tagline: 'Premium zinc alloy cabinet pulls with multi-finish options',
    image: astdaxHardware1Img,
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
    id: 223,
    brandId: 'astdax-hardwares-2',
    category: 'Arch. Hardware',
    pageNumLeft: 65,
    pageNumRight: 66,
    parentBrandId: 'astdax-hardwares',
    badge: 'Premium Collection',
    title: 'Fusion\nHandles.',
    tagline: 'Dual-material fusion handles with wood & metal combination',
    image: astdaxHardware2Img,
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
    id: 224,
    brandId: 'astdax-conceal',
    category: 'Arch. Hardware',
    pageNumLeft: 67,
    pageNumRight: 68,
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
    id: 225,
    brandId: 'astdax-conceal-2',
    category: 'Arch. Hardware',
    pageNumLeft: 69,
    pageNumRight: 70,
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
    id: 226,
    brandId: 'astdax-curtain',
    category: 'Arch. Hardware',
    pageNumLeft: 71,
    pageNumRight: 72,
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
    id: 227,
    brandId: 'astdax-curtain-2',
    category: 'Arch. Hardware',
    pageNumLeft: 73,
    pageNumRight: 74,
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
    id: 228,
    brandId: 'astdax-knob',
    category: 'Arch. Hardware',
    pageNumLeft: 75,
    pageNumRight: 76,
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
    id: 229,
    brandId: 'astdax-knob-2',
    category: 'Arch. Hardware',
    pageNumLeft: 77,
    pageNumRight: 78,
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
    id: 201,
    brandId: 'steelwood-door-fittings',
    category: 'Arch. Hardware',
    pageNumLeft: 79,
    pageNumRight: 80,
    badge: 'Door Fittings',
    title: 'Architectural\nDoor Fittings.',
    tagline: 'Precision engineered luxury door hardware & fittings',
    image: hardwareImg,
    brandName: 'Steel Wood',
    desc: 'Architectural grade solid brass and stainless steel door hardware accessories designed for luxury main doors, high security latching, and enduring performance.',
    thicknesses: ['Brass Finish', 'Satin Nickel', 'Antique Bronze'],
    defaultThickness: 'Brass Finish',
    features: ['Solid Brass Alloy', 'Heavy Security Rating', 'Anti-Tarnish Coating'],
    applications: ['Main Entrance Doors', 'Luxury Villa Entries', 'Commercial Suites'],
    specs: {
      'Material Grade': 'Solid Forged Brass & SS 304',
      'Finish': 'PVD Titanium Brass / Satin Steel',
      'Corrosion Resistance': '500-hour Salt Spray Tested'
    },
    heroSub: 'DOOR FITTINGS. ARCHITECTURAL LUXURY.',
    heroTitle: 'STEEL WOOD DOOR FITTINGS',
    heroDesc: 'Architectural grade solid brass and stainless steel door hardware accessories designed for luxury main doors, high security latching, and enduring performance.',
    heroTags: [
      { text: 'Solid Brass Core', icon: 'shield' },
      { text: 'PVD Scratch Proof', icon: 'sparkles' },
      { text: 'Universal Mounting', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Forged Brass Core', desc: 'High-density metal casting resists forced entry', icon: 'shield' },
      { title: 'PVD Scratch Coating', desc: 'Lifetime luster without fading or peeling', icon: 'sparkles' },
      { title: 'Architectural Profile', desc: 'Bold sculptured styling for premium doors', icon: 'calibrate' },
      { title: 'Universal Mounting', desc: 'Fits all standard wooden and composite doors', icon: 'gear' }
    ]
  },
  {
    id: 202,
    brandId: 'steelwood-mortise',
    category: 'Arch. Hardware',
    pageNumLeft: 81,
    pageNumRight: 82,
    badge: 'Mortise Locks',
    title: 'Security\nMortise Locks.',
    tagline: 'High-security brass cylinder mortise latch & lock systems',
    image: mortise,
    brandName: 'Steel Wood',
    desc: 'Precision engineered Euro-profile security mortise lock bodies equipped with anti-pick brass cylinder, hardened steel deadbolt, and reversible silent latch.',
    thicknesses: ['Double Cylinder', 'Thumbturn Cylinder'],
    defaultThickness: 'Double Cylinder',
    features: ['Solid Brass Deadbolt', 'Anti-Drill Pin Cylinder', 'Smooth Latch Retraction'],
    applications: ['External Doors', 'Office Cabins', 'Master Bedrooms'],
    specs: {
      'Lock Type': 'Euro Profile Mortise Body',
      'Backset': '50mm / 60mm',
      'Deadbolt Throw': '20mm Double Throw'
    },
    heroSub: 'MORTISE LOCKS. ADVANCED SECURITY.',
    heroTitle: 'STEEL WOOD MORTISE LOCKS',
    heroDesc: 'Precision engineered Euro-profile security mortise lock bodies equipped with anti-pick brass cylinder, hardened steel deadbolt, and reversible silent latch.',
    heroTags: [
      { text: 'Hardened Deadbolt', icon: 'shield' },
      { text: 'Brass Pin Cylinder', icon: 'shield' },
      { text: 'Silent Reversible Latch', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Hardened Deadbolt', desc: 'Resists hacksaw cuts and crowbar pressure', icon: 'shield' },
      { title: 'Brass Pin Cylinder', desc: 'Over 100,000 unique key combinations', icon: 'shield' },
      { title: 'Silent Reversible Latch', desc: 'Adjusts for left or right handed doors effortlessly', icon: 'gear' },
      { title: 'Heavy Faceplate', desc: 'Solid stainless steel faceplate with smooth bevels', icon: 'calibrate' }
    ]
  },
  {
    id: 203,
    brandId: 'steelwood-support',
    category: 'Arch. Hardware',
    pageNumLeft: 83,
    pageNumRight: 84,
    badge: 'Shelf Supports',
    title: 'Architectural\nSupports.',
    tagline: 'Heavy-load glass and wooden shelf bracket supports',
    image: support,
    brandName: 'Steel Wood',
    desc: 'Heavy-duty adjustable pelikan and glass shelf brackets manufactured from die-cast zinc alloy with cushioned soft rubber pads for damage-free shelf clamping.',
    thicknesses: ['Glass Clamp', 'Heavy Pelikan Support'],
    defaultThickness: 'Heavy Pelikan Support',
    features: ['Adjustable Clamping Gap', 'Soft Rubber Cushions', 'Mirror Chrome Finish'],
    applications: ['Glass Shelves', 'Display Cabinets', 'Bathroom Vanities'],
    specs: {
      'Material': 'Die-cast Zinc Alloy',
      'Clamping Range': '4mm - 25mm thickness',
      'Load Capacity': '25 kg per pair'
    },
    heroSub: 'SHELF SUPPORTS. HEAVY LOAD CAPACITY.',
    heroTitle: 'STEEL WOOD SHELF SUPPORTS',
    heroDesc: 'Heavy-duty adjustable pelikan and glass shelf brackets manufactured from die-cast zinc alloy with cushioned soft rubber pads for damage-free shelf clamping.',
    heroTags: [
      { text: 'Adjustable Jaws', icon: 'calibrate' },
      { text: 'Silicone Pads', icon: 'shield' },
      { text: '25kg per Pair', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Adjustable Jaws', desc: 'Accommodates glass and wood shelves from 4mm to 25mm', icon: 'calibrate' },
      { title: 'Protective Silicone Pads', desc: 'Prevents glass chipping and slips under vibration', icon: 'shield' },
      { title: 'Heavy Die-cast Alloy', desc: 'High rigidity without bending under shelf weight', icon: 'shield' },
      { title: 'Concealed Wall Fixings', desc: 'Sleek mount with zero exposed wall anchors', icon: 'sparkles' }
    ]
  },
  {
    id: 204,
    brandId: 'steelwood-lever-handles',
    category: 'Arch. Hardware',
    pageNumLeft: 85,
    pageNumRight: 86,
    badge: 'Lever Handles',
    title: 'Ergonomic\nLever Handles.',
    tagline: 'Architectural grade solid brass & zinc lever handles',
    image: hardwareFittings6,
    brandName: 'Steel Wood',
    desc: 'Modern designer door lever handles with concealed screw roses, spring-assisted return mechanisms, and luxury electroplated dual-tone finishes.',
    thicknesses: ['Rosegold-Black', 'Matt Black', 'Satin CP'],
    defaultThickness: 'Rosegold-Black',
    features: ['Spring-Assisted Mechanism', 'Ergonomic Grip', 'Dual-Tone Finish'],
    applications: ['Internal Doors', 'Luxury Hotel Rooms', 'Designer Residences'],
    specs: {
      'Material': 'High Purity Zinc / Solid Brass',
      'Spindle Size': '8mm Square Spindle',
      'Rose Type': 'Concealed Round / Square Rose'
    },
    heroSub: 'LEVER HANDLES. MODERN ERGONOMICS.',
    heroTitle: 'STEEL WOOD LEVER HANDLES',
    heroDesc: 'Modern designer door lever handles with concealed screw roses, spring-assisted return mechanisms, and luxury electroplated dual-tone finishes.',
    heroTags: [
      { text: 'Spring-Assisted', icon: 'gear' },
      { text: 'Ergonomic Grip', icon: 'gear' },
      { text: 'Dual-Tone PVD', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'High-Grade Return Spring', desc: 'Prevents handle sag and keeps lever horizontal', icon: 'gear' },
      { title: 'Comfort Palm Contour', desc: 'Ergonomically shaped for smooth hand operation', icon: 'gear' },
      { title: 'Scratch-Proof PVD', desc: 'Resistant to daily ring and key contact scratches', icon: 'sparkles' },
      { title: 'Clip-on Escutcheon', desc: 'Concealed screw rose creates clean door aesthetic', icon: 'calibrate' }
    ]
  },
  {
    id: 205,
    brandId: 'steelwood-door-closers',
    category: 'Arch. Hardware',
    pageNumLeft: 87,
    pageNumRight: 88,
    badge: 'Door Closers',
    title: 'Overhead\nDoor Closers.',
    tagline: 'Hydraulic speed-adjustable overhead commercial door closers',
    image: hardwareFittings7,
    brandName: 'Steel Wood',
    desc: 'Commercial-grade rack and pinion overhead hydraulic door closers featuring dual valve speed controls, latching action adjustments, and fire-resistant construction.',
    thicknesses: ['EN 2-4 Adjustable', 'Heavy Duty EN 5'],
    defaultThickness: 'EN 2-4 Adjustable',
    features: ['Dual Valve Speed Control', 'Rack & Pinion Mechanism', 'Fire Rated 120 mins'],
    applications: ['Commercial Entrances', 'Fire Exit Doors', 'Air-Conditioned Offices'],
    specs: {
      'Closing Force': 'EN Size 2 - 4 adjustable',
      'Max Door Width': '1100 mm',
      'Max Door Weight': '85 kg'
    },
    heroSub: 'DOOR CLOSERS. HYDRAULIC CONTROL.',
    heroTitle: 'STEEL WOOD DOOR CLOSERS',
    heroDesc: 'Commercial-grade rack and pinion overhead hydraulic door closers featuring dual valve speed controls, latching action adjustments, and fire-resistant construction.',
    heroTags: [
      { text: 'Dual Valve Control', icon: 'gear' },
      { text: 'Cast Aluminium Body', icon: 'shield' },
      { text: '500k Cycles Tested', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Independent Speed Valves', desc: 'Individual control of closing and latching speeds', icon: 'gear' },
      { title: 'Cast Aluminium Body', desc: 'Rugged leak-proof hydraulic chamber', icon: 'shield' },
      { title: 'Tested 500,000 Cycles', desc: 'Reliable operation for busy commercial entryways', icon: 'shield' },
      { title: 'Backcheck Cushioning', desc: 'Prevents door slamming against wall during gusts', icon: 'shield' }
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
    hallmark: 'Double-pressed with uniform thickness tolerance for flawless luxury cabinetry and architectural veneer backing.',
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
    tagline: 'Specially Formulated Bendable Architectural Ply',
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
    image: centuryPlywood1Img,
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
    image: greenPlywood1Img,
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
    image: vista1Img,
    categories: ['Laminates'],
    categorySummary: 'Laminates • Architectural Textures',
    tagline: 'Contemporary Textures & Natural Stone Looks',
    hallmark: 'Sophisticated architectural laminate range featuring realistic marble, rustic stone, and tactile woodgrain patterns.',
    tags: ['Stone Textures', 'Matte Finish', 'Impact Resistant'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 3 21 12 12 21 3 12" />
      </svg>
    )
  },
  {
    name: 'Croma',
    displayName: 'CROMA',
    trademark: true,
    image: chromaLaminates1Img,
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
    image: acrylicPanelsImg,
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
    image: merino1Img,
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
    hallmark: 'Hand-selected natural wood species, flitch-matched smoked veneers, and open-grain architectural surfaces.',
    tags: ['Natural Timber', 'Smoked Finishes', 'Bookmatched'],
    icon: (
      <svg className="w-7 h-7 text-[#C9A44C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18M6 21V7l6-4 6 4v14" />
      </svg>
    )
  },

  {
    name: 'Steel Wood',
    displayName: 'STEEL WOOD',
    trademark: true,
    image: hardwareFittings1,
    categories: ['Arch. Hardware', 'Hardware & Fittings', 'Sliding Systems', 'Kitchen Accessories'],
    categorySummary: 'Hardware & Kitchen • Precision Fittings',
    tagline: 'Heavy-Duty Drawer Systems & Sliding Hardware',
    hallmark: 'German-engineered soft-close hinges, tandem boxes, sliding wardrobe systems, and modular kitchen accessories.',
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
    categorySummary: 'Architectural Hardware • Luxury Brass & Zinc',
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
  }
];

export const CATEGORY_DEFINITIONS = [
  {
    key: 'Plywood',
    label: 'Plywood',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    )
  },
  {
    key: 'Laminates',
    label: 'Laminates',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    )
  },
  {
    key: 'Acrylic Panels',
    label: 'Acrylic Panels',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <line x1="10" y1="7" x2="14" y2="7" />
        <line x1="10" y1="10" x2="14" y2="10" />
      </svg>
    )
  },
  {
    key: 'Veneers',
    label: 'Veneers',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="1.8" strokeLinecap="round">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <line x1="8" y1="3" x2="8" y2="21" strokeDasharray="3 2" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="16" y1="3" x2="16" y2="21" strokeDasharray="3 2" />
      </svg>
    )
  },
  {
    key: 'Fancy Doors',
    label: 'Fancy Doors',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="1.8">
        <rect x="5" y="2.5" width="14" height="19" rx="1.5" />
        <circle cx="9" cy="12" r="1" fill={isActive ? '#C9A44C' : '#64748b'} />
      </svg>
    )
  },
  {
    key: 'Arch. Hardware',
    label: 'Arch. Hardware',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="6" height="6" rx="3" />
        <path d="M6 12h13a2 2 0 012 2v0a2 2 0 01-2 2h-1" />
        <circle cx="6" cy="12" r="1.2" fill={isActive ? '#C9A44C' : '#64748b'} />
      </svg>
    )
  },
  {
    key: 'Hardware & Fittings',
    label: 'Hardware & Fittings',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 5.5a2 2 0 00-2.8 2.8l1.4 1.4-7.5 7.5a1.5 1.5 0 002.1 2.1l7.5-7.5 1.4 1.4a2 2 0 002.8-2.8l-2.1-2.1 1.4-1.4a1 1 0 00-1.4-1.4l-1.4 1.4-1.4-1.4z" />
        <path d="M6 18l12-12" />
      </svg>
    )
  },
  {
    key: 'Kitchen Accessories',
    label: 'Kitchen Accessories',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v4l5 8v3H4v-3l5-8V3z" />
        <path d="M7 18v2M17 18v2" />
        <line x1="8" y1="15" x2="16" y2="15" />
      </svg>
    )
  },
  {
    key: 'Sliding Systems',
    label: 'Sliding Systems',
    icon: (isActive) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#C9A44C' : '#64748b'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 3v18" />
        <path d="M7.5 8v8M16.5 8v8" strokeDasharray="2 2" />
      </svg>
    )
  }
];

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

  useEffect(() => {
    const params = new URLSearchParams(search || window.location.search);
    const cat = params.get('category');
    const brand = params.get('brand');
    if (brand) {
      const matched = BRAND_CONFIG.find(b => b.name.toLowerCase() === brand.toLowerCase().trim());
      setSelectedBrand(matched ? matched.name : brand);
      const targetIdx = getIndexFromSearch(search || window.location.search);
      setCurrentSpreadIdx(targetIdx);
    } else if (cat) {
      const canonical = getCanonicalCategory(cat);
      setSelectedCategory(canonical);
      const brandForCat = BRAND_CONFIG.find(b =>
        b.categories && b.categories.map(c => getCanonicalCategory(c)).includes(canonical)
      );
      if (brandForCat) setSelectedBrand(brandForCat.name);
      const targetIdx = getIndexFromSearch(search || window.location.search);
      setCurrentSpreadIdx(targetIdx);
    } else {
      setSelectedBrand(null);
    }
  }, [search]);

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

  const handleBrandSelect = (brandName) => {
    if (!brandName) return;
    const bLower = brandName.toLowerCase().trim();
    setSelectedBrand(brandName);

    const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
    const newPath = `${basePrefix}/products?brand=${encodeURIComponent(brandName)}`;
    if (window.location.pathname + window.location.search !== newPath) {
      window.history.pushState({}, '', newPath);
    }

    // 1. Check if the currently selected category has spreads for this brand
    if (selectedCategory) {
      const spreadsInCurrentCat = SPREADS.filter(s => isBrandCategoryMatch(s, brandName, selectedCategory));
      if (spreadsInCurrentCat.length > 0) {
        const targetIdx = SPREADS.indexOf(spreadsInCurrentCat[0]);
        if (targetIdx !== -1) {
          setCurrentSpreadIdx(targetIdx);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 3. Fallback to brand config defined categories
    const brandObj = BRAND_CONFIG.find(b => b.name.toLowerCase() === bLower);
    if (brandObj && brandObj.categories && brandObj.categories.length > 0) {
      const newCat = getCanonicalCategory(brandObj.categories[0]);
      setSelectedCategory(newCat);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToAllBrands = () => {
    setSelectedBrand(null);
    const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
    window.history.pushState({}, '', `${basePrefix}/products`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        /* ALL BRANDS ONLY VIEW (When user opens products page, all brands ONLY appear - NO categories and NO products!) */
        <div className="w-full pt-[96px] sm:pt-[104px] pb-16 animate-fade-in">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Editorial Hero Header */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight font-sans leading-tight mb-4">
                Select a <span className="text-[#C9A44C] italic font-serif font-extrabold">Brand</span> to Explore
              </h1>
              <p className="text-sm sm:text-base text-stone-600 font-medium leading-relaxed max-w-2xl mb-8">
                PAKSHAL AGENCYS is an authorized partner for India's leading architectural plywood, decorative laminates, acrylic panels, designer doors, and hardware. Click on any brand below to view its specific categories and products.
              </p>

              {/* Centered Brand Search Input */}
              <div className="relative w-full max-w-lg mx-auto">
                <input
                  type="text"
                  value={brandSearchTerm}
                  onChange={(e) => setBrandSearchTerm(e.target.value)}
                  placeholder="Search for authorized brands..."
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

            {/* Brands Grid (Image-forward cards with zero brand logos) */}
            {BRAND_CONFIG.filter((b) => {
              if (brandSearchTerm.trim()) {
                const term = brandSearchTerm.toLowerCase().trim();
                const matchesName = b.name.toLowerCase().includes(term) || (b.displayName || '').toLowerCase().includes(term);
                const matchesTagline = (b.tagline || '').toLowerCase().includes(term);
                const matchesHallmark = (b.hallmark || '').toLowerCase().includes(term);
                const matchesCategories = (b.categories || []).some(c => c.toLowerCase().includes(term));
                if (!matchesName && !matchesTagline && !matchesHallmark && !matchesCategories) return false;
              }
              return true;
            }).length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 p-8 max-w-md mx-auto">
                <p className="text-stone-500 font-medium text-sm mb-4">No brands found matching "{brandSearchTerm}".</p>
                <button
                  type="button"
                  onClick={() => setBrandSearchTerm('')}
                  className="px-5 py-2.5 bg-[#C9A44C] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                >
                  View All Brands
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
                {BRAND_CONFIG.filter((b) => {
                  if (brandSearchTerm.trim()) {
                    const term = brandSearchTerm.toLowerCase().trim();
                    const matchesName = b.name.toLowerCase().includes(term) || (b.displayName || '').toLowerCase().includes(term);
                    const matchesTagline = (b.tagline || '').toLowerCase().includes(term);
                    const matchesHallmark = (b.hallmark || '').toLowerCase().includes(term);
                    const matchesCategories = (b.categories || []).some(c => c.toLowerCase().includes(term));
                    if (!matchesName && !matchesTagline && !matchesHallmark && !matchesCategories) return false;
                  }
                  return true;
                }).map((b) => (
                  <div
                    key={b.name}
                    onClick={() => handleBrandSelect(b.name)}
                    className="group relative bg-white rounded-3xl border border-stone-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between cursor-pointer overflow-hidden"
                  >
                    {/* Top Image Showcase (NO brand logos! Authentic product imagery) */}
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-stone-100">
                      <img
                        src={b.image}
                        alt={b.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient scrim for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                      {/* Floating Hallmark Pill Top-Left */}
                      {b.tags?.[0] && (
                        <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md text-[#E5C378] border border-[#C9A44C]/40 text-[9.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                          <span>{b.tags[0]}</span>
                        </div>
                      )}

                      {/* Floating Primary Category Pill Top-Right */}
                      {b.categories?.[0] && (
                        <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-stone-900 border border-white/60 text-[9.5px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                          {b.categories[0]}
                        </div>
                      )}

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
                ))}
              </div>
            )}

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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-[#8c6d23] transition-colors cursor-pointer group"
                    >
                      <svg className="w-3.5 h-3.5 text-[#C9A44C] group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                      <span>All Brands</span>
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
                      className={`group relative bg-white rounded-2xl border transition-all duration-200 cursor-pointer p-4 flex flex-col justify-between overflow-hidden ${
                        isCurrent
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

