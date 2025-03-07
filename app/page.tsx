"use client"

import { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import Link from "next/link";
import { Button } from "@heroui/react";
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
                <div className="z-10 py-10 px-24 flex flex-col gap-5">
                    <h1 className="text-white text-5xl font-bold">Portál seniora</h1>
                    <p className="text-white w-1/3">Vítejte na webu pro seniory! Najdete zde novinky, tipy na výlety a aktivity. Díky našemu chytrému systému vám doporučíme obsah na míru podle vašich zájmů!</p>
                </div>
                <Image src={bgSrc} alt={""} className="absolute top-[-10rem]"></Image>
                <div className="absolute i-bg-gradient w-full h-full"></div>
            </div>

            <div className="">
                <div className="flex items-center flex-col">
                    <div className="py-32 w-1/2 flex flex-col items-center gap-5">
                        <h1 className="font-bold text-5xl mt-2 text-center tracking-tight">Nevíte co podniknout?</h1>
                        <p className="text-center mt-2 text-neutral-500 text-xl w-3/5">
                            Vyplňte náš krátký dotazník a my vám na základě vašich odpovědí doporučíme aktivity, které vás budou nejvíce zajímat!
                        </p>
                        <Link href="/questionnaire" className="">
                            <Button className="bg-black text-white font-bold text-xl scale-[1.2] mt-2 transition">Vyplnit dotazník</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/*<div>
                <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-4xl text-center ">Zkoukňete co se v Česku děje</h1>
                    <div className="flex gap-6 mt-7 px-10">
                        {/*{newsItems.map((item, index) => (
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
            </div>*/}

            <div className="w-full flex flex-col items-center gap-20">
                <div className="text-5xl font-bold">Dnes má svátek Renata</div>
                <p className="text-2xl text-neutral-500 w-1/3 text-center">Pokud znáte nějakou renatu, popřejte ji všechno nejlepší k svátku. Určitě jí to udělá radost!</p>
            </div>

            <div className="flex flex-col gap-20 w-full px-64 justify-center py-32">
                <div className="flex gap-20 w-full items-center">
                    <div className="aspect-[5/4] object-cover w-1/2">
                        <img className="w-full h-full object-cover rounded-3xl" src="https://framerusercontent.com/images/fFHvR1sKpo43RphL06TaHqm5Wk.jpg" alt="Example" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-5">
                        <div className="text-5xl font-bold leading-[1.3]">Dnes je <br />slunečno</div>
                        <p className="text-2xl text-neutral-500">Ideální počasí na to podniknout <br /> nějaký výlet. Zkuste využít náš <br /> plánovač výletů!</p>
                        <div className="flex gap-4">
                            <Button className="bg-black text-white font-bold">Zkusit plánovač výletů</Button>
                            <Button className="font-bold">Jak plánovač výletů funguje?</Button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-20 w-full items-center">
                    <div className="w-1/2 flex flex-col gap-5">
                        <div className="text-5xl font-bold leading-[1.3]">Zkoukněte místa <br /> kam se podívat</div>
                        <p className="text-2xl text-neutral-500">Ideální počasí na to podniknout <br /> nějaký výlet. Zkuste využít náš <br /> plánovač výletů!</p>
                        <div className="flex gap-4">
                            <Button className="bg-black text-white font-bold">Přejít na plánovač výletů</Button>
                            <Button className="font-bold">Vyzkoušet formulář</Button>
                        </div>
                    </div>
                    <div className="aspect-[5/4] object-cover w-1/2">
                        <img className="w-full h-full object-cover rounded-3xl" src="https://framerusercontent.com/images/sW3Zei6qn9qGDgANPQA1VsXc4CE.webp?scale-down-to=1024" alt="Example" />
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
