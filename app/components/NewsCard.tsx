import { Card, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";


interface NewsCardProps {
    imgSrc: string;
    title: string,
    description: string
}

export default function NewsCard({ imgSrc, title, description }: NewsCardProps) {
    return (
        <Card>
            <Image src={imgSrc}></Image>
            <CardFooter className="flex flex-col items-start text-black">
                <h2 className="font-bold text-lg">{title}</h2>
                <p>{description}</p>
            </CardFooter>
        </Card>
    )
}