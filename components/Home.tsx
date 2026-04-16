import React from 'react';
import { motion } from 'framer-motion';
import { Page, NavigationProps } from '../types';
import { ModernButton } from './ModernButton';

export const Home: React.FC<NavigationProps> = ({ setPage }) => {
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
    <div className="animate-fade-in bg-[#0D1B2A] min-h-screen w-full pb-20 overflow-x-hidden">
      
      {/* HERO SECTION: True Side-by-Side Layout */}
      <section className="hero relative min-h-screen flex items-center w-full pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(rgba(13,27,42,0.7), rgba(13,27,42,0.78)), url('https://i.postimg.cc/tTGQV7St/1776346333530.png')" }}
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
              variants={sentence}
              initial="hidden"
              animate="show"
              className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-black text-white leading-[1.1] tracking-tighter lg:max-w-4xl"
            >
              <motion.span variants={word} className="typing-hero-text">
                We are completely… Till transformation
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
          <h3 className="inline-block text-white text-xl sm:text-2xl md:text-4xl font-black mb-10 md:mb-12 uppercase tracking-[0.2em] md:tracking-[0.3em] font-heading underline decoration-white underline-offset-8">
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

        {/* TYMEBANK-STYLE FEATURE HIGHLIGHTS — desktop only */}
        <div className="w-full py-16 md:py-24 px-4 md:px-6 lg:px-0 hidden md:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } }
            }}
            className="max-w-[1400px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { bg: 'bg-gradient-to-br from-[#0E7490] to-[#155E75]', label: 'Events 2026', desc: 'Fellowship dates & regional schedules', page: Page.Events2026 },
              { bg: 'bg-gradient-to-br from-[#7E22CE] to-[#581C87]', label: 'Conference', desc: 'Bible Conference announcements', page: Page.Conference2025 },
              { bg: 'bg-gradient-to-br from-[#047857] to-[#064E3B]', label: 'Give', desc: 'Support the mission & building fund', page: Page.Give },
              { bg: 'bg-gradient-to-br from-[#B45309] to-[#78350F]', label: 'Plan a Visit', desc: 'Find us & plan your first visit', page: Page.PlanAVisit },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
                }}
                onClick={() => setPage(item.page)}
                className={`${item.bg} rounded-2xl md:rounded-3xl p-5 md:p-8 cursor-pointer group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-wider mb-2 font-heading">{item.label}</h4>
                <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
                <div className="mt-4 md:mt-6 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                  <span>Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </motion.div>
            ))}
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
            className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 md:gap-8 items-stretch"
          >
            {/* Left Side: New to the Church Bento Card */}
            {/* Mobile: edge-to-edge plain text section, Desktop: side-by-side card */}
            <motion.div
              variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 40 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
              }}
              className="flex flex-col text-center md:text-left bg-[#789A99] px-4 py-8 md:p-10 justify-center h-full rounded-none md:rounded-3xl"
            >
              <h2 className="text-lg md:text-4xl font-black text-gray-900 uppercase tracking-[0.1em] md:tracking-[0.2em] font-heading mb-2 md:mb-4">
                New to The Potter's House?
              </h2>
              <p className="text-sm md:text-xl font-medium text-gray-900/80 mb-4 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                Get in touch with a staff member and let us know how we can help.
              </p>

              <div className="flex flex-row justify-center md:justify-start gap-2.5 md:gap-4 w-full max-w-[330px] md:max-w-none mx-auto md:mx-0">
                  <ModernButton
                    text="Get Connected"
                    onClick={() => setPage(Page.GetConnected)}
                    variant="dark"
                  />
                  <ModernButton
                    text="Plan Visit"
                    onClick={() => setPage(Page.PlanAVisit)}
                    variant="dark"
                  />
              </div>
            </motion.div>

            {/* Mobile-only: QR WhatsApp section — separate edge-to-edge block */}
            <motion.div
              variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 40 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
              }}
              className="md:hidden flex flex-col items-center text-center bg-[#FFD2C2] px-4 py-8"
            >
              <h2 className="text-lg font-black text-gray-900 uppercase tracking-[0.1em] font-heading mb-2">
                Stay Connected
              </h2>
              <p className="text-sm font-medium text-gray-900/80 mb-4 leading-relaxed">
                Follow us on WhatsApp for daily devotions and updates.
              </p>
              <div className="bg-white p-3 rounded-2xl mb-4 inline-block shadow-sm">
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
              />
            </motion.div>

            {/* Right Side: Stay Connected Bento Card (Desktop only split, mobile merged above) */}
            <motion.div
              variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 40 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
              }}
              className="hidden md:flex flex-col items-center text-center bg-[#FFD2C2] p-8 md:p-10 justify-center h-full rounded-none md:rounded-3xl"
            >
              <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-[0.2em] font-heading mb-4">
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
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Broadcasts Section — clean on cream */}
        <div className="relative w-full flex flex-col justify-center py-20 mb-20 md:mb-40 border-none overflow-hidden bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(4,0,17,0.7), rgba(4,0,17,0.7)), url('https://i.postimg.cc/G2LTr3Fp/1776346065556.png')" }}>
            
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
