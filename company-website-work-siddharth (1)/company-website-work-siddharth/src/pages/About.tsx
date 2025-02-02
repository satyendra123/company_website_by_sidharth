import GridPattern from "@/components/ui/grid-pattern"
import aboutherobanner from "@/assets/about/aboutherobanner.png"
import ethics1 from "@/assets/about/ethics1.png"
import ethics2 from "@/assets/about/ethics2.png"
import principlesicon1 from "@/assets/about/principlesicon1.png"
import principlesicon2 from "@/assets/about/principlesicon2.png"
import principlesicon3 from "@/assets/about/principlesicon3.png"
import principlesicon4 from "@/assets/about/principlesicon4.png"
import map from "@/assets/about/map.png"
import management1 from "@/assets/about/management1.png"
import management2 from "@/assets/about/management2.png"
import management3 from "@/assets/about/management3.png"
import { useState } from 'react';
import { cn } from "@/lib/utils"

interface City {
    name: string;
    x: string;
    y: string;
}

export const About = () => {
    const [hoveredCity, setHoveredCity] = useState<City | null>(null);

    // Example cities with positions on the map
    const cities: City[] = [
        { name: 'New York, US', x: '32%', y: '35%' },
        { name: 'London, UK', x: '45%', y: '30%' },
        { name: 'Tokyo, Japan', x: '76%', y: '41%' },
        { name: 'South Africa', x: '51%', y: '80%' },
        { name: 'California, US', x: '20%', y: '45%' },
    ];

    const handleMouseEnter = (city: any) => {
        setHoveredCity(city);
    };

    const handleMouseLeave = () => {
        setHoveredCity(null);
    };
    return (
        <div>
            <section className="relative flex flex-col size-full items-center justify-center overflow-hidden rounded-lg border p-5 md:p-20">
                <h1 className="text-4xl md:text-6xl font-bold py-2 md:py-4 text-black">Houston Systems</h1>
                <p className="text-base md:text-xl font-medium text-[#525252] py-2 md:py-4">
                    Our Vision, Your Future
                </p>
                <img src={aboutherobanner} alt="" className="z-40 py-2 md:py-6" />

                <GridPattern
                    width={60}
                    height={60}
                    x={-10}
                    y={-10}
                    className={cn(
                        "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
                      )}
                />
            </section>
            <section className="flex flex-col md:flex-row gap-3 md:gap-10 justify-center items-center my-10 md:my-0 px-3 md:px-20 h-[50vh] ">
                <div className="w-11/12 md:w-1/2 flex flex-col items-start justify-center gap-5">
                    <h3 className="text-4xl md:text-5xl font-bold text-start">Who we are and
                        what we stand for.</h3>
                    <a
                        href="/contact"
                        className=" hover:cursor-pointer text-xl items-center justify-center bg-blue-600 hover:bg-blue-900 p-5 rounded-xl text-white"
                    >
                        Contact Us
                    </a>
                </div>
                <p className="text-xl text-[#525252] w-11/12 md:w-1/2">
                    Since 2015, we've pioneered safety and security automation solutions with unmatched innovation. Our Aim: a world where safety is a reality, not a dream, and businesses flourish free from security anxieties.
                    We empower all industries with cutting-edge product and solutions that seamlessly integrate, enhance safety, and streamline security. It's not just technology; it's peace of mind.

                </p>
            </section>
            <section className="w-full bg-[#058AFB] flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-5 p-5 md:h-[40vh] md:px-20">
                <div className="flex flex-col items-start justify-center gap-2 md:w-3/12">
                    <h3 className="text-5xl">🏆</h3>
                    <h3 className="text-[26px] text-white font-bold">Excellence Uncompromised</h3>
                    <p className="text-white text-xl text-start">We go beyond the established industry standards effortlessly. Reliability, performance, and excellence are our promises. </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 md:w-3/12">
                    <h3 className="text-5xl">🍃</h3>
                    <h3 className="text-[26px] text-white font-bold">Evolving with You</h3>
                    <p className="text-white text-xl text-justify">As threats evolve, so do we. We innovate to meet your ever-changing needs. Safety isn't a luxury, it's a right. Let's build a safer future together.</p>
                </div>
                <div className="flex flex-col items-start justify-center gap-2 md:w-3/12">
                    <h3 className="text-5xl">🙏</h3>
                    <h3 className="text-[26px] text-white font-bold">Partnership, Not Sales</h3>
                    <p className="text-white text-xl text-justify">We build partnerships. We understand your unique challenges and craft custom solutions. It's about people, not just assets.</p>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center gap-5 py-10 md:px-64">
                <p className="text-[#058AFB] text-xl font-semibold">Our Vision
                </p>
                <h3 className="text-4xl font-bold text-center md:text-left">Your Goals- Our Mission</h3>
                <p className="text-xl text-[#565757] font-semibold">
                    Let's Succeed Together
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-2 md:gap-10 w-11/12 md:w-full">
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-5xl">💡</h3>
                        <h3 className="text-[26px] font-bold">Innovative Solutions</h3>
                        <p className="text-xl text-start">We craft advanced, tailored solutions software and hardware to meet business challenges.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-5xl">💯</h3>
                        <h3 className="text-[26px] font-bold">Proven Excellence</h3>
                        <p className="text-xl text-start">Years of expertise delivering top-quality products and unparalleled support ensure satisfaction.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-5xl">🧩</h3>
                        <h3 className="text-[26px] font-bold">Custom Flexibility</h3>
                        <p className="text-xl text-start">Our adaptable solutions are tailored to fit your business goals, from startups to enterprises.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-5xl">🔐</h3>
                        <h3 className="text-[26px] font-bold">Reliable & Secure</h3>
                        <p className="text-xl text-start">Robust measures prioritize data safety and product reliability against modern cyber threats.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-5xl">🎯</h3>
                        <h3 className="text-[26px] font-bold">Continuous Upgradation</h3>
                        <p className="text-xl text-start">We evolve with technology, ensuring your business stays ahead with the latest advancements.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <h3 className="text-5xl">🤝</h3>
                        <h3 className="text-[26px] font-bold">Customer Support</h3>
                        <p className=" text-xl text-start">Dedicated support ensures seamless service, building lasting client relationships through trust.</p>
                    </div>
                </div>

            </section>
            <section className="flex flex-col items-center justify-center gap-5 py-10 md:px-64">
                <h3 className="text-4xl font-bold">Company Ethics</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-3 md:py-10">
                    <div className="grid grid-cols-2 grid-rows-2 w-11/12 md:w-1/2 gap-4">
                        <div className=" relative rounded-[20px] bg-[#09365C] text-white h-60 w-full" >
                            <h3 className="text-2xl text-end font-bold absolute bottom-0 right-0 m-4">Workplace Morality</h3>
                        </div>
                        <div className="rounded-[20px] h-60 w-full overflow-hidden" >
                            <img src={ethics1} alt="" className="h-full w-full object-fill" />
                        </div>
                        <div className="col-span-2 rounded-[20px] w-full h-30 overflow-hidden">
                            <img src={ethics2} alt="" className="h-full w-full object-fill" />
                        </div>
                    </div>
                    <div className="w-11/12 md:w-1/2">
                        <h3 className="text-4xl font-bold text-[#058AFB]">At Houston Systems,</h3>
                        <p className="text-xl text-[#525252] text-justify w-full py-3 md:py-7">
                            our foundation is built on integrity, transparency, and commitment to ethical business practices. We firmly believe that ethical conduct fosters trust, which is the cornerstone of our relationships with clients, employees, and partners. Upholding fairness, accountability, and respect in every interaction is a non-negotiable part of our culture.

                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-[#058AFB1A] bg-opacity-10 flex flex-col md:flex-row items-center justify-center w-full px-5 md:px-20 py-10">
                <div className="md:w-1/2 flex flex-col items-start justify-center gap-2">
                    <p className="text-[#058AFB] text-xl font-semibold">Our Core Value</p>
                    <h3 className="text-5xl font-bold md:w-1/2">The Principles We Live By</h3>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-10 md:w-1/2 my-5 pt-8 md:pt-0">
                    <div className="flex flex-col items-start justify-center gap-2">
                        <img src={principlesicon1} alt="" />
                        <h3 className="text-[26px] font-bold">Customer-Centric Approach</h3>
                        <p className=" text-xl text-start text-[#4D4B4B] font-medium">Delivering unparalleled value and solutions tailored to customer needs.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <img src={principlesicon2} alt="" />
                        <h3 className="text-[26px] font-bold">Collaboration</h3>
                        <p className=" text-xl text-start text-[#4D4B4B] font-medium">Encouraging teamwork and fostering a supportive environment.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <img src={principlesicon3} alt="" />
                        <h3 className="text-[26px] font-bold">Innovation</h3>
                        <p className=" text-xl text-start text-[#4D4B4B] font-medium">Continuously pushing boundaries to provide cutting-edge technology and services.</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                        <img src={principlesicon4} alt="" />
                        <h3 className="text-[26px] font-bold">Integrity</h3>
                        <p className=" text-xl text-start text-[#4D4B4B] font-medium">Acting with honesty and upholding the highest ethical standards.</p>
                    </div>

                </div>
            </section>
            <section className="text-center md:py-10 overflow-hidden">
                <h3 className="relative top-[500px] md:top-0 text-4xl font-bold">From Management Desk</h3>
                <div className="mt-[100px] md:mt-[50px]">
                    <div className="relative flex md:flex-row flex-col items-center">
                        {/* Image 1 */}
                        <div className="relative md:bottom-[100px] md:left-[150px] bottom-[-400px] left-[-50px] mb-5 md:mb-0">
                            <img
                                src={management1}
                                alt="Management Image 1"
                                className="max-w-full h-auto"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className=" left-[300px] md:mb-0">
                            <img
                                src={management2}
                                alt="Management Image 2"
                                className="max-w-full md:h-[20vh] lg:h-[40vh] xl:h-[70vh]"
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="relative md:top-[200px] md:left-[-100px] top-[70px] left-[50px] mb-5 md:mb-0">
                            <img
                                src={management3}
                                alt="Management Image 3"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

            </section>

            <section className="relative text-center py-10 bg-white">
                <h1 className="text-3xl font-bold mb-2">We're here for you</h1>
                <h1 className="text-3xl font-bold text-blue-600 mb-8">
                    no matter where you are
                </h1>
                <div className="relative inline-block">
                    {/* Map Image */}
                    <img
                        src={map}
                        alt="World Map"
                        className="max-w-full h-auto"
                    />

                    {/* Markers */}
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                                left: city.x,
                                top: city.y,
                            }}
                            onMouseEnter={() => handleMouseEnter(city)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Dot Marker */}
                            <div className="w-6 h-6 bg-blue-600 opacity-60 rounded-full cursor-pointer flex items-center justify-center">
                                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                            </div>

                            {/* Hover Card */}
                            {hoveredCity?.name === city.name && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-lg whitespace-nowrap">
                                    <span className="text-gray-800 font-medium">{city.name}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}