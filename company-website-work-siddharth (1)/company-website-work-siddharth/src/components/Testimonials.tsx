import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useState } from "react";
import client1 from "@/assets/about/TestimonialImages/anil_gupta.png";
import client2 from "@/assets/about/TestimonialImages/ap_dubey.png";
import client3 from "@/assets/about/TestimonialImages/athar_ali.png";
import client4 from "@/assets/about/TestimonialImages/jaipal.png";
import client5 from "@/assets/about/TestimonialImages/nishant.png";
import client6 from "@/assets/about/TestimonialImages/priyank.jpeg";
import client7 from "@/assets/about/TestimonialImages/rahul_jyoshi.jpeg";



interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: client1,
    name: "Anil Gupta",
    userName: "V Consultant",
    comment:
      "We have had the pleasure of partnering with Houston Systems Pvt. Ltd. for our security solutions needs, and the experience has been exceptional. What truly sets Houston Systems apart is not only their high-quality products but their commitment to guiding teams that may not be technically sound. Their team patiently walked us through every step of the process, providing detailed training and support, ensuring that even those with minimal technical expertise could confidently manage and operate the systems.",
  },
  {
    image: client2,
    name: "A P Dubey",
    userName: "GM, Rites",
    comment:
      "I had a great experience working with Houston Systems Pvt. Ltd. Their team is professional, knowledgeable, and very supportive. They provided us with high-quality security solutions that perfectly met our needs. The installation process was smooth, and their customer service is excellent. I highly recommend Houston Systems for anyone looking for reliable security products and services.",
  },
  {
    image: client3,
    name: "Athar Ali",
    userName: "WAC Consultant",
    comment:
      "Houston Systems guided us from start to finish, conducting thorough site visits, inspections, and project studies. Their hands-on support and expertise helped us implement a customized solution that exceeded our expectations. We’re extremely satisfied with their service and dedication.",
  },
  {
    image: client4,
    name: "Jaipal",
    userName: "PMC Head",
    comment:
      "Houston Systems delivered exactly what we needed. Their attention to detail—from initial state to final project delivery—was impressive. Their expertise made the entire process smooth and efficient. A trusted partner we would recommend without hesitation.",
  },
  {
    image: client5,
    name: "Nishant",
    userName: "Owner, Technify",
    comment:
      "Our experience with Houston Systems Pvt. Ltd. has been exceptional from start to finish. Their team not only understood our vision but also brought invaluable insights and suggestions to the table, which made our project even better than we had imagined.",
  },
  {
    image: client6,
    name: "Priyank",
    userName: "APL Apollo",
    comment:
      "Working with Houston Systems Pvt. Ltd. has been a transformative experience for our business. Their team’s expertise and innovative approach enabled us to streamline operations and enhance our tech infrastructure in ways we hadn’t imagined.Their insights helped us tackle complex challenges efficiently, giving us an edge in a competitive market.",
  },
  {
    image: client7,
    name: "Rahul Jyoshi",
    userName: "Tractable Architect",
    comment:
      "Houston Systems Pvt. Ltd. has been an absolute game-changer for our company! The level of customer service and support they offer is unmatched. Their team is always just a call or email away, ready to assist with any issue or question, no matter how big or small. They took the time to understand our needs and provided a customized solution that has greatly improved our daily operations.",
  },
];

export const Testimonials = () => {
  const [expandedComments, setExpandedComments] = useState<{ [key: string]: boolean }>({});

  const toggleReadMore = (userName: string) => {
    setExpandedComments((prevState) => ({
      ...prevState,
      [userName]: !prevState[userName],
    }));
  };

  const getCardColor = (index: number) => {
    const position = index % 3;
    switch (position) {
      case 0:
        return "bg-yellow-50";
      case 1:
        return "bg-blue-50";
      case 2:
        return "bg-pink-50";
      default:
        return "";
    }
  };

  return (
    <section id="testimonials" className="container py-24 sm:py-32 flex justify-center items-center flex-col gap-8">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-[#043796] to-[#76b6f7]">
        Customers Own Word
      </h2> */}

      <p className="text-2xl md:text-4xl font-bold pb-8 text-center w-3/4">
        Here's what some <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#043796] to-[#76b6f7]">
          awesome customers{" "}
        </span> we've worked with in the past have to say about us!

      </p>

      <Carousel className="w-full md:w-10/12">
        <CarouselContent className="-ml-4">
          {testimonials.map(({ image, name, userName, comment }: TestimonialProps, index) => {
            const isExpanded = expandedComments[userName];
            const shortComment = comment.slice(0, 100);
            const isCommentLong = comment.length > 100;

            return (
              <CarouselItem key={userName} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex flex-col items-center justify-center">
                <Card className={`h-[400px] w-[300px] rounded-xl ${getCardColor(index)} transition-colors duration-300`}>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Avatar className="h-20 w-20">
                      <AvatarImage alt="" src={image} />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{name}</CardTitle>
                      <CardDescription>{userName}</CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-base text-gray-700">
                      {isExpanded ? comment : `${shortComment}...`}
                      {isCommentLong && (
                        <button
                          onClick={() => toggleReadMore(userName)}
                          className="ml-2 text-blue-500 hover:underline"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </p>
                  </CardContent>

                  <CardFooter>⭐⭐⭐⭐⭐</CardFooter>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
};