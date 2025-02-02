import { MailOpen, MapPin, Phone } from 'lucide-react';
import bannercontact from '../assets/homebanner5.png';
export const Contact = () => {
    return (
        <div>
            <div className="w-full h-fit relative">
                <img
                    src={bannercontact}
                    className="w-full h-full object-cover"
                    alt="banner image"
                />
            </div>
            <div className='px-20 py-10 flex flex-col items-center justify-center gap-10'>
                <h1 className='text-4xl font-semibold'>Contact Us</h1>
                <iframe
                    style={{ border: 0, width: "90%", height: "270px" }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.956152571729!2d77.53870917494895!3d28.420579893675065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef8e87db032f%3A0x1116a3f694e23418!2sHouston%20Systems%20Private%20Limited!5e0!3m2!1sen!2sin!4v1735762648113!5m2!1sen!2sin"
                    frameBorder="0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                />
                <div className="mb-4 flex flex-col md:flex-row gap-4 items-start justify-between w-11/12">
                    <section className="flex flex-col items-center px-6 gap-8">
                        <ul className="flex flex-col justify-between gap-8 w-full max-w-xl">
                            {/* Find Us */}
                            <li className="flex flex-row items-center gap-4">
                                <MapPin size={50} color="#048afb" />
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-2xl">Find us</h3>
                                    <p className="opacity-60">
                                        D 148, EPIP, Kasna, Surajpur Site V, Greater Noida, Uttar Pradesh, 201310
                                    </p>
                                </div>
                            </li>

                            {/* Call Us */}
                            <li className="flex flex-row items-center gap-4">
                                <Phone size={30} color="#048afb" />
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-2xl">Call us</h3>
                                    <p className="opacity-60">+91 99991 26882</p>
                                </div>
                            </li>

                            {/* Mail Us */}
                            <li className="flex flex-row items-center gap-4">
                                <MailOpen size={30} color="#048afb" />
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-2xl">Mail us</h3>
                                    <p className="opacity-60">digital@houstonsystem.com</p>
                                </div>
                            </li>
                        </ul>
                    </section>

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
                <section className="py-10 px-6 w-11/12">
                    <h2 className="text-4xl font-bold mb-6 text-center">Our global presence</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-between py-10">
                        {/* California */}
                        <div className="flex flex-col gap-1 bg-white p-4 rounded-[8px] shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 ">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} color="#000" />
                                <h3 className="font-bold text-lg">California, United States</h3>
                            </div>
                            <p>Alan Holmberg</p>
                            <a href="mailto:alan@houstonsystem.com" className="text-blue-600 underline">
                                alan@houstonsystem.com
                            </a>
                        </div>

                        {/* New York */}
                        {/* <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} color="#000" />
                                <h3 className="font-bold text-lg">New York, United States</h3>
                            </div>
                            <p>David Waller</p>
                            <a href="mailto:david@houstonsystem.com" className="text-blue-600 underline">
                                david@houstonsystem.com
                            </a>
                        </div> */}

                        {/* Illinois */}
                        {/* <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} color="#000" />
                                <h3 className="font-bold text-lg">Illinois, United States</h3>
                            </div>
                            <p>Steve Holmberg</p>
                            <a href="mailto:steve@houstonsystem.com" className="text-blue-600 underline">
                                steve@houstonsystem.com
                            </a>
                        </div> */}

                        {/* Germany */}
                        <div className="flex flex-col gap-1 bg-white p-4 rounded-[8px] shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 ">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} color="#000" />
                                <h3 className="font-bold text-lg">Germany</h3>
                            </div>
                            <p>Jane Henkemeier</p>
                            <a href="mailto:jane@houstonsystem.com" className="text-blue-600 underline">
                                jane@houstonsystem.com
                            </a>
                        </div>

                        {/* Australia */}
                        <div className="flex flex-col gap-1 bg-white p-4 rounded-[8px] shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105 ">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} color="#000" />
                                <h3 className="font-bold text-lg">Australia & New Zealand</h3>
                            </div>
                            <p>Ben Jones</p>
                            <a href="mailto:b.jones@houstonsystem.com" className="text-blue-600 underline">
                                b.jones@houstonsystem.com
                            </a>
                        </div>

                        {/* Middle East */}
                        {/* <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} color="#000" />
                                <h3 className="font-bold text-lg">Middle East</h3>
                            </div>
                            <p>Ivan Bernard</p>
                            <a href="mailto:i.bernard@houstonsystem.com" className="text-blue-600 underline">
                                i.bernard@houstonsystem.com
                            </a>
                        </div> */}

                        {/* United Kingdom */}
                        <div className="flex flex-col gap-1 bg-white p-4 rounded-[8px] shadow-md hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                            <div className="flex items-center gap-2">
                                <MapPin size={20} color="#000" />
                                <h3 className="font-bold text-lg">United Kingdom</h3>
                            </div>
                            <p>David Hutchinson</p>
                            <a href="mailto:dhutchinson@houstonsystem.com" className="text-blue-600 underline">
                                dhutchinson@houstonsystem.com
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}