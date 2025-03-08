import {Card} from "@heroui/react";
import {CardBody} from "@heroui/card";
import Image from 'next/image';
import {
    getAllCategoriesAndImages,
    getTopLevelCategories,
    readGuidesFile
} from "@/app/guides/guide";
import {CategoryList} from "@/app/guides/category_list";

const categories = getAllCategoriesAndImages();

export default function Home()
{
    return(
        <div className="p-10">
            <div className="flex flex-row justify-center items-center justify-items-center align-middle text-5xl font-bold">
                Návody
            </div>
            <CategoryList categories={categories} />
        </div>
    );
}