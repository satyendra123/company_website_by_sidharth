import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import homebanner1 from "../assets/homebanner1.png";
import homebanner2 from "../assets/homebanner2.png";
import homebanner3 from "../assets/homebanner3.png";
import homebanner4 from "../assets/homebanner4.png";
import homebanner5 from "../assets/homebanner5.png";
import VerticalCarousel from "./ui/vertical-slider";
import { HeroCards } from "./HeroCards";
import { HeroSolutionGrid } from "./HeroSolutionGrid";
import { Testimonials } from "./Testimonials";
import { HeroVisionaries } from "./HeroVisionaries";
import { HeroContact } from "./HeroContact";
import { CaseStudies } from "./CaseStudies";


const homebanners = [
  homebanner1,
  homebanner2,
  homebanner3,
  homebanner4,
  homebanner5,
];

export const Hero = () => {
  return (
    <section className="place-items-center gap-10">
      <Carousel className="w-fit" >
        <CarouselContent>
          {homebanners.map((banner, index) => (
            <CarouselItem key={index} className="flex object-fill items-center justify-center">
              <img src={banner} className="w-screen" alt={`Banner ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <HeroCards />
      <VerticalCarousel />
      <HeroSolutionGrid />
      <CaseStudies />
      <Testimonials />
      <HeroVisionaries />
      <HeroContact />
    </section>
  );
};

