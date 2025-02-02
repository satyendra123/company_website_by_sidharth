import { Product as ProductType } from "@/components/Product";
import {
    Boombarriers,
    Anprcameras,
    Axlebreakers,
    Baggagescanners,
    Bollards,
    Crashratedbarriers,
    Dfmds,
    Droparmbarriers,
    Flapbarieers,
    Fullheightturnstiles,
    Ptypebarriers,
    Roadblockers,
    Shutdoormotors,
    Slideflaps,
    Slidinggateoperators,
    Swingflaps,
    Swinggateoperators,
    Tripodturnstiles,
    Tripodturnstiles2,
    Tyrekillers,
    Uvss
} from "@/data/products";

import boombarrierbanner from "@/assets/products/boombarieerbanner.png"
import flapbarrierbanner from "@/assets/products/flapbarieerbanner.png"
import tripodturnstilebanner from "@/assets/products/tripodturnstilebanner.png"
import tripodturnstile2banner from "@/assets/products/tripodeturnstile2banner.png"
import baggagebanner from "@/assets/products/baggagescannerbanner.png"
import fullheightturnstilebanner from "@/assets/products/fullheightturnstilebanner.png"
import sliderflapbanner from "@/assets/products/sliderflapbanner.png"
import bollardbanner from "@/assets/products/bollardbanner.png"
import slidinggateoperatorbanner from "@/assets/products/slidinggatebanner.png"
import swinggateoperatorbanner from "@/assets/products/swinggatebanner.png"
import shutdoorbanner from "@/assets/products/shutterdoormotorbanner.png"
import anprbanner from "@/assets/products/anprbanner.png"
import dfmdbanner from "@/assets/products/dfmdbanner.png"
import swingflapbanner from "@/assets/products/swingflapbanner.png"
import roadblockerbanner from "@/assets/products/roadbanner.png"
import tyrekillerbanner from "@/assets/products/tyrekillerbanner.png"
import axlebreakerbanner from "@/assets/products/axelbanner.png"
import crashratedbanner from "@/assets/products/crashbanner.png"
import ptypebanner from "@/assets/products/ptypebanner.png"
import uvssbanner from "@/assets/products/uvssbanner.png"


export const productbanners: any = {
    boombarriers: boombarrierbanner,
    flapbarriers: flapbarrierbanner,
    tripodturnstiles: tripodturnstilebanner,
    tripodturnstiles2: tripodturnstile2banner,
    baggagescanners: baggagebanner,
    fullheightturnstiles: fullheightturnstilebanner,
    slideflaps: sliderflapbanner,
    bollards: bollardbanner,
    slidinggateoperators: slidinggateoperatorbanner,
    swinggateoperators: swinggateoperatorbanner,
    shutdoormotors: shutdoorbanner,
    anprcameras: anprbanner,
    dfmds: dfmdbanner,
    swingflaps: swingflapbanner,
    roadblockers: roadblockerbanner,
    tyrekillers: tyrekillerbanner,
    axlebreakers: axlebreakerbanner,
    crashratedbarriers: crashratedbanner,
    ptypebarriers: ptypebanner,
    droparmbarriers: ptypebanner,
    uvss: uvssbanner
} 

const productMap: any = {
    boombarriers: Boombarriers,
    anprcameras: Anprcameras,
    axlebreakers: Axlebreakers,
    baggagescanners: Baggagescanners,
    bollards: Bollards,
    crashratedbarriers: Crashratedbarriers,
    dfmds: Dfmds,
    droparmbarriers: Droparmbarriers,
    flapbarriers: Flapbarieers,
    fullheightturnstiles: Fullheightturnstiles,
    ptypebarriers: Ptypebarriers,
    roadblockers: Roadblockers,
    shutdoormotors: Shutdoormotors,
    slideflaps: Slideflaps,
    slidinggateoperators: Slidinggateoperators,
    swingflaps: Swingflaps,
    swinggateoperators: Swinggateoperators,
    tripodturnstiles: Tripodturnstiles,
    tripodturnstiles2: Tripodturnstiles2,
    tyrekillers: Tyrekillers,
    uvss: Uvss
};

export function Product({ productname }: { productname: string }) {
    const ProductComponent = productMap[productname];
    console.log(ProductComponent)
    return (
        <section className="flex flex-col items-center gap-10 pb-10">
            {/* Banner Image */}
            <div className="w-full h-fit relative">
                <img
                    src={productbanners[productname]}
                    className="w-full h-full object-cover"
                    alt="banner image"
                />
            </div>
            <ProductType products={ProductComponent} />
        </section>
    );
}

