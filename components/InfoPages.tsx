import React from 'react';
import { Page, NavigationProps } from '../types';

interface InfoPageProps extends NavigationProps {
  page: Page;
}

export const InfoPages: React.FC<InfoPageProps> = ({ page, setPage }) => {

  // PAGE 2: ABOUT US (Merged with Ministries)
  if (page === Page.AboutUs) {
    return (
      <div className="animate-fade-in text-left pb-20 w-full pt-24 md:pt-32 bg-[#F0F7FF]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-0 pt-8">
        
        {/* Cloud Blue Who We Are Section */}
        <div className="bg-[#F0F7FF] p-4 md:p-12 md:m-4 md:rounded-xl text-gray-900 mb-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 uppercase font-heading tracking-widest text-center md:text-left">Who We Are</h3>
            <p className="mb-4 text-lg font-medium">Our mission is simple. To bring the Truth of Jesus Christ to the world.</p>
            <p className="mb-8 text-lg font-medium">How do we do that? Through evangelism, discipleship, and church planting.</p>
            
            <div className="space-y-6 mb-12">
                <div className="bg-transparent p-0 border-l-2 border-gray-400 pl-4 md:border-none md:pl-0 md:bg-white/30 md:p-6 md:rounded-2xl md:border md:border-white/20 md:shadow-sm">
                    <p><strong className="font-bold text-gray-900 uppercase tracking-wider font-heading">Evangelism:</strong> Because the world is full of lost souls who need to hear the truth of Jesus Christ.</p>
                </div>
                <div className="bg-transparent p-0 border-l-2 border-gray-400 pl-4 md:border-none md:pl-0 md:bg-white/30 md:p-6 md:rounded-2xl md:border md:border-white/20 md:shadow-sm">
                    <p><strong className="font-bold text-gray-900 uppercase tracking-wider font-heading">Discipleship:</strong> Because every believer needs to be trained for the ministry of the Gospel.</p>
                </div>
                <div className="bg-transparent p-0 border-l-2 border-gray-400 pl-4 md:border-none md:pl-0 md:bg-white/30 md:p-6 md:rounded-2xl md:border md:border-white/20 md:shadow-sm">
                    <p><strong className="font-bold text-gray-900 uppercase tracking-wider font-heading">Church Planting:</strong> Because our greatest impact will be in the cities and nations outside our own that we can reach.</p>
                </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6 uppercase font-heading tracking-widest">Our History</h3>
            <div className="space-y-6 text-lg leading-relaxed font-medium">
                <p>The Potter's House Christian Church of Eldorado Park was founded in 1997, and has served this community and eventually, all of Southern Africa since. We are part of Christian Fellowship Ministries. Our churches go by the names: The Door, The Potter's House, Victory Chapel and others.</p>
                <p>Started in Prescott, AZ in the early 1970's during the Jesus People movement, we have been focused on reaching those that have been rejected by the religious world.</p>
                <p>When the church world didn't know what to do with the hippies getting saved, CFM was training them and putting them into the ministry.</p>
                <p>Since then, the fellowship has planted churches across the globe, in more than 100 nations and has multiplied to more than 3,700 churches world-wide, including more than 100 in South Africa alone.</p>
                <p>Our goal in every nation we reach is to build an indigenous church: Training local leaders to reach their nation for Jesus.</p>
            </div>
        </div>

        {/* Cloud Blue Ministries Section */}
        <div className="bg-[#F0F7FF] p-4 md:p-12 md:m-4 md:rounded-xl text-gray-900 mb-0 mt-0">
            <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
                 <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 uppercase tracking-wider md:tracking-widest font-heading text-gray-900">Explore our ministries.</h2>
                 <p className="mb-4 md:mb-8 text-sm md:text-xl font-medium">Find ways you and your family can grow and make impact.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                 <MinistryCard 
                    img="https://i.postimg.cc/Wbqw12rC/1763585178432.jpg" 
                    title="Live music Drama & Testimonials" 
                    sub="Fridays at 7:00 PM" 
                    label="One80 Events"
                 />

                 <MinistryCard 
                    img="https://i.postimg.cc/C5StGR00/ea998c-9e02deae6b1b45fb9bfaa3b321c24d2e-mv2.png" 
                    title="Local Impact" 
                    sub="Saturdays Outreaches at 10:00 AM" 
                    clickable={() => setPage(Page.Stories)}
                 />
                 
                 <MinistryCard 
                    img="https://i.postimg.cc/BtWp06Sx/1dfbf742442f400382671b5fe13afd99.jpg" 
                    title="Children's Ministry" 
                    sub="Kingdom Kids Programs"
                    clickable={() => setPage(Page.ChildrensMinistry)}
                 />
            </div>
        </div>

        </div>
      </div>
    );
  }

  // PAGE 5: OUR STAFF
  if (page === Page.OurStaff) {
    return (
      <div className="animate-fade-in text-left text-white bg-[#2C5A8B] pb-20 w-full pt-24 md:pt-32">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-0 pt-8">
        <h3 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-widest underline underline-offset-8 font-heading">Leadership Staff</h3>

        <div className="space-y-16">
            <StaffMember 
                img="https://i.postimg.cc/nzRsKyqs/Jonathan-and-Rachel-Heimberg.jpg"
                name="Jonathan Heimberg"
                role="Senior Pastor"
                bio="Jonathan Heimberg is the Pastor of The Potter's House Christian Fellowship Church of Eldorado Park. He and his wife Rachel have been married for 26 years, and have five children and five grandchildren. They both experienced life-changing conversions at a young age. The Heimberg's ministry began in Las Vegas, NV, after which they spent two and a half years as missionaries in Bangalore, India, pioneering a now indigenous church planting church. From there, they pastored the church planting congregation in Hobbs, New Mexico, and then spent 8 years in Gallup, New Mexico leading the conference center there."
            />
            <StaffMember 
                img="https://i.postimg.cc/g0ryCH4R/Leebon-and-Charneil-Britde.jpg"
                name="Leebon Britde"
                role="Associate Pastor"
                bio="Leebon and his wife, Charneil both experienced life changing conversions in the Eldorado Park church as young people. They have pastored for several years, and are now part of the pastoral staff in Eldos. Pastor Britde ministers in preaching, counseling, and various administrative tasks in the Eldorado Park church."
            />
            <StaffMember 
                img="https://i.postimg.cc/C5b9jgqM/STAFF-PHOTOS-5.jpg"
                name="Edward Mphaga"
                role="Assistant Pastor"
                bio="Edward and Vuyiswa Mphaga are serving the Eldorado Park congregation with their children. Ed oversees the follow-up and visitation ministry, and also assists in counseling, preaching, and ministering to the congregation. Ed and Vee both experienced life-changing conversions and have served in ministry for several years."
            />
            <StaffMember 
                img="https://i.postimg.cc/SsgnkBsf/Sanele-and-Cathleen-Mofokeng.jpg"
                name="Sanele Mofokeng"
                role="Choose to Change Director"
                bio="Sanele oversees the Choose to Change addiction recovery ministry. He was saved through the Choose to Change ministry, and his wife, Cathleen was saved as a teenager in the Eldorado Park church. This vital need in Eldorado Park simply reflects the larger need in our society. Their mission is to shepherd addicts through their conversion and rehabilitation into a productive life and a fruitful future in the Kingdom of God. Sanele and Cathleen are both evidence of the power of Jesus Christ to transform lives!"
            />
            <StaffMember 
                img="https://i.postimg.cc/44KcX36d/STAFF-PHOTOS-6.jpg"
                name="Nkosinathi Nxala"
                role="Outreach Director"
                bio="Nkosinathi and Kitso were both born again at The Potter's House Church in Eldorado Park. Called by God to preach the gospel, today, Nkosinathi leads the various outreach ministries of the Eldos church, and they are looking forward to preach the gospel as pioneer pastors."
            />
        </div>

        <div className="flex justify-center mt-16">
            <button onClick={() => setPage(Page.ChurchPlanting)} className="bg-blue-600 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest font-heading">
                Church Planting
            </button>
        </div>
        </div>
      </div>
    );
  }

  // PAGE 4: NEW BUILDING
  if (page === Page.NewBuilding) {
    return (
      <section id="new-building-content" className="w-full bg-[#D1D066] pt-24 md:pt-32 pb-20 min-h-screen animate-fade-in text-left text-gray-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0 pt-8">
            {/* Blue Text Highlight */}
            <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">A Vision Yet to Come</h3>
            </div>
            
            <div className="text-center mb-8">
                <h3 className="text-sm md:text-base uppercase tracking-[0.2em] px-4 py-1.5 border border-gray-900 rounded-full inline-block font-bold text-gray-900 mb-6 font-heading">TIME TO ENLARGE</h3>
            </div>
            
            <div className="space-y-4 text-base md:text-lg text-center mb-10">
                <p className="font-bold text-2xl text-gray-900">Announcing the enlarged Eldorado Park Conference Center</p>
                <p className="max-w-4xl mx-auto text-gray-900 leading-relaxed">Our facility was built in 2002 to facilitate our Southern Africa Bible Conferences, and for 23 years it has been a blessing to all that God has done in our nation and regions beyond. However, it can no longer hold all that God is doing.</p>
                <p className="max-w-4xl mx-auto text-gray-900 leading-relaxed">This new Conference Center will enable all that God is doing in the Eldorado Park church, as well as help to facilitate the National Conferences for years to come.</p>
            </div>
            
            <div className="mt-6 mb-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-900/10">
                <img src="https://i.postimg.cc/kgYf78NP/Exterior-Arrival.jpg" alt="New building rendering" className="w-full h-auto" />
            </div>
            
            <div className="mt-6 overflow-x-auto flex space-x-4 pb-8 scrollbar-hide mb-10">
                {/* Reordered: Exterior-Arrival first, Entrance-Arrival second */}
                <img src="https://i.postimg.cc/kgYf78NP/Exterior-Arrival.jpg" alt="New building 1" className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0 border border-gray-900/10" />
                <img src="https://i.postimg.cc/WbwXdxVj/Entrance-Arrival.jpg" alt="New building 2" className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0 border border-gray-900/10" />
                <img src="https://i.postimg.cc/9QgJcTdK/Exterior-2.jpg" alt="New building 3" className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0 border border-gray-900/10" />
                <img src="https://i.postimg.cc/sfPmvb9d/Exterior.jpg" alt="New building 4" className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0 border border-gray-900/10" />
                <img src="https://i.postimg.cc/C1kNCQ3w/Interior-Lumen.jpg" alt="New building 5" className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0 border border-gray-900/10" />
                <img src="https://i.postimg.cc/dtB5SgL3/Int-to-pulpit-lumen.jpg" alt="New building 6" className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0 border border-gray-900/10" />
                <img src="https://i.postimg.cc/RVRgb2NZ/Foyer-lumen.jpg" alt="New building 7" className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0 border border-gray-900/10" />
                <img src="https://i.postimg.cc/SNyr8VV3/Foyer.jpg" alt="New building 8" className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0 border border-gray-900/10" />
            </div>
            
            <div className="mt-6 mb-10 text-center">
                <button className="text-sm md:text-base uppercase tracking-[0.2em] px-6 py-3 border border-current rounded-full inline-block font-bold text-gray-900 mb-6 font-heading bg-[#C5E0FA] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">View 3D Simulation</button>
            </div>
            
            {/* VIMEO EMBEDS */}
            <div className="mt-6 mb-16 space-y-8">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-900/10">
                    <iframe src="https://player.vimeo.com/video/1139268450?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0&amp;logo=0&amp;dnt=1" className="absolute inset-0 w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-900/10">
                    <iframe src="https://player.vimeo.com/video/1139268799?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0&amp;logo=0&amp;dnt=1" className="absolute inset-0 w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-900/10">
                    <iframe src="https://player.vimeo.com/video/1139268892?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0&amp;logo=0&amp;dnt=1" className="absolute inset-0 w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            
            {/* Banking Details */}
            <div className="bg-transparent md:bg-black/10 md:backdrop-blur-md border-none md:border md:border-gray-900/10 p-0 md:p-8 rounded-none md:rounded-3xl mb-10 shadow-none">
                <p className="text-lg leading-relaxed text-center text-gray-900 mb-8 max-w-3xl mx-auto">
                    To invest in this project, you can give electronically via the banking details below. Alternatively, you can mail your gift to:
                </p>

                <div className="flex justify-center mb-10">
                    <img src="https://i.postimg.cc/9XL7r8hw/Giving-2022.jpg" alt="Banking Details" className="w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-900/10" />
                </div>
                
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-900 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <h4 className="text-xl font-bold text-gray-900 font-heading tracking-widest uppercase">Mail your donation</h4>
                    </div>
                    <p className="text-lg text-gray-900">PO Box X1510</p>
                    <p className="text-lg text-gray-900">Glenvista, 2058</p>
                </div>
            </div>
        </div>
      </section>
    );
  }

  // PAGE 6: CHURCH PLANTING
  if (page === Page.ChurchPlanting) {
    return (
      <div className="animate-fade-in text-left text-white/90 pb-20 w-full pt-24 md:pt-32 bg-[#8D8CCF]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-0 pt-8">
        <h3 className="text-3xl font-bold text-white mb-8 uppercase text-center underline underline-offset-8 font-heading">Church Planting</h3>

        <div className="space-y-6 text-lg leading-relaxed mb-10">
            <p><strong className="text-blue-300 font-heading">The Potter's House of Eldorado Park is actively involved in church planting across the globe.</strong></p>
            <p>Our entire ministry is focused on making disciples to reach the desperate people of the world. We believe in the dignity of the local church, and that Biblical church growth is patterned not by mega-churches in large cities, but by the training of disciples in the local church who pioneer their own congregations.</p>
            <p>Biblical growth is via multiplication, not conglomeration. Church planting is wholly supported by, financed by, and staffed by the converts and disciples of the local church, and it is through this process that Christian Fellowship Ministries has grown to more than 3,700 churches around the world.</p>
            <p>Here in Eldorado Park, through the planting of our own couples, and the continuing commitment to plant churches by our daughter churches, we have grown to more than 100 churches in South Africa, with many active missionaries across Southern Arica, and indigenous workers in several nations.</p>
            <p>The Eldorado Park congregation has been instrumental in reaching many nations in our region, and we are constantly striving to extend the reach of the gospel in Southern Africa and beyond!</p>
        </div>

        <div className="relative w-full rounded-none md:rounded-2xl overflow-hidden shadow-none md:shadow-2xl mb-12 border-none md:border-2 md:border-white/10">
            <img src="https://i.postimg.cc/kXJBBX8g/502a78-3f260f5175d047d2ba1f844398a2e390-mv2.jpg" alt="Global Map" className="w-full h-auto opacity-60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl md:text-5xl font-black text-white mb-4 text-shadow-strong uppercase tracking-wider font-heading">3,700 locations and growing!</h3>
                <p className="text-lg md:text-xl text-gray-100 font-medium text-shadow-strong">With nearly 4,000 churches around the world, we are witnessing a move of God across our world!</p>
            </div>
        </div>

        <div className="text-center">
            <p className="text-xl font-semibold mb-6">Learn how you can be a part of the worldwide impact</p>
            <button onClick={() => setPage(Page.Give)} className="bg-blue-600 text-white font-bold py-4 px-12 rounded-full shadow-2xl hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest font-heading">Online Giving</button>
        </div>
        </div>
      </div>
    );
  }

  // PAGE 13: OUR VISION
  if (page === Page.OurVision) {
    return (
      <div className="animate-fade-in text-left text-white/90 pb-20 w-full pt-24 md:pt-32 bg-[#00272B]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-0 pt-8">

        <div className="relative w-full aspect-[2/1] rounded-none md:rounded-2xl overflow-hidden mb-12 shadow-none md:shadow-2xl border-none md:border md:border-white/10">
            <img src="https://i.postimg.cc/RFYD6g0D/502a78-76d146b4c54b4977a6f70a02c24ec4f3-mv2.jpg" alt="Vision Background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/30">
                <h3 className="text-white text-2xl md:text-4xl font-bold text-shadow-strong text-center uppercase tracking-widest font-heading">See what drives our church and everything we do.</h3>
            </div>
        </div>

        <div className="bg-transparent p-0 md:glass-card-blue md:p-8 md:p-12 rounded-none md:rounded-3xl space-y-10">
            <h3 className="text-3xl font-bold text-blue-300 uppercase tracking-widest text-center font-heading">Our Vision</h3>
            <VisionPoint title="Evangelism" content="The Gospel taken outside the four walls is the absolute foundation of our church, in obedience to Mark 16:15 And He said to them, ‘Go into all the world and preach the gospel to every creature'… We emphasize personal evangelism, and a large variety of outreaches to share the Gospel." />
            <VisionPoint title="Conversion" content="We witness, testify and preach for a decision. The Gospel has the power to save and transform lives. 1 Peter 1:23 having been born again... The bulk of our congregation consists of people converted here by the Power of God." />
            <VisionPoint title="The Local Church" content="God has placed everything necessary to accomplish His will in the setting of the local church. Ephesians 1:22-23 …the church. Which is his body, the fullness of him who fills everything in every way." />
            <VisionPoint title="Discipleship" content="God intends for calling to be accomplished through being trained and equipped within the setting of a local church. Therefore, the highest calling is to obey God’s command in Matthew 28:19-20." />
            <VisionPoint title="Church Planting" content="The result of disciples being raised up is that they be released into the harvest field. Matthew 9:37-38. We send couples to plant brand new congregations, with the aim of reproducing our vision in a new area." />
            <VisionPoint title="World Evangelism" content="From the earliest Bible record, God’s vision is worldwide testimony and impact. The gospel message God has revealed to us works and is relevant in every nation and culture of the world. Mark 16:15... Matthew 28:19..." />
        </div>
        </div>
      </div>
    );
  }

  // PAGE 14: STATEMENT OF FAITH
  if (page === Page.StatementOfFaith) {
    return (
      <div className="animate-fade-in text-left text-gray-900 pb-20 w-full pt-24 md:pt-32 bg-[#F0F7FF]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-0 pt-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center uppercase tracking-widest underline decoration-black underline-offset-8 font-heading">Statement of Faith</h3>
          <div className="space-y-10 max-w-4xl mx-auto">
            <FaithDetail title="The Bible" content="We believe the Bible is the inspired, infallible Word of God and the supreme authority in all matters of faith and practice (2 Timothy 3:16-17)." />
            <FaithDetail title="God" content="We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit (Matthew 28:19; 2 Corinthians 13:14)." />
            <FaithDetail title="Jesus Christ" content="We believe in the deity of Jesus Christ, His virgin birth, sinless life, miracles, atoning death, bodily resurrection, ascension, and His personal return in power and glory (John 1:1, 14; Acts 1:11)." />
            <FaithDetail title="Salvation" content="We believe that salvation is by grace alone through faith alone in Christ alone. All who repent and believe in Jesus Christ are born again and receive eternal life (Ephesians 2:8-9; John 3:16)." />
            <FaithDetail title="The Holy Spirit" content="We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life (John 14:16-17; Romans 8:11)." />
            <FaithDetail title="The Church" content="We believe in the universal church, the Body of Christ, made up of all believers, and in the importance of the local church as the expression of God's kingdom on earth (Ephesians 1:22-23; Matthew 16:18)." />
            <FaithDetail title="Resurrection" content="We believe in the resurrection of both the saved and the lost — the saved unto the resurrection of life and the lost unto the resurrection of damnation (John 5:28-29; 1 Corinthians 15:51-57)." />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const FaithDetail = ({ title, content }: { title: string; content: string }) => (
  <div className="border-l-4 border-blue-400 pl-6">
    <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wider font-heading">{title}:</h4>
    <p className="text-lg leading-relaxed text-gray-700">{content}</p>
  </div>
);

const StaffMember = ({ img, name, role, bio }: { img: string; name: string; role: string; bio: string }) => (
    <div className="bg-transparent p-0 rounded-none border-none md:bg-white/15 md:backdrop-blur-sm md:rounded-3xl md:p-8 md:shadow-sm md:border md:border-white/10 flex flex-col md:flex-row items-center">
        <img src={img} alt={name} className="w-1/2 md:w-1/3 aspect-square object-cover rounded-full border-4 border-white mb-6 md:mb-0 md:mr-8" />
        <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest font-heading mb-2">{name}</h4>
            <p className="text-lg font-bold text-white/80 mb-4 uppercase tracking-widest font-heading">{role}</p>
            <p className="text-base md:text-lg leading-relaxed text-white/90">{bio}</p>
        </div>
    </div>
);



const VisionPoint = ({ title, content }: { title: string; content: string }) => (
    <div className="border-l-4 border-blue-500 pl-6">
        <h4 className="text-2xl font-bold text-blue-300 mb-3 uppercase tracking-wider font-heading">{title}:</h4>
        <p className="text-lg leading-relaxed text-white/80">{content}</p>
    </div>
);
const MinistryCard = ({ img, title, sub, label, clickable }: { img: string; title: string; sub: string; label?: string; clickable?: () => void }) => (
    <div className={`relative w-full aspect-[2/1] md:aspect-[2.5/1] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 group ${clickable ? 'cursor-pointer' : ''}`} onClick={clickable}>
        <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-4 bg-black/40">
            {label && <span className="bg-white text-black px-3 py-0.5 md:px-4 md:py-1 rounded-full font-bold text-xs md:text-sm mb-2 md:mb-3 uppercase tracking-widest font-heading">{label}</span>}
            <h3 className="text-white text-base md:text-3xl font-black text-shadow-strong text-center uppercase tracking-wider md:tracking-widest font-heading">{title}</h3>
            <h4 className="text-blue-300 text-sm md:text-2xl font-bold text-shadow-strong text-center uppercase mt-1 md:mt-2 font-heading">{sub}</h4>
        </div>
    </div>
);
