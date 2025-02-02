import { ITService as ITServiceType } from "@/components/ITService"
import { 
    softwareDevelopment,
    cloudServices,
    automation,
    securitySolution,
    development,
    consolutingAndServices,
    aiVision } from "@/data/itservices";

const serviceMap: any = {
    softwaredevelopment: softwareDevelopment,
    cloudservices: cloudServices,
    automation: automation,
    securitysolution: securitySolution,
    development: development,
    consolutingandservices: consolutingAndServices,
    aivision: aiVision
}


export const ITService = ({ servicename }: { servicename: string }) => {
    const ServiceComponent = serviceMap[servicename][0];
    return (
        <section className="flex flex-col items-center gap-10 pb-10">
            <ITServiceType services={ServiceComponent} />
        </section>
    )
}