import { Card, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";


interface NewsCardProps {
    imgSrc: string;
}

export default function NewsCard({ imgSrc }: NewsCardProps) {
    return (
        <Card>
            <Image src={imgSrc}></Image>
            <CardFooter className="flex flex-col items-start text-black">
                <h2 className="font-bold text-lg">Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec ipsum massa, ullamcorper in.</p>
            </CardFooter>
        </Card>
    )
}