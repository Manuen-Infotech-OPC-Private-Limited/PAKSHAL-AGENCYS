import React from 'react';

// Import all 26 kitchen images from assets/kitchen
import bifoldLiftUpImg from '../assets/kitchen/bifoldliftupsystem.png';
import cornerImg from '../assets/kitchen/corner.jpg';
import cutleryTrayImg from '../assets/kitchen/cutlerytray.png';
import cutleryTray2Img from '../assets/kitchen/cutlerytray2.png';
import glassBoxImg from '../assets/kitchen/glassbox.jpg';
import glassTandemBoxImg from '../assets/kitchen/glasstandembox.jpg';
import magicCornerImg from '../assets/kitchen/magiccorner.jpg';
import pullDownDishRackImg from '../assets/kitchen/pulldowndishrackelevator.jpg';
import pullDownElevatorImg from '../assets/kitchen/pulldownelevator.png';
import rollingShuttersImg from '../assets/kitchen/rollingshutters.png';
import sidePullout2Img from '../assets/kitchen/sidepulloutbox2.jpg';
import sidePulloutImg from '../assets/kitchen/sidepulloutboxes.jpg';
import slimBoxesImg from '../assets/kitchen/slimboxes.jpg';
import swingStorageImg from '../assets/kitchen/swingstoragebox.jpg';
import tandemBoxAccessoryImg from '../assets/kitchen/tandembox-accessory.jpg';
import universalGlassBoxImg from '../assets/kitchen/universalglassbox.jpg';
import ventilatorImg from '../assets/kitchen/ventilator.png';
import wastebinImg from '../assets/kitchen/wastebin.png';
import kitchenBasketImg from '../assets/kitchen/kitchenbasket.jpg';
import tandemBoxJpgImg from '../assets/kitchen/tandembox.jpg';
import tandemBoxPngImg from '../assets/kitchen/tandembox.png';
import channelBasketImg from '../assets/kitchen/homepage-channelbasket.png';
import channelDrawerImg from '../assets/kitchen/homepage-channeldrawer.png';
import multiTierTandemImg from '../assets/kitchen/homepage-tandemboxes.png';
import kitchenAccessoriesMasterImg from '../assets/kitchen/kitchenaccessories.png';
import kitchensCardImg from '../assets/kitchen/kitchens-card.jpg';

// Spreads dataset for ProductsPage catalogue booklet and sidebar index (All 26 kitchen assets)
export const kitchenAccessoriesSpreads = [
  {
    id: 101,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 71,
    pageNumRight: 72,
    badge: 'Upper Cabinet Storage',
    title: 'Pull-Down\nElevator.',
    tagline: 'Hydraulic elevator basket for overhead kitchen cabinets',
    image: pullDownElevatorImg,
    productName: 'Pull-Down Elevator System',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Heavy-duty hydraulic pull-down elevator basket system allowing effortless access to high overhead cabinet storage. Features smooth dampening and multi-stage weight adjustment.',
    material: 'Dark Gray',
    thicknesses: ['560x280x560mm', '760x280x560mm', '860x280x560mm'],
    defaultThickness: '760x280x560mm',
    thicknessLabel: 'Available Sizes (W x D x H)',
    features: ['Hydraulic Assist Mechanism', 'Dual Lift Capacity', 'SS 304 Rust-Proof Mesh'],
    applications: ['Overhead Cabinets', 'Pantry Storage', 'High Reach Storage'],
    specs: {
      'Mount Type': 'Overhead Wall Cabinet',
      'Weight Capacity': '15 kg',
      'Dampening': 'Dual Hydraulic Struts'
    },
    heroSub: 'SMART ERGONOMICS. EFFORTLESS ACCESS.',
    heroTitle: 'PULL-DOWN ELEVATOR',
    heroDesc: 'Heavy-duty hydraulic pull-down elevator basket system allowing effortless access to high overhead cabinet storage with dual lift capacity.',
    heroTags: [
      { text: 'Hydraulic Assist', icon: 'gear' },
      { text: '15kg Load Capacity', icon: 'shield' },
      { text: 'SS 304 Mesh', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Hydraulic Lift', desc: 'Smooth spring-assisted lowering & raising', icon: 'gear' },
      { title: 'Ergonomic Access', desc: 'Brings high overhead storage down to eye level', icon: 'calibrate' },
      { title: 'SS 304 Wire Mesh', desc: 'Food-grade stainless steel wire construction', icon: 'shield' },
      { title: '15kg Load Rating', desc: 'Engineered for heavy spice jars & dishes', icon: 'shield' },
      { title: 'Multi-Size Fit', desc: 'Compatible with 560mm, 760mm & 860mm units', icon: 'sparkles' }
    ]
  },
  {
    id: 102,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 73,
    pageNumRight: 74,
    badge: 'Dish Storage Elevator',
    title: 'Dish Rack\nElevator.',
    tagline: 'Pull-down dish drying rack with stainless drip tray',
    image: pullDownDishRackImg,
    productName: 'Pull-Down Dish Rack Elevator',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Specialized pull-down dish drying elevator with integrated water tray and plate slots. Sits neatly inside wall cabinets for space-saving dish drainage.',
    material: 'Dark Gray',
    thicknesses: ['560x280x560mm', '760x280x560mm', '860x280x560mm'],
    defaultThickness: '760x280x560mm',
    thicknessLabel: 'Available Sizes (W x D x H)',
    features: ['Integrated Drip Tray', 'Plate & Bowl Dividers', 'Soft-Return Dampener'],
    applications: ['Overhead Dish Storage', 'Wet Dish Drying', 'Wall Cabinets'],
    specs: {
      'Tray Material': 'SS 304 Removable Drip Tray',
      'Plate Capacity': 'Up to 24 Plates & 30 Bowls',
      'Return': 'Hydraulic Soft Return'
    },
    heroSub: 'OVERHEAD DISH DRYING. CLEAN HYGIENE.',
    heroTitle: 'DISH RACK ELEVATOR',
    heroDesc: 'Specialized pull-down dish drying elevator with integrated water tray and plate slots for hygienic dish storage inside wall cabinets.',
    heroTags: [
      { text: 'Drip Tray Included', icon: 'droplet' },
      { text: 'Plate Slots', icon: 'calibrate' },
      { text: 'Soft Return', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Removable Drip Tray', desc: 'Catches excess water droplets seamlessly', icon: 'droplet' },
      { title: 'SS 304 Dish Slots', desc: 'Holds plates, bowls, and glasses securely', icon: 'shield' },
      { title: 'Hydraulic Soft Return', desc: 'Pushes back up smoothly without noise', icon: 'gear' }
    ]
  },
  {
    id: 103,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 75,
    pageNumRight: 76,
    badge: 'Corner Optimization',
    title: 'Magic Corner\nUnit.',
    tagline: 'Soft-close pull-out blind corner basket organizer',
    image: magicCornerImg,
    productName: 'Magic Corner Storage',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Innovative magic corner pull-out basket mechanism that transforms awkward blind corner cabinets into fully accessible, dual-tier storage space.',
    material: 'Aluminum + Glass',
    thicknesses: ['900x460x600mm', '900x500x525mm'],
    defaultThickness: '900x460x600mm',
    thicknessLabel: 'Available Sizes (W x D x H)',
    features: ['Synchronized Pull-out', 'Soft-Close Motion', '4 Heavy-Duty Baskets'],
    applications: ['Blind Corner Cabinets', 'L-Shape Modular Kitchens', 'Corner Pantries'],
    specs: {
      'Baskets': '4 Tier Tempered Glass Shelves',
      'Load Capacity': '35 kg Dynamic Load',
      'Mechanism': 'Synchronized Articulated Arm'
    },
    heroSub: 'MAXIMUM CORNER UTILIZATION.',
    heroTitle: 'MAGIC CORNER UNIT',
    heroDesc: 'Innovative magic corner pull-out basket mechanism that transforms awkward blind corner cabinets into fully accessible, dual-tier storage space.',
    heroTags: [
      { text: 'Aluminum + Glass', icon: 'wood' },
      { text: '35kg Total Load', icon: 'shield' },
      { text: 'Soft-Close Motion', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Synchronized Glide', desc: 'Brings internal rear baskets forward effortlessly', icon: 'gear' },
      { title: 'Aluminum + Glass', desc: 'Tempered glass side walls with aluminum frame', icon: 'sparkles' },
      { title: '35kg Dynamic Load', desc: 'Holds large pressure cookers & utensils', icon: 'shield' }
    ]
  },
  {
    id: 104,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 77,
    pageNumRight: 78,
    badge: 'Rotary Corner Storage',
    title: 'Rotary Corner\nCarousel.',
    tagline: '360° revolving kidney tray corner storage',
    image: cornerImg,
    productName: 'Rotary Corner Carousel',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Smooth 360° revolving kidney-shaped corner shelf system designed to utilize deep corner cabinet dead zones with effortless rotational access.',
    material: 'Aluminum + Glass',
    thicknesses: ['900x460x600mm', '900x500x525mm'],
    defaultThickness: '900x460x600mm',
    thicknessLabel: 'Available Sizes (W x D x H)',
    features: ['360° Rotation', 'Height Adjustable Pole', 'Chrome Steel Trim'],
    applications: ['Base Corner Cabinets', 'Pantry Corners', 'Cookware Storage'],
    specs: {
      'Rotation': 'Independent 360° Swivel',
      'Tray Style': 'Kidney Shape Anti-Slip',
      'Center Axis': 'Telescopic Steel Pole'
    },
    heroSub: '360 DEGREE REVOLVING TRAY.',
    heroTitle: 'CORNER CAROUSEL',
    heroDesc: 'Smooth 360° revolving kidney-shaped corner shelf system designed to utilize deep corner cabinet dead zones with effortless rotational access.',
    heroTags: [
      { text: '360° Rotation', icon: 'flex' },
      { text: 'Height Adjustable', icon: 'calibrate' },
      { text: '25kg per Shelf', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '360 Rotational Glide', desc: 'Rotates smoothly to reach every stored item', icon: 'flex' },
      { title: 'Adjustable Center Pole', desc: 'Fits different cabinet interior heights', icon: 'calibrate' }
    ]
  },
  {
    id: 105,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 79,
    pageNumRight: 80,
    badge: 'Drawer Organization',
    title: 'Cutlery Tray\nOrganizers.',
    tagline: 'Modular plastic & metallic drawer insert trays',
    image: cutleryTrayImg,
    productName: 'Cutlery Tray Organizer',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Precision molded food-grade plastic cutlery inserts with adjustable divider slots for spoons, forks, knives, and cooking utensils.',
    thicknesses: ['450 mm Drawer', '600 mm Drawer', '900 mm Drawer'],
    defaultThickness: '600 mm Drawer',
    thicknessLabel: 'Compatible Drawer Width',
    features: ['Food-Grade Material', 'Trimmable Edges', 'Stain & Dishwasher Safe'],
    applications: ['Kitchen Drawers', 'Cutlery Storage', 'Utensil Organization'],
    specs: {
      'Material': 'BPA-Free Food Grade ABS',
      'Edge Finish': 'Trimmable Precision Flange',
      'Divider Layout': 'Multi-Section Utensil Bays'
    },
    heroSub: 'ORGANIZED CUTLERY. CLEAN & HYGIENIC.',
    heroTitle: 'CUTLERY TRAY ORGANIZER',
    heroDesc: 'Precision molded food-grade plastic cutlery inserts with adjustable divider slots for spoons, forks, knives, and cooking utensils.',
    heroTags: [
      { text: 'Food-Grade ABS', icon: 'shield' },
      { text: 'Trimmable Edges', icon: 'calibrate' },
      { text: 'Multiple Compartments', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Food Grade Hygiene', desc: 'BPA-free non-toxic molded material', icon: 'shield' },
      { title: 'Custom Trimmable Fit', desc: 'Can be trimmed along edges for exact fit', icon: 'calibrate' },
      { title: 'Easy Dishwashing', desc: 'Removes in seconds for effortless washing', icon: 'sparkles' }
    ]
  },
  {
    id: 106,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 81,
    pageNumRight: 82,
    badge: 'Premium Cutlery Series',
    title: 'Cutlery Tray\nSeries II.',
    tagline: 'Deep compartment utensil organizer tray',
    image: cutleryTray2Img,
    productName: 'Cutlery Tray Series II',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Deep multi-compartment executive cutlery tray with specialized knife block, spice bottle slots, and extended utensil dividers.',
    thicknesses: ['600 mm', '800 mm', '900 mm'],
    defaultThickness: '600 mm',
    thicknessLabel: 'Drawer Size Width',
    features: ['Deep Utensil Bays', 'Scratch-Proof Matte Coat', 'Spice Bottle Bay'],
    applications: ['Chef Drawers', 'Executive Kitchens', 'Utensil Organization'],
    specs: {
      'Finish': 'Anthracite Matte',
      'Depth': 'Extra Deep 65mm Bays',
      'Layout': 'Includes Integrated Knife Bay'
    },
    heroSub: 'EXECUTIVE UTENSIL MANAGEMENT.',
    heroTitle: 'CUTLERY TRAY II',
    heroDesc: 'Deep multi-compartment executive cutlery tray with specialized knife block, spice bottle slots, and extended utensil dividers.',
    heroTags: [
      { text: 'Deep Bays', icon: 'calibrate' },
      { text: 'Anthracite Grey', icon: 'sparkles' },
      { text: 'Scratch-Proof', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Deep Utensil Bays', desc: 'Accommodates long spatulas and rolling pins', icon: 'calibrate' },
      { title: 'Anthracite Finish', desc: 'Sleek luxury finish for modern tandem boxes', icon: 'sparkles' }
    ]
  },
  {
    id: 107,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 83,
    pageNumRight: 84,
    badge: 'Wall Cabinet Hardware',
    title: 'Bi-Fold Lift-Up\nSystem.',
    tagline: 'Parallel bi-fold door stay mechanism for upper cabinets',
    image: bifoldLiftUpImg,
    productName: 'Bi-Fold Lift-Up System',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'German-engineered bi-fold hydraulic lift system that folds wall cabinet doors upwards and out of the way for unrestricted overhead access.',
    thicknesses: ['Light Duty (Power 1)', 'Medium Duty (Power 2)', 'Heavy Duty (Power 3)'],
    defaultThickness: 'Medium Duty (Power 2)',
    thicknessLabel: 'Spring Power Factor',
    features: ['Smooth Variable Stop', 'Soft-Close Cushioning', 'Adjustable Power Mechanism'],
    applications: ['Overhead Kitchen Cabinets', 'Microwave Housing', 'Wall Furniture'],
    specs: {
      'Door Width': 'Up to 1800mm',
      'Door Height': '480mm to 1040mm',
      'Stop Action': 'Multi-Position Free Stop'
    },
    heroSub: 'PARALLEL BI-FOLD ELEVATION.',
    heroTitle: 'BI-FOLD LIFT-UP SYSTEM',
    heroDesc: 'German-engineered bi-fold hydraulic lift system that folds wall cabinet doors upwards and out of the way for unrestricted overhead access.',
    heroTags: [
      { text: 'Variable Stop', icon: 'gear' },
      { text: 'Soft-Close', icon: 'gear' },
      { text: '1800mm Max Width', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Bi-Fold Elevation', desc: 'Folds two door panels upward smoothly', icon: 'gear' },
      { title: 'Multi-Position Stop', desc: 'Stops securely at any desired opening height', icon: 'calibrate' },
      { title: 'Integrated Soft-Close', desc: 'Prevents slamming when closing upper shutters', icon: 'gear' }
    ]
  },
  {
    id: 108,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 85,
    pageNumRight: 86,
    badge: 'Appliance Garage',
    title: 'Kitchen Rolling\nShutters.',
    tagline: 'Glass & aluminum tambour door system for kitchen counter units',
    image: rollingShuttersImg,
    productName: 'Kitchen Rolling Shutters',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Sleek vertical rolling tambour shutter systems crafted from toughened glass or brushed aluminum slats. Perfect for hiding kitchen counter appliances.',
    colors: 'Silver, White, Black',
    thicknesses: ['450x1320mm', '600x1320mm', '900x1320mm'],
    defaultThickness: '600x1320mm',
    thicknessLabel: 'Available Unit Sizes (W x H)',
    features: ['Counter-balanced Spring', 'Smooth Vertical Roll', 'Space-Saving Tambour'],
    applications: ['Appliance Cabinets', 'Coffee Stations', 'Breakfast Counter Garages'],
    specs: {
      'Slat Material': 'Extruded Aluminum / Toughened Glass',
      'Roll Direction': 'Vertical Tambour Cassette',
      'Balance System': 'Spring Tension Roller'
    },
    heroSub: 'SLEEK APPLIANCE GARAGE STORAGE.',
    heroTitle: 'ROLLING SHUTTERS',
    heroDesc: 'Sleek vertical rolling tambour shutter systems crafted from toughened glass or brushed aluminum slats for kitchen counter units.',
    heroTags: [
      { text: 'Silver / White / Black', icon: 'sparkles' },
      { text: '450x1320 / 600x1320mm', icon: 'calibrate' },
      { text: 'Saves Counter Space', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Vertical Tambour Roll', desc: 'Glides vertically without swinging outwards', icon: 'flex' },
      { title: 'Appliance Concealment', desc: 'Keeps mixies, toasters & ovens hidden away', icon: 'shield' },
      { title: 'Smooth Spring Assist', desc: 'Stays balanced at any height smoothly', icon: 'gear' }
    ]
  },
  {
    id: 109,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 87,
    pageNumRight: 88,
    badge: 'Glass Side Drawers',
    title: 'Glass Tandem\nBox System.',
    tagline: 'Ultra-sleek double-wall metal drawer with tempered glass side panels',
    image: glassTandemBoxImg,
    productName: 'Glass Tandem Box System',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Luxury double-wall metal drawer system featuring crystal clear tempered glass side galleries, full extension concealed runners, and silent soft-close action.',
    thicknesses: ['90 mm Height', '150 mm Height', '200 mm Height'],
    defaultThickness: '150 mm Height',
    thicknessLabel: 'Side Wall Height Profile',
    features: ['Tempered Glass Inserts', '50kg Dynamic Load Rating', 'Concealed Soft-Close Runners'],
    applications: ['Luxury Kitchen Drawers', 'Pantry Pull-outs', 'Executive Cabinetry'],
    specs: {
      'Side Walls': 'Tempered Clear Safety Glass',
      'Runner Track': 'Synchronized Full Extension',
      'Dynamic Capacity': '50 kg'
    },
    heroSub: 'CRYSTAL CLEAR GLASS SIDE GALLERIES.',
    heroTitle: 'GLASS TANDEM BOX',
    heroDesc: 'Luxury double-wall metal drawer system featuring crystal clear tempered glass side galleries and full extension concealed runners.',
    heroTags: [
      { text: 'Tempered Glass Sides', icon: 'sparkles' },
      { text: '50kg Dynamic Load', icon: 'shield' },
      { text: 'Concealed Soft-Close', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Tempered Glass Gallery', desc: 'Elegant transparent side profile wall', icon: 'sparkles' },
      { title: '50kg Dynamic Load', desc: 'Heavy load capacity with zero drawer sag', icon: 'shield' },
      { title: 'Synchronized Glide', desc: 'Ultra quiet ball bearing runner tracks', icon: 'gear' }
    ]
  },
  {
    id: 110,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 89,
    pageNumRight: 90,
    badge: 'Modern Glass Drawers',
    title: 'Glass Box\nDrawers.',
    tagline: 'Frameless glass panel drawer side profiles',
    image: glassBoxImg,
    productName: 'Glass Box Drawers',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Minimalist frameless glass drawer sides with integrated LED strip ready grooves and soft-closing slide runners.',
    thicknesses: ['Standard 500mm Length', 'Short 450mm Length'],
    defaultThickness: 'Standard 500mm Length',
    features: ['Frameless Glass Design', 'Synchronized Rails', '3D Adjustment'],
    applications: ['Wardrobes', 'Kitchen Drawers', 'Display Units'],
    specs: {
      'Glass Type': 'Smoked Grey / Pure Clear Glass',
      'Slide Mechanism': 'Concealed Synchronized Runners',
      'Load Rating': '40 kg'
    },
    heroSub: 'FRAMELESS SMOKED & CLEAR GLASS.',
    heroTitle: 'GLASS BOX DRAWERS',
    heroDesc: 'Minimalist frameless glass drawer sides with integrated LED strip ready grooves and soft-closing slide runners.',
    heroTags: [
      { text: 'Frameless Glass', icon: 'sparkles' },
      { text: 'Smoked / Clear', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Smoked / Clear Options', desc: 'Sophisticated aesthetics for luxury interiors', icon: 'sparkles' }
    ]
  },
  {
    id: 111,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 91,
    pageNumRight: 92,
    badge: 'Universal Drawer Series',
    title: 'Universal Glass\nBox System.',
    tagline: 'Modular glass side box drawer system',
    image: universalGlassBoxImg,
    productName: 'Universal Glass Box System',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Versatile glass box drawer mechanism designed to fit both wooden and metal drawer back panels seamlessly.',
    thicknesses: ['Slim 12mm', 'Standard 16mm'],
    defaultThickness: 'Standard 16mm',
    features: ['Universal Back Adapter', 'Tool-less Assembly', 'Smooth Glide'],
    applications: ['Kitchens', 'Closets', 'Office Storage'],
    specs: {
      'Adapter Type': 'Universal Wooden & Metal Back',
      'Mounting': 'Click-on Tool-less Bracket',
      'Glide': 'Soft-Close Concealed'
    },
    heroSub: 'UNIVERSAL MODULAR DRAWER FIT.',
    heroTitle: 'UNIVERSAL GLASS BOX',
    heroDesc: 'Versatile glass box drawer mechanism designed to fit both wooden and metal drawer back panels seamlessly.',
    heroTags: [
      { text: 'Universal Fit', icon: 'calibrate' },
      { text: 'Tool-less Click', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Tool-less Fitting', desc: 'Quick snap-on assembly for rapid installation', icon: 'gear' }
    ]
  },
  {
    id: 112,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 93,
    pageNumRight: 94,
    badge: 'Ultra-Slim Side Profile',
    title: 'Slim Box\nDrawer System.',
    tagline: '13mm ultra-thin double-wall steel drawer box',
    image: slimBoxesImg,
    productName: 'Slim Box Drawer System',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'State-of-the-art 13mm straight-line ultra-slim metal side drawer box system. Maximizes internal drawer storage capacity with high aesthetic appeal.',
    thicknesses: ['13 mm Wall Thickness'],
    defaultThickness: '13 mm Wall Thickness',
    thicknessLabel: 'Side Wall Thickness',
    features: ['13mm Ultra-Slim Profile', 'Straight 90° Internal Walls', 'Soft-Close Synchronization'],
    applications: ['Modern Modular Kitchens', 'Minimalist Closets', 'Office Furniture'],
    specs: {
      'Wall Thickness': '13mm Straight Steel Profile',
      'Internal Angle': '90° Square Inner Walls',
      'Capacity': '65 kg Dynamic Load'
    },
    heroSub: '13MM ULTRA-SLIM STRAIGHT WALLS.',
    heroTitle: 'SLIM BOX SYSTEM',
    heroDesc: 'State-of-the-art 13mm straight-line ultra-slim metal side drawer box system that maximizes internal drawer storage capacity.',
    heroTags: [
      { text: '13mm Ultra-Slim', icon: 'calibrate' },
      { text: '90° Straight Inside', icon: 'calibrate' },
      { text: '65kg Dynamic Load', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: '13mm Ultra-Thin Wall', desc: 'Provides up to 15% more usable drawer volume', icon: 'calibrate' },
      { title: 'Straight 90 Interior', desc: 'No rounded corners inside for maximum storage', icon: 'calibrate' },
      { title: '65kg Heavy Duty Load', desc: 'Holds heavy ceramic crockery with absolute ease', icon: 'shield' }
    ]
  },
  {
    id: 113,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 95,
    pageNumRight: 96,
    badge: 'Double-Wall Metal Drawer',
    title: 'Kitchen Tandem\nBox.',
    tagline: 'Heavy-duty double-wall steel drawer box',
    image: tandemBoxAccessoryImg,
    productName: 'Kitchen Tandem Box',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Classic double-wall metallic tandem drawer box system with round railing options and high load-bearing concealed runners.',
    thicknesses: ['Low Drawer (84mm)', 'Medium Drawer (135mm)', 'High Drawer (199mm)'],
    defaultThickness: 'Medium Drawer (135mm)',
    features: ['Double-Wall Steel', 'Gallery Railings', 'Soft-Close Action'],
    applications: ['Kitchen Pots & Pans', 'Grocery Pull-outs', 'Tandem Drawers'],
    specs: {
      'Material': 'Cold-Rolled Steel Electroplated',
      'Closing Type': 'Integrated Hydraulic Piston',
      'Cycle Rating': '100,000 Tested Openings'
    },
    heroSub: 'CLASSIC METALLIC TANDEM DRAWER.',
    heroTitle: 'KITCHEN TANDEM BOX',
    heroDesc: 'Classic double-wall metallic tandem drawer box system with round railing options and high load-bearing concealed runners.',
    heroTags: [
      { text: 'Double-Wall Steel', icon: 'shield' },
      { text: 'Gallery Rails', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Double Wall Steel', desc: 'Durable electro-galvanized metallic side walls', icon: 'shield' }
    ]
  },
  {
    id: 114,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 97,
    pageNumRight: 98,
    badge: 'Spice & Bottle Pull-out',
    title: 'Side Pull-Out\nBaskets.',
    tagline: 'Multi-tier narrow cabinet spice & oil bottle organizer',
    image: sidePulloutImg,
    productName: 'Side Pull-Out Baskets',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Slim 150mm and 200mm side pull-out basket organizer for storing oil bottles, spice containers, and cooking sauces right next to the stove.',
    thicknesses: ['150 mm Cabinet', '200 mm Cabinet', '300 mm Cabinet'],
    defaultThickness: '150 mm Cabinet',
    thicknessLabel: 'Base Cabinet Width',
    features: ['SS 304 Wire Structure', 'Bottom/Side Mounted Runners', 'Integrated Bottle Divider Grid'],
    applications: ['Stovetop Side Cabinets', 'Spice Storage', 'Sauce & Oil Bottles'],
    specs: {
      'Structure': 'SS 304 Electroplated Wire Basket',
      'Runners': 'Heavy Under-Mount Soft-Close',
      'Dividers': 'Snap-on Bottle Stability Dividers'
    },
    heroSub: 'STOVETOP SPICE & BOTTLE ORGANIZER.',
    heroTitle: 'SIDE PULL-OUT BASKETS',
    heroDesc: 'Slim 150mm and 200mm side pull-out basket organizer for storing oil bottles, spice containers, and cooking sauces right next to the stove.',
    heroTags: [
      { text: '150/200mm Width', icon: 'calibrate' },
      { text: 'Bottle Dividers', icon: 'sparkles' },
      { text: 'SS 304 Chrome', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Bottle Divider Grid', desc: 'Prevents tall oil bottles from tipping over', icon: 'sparkles' },
      { title: 'Slim Cabinet Fit', desc: 'Fits 150mm narrow dead spaces beside hob', icon: 'calibrate' },
      { title: 'Soft-Close Runners', desc: 'Glides quietly back into cabinet body', icon: 'gear' }
    ]
  },
  {
    id: 115,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 99,
    pageNumRight: 100,
    badge: 'Sheet Base Pull-out',
    title: 'Side Pull-Out\nSeries II.',
    tagline: 'Solid wooden base side pull-out organizer',
    image: sidePullout2Img,
    productName: 'Side Pull-Out Series II',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Premium solid wooden/sheet base side pull-out unit with flat chrome railing guards for easy wipe-clean maintenance.',
    thicknesses: ['150 mm', '200 mm', '300 mm'],
    defaultThickness: '200 mm',
    features: ['Solid Flat Base', 'Flat Railing Profile', 'Soft-Close Under-mount Track'],
    applications: ['Base Units', 'Pantry Bottling', 'Kitchen Counter Storage'],
    specs: {
      'Base Tray': 'Non-Slip Solid Wooden Sheet Tray',
      'Rail Trim': 'Flat Brushed Chrome Guard',
      'Weight Capacity': '30 kg Dynamic'
    },
    heroSub: 'SOLID BASE WIPE-CLEAN PULL-OUT.',
    heroTitle: 'SIDE PULL-OUT II',
    heroDesc: 'Premium solid wooden/sheet base side pull-out unit with flat chrome railing guards for easy wipe-clean maintenance.',
    heroTags: [
      { text: 'Solid Sheet Base', icon: 'wood' },
      { text: 'Wipe-Clean', icon: 'sparkles' }
    ],
    overviewFeatures: [
      { title: 'Solid Sheet Base', desc: 'Spills wipe clean easily without dripping down', icon: 'wood' }
    ]
  },
  {
    id: 116,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 101,
    pageNumRight: 102,
    badge: 'Tall Pantry Storage',
    title: 'Swing Storage\nUnit.',
    tagline: 'Tandem tall pantry swing-out basket mechanism',
    image: swingStorageImg,
    productName: 'Swing Storage Unit',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'High-capacity tall pantry unit mechanism that swings internal rear shelves forward as the pantry door opens, providing dual-sided storage visibility.',
    thicknesses: ['450 mm Door (6 Tier)', '600 mm Door (6 Tier)'],
    defaultThickness: '450 mm Door (6 Tier)',
    thicknessLabel: 'Door Width & Tier Count',
    features: ['Dual Door & Cabinet Baskets', 'Heavy Load Swing Hinge', 'Adjustable Basket Height'],
    applications: ['Tall Pantry Cabinets', 'Bulk Grocery Storage', 'Kitchen Towers'],
    specs: {
      'Capacity': '100 kg Total Dynamic Load',
      'Basket Count': '12 Baskets (6 Body + 6 Door)',
      'Hinge System': 'Heavy-Duty Bearing Pivot'
    },
    heroSub: '100KG HEAVY-DUTY TALL PANTRY TOWER.',
    heroTitle: 'SWING STORAGE UNIT',
    heroDesc: 'High-capacity tall pantry unit mechanism that swings internal rear shelves forward as the pantry door opens, providing dual-sided storage visibility.',
    heroTags: [
      { text: '12 Baskets Total', icon: 'wood' },
      { text: '100kg Total Capacity', icon: 'shield' },
      { text: 'Dual Door + Body', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: '12 Tier Baskets', desc: '6 door baskets + 6 main cabinet baskets', icon: 'wood' },
      { title: '100kg Total Capacity', desc: 'Engineered for full bulk grocery storage', icon: 'shield' },
      { title: 'Synchronized Swing', desc: 'Rear shelves pull forward when door opens', icon: 'gear' }
    ]
  },
  {
    id: 117,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 103,
    pageNumRight: 104,
    badge: 'Waste Management',
    title: 'Pull-Out\nWaste Bin.',
    tagline: 'Built-in under-sink dual compartment pull-out waste bin',
    image: wastebinImg,
    productName: 'Pull-Out Waste Bin',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Hygienic dual-bin pull-out waste management system with integrated odor lid. Mounts under kitchen sinks for wet and dry waste segregation.',
    thicknesses: ['Dual Bin (2 x 14L)', 'Dual Bin (2 x 20L)'],
    defaultThickness: 'Dual Bin (2 x 14L)',
    thicknessLabel: 'Bin Capacity Option',
    features: ['Wet/Dry Segregation', 'Auto-Closing Odor Lid', 'Full Extension Soft-Close Tracks'],
    applications: ['Under-Sink Cabinets', 'Kitchen Waste Disposal', 'Wet Waste Management'],
    specs: {
      'Bucket Material': 'Virgin Food-Safe Polypropylene',
      'Odor Seal': 'Cabinet Mounted Auto Seal Lid',
      'Slide Mechanism': 'Heavy-Duty 30kg Soft-Close'
    },
    heroSub: 'UNDER-SINK HYGIENIC WASTE SEGREGATION.',
    heroTitle: 'PULL-OUT WASTE BIN',
    heroDesc: 'Hygienic dual-bin pull-out waste management system with integrated odor lid for wet and dry waste segregation under kitchen sinks.',
    heroTags: [
      { text: 'Dual Bin Segregation', icon: 'shield' },
      { text: 'Auto Odor Lid', icon: 'sparkles' },
      { text: 'Under-Sink Mount', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Wet & Dry Bins', desc: 'Two removable buckets for easy waste separation', icon: 'shield' },
      { title: 'Odor Control Lid', desc: 'Seals tight inside cabinet to prevent odors', icon: 'sparkles' },
      { title: 'Washable Polypropylene', desc: 'Smooth handles for effortless emptying & washing', icon: 'droplet' }
    ]
  },
  {
    id: 118,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 105,
    pageNumRight: 106,
    badge: 'Air Ventilation',
    title: 'Cabinet Ventilator\nGrills.',
    tagline: 'Aluminum air ventilation louvers for kitchen cabinets & appliances',
    image: ventilatorImg,
    productName: 'Cabinet Ventilator Grills',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Precision extruded aluminum ventilation grills designed to dissipate heat from oven housings, refrigerator cavities, and under-sink cabinets.',
    thicknesses: ['60mm x 225mm', '80mm x 300mm', '100mm x 500mm'],
    defaultThickness: '80mm x 300mm',
    thicknessLabel: 'Grill Dimensions',
    features: ['Heat Dissipation Louvers', 'Anodized Anti-Rust Finish', 'Recessed Flush Mount'],
    applications: ['Built-in Oven Cabinets', 'Refrigerator Enclosures', 'Sink Under-Counters'],
    specs: {
      'Profile': 'Aerodynamic Louvered Vanes',
      'Material': '6063-T5 Extruded Anodized Aluminum',
      'Finish': 'Satin Anodized Silver'
    },
    heroSub: 'APPLIANCE HEAT DISSIPATION & AIRFLOW.',
    heroTitle: 'VENTILATOR GRILLS',
    heroDesc: 'Precision extruded aluminum ventilation grills designed to dissipate heat from oven housings, refrigerator cavities, and under-sink cabinets.',
    heroTags: [
      { text: 'Heat Dissipation', icon: 'gear' },
      { text: 'Anodized Aluminum', icon: 'shield' },
      { text: 'Flush Fit', icon: 'calibrate' }
    ],
    overviewFeatures: [
      { title: 'Heat Dissipation', desc: 'Protects expensive kitchen electronics from overheating', icon: 'gear' },
      { title: 'Anodized Anti-Rust', desc: 'Durable finish unaffected by humidity or steam', icon: 'shield' }
    ]
  },
  {
    id: 119,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 107,
    pageNumRight: 108,
    badge: 'Wire Basket Organizer',
    title: 'Kitchen Wire\nBasket.',
    tagline: 'Stainless steel SS 304 modular kitchen basket for utensils & crockery',
    image: kitchenBasketImg,
    productName: 'Kitchen Basket',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Heavy-duty food-grade SS 304 stainless steel modular kitchen baskets designed for plate storage, cup-saucer organization, and heavy cookware load distribution.',
    material: 'SS 304 Stainless Steel',
    thicknesses: ['450mm Cabinet', '500mm Cabinet', '600mm Cabinet'],
    defaultThickness: '500mm Cabinet',
    thicknessLabel: 'Cabinet Width Fit',
    features: ['SS 304 Food-Grade', 'Chrome Electroplated', '45kg Heavy Weight Support'],
    applications: ['Modular Kitchens', 'Under-Counter Storage', 'Pantry Pull-Outs'],
    specs: {
      'Basket Material': 'SS 304 Food-grade',
      'Finish Type': 'Chrome Electroplated',
      'Rust Resistance': 'Lifetime Warranty'
    },
    heroSub: 'MODULAR KITCHEN. ORGANIZED SPACES.',
    heroTitle: 'KITCHEN BASKET',
    heroDesc: 'Heavy-duty food-grade SS 304 stainless steel modular kitchen baskets designed for plate storage, cup-saucer organization, and heavy modular kitchen setups.',
    heroTags: [
      { text: 'Food-grade SS 304', icon: 'shield' },
      { text: 'Anti-Rust Chrome', icon: 'sparkles' },
      { text: '45kg Load Capacity', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'SS 304 Food-Grade', desc: 'Completely hygienic and rust-proof structure', icon: 'shield' },
      { title: 'Electroplated Chrome', desc: 'Mirror finish with extreme scratch resistance', icon: 'sparkles' },
      { title: 'Heavy Wire Mesh', desc: 'Deep welds for structural load bearing', icon: 'wood' },
      { title: 'Easy Slide Mounts', desc: 'Seamlessly compatible with telescopic runners', icon: 'gear' },
      { title: 'Optimum Ventilation', desc: 'Open mesh prevents moisture and odors', icon: 'droplet' }
    ]
  },
  {
    id: 120,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 109,
    pageNumRight: 110,
    badge: 'Double-Wall Metallic System',
    title: 'Luxury Tandem\nBox.',
    tagline: 'German engineered double-wall metallic modular drawer box system',
    image: tandemBoxJpgImg,
    productName: 'Tandem Box Drawers',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Precision engineered double-wall metallic drawer systems with synchronized smooth motion runners, integrated soft-close dampening, and sleek modern side walls.',
    material: 'Electro-Galvanized Steel',
    thicknesses: ['Low Wall (84mm)', 'Medium Wall (135mm)', 'High Wall (199mm)'],
    defaultThickness: 'Medium Wall (135mm)',
    thicknessLabel: 'Drawer Height Profile',
    features: ['Synchronized Movement', 'Soft-Close Silent', '65kg Dynamic Load'],
    applications: ['Modular Kitchens', 'Pots & Pans Drawers', 'Pantry Drawers'],
    specs: {
      'System Type': 'Double-Wall Metallic Drawer',
      'Dynamic Capacity': '65 kg',
      'Height Options': '84mm / 135mm / 199mm'
    },
    heroSub: 'DOUBLE-WALL SYSTEM. LUXURY DRAWERS.',
    heroTitle: 'TANDEM BOX',
    heroDesc: 'Precision engineered double-wall metallic drawer systems with synchronized smooth motion runners, integrated soft-close dampening, and sleek modern side walls.',
    heroTags: [
      { text: 'Synchronized Run', icon: 'gear' },
      { text: '65kg Dynamic Load', icon: 'shield' },
      { text: 'Soft-Close Silent', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Sleek Double-Wall', desc: 'Saves internal space with ultra-thin profiles', icon: 'calibrate' },
      { title: 'Synchronized Slide', desc: 'Fluid movement without sag or friction', icon: 'gear' },
      { title: '65kg Dynamic Load', desc: 'Built for very heavy cookware drawer units', icon: 'shield' },
      { title: 'Soft-Close System', desc: 'Hydraulic mechanism for silent cushioning', icon: 'gear' },
      { title: 'Modern Finishes', desc: 'Anthracite, grey, and metallic white finishes', icon: 'sparkles' }
    ]
  },
  {
    id: 121,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 111,
    pageNumRight: 112,
    badge: 'Deep Pantry Tandem',
    title: 'Modular Tandem\nPull-Out.',
    tagline: 'High gallery railing deep drawer tandem system for kitchen storage',
    image: tandemBoxPngImg,
    productName: 'Tandem Box Pull-Out',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Deep modular tandem drawer system equipped with round gallery railings and anti-slip matting. Built for storing tall grocery containers and heavy kitchen appliances.',
    material: 'Steel + Chrome Railing',
    thicknesses: ['450mm Depth', '500mm Depth', '550mm Depth'],
    defaultThickness: '500mm Depth',
    thicknessLabel: 'Drawer Depth',
    features: ['Gallery Railing Support', 'Anti-Slip Matting', 'Full Extension Runners'],
    applications: ['Deep Kitchen Drawers', 'Tall Groceries', 'Mixer & Cooker Storage'],
    specs: {
      'Rail Type': 'Gallery Railing',
      'Extension': 'Full Extension Concealed',
      'Capacity': '50 kg'
    },
    heroSub: 'DEEP DRAWER STORAGE. GALLERY RAILING.',
    heroTitle: 'TANDEM PULL-OUT',
    heroDesc: 'Deep modular tandem drawer system equipped with round gallery railings and anti-slip matting for tall grocery containers.',
    heroTags: [
      { text: 'Gallery Railings', icon: 'gear' },
      { text: 'Full Extension', icon: 'calibrate' },
      { text: '50kg Capacity', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Tall Gallery Rails', desc: 'Prevents tall bottles and packages from tipping', icon: 'shield' },
      { title: 'Full Extension', desc: 'Entire drawer pulls out for 100% reach', icon: 'gear' },
      { title: 'Anti-Vibration Silent', desc: 'Cushioned dampers protect fragile glassware', icon: 'sparkles' }
    ]
  },
  {
    id: 122,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 113,
    pageNumRight: 114,
    badge: 'Sliding Wire Basket',
    title: 'Channel Basket\nSystem.',
    tagline: 'Smooth slide-out wire basket with precision ball-bearing runners',
    image: channelBasketImg,
    productName: 'Channel Basket System',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Heavy-gauge stainless steel kitchen wire basket integrated with soft-closing telescopic drawer slides. Ideal for daily dish, bowl, and utensil access.',
    material: 'Stainless Steel + Zinc Slides',
    thicknesses: ['15-inch Drawer', '17-inch Drawer', '21-inch Drawer'],
    defaultThickness: '17-inch Drawer',
    thicknessLabel: 'Runner Channel Length',
    features: ['SS 304 High-Tensile Wire', 'Soft-Closing Slides', 'Corrosion Resistant'],
    applications: ['Modular Kitchen Cabinets', 'Plates & Thali Storage', 'Cutlery Bays'],
    specs: {
      'Wire Grade': 'SS 304',
      'Slide Type': 'Soft-Close Telescopic',
      'Rating': '35 kg'
    },
    heroSub: 'TELESCOPIC SLIDE BASKET. SILENT GLIDE.',
    heroTitle: 'CHANNEL BASKET',
    heroDesc: 'Heavy-gauge stainless steel kitchen wire basket integrated with soft-closing telescopic drawer slides for effortless utensil reach.',
    heroTags: [
      { text: 'Soft-Close Telescopic', icon: 'gear' },
      { text: 'SS 304 Grade', icon: 'shield' },
      { text: 'Smooth Glide', icon: 'flex' }
    ],
    overviewFeatures: [
      { title: 'Integrated Channels', desc: 'Concealed or side-mount telescopic soft-close slides', icon: 'gear' },
      { title: 'Heavy Wire Gauge', desc: 'Reinforced welded frame supports heavy loads', icon: 'shield' },
      { title: 'Multi-Purpose Grid', desc: 'Ideal for bowls, plates, and dry food storage', icon: 'sparkles' }
    ]
  },
  {
    id: 123,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 115,
    pageNumRight: 116,
    badge: 'Under-Mount Drawer',
    title: 'Channel Drawer\nOrganizer.',
    tagline: 'Under-mount synchronized soft-close drawer system for sleek cabinets',
    image: channelDrawerImg,
    productName: 'Channel Drawer Organizer',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Advanced concealed under-mount drawer channel system providing completely hidden runner hardware and whisper-quiet soft closing for kitchen cabinetry.',
    material: 'Galvanized Cold Rolled Steel',
    thicknesses: ['350mm (14")', '450mm (18")', '500mm (20")', '550mm (22")'],
    defaultThickness: '500mm (20")',
    thicknessLabel: 'Runner Nominal Length',
    features: ['Under-Mount Concealed', '3D Fascia Alignment', 'Whisper-Quiet Damping'],
    applications: ['Wood Drawers', 'Modular Kitchens', 'Designer Cabinetry'],
    specs: {
      'Mounting Type': 'Under-mount Concealed',
      'Closing Mechanism': 'Hydraulic Soft-Close',
      'Load Rating': '40 kg'
    },
    heroSub: 'CONCEALED UNDER-MOUNT. FLUID MOTION.',
    heroTitle: 'CHANNEL DRAWER',
    heroDesc: 'Advanced concealed under-mount drawer channel system providing completely hidden runner hardware and whisper-quiet soft closing.',
    heroTags: [
      { text: 'Under-Mount Concealed', icon: 'calibrate' },
      { text: 'Whisper Soft-Close', icon: 'gear' },
      { text: '40kg Rating', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Concealed Under-Mount', desc: 'Drawers show clean wood sides with no visible hardware', icon: 'sparkles' },
      { title: '3D Front Adjustment', desc: 'Easy micro-adjustments for perfect shutter alignment', icon: 'calibrate' },
      { title: 'Fluid Soft-Close', desc: 'Gentle deceleration prevents cups and glasses from rattling', icon: 'gear' }
    ]
  },
  {
    id: 124,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 117,
    pageNumRight: 118,
    badge: 'Modular Tandem Series',
    title: 'Modular Tandem\nSeries.',
    tagline: 'Complete multi-tier kitchen drawer ensemble with inner dividers',
    image: multiTierTandemImg,
    productName: 'Modular Tandem Series',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'All-in-one modular kitchen tandem drawer system grouping cutlery organizers, plate organizers, and deep pot drawers into a coordinated cabinetry suite.',
    material: 'Anthracite Metallic Steel',
    thicknesses: ['3-Drawer Stack (Standard)', '2-Drawer Deep Stack', '4-Drawer Chef Stack'],
    defaultThickness: '3-Drawer Stack (Standard)',
    thicknessLabel: 'Drawer Configuration',
    features: ['Full Kitchen Suite', 'Internal Modular Dividers', 'Coordinated Anthracite Look'],
    applications: ['Modular Kitchen Islands', 'Cooktop Base Units', 'Pantry Stacks'],
    specs: {
      'Finish': 'Anthracite Matte',
      'Runner Action': 'Synchronized Rack & Pinion',
      'Total Capacity': '120 kg Stack'
    },
    heroSub: 'COORDINATED DRAWER SUITE. LUXURY ANTHRACITE.',
    heroTitle: 'MODULAR TANDEM SERIES',
    heroDesc: 'All-in-one modular kitchen tandem drawer system grouping cutlery organizers, plate organizers, and deep pot drawers into a coordinated cabinetry suite.',
    heroTags: [
      { text: 'Full Kitchen Suite', icon: 'sparkles' },
      { text: 'Anthracite Finish', icon: 'sparkles' },
      { text: 'Synchronized Glide', icon: 'gear' }
    ],
    overviewFeatures: [
      { title: 'Harmonious Aesthetics', desc: 'Uniform dark metallic finish across all drawers', icon: 'sparkles' },
      { title: 'Modular Dividers', desc: 'Customizable cross and longitudinal divider sets', icon: 'calibrate' },
      { title: 'Heavy Pan Support', desc: 'Heavy gauge steel bottom supports heavy cast iron pots', icon: 'shield' }
    ]
  },
  {
    id: 125,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 119,
    pageNumRight: 120,
    badge: 'Complete Kitchen Suite',
    title: 'Modular Kitchen\nAccessories.',
    tagline: 'Comprehensive collection of smart storage hardware & fittings',
    image: kitchenAccessoriesMasterImg,
    productName: 'Sentex Gold Kitchen Accessories',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'The complete signature collection of Pakshal modular kitchen hardware: pull-downs, magic corners, cutlery trays, rolling shutters, and tandem systems.',
    material: 'Premium SS 304, Aluminum & Glass',
    thicknesses: ['Standard 600mm Kitchen Module', 'Standard 900mm Kitchen Module'],
    defaultThickness: 'Standard 600mm Kitchen Module',
    thicknessLabel: 'Kitchen Module Standard',
    features: ['Ergonomic Storage', 'Food-Grade Materials', 'Lifetime Mechanical Durability'],
    applications: ['Modern Modular Kitchens', 'Luxury Residences', 'Commercial Pantries'],
    specs: {
      'Material Range': 'SS 304, Tempered Glass, Anodized Al',
      'Warranty': '10 Years Assurance',
      'Compatibility': 'Universal Modular Cabinets'
    },
    heroSub: 'THE COMPLETE KITCHEN SUITE.',
    heroTitle: 'KITCHEN ACCESSORIES',
    heroDesc: 'The complete signature collection of Pakshal modular kitchen hardware: pull-downs, magic corners, cutlery trays, rolling shutters, and tandem systems.',
    heroTags: [
      { text: 'Complete Modular Suite', icon: 'sparkles' },
      { text: 'SS 304 & Aluminum', icon: 'shield' },
      { text: '10 Years Warranty', icon: 'shield' }
    ],
    overviewFeatures: [
      { title: 'Full Modular Range', desc: 'Everything needed to outfit modern kitchen cabinets', icon: 'sparkles' },
      { title: 'Tested Durability', desc: 'Tested for over 100,000 smooth opening cycles', icon: 'gear' },
      { title: 'Maximum Space Gain', desc: 'Converts every corner and high shelf into easy storage', icon: 'calibrate' }
    ]
  },
  {
    id: 126,
    
    category: 'Kitchen Accessories',
    pageNumLeft: 121,
    pageNumRight: 122,
    badge: 'Cabinetry Design',
    title: 'Modern Modular\nKitchen Suite.',
    tagline: 'Turnkey architectural modular kitchen cabinetry & fittings layout',
    image: kitchensCardImg,
    productName: 'Modern Modular Kitchen',
    brandName: 'Sentex Gold',
    brandId: 'sentex-gold',
    desc: 'Full architectural modular kitchen layout displaying seamless integration of tandem drawers, rolling shutters, overhead lift-up shutters, and pantry swing units.',
    material: 'Luxury Matte Laminates & Calibrated Marine Plywood',
    thicknesses: ['L-Shaped Kitchen', 'U-Shaped Kitchen', 'Parallel Kitchen', 'Island Kitchen'],
    defaultThickness: 'L-Shaped Kitchen',
    thicknessLabel: 'Kitchen Layout Type',
    features: ['Turnkey Modular Layout', 'Integrated Hardware Fitting', 'Waterproof BWP Core'],
    applications: ['Luxury Apartments', 'Villas', 'Contemporary Residences'],
    specs: {
      'Core Framework': 'Calibrated BWP Marine Ply',
      'Fittings': 'Soft-Close Concealed German Hardware',
      'Finish': 'Anti-Scratch Matte Panels'
    },
    heroSub: 'ARCHITECTURAL KITCHEN CONCEPTS.',
    heroTitle: 'MODULAR KITCHEN SUITE',
    heroDesc: 'Full architectural modular kitchen layout displaying seamless integration of tandem drawers, rolling shutters, overhead lift-up shutters, and pantry swing units.',
    heroTags: [
      { text: 'Architectural Layout', icon: 'sparkles' },
      { text: 'Integrated Hardware', icon: 'gear' },
      { text: 'Waterproof Core', icon: 'droplet' }
    ],
    overviewFeatures: [
      { title: 'Integrated Design', desc: 'Combines all modular accessories into a cohesive space', icon: 'sparkles' },
      { title: 'Ergonomic Flow', desc: 'Optimized work triangle: cooking, washing, and storage', icon: 'calibrate' },
      { title: 'Premium Finish', desc: 'Resistant to cooking steam, moisture, and stains', icon: 'shield' }
    ]
  }
];

// React Component showcasing Kitchen Accessories in a clean interactive showcase grid
export const KitchenAccessories = ({ onNavigate, onSelectItem, activeId }) => {
  const handleItemClick = (item) => {
    if (onSelectItem) {
      onSelectItem(item);
    } else if (onNavigate) {
      onNavigate('products', '', `?category=kitchen-accessories&brand=Sentex%20Gold`);
    }
  };

  return (
    <div className="w-full bg-[#fdfdfa] py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-[1440px] mx-auto text-left">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#006e2f] mb-1 block">
              SENTEX GOLD • Modular Storage Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Sentex Gold Kitchen Accessories
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-sm mt-1 max-w-2xl">
              Explore our complete range of pull-downs, tandem drawers, magic corners, carousel trays, organizer systems, and architectural cabinetry.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[#f0f9f4] text-[#006e2f] border border-[#006e2f]/20 rounded-full text-xs font-black uppercase tracking-wider">
              Sentex Gold Collection
            </span>
          </div>
        </div>

        {/* Grid of All 26 Kitchen Accessories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {kitchenAccessoriesSpreads.map((item) => {
            const isSelected = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`group bg-white rounded-2xl border transition-all duration-300 flex flex-col cursor-pointer overflow-hidden ${
                  isSelected
                    ? 'border-2 border-[#006e2f] shadow-lg ring-2 ring-[#006e2f]/20 scale-[1.01]'
                    : 'border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#006e2f]/60'
                }`}
              >
                {/* Product Image Container */}
                <div className="relative h-48 sm:h-52 bg-white overflow-hidden border-b border-slate-100 flex items-center justify-center p-3">
                  <img
                    src={item.image}
                    alt={item.productName || (item.title ? item.title.replace(/\n/g, ' ') : item.brandName)}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-800 border border-slate-200/70 shadow-2xs">
                    {item.badge}
                  </div>

                </div>

                {/* Product Details */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className={`text-base font-black transition-colors leading-snug ${
                      isSelected ? 'text-[#006e2f]' : 'text-slate-900 group-hover:text-[#006e2f]'
                    }`}>
                      {item.productName || (item.title ? item.title.replace(/\n/g, ' ') : item.brandName)}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#006e2f]">View Specifications</span>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#006e2f] text-white'
                        : 'bg-slate-100 group-hover:bg-[#006e2f] group-hover:text-white text-slate-600'
                    }`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default KitchenAccessories;
