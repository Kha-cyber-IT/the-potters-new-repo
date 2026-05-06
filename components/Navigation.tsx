import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronDown, ArrowLeft } from 'lucide-react';
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
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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

  useEffect(() => {
    setIsOpen(false);
    setActiveSubMenu(null);
  }, [currentPage]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setDesktopDropdown(null);
    if (desktopDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [desktopDropdown]);

  // Close mobile menu when viewport resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setActiveSubMenu(null);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (page: Page) => {
    setIsOpen(false);
    setActiveSubMenu(null);
    setDesktopDropdown(null);
    setPage(page);
  };

  const handleLinkClick = (url: string) => {
    setIsOpen(false);
    setActiveSubMenu(null);
    setDesktopDropdown(null);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Desktop Menu Data
  const desktopMenuData = [
    { id: Page.Home, label: 'Home', type: 'link' as const },
    {
      id: 'about',
      label: 'About',
      type: 'dropdown' as const,
      subItems: [
        { label: 'Our Staff', page: Page.OurStaff },
        { label: 'Our Vision', page: Page.OurVision },
        { label: 'Beliefs & Stories', page: Page.Stories },
      ]
    },
    {
      id: 'ministries',
      label: 'Ministries',
      type: 'dropdown' as const,
      subItems: [
        { label: 'Church Planting', page: Page.ChurchPlanting },
        { label: 'Recovery', page: Page.Recovery },
        { label: "Children's Ministry", page: Page.ChildrensMinistry },
      ]
    },
    {
      id: 'events',
      label: 'Events',
      type: 'dropdown' as const,
      subItems: [
        { label: 'Conference 2025', page: Page.Conference2025 },
        { label: 'Events 2026', page: Page.Events2026 },
      ]
    },
    {
      id: 'media',
      label: 'Media Archive',
      type: 'dropdown' as const,
      subItems: [
        { label: 'YouTube', url: 'https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA' },
        { label: 'Spotify', url: 'https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc' },
      ]
    },
    {
      id: 'connect',
      label: 'Contact Us',
      type: 'dropdown' as const,
      subItems: [
        { label: 'Contact Us', page: Page.GetConnected },
        { label: 'Plan a Visit', page: Page.PlanAVisit },
        { label: 'Give', page: Page.Give },
        { label: 'New Building', page: Page.NewBuilding },
      ]
    },
  ];

  // Mobile Menu Data
  const mobileMenuData = [
    {
      id: 'About Us',
      label: 'About Us',
      subItems: [
        { label: 'Our Staff', page: Page.OurStaff },
        { label: 'Our Vision', page: Page.OurVision },
        { label: 'Beliefs & Stories', page: Page.Stories },
      ]
    },
    {
      id: 'Ministries',
      label: 'Ministries',
      subItems: [
        { label: 'Church Planting', page: Page.ChurchPlanting },
        { label: 'Recovery', page: Page.Recovery },
        { label: "Children's Ministry", page: Page.ChildrensMinistry },
      ]
    },
    {
      id: 'Events',
      label: 'Events',
      subItems: [
        { label: 'Conference 2025', page: Page.Conference2025 },
        { label: '2026 Calendar', page: Page.Events2026 },
      ]
    },
    {
      id: 'Media Archive',
      label: 'Media Archive',
      subItems: [
        { label: 'YouTube', url: 'https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA' },
        { label: 'Spotify', url: 'https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc' },
      ]
    },
    {
      id: 'Contact',
      label: 'Contact',
      subItems: [
        { label: 'Get in Touch', page: Page.GetConnected },
        { label: 'Plan a Visit', page: Page.PlanAVisit },
        { label: 'Give', page: Page.Give },
        { label: 'New Building', page: Page.NewBuilding },
      ]
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 z-[120] w-full transition-all duration-300 ${
        scrolled ? 'bg-[#0B0D0F] shadow-lg' : 'bg-[#0B0D0F]/90 backdrop-blur-md'
      } border-b border-white/10`}>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex items-center justify-between w-full px-6 lg:px-10 py-3">
            <div className="flex-shrink-0 flex items-center cursor-pointer active-elevate" onClick={() => handleNavClick(Page.Home)}>
                <img
                  src="https://i.postimg.cc/HW79Ljpk/1763367303077.png"
                  alt="PH Logo"
                  className="h-12 w-auto object-contain max-w-[160px]"
                />
            </div>

            <div className="flex items-center gap-1 lg:gap-2">
              {desktopMenuData.map((item) => (
                item.type === 'link' ? (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id as Page)}
                    className={`text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-md ${
                      currentPage === item.id ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <div key={item.id} className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDesktopDropdown(desktopDropdown === item.id ? null : item.id);
                      }}
                      className={`text-sm font-medium transition-colors hover:text-white px-3 py-2 rounded-md flex items-center gap-1 ${
                        desktopDropdown === item.id ? 'text-white' : 'text-white/70'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdown === item.id ? 'rotate-180' : ''}`} />
                    </button>

                    {desktopDropdown === item.id && item.subItems && (
                      <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-[#1a1d24] border border-white/10 rounded-lg shadow-xl py-2 z-50">
                        {item.subItems.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => sub.page ? handleNavClick(sub.page) : sub.url ? handleLinkClick(sub.url) : null}
                            className="w-full text-left px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>

            <div className="flex-shrink-0 flex items-center gap-3">
              <a
                href="https://cfmmap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#0B0D0F] bg-[#FFD700] hover:bg-[#FFC000] px-5 py-2 rounded-full transition-colors shadow-md"
              >
                Find Church
              </a>
            </div>
        </div>

        {/* MOBILE LAYOUT HEADER */}
        <div className="md:hidden flex items-center justify-between w-full px-4 py-3 relative z-[120]">
            <div className="flex items-center gap-2 cursor-pointer active-elevate" onClick={() => handleNavClick(Page.Home)}>
                <img
                  src="https://i.postimg.cc/HW79Ljpk/1763367303077.png"
                  alt="PH Logo"
                  className="h-10 w-auto object-contain object-left max-w-[140px]"
                />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen((open) => !open);
              }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="p-2 active-elevate rounded-md hover:bg-white/5 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <CustomMenuIcon className="w-7 h-7 text-white" />}
            </button>
        </div>
      </nav>

      {/* MOBILE MENU BACKGROUND OVERLAY */}
      <div 
        className={`md:hidden fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm ${mounted ? 'transition-opacity duration-300' : ''} ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => { setIsOpen(false); setActiveSubMenu(null); }}
        aria-hidden="true"
      />

      {/* MOBILE MENU FLOATING DROPDOWN (Liquid Glass + Auto Height) */}
      <div 
        id="mobile-menu"
        className={`md:hidden fixed top-[72px] left-4 right-4 z-[115] h-auto max-h-[calc(100vh-100px)] bg-[#0B0D0F]/45 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-2xl ${mounted ? 'transition-all duration-300 ease-out' : ''} flex flex-col overflow-hidden ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="relative w-full overflow-y-auto h-auto py-2">

          {/* Main Level Menu */}
          <div className={`w-full flex flex-col ${activeSubMenu ? 'hidden' : ''}`}>
              <button
                onClick={() => handleNavClick(Page.Home)}
                className="w-full text-left px-5 py-4 text-sm font-semibold text-white tracking-wide hover:bg-white/10 border-b border-white/[0.08] transition-colors focus:outline-none"
              >
                Home
              </button>

              {mobileMenuData.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => setActiveSubMenu(menu.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-white tracking-wide hover:bg-white/10 border-b border-white/[0.08] transition-colors focus:outline-none group"
                >
                  {menu.label}
                  <ChevronDown className="w-4 h-4 text-white/60 group-hover:text-white transition-colors -rotate-90" />
                </button>
              ))}
          </div>

          {/* Sub Levels */}
          {mobileMenuData.map((menu) => (
            <div
              key={`sub-${menu.id}`}
              className={`w-full flex flex-col ${activeSubMenu === menu.id ? '' : 'hidden'}`}
            >
              <button
                onClick={() => setActiveSubMenu(null)}
                className="w-full flex items-center gap-2 px-5 py-3 text-xs font-medium text-white/60 hover:text-white border-b border-white/[0.08] transition-colors bg-white/5 focus:outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to main menu
              </button>

              <p className="px-5 pt-4 pb-2 text-[11px] font-bold text-[#FFD700] uppercase tracking-widest">{menu.label}</p>

              {menu.subItems.map((sub, i) => (
                <button
                  key={i}
                  onClick={() => sub.page ? handleNavClick(sub.page) : sub.url ? handleLinkClick(sub.url) : null}
                  className="w-full text-left px-5 py-3.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 border-b border-white/[0.08] transition-colors focus:outline-none"
                >
                  {sub.label}
                </button>
              ))}
            </div>
          ))}

        </div>
      </div>
    </>
  );
};
