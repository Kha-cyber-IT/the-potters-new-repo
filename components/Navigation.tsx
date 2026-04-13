import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight, ArrowLeft } from 'lucide-react';
import { CustomMenuIcon } from './CustomMenuIcon';
import { Page, NavigationProps } from '../types';

interface ExtendedNavProps extends NavigationProps {
  currentPage: Page;
}

export const Navigation: React.FC<ExtendedNavProps> = ({ 
  setPage, 
  currentPage 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (page: Page) => {
    setIsOpen(false);
    setActiveSubMenu(null);
    setPage(page);
  };

  const handleLinkClick = (url: string) => {
    setIsOpen(false);
    setActiveSubMenu(null);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navItems = [
    { id: Page.Home, label: 'Home' },
    { id: Page.OurStaff, label: 'Staff' },
    { id: Page.NewBuilding, label: 'New Building' },
    { id: Page.Conference2025, label: 'Conference' },
    { id: Page.Events2026, label: 'Events' },
    { id: Page.Stories, label: 'Stories' },
  ];

  const mobileMenuData = [
    {
      id: 'About Us',
      label: 'About Us',
      subItems: [
        { label: 'Our Staff', page: Page.OurStaff },
        { label: 'Our Vision & Beliefs', page: Page.Stories }
      ]
    },
    {
      id: 'Events',
      label: 'Events',
      subItems: [
        { label: '2026 Calendar', page: Page.Events2026 },
        { label: 'Conference', page: Page.Conference2025 }
      ]
    },
    {
      id: 'Broadcast',
      label: 'Broadcast',
      subItems: [
        { label: 'Watch Live', url: 'https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA' },
        { label: 'Media Archive', url: 'https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc' }
      ]
    },
    {
      id: 'Contact',
      label: 'Contact',
      subItems: [
        { label: 'Get in Touch', page: Page.GetConnected },
        { label: 'Find Church', url: 'https://www.cfmmap.org/' }
      ]
    }
  ];

  return (
    <>
      <nav className="fixed top-0 z-[100] w-full px-0 py-6 transition-all duration-300 bg-[#0B0D0F]/90 backdrop-blur-md shadow-lg border-b border-white/10">

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex items-center justify-between relative w-full">
            {/* Centered Glassmorphism Pill */}
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[15px] border border-[rgba(255,255,255,0.1)] rounded-[100px] px-[24px] py-[10px] flex items-center gap-6 shadow-xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-bold transition-colors hover:text-white font-heading tracking-wide ${
                    currentPage === item.id ? 'text-white' : 'text-white/70'
                  } focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none rounded-md px-2 py-1`}
                >
                  {item.label}
                </button>
              ))}

              {/* Restored Find Church Link Button */}
              <a
                href="https://www.cfmmap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold transition-colors hover:text-white font-heading tracking-wide text-white/70 focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none rounded-md px-2 py-1 inline-block text-center`}
              >
                Find Church
              </a>
            </div>

            {/* Logo stretched to far right */}
            <div className="flex items-center cursor-pointer active-elevate ml-auto" onClick={() => handleNavClick(Page.Home)}>
                <img
                  src="https://i.postimg.cc/HW79Ljpk/1763367303077.png"
                  alt="PH Logo"
                  className="h-14 w-auto object-contain object-right max-w-[180px]"
                />
            </div>
        </div>

        {/* MOBILE LAYOUT (Kept similar functionality for smaller screens) */}
        <div className="md:hidden flex items-center justify-between w-full">
            <div className="flex items-center gap-2 cursor-pointer active-elevate" onClick={() => handleNavClick(Page.Home)}>
                <img
                  src="https://i.postimg.cc/HW79Ljpk/1763367303077.png"
                  alt="PH Logo"
                  className="h-10 w-auto object-contain object-left max-w-[140px]"
                />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-2 active-elevate rounded-md bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <CustomMenuIcon className="w-8 h-8" />}
            </button>
        </div>
      </nav>

      {/* MINIMALIST MOBILE MENU (Slide-in Panel) */}
      <div 
        className={`fixed inset-0 z-[105] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsOpen(false)}
      />
      <div 
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 w-[75%] max-w-sm z-[110] liquid-glass-grey shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Top Bar inside Mobile Menu */}
        <div className="w-full px-4 py-6 flex items-center justify-between">
          <img
            src="https://i.postimg.cc/HW79Ljpk/1763367303077.png"
            alt="PH Logo"
            className="h-10 w-auto object-contain object-left max-w-[140px]"
          />
          <button
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => setActiveSubMenu(null), 300); // reset submenu after close animation
            }}
            aria-label="Close menu"
            className="p-2 text-white hover:text-white/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md"
          >
              <X size={32} />
          </button>
        </div>

        {/* Overflow Container for Sliding Menus */}
        <div className="relative w-full flex-1 overflow-hidden">

          {/* Main Level Menu */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: activeSubMenu ? '-100%' : '0%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="absolute inset-0 w-full h-full flex flex-col py-8 overflow-y-auto"
          >
              <button
                onClick={() => handleNavClick(Page.Home)}
                className="w-full text-left px-8 py-5 text-lg font-medium text-white/90 hover:text-white capitalize border-b border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Home
              </button>

              {mobileMenuData.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => setActiveSubMenu(menu.id)}
                  className="w-full flex items-center justify-between px-8 py-5 text-lg font-medium text-white/90 hover:text-white capitalize border-b border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 group"
                >
                  {menu.label}
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                </button>
              ))}
          </motion.div>

          {/* Sub Levels */}
          {mobileMenuData.map((menu) => (
            <motion.div
              key={`sub-${menu.id}`}
              initial={{ x: '100%' }}
              animate={{ x: activeSubMenu === menu.id ? '0%' : '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute inset-0 w-full h-full flex flex-col py-8 overflow-y-auto"
            >
              <button
                onClick={() => setActiveSubMenu(null)}
                className="w-full flex items-center gap-4 px-8 py-4 text-sm font-medium text-gray-400 hover:text-white capitalize border-b border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <div className="mt-4">
                  {menu.subItems.map((sub, i) => (
                    <button
                      key={i}
                      onClick={() => sub.page ? handleNavClick(sub.page) : sub.url ? handleLinkClick(sub.url) : null}
                      className="w-full text-left px-8 py-5 text-lg font-medium text-white/90 hover:text-white capitalize border-b border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      {sub.label}
                    </button>
                  ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </>
  );
};
