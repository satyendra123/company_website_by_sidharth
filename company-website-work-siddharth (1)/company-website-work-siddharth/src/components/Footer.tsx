import { MailOpen, MapPin, Phone } from "lucide-react";
import LogoIcon from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#151414] text-white py-10 px-5 md:px-40">
      <section className="grid grid-rows-3 md:grid-cols-3 justify-center py-10  px-6 gap-2 md:gap-0">
        <div className="flex flex-row items-center md:justify-center gap-2 row-span-3">
          <MapPin size={50} color="#048afb" />
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl">Find us</h3>
            <p className="opacity-60 w-11/12">D 148, EPIP, Kasna, Surajpur Site V,
              Greater Noida, Uttar Pradesh, 201310</p>
          </div>
        </div>
        <div className="flex flex-row items-center md:justify-center gap-2 row-span-3">
          <Phone size={30} color="#048afb" />
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl">Call us</h3>
            <p className="opacity-60">+91 99991 26882</p>
          </div>
        </div>
        <div className="flex flex-row items-center md:justify-center gap-2 row-span-3">
          <MailOpen size={30} color="#048afb" />
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl">Mail us</h3>
            <p className="opacity-60">digital@houstonsystem.com</p>
          </div>
        </div>
      </section>
      <section className="container border-t border-[#2d2d2d] py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <img src={LogoIcon} alt="" />
          </a>
          <p className="opacity-60 pt-1 md:pt-3">Houston Systems Pvt. Ltd. delivers reliable security and access solutions, prioritizing safety and meeting the evolving needs of clients with a proven track record.</p>
        </div>
        <div className="flex flex-col col-span-2 gap-2">
          <h3 className="font-bold border-b-2 border-[#048afb] w-fit text-2xl">Useful Links</h3>
          <div className="grid grid-cols-2 gap-5 underline pt-1 md:pt-3">
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Home
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Contact
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="/about"
                className="opacity-60 hover:opacity-100"
              >
                About Us
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Latest Blog
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Product
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Solution
              </a>
            </div>
            <div>
              <a
                rel="noreferrer noopener"
                href="#"
                className="opacity-60 hover:opacity-100"
              >
                Services
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-2">
          <h3 className="font-bold  border-b-2 border-[#048afb] w-fit text-2xl">Subscribe</h3>
          <div className="pt-1 md:pt-3">
            <p className="opacity-60">
              Don't miss to subscribing our new feeds, kindly fill the form below.
            </p>
          </div>
          <div className="flex flex-row gap-0">
            <input className="bg-[#2e2e2e] p-4 px-5" type="email" name="" id="" placeholder="Email Address" />
            <input type="submit" value="" />
          </div>
        </div>
      </section>
      <section className="container pb-14 text-center">
        <h3>
          Copyright © 2024, All Right Reserved: <a href="" className="text-[#048afb]">Houston Systems Pvt. Ltd.</a>
        </h3>
      </section>
    </footer>
  );
};
