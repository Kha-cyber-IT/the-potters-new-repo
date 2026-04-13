import React from 'react';
import { motion } from 'framer-motion';
import { Page, NavigationProps } from '../types';
import { MapPin, Mail, Phone, Youtube, Music, MessageCircle, Map as MapIcon } from 'lucide-react';

export const Footer: React.FC<NavigationProps> = ({ setPage }) => {
  const leftLinks = [
    { page: Page.AboutUs, label: "About Us" },
    { page: Page.OurStaff, label: "Our Staff" },
    { page: Page.Give, label: "Giving" },
  ];

  const middleLinks = [
    { page: Page.Recovery, label: "Recovery Ministry" },
    { page: Page.ChildrensMinistry, label: "Children's Ministry" },
    { page: Page.ChurchPlanting, label: "Church Planting" },
  ];

  const rightLinks = [
    { page: Page.OurVision, label: "Our Vision" },
    { page: Page.Stories, label: "Beliefs & Stories" },
  ];

  const contactLinks: { page?: Page; url?: string; label: string; }[] = [
    { page: Page.GetConnected, label: "Get Connected" },
    { page: Page.PlanAVisit, label: "Visit Us" },
    { page: Page.GetConnected, label: "Locations" },
  ];

  const handleFooterClick = (page: Page, label: string) => {
    setPage(page);
    if (label === 'Locations') {
      setTimeout(() => {
        const el = document.getElementById('global-reach');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  const socialLinks = [
    { 
      icon: <Youtube className="flex-shrink-0 h-6 w-6" />, 
      label: "YouTube", 
      url: "https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA"
    },
    { 
      icon: <Music className="flex-shrink-0 h-6 w-6" />,
      label: "Spotify",
      url: "https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc"
    },
    {
      icon: <Mail className="flex-shrink-0 h-6 w-6" />,
      label: "Email",
      url: "mailto:joburg@worldcfm.com"
    }
  ];

  return (
    <footer className="bg-black text-white w-full py-12 px-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-left"
        >
          <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
          }} className="flex flex-col space-y-2">
            <h4 className="font-bold text-gray-400 uppercase mb-2">Home</h4>
            {leftLinks.map((link) => (
                <button key={link.label} onClick={() => setPage(link.page)} className="text-white hover:underline text-left">
                  {link.label}
                </button>
            ))}
          </motion.div>

          <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
          }} className="flex flex-col space-y-2">
            <h4 className="font-bold text-gray-400 uppercase mb-2">Ministries</h4>
            {middleLinks.map((m) => (
                <button key={m.label} onClick={() => m.page && setPage(m.page)} className="text-white hover:underline text-left">
                  {m.label}
                </button>
            ))}
          </motion.div>

          <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
          }} className="flex flex-col space-y-2">
            <h4 className="font-bold text-gray-400 uppercase mb-2">Believes</h4>
            {rightLinks.map((r) => (
                <button key={r.label} onClick={() => setPage(r.page)} className="text-white hover:underline text-left">
                  {r.label}
                </button>
            ))}
          </motion.div>

          <motion.div variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
          }} className="flex flex-col space-y-2 lg:items-end lg:text-right">
            <h4 className="font-bold text-gray-400 uppercase mb-2">CONTACT US</h4>
            {contactLinks.map((c) => (
                c.url ? (
                  <a key={c.label} href={c.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline text-left lg:text-right">
                    {c.label}
                  </a>
                ) : (
                  <button key={c.label} onClick={() => c.page && handleFooterClick(c.page, c.label)} className="text-white hover:underline text-left lg:text-right">
                    {c.label}
                  </button>
                )
            ))}
          </motion.div>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
            {socialLinks.map((social) => (
            <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-start h-[60px] w-[60px] hover:w-[180px] px-5 rounded-full text-white hover:text-black bg-white/10 hover:bg-white border border-white/20 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-1"
                title={social.label}
            >
                {social.icon}
                <span className="whitespace-nowrap ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold uppercase tracking-widest text-sm">
                    {social.label}
                </span>
            </a>
            ))}
        </div>
        
        <div className="mt-12 text-center text-[10px] text-gray-500 border-t border-gray-800 pt-6">
          © 2026 THE POTTER'S HOUSE CHRISTIAN FELLOWSHIP CHURCH ELDORADO PARK, SOWETO • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};
