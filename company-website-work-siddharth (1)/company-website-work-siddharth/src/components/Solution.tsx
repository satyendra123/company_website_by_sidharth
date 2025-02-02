import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import solutionlisticon1 from "@/assets/solutions/solutionlisticon1.png"
import solutionlisticon2 from "@/assets/solutions/solutionlisticon2.png"
import govtofindia from "@/assets/solutions/govtofindia.png"
import banner from "@/assets/solutions/carbanner.png"
import { useState } from "react";
import { SolutionProps } from "@/lib/types";

export function Solution({ solution }: SolutionProps) {
    const [activeSuperNav, setActiveSuperNav] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <img src={banner} className="w-full h-screen" alt="banner image" />
            <div className="mx-5 md:mx-20 px-5 md:px-20 flex flex-col gap-10 py-10">
                <div className="font-bold text-3xl text-center">{solution.header.heading}</div>
                <div className="flex flex-col md:flex-row gap-5">
                    <p className="md:w-1/2 text-xl text-start">
                        {solution.header.description}
                    </p>
                    <iframe
                        src={solution.video}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-[20px] border border-gray-300 shadow-md md:w-1/2 md:h-72"
                    ></iframe>
                </div>
            </div>

            <div className="mx-5 md:mx-20 px-5 md:px-20 py-10">
                {/* Super Nav Section */}
                {solution.navfirst && solution.navfirst.length === 3 && (
                    <div className="grid grid-cols-4 grid-rows-4 gap-4 mb-10">
                        {/* First Card */}
                        <div
                            onClick={() => {
                                setActiveSuperNav(0);
                                setActiveIndex(0); // Reset the navbarlist selection
                            }}
                            className={`col-span-4 md:col-span-2 md:row-span-4 cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-300 rounded-[20px] ${activeSuperNav === 0 ? "border-2 border-blue-500" : ""}`}
                        >
                            <Card className="h-full w-full rounded-[20px]">
                                <CardHeader>
                                    <h3 className="text-2xl">{solution.navfirst[0].heading}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg">{solution.navfirst[0].description}</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Second Card */}
                        <div
                            onClick={() => {
                                setActiveSuperNav(1);
                                setActiveIndex(0); // Reset the navbarlist selection
                            }}
                            className={`col-span-4 md:col-span-2 md:row-span-2 md:col-start-3 cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-300 rounded-[20px] ${activeSuperNav === 1 ? "border-2 border-blue-500" : ""}`}
                        >
                            <Card className="h-full w-full rounded-[20px]">
                                <CardHeader>
                                    <h3 className="text-2xl">{solution.navfirst[1].heading}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg">{solution.navfirst[1].description}</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Third Card */}
                        <div
                            onClick={() => {
                                setActiveSuperNav(2);
                                setActiveIndex(0); // Reset the navbarlist selection
                            }}
                            className={`col-span-4 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 cursor-pointer hover:shadow-xl hover:scale-105 transform transition-all duration-300 rounded-[20px] ${activeSuperNav === 2 ? "border-2 border-blue-500" : ""}`}
                        >
                            <Card className="h-full w-full rounded-[20px]">
                                <CardHeader>
                                    <h3 className="text-2xl">{solution.navfirst[2].heading}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-lg">{solution.navfirst[2].description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}

                {/* Super Nav Section excluding pms & pgs (No Apark, vpark, etc) */}
                {solution.navsecond && solution.navsecond.length === 4 && (
                    <div className="px-2 flex flex-col md:flex-row gap-2 justify-center items-center py-10">
                        {solution.navsecond?.map((item, index) => (
                            <Card key={index} className="bg-transparent border-none">
                                <img src={item.icon} className="pl-5" alt={"icon" + index} />
                                <CardContent>
                                    <h3 className="font-semibold">{item.details.heading}</h3>
                                    <p className="text-gray-700">{item.details.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-5">
                    {solution.navbarlist &&
                        solution.navbarlist?.map((navbarItem, index) => (
                            <Card
                                key={index}
                                onClick={() => setActiveIndex(index)} // Update state on card click
                                className={`cursor-pointer h-full w-full hover:shadow-xl hover:scale-105 transform transition-all duration-300 rounded-[20px] ${activeIndex === index ? "border-2 border-blue-500" : ""
                                    }`}
                            >
                                <CardHeader>
                                    <h3 className="text-2xl text-center">{navbarItem.label}</h3>
                                </CardHeader>
                            </Card>
                        ))}
                </div>
                <Carousel className="shadow-lg rounded-[20px] h-fit">
                        <CarouselContent className="-ml-0">
                            {solution.navbarlist &&
                                solution.navbarlist[activeIndex]?.data.map(
                                    (dataItem, dataIndex) => (
                                        <CarouselItem key={dataIndex} className="flex flex-col-reverse md:flex-row justify-evenly items-center p-10 bg-white rounded-[20px] w-8/12">
                                            <div className="flex flex-col gap-4 md:w-1/2">
                                                <h4 className="text-2xl font-medium">{dataItem.heading}</h4>
                                                <p className="text-lg">{dataItem.description}</p>
                                                <ul className="text-lg">
                                                    <li className="flex flex-row gap-2 items-center">
                                                        <img height={5} width={35} src={solutionlisticon1} alt="icon" />
                                                        {dataItem.list[0]}
                                                    </li>
                                                    <li className="flex flex-row gap-2 items-center">
                                                        <img height={5} width={35} src={solutionlisticon2} alt="icon" />
                                                        {dataItem.list[1]}
                                                    </li>
                                                </ul>
                                            </div>

                                            <img src={dataItem.image} alt="carousel item" className="h-44" />
                                        </CarouselItem>
                                    )
                                )}
                        </CarouselContent>
                    </Carousel>

                {/* Navbar and Carousel Section */}
                <div>
                    {/* Navbar Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 py-5">
                        {solution.navfirst &&
                            solution.navfirst[activeSuperNav]?.navbarlist?.map((navbarItem, index) => (
                                <Card
                                    key={index}
                                    onClick={() => setActiveIndex(index)} // Update state on card click
                                    className={`cursor-pointer h-full w-full hover:shadow-xl hover:scale-105 transform transition-all duration-300 rounded-[20px] ${activeIndex === index ? "border-2 border-blue-500" : ""
                                        }`}
                                >
                                    <CardHeader>
                                        <h3 className="text-2xl text-center">{navbarItem.label}</h3>
                                    </CardHeader>
                                </Card>
                            ))}
                    </div>

                    {/* Carousel Section */}
                    <Carousel className="shadow-lg rounded-[20px] h-fit">
                        <CarouselContent className="-ml-0">
                            {solution.navfirst &&
                                solution.navfirst[activeSuperNav]?.navbarlist[activeIndex]?.data.map(
                                    (dataItem, dataIndex) => (
                                        <CarouselItem key={dataIndex} className="flex flex-col-reverse md:flex-row justify-evenly items-center p-10 bg-white rounded-[20px] w-8/12">
                                            <div className="flex flex-col gap-4 md:w-1/2">
                                                <h4 className="text-2xl font-medium">{dataItem.heading}</h4>
                                                <p className="text-lg">{dataItem.description}</p>
                                                <ul className="text-lg">
                                                    <li className="flex flex-row gap-2 items-center">
                                                        <img height={5} width={35} src={solutionlisticon1} alt="icon" />
                                                        {dataItem.list[0]}
                                                    </li>
                                                    <li className="flex flex-row gap-2 items-center">
                                                        <img height={5} width={35} src={solutionlisticon2} alt="icon" />
                                                        {dataItem.list[1]}
                                                    </li>
                                                </ul>
                                            </div>

                                            <img src={dataItem.image} alt="carousel item" className="h-44" />
                                        </CarouselItem>
                                    )
                                )}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mx-20 md:px-20 py-5">
                <Card className="h-full md:w-4/12 hover:shadow-xl hover:scale-105 transform transition-all duration-300 rounded-[20px]">
                    <CardHeader>
                        <h3 className="text-2xl font-medium">{solution.bottomdata.details.heading}</h3>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">{solution.bottomdata.details.description}</p>
                    </CardContent>
                </Card>
                <img src={solution.bottomdata.image} className="hover:shadow-white hover:scale-105 transform transition-all duration-300 rounded-[20px] md:w-7/12" alt="" />
            </div>
            {solution.navfirst && solution.navfirst[activeIndex] && solution.navfirst[activeIndex].productitem && (
                <Carousel className="md:mx-20 overflow-hidden px-20 py-10">
                    <h3 className="text-3xl text-center font-bold">Products</h3>
                    <CarouselContent className="p-10">
                        {solution.navfirst[activeIndex].productitem.map((item, index) => (
                            <CarouselItem key={index} className="flex flex-col justify-center items-center basis-full md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transform transition-all duration-300 rounded-[20px]">
                                    <CardContent className="flex flex-col justify-center items-center gap-2">
                                        <img src={item.image} alt="carousel image" />
                                        <div className="">
                                            <p className="text-lg">{item.description}</p>
                                        </div>
                                        <div className="text-center">⭐⭐⭐⭐⭐</div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}
            {/* product items when not pgs or pms */}
            {solution.productitem && (
                <Carousel className="md:mx-20 overflow-hidden px-20 py-10">
                    <h3 className="text-3xl text-center font-bold">Products</h3>
                    <CarouselContent className="p-10">
                        {solution.productitem.map((item, index) => (
                            <CarouselItem key={index} className="flex flex-col justify-center items-center basis-full md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transform transition-all duration-300 rounded-[20px]">
                                    <CardContent className="flex flex-col justify-center items-center gap-2">
                                        <img src={item.image} alt="carousel image" />
                                        <div className="">
                                            <p className="text-lg">{item.description}</p>
                                        </div>
                                        <div className="text-center">⭐⭐⭐⭐⭐</div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}
            <div className="md:mx-20 px-5 md:px-20 py-10">
                <h3 className="text-3xl text-center font-bold py-5">Case Studies</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4">
                    {/* Large Card */}
                    <div className="col-span-1 md:col-span-2 md:row-span-4">
                        <Card
                            className="h-full hover:shadow-xl rounded-[20px]"
                            style={{
                                backgroundImage: `url(${govtofindia})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <CardHeader>
                                <h3 className="text-2xl font-bold">Government Institution</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg">
                                    Government sectors require robust security and efficient parking solutions
                                    to manage high visitor traffic, ensure perimeter safety, streamline vehicle
                                    access, and enhance overall operational efficiency and control.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                    {/* Supreme Court Card */}
                    <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3">
                        <Card className="h-full hover:shadow-xl rounded-[20px]">
                            <CardHeader>
                                <h3 className="text-2xl font-medium">Supreme Court of India</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg">The Supreme Court of India is the apex judicial authority in the country, handling sensitive legal matters.</p>
                            </CardContent>
                            <CardFooter>
                                <a className="py-2 px-4 bg-blue-600 hover:bg-blue-900 text-white rounded-[10px]">Read more</a>
                            </CardFooter>
                        </Card>
                    </div>
                    {/* Delhi High Court Card */}
                    <div className="col-span-1 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3">
                        <Card className="h-full hover:shadow-xl rounded-[20px]">
                            <CardHeader>
                                <h3 className="text-2xl font-medium">Delhi High Court</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg">The Delhi High Court is a prominent judicial institution, managing high volumes of visitors and staff daily.</p>
                            </CardContent>
                            <CardFooter>
                                <a className="py-2 px-4 bg-blue-600 hover:bg-blue-900 text-white rounded-[10px]">Read more</a>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="px-5 md:px-40 py-10 w-full">
                <h3 className="text-3xl text-center font-bold py-5">Get in Touch</h3>
                <form action="" className="flex flex-col gap-4 items-center justify-center w-full">
                    <div className="flex flex-col md:flex-row gap-2 items-start justify-between w-full">
                        <input type="text" className="border rounded-[8px] p-2 w-full" placeholder="Full Name" />
                        <input type="text" className="border rounded-[8px] p-2 w-full" placeholder="Product/Solution" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 items-start justify-between w-full">
                        <input type="text" className="border rounded-[8px] p-2 w-full md:w-1/2" placeholder="Email" />
                        <input type="text" className="border rounded-[8px] p-2 w-full md:w-1/2" placeholder="Mobile Number" />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-center w-full">
                        <textarea
                            name=""
                            id=""
                            placeholder="Message"
                            rows={6}
                            className="w-full border rounded-[8px] p-2 resize-none"
                        ></textarea>
                    </div>
                    <input type="submit" value="Submit" className="bg-blue-500 text-white text-base px-8 py-2 rounded-[8px]" />
                </form>
            </div>
        </>
    )
}

