import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu, PhoneCallIcon } from "lucide-react";
import LogoIcon from "../assets/logo.png";

interface RouteProps {
  href: string;
  label: string;
}

interface NavProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "HOUSYS",
  },
  {
    href: "/product",
    label: "Products",
  },
  {
    href: "/solution",
    label: "Solutions",
  },
  {
    href: "/ITService",
    label: "IT Services",
  },
];

const solutionDropdownItems: NavProps[] = [
  {
    href: "/solution/parkingguidancesystem",
    label: "Parking Guidance System"
  },
  {
    href: "/solution/parkingmanagementsystem",
    label: "Parking Management System"
  },
  {
    href: "/solution/visitormanagementsystem",
    label: "Visitor Management System"
  },
  {
    href: "/solution/tollmanagementsolution",
    label: "Toll Management Solution"
  },
  {
    href: "/solution/masstransitfarecollectionsystem",
    label: "Mass Transit Fare Collection Solution"
  },
  {
    href: "/solution/trafficmanagementsystem",
    label: "Traffic Management System"
  },
  {
    href: "/solution/queuemanagementsystem",
    label: "Queue Management System"
  }
];

const servicesDropdownItems: NavProps[] = [
  {
    href: "/service/softwaredevelopment",
    label: "Software Development"
  },
  {
    href: "/service/cloudservices",
    label: "Cloud Services"
  },
  {
    href: "/service/automation",
    label: "Automation"
  },
  {
    href: "/service/securitysolution",
    label: "Security Solution"
  },
  {
    href: "/service/development",
    label: "Development"
  },
  {
    href: "/service/consultingandservices",
    label: "Consulting and Services"
  },
  {
    href: "/service/aivision",
    label: "AI Vision"
  }
];

const productDropdownItems: NavProps[] = [
  {
    href: "/products/boombarriers",
    label: "Boom Barriers"
  },
  {
    href: "/products/flapbarriers",
    label: "Flap Barriers"
  },
  {
    href: "/products/tripodturnstiles",
    label: "Tripod Turnstiles"
  },
  {
    href: "/products/tripodturnstiles2",
    label: "Tripod Turnstiles 2"
  },
  {
    href: "/products/baggagescanners",
    label: "Baggage Scanners"
  },
  {
    href: "/products/fullheightturnstiles",
    label: "Full Height Turnstiles"
  },
  {
    href: "/products/slideflaps",
    label: "Slide Flaps"
  },
  {
    href: "/products/bollards",
    label: "Bollards"
  },
  {
    href: "/products/slidinggateoperators",
    label: "Sliding Gate Operators"
  },
  {
    href: "/products/swinggateoperators",
    label: "Swing Gate Operators"
  },
  {
    href: "/products/shutdoormotors",
    label: "Shut Door Motors"
  },
  {
    href: "/products/anprcameras",
    label: "ANPR Cameras"
  },
  {
    href: "/products/dfmds",
    label: "DFMD"
  },
  {
    href: "/products/swingflaps",
    label: "Swing Flaps"
  },
  {
    href: "/products/roadblockers",
    label: "Road Blockers"
  },
  {
    href: "/products/tyrekillers",
    label: "Tyre Killers"
  },
  {
    href: "/products/axlebreakers",
    label: "Axle Breakers"
  },
  {
    href: "/products/crashratedbarriers",
    label: "Crash Rated Barriers"
  },
  {
    href: "/products/ptypebarriers",
    label: "P-Type Barriers"
  },
  {
    href: "/products/droparmbarriers",
    label: "Drop Arm Barriers"
  },
  {
    href: "/products/uvss",
    label: "UVSS"
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showSolutionDropdown, setShowSolutionDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  return (
    <header className="py-10 top-0 z-50 w-full bg-white">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className=" h-14 w-full flex flex-row gap-40 md:gap-20 xl:gap-52">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <img src={LogoIcon} alt="Logo" />
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex lg:hidden h-5 w-5">
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white">
                <SheetHeader>
                  <a
                    rel="noreferrer noopener"
                    href="/"
                    className="ml-2 font-bold text-xl flex"
                  >
                    <img src={LogoIcon} alt="Logo" />
                  </a>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    label === "Products" ? (
                      <Dropdown
                        key={label}
                        label={label}
                        items={productDropdownItems}
                        showDropdown={showProductDropdown}
                        setShowDropdown={setShowProductDropdown}
                      />
                    ) : label === "Solutions" ? (
                      <Dropdown
                        key={label}
                        label={label}
                        items={solutionDropdownItems}
                        showDropdown={showSolutionDropdown}
                        setShowDropdown={setShowSolutionDropdown}
                        className="grid-cols-1"
                      />
                    ) : label === "IT Services" ? (
                      <Dropdown
                        key={label}
                        label={label}
                        items={servicesDropdownItems}
                        showDropdown={showServiceDropdown}
                        setShowDropdown={setShowServiceDropdown}
                        className="grid-cols-1"
                      />
                    ) : (
                      <a
                        rel="noreferrer noopener"
                        key={label}
                        href={href}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        {label}
                      </a>
                    )
                  ))}
                  <a
                    href="/contact"
                    className="flex flex-row gap-2 items-center justify-center bg-blue-600 p-5 rounded-full text-white"
                  >
                    Contact Us <PhoneCallIcon size={14} />
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden lg:flex flex-row items-center gap-2">
            {routeList.map(({ href, label }) => (
              label === "Products" ? (
                <Dropdown
                  key={label}
                  label={label}
                  items={productDropdownItems}
                  showDropdown={showProductDropdown}
                  setShowDropdown={setShowProductDropdown}
                  className="grid-cols-3 grid-rows-7"
                />
              ) : label === "Solutions" ? (
                <Dropdown
                  key={label}
                  label={label}
                  items={solutionDropdownItems}
                  showDropdown={showSolutionDropdown}
                  setShowDropdown={setShowSolutionDropdown}
                  className="grid-rows-1"
                />
              ) : label === "IT Services" ? (
                <Dropdown
                  key={label}
                  label={label}
                  items={servicesDropdownItems}
                  showDropdown={showServiceDropdown}
                  setShowDropdown={setShowServiceDropdown}
                  className="grid-cols-1"
                />
              ) : (
                <a
                  rel="noreferrer noopener"
                  key={label}
                  href={href}
                  className={buttonVariants({ variant: "ghost" })}
                >
                  {label}
                </a>
              )
            ))}
          </nav>
          <a
            href="/contact"
            className="hidden lg:flex hover:cursor-pointer flex-row gap-2 items-center justify-center bg-blue-600 p-5 rounded-full text-white"
          >
            Contact Us <PhoneCallIcon size={14} />
          </a>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

interface DropdownProps {
  label: string;
  items: NavProps[];
  showDropdown: boolean;
  setShowDropdown: (state: boolean) => void;
  className?: string;
}

const Dropdown = ({
  label,
  items,
  showDropdown,
  setShowDropdown,
  className = "",
}: DropdownProps) => (
  <div
    className="relative"
    onMouseEnter={() => setShowDropdown(true)}
    onMouseLeave={() => setShowDropdown(false)}
  >
    <button
      className={buttonVariants({ variant: "ghost" })}
      onClick={() => setShowDropdown(!showDropdown)}
    >
      {label}
    </button>
    {showDropdown && (
      <div
        className={`absolute top-full w-[200px] md:w-[600px] bg-white shadow-lg grid md:grid-cols-3 h-[500px] md:h-fit overflow-scroll rounded-[20px] p-2 z-[60] ${className}`}
      >
        {items.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            className="block px-4 py-2 hover:bg-gray-100 text-black"
          >
            {label}
          </a>
        ))}
      </div>
    )}
  </div>
);
