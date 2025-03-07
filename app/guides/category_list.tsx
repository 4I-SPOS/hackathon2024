"use client"

import {Card, Image as HeroUIImage} from "@heroui/react";
import {CardBody, CardHeader} from "@heroui/card";
import Image from "next/image";
import {useRouter} from "next/navigation";

export function CategoryList(props: {categories: { name: string, image: string}[] }) {
    const router = useRouter();

    return(
        <div className="w-full grid grid-cols-4 p-10 gap-5">
            {
                props.categories.map((category: {name: string, image: string}, idx: number) => (
                    <div className="h-full" key={idx}>
                        <Card className="h-full" isPressable onPress={() => router.push(`/guides/${category.name}`)}>
                            <CardBody className="pt-0 h-full" style={{ margin: "0", padding: "0", gap: "0" }}>
                                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center h-full">
                                    <div className="relative col-span-6 md:col-span-4 h-full">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={200}
                                            height={350}
                                        >
                                        </Image>
                                    </div>

                                    <div className="flex flex-col col-span-6 md:col-span-8">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col gap-0 w-full">
                                                <h4 className="font-bold">
                                                    {category.name}
                                                </h4>
                                                <p className="text-sm">
                                                    jeee popisek :3
                                                </p>
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