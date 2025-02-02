import { Solution as SolutionType } from "@/components/Solution"
import {
Parkingguidancesystem,
Parkingmanagementsystem,
Visitormanagementsystem,
Tollmanagementsolution,
Masstransitfarecollectionsystem,
Trafficmanagementsystem,
Queuemanagementsystem
} from "@/data/solutions"

const solutionMap: any = {
    parkingguidancesystem: Parkingguidancesystem,
    parkingmanagementsystem: Parkingmanagementsystem,
    visitormanagementsystem: Visitormanagementsystem,
    tollmanagementsolution: Tollmanagementsolution,
    masstransitfarecollectionsystem: Masstransitfarecollectionsystem,
    trafficmanagementsystem: Trafficmanagementsystem,
    queuemanagementsystem: Queuemanagementsystem
}

export const Solution = ({ solutionname }: { solutionname: string }) => {
    const SolutionComponent = solutionMap[solutionname];
    return (
        <section>
            <SolutionType solution={SolutionComponent} />
        </section>
    )
}