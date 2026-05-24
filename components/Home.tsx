import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Page, NavigationProps } from '../types';
import { ModernButton } from './ModernButton';

// --- CUSTOM COUNTER COMPONENTS ---

// Counter: Starts at 1000, speeds up to 4000
const ChurchCounter = () => {
  const [count, setCount] = useState(1000);

  useEffect(() => {
    let current = 1000;
    const target = 4000;
    const increment = (target - 1000) / (2000 / 16); // ~2-second duration
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return <span>{count.toLocaleString()}</span>;
};

// Counter: Jumps specifically 50, 100, 150, 195
const CountryCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = [50, 100, 150, 195];
    let index = 0;
    
    const timer = setInterval(() => {
      setCount(steps[index]);
      if (index === steps.length - 1) {
        clearInterval(timer);
      }
      index++;
    }, 400); // Changes number every 400 milliseconds
    
    return () => clearInterval(timer);
  }, []);

  return <span>{count}</span>;
};

// --- MAIN HOME COMPONENT ---

export const Home: React.FC<NavigationProps> = ({ setPage }) => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  // --- EXCITING TEXT ANIMATION VARIANTS ---
  const containerReveal = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2 
      },
    },
  };

  const lineReveal = {
    hidden: { y: "150%", opacity: 0, rotate: 2 },
    show: {
      y: "0%", 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen w-full pb-0 overflow-x-hidden text-gray-900">
      
      {/* NEW HERO SECTION */}
      <section className="relative min-h-screen flex items-center w-full pt-20 pb-12 overflow-hidden">
        
        {/* Decorative Background Shapes */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#fde69c] rounded-full z-0 opacity-80" />
        <div className="absolute -bottom-40 left-[40%] w-[400px] h-[400px] bg-[#fde69c] rounded-full z-0 hidden md:block opacity-80" />
        <div className="absolute top-[15%] left-[30%] w-[50px] h-[50px] bg-[#fde69c] rounded-full z-0 opacity-80" />

        <div className="w-full px-4 md:px-6 lg:px-0 relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <div className="flex flex-col gap-6 md:gap-8 w-full z-10">
            <motion.h1
              variants={isMobile ? undefined : containerReveal}
              initial={isMobile ? false : "hidden"}
              animate={isMobile ? undefined : "show"}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.1] tracking-tighter uppercase"
            >
              <span className="block overflow-hidden pb-2">
                <motion.span variants={isMobile ? undefined : lineReveal} className="block origin-bottom-left">
                  A Heart for Jesus Christ.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span variants={isMobile ? undefined : lineReveal} className="block origin-bottom-left">
                  A Passion for the Truth.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span variants={isMobile ? undefined : lineReveal} className="block origin-bottom-left">
                  & A Life Transformed.
                </motion.span>
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium max-w-lg">
              Our mission is simple. To bring the Truth of Jesus Christ to the world! We are completely centered around <span className="text-[#b4854b] font-bold italic underline decoration-[#fde69c] decoration-4 underline-offset-4">His love. His power. His message.</span>
            </motion.p>

            {/* HERO BUTTONS */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex flex-row gap-4 justify-start items-center flex-wrap mt-4">
              <button
                onClick={() => setPage(Page.AboutUs)}
                className="h-12 md:h-14 px-8 md:px-10 bg-transparent border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white font-bold text-xs md:text-sm rounded-full uppercase tracking-widest transition-all"
              >
                Who We Are
              </button>
              <ModernButton
                text="Stream Now"
                href="https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA"
                className="h-12 md:h-14 px-8 md:px-10 bg-[#27408b] text-white text-xs md:text-sm rounded-full font-bold uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(39,64,139,0.4)] hover:shadow-[0_12px_30px_rgba(39,64,139,0.6)] hover:bg-[#1a2c66] border-none"
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE: The Blob Container holding the LOGO */}
          {/* I have changed the layout here to center the logo cleanly in standard design practice for logos. */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative flex justify-center items-center h-[400px] md:h-[600px] w-full mt-8 lg:mt-0 px-10 md:px-20">
            {/* The offset yellow background blob for texture/depth */}
            <div 
              className="absolute w-[90%] h-[90%] bg-[#f5b900] z-0 translate-x-4 translate-y-4"
              style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
            />
            {/* Changed from an image mask of a person to a solid white masked container for standard, clean logo display. */}
            <div
              className="relative z-10 w-full h-full bg-white flex justify-center items-center p-8 md:p-16 shadow-xl"
              style={{ borderRadius: '50% 50% 40% 60% / 60% 40% 50% 50%' }}
            >
              {/* THE POTTER'S HOUSE LOGO - Placeholder. Replace with actual logo URL. */}
              <img 
                src="https://via.placeholder.com/400x150.png?text=Potters+House+Logo" 
                alt="The Potter's House Logo" 
                className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ANIMATED GLOBAL STATS SECTION */}
      <div className="w-full px-4 md:px-6 relative z-20 -mt-10 md:-mt-20 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
          className="bg-[#121519] border border-gray-800 rounded-2xl md:rounded-[3rem] p-8 md:p-14 relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-20 text-center">
            {/* 4000+ Churches */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                <ChurchCounter />+
              </h3>
              <p className="text-[#b4854b] text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mt-2">Churches</p>
            </motion.div>
            
            <div className="w-[1px] h-16 bg-white/20 hidden sm:block" />
            
            {/* 195 Countries */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                <CountryCounter />
              </h3>
              <p className="text-[#b4854b] text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase mt-2">Countries</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* LOWER CONTENT */}
      <div className="w-full text-center px-4 md:px-6 mt-12 md:mt-24">
        
        {/* SERVICES GRID */}
        <div className="mb-12 md:mb-24">
          <h3 className="text-gray-900 text-xl md:text-4xl font-black mb-8 md:mb-12 uppercase tracking-widest underline underline-offset-8">Weekly Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-[1400px] mx-auto">
            <div className="bg-[#FEFACD] rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-black mb-4 text-gray-900 border-l-8 border-black pl-4">Sunday</h4>
              <div className="space-y-2 text-gray-900 font-bold text-sm md:text-base">
                <p>9:00 AM — Bible Study</p>
                <p>10:00 AM — Morning Worship</p>
                <p>5:00 PM — Evening Worship</p>
              </div>
            </div>
            <div className="bg-[#F26749] rounded-2xl p-6 text-left text-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-black mb-4 border-l-8 border-white/40 pl-4">Wednesday</h4>
              <p className="font-bold text-sm md:text-base">7:00 PM — Weekly Worship</p>
            </div>
            <div className="bg-[#F5E6A3] rounded-2xl p-6 text-left text-gray-900 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-black mb-4 border-l-8 border-black/20 pl-4">Friday</h4>
              <p className="font-bold text-sm md:text-base">7:00 PM — One80 Content</p>
            </div>
          </div>
        </div>

        {/* CONNECT HUB */}
        <div className="w-full py-8 md:py-16 px-0">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
            {/* New To Church */}
            <div className="bg-[#ACC8A2] p-6 md:p-12 rounded-2xl md:rounded-[3rem] flex flex-col items-center justify-center">
              <h2 className="text-lg md:text-3xl font-black text-gray-900 uppercase mb-3 underline underline-offset-8 decoration-2 text-center">New to The Potter's House?</h2>
              <p className="text-[13px] md:text-lg font-medium text-gray-900/80 mb-6 max-w-md text-center leading-relaxed">Get in touch with us and let us know how we can help.</p>
              <div className="flex gap-3">
                <ModernButton text="Contact" onClick={() => setPage(Page.GetConnected)} className="bg-[#2872A1] hover:bg-[#1f5a80] text-white h-10 px-5 text-[11px] md:text-[13px] rounded-full font-bold uppercase border-none" />
                <ModernButton text="Visit" onClick={() => setPage(Page.PlanAVisit)} className="bg-[#2872A1] hover:bg-[#1f5a80] text-white h-10 px-5 text-[11px] md:text-[13px] rounded-full font-bold uppercase border-none" />
              </div>
            </div>

            {/* WhatsApp Card (Updated with Event Photo) */}
            <div className="bg-[#ffd3c0] p-6 md:p-12 rounded-2xl md:rounded-[3rem] flex flex-col items-center justify-center">
              <h2 className="text-lg md:text-3xl font-black text-gray-900 uppercase mb-3 underline underline-offset-8 decoration-2 text-center">Stay Connected</h2>
              <p className="text-[13px] md:text-lg font-medium text-gray-900/80 mb-6 max-w-md text-center leading-relaxed">
                Follow us on WhatsApp for daily devotions and updates. Click below to join.
              </p>
              
              {/* Event/Lifestyle Photo replacing the QR code */}
              <div className="w-[180px] h-[120px] md:w-[240px] md:h-[160px] mb-6 rounded-xl overflow-hidden shadow-md border-4 border-white">
                <img 
                  src="https://i.postimg.cc/HkmjMLy8/IMG-20260330-WA0039.jpg" 
                  alt="Church Event" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              
              <ModernButton text="Join Channel" href="https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G" className="bg-[#2872A1] hover:bg-[#1f5a80] text-white h-10 px-6 text-[11px] md:text-[13px] rounded-full font-bold uppercase border-none" />
            </div>
          </div>
        </div>

        {/* BROADCASTS SECTION */}
        <div className="w-full py-8 md:py-16 mb-12">
          <div className="max-w-[1400px] mx-auto px-0">
            <div className="bg-[#121519] border border-gray-800 rounded-2xl md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
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
