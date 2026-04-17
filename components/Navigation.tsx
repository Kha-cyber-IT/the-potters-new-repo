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

  // TymeBank-style desktop nav: grouped dropdowns + direct links
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
        { label: 'New Building', page: Page.NewBuilding },
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
      id: 'connect',
      label: 'Contact Us',
      type: 'dropdown' as const,
      subItems: [
        { label: 'Contact Us', page: Page.GetConnected },
        { label: 'Plan a Visit', page: Page.PlanAVisit },
        { label: 'Give', page: Page.Give },
      ]
    },
  ];

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
        { label: 'New Building', page: Page.NewBuilding },
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
      id: 'Contact',
      label: 'Contact',
      subItems: [
        { label: 'Get in Touch', page: Page.GetConnected },
        { label: 'Plan a Visit', page: Page.PlanAVisit },
        { label: 'Give', page: Page.Give },
      ]
    }
  ];

  return (
    <>
      <nav className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        scrolled ? 'bg-[#0B0D0F] shadow-lg' : 'bg-[#0B0D0F]/90 backdrop-blur-md'
      } border-b border-white/10`}>

        {/* DESKTOP LAYOUT — TymeBank style: Logo left, links center, CTA right */}
        <div className="hidden md:flex items-center justify-between w-full px-6 lg:px-10 py-3">
            {/* Logo on the left */}
            <div className="flex-shrink-0 flex items-center cursor-pointer active-elevate" onClick={() => handleNavClick(Page.Home)}>
                <img
                  src="https://i.postimg.cc/HW79Ljpk/1763367303077.png"
                  alt="PH Logo"
                  className="h-12 w-auto object-contain max-w-[160px]"
                />
            </div>

            {/* Center nav links with dropdowns */}
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

                    {/* Dropdown panel */}
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

        {/* MOBILE LAYOUT */}
        <div className="md:hidden flex items-center justify-between w-full px-4 py-3">
            <div className="flex items-center gap-2 cursor-pointer active-elevate" onClick={() => handleNavClick(Page.Home)}>
                <img
                  src="https://i.postimg.cc/HW79Ljpk/1763367303077.png"
                  alt="PH Logo"
                  className="h-10 w-auto object-contain object-left max-w-[140px]"
                />
            </div>

            {/* Mobile Menu Toggle — TymeBank hamburger style */}
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
              className="p-2 active-elevate rounded-md hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <CustomMenuIcon className="w-7 h-7 text-white" />}
            </button>
        </div>
      </nav>

      {/* MOBILE MENU — TymeBank style: dark slide-in panel */}
      <div 
        className={`fixed inset-0 z-[105] bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => { setIsOpen(false); setActiveSubMenu(null); }}
        aria-hidden="true"
      />
      <div 
        id="mobile-menu"
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm z-[110] bg-[#0B0D0F] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Top Bar — Logo + X close (TymeBank style) */}
        <div className="w-full px-5 py-3 flex items-center justify-between border-b border-white/10">
          <img
            src="https://i.postimg.cc/HW79Ljpk/1763367303077.png"
            alt="PH Logo"
            className="h-8 w-auto object-contain object-left max-w-[120px]"
          />
          <button
            onClick={() => {
              setIsOpen(false);
              setTimeout(() => setActiveSubMenu(null), 300);
            }}
            aria-label="Close menu"
            className="p-1.5 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md"
          >
              <X size={24} />
          </button>
        </div>

        {/* Menu content — compact items */}
        <div className="relative w-full flex-1 overflow-y-auto overflow-x-hidden">

          {/* Main Level Menu */}
          <div
            className={`w-full flex flex-col pt-2 ${activeSubMenu ? 'hidden' : ''}`}
          >
              <button
                onClick={() => handleNavClick(Page.Home)}
                className="w-full text-left px-5 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 border-b border-white/[0.06] transition-colors focus:outline-none"
              >
                Home
              </button>

              {mobileMenuData.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => setActiveSubMenu(menu.id)}
                  className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 border-b border-white/[0.06] transition-colors focus:outline-none group"
                >
                  {menu.label}
                  <ChevronDown className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors -rotate-90" />
                </button>
              ))}
          </div>

          {/* Sub Levels */}
          {mobileMenuData.map((menu) => (
            <div
              key={`sub-${menu.id}`}
              className={`w-full flex flex-col pt-2 ${activeSubMenu === menu.id ? '' : 'hidden'}`}
            >
              <button
                onClick={() => setActiveSubMenu(null)}
                className="w-full flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white/50 hover:text-white border-b border-white/[0.06] transition-colors focus:outline-none"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>

              <p className="px-5 pt-3 pb-1.5 text-[11px] font-semibold text-white/30 uppercase tracking-wider">{menu.label}</p>

              {menu.subItems.map((sub, i) => (
                <button
                  key={i}
                  onClick={() => sub.page ? handleNavClick(sub.page) : sub.url ? handleLinkClick(sub.url) : null}
                  className="w-full text-left px-5 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/5 border-b border-white/[0.06] transition-colors focus:outline-none"
                >
                  {sub.label}
                </button>
              ))}
            </div>
          ))}

        </div>

        {/* Bottom padding for menu */}
        <div className="px-5 py-3" />
      </div>
    </>
  );
};
