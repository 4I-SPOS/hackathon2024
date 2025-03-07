"use client";

import {Card} from "@heroui/react";
import {CardBody} from "@heroui/card";
import Image from 'next/image';

import gardeningImg from "@/app/assets/clubs/clubs_gardening.jpg";
import tourismImg from "@/app/assets/clubs/clubs_tourists.jpg";
import photographyImg from "@/app/assets/clubs/clubs_photographers.jpg";
import beekeeperImg from "@/app/assets/clubs/clubs_beekeepers.jpg";
import farmerImg from "@/app/assets/clubs/clubs_farmers.jpg";
import seniorsImg from "@/app/assets/clubs/clubs_seniors.png";
import fishingImg from "@/app/assets/clubs/clubs_fishing.jpg";
import sokolImg from "@/app/assets/clubs/clubs_sokol.jpg";
import huntingImg from "@/app/assets/clubs/clubs_hunting.jpg";
import postStampsImg from "@/app/assets/clubs/clubs_post_stamps.jpg";

import {useRouter} from "next/navigation";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

type ClubCard = {
    name: string;
    description: string;
    url: string;
    image: StaticImport;
}
const clubs: ClubCard[] = [
    {
        name: "Český zahrádkářský svaz",
        description: "Organizace, která sdružuje zpopisek zahradkaruahrádkáře, amatérské pěstitele a všechny, kteří mají zájem o zahradničení, přírodu a ekologii",
        url: "https://www.zahradkari.cz/",
        image: gardeningImg
    },
    {
        name: "Klub českých turistů",
        description: "Největší turistická organizace v České republice, která se zaměřuje na podporu pěší turistiky, cykloturistiky a dalších outdoorových aktivit",
        url: "https://kct.cz/",
        image: tourismImg
    },
    {
        name: "Český svaz chovatelů",
        description: "Organizace, která sdružuje chovatele zvířat v České republice. Podporuje chovatelství ve všech jeho formách, a to jak u domácích, tak u exotických zvířat",
        url: "https://www.cschdz.eu/",
        image: farmerImg
    },
    {
        name: "Český svaz včelařů",
        description: "Organizace, která sdružuje včelaře a podporuje rozvoj včelařství v České republice. Svaz se zaměřuje na ochranu včel, zajištění kvalitních produktů z včelího medu",
        url: "https://www.vcelarstvi.cz/",
        image: beekeeperImg
    },
    {
        name: "Svaz důchodců České republiky",
        description: "Organizace, která se zaměřuje na podporu a zajištění práv a zájmů seniorů v ČR. Sdružuje důchodce a pomáhá jim ve zlepšení kvality života",
        url: "https://sdct.cz/ ",
        image: seniorsImg
    },
    {
        name: "Rybářský svaz",
        description: "Organizace, která sdružuje amatérské rybáře a podporuje rozvoj rybářství v České republice. Cílem svazu je ochrana vodních ekosystémů, regulace rybolovu a podpora chovatelství ryb",
        url: "https://www.rybsvaz.cz/",
        image: fishingImg
    },
    {
        name: "Sokol",
        description: "Sportovní a tělovýchovná organizace s dlouhou tradicí v České republice. Sdružuje jednotlivce všech věkových kategorií, kteří se zaměřují na zlepšení fyzické kondice a zdraví prostřednictvím sportu",
        url: "https://www.sokol.eu/",
        image: sokolImg
    },
    {
        name: "Českomoravský myslivecký svaz",
        description: "Organizace, která sdružuje myslivce a chovatele zvěře v České republice. Cílem svazu je ochrana přírody, udržitelný management populací zvěře a podpora etického lovu",
        url: "https://www.cmmj.cz/",
        image: huntingImg
    },
    {
        name: "Svaz českých filatelistů",
        description: "Organizace, která sdružuje sběratele poštovních známek a filatelisty v České republice. Podporuje sběratelskou vášeň, organizuje výstavy, soutěže a odborné semináře",
        url: "https://svazfilatelistu.cz/",
        image: postStampsImg
    }
]

export default function Home()
{
    const router = useRouter();

    return(
        <div className="p-10">
            <div className="flex flex-row justify-center items-center justify-items-center align-middle text-5xl font-bold my-10">
                Kluby
            </div>
            <div className="w-full grid grid-cols-4 p-10 gap-5">
                {
                    clubs.map((club: ClubCard, idx: number) => (
                        <div className="" key={idx}>
                            <Card className="h-full hover:scale-[1.02] transition hover:drop-shadow-xl" isPressable={true} fullWidth={true} onPress={() => { window.open(club.url, '_blank'); }}>
                                <CardBody className="text-3xl flex-wrap h-full w-full flex flex-col justify-between items-center justify-items-center align-middle p-0" style={{ margin: "0", padding: "0", gap: "0" }}>
                                    <Image
                                        src={club.image}
                                        alt={club.name}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto', margin: "0" }}
                                    />
                                    <span className="text-center text-balance w-full py-1 px-3 text-2xl">
                            <div className="font-bold">
                                {club.name}
                            </div>
                        </span>
                                    <span className="text-balance w-full py-1 px-3 text-medium line-clamp-4">
                            {club.description}
                        </span>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}