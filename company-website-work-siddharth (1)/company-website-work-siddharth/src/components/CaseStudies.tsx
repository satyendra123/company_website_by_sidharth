import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import airporticon from "../assets/airporticon.png";
import governmenticon from "../assets/governmenticon.png";
import defenceicon from "../assets/defenceicon.png";
import corporateicon from "../assets/corporateicon.png";
import industryicon from "../assets/industryicon.png";
import educationicon from "../assets/educationicon.png";
import transporticon from "../assets/transporticon.png";
import stadiumicon from "../assets/stadiumicon.png";
import casestudyimg1 from "@/assets/home/casestudyimg1.png";
import casestudyimg2 from "@/assets/home/casestudyimg2.png";
import casestudyimg3 from "@/assets/home/casestudyimg3.png";
import casestudyimg4 from "@/assets/home/casestudyimg4.png";
import casestudyimg5 from "@/assets/home/casestudyimg5.png";
import casestudyimg6 from "@/assets/home/casestudyimg6.png";
import casestudyimg7 from "@/assets/home/casestudyimg7.png";
import casestudyimg8 from "@/assets/home/casestudyimg8.png";

interface CaseStudyContent {
    id: number;
    title: string;
    content: string[];
    footerstats: string[];
    image: string;
}

const caseStudiesData: CaseStudyContent[] = [
    {
        id: 1,
        title: "Airport",
        content: [
            "Airport operations require efficient parking for smooth passenger and internal activities. Houston Systems offers integrated modules, PARKSURE and PARKSIM, to streamline airport parking and traffic management.",
            "Amritsar Airport handles over 10,000 passengers daily and offers 1,000 parking spaces for 5,000+ visitors. It has 3 entry and 4 exit lanes with both manned and unmanned payment terminals. Digital displays guide users with real-time parking availability.",
            "GOA Airport handles 15,000+ passengers daily with 1,000 parking spaces. It offers 6 entry and 4 exit lanes, featuring both manned and unmanned payment options, and real-time parking updates at entry points.",
            "Agartala Airport handles 4,000+ passengers daily with 300 parking spaces. It features 2 entry and 2 exit lanes, offering both manned and unmanned payment options, with real-time parking updates.",
        ],
        footerstats: ["6", "36", "25k"],
        image: casestudyimg1
    },
    {
        id: 2,
        title: "Government",
        content: [
            "Government sectors require robust security and efficient parking solutions to manage high visitor traffic, ensure perimeter safety, streamline vehicle access, and enhance overall operational efficiency and control.",
            "The Supreme Court of India, located in New Delhi, offers 2000 parking spaces with over 7000 daily visitors. The premises are secured with Houston Systems' bollards, UVSS, baggage scanners, DFMD, and RFID-integrated boom barriers. Houston Systems has provided the parking guidance system and support for the last 7 years.",
            "The Delhi High Court, established in 1966, is the second-highest judicial authority in Delhi, handling civil, criminal, and constitutional cases. With 1500 parking spaces and 2500 daily visitors, Houston Systems has implemented a parking and vehicle access solution to ensure secure, smooth traffic flow and optimal space utilization.",
            "Oil India Limited, a key crude oil and natural gas PSU based in Noida, is secured with Houston Systems' RFID boom barriers for vehicle access and flap barriers for personnel. Houston Systems has been serving for 5 years."
        ],
        footerstats: ["9", "115", "3+"],
        image: casestudyimg2
    },
    {
        id: 3,
        title: "Defence",
        content: [
            "The defence sector faces challenges like securing large perimeters, managing sensitive access points, integrating surveillance systems, and addressing human error and internal threats. ",
        "Houston Systems served as a turnkey provider for the Karwar Naval Base, supplying perimeter security, pedestrian access, indoor security, CCTV surveillance, and GPS navigation systems.",
        "Bhuj Military Station in Gujarat, near the India-Pakistan border, is secured with Houston's Spyker and Shield tyre killers, automatic rising bollards, and Vega boom barriers, forming a three-layer security system at its checkpoints.",
        "Bareilly Cantt is a key military hub for the Indian Army, offering premier training facilities. Houston Systems enhances security here with vehicle access management through Boom Barriers and RFID Readers, along with advanced vehicle security via ANPR Cameras."
        ],
        footerstats: ["8", "24", "10k"],
        image: casestudyimg3
    },
    {
        id: 4,
        title: "Corporate",
        content: [
            "Corporate offices face challenges like managing access, and handling limited parking with traffic congestion. Smart security and parking solutions are essential for efficient operations.",
            "Chetu, a global software development company in Noida's Sector 63, accommodates 2,000 employees and over 400 daily visitors. Houston Systems has provided RFID-integrated boom barriers for vehicle access and flap barriers for pedestrian management, ensuring secure access for the past four years.",
            "Barco, the largest global software R&D center located in Noida's Sector 64, is fully equipped with flap barriers and ESD machines for pedestrian access management, provided by Houston Systems, also offered service and support for the past five years.",
            "Acidaes Solutions Pvt. Ltd., a cloud software provider in Noida's Sector 62, manages 1,000 employees and 200 visitors daily. The premises use RFID-integrated boom barriers and flap barriers for secure access, supplied and supported by Houston Systems for the past two years."
        ],
        footerstats: ["15", "60", "30k"],
        image: casestudyimg4
    },
    {
        id: 5,
        title: "Industry",
        content: [
            "Manufacturing plants Api's or factories  face challenges in maintaining efficiency, managing logistics, ensuring security, and adhering to safety standards. Advanced systems that streamline access control and monitor material flow play a crucial role in improving both security and operational efficiency.",
            "Birla Cement, part of the Aditya Birla Group, operates a major plant in Chittorgarh, Rajasthan. Houston Systems has provided boom barriers and access control, integrated with the weighbridge for efficient entry and exit.",
            "Shree Cement, India’s 3rd largest by capacity and 2nd by market capitalization, has plants across multiple states. Houston Systems provides boom barriers and integrated access control for weighbridge entry and exit lanes.",
            "Aditya Flaxipack, based in Kanpur, specializes in packaging solutions including laminated films, flexible pouches, and customized products. The facility is secured with a Boom Barrier access control system for vehicles and Turnstile with Biometric integration for employees and visitors."
        ],
        footerstats: ["10", "42", "20k"],
        image: casestudyimg5
    },
    {
        id: 6,
        title: "Education",
        content: [
            "Large institutions require advanced security and access control systems to manage high traffic, ensure authorized entry, safeguard facilities, and maintain a secure environment. Efficient solutions also help optimize parking and streamline daily operations.",
        "IIT Kanpur, a top engineering institute and research centre, offers premier programs for all levels. With 2500 parking spaces and 6000 daily visitors, Houston Systems provides RFID boom barriers for vehicle access, along with baggage scanners, DFMDs, and pedestrian access control for indoor security.",
        "IIT Delhi is renowned for its academic programs and research in engineering, science, and technology. Houston Systems provides boom barriers with access control for secure vehicle entry, along with DFMDs, baggage scanners, and flap tiles for managing indoor security and pedestrian access.",
        "Learner International School in Greater Noida focuses on holistic education, fostering creativity and critical thinking. Houston Systems provides boom barriers with RFID access control for secure vehicle entry and flap barriers for managing access for authorized personnel and visitors."
        ],
        footerstats: ["20", "72", "40k"],
        image: casestudyimg6
    },
    {
        id: 7,
        title: "Transport",
        content: [
            "Efficient parking and access control systems are essential for managing high traffic, ensuring authorized entry, and optimizing space. Enhanced indoor security systems safeguard passengers and staff, maintaining a secure and organized environment.",
        "Patiala Bus Stand is equipped with Houston Systems' secure parking and vehicle access control for efficient space management. Indoor security includes Houston's pedestrian management systems for safe access for passengers and staff.",
        ],
        footerstats: ["14", "54", "35k"],
        image: casestudyimg7
    },
    {
        id: 8,
        title: "Stadium",
        content: [
            "Stadiums face significant security challenges, including managing large crowds, controlling access to prevent unauthorized entry, ensuring efficient screening without delays, addressing terrorist threats, handling unruly behavior among fans",
            "Cricket  Stadium in Mullanpur, near Chandigarh, has a 30,000 seating capacity and modern amenities, including floodlights for day-night matches. Houston Systems provides security with full-height turnstiles and biometric access integrated with QR code scanning for efficient visitor management.",
        ],
        footerstats: ["5", "120", "50k"],
        image: casestudyimg8
    }
];

export const CaseStudies = () => {
    const [activeCase, setActiveCase] = useState(caseStudiesData[0]);

    const handleCaseChange = (caseId: number) => {
        const newCase = caseStudiesData.find(c => c.id === caseId);
        if (newCase) setActiveCase(newCase);
    };

    return (
        <section id="testimonials" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-[#043796] to-[#76b6f7]">
                Case Studies
            </h2>

            <p className="text-3xl font-bold pt-4 text-center">
                We have case studies for every{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#043796] to-[#76b6f7]">
                    environment
                </span>
            </p>

            <CaseStudyNavbar onCaseChange={handleCaseChange} />

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between mx-10">
                <Card className="bg-white rounded-[30px] w-full md:w-4/12 h-fit md:ml-10 flex flex-col items-center justify-center overflow-hidden shadow-lg gap-6 p-10">
                    <CardHeader className="shadow-inner-strong rounded-full">
                        <h3 className="mx-8 lg:mx-20 text-blue-500 text-3xl font-semibold">{activeCase.title}</h3>
                    </CardHeader>
                    <CardContent className="text-[#6c757d] text-lg pt-6 md:mx-10">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {activeCase.content.map((text, index) => (
                                    <CarouselItem key={index} className='flex items-center justify-center'>
                                        <p className="text-justify w-1/2 lg:w-11/12 ">{text}</p>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-col lg:flex-row gap-3 md:gap-1 pt-6">
                            {['Airport(s)', 'Lane(s)', 'Slots'].map((label, index) => (
                                <div key={index} className="flex flex-col items-center justify-center">
                                    <Card className="rounded-full w-11/12 m-0 md:w-6/12 h-fit flex items-center justify-center overflow-hidden shadow-xl">
                                        <CardContent className="pt-6 px-16 font-bold text-2xl text-black">
                                            {activeCase.footerstats[index]}
                                        </CardContent>
                                    </Card>
                                    <p className="text-[#6c757d] text-lg">{label}</p>
                                </div>
                            ))}
                        </div>
                    </CardFooter>
                </Card>
                <Card className="bg-white rounded-2xl w-11/12 md:w-6/12 h-fit md:ml-10 flex items-center justify-center overflow-hidden shadow-lg">
                    <CardContent className="pt-6 object-fill rounded-xl items-center justify-center">
                        <img src={activeCase.image} width={500} className="rounded-xl" alt={activeCase.title} />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

const CaseStudyNavbar = ({ onCaseChange }: any) => {
    const [openPopover, setOpenPopover] = useState(null);

    const categories = [
        { id: 1, icon: airporticon, title: 'Airport' },
        { id: 2, icon: governmenticon, title: 'Government' },
        { id: 3, icon: defenceicon, title: 'Defence' },
        { id: 4, icon: corporateicon, title: 'Corporate' },
        { id: 5, icon: industryicon, title: 'Industry' },
        { id: 6, icon: educationicon, title: 'Education' },
        { id: 7, icon: transporticon, title: 'Transport' },
        { id: 8, icon: stadiumicon, title: 'Stadium' }
    ];

    const handleMouseEnter = (id: any) => {
        setOpenPopover(id);
    };

    const handleMouseLeave = () => {
        setOpenPopover(null);
    };

    return (
        <div className="relative py-20 px-10">
            <div className="flex flex-row justify-between py-10">
                {categories.map((category) => (
                    <Popover key={category.id} open={openPopover === category.id}>
                        <PopoverTrigger asChild>
                            <div
                                className="bg-white p-2 rounded-full hover:scale-110 transition-transform cursor-pointer"
                                onMouseEnter={() => handleMouseEnter(category.id)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => onCaseChange(category.id)}
                            >
                                <img src={category.icon} width={30} height={30} alt={category.title} />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent
                            className="w-64 bg-white"
                            onMouseEnter={() => handleMouseEnter(category.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="px-3 py-2">
                                <h3 className="font-semibold text-gray-900">{category.title}</h3>
                            </div>
                        </PopoverContent>
                    </Popover>
                ))}
            </div>
            <hr className="border-t-2 border-black -mt-16" />
        </div>
    );
};

export default CaseStudies;