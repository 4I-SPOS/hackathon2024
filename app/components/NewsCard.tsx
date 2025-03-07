// components/NewsCard.tsx

import { Card, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from 'next/link'; // Import Next.js Link

interface NewsCardProps {
    imgSrc: string;
    title: string;
    description: string;
    link: string; // Include the link as a prop
}

export default function NewsCard({ imgSrc, title, description, link }: NewsCardProps) {
    return (
        <Link className="w-1/3 transition hover:scale-[1.02]" href={link} target="_blank" rel="noopener noreferrer" passHref>
            <Card style={{ cursor: 'pointer' }}>
                <Image src={imgSrc} className="aspect-square" fill={true} alt={title} />
                <CardFooter className="flex flex-col items-start text-black">
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="mt-3 text-neutral-500 line-clamp-2">{description}</p>
                </CardFooter>
            </Card>
        </Link>
    );
}
