"use client"

import { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import ActivityCard from "./components/ActivityCard";
import Link from "next/link";
import { Button } from "@nextui-org/react";

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
        <div className="p-10">
            <h1 className="font-bold text-2xl w-full">Portál seniora</h1>
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
            </div>
        </div>
    );
}
