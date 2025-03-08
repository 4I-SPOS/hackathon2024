"use client"

import {Card, Image as HeroUIImage} from "@heroui/react";
import {CardBody, CardHeader} from "@heroui/card";
import Image from "next/image";
import {useRouter} from "next/navigation";

export function CategoryList(props: {categories: { name: string, image: string}[] }) {
    const router = useRouter();

    return(
        <div className="w-max grid grid-cols-4 p-10 gap-5">
            {
                props.categories.map((category: {name: string, image: string}, idx: number) => (
                    <div className="w-max" key={idx}>
                        <Card className="w-max" isPressable onPress={() => router.push(`/guides/${category.name}`)}>
                            <CardBody className="pt-0 w-max" style={{ margin: "0", padding: "0", gap: "0" }}>
                                <div className="w-max flex flex-row justify-between items-center justify-items-center align-middle gap-2">
                                    <Image src={category.image} alt={category.name} height={0}
                                           width={150}
                                           style={{ height: "200px", width: "auto" }}
                                    />

                                    <div className="flex flex-col mx-6">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col gap-0 w-full">
                                                <h4 className="font-bold text-xl">
                                                    {category.name}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
}