import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Page, NavigationProps } from '../types';
import { ModernButton } from './ModernButton';

export const Home: React.FC<NavigationProps> = ({ setPage }) => {
  const carouselImages = [
    'https://i.postimg.cc/ZYc6mcbJ/IMG-20260413-WA0002.jpg',
    'https://i.postimg.cc/qMFhBDWj/IMG-20260407-WA0024.jpg',
    'https://i.postimg.cc/L8ZqJBp2/IMG-20260403-WA0001.jpg',
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
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  return (
    <div className="animate-fade-in bg-[#0D1B2A] min-h-screen w-full pb-0 overflow-x-hidden">
      
      {/* HERO SECTION: True Side-by-Side Layout */}
      <section className="hero relative min-h-screen flex items-center w-full pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(13,27,42,0.7), rgba(13,27,42,0.78)), url('https://i.postimg.cc/tTGQV7St/1776346333530.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
          }}
        />

        {/* Main Grid Container */}
        <div className="w-full px-4 md:px-6 lg:px-0 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-center">

          {/* LEFT SIDE: Flowing Text & Buttons */}
          <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 text-blue-500">
                <span className="h-[1px] w-12 md:w-16 bg-blue-500"></span>
                <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] uppercase">
                  Faith & Transformation
                </span>
              </div>
            </motion.div>

            {/* The Modern Flowing Heading */}
            <motion.h1
              variants={isMobile ? undefined : sentence}
              initial={isMobile ? false : "hidden"}
              animate={isMobile ? undefined : "show"}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.75rem] font-black text-white leading-[1.12] tracking-tighter lg:max-w-4xl"
            >
              <motion.span variants={isMobile ? undefined : word} className="typing-hero-text">
                Our mission is simple. To bring the Truth of Jesus Christ to the world!
              </motion.span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-white/85 leading-relaxed font-normal lg:max-w-2xl"
            >
              We are completely centered around Jesus Christ. <span className="text-blue-500 font-bold italic">His love. His power. His message.</span> This is the single greatest hope we have of true life and true transformation!
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-row gap-2.5 md:gap-4 justify-start items-stretch w-full max-w-[330px] md:max-w-none"
            >
              <button
                onClick={() => setPage(Page.AboutUs)}
                className="btn flex-1 md:flex-none w-full max-w-none md:max-w-[280px] justify-center bg-blue-600 text-white font-black text-sm md:text-xl rounded-full hover:bg-blue-500 hover:scale-105 active:scale-95 uppercase tracking-[0.18em] md:tracking-widest font-heading flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Who We Are
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <ModernButton
                text="Stream Now"
                href="https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA"
                variant="purple"
                className="flex-1 md:flex-none max-w-none md:max-w-[280px] hover:scale-105 active:scale-95 font-bold uppercase rounded-full font-heading"
              />
            </motion.div>
          </div>

          {/* RIGHT SIDE: The Cards (Stats & Banner) */}
          <div className="flex flex-col gap-8 w-full justify-self-end mt-12 lg:mt-0">
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-[#121519] border border-white/10 rounded-2xl md:rounded-[3rem] p-6 px-4 md:p-14 relative overflow-hidden shadow-md md:shadow-2xl w-full"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-45 contrast-125 saturate-125"
                style={{ backgroundImage: "url('https://i.postimg.cc/ZnFQpcTf/502a78-db9fe996869248f6800cc779e84bf461-mv2.jpg')" }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-12 md:gap-20 text-center">
                <div>
                  <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">12K+</h3>
                  <p className="text-blue-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">Lives Changed</p>
                </div>
                <div className="w-[1px] h-20 bg-white/10 hidden sm:block" />
                <div className="h-[1px] w-20 bg-white/10 sm:hidden" />
                <div>
                  <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">45+</h3>
                  <p className="text-blue-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">Global Missions</p>
                </div>
              </div>
            </motion.div>

            {/* Enlarging Banner Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div
                onClick={() => setPage(Page.NewBuilding)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setPage(Page.NewBuilding)}
                className="block relative rounded-2xl md:rounded-[3rem] overflow-hidden border border-white/10 cursor-pointer h-[200px] md:h-[300px] shadow-md md:shadow-2xl group w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] group-hover:scale-110 contrast-125 saturate-125"
                  style={{ backgroundImage: "url('https://i.postimg.cc/MGM1hpjw/ea998c-0f1c76517790470ea0fd9d89718a5005-mv2.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050f07] via-[#050f07]/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 md:p-12 text-center z-10">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 uppercase tracking-tighter">We're Enlarging!</h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase group-hover:text-blue-400 transition-colors">Click here to see what's next</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* LOWER SECTION: Classic Silver & White Theme */}
      <div className="w-full text-center px-4 md:px-6 lg:px-0 mt-20 md:mt-40">
        
        <div className="mb-24 md:mb-48">
          {/* Silver Badge for Church Services: Adjusted for mobile */}
          <h3 className="inline-block text-white text-xl sm:text-2xl md:text-4xl font-black mb-10 md:mb-12 uppercase tracking-[0.2em] md:tracking-[0.3em] font-heading underline decoration-black underline-offset-8">
              Weekly Services
          </h3>
          
          {/* Bento Grid layout for Services */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1400px] mx-auto text-left"
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
          >
              {/* SUNDAY SERVICES */}
              <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 40 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
                }}
                className="w-full bg-[#FEFACD] rounded-none md:rounded-3xl p-4 px-4 md:p-6"
              >
                  <h4 className="text-2xl md:text-3xl font-black mb-6 text-gray-900"> 
                    <span className="border-l-[6px] md:border-l-[8px] border-[#0B0D0F] pl-4 md:pl-6">Sunday</span>
                  </h4>
                  
                  <div className="flex flex-col space-y-4 md:space-y-3 pl-2 md:pl-4">
                      <div className="flex flex-col md:flex-row md:items-center text-gray-900">
                          <span className="font-bold text-lg md:text-xl w-32">9:00 AM</span>
                          <span className="hidden md:inline mx-4">—</span>
                          <span className="text-xl md:text-2xl font-medium mt-1 md:mt-0">Bible Study</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center text-gray-900">
                          <span className="font-bold text-lg md:text-xl w-32">10:00 AM</span>
                          <span className="hidden md:inline mx-4">—</span>
                          <span className="text-xl md:text-2xl font-medium mt-1 md:mt-0">Morning Worship</span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center text-gray-900">
                          <span className="font-bold text-lg md:text-xl w-32">5:00 PM</span>
                          <span className="hidden md:inline mx-4">—</span>
                          <span className="text-xl md:text-2xl font-medium mt-1 md:mt-0">Evening Worship</span>
                      </div>
                  </div>
              </motion.div>

              {/* WEDNESDAY & FRIDAY SERVICES */}
              <div className="contents">
                  {/* WEDNESDAY */}
                  <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 40 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
                    }}
                                      className="w-full bg-[#2C3E50] md:backdrop-blur-md border-none md:border md:border-white/10 rounded-none md:rounded-3xl p-4 px-4 md:p-6 flex-1"
                                    >
                                        <h4 className="text-2xl md:text-3xl font-black mb-6 text-white"> 
                                          <span className="border-l-[6px] md:border-l-[8px] border-slate-400 pl-4 md:pl-6">Wednesday</span>
                                        </h4>
                      
                                        <div className="flex flex-col pl-2 md:pl-8">
                                            <div className="flex flex-col md:flex-row md:items-center text-white">
                              <span className="font-bold text-lg md:text-xl w-32">7:00 PM</span>
                              <span className="hidden md:inline mx-4">—</span>
                              <span className="text-xl md:text-2xl font-medium mt-1 md:mt-0">Weekly Worship</span>
                          </div>
                      </div>
                  </motion.div>

                  {/* FRIDAY */}
                  <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 40 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
                    }}
                                      className="w-full bg-[#2C3E50] md:backdrop-blur-md border-none md:border md:border-white/10 rounded-none md:rounded-3xl p-4 px-4 md:p-6 flex-1"
                                    >
                                        <h4 className="text-2xl md:text-3xl font-black mb-6 text-white"> 
                                          <span className="border-l-[6px] md:border-l-[8px] border-slate-400 pl-4 md:pl-6">Friday</span>
                                        </h4>
                      
                                        <div className="flex flex-col pl-2 md:pl-8">
                                            <div className="flex flex-col md:flex-row md:items-center text-white">
                              <span className="font-bold text-lg md:text-xl w-32">7:00 PM</span>
                              <span className="hidden md:inline mx-4">—</span>
                              <span className="text-xl md:text-2xl font-medium mt-1 md:mt-0">One80 Content</span>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </motion.div>
        </div>

        {/* Desktop-only home carousel */}
        <div className="w-full py-16 md:py-24 px-4 md:px-6 lg:px-0 hidden md:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } }
            }}
            className="max-w-[1400px] mx-auto"
          >
            <motion.div
              variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
              }}
              className="relative w-full max-w-[1200px] mx-auto aspect-[16/8] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B0D0F]"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              {carouselImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Church carousel ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-[1400ms] ease-in-out ${activeSlide === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between bg-gradient-to-t from-black/65 to-transparent">
                <div className="flex items-center gap-2">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Show slide ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === i ? 'w-8 bg-white' : 'w-2.5 bg-white/50'}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setActiveSlide((activeSlide - 1 + carouselImages.length) % carouselImages.length)} className="btn h-10 min-h-10 w-10 p-0 rounded-full bg-white/85 text-gray-900 font-black" aria-label="Previous slide">‹</button>
                  <button onClick={() => setIsCarouselPaused(!isCarouselPaused)} className="btn h-10 min-h-10 px-5 rounded-full bg-white/85 text-gray-900 text-xs font-black uppercase tracking-widest">{isCarouselPaused ? 'Play' : 'Pause'}</button>
                  <button onClick={() => setActiveSlide((activeSlide + 1) % carouselImages.length)} className="btn h-10 min-h-10 w-10 p-0 rounded-full bg-white/85 text-gray-900 font-black" aria-label="Next slide">›</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* UNIFIED CONNECT HUB (Bento Grid) */}
        <div className="w-full py-16 md:py-20 px-0 md:px-6 lg:px-0 -mx-4 md:mx-0">
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
            className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch"
          >
            {/* Left Side: New to the Church Bento Card */}
            {/* Mobile: edge-to-edge plain text section, Desktop: side-by-side card */}
            <motion.div
              variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 40 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
              }}
              className="flex flex-col text-center bg-[#789A99] px-4 py-8 md:p-10 justify-center h-full rounded-2xl md:rounded-3xl w-[calc(100%-2rem)] max-w-[330px] md:max-w-none md:w-auto mx-auto md:mx-0 min-h-[220px] md:min-h-0"
            >
              <h2 className="text-lg md:text-4xl font-black text-gray-900 uppercase tracking-[0.1em] md:tracking-[0.2em] font-heading mb-2 md:mb-4 underline decoration-black underline-offset-8">
                New to The Potter's House?
              </h2>
              <p className="text-sm md:text-xl font-medium text-gray-900/80 mb-4 md:mb-10 leading-relaxed max-w-lg mx-auto">
                Get in touch with a staff member and let us know how we can help.
              </p>

              <div className="flex flex-row justify-center gap-2.5 md:gap-4 w-full max-w-[330px] md:max-w-none mx-auto">
                  <ModernButton
                    text="Get Connected"
                    onClick={() => setPage(Page.GetConnected)}
                    variant="dark"
                    className="bg-[#1C3935] hover:bg-[#142b28]"
                  />
                  <ModernButton
                    text="Plan Visit"
                    onClick={() => setPage(Page.PlanAVisit)}
                    variant="dark"
                    className="bg-[#1C3935] hover:bg-[#142b28]"
                  />
              </div>
            </motion.div>

            {/* Mobile-only: QR WhatsApp section — separate edge-to-edge block */}
            <motion.div
              variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 40 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
              }}
              className="md:hidden flex flex-col items-center text-center bg-[#789A99] px-4 py-8 rounded-2xl w-[calc(100%-2rem)] max-w-[330px] mx-auto min-h-[220px]"
            >
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-[0.1em] font-heading mb-2 underline decoration-black underline-offset-8">
                Stay Connected
              </h2>
              <p className="text-sm font-medium text-gray-900/80 mb-4 leading-relaxed">
                Follow us on WhatsApp for daily devotions and updates.
              </p>
              <div className="bg-transparent p-0 rounded-none mb-4 inline-block shadow-none">
                <div className="w-28 h-28 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G"
                    alt="WhatsApp Channel QR Code"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <ModernButton
                text="Join Channel"
                href="https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G"
                variant="dark"
                className="bg-[#1C3935] hover:bg-[#142b28]"
              />
            </motion.div>

            {/* Right Side: Stay Connected Bento Card (Desktop only split, mobile merged above) */}
            <motion.div
              variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 40 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
              }}
              className="hidden md:flex flex-col items-center text-center bg-[#789A99] p-8 md:p-10 justify-center h-full rounded-none md:rounded-3xl"
            >
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-[0.2em] font-heading mb-4 underline decoration-black underline-offset-8">
                Stay Connected
              </h2>
              <p className="text-lg md:text-xl font-medium text-gray-900/80 mb-10 leading-relaxed max-w-md">
                Follow The Potter's House of Eldorado Park on WhatsApp for daily devotions and updates.
              </p>

              <div className="bg-white p-4 rounded-2xl mb-10 inline-block shadow-sm">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G"
                    alt="WhatsApp Channel QR Code"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <ModernButton
                text="Join Channel"
                href="https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G"
                variant="dark"
                className="bg-[#1C3935] hover:bg-[#142b28]"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Broadcasts Section — clean on cream */}
        <div className="relative w-full flex flex-col justify-center py-20 mb-0 border-none overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(4,0,17,0.7), rgba(4,0,17,0.7)), url('https://i.postimg.cc/G2LTr3Fp/1776346065556.png')" }}>
            
            {/* Scroll Revealed Content */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                className="relative z-10 px-0 w-full max-w-4xl mx-auto text-center"
            >
                <div className="flex flex-col items-center justify-center gap-6 mb-12">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-24 md:w-24 text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.226-11.63-.226-15.234 0C.486 3.407 0 4.888 0 7.5v9c0 2.612.486 4.093 4.381 4.316 3.604.226 11.63.226 15.234 0 3.896-.223 4.381-1.704 4.381-4.316v-9c0-2.612-.486-4.093-4.381-4.316zM9 16.5v-9L16 12l-7 4.5z"/></svg>
                    </motion.div>

                    <motion.h3
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
                        }}
                        className="text-3xl md:text-4xl font-black text-white uppercase tracking-[0.3em] font-heading drop-shadow-md"
                    >
                        Broadcasts
                    </motion.h3>
                </div>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
                    }}
                    className="text-lg md:text-xl font-medium text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
                >
                  Missed Church Services? Watch our archived broadcasts!
                </motion.p>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
                    }}
                    className="flex justify-center w-full"
                >
                    <ModernButton
                      text="Watch Now"
                      href="https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA"
                      variant="purple"
                      className="hover:scale-105 active:scale-95 font-bold uppercase rounded-full font-heading"
                    />
                </motion.div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};
