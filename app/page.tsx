"use client"

import { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import ActivityCard from "./components/ActivityCard";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import bgSrc from "@/app/assets/home_bg.jpg";

interface NewsItem {
    title: string;
    description: string;
    imgSrc: string;
    link: string;
}

export default function Home() {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

    useEffect(() => {
        async function fetchRSS() {
            try {
                const response = await fetch("https://servis.idnes.cz/rss.aspx?c=zpravodaj");
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, "application/xml");

                const items = xml.querySelectorAll("item");
                const newsArray: NewsItem[] = [];

                for (let i = 0; i < 3; i++) { // Get first three items
                    const title = items[i].querySelector("title")?.textContent || "Bez nadpisu";
                    const description = items[i].querySelector("description")?.textContent || "Bez popisu";
                    const mediaContent = items[i].getElementsByTagName("media:content")[0];
                    const imgSrc = mediaContent?.getAttribute("url") || "https://via.placeholder.com/150";
                    const link = items[i].querySelector("link")?.textContent || "";

                    newsArray.push({ title, description, imgSrc, link });
                }

                setNewsItems(newsArray);
            } catch (error) {
                console.error("Error fetching RSS feed", error);
            }
        }

        fetchRSS();
    }, []);

    return (
        <div className="pb-10">
            <div className="h-[70vh] overflow-hidden relative flex items-center">
                <div className="z-10 p-10">
                    <h1 className="text-white text-3xl font-bold">Portál seniora</h1>
                    <p className="text-white w-1/3">Vítejte na webu pro seniory! Najdete zde novinky, tipy na výlety a aktivity. Díky našemu chytrému systému vám doporučíme obsah na míru podle vašich zájmů!</p>
                </div>
                <Image src={bgSrc} alt={""} className="absolute top-[-10rem]"></Image>
                <div className="absolute i-bg-gradient w-full h-full"></div>
            </div>

            <div className="px-10 py-7">
                <div className="flex items-center flex-col">
                    <div className="py-7 w-1/2 flex flex-col items-center">
                        <h1 className="font-bold text-2xl mt-2 text-center">Nevíte co podniknout? Vykoušejte náš chytrý dotazník!</h1>
                        <p className="text-center mt-2">
                            Vyplňte náš krátký dotazník a my vám na základě vašich odpovědí doporučíme aktivity, které vás budou nejvíce zajímat!
                        </p>
                        <Link href="/questionnaire" className="">
                            <Button className="bg-neutral-300 mt-2 hover:bg-blue-700 hover:text-white transition">Vyplnit dotazník</Button>
                        </Link>
                    </div>
                </div>

            </div>
            <div>
                <div className="bg-neutral-100 py-7">
                    <h1 className="font-bold text-2xl text-center ">Zkoukňete co se v Česku děje</h1>
                    <div className="flex gap-6 mt-7 px-10">
                        {newsItems.map((item, index) => (
                            <NewsCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                imgSrc={item.imgSrc}
                                link={item.link} // Pass the link here
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* <h1 className="font-bold text-2xl w-full">Portál seniora</h1>
            <p className="w-full ">Vítejte na Portálu Seniora! Jsme tu, abychom vás informovali o nejnovějších událostech a aktivitách, které obohatí váš volný čas a přinesou do vašeho života radost a inspiraci. Na našem webu najdete aktuální novinky z oblasti kultury, vzdělávání a volnočasových činností, které jsou šité na míru seniorům. Od výtvarných dílen a tanečních kurzů po společenské akce a výlety – u nás si každý najde něco, co ho zaujme. Připojte se k naší komunitě, sdílejte své zážitky a objevte nové příležitosti k setkání s přáteli. S námi můžete žít aktivně a naplno!</p>
            <h1 className="font-bold text-2xl w-full mt-6">Co dělat?</h1>
            <p>Pokud nevíte, co byste podnikli, klikněte na tlačítko níže a vypňte formulář, ten vám doporučí aktivity založené na vašich preferencích.</p>
            <Link href="/questionnaire">
                <Button className="bg-neutral-300 mt-2">Dotazník</Button>
            </Link>

            <h1 className="font-bold text-2xl mt-6">Nejnovější aktuality</h1>
            <div className="flex gap-6 mt-2">
                {newsItems.map((item, index) => (
                    <NewsCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        imgSrc={item.imgSrc}
                        link={item.link} // Pass the link here
                    />
                ))}
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold">Na co máte náladu?</h2>
                <div className="mt-4 flex gap-6">
                    <ActivityCard title="Cyklistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" />
                    <ActivityCard title="Turistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" />
                    <ActivityCard title="Kluby" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" />
                    <ActivityCard title="Cyklistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" />
                    <ActivityCard title="Cyklistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" />
                    <ActivityCard title="Cyklistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" />
                </div>
            </div> */}
        </div>
    );
}
