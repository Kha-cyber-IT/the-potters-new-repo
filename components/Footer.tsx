import React from 'react';
import { motion } from 'framer-motion';
import { Page, NavigationProps } from '../types';
import { Youtube, Music, Mail } from 'lucide-react';

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
        { label: 'Locations', page: Page.GetConnected, scrollTarget: 'global-reach' },
      ],
    },
  ];

  const handleClick = (page: Page, scrollTarget?: string) => {
    (setPage as (page: Page, scrollTarget?: string) => void)(page, scrollTarget);
  };

  const socialLinks = [
    { icon: <Youtube className="flex-shrink-0 h-6 w-6" />, label: 'YouTube', url: 'https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA' },
    { icon: <Music className="flex-shrink-0 h-6 w-6" />, label: 'Spotify', url: 'https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc' },
    { icon: <Mail className="flex-shrink-0 h-6 w-6" />, label: 'Email', url: 'mailto:joburg@worldcfm.com' },
  ];

  return (
    <footer className="bg-black text-white w-full">

      {/* Mobile footer — plain text, edge-to-edge */}
      <div className="md:hidden">
        {sections.map((section, si) => (
          <div key={section.heading} className="border-b border-white/10">
            <p className="px-4 pt-5 pb-2 text-[11px] font-bold tracking-[0.25em] uppercase text-white/40">
              {section.heading}
            </p>
            {section.links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.page, (link as any).scrollTarget)}
                className="w-full text-left px-4 py-3 text-base font-medium text-white/90 active:bg-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        ))}

        {/* Mobile social */}
        <div className="flex items-center gap-6 px-4 py-6 border-b border-white/10">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              title={s.label}>
              {s.icon}
            </a>
          ))}
        </div>

        <p className="px-4 py-5 text-[10px] text-white/30">
          © 2026 The Potter's House Christian Fellowship Church • Eldorado Park, Soweto
        </p>
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
                  onClick={() => handleClick(link.page, (link as any).scrollTarget)}
                  className="text-sm font-medium text-white/75 hover:text-white transition-colors text-left whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop divider */}
        <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-center h-10 w-10 rounded-full bg-white/8 hover:bg-white border border-white/15 hover:border-white text-white/70 hover:text-black transition-all duration-300"
                title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-[11px] text-white/30 text-center md:text-right">
            © 2026 THE POTTER'S HOUSE CHRISTIAN FELLOWSHIP CHURCH ELDORADO PARK, SOWETO • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};
