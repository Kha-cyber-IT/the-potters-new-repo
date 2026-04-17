import React from 'react';
import { Page, NavigationProps } from '../types';
import { ModernButton } from './ModernButton';
import { Mail, Phone, Globe, Map, Building2, RefreshCw, UserPlus, ArrowRight, ArrowRightLeft, Calendar, Users, Star, Compass, ShieldCheck } from 'lucide-react';

interface ActionPageProps extends NavigationProps {
  page: Page;
}

export const ActionPages: React.FC<ActionPageProps> = ({ page, setPage }) => {

  // Ministries redirects to AboutUs which has the full ministries section
  if (page === Page.Ministries) {
    return (
      <div className="animate-fade-in text-left pb-20 w-full pt-24 md:pt-32 bg-[#F0F7FF]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-0 pt-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 uppercase tracking-widest underline decoration-black underline-offset-8 font-heading">Our Ministries</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore the ways you and your family can grow and make an impact in your community and the world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <MiniCard title="Children's Ministry" desc="Kingdom Kids Programs — Sunday School every Sunday at 9:00 AM." onClick={() => setPage(Page.ChildrensMinistry)} />
            <MiniCard title="Choose to Change" desc="Faith-based addiction recovery ministry helping people transform their lives." onClick={() => setPage(Page.Recovery)} />
            <MiniCard title="Church Planting" desc="Raising and releasing disciples to pioneer new congregations across the globe." onClick={() => setPage(Page.ChurchPlanting)} />
            <MiniCard title="New Building" desc="Announcing the enlarged Eldorado Park Conference Center." onClick={() => setPage(Page.NewBuilding)} />
          </div>
        </div>
      </div>
    );
  }

  // PAGE 3: GET CONNECTED (Unified Deep Olive Section)
  if (page === Page.GetConnected) {
    return (
      <section className="w-full pt-24 md:pt-32 pb-24 min-h-screen animate-fade-in text-left text-white/90 bg-[#1A2517]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        
        {/* Top Half: Existing Contact Card */}
        <div className="relative w-full rounded-none md:rounded-2xl overflow-hidden shadow-none md:shadow-2xl bg-black border-none md:border md:border-white/10">
            <img src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1200" 
                 alt="Contact Background" 
                 className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/95"></div>
            
            <div className="relative z-10 p-4 py-8 md:p-16">
                <div className="mb-8 md:mb-12">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 uppercase tracking-widest font-heading">We'd like to hear from you.</h3>
                    <p className="text-base md:text-xl text-gray-300 font-light">Contact us by phone or email.</p>
                </div>
                
                <div className="space-y-6 md:space-y-8 mb-10 md:mb-16">
                    <a href="mailto:joburg@worldcfm.com" className="flex items-center gap-4 md:gap-6 group">
                        <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-blue-600 transition-colors flex-shrink-0"><Mail size={24} className="md:hidden text-blue-300 group-hover:text-white" /><Mail size={32} className="hidden md:block text-blue-300 group-hover:text-white" /></div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-xs md:text-sm font-bold text-blue-300 uppercase tracking-widest font-heading">Email Us</span>
                            <span className="text-base md:text-3xl font-bold break-all">joburg@worldcfm.com</span>
                        </div>
                    </a>
                    
                    <a href="tel:0825166638" className="flex items-center gap-4 md:gap-6 group">
                        <div className="p-3 md:p-4 bg-white/10 rounded-2xl group-hover:bg-green-600 transition-colors flex-shrink-0"><Phone size={24} className="md:hidden text-blue-300 group-hover:text-white" /><Phone size={32} className="hidden md:block text-blue-300 group-hover:text-white" /></div>
                        <div className="flex flex-col">
                            <span className="text-xs md:text-sm font-bold text-blue-300 uppercase tracking-widest font-heading">Call or WhatsApp</span>
                            <span className="text-base md:text-3xl font-bold">082-516-6638</span>
                        </div>
                    </a>
                </div>

                <div className="pt-10 border-t border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider font-heading">Subscribe for updates</h3>
                    <a href="https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G" target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center justify-center gap-4 bg-green-600 text-white font-bold w-full max-w-[280px] text-xl rounded-full hover:bg-green-500 active:scale-95 shadow-xl font-heading">
                        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Subscribe via WhatsApp
                    </a>
                </div>
            </div>
        </div>

        {/* Divider */}
        <div className="border-b border-white/10 mt-16 mb-16 max-w-4xl mx-auto"></div>

        <h3 id="global-reach" className="text-3xl md:text-5xl font-bold tracking-[0.3em] text-white text-center font-heading scroll-mt-28 underline decoration-black underline-offset-8">ELDOPARK LOCATION</h3>
        <p className="text-white/70 max-w-2xl mx-auto text-center mt-4 mb-12 leading-relaxed">
            Our home is here in Eldorado Park, Soweto.
        </p>

        <div className="w-full rounded-none md:rounded-[2.5rem] overflow-hidden border-none md:border md:border-white/10 shadow-none md:shadow-2xl" style={{ height: '520px' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d27.8833!3d-26.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a77f1e96719d%3A0x564720acc15ba9c5!2sThe%20Potter's%20House%20of%20Eldorado%20Park!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                className="w-full h-full"
                style={{ border: 0 }}
                title="Eldopark Location Map"
                loading="lazy"
            />
        </div>

      </div>
      </section>
    );
  }

  // PAGE 7: PLAN A VISIT (Who We Are color)
  if (page === Page.PlanAVisit) {
    return (
      <div className="w-full pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-gray-900 bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">

        <div className="relative w-full aspect-[2/1] rounded-none md:rounded-2xl overflow-hidden mb-12 shadow-none md:shadow-2xl border-none md:border md:border-gray-200">
            <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200" 
                 alt="Header" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong text-center uppercase tracking-widest font-heading">Join us for our weekly services</h3>
            </div>
        </div>
        
        <div className="text-center mb-12">
             <h3 className="inline-block text-gray-900 text-xl md:text-2xl font-bold uppercase tracking-widest font-heading underline decoration-black underline-offset-8">What You Can Expect</h3>
        </div>

        <div className="grid grid-cols-1 gap-12 text-center mb-20">
            <ExpectCard title="Truth" content="In a world of so much uncertainty and instability, Truth is the only solid foundation on which we can build our lives and make the best decisions for our future. Jesus Christ is that Truth and His Word is our solid foundation (Luke 6:47-49)." />
            <ExpectCard title="Hope" content="The very foundation of the gospel is Hope! That we were lost in sin and Jesus Christ came to deliver us from hopelessness and redeem us. As we approach God with our flawed nature, we can rest assured that there is hope for forgiveness and transformation." />
            <ExpectCard title="Community" content="Jesus Christ came to seek and save the lost, but He also came to build His church (Matt 16:17-18). The greatest example of what a church should be is found in the New Testament. Here we see that believers that worshiped together, fellowshipped together, and prayed for each other." />
        </div>
        
        <div className="mb-8 text-center">
            <h3 className="inline-flex items-center justify-center gap-4 text-gray-900 text-xl md:text-2xl font-bold uppercase tracking-widest font-heading underline decoration-black underline-offset-8">
                <span>Visit Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
            </h3>
        </div>

        <div className="text-center space-y-12">
                {/* Local Church Map */}
                <div className="relative w-full aspect-[2/1] rounded-none md:rounded-2xl overflow-hidden shadow-none md:shadow-2xl border-none md:border md:border-gray-200 group cursor-pointer" onClick={() => window.open('https://maps.app.goo.gl/JgER99H8Lh5eDmQ77', '_blank')}>
                    <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d27.8833!3d-26.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a77f1e96719d%3A0x564720acc15ba9c5!2sThe%20Potter's%20House%20of%20Eldorado%20Park!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                                            className="absolute inset-0 w-full h-full pointer-events-none"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Local Church Map"
                    />
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4 group-hover:bg-black/20 transition-colors">
                        <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong font-heading">Get Directions</h3>
                        <p className="text-white/70 mt-2 font-medium">Click to open in Google Maps</p>
                    </div>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
                <div><TimeCard day="Sunday" times={[
                    "Adult Bible Study & Children's Sunday School | 9:00 AM",
                    "Morning Worship Service | 10:00 AM",
                    "Evening Worship Service | 5:00 PM"
                ]} /></div>
                <div><TimeCard day="Wednesdays" times={["Midweek Worship Services | 7:00 PM"]} /></div>
                <div><TimeCard day="Fridays" times={["One80 Concept | 7:00 PM"]} /></div>
            </div>
            
            <div className="pt-10 border-t border-gray-300">
                 <h4 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-widest font-heading">Stream online anytime</h4>
                 <button
                    onClick={() => window.open('https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA', '_blank')}
                    className="btn media-glass-btn hover:scale-105 active:scale-95 font-bold tracking-[0.18em] md:tracking-[0.2em] uppercase w-full max-w-[150px] md:max-w-[280px] text-sm md:text-xl rounded-full flex items-center justify-center gap-2 md:gap-4 mx-auto font-heading"
                 >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.226-11.63-.226-15.234 0C.486 3.407 0 4.888 0 7.5v9c0 2.612.486 4.093 4.381 4.316 3.604.226 11.63.226 15.234 0 3.896-.223 4.381-1.704 4.381-4.316v-9c0-2.612-.486-4.093-4.381-4.316zM9 16.5v-9L16 12l-7 4.5z"/></svg>
                    Stream Now
                </button>
            </div>
        </div>
      </div>
      </div>
    );
  }

  // PAGE 8: CONFERENCE 2025 (Indigo/Blue Gradient)
  if (page === Page.Conference2025) {
    return (
      <div className="w-full pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-gray-900 bg-[#BAD797]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        <div className="text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4 uppercase tracking-tighter font-heading">Bible Conference 2025</h3>
            <p className="text-base md:text-xl text-gray-900/70 uppercase tracking-widest font-bold font-heading">New Announcements</p>
        </div>
        
        <div className="space-y-4">
            <AnnouncementGroup 
                title="International" 
                variant="cyan"
                icon={Globe}
                items={[
                    { title: "Into Tlokweng, Botswana", desc: "James & Chedu Kakoma – Out of Broadhurst, Botswana (Maloiso)" },
                    { title: "Into Palapye, Botswana", desc: "Oageng & Onneile Kefilwe – Out of Broadhurst, Botswana" },
                    { title: "Into Selibe Phikwe, Botswana", desc: "Gakegakwe & Tlotlo Kgojwa – Out of Broadhurst, Botswana" },
                    { title: "Into Maseru, Lesotho", desc: "Jason & Sebe Moodaley – Out of Port Elizabeth Main" },
                    { title: "Into Lilongwe, Malawi", desc: "Martin & Veronica Linyama – Out of Knysna, Western Cape" },
                    { title: "Into Gerald, Francistown, Botswana", desc: "Thuto & Tebogo Chingapane – Out of Francistown, Botswana" },
                    { title: "Into Tunis, Tunisia", desc: "Riagan & Zimkhitha Smith – Out of Eldorado Park & King Williams Town" }
                ]} 
            />

            <AnnouncementGroup 
                title="Domestic" 
                variant="emerald"
                icon={Map}
                items={[
                    { title: "Into Turffontein, JHB", desc: "Phumlani & Jennifer Nxala – Out of Eldorado Park" },
                    { title: "Into Gelvandale, PE", desc: "Thabang & Avela Mokwana – Out of Port Elizabeth Main" },
                    { title: "Into Schauderville, PE", desc: "Thulani & Dazree Atoli – Out of Port Elizabeth Main" },
                    { title: "Into Brackenfell, CT", desc: "Jacquin and Rowena Frazer – Out of Worcester, CT (1st plant!)" },
                    { title: "Into Franschoek, WC", desc: "Quentin & Prisca Ndala – Out of Stellenbosch (1st Plant!)" },
                    { title: "Into Braamfontein, JHB", desc: "Marc & Michelle Botha – Out of Melville" },
                    { title: "Groenheuwel Paarl, WC", desc: "Elrich and Elmaree Pietersen – Out of Paarl (Partnership with Melville)" },
                    { title: "Into Cambridge, EL", desc: "Mandilakhe and Lindokuhle Nohlaka – Out of King William's Town" },
                    { title: "Wells Estate, EC", desc: "Odwa and Babalwa Ngcolo – Out of Motherwell, PE" },
                    { title: "Into Langa, CT", desc: "Shadrack and Pamela Richards – Out of Gugulethu, CT" },
                    { title: "Protea Glen, JHB", desc: "Tshifhiwa & Faith Mulovhedzi – Out of Chiawelo" },
                    { title: "Into Mamre, CT", desc: "Douglas & Bianca Williams – Out of Atlantis (Partnership w/Mitchell's Plain)" },
                    { title: "Into Delft Main, CT", desc: "Dean & Claudiah Adams – Out of Mitchell's Plain" },
                    { title: "Bridgetown, Athlone", desc: "James & Amber Blankenberg – Out of Mitchell's Plain" },
                    { title: "New Woodlands, CT", desc: "Jerant & Carin Everts – Out of Mitchell's Plain" },
                    { title: "Into Edendale, PMB", desc: "TK and Nokthula Nciliba – Out of PMB Main" },
                    { title: "Into Grange, PMB", desc: "Nicolin and Candice Sawry – Out of PMB Main" }
                ]} 
            />

            <AnnouncementGroup 
                title="Nationalizing" 
                variant="amber"
                icon={Building2}
                items={[
                    { title: "Kimberley Church", desc: "Thabiso & Morobane Goralotse – Out of Galeshewe" },
                    { title: "Returning to Yuma, AZ", desc: "Naaman & Dawn Struck returning to Yuma, AZ to assist" }
                ]} 
            />
            
            <AnnouncementGroup 
                title="Changes" 
                variant="rose"
                icon={RefreshCw}
                items={[
                    { title: "Taking Grahamstown, EC", desc: "Apiwe & Siliziwe Nangu – Out of Port Elizabeth Main" },
                    { title: "Taking Quigney, EL", desc: "Theo and Livhu Kati – Out of Quigney" },
                    { title: "Taking Galeshewe", desc: "Keith & Vanessa Sayster – Out of Kimberley" },
                    { title: "Mitchell's Plain", desc: "New Assistants: Cheslyn & Janine Solomons" },
                    { title: "Taking Belhar, CT", desc: "Christopher & Raezza Zoutenberg – Out of Mitchell's Plain" }
                ]} 
            />

            <AnnouncementGroup 
                title="Eldorado Park Staff" 
                variant="purple"
                icon={UserPlus}
                items={[
                    { title: "Outreach Director", desc: "Nkosinathi & Kitso Nxala" },
                    { title: "Assistant Pastor", desc: "Edward & Vuyiswa Mphaga (Follow Up & Helps)" }
                ]} 
            />
            
            <AnnouncementGroup 
                title="Redirection" 
                variant="orange"
                icon={ArrowRightLeft}
                items={[
                    { title: "Port Elizabeth Main", desc: "Sakhumzi & Lusanda Msila" },
                    { title: "Eldorado Park", desc: "Lusayo & Carol Ngosi" },
                    { title: "Eldorado Park", desc: "Prince & Tumi Matladi on conference" }
                ]} 
            />
        </div>
      </div>
      </div>
    );
  }

  // PAGE 9: STORIES (Matcha Mist)
  if (page === Page.Stories) {
    return (
      <div className="w-full pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-gray-900 bg-[#C2D8C4]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">

        <div className="text-center mb-10">
            <h3 className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-emerald-950 mb-6 font-heading underline decoration-black underline-offset-8">
                Not The Same: Testimonies of Lives Changed
            </h3>
        </div>

        <div className="space-y-8 text-center px-4 max-w-3xl mx-auto mb-16">
            <p className="text-xl text-gray-800 leading-relaxed">Jesus isn't just about church, He's about changing lives. The Potter's House is a family of believers built out of lives that used to be broken, but have been changed by the power of Jesus Christ. We are Not the Same.</p>
            <p className="text-xl text-gray-800 leading-relaxed font-bold text-blue-300">Follow Not The Same to hear a new testimony each Wednesday.</p>
            <div className="flex justify-center mt-8">
                <button
                  onClick={() => window.open('https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc', '_blank')}
                  className="btn media-glass-btn hover:scale-105 active:scale-95 font-bold w-full max-w-[150px] md:max-w-[280px] text-sm md:text-xl rounded-full flex items-center justify-center gap-2 md:gap-4 font-heading uppercase tracking-[0.18em] md:tracking-widest mx-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.54 8.46 9.059 8.22 5.28 9.361c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.4-1.02 15.66 1.44.539.3.66 1.02.3 1.56-.3.539-1.02.659-1.56.3z"/></svg>
                    Play Now
                </button>
            </div>
        </div>

        {/* LOCAL IMPACT SECTION */}
        <div className="mb-20">
            <div className="relative w-full aspect-[2/1] rounded-none md:rounded-2xl overflow-hidden mb-8 shadow-none md:shadow-2xl border-none md:border md:border-white/10">
                <img src="https://i.postimg.cc/C5StGR00/ea998c-9e02deae6b1b45fb9bfaa3b321c24d2e-mv2.png" alt="Local Impact" className="absolute inset-0 w-full h-full object-cover brightness-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-3xl md:text-5xl font-black text-shadow-strong uppercase tracking-widest font-heading">Local Impact</h3>
                </div>
            </div>
            
            <div className="text-center px-4">
                <h4 className="text-3xl font-bold text-blue-300 mb-6 uppercase tracking-wider font-heading">Your life can make impact!</h4>
                
                <div className="bg-white/50 md:backdrop-blur-md p-4 px-4 md:p-8 rounded-none md:rounded-2xl shadow-none md:shadow-xl border-none md:border md:border-white/30 max-w-2xl mx-auto mb-10">
                    <p className="text-xl text-gray-900 font-medium">Every Saturday, we send groups into the city to share the gospel to people in apartment complexes, neighborhoods, and shopping centers.</p>
                </div>

                <div className="mb-10 bg-transparent px-0 py-0 border-none shadow-none md:bg-teal-600 md:inline-block md:px-10 md:py-3 md:rounded-xl md:shadow-lg md:border md:border-teal-500">
                    <p className="text-2xl font-black text-teal-800 md:text-white uppercase tracking-widest font-heading underline decoration-current underline-offset-4">Join us next Saturday at 10:00 AM!</p>
                </div>

            </div>
        </div>

        <div className="relative w-full aspect-[2/1] rounded-none md:rounded-2xl overflow-hidden mb-12 shadow-none md:shadow-2xl border-none md:border md:border-white/10">
            <img src="https://i.postimg.cc/7ZSqn28Z/1763582310556.jpg" alt="Bible Study" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong text-center uppercase tracking-widest font-heading">What we believe and why it matters.</h3>
            </div>
        </div>

        <div className="flex justify-center mb-12 px-4">
            <div className="bg-white/60 md:backdrop-blur-md rounded-none md:rounded-3xl p-4 px-4 md:p-8 shadow-none md:shadow-xl border-none md:border md:border-white/30 max-w-3xl text-center">
                <p className="text-lg leading-relaxed text-gray-900 font-medium">
                    In a world full of opinions and so much uncertainty, it is so important to be grounded in Truth. God's Word is the solid foundation on which we can build our lives and make the best decision for our future.
                </p>
            </div>
        </div>

        <div className="bg-transparent p-0 border-none shadow-none md:bg-white/50 md:backdrop-blur-md md:border md:border-white/30 md:shadow-xl md:p-8 md:p-12 md:rounded-3xl space-y-10">
            <div className="text-center">
                <h3 className="inline-block text-[10px] tracking-[0.3em] uppercase text-emerald-900 font-heading underline decoration-black underline-offset-8">Statement of Faith</h3>
            </div>

            <FaithDetail title="Salvation" content="Salvation is initiated by a prayer of faith in Jesus. Salvation is completed by God's grace. Salvation is maintained by a lifestyle of Biblical righteousness. Salvation is demonstrated by works. Salvation is lost when we sin and do not repent. Salvation is necessary to enter Heaven in eternity." />
            
            <FaithDetail title="Water Baptism" content="Water Baptism was exemplified by Christ. Water Baptism is not necessary to be saved, but is definitely an important Christian experience not to be ignored. Water Baptism is a public demonstration of faith in Jesus Christ. Water Baptism is executed in the name of the Father, the Son, and the Holy Ghost." />

            <FaithDetail title="Holy Spirit Baptism" content="Holy Spirit Baptism is evidenced by speaking in tongues. (Acts 2:4; Acts 10:45-46) Holy Spirit Baptism is an experience different and distinct from Salvation or Water Baptism. (Acts 1:5; Acts 10:44)" />

            <div>
                <h4 className="text-2xl font-bold text-teal-800 mb-4 uppercase tracking-wider font-heading">Our Responsibility</h4>
                <p className="mb-6 italic">As believers, there are four primary responsibilities we are called to uphold: Prayer, Outreach, Reading the Bible, and Fellowship.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="bg-transparent p-0 border-l-2 border-emerald-800/30 pl-4 md:border-none md:pl-0 md:bg-white md:shadow-sm md:rounded-2xl md:p-6 text-gray-900">
                        <h5 className="font-bold text-teal-800 font-heading text-lg">Daily Prayer:</h5>
                        <p>Seeking God in prayer is a fundamental necessity of maintaining our relationship with Him.</p>
                    </div>
                    <div className="bg-transparent p-0 border-l-2 border-emerald-800/30 pl-4 md:border-none md:pl-0 md:bg-white md:shadow-sm md:rounded-2xl md:p-6 text-gray-900">
                        <h5 className="font-bold text-teal-800 font-heading text-lg">Outreach:</h5>
                        <p>Sharing the Gospel of Jesus Christ with others.</p>
                    </div>
                    <div className="bg-transparent p-0 border-l-2 border-emerald-800/30 pl-4 md:border-none md:pl-0 md:bg-white md:shadow-sm md:rounded-2xl md:p-6 text-gray-900">
                        <h5 className="font-bold text-teal-800 font-heading text-lg">Reading The Bible:</h5>
                        <p>Feeding our spirit with the Word of God, and living thereby.</p>
                    </div>
                    <div className="bg-transparent p-0 border-l-2 border-emerald-800/30 pl-4 md:border-none md:pl-0 md:bg-white md:shadow-sm md:rounded-2xl md:p-6 text-gray-900">
                        <h5 className="font-bold text-teal-800 font-heading text-lg">Fellowship:</h5>
                        <p>Gathering together in a local assembly of believers for worship and admonition.</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
      </div>
    );
  }

  // PAGE 10: GIVE (Emerald/Teal Gradient)
  if (page === Page.Give) {
    return (
      <div className="w-full pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-white/90 bg-gradient-to-br from-emerald-800 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        
        <div className="relative w-full aspect-[2/1] rounded-none md:rounded-2xl overflow-hidden mb-12 shadow-none md:shadow-2xl border-none md:border md:border-white/10">
            <img src="https://i.postimg.cc/c4bLPpd2/1763563363621.jpg" alt="Giving" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-3xl md:text-6xl font-black text-shadow-strong text-center uppercase tracking-tighter font-heading">Faith. Generosity. Impact.</h3>
            </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-3xl font-bold text-blue-400 mb-8 uppercase tracking-widest font-heading">Your generosity is changing the world!</h4>
            <div className="bg-transparent p-0 md:glass-card-blue md:p-8 rounded-none md:rounded-3xl">
                <p className="text-xl leading-relaxed text-white">When we live our lives driven by obedience and generosity, we are able to reach our local community and the nations beyond</p>
            </div>
        </div>

        <div className="text-center mb-10">
            <span className="inline-block text-white font-bold text-xl uppercase tracking-widest font-heading underline decoration-black underline-offset-8">Electronic Giving</span>
        </div>

        <div className="flex justify-center mb-16">
             <img src="https://i.postimg.cc/9XL7r8hw/Giving-2022.jpg" alt="Banking Details" className="w-full max-w-3xl rounded-none md:rounded-3xl shadow-none md:shadow-2xl border-none md:border md:border-white/10" />
        </div>
        
        <div className="text-center mb-16 space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                 </svg>
                 <h4 className="text-2xl font-bold text-blue-400 uppercase tracking-widest font-heading">Mail your donation</h4>
            </div>
            <div className="font-bold text-2xl">
                <p>PO Box X1510</p>
                <p>Glenvista, 2058</p>
            </div>
        </div>
        
        <div className="flex justify-center">
            <button onClick={() => setPage(Page.ChurchPlanting)} className="btn bg-blue-600 text-white font-bold w-full max-w-[280px] text-xl rounded-full shadow-xl hover:bg-blue-500 active:scale-95 border-2 border-blue-400 uppercase tracking-widest font-heading">
                Church Planting
            </button>
        </div>
      </div>
      </div>
    );
  }

  // PAGE 11: EVENTS 2026 (Cyan/Blue Gradient)
  if (page === Page.Events2026) {
    return (
      <div className="w-full pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-gray-900 bg-[#BAD797]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
        <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4 uppercase tracking-tighter font-heading">South Africa Fellowship Dates 2026</h3>
            <p className="text-base md:text-xl text-gray-900/70 font-medium italic">(Eldorado Park yearly calendar at the bottom)</p>
        </div>

        <div className="space-y-12">
            {/* RALLIES SECTION */}
            <AnnouncementGroup 
                title="Area-Wide Pioneer Rallies 2026" 
                variant="teal"
                icon={Compass}
                cardBg="bg-[#D8D8B6]"
                items={[
                    { title: "Eastern Cape", desc: "January 30 & 31" },
                    { title: "Cape Town", desc: "March 27 & 28" },
                    { title: "Joburg/Gauteng", desc: "April 10 & 11" },
                    { title: "KZN", desc: "May 8 & 9" }
                ]} 
            />

            {/* DISCIPLESHIPS SECTION */}
            <div className="mb-12 md:mb-16">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="p-2.5 md:p-3 rounded-xl bg-black/10 border border-black/15 text-gray-900">
                        <Users size={20} className="md:w-6 md:h-6" />
                    </div>
                    <h4 className="text-lg md:text-3xl font-black uppercase tracking-wider md:tracking-widest text-gray-900 font-heading">Regional Discipleship Schedules 2026</h4>
                    <div className="h-px bg-black/10 flex-grow"></div>
                </div>

                <div className="space-y-4 md:space-y-10">
                    <ScheduleList region="JOHANNESBURG MEN’S DISCIPLESHIPS" dates={[
                        "April 6 - Jonathan Heimberg",
                        "May 11 - Vickash Juggai",
                        "June 8 - Randal Van Staden",
                        "July 6 - Peter Letsoalo",
                        "August 10 - Leebon Britde"
                    ]} />

                    <ScheduleList region="CAPE TOWN MEN’S DISCIPLESHIPS" dates={[
                        "April 13th - Randal Van Staden",
                        "May 11th - Jonathan Heimberg",
                        "June 15th - Mkhuseli Peters",
                        "July 13th - Leebon Britde",
                        "August 10th - Shawn Stellenberg"
                    ]} />

                    <ScheduleList region="EASTERN CAPE MEN’S DISCIPLESHIPS" dates={[
                        "April 27 - Leebon Britde",
                        "May 18 - Shawn Stellenberg",
                        "June 29 - Mzed Ngcawa",
                        "July 27 - Jonathan Heimberg",
                        "August 10 - Simphiwe Ngcumbe"
                    ]} />

                    <ScheduleList region="GEORGE MEN’S DISCIPLESHIPS" dates={[
                        "April 20 - Leebon Britde",
                        "May 25 - Thembalani Xandekana",
                        "June 22 - Jonathan Heimberg",
                        "July 20 - Xolani Mlozana",
                        "August 17 - Deren Ramthall"
                    ]} />

                    <ScheduleList region="KZN MEN'S DISCIPLESHIPS" dates={[
                        "April 20 - Jonathan Heimberg",
                        "May 18 - Vickash Juggai",
                        "June 22 - Shanin Jukskei",
                        "July 20 - Mzed Ngcawa",
                        "August 17 - Xolani Mlozana"
                    ]} />
                </div>
            </div>

            {/* OTHER EVENTS SECTION */}
            <AnnouncementGroup 
                title="National & International Events" 
                variant="teal"
                icon={Star}
                cardBg="bg-[#D8D8B6]"
                items={[
                    { title: "National Men's Rally", desc: "June 19 & 20" },
                    { title: "SA Bible Conference 2026", desc: "August 24 - August 28" },
                    { title: "SA Bible Conference 2027", desc: "August 30 - September 3" },
                    { title: "SA Bible Conference 2028", desc: "August 28 - September 1" }
                ]} 
            />
            
            <div className="pt-12 md:pt-20 border-t border-black/10 text-center">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-widest font-heading">Eldorado Park Church Calendar</h4>
                <div className="bg-transparent p-0 md:bg-[#D8D8B6] md:p-2 rounded-none md:rounded-3xl max-w-4xl mx-auto shadow-none md:shadow-2xl border-none md:border md:border-black/10 overflow-hidden">
                    <img src="https://i.postimg.cc/PrtsLf78/2026-Year-Schedule-SM.jpg" alt="Eldorado Park Church Calendar 2026" className="w-full h-auto rounded-none md:rounded-2xl" />
                </div>
            </div>
        </div>
      </div>
      </div>
    );
  }

  if (page === Page.ChildrensMinistry) {
    return (
      <div className="w-full min-h-screen animate-fade-in text-left text-white/90 bg-[#A85D5C] pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
            <div className="relative w-full aspect-video mb-12 rounded-none md:rounded-2xl overflow-hidden">
                <img src="https://i.postimg.cc/BtWp06Sx/1dfbf742442f400382671b5fe13afd99.jpg" alt="Children's Ministry" className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
                    <h3 className="text-white text-2xl md:text-4xl font-black text-shadow-strong uppercase tracking-widest font-heading text-center">Children's Ministry</h3>
                </div>
            </div>

            <div className="px-4 md:px-0 w-full max-w-3xl mx-auto text-center md:text-left">
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest font-heading mb-4">Our children's ministry has something for every child!</h3>
                <h4 className="text-xl font-bold text-white/80 mb-4 uppercase tracking-widest font-heading">Sunday School</h4>
                <p className="text-lg text-white/90 leading-relaxed">
                    Each Sunday morning at 9:00, while the adults are in Bible Study, Sunday School is provided for children. Classes are divided into different age groups to fit the learning levels of each child. Just ask an usher and they'll show you which class your child can thrive in.
                </p>
            </div>
        </div>
      </div>
    );
  }

  if (page === Page.Recovery) {
    return (
      <div className="w-full min-h-screen animate-fade-in text-left text-white/90 bg-[#A85D5C] pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">
            <div className="relative w-full aspect-video mb-12 rounded-none md:rounded-2xl overflow-hidden">
                <img src="https://i.postimg.cc/3J1Jz929/4432a4c385c44e609ac41982225b1669.jpg" alt="Recovery Header" className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
                    <h3 className="text-white text-2xl md:text-4xl font-black text-shadow-strong uppercase tracking-widest font-heading text-center">Choose To Change</h3>
                </div>
            </div>

            <div className="px-4 md:px-0 w-full max-w-3xl mx-auto text-center md:text-left">
                <h4 className="text-2xl font-bold text-white uppercase tracking-widest font-heading mb-4">Recovery Ministry Program</h4>
                <p className="text-xl font-bold text-white/80 mb-4 uppercase tracking-widest font-heading">It starts with a choice.</p>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                    Choose to Change is a faith-based non-profit organization that helps those struggling with addiction, ex-convicts and people in recovery of any type to change their lives and restore their families.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mb-8">
                    If you or someone you love needs help, <button onClick={() => setPage(Page.GetConnected)} className="text-white font-bold underline decoration-white/50 underline-offset-4 font-heading hover:text-white/80">contact us</button> today.
                </p>

            </div>
        </div>
      </div>
    );
  }

  return null;
};

const ExpectCard = ({ title, content }: { title: string; content: string }) => (
    <div className="max-w-2xl mx-auto">
        <h4 className="text-2xl font-bold text-blue-300 mb-3 uppercase tracking-wider font-heading">{title}</h4>
        <p className="text-lg leading-relaxed text-gray-700">
            {content}
        </p>
    </div>
);

const TimeCard = ({ day, times }: { day: string; times: string[] }) => (
    <div className="bg-white/60 md:backdrop-blur-sm border-none md:border md:border-gray-200 p-4 px-4 md:p-6 rounded-none md:rounded-2xl shadow-none md:shadow-sm">
        <h4 className="text-2xl font-bold text-gray-900 mb-4 uppercase font-heading">{day}</h4>
        <div className="space-y-3 text-lg text-gray-700">
            {times.map((t, i) => <p key={i}>{t}</p>)}
        </div>
    </div>
);

const ScheduleList = ({ region, dates }: { region: string; dates: string[] }) => (
    <div>
        {/* Mobile: plain text, edge-to-edge */}
        <div className="md:hidden py-2">
            <h5 className="text-xs font-bold text-gray-900 uppercase tracking-[0.2em] mb-2 px-0">{region}</h5>
            <ul className="divide-y divide-black/10">
                {dates.map((d, i) => (
                    <li key={i} className="flex items-center gap-3 py-2.5 text-gray-900/80">
                        <span className="text-[10px] font-black text-gray-900 w-4 shrink-0">{i + 1}</span>
                        <span className="text-sm">{d}</span>
                    </li>
                ))}
            </ul>
        </div>
        {/* Desktop: premium card */}
        <div className="hidden md:block bg-[#D8D8B6] border border-black/10 hover:border-black/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
            <h5 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] mb-4 font-heading">{region}</h5>
            <ul className="space-y-2.5">
                {dates.map((d, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-900/75 group-hover:text-gray-900 transition-colors">
                        <div className="w-6 h-6 rounded-lg bg-black/10 border border-black/15 flex items-center justify-center flex-shrink-0 text-gray-900 text-[10px] font-black">{i + 1}</div>
                        <span className="text-sm leading-snug">{d}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

type Variant = 'cyan' | 'emerald' | 'amber' | 'rose' | 'purple' | 'orange' | 'teal';

const AnnouncementGroup = ({
  title,
  items,
  variant = 'cyan',
  icon: Icon,
  cardBg = 'bg-[#D8D8B6]',
}: {
  title: string;
  items: { title: string; desc: string }[];
  variant?: Variant;
  icon?: any;
  cardBg?: string;
}) => {
  const accents: Record<Variant, { label: string; bar: string; badge: string; border: string }> = {
    cyan:    { label: 'text-gray-900', bar: 'bg-cyan-700', badge: 'bg-black/10 text-gray-900 border-black/15', border: 'hover:border-black/30' },
    emerald: { label: 'text-gray-900', bar: 'bg-emerald-700', badge: 'bg-black/10 text-gray-900 border-black/15', border: 'hover:border-black/30' },
    amber:   { label: 'text-gray-900', bar: 'bg-amber-700', badge: 'bg-black/10 text-gray-900 border-black/15', border: 'hover:border-black/30' },
    rose:    { label: 'text-gray-900', bar: 'bg-rose-700', badge: 'bg-black/10 text-gray-900 border-black/15', border: 'hover:border-black/30' },
    purple:  { label: 'text-gray-900', bar: 'bg-purple-700', badge: 'bg-black/10 text-gray-900 border-black/15', border: 'hover:border-black/30' },
    orange:  { label: 'text-gray-900', bar: 'bg-orange-700', badge: 'bg-black/10 text-gray-900 border-black/15', border: 'hover:border-black/30' },
    teal:    { label: 'text-gray-900', bar: 'bg-teal-700', badge: 'bg-black/10 text-gray-900 border-black/15', border: 'hover:border-black/30' },
  };

  const a = accents[variant];

  return (
    <div className="mb-10 md:mb-14">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4 md:mb-6 px-0">
        {Icon && (
          <div className={`p-2 rounded-xl bg-black/10 border border-black/10 ${a.label}`}>
            <Icon size={18} />
          </div>
        )}
        <h4 className={`text-base md:text-xl font-black uppercase tracking-widest ${a.label} font-heading`}>{title}</h4>
        <div className="h-px bg-black/10 flex-grow" />
      </div>

      {/* Mobile: plain text list, edge-to-edge, no card backgrounds */}
      <div className="md:hidden divide-y divide-black/10">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 py-3">
            <span className={`text-[10px] font-black w-5 shrink-0 mt-0.5 ${a.label}`}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <p className="text-sm font-bold text-gray-900 leading-snug">{item.title}</p>
              <p className="text-xs text-gray-900/65 mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: premium cards — clean with accent left-border */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative ${cardBg} border border-black/10 ${a.border} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group overflow-hidden`}
          >
            {/* Colored top accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] ${a.bar} opacity-40 group-hover:opacity-80 transition-opacity duration-300`} />
            <div className="flex items-start gap-3">
              <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-[10px] font-black border ${a.badge} shrink-0`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h5 className="text-sm font-bold text-gray-900 leading-snug mb-1 font-heading">{item.title}</h5>
                <p className="text-gray-900/65 text-xs leading-relaxed group-hover:text-gray-900/80 transition-colors">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



const FaithDetail = ({ title, content }: { title: string; content: string }) => (
  <div className="border-l-4 border-blue-400 pl-6">
    <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wider font-heading">{title}:</h4>
    <p className="text-lg leading-relaxed text-gray-700">{content}</p>
  </div>
);

const MiniCard = ({ title, desc, onClick }: { title: string; desc: string; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 text-left group"
  >
    <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wider font-heading group-hover:text-blue-600 transition-colors">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);
