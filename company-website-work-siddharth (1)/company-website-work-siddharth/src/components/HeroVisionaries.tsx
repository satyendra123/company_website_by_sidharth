import herovisionaries from "@/assets/herovisionaries.png"
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { Card, CardContent } from "./ui/card";

import NexaImg from "@/assets/about/OurClientImages/nexa_logo.png";
import TataImg from "@/assets/about/OurClientImages/tata_logo.png";
import DaloopalImg from "@/assets/about/OurClientImages/daloopa_logo.jpg";
import HeroImg from "@/assets/about/OurClientImages/hero_logo.png";
import LnTImg from "@/assets/about/OurClientImages/LnT_logo.png";
import BarcoImg from "@/assets/about/OurClientImages/Barco_logo2.png";
import TechMahindraImg from "@/assets/about/OurClientImages/Tech_mahindra_logo2.png";
import ContinentalImg from "@/assets/about/OurClientImages/continental_logo.webp";
import DensoImg from "@/assets/about/OurClientImages/denso_logo.png";
import HyundaiImg from "@/assets/about/OurClientImages/hyundai_logo.png";
import SuzukiImg from "@/assets/about/OurClientImages/suzuki_logo.png";
import OmexeImg from "@/assets/about/OurClientImages/omaxe_logo.png";

import OPGCImg from "@/assets/about/OurClientImages/opgc_logo.png";
import IOCLImg from "@/assets/about/OurClientImages/indianiol_logo.webp";
import SkymarkImg from "@/assets/about/OurClientImages/skymark_logo.png";
import ChetuImg from "@/assets/about/OurClientImages/chetu_logo.jpg";
import AcediaImg from "@/assets/about/OurClientImages/acedia_logo.png";
import JBMImg from "@/assets/about/OurClientImages/jbm_logo.png";
import JKCCImg from "@/assets/about/OurClientImages/jkcc_logo.png";
import APLImg from "@/assets/about/OurClientImages/aplapollo_logo.png";
import HoneywellImg from "@/assets/about/OurClientImages/honeywell_logo.jpg";
import PGIImg from "@/assets/about/OurClientImages/pgichandigarh_logo.jpg";
import TSOilImg from "@/assets/about/OurClientImages/ts_oil_logo.jpg";

import ShreeImg from "@/assets/about/OurClientImages/shreecement_logo.png";
import BirlaImg from "@/assets/about/OurClientImages/birlacement_logo.png";
import UITImg from "@/assets/about/OurClientImages/uitkota_logo.jpg";
import IITDelhiImg from "@/assets/about/OurClientImages/iitdelhi_logo.png";
import IITKanpurImg from "@/assets/about/OurClientImages/iitkanpur_logo.png";
import PCAImg from "@/assets/about/OurClientImages/pca_logo.png";
import AxisImg from "@/assets/about/OurClientImages/axisbank_logo.png";
import JKBankImg from "@/assets/about/OurClientImages/jkbank_logo.png";
import HolidayInnImg from "@/assets/about/OurClientImages/holidayInn_logo.webp";
import NielitImg from "@/assets/about/OurClientImages/nielit_logo.jpg";
import LybrateImg from "@/assets/about/OurClientImages/lybrate_logo.jpg";

const reviews = [
    { name: "Nexa", img: NexaImg },
    { name: "Tata", img: TataImg },
    { name: "Daloopa", img: DaloopalImg },
    { name: "Hero", img: HeroImg },
    { name: "L&T", img: LnTImg },
    { name: "Barco", img: BarcoImg },
    { name: "Tech Mahindra", img: TechMahindraImg },
    { name: "Continental", img: ContinentalImg },
    { name: "Denso", img: DensoImg },
    { name: "Hyundai", img: HyundaiImg },
    { name: "Suzuki", img: SuzukiImg },
    { name: "Omaxe", img: OmexeImg },
    { name: "OPGC", img: OPGCImg },
    { name: "IOCL", img: IOCLImg },
    { name: "Skymark", img: SkymarkImg },
    { name: "Chetu", img: ChetuImg },
    { name: "Acedia", img: AcediaImg },
    { name: "JBM", img: JBMImg },
    { name: "JK Cement", img: JKCCImg },
    { name: "APL Apollo", img: APLImg },
    { name: "Honeywell", img: HoneywellImg },
    { name: "PGI Chandigarh", img: PGIImg },
    { name: "TS Oil", img: TSOilImg },
    { name: "Shree Cement", img: ShreeImg },
    { name: "Birla Cement", img: BirlaImg },
    { name: "UIT Kota", img: UITImg },
    { name: "IIT Delhi", img: IITDelhiImg },
    { name: "IIT Kanpur", img: IITKanpurImg },
    { name: "PCA", img: PCAImg },
    { name: "Axis Bank", img: AxisImg },
    { name: "JK Bank", img: JKBankImg },
    { name: "Holiday Inn", img: HolidayInnImg },
    { name: "NIELIT", img: NielitImg },
    { name: "Lybrate", img: LybrateImg },
];

const firstRow = reviews.slice(0, 12);  // First 12 items
const secondRow = reviews.slice(12, 24); // Next 12 items
const thirdRow = reviews.slice(24, 36); // Last 12 items


const ReviewCard = ({
    img,
    name,
}: {
    img: string;
    name: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-fit cursor-pointer overflow-hidden rounded-xl border bg-[#ffff]",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            )}
        >
            <div className="flex flex-row items-center gap-2 px-5 py-2 bg-white">
                <img width="42" height="32" className="w-10 h-10" alt="" src={img} />
                <figcaption className="text-sm font-medium ">
                    {name}
                </figcaption>
            </div>
        </figure>
    );
};

export const HeroVisionaries = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 border-none">
            <h3 className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#043796]  to-[#76b6f7] pb-5">
                OUR INCREDIBLE VISIONARIES
            </h3>
            <img className="w-10/12" src={herovisionaries} alt="" />
            <div className="w-screen flex flex-col md:flex-row gap-8 items-center justify-center">
                <Card className="rounded-xl w-11/12 md:w-4/12 md:ml-10 py-10 overflow-hidden shadow-lg">
                    <CardContent className="pt-6 text-lg">
                        Our clients are the cornerstone of our success, driving our innovation and commitment. your trust drives our innovation, and your satisfaction defines our success.
                    </CardContent>
                </Card>
                <div className="relative flex h-[500px] w-11/12 md:w-3/6 flex-col items-center justify-center overflow-hidden">
                    <Marquee className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse className="[--duration:20s]">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <Marquee className="[--duration:20s]">
                        {thirdRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}