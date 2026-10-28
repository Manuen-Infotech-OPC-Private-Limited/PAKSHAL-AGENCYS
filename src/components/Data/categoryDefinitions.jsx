import React from 'react';

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

