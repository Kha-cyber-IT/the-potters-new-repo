import React from 'react';

export const CustomMenuIcon = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="6" width="18" height="2.5" rx="1.25" fill="currentColor" />
    <rect x="3" y="11" width="18" height="2.5" rx="1.25" fill="currentColor" />
    <rect x="3" y="16" width="18" height="2.5" rx="1.25" fill="currentColor" />
  </svg>
);
