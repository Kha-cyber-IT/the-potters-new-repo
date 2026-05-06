import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Page, NavigationProps } from '../types';
import { ModernButton } from './ModernButton';

export const Home: React.FC<NavigationProps> = ({ setPage }) => {
  const carouselImages = [
    'https://i.postimg.cc/ht0v1qLN/IMG-20260330-WA0038.jpg',
    'https://i.postimg.cc/HkmjMLy8/IMG-20260330-WA0039.jpg',
    'https://i.postimg.cc/NLqqW5cX/IMG-20260403-WA0001.jpg',
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselImages.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [isCarouselPaused, carouselImages.length]);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const sentence = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="animate-fade-in bg-[#0D1B2A] min-h-screen w-full pb-0 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="hero relative min-h-screen flex items-center w-full pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(13,27,42,0.7), rgba(13,27,42,0.78)), url('https://i.postimg.cc/tTGQV7St/1776346333530.png')",
          }}
        />

        <div className="w-full px-4 md:px-6 lg:px-0 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center">
          
          {/* LEFT SIDE: Flowing Text */}
          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-6xl mx-auto lg:mx-0">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-4 text-blue-500">
                <span className="h-[1px] w-12 md:w-16 bg-blue-500"></span>
                <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase">Faith & Transformation</span>
              </div>
            </motion.div>

            <motion.h1
              variants={isMobile ? undefined : sentence}
              initial={isMobile ? false : "hidden"}
              animate={isMobile ? undefined : "show"}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.75rem] font-black text-white leading-[1.12] tracking-tighter"
            >
              <motion.span variants={isMobile ? undefined : word}>
                Our mission is simple. To bring the Truth of Jesus Christ to the world!
              </motion.span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-lg md:text-2xl text-white/85 leading-relaxed font-normal">
              We are completely centered around Jesus Christ. <span className="text-blue-500 font-bold italic">His love. His power. His message.</span>
            </motion.p>

            {/* FIXED HERO BUTTONS (Glowing Edge on Pitch Black) */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex flex-row gap-3 md:gap-4 justify-start items-center">
              <button
                onClick={() => setPage(Page.AboutUs)}
                className="h-10 md:h-14 px-5 md:px-10 bg-blue-600 text-white font-black text-[11px] md:text-sm rounded-full uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
              >
                Who We Are
              </button>
              <ModernButton
                text="Stream Now"
                href="https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA"
                className="h-10 md:h-14 px-5 md:px-10 bg-black border border-purple-500 text-white text-[11px] md:text-sm rounded-full font-bold uppercase transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.6),inset_0_0_10px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.9),inset_0_0_15px_rgba(168,85,247,0.6)]"
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE: The 12K Card & Enlarging Card */}
          <div className="flex flex-col gap-4 md:gap-8 w-full justify-self-end mt-12 lg:mt-0">
            <motion.div className="bg-[#121519] border border-white/10 rounded-2xl md:rounded-[3rem] p-6 md:p-14 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center opacity-30 contrast-125 saturate-150" style={{ backgroundImage: "url('https://i.postimg.cc/ZnFQpcTf/502a78-db9fe996869248f6800cc779e84bf461-mv2.jpg')" }} />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-20 text-center">
                <div>
                  <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">12K+</h3>
                  <p className="text-blue-500 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">Lives Changed</p>
                </div>
                <div className="w-[1px] h-16 bg-white/10 hidden sm:block" />
                <div>
                  <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">45+</h3>
                  <p className="text-blue-500 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">Global Missions</p>
                </div>
              </div>
            </motion.div>

            <motion.div onClick={() => setPage(Page.NewBuilding)} className="block relative rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/10 cursor-pointer h-[160px] md:h-[300px] shadow-2xl group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] group-hover:scale-110" style={{ backgroundImage: "url('https://i.postimg.cc/MGM1hpjw/ea998c-0f1c76517790470ea0fd9d89718a5005-mv2.jpg')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 text-center">
                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter">We're Enlarging!</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOWER CONTENT */}
      <div className="w-full text-center px-4 md:px-6 mt-12 md:mt-32">
        
        {/* SERVICES GRID */}
        <div className="mb-12 md:mb-24">
          <h3 className="text-white text-xl md:text-4xl font-black mb-8 md:mb-12 uppercase tracking-widest underline underline-offset-8">Weekly Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-[1400px] mx-auto">
            {/* Sunday Card */}
            <div className="bg-[#FEFACD] rounded-2xl p-6 text-left shadow-sm">
              <h4 className="text-2xl font-black mb-4 text-gray-900 border-l-8 border-black pl-4">Sunday</h4>
              <div className="space-y-2 text-gray-900 font-bold text-sm md:text-base">
                <p>9:00 AM — Bible Study</p>
                <p>10:00 AM — Morning Worship</p>
                <p>5:00 PM — Evening Worship</p>
              </div>
            </div>
            {/* Mid-week Cards (Updated Hex Colors) */}
            <div className="bg-[#F26749] rounded-2xl p-6 text-left text-white shadow-sm">
              <h4 className="text-2xl font-black mb-4 border-l-8 border-white/40 pl-4">Wednesday</h4>
              <p className="font-bold text-sm md:text-base">7:00 PM — Weekly Worship</p>
            </div>
            <div className="bg-[#F5E6A3] rounded-2xl p-6 text-left text-gray-900 shadow-sm">
              <h4 className="text-2xl font-black mb-4 border-l-8 border-black/20 pl-4">Friday</h4>
              <p className="font-bold text-sm md:text-base">7:00 PM — One80 Content</p>
            </div>
          </div>
        </div>

        {/* CONNECT HUB - UPDATED HEX COLORS AND TEXT */}
        <div className="w-full py-8 md:py-16 px-0">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
            {/* New To Church (Updated Bg and Buttons) */}
            <div className="bg-[#ACC8A2] p-6 md:p-12 rounded-2xl md:rounded-[3rem] flex flex-col items-center justify-center">
              <h2 className="text-lg md:text-3xl font-black text-gray-900 uppercase mb-3 underline underline-offset-8 decoration-2 text-center">New to The Potter's House?</h2>
              <p className="text-[13px] md:text-lg font-medium text-gray-900/80 mb-6 max-w-md text-center leading-relaxed">Get in touch with us and let us know how we can help.</p>
              <div className="flex gap-3">
                <ModernButton text="Contact" onClick={() => setPage(Page.GetConnected)} className="bg-[#2872A1] hover:bg-[#1f5a80] text-white h-10 px-5 text-[11px] md:text-[13px] rounded-full font-bold uppercase" />
                <ModernButton text="Visit" onClick={() => setPage(Page.PlanAVisit)} className="bg-[#2872A1] hover:bg-[#1f5a80] text-white h-10 px-5 text-[11px] md:text-[13px] rounded-full font-bold uppercase" />
              </div>
            </div>

            {/* WhatsApp Card (Updated Bg and Button) */}
            <div className="bg-[#ffd3c0] p-6 md:p-12 rounded-2xl md:rounded-[3rem] flex flex-col items-center justify-center">
              <h2 className="text-lg md:text-3xl font-black text-gray-900 uppercase mb-3 underline underline-offset-8 decoration-2 text-center">Stay Connected</h2>
              <p className="text-[13px] md:text-lg font-medium text-gray-900/80 mb-4 max-w-md text-center leading-relaxed">
                Follow us on WhatsApp for daily devotions and updates. Scan the QR code or click below to join.
              </p>
              <div className="bg-white p-2 md:p-3 rounded-xl mb-5 shadow-sm">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G" alt="QR" className="w-16 h-16 md:w-24 md:h-24" />
              </div>
              <ModernButton text="Join Channel" href="https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G" className="bg-[#2872A1] hover:bg-[#1f5a80] text-white h-10 px-6 text-[11px] md:text-[13px] rounded-full font-bold uppercase" />
            </div>
          </div>
        </div>

        {/* BROADCASTS SECTION - GLOWING EDGE BUTTON */}
        <div className="w-full py-8 md:py-16 mb-12">
          <div className="max-w-[1400px] mx-auto px-0">
            <div className="bg-[#121519] border border-white/10 rounded-2xl md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
              {/* Subtle YouTube Background */}
              <div className="absolute inset-0 bg-cover bg-center opacity-25 contrast-150 saturate-0" style={{ backgroundImage: "url('https://i.postimg.cc/G2LTr3Fp/1776346065556.png')" }} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 md:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-16 md:w-16 text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.4)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.226-11.63-.226-15.234 0C.486 3.407 0 4.888 0 7.5v9c0 2.612.486 4.093 4.381 4.316 3.604.226 11.63.226 15.234 0 3.896-.223 4.381-1.704 4.381-4.316v-9c0-2.612-.486-4.093-4.381-4.316zM9 16.5v-9L16 12l-7 4.5z"/>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-3">Broadcasts</h3>
                <p className="text-blue-500 text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase mb-8">Missed a service? Watch on YouTube</p>
                <ModernButton
                  text="Watch Now"
                  href="https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA"
                  className="h-10 md:h-14 px-6 md:px-10 bg-black border border-purple-500 text-white text-[11px] md:text-sm rounded-full font-bold uppercase transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.6),inset_0_0_10px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.9),inset_0_0_15px_rgba(168,85,247,0.6)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
