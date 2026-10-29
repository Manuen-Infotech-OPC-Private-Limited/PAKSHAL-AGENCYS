import React, { useState, useEffect } from 'react';
import plywoodImg from '../assets/plywood/royalclub.png';
import laminatesImg from '../assets/laminates/laminate-marble-slabs.jpg';
import hardwareImg from '../assets/hardware/hardwarefittings.png';
import accessoriesImg from '../assets/kitchen/kitchenaccessories.png';
import slidingChannelsImg from '../assets/hardware/slidingchannels.png';
import tandemBoxImg from '../assets/kitchen/tandembox.png';
import fancyDoorsImg from '../assets/doors/fancydoors.png';
import fancyDoors2Img from '../assets/doors/fancydoors2.png';
import fancyDoors3Img from '../assets/doors/fancydoors3.png';
import fancyDoors4Img from '../assets/doors/fancydoors4.png';
import designerDoorImg from '../assets/doors/homepage-designerdoor.png';
import hydraulicHingeImg from '../assets/hardware/hydraulichinge.png';
import mortiseImg from '../assets/hardware/mortise.png';
import royalClubImg from '../assets/plywood/royalclub.png';
import royalClub2Img from '../assets/plywood/royalclub2.png';
import marineClubImg from '../assets/plywood/marineclub.png';
import marineClub2Img from '../assets/plywood/marineclub2.png';
import laminates2Img from '../assets/laminates/laminates2.png';
import laminates3Img from '../assets/laminates/laminates3.png';
import veneer2Img from '../assets/plywood/veneer2.png';
import veneer3Img from '../assets/plywood/veneer3.png';
import veneer4Img from '../assets/plywood/veneer4.png';
import homepageMarinePlywoodImg from '../assets/plywood/homepage-marineplywood.png';
import centuryPlywoodImg from '../assets/plywood/century.png';
import centuryLaminatesImg from '../assets/laminates/centurylaminates1.jpg';
import chromaLaminatesImg from '../assets/laminates/chromalaminates1.png';
import vistaLaminatesImg from '../assets/laminates/vistalaminates2.png';
import vistaPlywoodImg from '../assets/plywood/vistaplywood1.png';
import merinoLaminatesImg from '../assets/plywood/merino.png';
import gurjanClubImg from '../assets/plywood/gurjanclub1.png';
import gurjanKingImg from '../assets/plywood/gurjan king.png';
import greenPlywoodImg from '../assets/plywood/green1.png';
import astdaxHardwareImg from '../assets/hardware/Astdax hardware and fittings.png';
import kitchensCardImg from '../assets/kitchen/kitchens-card.jpg';
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
import channelBasketImg from '../assets/kitchen/homepage-channelbasket.png';
import channelDrawerImg from '../assets/kitchen/homepage-channeldrawer.png';
import multiTierTandemImg from '../assets/kitchen/homepage-tandemboxes.png';
import wardrobesCardImg from '../assets/furniture/wardrobes-card.jpg';
import officeFurnitureImg from '../assets/furniture/officefurniture.jpg';
import interiorPanelsImg from '../assets/laminates/interiorpanels.png';
import acrylicPanelsImg from '../assets/laminates/acrylicpanels.png';
import acrylicPanels2Img from '../assets/laminates/acrylicpanels2.png';
import acrylicPanels3Img from '../assets/laminates/acrylicpanels3.png';
import acrylicPanels4Img from '../assets/laminates/acrylicpanels4.png';
import acrylicPanels5Img from '../assets/laminates/acrylicpanels5.png';
import acrylicPanels6Img from '../assets/laminates/acrylicpanels6.png';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Plywood & Laminates',
    category: 'Plywood & Laminates',
    img: centuryPlywoodImg,
    imagesCount: 20,
    images: [
      centuryPlywoodImg,
      centuryLaminatesImg,
      plywoodImg,
      laminatesImg,
      chromaLaminatesImg,
      vistaLaminatesImg,
      merinoLaminatesImg,
      gurjanClubImg,
      gurjanKingImg,
      greenPlywoodImg,
      royalClubImg,
      royalClub2Img,
      marineClubImg,
      marineClub2Img,
      laminates2Img,
      laminates3Img,
      veneer2Img,
      veneer3Img,
      veneer4Img,
      homepageMarinePlywoodImg
    ],
    desc: 'Premium BWR and marine-grade plywood sheets, veneers, and decorative wood laminates from Century, Green, Gurjan, Merino, Vista, Croma, and Royal Club.'
  },
  {
    id: 2,
    title: 'Kitchen & Accessories',
    category: 'Kitchen & Accessories',
    img: accessoriesImg,
    imagesCount: 26,
    images: [
      accessoriesImg,
      pullDownElevatorImg,
      pullDownDishRackImg,
      magicCornerImg,
      cornerImg,
      cutleryTrayImg,
      cutleryTray2Img,
      bifoldLiftUpImg,
      rollingShuttersImg,
      glassTandemBoxImg,
      glassBoxImg,
      universalGlassBoxImg,
      slimBoxesImg,
      tandemBoxAccessoryImg,
      sidePulloutImg,
      sidePullout2Img,
      swingStorageImg,
      wastebinImg,
      ventilatorImg,
      kitchenBasketImg,
      tandemBoxJpgImg,
      tandemBoxImg,
      channelBasketImg,
      channelDrawerImg,
      multiTierTandemImg,
      kitchensCardImg
    ],
    desc: 'Stainless steel modular kitchen baskets, pull-outs, tandem drawers, and magic corner carousel accessories.'
  },
  {
    id: 3,
    title: 'Acrylic Panels',
    category: 'Acrylic Panels',
    img: acrylicPanelsImg,
    imagesCount: 6,
    images: [
      acrylicPanelsImg,
      acrylicPanels2Img,
      acrylicPanels3Img,
      acrylicPanels4Img,
      acrylicPanels5Img,
      acrylicPanels6Img
    ],
    desc: 'High-gloss premium acrylic panels for luxury kitchen shutters, wardrobes, and modern wall paneling.'
  },
  {
    id: 4,
    title: 'Hardware & Fittings',
    category: 'Hardware & Fittings',
    img: astdaxHardwareImg,
    imagesCount: 6,
    images: [
      astdaxHardwareImg,
      hardwareImg,
      mortiseImg,
      slidingChannelsImg,
      tandemBoxImg,
      hydraulicHingeImg
    ],
    desc: 'Precision architectural hinges, drawer runners, locks, and premium door fittings.'
  },
  {
    id: 5,
    title: 'Fancy Doors Collection',
    category: 'Doors & Systems',
    img: fancyDoorsImg,
    imagesCount: 5,
    images: [
      fancyDoorsImg,
      fancyDoors2Img,
      fancyDoors3Img,
      fancyDoors4Img,
      designerDoorImg
    ],
    desc: 'Designer entrance doors, contemporary fancy doors, luxury veneer doors, and carved timber doors.'
  },
  {
    id: 501,
    title: 'Modern Fancy Doors',
    category: 'Doors & Systems',
    img: fancyDoors2Img,
    imagesCount: 5,
    images: [
      fancyDoors2Img,
      fancyDoors3Img,
      fancyDoors4Img,
      fancyDoorsImg,
      designerDoorImg
    ],
    desc: 'Contemporary high-pressure laminate finished fancy doors with solid timber core.'
  },
  {
    id: 502,
    title: 'Luxury Veneered Fancy Doors',
    category: 'Doors & Systems',
    img: fancyDoors3Img,
    imagesCount: 5,
    images: [
      fancyDoors3Img,
      fancyDoors4Img,
      fancyDoorsImg,
      fancyDoors2Img,
      designerDoorImg
    ],
    desc: 'Exotic natural wood grains with bookmatched symmetry and acoustic sound dampening.'
  },
  {
    id: 503,
    title: 'Architectural Fancy Doors',
    category: 'Doors & Systems',
    img: fancyDoors4Img,
    imagesCount: 5,
    images: [
      fancyDoors4Img,
      fancyDoorsImg,
      fancyDoors2Img,
      fancyDoors3Img,
      designerDoorImg
    ],
    desc: 'Precision CNC grooved geometric patterns designed for luxury modern architectural spaces.'
  },
  {
    id: 504,
    title: 'Carved Timber Heritage Doors',
    category: 'Doors & Systems',
    img: designerDoorImg,
    imagesCount: 5,
    images: [
      designerDoorImg,
      fancyDoorsImg,
      fancyDoors2Img,
      fancyDoors3Img,
      fancyDoors4Img
    ],
    desc: 'Handcrafted solid timber doors with traditional architectural relief carvings.'
  }
];

const CATEGORIES = [
  { name: 'All Collections', id: 'All' },
  { name: 'Plywood & Laminates', id: 'Plywood & Laminates' },
  { name: 'Acrylic Panels', id: 'Acrylic Panels' },
  { name: 'Hardware & Fittings', id: 'Hardware & Fittings' },
  { name: 'Kitchen & Accessories', id: 'Kitchen & Accessories' },
  { name: 'Doors & Systems', id: 'Doors & Systems' }
];

const CATEGORY_ICONS = {
  'All': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  'Plywood & Laminates': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4L3 8L12 12L21 8L12 4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12L12 16L21 12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 16L12 20L21 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'Acrylic Panels': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
  'Hardware & Fittings': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="12" y1="4" x2="12" y2="20" strokeDasharray="3 3" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="8" cy="16" r="1.5" />
      <circle cx="16" cy="8" r="1.5" />
      <circle cx="16" cy="16" r="1.5" />
    </svg>
  ),
  'Kitchen & Accessories': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="6" rx="1" />
      <rect x="3" y="13" width="18" height="6" rx="1" />
      <circle cx="12" cy="8" r="1" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  ),
  'Doors & Systems': (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="3" width="7" height="18" rx="1" />
      <rect x="13" y="3" width="7" height="18" rx="1" />
      <circle cx="8" cy="12" r="1" />
      <circle cx="16" cy="12" r="1" />
    </svg>
  )
};

const GalleryCard = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm border border-stone-200/40 hover:shadow-xl hover:border-stone-300/80 transition-all duration-500 bg-stone-100 h-44 sm:h-52 md:h-60 lg:h-64 w-full"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.88] group-hover:brightness-95"
      />
      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-left" />

      {/* Text & Button content */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between z-10">
        <div>
          <h3 className="font-bold text-white leading-tight font-sans text-xs sm:text-sm md:text-base">
            {item.title}
          </h3>
          <span className="text-[9px] sm:text-[10px] text-stone-300 font-semibold block mt-0.5 sm:mt-1 tracking-wide">
            {item.imagesCount} Images
          </span>
        </div>

        {/* Small gold circle arrow button */}
        <div className="rounded-full bg-[#C9A44C] text-black flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const GalleryPage = () => {
  useDocumentMetadata(
    "Showroom & Materials Gallery | PAKSHAL AGENCYS",
    "Get inspired by our showroom gallery featuring custom modular wardrobes, luxury kitchens, slatted wall panels, and high-gloss acrylic sheet selections."
  );

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItem, setActiveItem] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart || !activeItem) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      // Swipe left -> Next image
      setActiveImageIdx((prev) => (prev + 1) % activeItem.images.length);
    } else if (diff < -50) {
      // Swipe right -> Prev image
      setActiveImageIdx((prev) => (prev - 1 + activeItem.images.length) % activeItem.images.length);
    }
    setTouchStart(null);
  };

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (id) => {
    const item = GALLERY_ITEMS.find(i => i.id === id);
    if (item) {
      setActiveItem(item);
      setActiveImageIdx(0);
    }
  };

  const closeLightbox = () => {
    setActiveItem(null);
    setActiveImageIdx(0);
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (!activeItem) return;
    setActiveImageIdx((prev) => (prev + 1) % activeItem.images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (!activeItem) return;
    setActiveImageIdx((prev) => (prev - 1 + activeItem.images.length) % activeItem.images.length);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-stone-800 select-none text-left pt-24 pb-20 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 py-10 lg:py-16">
          {/* Left Text Column */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center items-start text-left">
            <span className="text-[10px] text-[#C9A44C] tracking-[0.25em] font-extrabold uppercase mb-3 block">
              OUR GALLERY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-stone-900 leading-[1.1] tracking-tight uppercase">
              EXPLORE.<br />
              EXPERIENCE.<br />
              GET <span className="text-[#C9A44C]">INSPIRED.</span>
            </h1>
            <p className="text-stone-500 font-medium text-sm sm:text-base leading-relaxed mt-6 max-w-md">
              A visual journey of our premium materials, innovative solutions and world-class experience centre.
            </p>
            <button className="flex items-center gap-2 mt-8 text-xs font-black uppercase tracking-widest text-[#C9A44C] hover:text-[#b0873a] transition-colors group">
              DISCOVER MORE
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Right Collage Column */}
          <div className="w-full lg:w-[65%]">
            <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-4 h-[350px] sm:h-[450px] lg:h-[550px] w-full">
              {/* Row 1, Col 1 */}
              <div className="relative rounded-tl-[48px] sm:rounded-tl-[80px] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden group">
                <img src={laminatesImg} alt="Veneer panel stack" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Row 1, Col 2 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img src={mortiseImg} alt="Hardware fittings grid" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Row 1, Col 3 */}
              <div className="relative rounded-tr-[48px] sm:rounded-tr-[80px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl overflow-hidden group">
                <img src={accessoriesImg} alt="Kitchen drawers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Row 2, Col 1 */}
              <div className="relative rounded-bl-[48px] sm:rounded-bl-[80px] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl overflow-hidden group">
                <img src={hardwareImg} alt="Metal Hinge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Row 2, Col 2 */}
              <div className="relative rounded-2xl overflow-hidden group">
                <img src={`${import.meta.env.BASE_URL}showroom-reception.png`} alt="Showroom Lounge" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Row 2, Col 3: Experience Centre Image Card */}
              <div className="relative rounded-br-[48px] sm:rounded-br-[80px] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl overflow-hidden group">
                <img
                  src={interiorPanelsImg}
                  alt="Experience Centre"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY TABS SELECTOR */}
        <div className="mt-16 w-full">
          <div className="flex flex-row flex-nowrap lg:grid lg:grid-cols-6 gap-3 md:gap-4 overflow-x-auto pb-4 lg:pb-0 no-scrollbar w-full scroll-smooth">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex flex-col items-center justify-center gap-3 p-4 sm:p-5 rounded-xl transition-all duration-300 min-w-[135px] sm:min-w-[155px] lg:min-w-0 flex-1 border cursor-pointer ${isActive
                    ? 'bg-[#C9A44C] text-white border-[#C9A44C] shadow-md shadow-amber-900/10'
                    : 'bg-white text-stone-700 hover:text-[#C9A44C] hover:border-[#C9A44C]/30 border-stone-200 shadow-sm'
                    }`}
                >
                  <div className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#C9A44C]'}`}>
                    {CATEGORY_ICONS[category.id]}
                  </div>
                  <span className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-center leading-tight font-sans`}>
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CATEGORY TITLE */}
        <div className="mt-16 mb-8 border-b border-stone-200 pb-4 text-left">
          <h2 className="text-base sm:text-lg font-black tracking-tight text-stone-900 uppercase font-sans">
            {selectedCategory === 'All' ? 'ALL COLLECTIONS' : selectedCategory}
          </h2>
        </div>

        {/* DYNAMIC GRID LAYOUT */}
        {selectedCategory === 'All' ? (
          <div className="flex flex-col gap-6">
            {/* Rows 1 & 2: 3-column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredItems.slice(0, 6).map((item) => (
                <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item.id)} />
              ))}
            </div>
            {/* Row 3: 5-column Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredItems.slice(6).map((item) => (
                <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item.id)} />
              ))}
            </div>
          </div>
        ) : (
          /* Specific Categories: Standard Responsive Grid Layout */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={() => openLightbox(item.id)} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center justify-center">
            <svg className="w-16 h-16 text-stone-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
            </svg>
            <h3 className="text-lg font-bold text-stone-700">No items found</h3>
            <p className="text-sm text-stone-400 mt-1">Check back later or try a different filter.</p>
          </div>
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      {activeItem !== null && (
        <div
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between py-6 px-4 cursor-pointer select-none"
        >
          {/* Header Action Bar */}
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[#C9A44C] font-extrabold uppercase tracking-widest leading-none">
                {activeItem.category}
              </span>
              <h2 className="text-white text-base md:text-lg font-bold mt-1.5 font-sans">
                {activeItem.title}
              </h2>
            </div>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 focus:outline-none cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Central Image Slider */}
          <div className="flex-grow flex items-center justify-between max-w-7xl mx-auto w-full relative my-4">

            {/* Prev Button */}
            {activeItem.images.length > 1 && (
              <button
                onClick={showPrev}
                className="absolute left-2 md:left-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 focus:outline-none cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            )}

            {/* Main Image */}
            <div className="w-full h-full flex items-center justify-center px-12 sm:px-16 md:px-20 max-h-[70vh]">
              <img
                src={activeItem.images[activeImageIdx]}
                alt={activeItem.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 transform scale-98"
              />
            </div>

            {/* Next Button */}
            {activeItem.images.length > 1 && (
              <button
                onClick={showNext}
                className="absolute right-2 md:right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10 focus:outline-none cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            )}

          </div>

          {/* Bottom Description Bar */}
          <div className="max-w-4xl mx-auto w-full text-center pb-4 z-10">
            <p className="text-sm text-stone-300 font-semibold leading-relaxed max-w-2xl mx-auto px-4 font-sans">
              {activeItem.desc}
            </p>
            <div className="text-[10px] text-stone-500 font-extrabold uppercase mt-3 tracking-widest font-sans">
              Image {activeImageIdx + 1} of {activeItem.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};








