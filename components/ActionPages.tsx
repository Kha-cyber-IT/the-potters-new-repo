import React from 'react';
import { Page, NavigationProps } from '../types';
import { ModernButton } from './ModernButton';
import { ArrowLeft, Mail, Phone, Globe, Map, Building2, RefreshCw, UserPlus, ArrowRight, ArrowRightLeft, Calendar, Users, Star, Compass, ShieldCheck } from 'lucide-react';

interface ActionPageProps extends NavigationProps {
  page: Page;
}

export const ActionPages: React.FC<ActionPageProps> = ({ page, setPage }) => {
  const BackButton = ({ label, target }: { label: string; target: Page }) => (
    <button onClick={() => setPage(target)} className="mb-8 pt-4 text-blue-300 hover:text-blue-200 transition-colors flex items-center gap-2">
      <ArrowLeft size={20} /> {label}
    </button>
  );

  // PAGE 3: GET CONNECTED (Unified Deep Olive Section)
  if (page === Page.GetConnected) {
    return (
      <section className="w-full pt-24 md:pt-32 pb-24 min-h-screen animate-fade-in text-left text-white/90 bg-[#1A2517]">
        <div className="max-w-7xl mx-auto px-0">
        <BackButton label="Back to Mission" target={Page.Home} />
        
        {/* Top Half: Existing Contact Card */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
            <img src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1200" 
                 alt="Contact Background" 
                 className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/95"></div>
            
            <div className="relative z-10 p-8 md:p-16">
                <div className="mb-12">
                    <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-widest font-heading">We'd like to hear from you.</h3>
                    <p className="text-xl text-gray-300 font-light">Contact us by phone or email.</p>
                </div>
                
                <div className="space-y-8 mb-16">
                    <a href="mailto:joburg@worldcfm.com" className="flex items-center gap-6 group">
                        <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-blue-600 transition-colors"><Mail size={32} className="text-blue-300 group-hover:text-white" /></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-blue-300 uppercase tracking-widest font-heading">Email Us</span>
                            <span className="text-xl md:text-3xl font-bold break-all">joburg@worldcfm.com</span>
                        </div>
                    </a>
                    
                    <a href="tel:0825166638" className="flex items-center gap-6 group">
                        <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-green-600 transition-colors"><Phone size={32} className="text-blue-300 group-hover:text-white" /></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-blue-300 uppercase tracking-widest font-heading">Call or WhatsApp</span>
                            <span className="text-xl md:text-3xl font-bold">082-516-6638</span>
                        </div>
                    </a>
                </div>

                <div className="pt-10 border-t border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider font-heading">Subscribe for updates</h3>
                    <a href="https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G" target="_blank" className="inline-flex items-center justify-center gap-4 bg-green-600 text-white font-bold py-4 px-10 rounded-2xl hover:bg-green-500 transition-all active:scale-95 shadow-xl font-heading">
                        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Subscribe via WhatsApp
                    </a>
                </div>
            </div>
        </div>

        {/* Divider */}
        <div className="border-b border-white/10 mt-16 mb-16 max-w-4xl mx-auto"></div>

        {/* Bottom Half: Global Map Section */}
        <h3 id="global-reach" className="text-3xl md:text-5xl font-bold tracking-[0.3em] text-white text-center font-heading scroll-mt-28">LOCAL ROOTS. GLOBAL REACH.</h3>
        <p className="text-white/70 max-w-2xl mx-auto text-center mt-4 mb-12 leading-relaxed">
            While our home is here in Soweto, our family spans the globe. The Potter's House is a worldwide fellowship of over 3,000 churches across 130 nations. Wherever you go, you can always find family.
        </p>

        <div className="aspect-video rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden flex flex-col items-center justify-end p-8">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Global Hub Pins */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full">
                <div className="w-full h-full bg-white rounded-full animate-ping"></div>
            </div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full">
                <div className="w-full h-full bg-white rounded-full animate-ping"></div>
            </div>
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-white rounded-full">
                <div className="w-full h-full bg-white rounded-full animate-ping"></div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full">
                <div className="w-full h-full bg-white rounded-full animate-ping"></div>
            </div>
            <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-white rounded-full">
                <div className="w-full h-full bg-white rounded-full animate-ping"></div>
            </div>

            {/* Eldorado Park Highlight */}
            <div className="absolute top-[40%] right-[15%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl z-10 hidden md:block">
                <p className="text-white font-bold text-sm">The Potter's House of</p>
                <p className="text-blue-300 font-bold text-lg">Eldorado Park, Soweto</p>
            </div>

            <ModernButton text="EXPLORE GLOBAL MAP" href="https://www.cfmmap.org/" variant="ghost" className="relative z-10 mt-auto" />
        </div>

      </div>
      </section>
    );
  }

  // PAGE 7: PLAN A VISIT (Stone Gradient)
  if (page === Page.PlanAVisit) {
    return (
      <div className="w-full pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-white/90 bg-gradient-to-br from-stone-700 to-stone-900">
        <div className="max-w-7xl mx-auto px-0">
        <BackButton label="Back to Mission" target={Page.Home} />

        <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200" 
                 alt="Header" 
                 className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong text-center uppercase tracking-widest font-heading">Join us for our weekly services</h3>
            </div>
        </div>
        
        <div className="text-center mb-12">
             <h3 className="inline-block bg-teal-600 text-white text-xl md:text-2xl font-bold py-3 px-10 rounded-full shadow-lg border border-white/20 uppercase tracking-widest font-heading">What You Can Expect</h3>
        </div>

        <div className="grid grid-cols-1 gap-12 text-center mb-20">
            <ExpectCard title="Truth" content="In a world of so much uncertainty and instability, Truth is the only solid foundation on which we can build our lives and make the best decisions for our future. Jesus Christ is that Truth and His Word is our solid foundation (Luke 6:47-49)." />
            <ExpectCard title="Hope" content="The very foundation of the gospel is Hope! That we were lost in sin and Jesus Christ came to deliver us from hopelessness and redeem us. As we approach God with our flawed nature, we can rest assured that there is hope for forgiveness and transformation." />
            <ExpectCard title="Community" content="Jesus Christ came to seek and save the lost, but He also came to build His church (Matt 16:17-18). The greatest example of what a church should be is found in the New Testament. Here we see that believers that worshiped together, fellowshipped together, and prayed for each other." />
        </div>
        
        <div className="mb-8 text-center">
            <h3 className="inline-flex items-center justify-center gap-4 bg-white text-black text-xl md:text-2xl font-bold py-4 px-10 rounded-full shadow-lg border border-white/20 uppercase tracking-widest font-heading">
                <span>Visit Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
            </h3>
        </div>

        <div className="text-center space-y-12">
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer" onClick={() => window.open('https://maps.app.goo.gl/Q9CmxXAhxE1ypid59', '_blank')}>
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4">
                    <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong font-heading">Get Directions</h3>
                    <p className="text-gray-800 mt-2 font-medium">Click to open in Google Maps</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 text-center">
                <div><TimeCard day="Sunday" times={[
                    "Adult Bible Study & Children's Sunday School | 9:00 AM",
                    "Morning Worship Service | 10:00 AM",
                    "Evening Worship Service | 5:00 PM"
                ]} /></div>
                <div><TimeCard day="Wednesdays" times={["Midweek Worship Services | 7:00 PM"]} /></div>
                <div><TimeCard day="Fridays" times={["One80 Concept | 7:00 PM"]} /></div>
            </div>
            
            <div className="pt-10 border-t border-white/10">
                 <h4 className="text-2xl font-bold text-blue-300 mb-8 uppercase tracking-widest font-heading">Stream online anytime</h4>
                 <button
                    onClick={() => window.open('https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA', '_blank')}
                    className="bg-[#000000] border-2 border-[#9333EA] shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_35px_rgba(147,51,234,0.8)] hover:scale-105 transition-all duration-300 text-white font-bold tracking-[0.2em] uppercase py-4 px-12 rounded-full flex items-center justify-center gap-4 mx-auto font-heading"
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
      <div className="w-full pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-white/90 bg-gradient-to-br from-indigo-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-0">
        <BackButton label="Back to Mission" target={Page.Home} />
        <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-blue-300 mb-4 uppercase tracking-tighter font-heading">Bible Conference 2025</h3>
            <p className="text-xl text-white/60 uppercase tracking-widest font-bold font-heading">New Announcements</p>
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
        <div className="max-w-7xl mx-auto px-0">
        <BackButton label="Back to Mission" target={Page.Home} />

        <div className="text-center mb-10">
            <h3 className="inline-block px-4 py-1.5 border border-emerald-900/30 rounded-full text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-emerald-950 mb-6 font-heading">
                Not The Same: Testimonies of Lives Changed
            </h3>
        </div>

        <div className="space-y-8 text-center px-4 max-w-3xl mx-auto mb-16">
            <p className="text-xl text-gray-800 leading-relaxed">Jesus isn't just about church, He's about changing lives. The Potter's House is a family of believers built out of lives that used to be broken, but have been changed by the power of Jesus Christ. We are Not the Same.</p>
            <p className="text-xl text-gray-800 leading-relaxed font-bold text-blue-300">Follow Not The Same to hear a new testimony each Wednesday.</p>
            <div className="flex justify-center mt-8">
                <button
                  onClick={() => window.open('https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc', '_blank')}
                  className="bg-[#000000] border-2 border-[#9333EA] shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_35px_rgba(147,51,234,0.8)] hover:scale-105 transition-all duration-300 text-white font-bold tracking-[0.2em] uppercase w-full justify-center md:w-auto py-4 px-6 md:px-10 rounded-full flex items-center gap-4 font-heading text-sm md:text-base"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.54 8.46 9.059 8.22 5.28 9.361c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.4-1.02 15.66 1.44.539.3.66 1.02.3 1.56-.3.539-1.02.659-1.56.3z"/></svg>
                    Play on Spotify
                </button>
            </div>
        </div>

        {/* LOCAL IMPACT SECTION */}
        <div className="mb-20">
            <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/10">
                <img src="https://i.postimg.cc/C5StGR00/ea998c-9e02deae6b1b45fb9bfaa3b321c24d2e-mv2.png" alt="Local Impact" className="absolute inset-0 w-full h-full object-cover brightness-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-3xl md:text-5xl font-black text-shadow-strong uppercase tracking-widest font-heading">Local Impact</h3>
                </div>
            </div>
            
            <div className="text-center px-4">
                <h4 className="text-3xl font-bold text-blue-300 mb-6 uppercase tracking-wider font-heading">Your life can make impact!</h4>
                
                <div className="bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/30 max-w-2xl mx-auto mb-10">
                    <p className="text-xl text-gray-900 font-medium">Every Saturday, we send groups into the city to share the gospel to people in apartment complexes, neighborhoods, and shopping centers.</p>
                </div>

                <div className="mb-10 bg-transparent px-0 py-0 border-none shadow-none md:bg-teal-600 md:inline-block md:px-10 md:py-3 md:rounded-xl md:shadow-lg md:border md:border-teal-500">
                    <p className="text-2xl font-black text-teal-800 md:text-white uppercase tracking-widest font-heading">Join us next Saturday at 10:00 AM!</p>
                </div>

            </div>
        </div>

        <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <img src="https://i.postimg.cc/7ZSqn28Z/1763582310556.jpg" alt="Bible Study" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong text-center uppercase tracking-widest font-heading">What we believe and why it matters.</h3>
            </div>
        </div>

        <div className="flex justify-center mb-12 px-4">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 max-w-3xl text-center">
                <p className="text-lg leading-relaxed text-gray-900 font-medium">
                    In a world full of opinions and so much uncertainty, it is so important to be grounded in Truth. God's Word is the solid foundation on which we can build our lives and make the best decision for our future.
                </p>
            </div>
        </div>

        <div className="bg-transparent p-0 border-none shadow-none md:bg-white/50 md:backdrop-blur-md md:border md:border-white/30 md:shadow-xl md:p-8 md:p-12 md:rounded-3xl space-y-10">
            <div className="text-center">
                <h3 className="inline-block px-4 py-1 border border-emerald-900/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-emerald-900 font-heading">Statement of Faith</h3>
            </div>

            <FaithDetail title="Salvation" content="Salvation is initiated by a prayer of faith in Jesus. Salvation is completed by God's grace. Salvation is maintained by a lifestyle of Biblical righteousness. Salvation is demonstrated by works. Salvation is lost when we sin and do not repent. Salvation is necessary to enter Heaven in eternity." />
            
            <FaithDetail title="Water Baptism" content="Water Baptism was exemplified by Christ. Water Baptism is not necessary to be saved, but is definitely an important Christian experience not to be ignored. Water Baptism is a public demonstration of faith in Jesus Christ. Water Baptism is executed in the name of the Father, the Son, and the Holy Ghost." />

            <FaithDetail title="Holy Spirit Baptism" content="Holy Spirit Baptism is evidenced by speaking in tongues. (Acts 2:4; Acts 10:45-46) Holy Spirit Baptism is an experience different and distinct from Salvation or Water Baptism. (Acts 1:5; Acts 10:44)" />

            <div>
                <h4 className="text-2xl font-bold text-teal-800 mb-4 uppercase tracking-wider font-heading">Our Responsibility</h4>
                <p className="mb-6 italic">As believers, there are four primary responsibilities we are called to uphold: Prayer, Outreach, Reading the Bible, and Fellowship.</p>
                <div className="grid grid-cols-1 md:grid-cols-2">
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
        <div className="max-w-7xl mx-auto px-0">
        <BackButton label="Back to Mission" target={Page.Home} />
        
        <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <img src="https://i.postimg.cc/c4bLPpd2/1763563363621.jpg" alt="Giving" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-3xl md:text-6xl font-black text-shadow-strong text-center uppercase tracking-tighter font-heading">Faith. Generosity. Impact.</h3>
            </div>
        </div>
        
        <div className="text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-3xl font-bold text-blue-400 mb-8 uppercase tracking-widest font-heading">Your generosity is changing the world!</h4>
            <div className="glass-card-blue p-8 rounded-3xl">
                <p className="text-xl leading-relaxed text-white">When we live our lives driven by obedience and generosity, we are able to reach our local community and the nations beyond</p>
            </div>
        </div>

        <div className="text-center mb-10">
            <span className="inline-block bg-teal-600 text-white font-bold py-3 px-10 rounded-full shadow-lg text-xl border border-teal-500 uppercase tracking-widest font-heading">Electronic Giving</span>
        </div>

        <div className="flex justify-center mb-16">
             <img src="https://i.postimg.cc/9XL7r8hw/Giving-2022.jpg" alt="Banking Details" className="w-full max-w-3xl rounded-3xl shadow-2xl border border-white/10" />
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
            <button onClick={() => setPage(Page.ChurchPlanting)} className="bg-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-xl hover:bg-blue-500 active:scale-95 border-2 border-blue-400 transition-all uppercase tracking-widest font-heading">
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
      <div className="w-full pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-white/90 bg-gradient-to-br from-cyan-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-0">
        <BackButton label="Back to Mission" target={Page.Home} />
        <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-blue-300 mb-4 uppercase tracking-tighter font-heading">South Africa Fellowship Dates 2026</h3>
            <p className="text-xl text-white/60 font-medium italic">(Eldorado Park yearly calendar at the bottom)</p>
        </div>

        <div className="space-y-12">
            {/* RALLIES SECTION */}
            <AnnouncementGroup 
                title="Area-Wide Pioneer Rallies 2026" 
                variant="teal"
                icon={Compass}
                items={[
                    { title: "Eastern Cape", desc: "January 30 & 31" },
                    { title: "Cape Town", desc: "March 27 & 28" },
                    { title: "Joburg/Gauteng", desc: "April 10 & 11" },
                    { title: "KZN", desc: "May 8 & 9" }
                ]} 
            />

            {/* DISCIPLESHIPS SECTION */}
            <div className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-teal-400">
                        <Users size={24} />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-teal-400 font-heading">Regional Discipleship Schedules 2026</h4>
                    <div className="h-px bg-white/10 flex-grow"></div>
                </div>

                <div className="space-y-10">
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
                items={[
                    { title: "National Men's Rally", desc: "June 19 & 20" },
                    { title: "SA Bible Conference 2026", desc: "August 24 - August 28" },
                    { title: "SA Bible Conference 2027", desc: "August 30 - September 3" },
                    { title: "SA Bible Conference 2028", desc: "August 28 - September 1" }
                ]} 
            />
            
            <div className="pt-20 border-t border-white/10 text-center">
                <h4 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest font-heading">Eldorado Park Church Calendar</h4>
                <div className="glass-card-blue p-2 rounded-3xl max-w-4xl mx-auto shadow-2xl border border-white/10 overflow-hidden">
                    <img src="https://i.postimg.cc/PrtsLf78/2026-Year-Schedule-SM.jpg" alt="Eldorado Park Church Calendar 2026" className="w-full h-auto rounded-2xl" />
                </div>
            </div>
        </div>
      </div>
      </div>
    );
  }

  // COMBINED MINISTRIES (Childrens & Recovery)
  if (page === Page.ChildrensMinistry || page === Page.Recovery) {
    return (
      <div className="w-full min-h-screen animate-fade-in text-left text-white/90 bg-[#A85D5C] pt-24 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-0">
            <div className="px-4 md:px-0 mb-6">
                <BackButton label="Back to About Us" target={Page.AboutUs} />
            </div>

            {/* Images side-by-side, full-width, edge-to-edge layout */}
            <div className="flex flex-col md:flex-row w-full mb-12">
                <div className="relative w-full md:w-1/2 aspect-video">
                    <img src="https://i.postimg.cc/BtWp06Sx/1dfbf742442f400382671b5fe13afd99.jpg" alt="Children's Ministry" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
                        <h3 className="text-white text-2xl md:text-4xl font-black text-shadow-strong uppercase tracking-widest font-heading text-center">Children's Ministry</h3>
                    </div>
                </div>
                <div className="relative w-full md:w-1/2 aspect-video">
                    <img src="https://i.postimg.cc/3J1Jz929/4432a4c385c44e609ac41982225b1669.jpg" alt="Recovery Header" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/20">
                        <h3 className="text-white text-2xl md:text-4xl font-black text-shadow-strong uppercase tracking-widest font-heading text-center">Choose To Change</h3>
                    </div>
                </div>
            </div>

            {/* Content (No card styling) */}
            <div className="px-4 md:px-0 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-center md:text-left">
                
                {/* Children's Content */}
                <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-widest font-heading mb-4">Our children's ministry has something for every child!</h3>
                    <h4 className="text-xl font-bold text-white/80 mb-4 uppercase tracking-widest font-heading">Sunday School</h4>
                    <p className="text-lg text-white/90 leading-relaxed">
                        Each Sunday morning at 9:00, while the adults are in Bible Study, Sunday School is provided for children. Classes are divided into different age groups to fit the learning levels of each child. Just ask an usher and they'll show you which class your child can thrive in.
                    </p>
                </div>

                {/* Recovery Content */}
                <div>
                    <h4 className="text-2xl font-bold text-white uppercase tracking-widest font-heading mb-4">Recovery Ministry Program</h4>
                    <p className="text-xl font-bold text-white/80 mb-4 uppercase tracking-widest font-heading">It starts with a choice.</p>
                    <p className="text-lg text-white/90 leading-relaxed mb-4">
                        Choose to Change is a faith-based non-profit organization that helps those struggling with addiction, ex-convicts and people in recovery of any type to change their lives and restore their families.
                    </p>
                    <p className="text-lg text-white/90 leading-relaxed mb-8">
                        If you or someone you love needs help, <button onClick={() => setPage(Page.GetConnected)} className="text-white font-bold underline decoration-white/50 underline-offset-4 font-heading hover:text-white/80">contact us</button> today.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <button
                          onClick={() => window.open('https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc', '_blank')}
                          className="liquid-glass-purple text-white border-2 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] transition-all duration-500 hover:scale-105 active:scale-95 w-full justify-center md:w-auto font-bold py-3 px-4 md:py-4 md:px-10 rounded-full flex items-center gap-4 font-heading uppercase tracking-widest text-sm md:text-base"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.54 8.46 9.059 8.22 5.28 9.361c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.4-1.02 15.66 1.44.539.3.66 1.02.3 1.56-.3.539-1.02.659-1.56.3z"/></svg>
                            Play Testimony Pod
                        </button>
                    </div>
                </div>

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
        <p className="text-lg leading-relaxed text-gray-800">
            {content}
        </p>
    </div>
);

const TimeCard = ({ day, times }: { day: string; times: string[] }) => (
    <div className="glass-card-blue p-6 rounded-2xl">
        <h4 className="text-2xl font-bold text-blue-300 mb-4 uppercase font-heading">{day}</h4>
        <div className="space-y-3 text-lg text-gray-800">
            {times.map((t, i) => <p key={i}>{t}</p>)}
        </div>
    </div>
);

const ScheduleList = ({ region, dates }: { region: string; dates: string[] }) => (
    <div className="glass-card-blue rounded-2xl p-6 border-l-4 border-l-teal-500">
        <h5 className="text-xl font-bold text-teal-400 mb-4 font-heading">{region}</h5>
        <ul className="space-y-2">
            {dates.map((d, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-500"></div>
                    {d}
                </li>
            ))}
        </ul>
    </div>
);

type Variant = 'cyan' | 'emerald' | 'amber' | 'rose' | 'purple' | 'orange' | 'teal';

const AnnouncementGroup = ({ 
  title, 
  items, 
  variant = 'cyan', 
  icon: Icon 
}: { 
  title: string; 
  items: { title: string; desc: string }[]; 
  variant?: Variant;
  icon?: any;
}) => {
  const styles = {
    cyan: { text: 'text-cyan-400', bg: 'from-cyan-500/20' },
    emerald: { text: 'text-emerald-400', bg: 'from-emerald-500/20' },
    amber: { text: 'text-amber-400', bg: 'from-amber-500/20' },
    rose: { text: 'text-rose-400', bg: 'from-rose-500/20' },
    purple: { text: 'text-purple-400', bg: 'from-purple-500/20' },
    orange: { text: 'text-orange-400', bg: 'from-orange-500/20' },
    teal: { text: 'text-teal-400', bg: 'from-teal-600/25' },
  };
  
  const style = styles[variant];

  return (
    <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
             <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${style.text}`}>
                {Icon && <Icon size={24} />}
             </div>
             <h4 className={`text-2xl md:text-3xl font-black uppercase tracking-widest ${style.text} font-heading`}>{title}</h4>
             <div className="h-px bg-white/10 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3">
            {items.map((item, i) => (
                <div key={i} className={`relative overflow-hidden group rounded-2xl bg-[#121212] border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${style.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${style.bg.replace('from-', 'from-').replace('/20', '').replace('/25', '')} to-transparent`}></div>

                    <div className="p-6 relative z-10">
                        <h5 className="text-xl font-bold text-white mb-3 flex flex-col font-heading">
                            <span className="text-xs font-bold uppercase opacity-50 mb-1 tracking-wider text-white/60">Announcement</span>
                            <span className="leading-tight">{item.title}</span>
                        </h5>
                        <div className="w-8 h-0.5 bg-white/20 mb-4 group-hover:w-full group-hover:bg-white/40 transition-all duration-500"></div>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}



const FaithDetail = ({ title, content }: { title: string; content: string }) => (
    <div>
        <h4 className="text-2xl font-bold text-teal-800 mb-3 uppercase tracking-wider font-heading">{title}:</h4>
        <p className="text-lg leading-relaxed text-gray-800">{content}</p>
    </div>
);
