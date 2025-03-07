"use client"

import {Card} from "@heroui/react";
import {CardBody} from "@heroui/card";
import Image from "next/image";
import {useRouter} from "next/navigation";

export function GuideList(props: {category: string, guides: { name: string, image: string}[] }) {
    const router = useRouter();

    console.log(props.category);

    return(
        <div className="w-full grid grid-cols-4 p-10 gap-5">
            {
                props.guides.map((guide: {name: string, image: string}, idx: number) => (
                    <div className="" key={idx}>
                        <Card className="h-full transition hover:scale-[1.02] hover:drop-shadow-xl" isPressable={true} fullWidth={true} onPress={() => { router.push(`/guides/${props.category}/${guide.name}`) }}>
                            <CardBody className="text-3xl flex-wrap h-full w-full flex flex-col justify-between items-center justify-items-center align-middle p-0" style={{ margin: "0", padding: "0", gap: "0" }}>
                                <Image
                                    src={guide.image}
                                    alt={guide.name}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto', margin: "0" }}
                                />
                                <span className="text-center text-balance w-full py-1 px-3 text-2xl">
                            <div className="font-bold">
                                {guide.name}
                            </div>
                        </span>
                            </CardBody>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
}