import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import homecardmain from "../assets/homecardmain.png";
import herocard1 from "@/assets/home/herocard1.gif"
import herocard2 from "@/assets/home/herocard2.gif"
import herocard3 from "@/assets/home/herocard3.gif"
import herocard4 from "@/assets/home/herocard4.gif"
import herocard5 from "@/assets/home/herocard5.gif"
import herocard6 from "@/assets/home/herocard6.gif"

interface ProductCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const productCards: ProductCard[] = [
  {
    id: 1,
    title: "Automatic",
    subtitle: "Boom Barrier",
    description: "Houston Systems offers automatic boom barriers with advanced technology, ensuring seamless vehicle access control for secure premises.",
    image: herocard1
  },
  {
    id: 2,
    title: "Smart",
    subtitle: "Parking Solutions",
    description: "Intelligent parking management systems with real-time monitoring and automated vehicle guidance for optimal space utilization.",
    image: herocard2
  },
  {
    id: 3,
    title: "Access",
    subtitle: "Control Systems",
    description: "Advanced access control solutions with biometric integration and multi-factor authentication for enhanced security.",
    image: herocard3
  },
  {
    id: 4,
    title: "Vehicle",
    subtitle: "Detection Systems",
    description: "State-of-the-art vehicle detection technology using AI and machine learning for accurate identification and tracking.",
    image: herocard4
  },
  {
    id: 5,
    title: "Traffic",
    subtitle: "Management",
    description: "Comprehensive traffic management solutions for smooth flow and reduced congestion in high-traffic areas.",
    image: herocard5
  },
  {
    id: 6,
    title: "Security",
    subtitle: "Integration",
    description: "Seamless integration of security systems with existing infrastructure for comprehensive facility management.",
    image: herocard6
  }
];

export const HeroCards = () => {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="w-3/4 flex text-[#837f7d] text-3xl font-bold flex-col text-center justify-center py-10 hover:text-[#666361] transition-colors duration-300">
        We don't just build products but a promise: we craft peace
        of mind solutions, protecting what matters most to you.
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <Card className="rounded-xl w-11/12 md:w-3/12 h-fit md:ml-10 overflow-hidden shadow-lg">
          <CardHeader className="p-0 relative overflow-hidden group">
            <CardTitle>
              <img
                src={homecardmain}
                height={300}
                width={400}
                alt=""
                className="transform transition-transform duration-500 group-hover:scale-110"
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 text-[13px] transition-colors duration-300 hover:text-gray-900">
            At Houston Systems, trust is the foundation of everything we do. With over 10 years of experience,
            we have built a reputation for delivering high-quality security solutions that you can rely on.
            We prioritize excellence at every step, ensuring our solutions consistently exceed the highest
            standards of safety and performance.
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-y-4 gap-x-2 md:w-9/12">
          {productCards.map((card) => (
            <Card
              key={card.id}
              className="rounded-xl flex flex-row overflow-hidden w-auto h-auto 
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                hover:bg-gray-50 cursor-pointer group"
            >
              <div className="flex-grow">
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="italic group-hover:text-blue-400 transition-colors duration-300">
                    {card.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row text-[12px]">
                  <p className="group-hover:text-gray-900 transition-colors duration-300">
                    {card.description}
                  </p>
                </CardContent>
              </div>

              <img
                src={card.image}
                alt=""
                className="w-24 h-full object-fill"
              />

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};