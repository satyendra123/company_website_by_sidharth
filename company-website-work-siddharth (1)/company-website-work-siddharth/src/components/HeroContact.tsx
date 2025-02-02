import instagramlogo from "@/assets/instagram-logo.png";
import facebooklogo from "@/assets/facebook-logo.png";
import linkedinlogo from "@/assets/linkedin-logo.png";
import { MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/lib/utils";

export const HeroContact = () => {
  return (
    <section id="heroContactUs" className="w-full ">
       
      <div className="container relative mx-auto px-4 lg:px-6 py-10 lg:py-20">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          {/* Contact Info Card */}
          <div className="z-20 w-full max-w-md lg:max-w-sm bg-[#436a87] text-white p-8 lg:p-10 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold mb-6">Contact us!</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <PhoneCallIcon size={20} className="flex-shrink-0 mt-1" />
                <span>+91 99991 26882</span>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon size={20} className="flex-shrink-0 mt-1" />
                <span>digital@houstonsystem.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>D 148, EPIP, Kasna, Surajpur Site V, Greater Noida, Uttar Pradesh 201310</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <a href="" className="hover:opacity-80 transition-opacity">
                <img src={instagramlogo} alt="Instagram" width={40} height={40} />
              </a>
              <a href="" className="hover:opacity-80 transition-opacity">
                <img src={facebooklogo} alt="Facebook" width={40} height={40} />
              </a>
              <a href="" className="hover:opacity-80 transition-opacity">
                <img src={linkedinlogo} alt="LinkedIn" width={40} height={40} />
              </a>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="z-20 w-full max-w-xl bg-[#436a87] text-white  p-8 lg:p-10 rounded-xl shadow-lg">
            <h3 className="text-3xl font-semibold mb-6">Get in Touch!</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full border bg-transparent rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="product" className="block text-sm font-medium">
                    Product/Solution
                  </label>
                  <input
                    type="text"
                    id="product"
                    className="w-full border bg-transparent rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Product/Solution"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border bg-transparent rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border bg-transparent rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border bg-transparent rounded-lg p-2.5 resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-blue-500 text-white px-8 py-2.5 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};