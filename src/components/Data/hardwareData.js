import hardwareImg from '../../assets/hardware/hardwarefittings.png';
import slidingChannelsImg from '../../assets/hardware/slidingchannels.png';
import astdaxHardware1Img from '../../assets/hardware/Astdax hardware and fittings.png';
import astdaxHardware2Img from '../../assets/hardware/Astdax hardware and fittings2.png';
import hardwareFittings1 from '../../assets/hardware/productspage-hardware&fittings.png';
import hydraulicHingeImg from '../../assets/hardware/hydraulichinge.png';
import hardwareFittings2 from '../../assets/hardware/productspage-hardware&fittings2.png';
import drawerChannelImg from '../../assets/hardware/drawerchannel.jpg';
import hardwareFittings3 from '../../assets/hardware/productspage-hardware&fittings3.png';
import hardwareFittings4 from '../../assets/hardware/productspage-hardware&fittings4.png';
import hardwareFittings5 from '../../assets/hardware/productspage-hardware&fittings5.png';
import hardwareFittings6 from '../../assets/hardware/productspage-hardware&fittings6.png';
import hardwareFittings7 from '../../assets/hardware/productspage-hardware&fittings7.png';
import hardwareFittings8 from '../../assets/hardware/productspage-hardware&fittings8.png';
import astdaxHandles1 from '../../assets/hardware/astdax-handles-1.jpg';
import astdaxHandles2 from '../../assets/hardware/astdax-handles-2.jpg';
import conceal from '../../assets/hardware/conceal.png';
import conceal2 from '../../assets/hardware/conceal2.png';
import knob from '../../assets/hardware/knob.png';
import knob2 from '../../assets/hardware/knob2.png';
import curtain from '../../assets/hardware/curtain.png';
import curtain2 from '../../assets/hardware/curtain2.png';
import mortise from '../../assets/hardware/mortise.png';
import support from '../../assets/hardware/support.png';
import sofaleg from '../../assets/hardware/sofaleg.png';
import others from '../../assets/hardware/others.png';

export const hardwareSpreads = [
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
  }
];
