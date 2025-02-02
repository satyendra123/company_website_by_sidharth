import React from 'react';                                                                                             
import { Card, CardContent } from "./ui/card";
import abouticon1 from "@/assets/IT Solutions/Conflict.png";
import abouticon2 from "@/assets/IT Solutions/Puzzle.png";
import abouticon3 from "@/assets/IT Solutions/Brain.png";
import abouticon4 from "@/assets/IT Solutions/Shield.png";
import techstack from "@/assets/IT Solutions/techstack.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { AIServiceComponent } from './AIServiceComponent';
import { ServiceProps } from '@/lib/types';

export function ITService({ services }: ServiceProps) {
    return (
        <>
            <div className="w-full h-fit relative py-3">
                <img
                    src={services.banner}
                    className="w-full h-[80vh] object-fill"
                    alt="banner image"
                />
            </div>
            <div className=" space-y-3">
                <h1 className="text-center font-thin text-4xl">
                    {services.toptitle}
                </h1>
                <div className="px-2 md:px-10 flex flex-col md:flex-row gap-2 justify-center items-center py-10">
                    {services.topcards.map((service, index) => (
                        <Card key={index} className="bg-transparent border-none">
                            <img src={service.icon} className="pl-5" alt={service.title} />
                            <CardContent>
                                <h3 className="font-semibold">{service.title}</h3>
                                <p className="text-gray-700">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {services.toptitle === "Unlock the Power of Development and Automation" && <AIServiceComponent />}

                <div className="py-6 px-2 md:px-10">
                    <h1 className="text-center font-thin text-4xl">
                        {services.bottomtitle}
                    </h1>
                    <h2 className="text-center font-thin text-sm">
                        {services.bottomsubtitle}
                    </h2>
                    <div className="flex flex-col gap-10 justify-center items-center py-10">
                        {services.bottomcards.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                service={service}
                                isReversed={index % 2 !== 1}
                            />
                        ))}
                    </div>
                    {/* Why Us Section */}
                    <div className="py-10 flex flex-col md:flex-row">
                        <div>
                            <h6 className="text-2xl py-2">Why Us</h6>
                            <h3 className="text-5xl font-medium py-2">Why HOUSYS Stands out</h3>
                            <p className="text-2xl text-[#444444] py-2">Discover what makes us the preferred choice for IT solutions and integrations. With us, it's more than just technology— it's about results that drive your success.</p>
                            <a href="" className="text-[#058AFB] text-2xl flex flex-row gap-1 justify-start items-center py-2">Talk to our experts<ContactUsSvg /></a>
                        </div>
                        <div className="flex flex-row pt-10 md:pt-0">
                            <div className="flex flex-col border-r">
                                <div className="border-b pt-10">
                                    <Card className="bg-transparent border-none shadow-none p-3">
                                        <img src={abouticon1} className="pl-5" alt="" />
                                        <CardContent>
                                            <h3 className="font-semibold text-xl">Powerful Technologies</h3>
                                            <p className="text-gray-700">Stay ahead with next-gen tools and tech stacks designed to optimize your operations.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="border-t">
                                    <Card className="bg-transparent border-none shadow-none p-3">
                                        <img src={abouticon2} className="pl-5" alt="" />
                                        <CardContent>
                                            <h3 className="font-semibold text-xl">Custom-Crafted Solutions</h3>
                                            <p className="text-gray-700">We don't believe in one-size-fits-all. Every service we deliver is tailored to your unique goals.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <div className="flex flex-col border-l">
                                <div className="border-b">
                                    <Card className="bg-transparent border-none shadow-none p-3">
                                        <img src={abouticon3} className="pl-5" alt="" />
                                        <CardContent>
                                            <h3 className="font-semibold text-xl">Experienced Innovators</h3>
                                            <p className="text-gray-700">Our team combines deep industry expertise with innovative thinking to solve your toughest challenges.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="border-t pb-10">
                                    <Card className="bg-transparent border-none shadow-none p-3">
                                        <img src={abouticon4} className="pl-5" alt="" />
                                        <CardContent>
                                            <h3 className="font-semibold text-xl">Reliability You Can Trust</h3>
                                            <p className="text-gray-700">We're committed to delivering excellence with round-the-clock support and seamless project management.</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tech Stack Section */}
                    <div className="flex flex-col md:flex-row gap-20 justify-center items-center md:px-20">
                        <img src={techstack} width={350} alt="" />
                        <div>
                            <h6 className="text-2xl py-2">Our technology stack</h6>
                            <h3 className="text-5xl font-medium py-2">Tech stacks we use</h3>
                            <p className="text-2xl text-[#444444] py-2">At the heart of our innovative solutions lies a robust, cutting-edge technology stack that drives efficiency, reliability, and scalability. Each tool we use is carefully selected to meet the unique demands of modern businesses.</p>
                        </div>
                    </div>
                </div>
                {/* FAQ Section */}
                <h1 className="text-center font-semibold text-4xl">
                    Frequently Asked Questions
                </h1>
                <div className="flex flex-col md:flex-row gap-5 py-10 px-2 md:px-10">
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        <AccordionItem value="item-1" className="border px-5 rounded-[10px] bg-white">
                            <AccordionTrigger>What type of software service do you provide?</AccordionTrigger>
                            <AccordionContent>
                                We offer end-to-end solutions including custom software development, API development, SDK integration, and system integration.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border px-5 rounded-[10px] bg-white">
                            <AccordionTrigger>How do you ensure scalability and performance in software development?</AccordionTrigger>
                            <AccordionContent>
                                We use modern frameworks, clean code practices, and scalable architectures to ensure high performance and growth-ready solutions
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border px-5 rounded-[10px] bg-white">
                            <AccordionTrigger>What is AI Development and why it is important?</AccordionTrigger>
                            <AccordionContent>
                                API development enables seamless communication between systems, enhancing efficiency and integration capabilities.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        <AccordionItem value="item-1" className="border px-5 rounded-[10px] bg-white">
                            <AccordionTrigger>How do you approach system integration challenges?</AccordionTrigger>
                            <AccordionContent>
                                We identify compatibility issues, streamline workflows, and connect different systems for a unified experience.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border px-5 rounded-[10px] bg-white">
                            <AccordionTrigger>What industries do you serve with software development services?</AccordionTrigger>
                            <AccordionContent>
                                We cater to healthcare, finance, e-commerce, manufacturing, and various other industries
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border px-5 rounded-[10px] bg-white">
                            <AccordionTrigger>How do you approach system integration challenges?</AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fuga eaque non adipisci fugiat numquam rem iste natus quos sint.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

interface ServiceCardProps {
    service: {
        title: string;
        points: string[];
        image: string;
        contactLink: string;
    };
    isReversed: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isReversed }) => {
    return (
        <div className={`flex flex-col-reverse ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-5 md:gap-28 justify-center items-center`}>
            <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <div>
                    {service.points.map((point, index) => (
                        <p key={index}>{point}</p>
                    ))}
                </div>
                <a href={service.contactLink} className="text-[#058AFB] flex flex-row gap-1 justify-start items-center">
                    Contact Us <ContactUsSvg />
                </a>
            </div>
            <div className="p-5 rounded-[20px] bg-gradient-to-t from-[#AD9FEA] to-[#F69E9E]">
                <img
                    src={service.image}
                    width={500}
                    alt={service.title}
                    className="transform transition-all duration-300 hover:scale-105 rounded-[20px]"
                />
            </div>
        </div>
    );
};

export const ContactUsSvg: React.FC = () => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="30" height="30" fill="url(#pattern0_238_88)" />
            <defs>
                <pattern
                    id="pattern0_238_88"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_238_88" transform="scale(0.02)" />
                </pattern>
                <image
                    id="image0_238_88"
                    width="50"
                    height="50"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVR4nO3YMQrCMBTG8QdJWt1FFwv1IroKrl5IQdqkncRT6JkEDyFG3hsiHVqcHKUJ3w86ZfqTNmlCBAAAAADwT9ryRju+GSsXOoUFxSivfGkce+MkdI92cp+0oaDYZLXs+4ioY6Z1WBrLzyRiVCM7Y/mdRoyT7fe3MsRYfuSNX1FMFGJGCjMT42pGbZhRCjHGypGSCHFyoFioFF4t9WtPqXxJMVCIGAnMxFgk8Rs/aUORxMEqS+Wom3eXD5ZfUUf0dMNr7fhqrJypCfNhAAAAAACARuADtjKTOOlqukEAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    );
};