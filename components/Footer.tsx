import React from 'react';
import { motion } from 'framer-motion';
import { Page, NavigationProps } from '../types';

export const Footer: React.FC<NavigationProps> = ({ setPage }) => {
  const sections = [
    {
      heading: 'About',
      links: [
        { label: 'About Us', page: Page.AboutUs },
        { label: 'Our Staff', page: Page.OurStaff },
        { label: 'Giving', page: Page.Give },
      ],
    },
    {
      heading: 'Ministries',
      links: [
        { label: 'Recovery Ministry', page: Page.Recovery },
        { label: "Children's Ministry", page: Page.ChildrensMinistry },
        { label: 'Church Planting', page: Page.ChurchPlanting },
      ],
    },
    {
      heading: 'Believes',
      links: [
        { label: 'Our Vision', page: Page.OurVision },
        { label: 'Beliefs & Stories', page: Page.Stories },
        { label: 'Events', page: Page.Events2026 },
      ],
    },
    {
      heading: 'Contact Us',
      links: [
        { label: 'Get in Touch', page: Page.GetConnected },
        { label: 'Plan a Visit', page: Page.PlanAVisit },
        { label: 'Find Church', url: 'https://cfmmap.org/' },
      ],
    },
  ];

  const handleClick = (page: Page, scrollTarget?: string) => {
    (setPage as (page: Page, scrollTarget?: string) => void)(page, scrollTarget);
  };

  const handleFooterLink = (link: any) => {
    if (link.url) {
      window.open(link.url, '_blank', 'noopener,noreferrer');
      return;
    }
    handleClick(link.page, link.scrollTarget);
  };

  // Official SVG Icons with brand hover colors
  const socialLinks = [
    { 
      label: 'YouTube', 
      url: 'https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA',
      hoverClass: 'hover:text-[#FF0000] hover:border-[#FF0000]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    { 
      label: 'Spotify', 
      url: 'https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc',
      hoverClass: 'hover:text-[#1DB954] hover:border-[#1DB954]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.45 17.332c-.212.351-.67.466-1.02.253-2.795-1.706-6.315-2.091-10.457-1.146-.402.093-.8-.16-.893-.564-.093-.404.16-.8.564-.893 4.514-1.026 8.405-.589 11.551 1.33.351.213.466.669.254 1.02zm1.162-2.585c-.266.435-.845.576-1.28.312-3.197-1.96-8.118-2.551-11.954-1.396-.51.154-1.047-.134-1.201-.644-.154-.51.134-1.047.644-1.201 4.385-1.319 9.851-.652 13.479 1.572.435.266.576.845.312 1.28zm.134-2.709C15.14 9.873 8.795 9.613 5.12 10.728c-.628.191-1.298-.163-1.488-.791-.191-.628.162-1.297.791-1.488 4.22-1.28 11.238-1.002 15.65 1.616.564.336.75.992.414 1.556-.336.564-.992.75-1.556.414z"/>
        </svg>
      )
    },
    { 
      label: 'Email', 
      url: 'mailto:joburg@worldcfm.com',
      hoverClass: 'hover:text-[#3b82f6] hover:border-[#3b82f6]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-black text-white w-full">

      {/* Mobile footer — plain text, edge-to-edge */}
      <div className="md:hidden">
        {sections.map((section) => (
          <div key={section.heading} className="border-b border-white/10">
            <p className="px-4 pt-5 pb-2 text-[11px] font-bold tracking-[0.25em] uppercase text-white/40">
              {section.heading}
            </p>
            {section.links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleFooterLink(link)}
                className="w-full text-left px-4 py-2 text-sm font-medium text-white/75 active:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        ))}

        {/* Mobile social & address (Centered) */}
        <div className="flex flex-col items-center justify-center px-4 py-10 gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((s) => (
              <a 
                key={s.label} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center h-12 w-12 rounded-full bg-white/5 border border-white/10 text-white/70 transition-all duration-300 ${s.hoverClass}`}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          
          <p className="text-[10px] text-white/30 text-center leading-relaxed max-w-[280px]">
            11 ALBERTA STR, ELDORADO PARK, SOWETO <br /> 
            The Potter's House Christian Fellowship Ministries ©<br /><br />
            Mailing Address: PO Box X1510, Glenvista, 2058
          </p>
        </div>
      </div>

      {/* Desktop footer — horizontal single-plane layout */}
      <div className="hidden md:block py-14 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-6xl mx-auto flex flex-row justify-center items-start gap-16 xl:gap-24"
        >
          {sections.map((section) => (
            <motion.div
              key={section.heading}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } } }}
              className="flex flex-col gap-3"
            >
              <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-1">
                {section.heading}
              </h4>
              {section.links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleFooterLink(link)}
                  className="text-sm font-medium text-white/75 hover:text-white transition-colors text-left whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop divider & Centered Social/Address */}
        <div className="max-w-6xl mx-auto border-t border-white/10 mt-16 pt-10 flex flex-col items-center justify-center gap-8">
          
          {/* Centered Icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <a 
                key={s.label} 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group flex items-center justify-center h-12 w-12 rounded-full bg-white/5 border border-white/15 text-white/70 transition-all duration-300 ${s.hoverClass}`}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Centered Text */}
          <p className="text-[11px] text-white/30 text-center leading-relaxed">
            11 ALBERTA STR, ELDORADO PARK, SOWETO | The Potter's House Christian Fellowship Ministries ©<br />
            Mailing Address: PO Box X1510, Glenvista, 2058
          </p>

        </div>
      </div>
    </footer>
  );
};
