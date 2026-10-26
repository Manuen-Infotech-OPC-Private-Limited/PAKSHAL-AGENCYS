import React, { useState } from 'react';

// Import all 5 fancy door images from assets/doors
import fancyDoorsImg from '../assets/doors/fancydoors.png';
import fancyDoors2Img from '../assets/doors/fancydoors2.png';
import fancyDoors3Img from '../assets/doors/fancydoors3.png';
import fancyDoors4Img from '../assets/doors/fancydoors4.png';
import designerDoorImg from '../assets/doors/homepage-designerdoor.png';

// Fancy doors collection dataset
export const fancyDoorsList = [
  {
    id: 40,
    brandId: 'fancy-doors',
    badge: 'Designer Collection',
    title: 'Designer Fancy Doors',
    subtitle: 'Seasoned Hardwood Solid Core',
    tagline: 'Luxury contemporary finishes for stylish residential spaces',
    image: fancyDoorsImg,
    thicknesses: '30mm, 32mm, 35mm, 38mm, 40mm',
    core: 'Kiln-Seasoned Solid Pine',
    finish: 'Veneer / Laminate / Polishable',
    warranty: '15 Years Guarantee',
    features: ['Solid Timber Core', 'Zero Warpage Guarantee', 'Sound Insulating Core', 'Termite Vacuum Treated']
  },
  {
    id: 42,
    brandId: 'modern-fancy-doors',
    badge: 'Contemporary Series',
    title: 'Modern Laminated Fancy Doors',
    subtitle: 'High-Pressure Decorative Finish',
    tagline: 'Sleek architectural laminate finish for luxury residences',
    image: fancyDoors2Img,
    thicknesses: '30mm, 32mm, 35mm, 38mm, 40mm',
    core: 'Calibrated Solid Pine Core',
    finish: 'High-Pressure Pre-Finished Laminate',
    warranty: '15 Years Guarantee',
    features: ['Scratch & Stain Resistant', 'Zero Maintenance Surface', 'BWP Resin Bonded', 'Impact Resistant Edges']
  },
  {
    id: 43,
    brandId: 'royal-fancy-doors',
    badge: 'Royal Elegance',
    title: 'Luxury Veneered Fancy Doors',
    subtitle: 'Exotic Natural Teak & Walnut',
    tagline: 'Natural wood grains with bookmatched architectural symmetry',
    image: fancyDoors3Img,
    thicknesses: '32mm, 35mm, 38mm, 40mm, 45mm',
    core: 'Selected Seasoned Hardwood',
    finish: 'Natural Exotic Veneer + UV Polyurethane',
    warranty: '15 Years Guarantee',
    features: ['Hand-Selected Veneers', 'Acoustic Sound Barrier', 'UV Polyurethane Seal', 'Smart Lock Compatible']
  },
  {
    id: 44,
    brandId: 'architectural-fancy-doors',
    badge: 'Elite Craft',
    title: 'Architectural Grooved Fancy Doors',
    subtitle: 'Precision CNC Geometric Detailing',
    tagline: 'Precision engineered groove patterns & contemporary geometric styling',
    image: fancyDoors4Img,
    thicknesses: '32mm, 35mm, 38mm, 40mm, 45mm',
    core: 'Calibrated Hardwood Core',
    finish: 'High-Density Skin with Precision V-Grooves',
    warranty: '15 Years Guarantee',
    features: ['Precision CNC Routing', 'Solid Tubular/Timber Core', 'Smooth Sprayable Finish', 'Zero Shrinkage Core']
  },
  {
    id: 41,
    brandId: 'carved-timber-doors',
    badge: 'Solid Timber',
    title: 'Carved Timber Heritage Doors',
    subtitle: 'Handcrafted 3D Relief Carvings',
    tagline: 'Handcrafted solid wood doors with traditional & modern carvings',
    image: designerDoorImg,
    thicknesses: '35mm, 40mm, 45mm, 50mm',
    core: '100% Solid Burma Teak / Sal',
    finish: 'Multi-Layer Weather-Shield PU Polish',
    warranty: 'Lifetime Durability',
    features: ['100% Solid Hardwood', 'Architectural 3D Carvings', 'Weather Shield Coat', 'Heavy Security Hardware Ready']
  }
];

export const FancyDoors = ({ onSelectItem, activeId }) => {
  const [modalImage, setModalImage] = useState(null);

  const handleCardClick = (item) => {
    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  return (
    <div className="w-full bg-[#fdfdfa] py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-[1440px] mx-auto text-left">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#006e2f] mb-1 block">
              Architectural Entrance & Interior Doors
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Fancy Doors Collection
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-sm mt-1 max-w-2xl">
              Explore our complete range of premium solid core fancy doors, luxury decorative laminates, bookmatched exotic veneers, and carved timber architectural doors.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <span className="px-3.5 py-1.5 bg-[#f0f9f4] text-[#006e2f] border border-[#006e2f]/20 rounded-full text-xs font-black uppercase tracking-wider">
              Premium Collection
            </span>
          </div>
        </div>

        {/* Grid of All 5 Fancy Doors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {fancyDoorsList.map((item) => {
            const isSelected = activeId === item.id;
            return (
              <div
                key={item.id}
                className={`group bg-white rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden ${isSelected
                    ? 'border-2 border-[#006e2f] shadow-lg ring-2 ring-[#006e2f]/20 scale-[1.01]'
                    : 'border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#006e2f]/60'
                  }`}
              >
                {/* Product Image Container */}
                <div
                  onClick={() => handleCardClick(item)}
                  className="relative h-64 sm:h-72 bg-gradient-to-b from-stone-50 to-white overflow-hidden border-b border-slate-100 flex items-center justify-center p-4 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-800 border border-slate-200/70 shadow-2xs">
                    {item.badge}
                  </div>


                  {/* Zoom Preview Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalImage(item);
                    }}
                    title="Zoom Door Preview"
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-[#006e2f] text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zM11 8v6M8 11h6" />
                    </svg>
                  </button>
                </div>

                {/* Content Container */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-black tracking-wider text-[#006e2f] uppercase block mb-1">
                      {item.subtitle}
                    </span>
                    <h3
                      onClick={() => handleCardClick(item)}
                      className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 cursor-pointer hover:text-[#006e2f] transition-colors"
                    >
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                      {item.tagline}
                    </p>

                    {/* Features list */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                      {item.features.slice(0, 2).map((feat, idx) => (
                        <span key={idx} className="inline-block text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100 font-medium">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <div className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-6 text-left cursor-default" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4 border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#006e2f]">
                  {modalImage.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{modalImage.title}</h3>
                <p className="text-xs text-slate-500">{modalImage.tagline}</p>
              </div>
              <button
                onClick={() => setModalImage(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="h-96 sm:h-[450px] w-full flex items-center justify-center bg-stone-50 rounded-xl p-4 overflow-hidden">
              <img
                src={modalImage.image}
                alt={modalImage.title}
                className="max-h-full max-w-full object-contain drop-shadow-xl"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-[10px] text-slate-400 block font-bold uppercase">Core</span>
                <span className="font-semibold text-slate-800 text-[11px]">{modalImage.core}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-[10px] text-slate-400 block font-bold uppercase">Finish</span>
                <span className="font-semibold text-slate-800 text-[11px]">{modalImage.finish}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-[10px] text-slate-400 block font-bold uppercase">Thickness</span>
                <span className="font-semibold text-slate-800 text-[11px]">30mm - 40mm</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-[10px] text-slate-400 block font-bold uppercase">Warranty</span>
                <span className="font-semibold text-slate-800 text-[11px]">{modalImage.warranty}</span>
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => {
                  handleCardClick(modalImage);
                  setModalImage(null);
                }}
                className="px-5 py-2.5 bg-[#006e2f] hover:bg-[#005a26] text-white rounded-lg text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>View Full Spread in Catalogue</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FancyDoors;
