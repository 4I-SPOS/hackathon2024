"use client"

import dynamic from "next/dynamic";
import {ActivityDatasetsProps} from "@/app/activity/datasets";
const ActivityDatasets = dynamic(() => import("./datasets"), { ssr: false });

export default function DatasetsWrapper({ datoveSady }: ActivityDatasetsProps)
{
    return <ActivityDatasets datoveSady={datoveSady} />
}