"use client"

import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {Card, CardFooter, Checkbox, Image} from "@heroui/react";
import Link from "next/link";

interface NewsItem {
    title: string;
    description: string;
    imgSrc: string;
    link: string;
    date: Date;
}

const NEWS_PER_SECTION = 6;
const NEWS_DEFAULT_COUNT = 6;

enum NewsCategory
{
    Obecne,
    Sport,
    Fotbal,
    Hokej,
    Ekonomika,
    Kultura
}
async function GetNews(from: number, to: number, category: NewsCategory): Promise<NewsItem[]>
{
    let rssFeed = "";
    switch (category)
    {
        case NewsCategory.Obecne:
            rssFeed = "https://servis.idnes.cz/rss.aspx?c=zpravodaj";
            break;
        case NewsCategory.Sport:
            rssFeed = "https://servis.idnes.cz/rss.aspx?c=sport";
            break;
        case NewsCategory.Fotbal:
            rssFeed = "https://servis.idnes.cz/rss.aspx?c=fotbalh";
            break;
        case NewsCategory.Hokej:
            rssFeed = "https://servis.idnes.cz/rss.aspx?c=hokejh";
            break;
        case NewsCategory.Ekonomika:
            rssFeed = "https://servis.idnes.cz/rss.aspx?c=ekonomikah";
            break;
        case NewsCategory.Kultura:
            rssFeed = "https://servis.idnes.cz/rss.aspx?c=kultura";
            break;
    }
    const response = await fetch(rssFeed);
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");

    const items = xml.querySelectorAll("item");
    const newsArray: NewsItem[] = [];

    for (let i = from; i < to; i++)
    {
        if (!items || !items[i])
            continue;

        const title = items[i].querySelector("title")?.textContent || "Bez nadpisu";
        const description = items[i].querySelector("description")?.textContent || "Bez popisu";
        const mediaContent = items[i].getElementsByTagName("media:content")[0];
        const imgSrc = mediaContent?.getAttribute("url") || "https://via.placeholder.com/150";
        const link = items[i].querySelector("link")?.textContent || "";
        const date = new Date(items[i].querySelector("pubDate")?.textContent || "");

        newsArray.push({ title, description, imgSrc, link, date });
    }

    return newsArray;
}


function FilterItem({ name, checked, setChecked }: { name: string; checked: boolean, setChecked: Dispatch<SetStateAction<boolean>> }) {
    //const [checked, setChecked] = useState(isChecked);

    const handleDivClick = () => {
        setChecked(!checked);
    };

    return (
        <div
            onClick={handleDivClick}
            className="bg-white cursor-pointer flex justify-between outline outline-1 outline-neutral-300 rounded-lg pl-3 pr-1 py-2"
        >
            <p>{name}</p>
            <Checkbox isSelected={checked} className="pointer-events-none" />
        </div>
    );
}

function mergeNewsItems(arr1: NewsItem[], arr2: NewsItem[]): NewsItem[] {
    const mergedArray: NewsItem[] = [...arr1];

    arr2.forEach(item => {
        const isDuplicate = mergedArray.some(mergedItem => mergedItem.title === item.title);
        if (!isDuplicate) {
            mergedArray.push(item);
        }
    });

    return mergedArray;
}

type ActivityFilter =
{
    type: NewsCategory;
    active: boolean;
};
export default function Home()
{
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [newsCount, setNewsCount] = useState(NEWS_DEFAULT_COUNT);
    const {ref, inView} = useInView({threshold: 0});

    const [filterObecne, setFilterObecne] = useState<boolean>(true);
    const [filterSport, setFilterSport] = useState<boolean>(false);
    const [filterFotbal, setFilterFotbal] = useState<boolean>(false);
    const [filterHokej, setFilterHokej] = useState<boolean>(false);
    const [filterEkonomika, setFilterEkonomika] = useState<boolean>(false);
    const [filterKultura, setFilterKultura] = useState<boolean>(false);

    const filterList: ActivityFilter[] = [{type: NewsCategory.Obecne, active: filterObecne},
        {type: NewsCategory.Sport, active: filterSport},
        {type: NewsCategory.Fotbal, active: filterFotbal},
        {type: NewsCategory.Hokej, active: filterHokej},
        {type: NewsCategory.Ekonomika, active: filterEkonomika},
        {type: NewsCategory.Kultura, active: filterKultura}];

    // TODO: zjistit jestli je opravdu potreba nebo jestli je to naschval
    /* eslint-disable react-hooks/exhaustive-deps */
    const fetchNews = useCallback(() => {
        async function fetchRSS() {
            try {
                let news: NewsItem[] = [];
                for (const f of filterList)
                {
                    if (!f.active)
                        continue;

                    const fetchedNews = await GetNews(0, newsCount, f.type);
                    //news = combineArrays(news, fetchedNews);
                    news = mergeNewsItems(news, fetchedNews);
                }
                setNewsCount(newsCount + NEWS_PER_SECTION);
                console.log(news.sort(function(a, b) { return b.date.getTime() - a.date.getTime(); }));
                setNewsItems(news.sort(function(a, b) { return b.date.getTime() - a.date.getTime(); }));
            } catch (error) {
                console.error("Error fetching RSS feed", error);
            }
        }

        fetchRSS();
    }, [newsItems, newsCount, filterList]);
    /* eslint-enable react-hooks/exhaustive-deps */

    // TODO: zjistit jestli opravdu chybi nebo jestli je to naschval
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        fetchNews();
    }, [filterObecne, filterSport, filterFotbal, filterHokej, filterEkonomika, filterKultura]);
    /* eslint-enable react-hooks/exhaustive-deps */

    // TODO: zjistit jestli opravdu chybi nebo jestli je to naschval
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() =>
    {
        if (inView)
            fetchNews();
    }, [inView]);
    /* eslint-enable react-hooks/exhaustive-deps */

    return (
        <div className="w-full flex flex-row p-10 items-center justify-center">
            <div className="left-10 top-[6.5rem] p-5 rounded-xl outline outline-1 absolute outline-neutral-200 bg-neutral-100">
                <h2 className="font-bold text-4xl">Seznam zpráv</h2>
                <p className="text-neutral-400 text-sm">Kliknutím vyberete zprávy, které vás zajímají.</p>
                <div className="mt-4 flex flex-col gap-3">
                    <FilterItem name="Obecné" checked={filterObecne} setChecked={setFilterObecne} />
                    <FilterItem name="Sport" checked={filterSport} setChecked={setFilterSport} />
                    <FilterItem name="Fotbal" checked={filterFotbal} setChecked={setFilterFotbal} />
                    <FilterItem name="Hokej" checked={filterHokej} setChecked={setFilterHokej} />
                    <FilterItem name="Ekonomika" checked={filterEkonomika} setChecked={setFilterEkonomika} />
                    <FilterItem name="Kultura" checked={filterKultura} setChecked={setFilterKultura} />
                </div>
            </div>
            <div className="flex gap-6 px-10 flex-col items-center justify-center justify-items-start">
                {
                    newsItems.map((item) => (
                        <div key={item.link} className="w-2/5">
                            <Link className="transition hover:scale-[1.02]" href={item.link} target="_blank" rel="noopener noreferrer" passHref>
                                <Card style={{ cursor: 'pointer' }}>
                                    <div className="flex flex-row items-center justify-items-center justify-center">
                                        <Image src={item.imgSrc} className="aspect-video object-cover" alt={item.title} />
                                    </div>
                                    <CardFooter className="flex flex-col items-start text-black">
                                        <h2 className="font-bold text-lg">{item.title}</h2>
                                        <h2 className="font-light text-medium">{item.date.toLocaleDateString("cs-CZ") + " - " + item.date.toLocaleTimeString("cs-CZ")}</h2>
                                        <p className="mt-3 text-neutral-500 line-clamp-5">{item.description}</p>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div ref={ref} className="h-1 w-1"></div>
        </div>
    )
}