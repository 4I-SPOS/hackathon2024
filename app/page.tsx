"use client"

import { useEffect, useState, useRef } from "react";
import NewsCard from "./components/NewsCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import bgSrc from "@/app/assets/home_bg.jpg";
import scrollAnim from "@/app/assets/scroll.gif"; // Import the scroll animation GIF

interface NewsItem {
    title: string;
    description: string;
    imgSrc: string;
    link: string;
}

export default function Home() {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [showFixedDiv, setShowFixedDiv] = useState(false);
    const [activeSection, setActiveSection] = useState("Úvod");

    // Create refs for each section
    const uvodRef = useRef<HTMLDivElement>(null);
    const dotaznikRef = useRef<HTMLDivElement>(null);
    const novinkyRef = useRef<HTMLDivElement>(null);
    const svatekRef = useRef<HTMLDivElement>(null);
    const podniknoutRef = useRef<HTMLDivElement>(null);

    // Store refs in an object for easy access
    const sectionsRef: { [key: string]: React.RefObject<HTMLDivElement> } = {
        "Úvod": uvodRef,
        "Aktivitový dotazník": dotaznikRef,
        "Novinky": novinkyRef,
        "Kdo má svátek": svatekRef,
        "Co podniknout": podniknoutRef,
    };

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowFixedDiv(scrollY > 200); // Show fixed div only after scrolling past 200px

            // Determine the active section based on scroll position
            for (const section in sectionsRef) {
                const element = sectionsRef[section].current;
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if the element is in the viewport
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (section: string) => {
        const element = sectionsRef[section].current;
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="pb-10">
            {/* Show scroll animation GIF only at the top of the page */}
            {!showFixedDiv && (
                <div className="fixed bottom-5 right-10 flex flex-col items-center z-10">
                    <Image src={scrollAnim} alt="Scroll down" width={150} height={150} />
                </div>
            )}

            {/* Show fixed section selection after scrolling past 200px */}
            {showFixedDiv && (
                <div className="fixed bottom-5 right-5 flex flex-col items-center z-10">
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => scrollToSection("Úvod")}>
                        <div className={`text-xl ${activeSection === "Úvod" ? "text-black" : "text-neutral-300"}`}>Úvod</div>
                    </div>
                    <div className="h-5 w-0.5 bg-neutral-300 rounded-full"></div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => scrollToSection("Aktivitový dotazník")}>
                        <div className={`text-xl ${activeSection === "Aktivitový dotazník" ? "text-black" : "text-neutral-300"}`}>Aktivitový dotazník</div>
                    </div>
                    <div className="h-5 w-0.5 bg-neutral-300 rounded-full"></div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => scrollToSection("Novinky")}>
                        <div className={`text-xl ${activeSection === "Novinky" ? "text-black" : "text-neutral-300"}`}>Novinky</div>
                    </div>
                    <div className="h-5 w-0.5 bg-neutral-300 rounded-full"></div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => scrollToSection("Kdo má svátek")}>
                        <div className={`text-xl ${activeSection === "Kdo má svátek" ? "text-black" : "text-neutral-300"}`}>Kdo má svátek</div>
                    </div>
                    <div className="h-5 w-0.5 bg-neutral-300 rounded-full"></div>
                    <div className="flex gap-2 items-center cursor-pointer" onClick={() => scrollToSection("Co podniknout")}>
                        <div className={`text-xl ${activeSection === "Co podniknout" ? "text-black" : "text-neutral-300"}`}>Co podniknout</div>
                    </div>
                </div>
            )}

            <div ref={uvodRef} className="h-[70vh] overflow-hidden relative flex items-center">
                <div className="z-10 py-10 px-24 flex flex-col gap-5">
                    <h1 className="text-white text-5xl font-bold">Portál seniora</h1>
                    <p className="text-white w-1/3">Vítejte na webu pro seniory! Najdete zde novinky, tipy na výlety a aktivity. Díky našemu chytrému systému vám doporučíme obsah na míru podle vašich zájmů!</p>
                </div>
                <Image src={bgSrc} alt={""} className="absolute top-[-10rem]"></Image>
                <div className="absolute i-bg-gradient w-full h-full"></div>
            </div>

            <div ref={dotaznikRef}>
                <div className="flex items-center flex-col">
                    <div className="pb-32 pt-32 w-1/2 flex flex-col items-center gap-5">
                        <h1 className="font-bold text-5xl mt-2 text-center tracking-tight">Nevíte co podniknout?</h1>
                        <p className="text-center mt-2 text-neutral-500 text-xl w-3/5">
                            Vyplňte náš krátký dotazník a my vám na základě vašich odpovědí doporučíme aktivity, které vás budou nejvíce zajímat!
                        </p>
                        <Link href="/questionnaire" className="">
                            <Button className="bg-black text-white font-bold  scale-[1.2] mt-2 transition">Vyplnit dotazník</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div ref={novinkyRef} className="w-full px-64 pb-20">
                <div className="flex flex-col gap-14">
                    <h1 className="font-bold text-4xl text-center ">Zkoukňete co se v Česku děje</h1>
                    <div className="flex gap-6 ">
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
                    <div className="flex scale-[1.2] w-full justify-center">
                        <Button className="bg-black text-white font-bold inline">Načíst další</Button>
                    </div>
                </div>
            </div>

            <div ref={svatekRef} className="w-full flex py-10 flex-col items-center gap-20">
                <div className="text-5xl font-bold">Dnes má svátek Renata</div>
                <p className="text-2xl text-neutral-500 w-1/3 text-center">Pokud znáte nějakou renatu, popřejte ji všechno nejlepší k svátku. Určitě jí to udělá radost!</p>
            </div>

            <div ref={podniknoutRef} className="flex flex-col gap-20 w-full px-64 justify-center py-32">
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
        </div>
    );
}