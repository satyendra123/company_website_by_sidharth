import img1 from "@/assets/home/IOT.png"
import img2 from "@/assets/home/E-TICKETING.png"
import img3 from "@/assets/home/TOLL1.png"
import img4 from "@/assets/home/PARKING-MANAGEMENT2.png"
import img5 from "@/assets/home/PGS.png"
export const HeroSolutionGrid = () => {
    return (
        <section >
            <div className="flex flex-col items-center justify-center py-10 gap-2">
                <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#043796]  to-[#76b6f7]">SOLUTIONS</h3>
                <p className="text-3xl font-serif font-semibold text-center">We Are <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#043796]  to-[#76b6f7]">Dedicated</span> To Serve You All Time</p>
                <p className="text-3xl font-serif font-semibold w-11/12 text-center">Empower your business with our dynamic suite of innovative solutions</p>
            </div>
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-lg px-4 md:px-10">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 xl:gap-5">
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:row-span-2 md:h-full hover:shadow-2xl">
                            <img src={img1} loading="lazy" alt="IOT" className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110" />
                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                IOT Solution
                            </span>
                        </a>
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-56 hover:shadow-2xl">
                            <img src={img2} loading="lazy" alt="E-Ticketing" className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110" />
                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                E-Ticketing
                            </span>
                        </a>
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg  md:h-36 hover:shadow-2xl">
                            <img src={img3} loading="lazy" alt="Toll" className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110" />
                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Toll
                            </span>
                        </a>
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:row-span-2 md:h-full hover:shadow-2xl">
                            <img src={img4} loading="lazy" alt="PMS" className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110" />
                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Parking Management
                            </span>
                        </a>
                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-56 hover:shadow-2xl">
                            <img src={img5} loading="lazy" alt="PGS" className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110" />
                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                Parking Guidance
                            </span>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}