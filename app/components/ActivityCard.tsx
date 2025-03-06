import { Card } from "@heroui/react";
import Image from "next/image";

interface ActivityCardProps {
  imgSrc: string;
  title: string;
}

export default function ActivityCard({ imgSrc, title }: ActivityCardProps) {
  return (
    <Card className="relative w-[14rem] h-[20rem] cursor-pointer hover:scale-[1.03] transition duration-200">
      <Image
        src={imgSrc}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <h2 className="font-semibold text-white text-lg text-center">{title}</h2>
      </div>
    </Card>
  );
}
