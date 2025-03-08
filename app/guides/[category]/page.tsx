import {Card} from "@heroui/react";
import {CardBody} from "@heroui/card";
import Image from 'next/image';
import {
    getAllCategoriesAndImages, getAllGuideNamesAndImages,
    getTopLevelCategories,
    readGuidesFile
} from "@/app/guides/guide";
import {GuideList} from "@/app/guides/[category]/guide_list";

const categories = getAllCategoriesAndImages();

export default async function Home({params}: { params: Promise<{ category: string }> })
{
    const { category } = await params;
    const guides = getAllGuideNamesAndImages(decodeURI(category));

    return(
        <div className="p-10">
            <div className="text-5xl font-bold text-center p-5">
                {decodeURI(category)}
            </div>
            <GuideList category={category} guides={guides} />
        </div>
    );
}