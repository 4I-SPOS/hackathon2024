import * as fs from 'fs';
import * as path from 'path';

export interface GuideContent {
    [key: string]: string;
}

export interface Guide {
    image: string;
    content: GuideContent[];
}

export interface GuideCategory {
    image: string;
    guides: { [guideName: string]: Guide }[];
}

export interface GuideData {
    [category: string]: GuideCategory;
}

export function readGuidesFile(): GuideData {
    //const filePath = path.resolve(__dirname, 'guides.json');
    const filePath = path.join('app/guides/guides.json');

    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading or parsing the guides file:', error);
        return {};
    }
}

export function getTopLevelCategories(): string[] {
    const data = readGuidesFile();

    return Object.keys(data);
}

export function getCategoryImage(category: string): string | null {
    const data = readGuidesFile();

    if (data[category]) {
        return data[category].image;
    }
    return null;
}

export function getGuideImage(category: string, guideName: string): string | null {
    const data = readGuidesFile();

    if (data[category] && data[category].guides.length > 0) {
        const categoryData = data[category].guides[0];
        if (categoryData[guideName]) {
            return categoryData[guideName].image;
        }
    }
    return null;
}

export function getGuideNames(category: string): string[] {
    const data = readGuidesFile();

    if (data[category] && data[category].guides.length > 0) {
        const categoryData = data[category].guides[0];
        return Object.keys(categoryData);
    }
    return [];
}

export function getGuideContent(category: string, guideName: string): GuideContent[] | null {
    const data = readGuidesFile();

    if (data[category] && data[category].guides.length > 0) {
        const categoryData = data[category].guides[0];
        if (categoryData[guideName]) {
            return categoryData[guideName].content;
        }
    }
    return null;
}

export function getAllCategoriesAndImages(): { name: string, image: string }[] {
    const data = readGuidesFile();
    const categories: { name: string, image: string }[] = [];

    for (const categoryName in data) {
        if (data.hasOwnProperty(categoryName)) {
            categories.push({
                name: categoryName,
                image: data[categoryName].image
            });
        }
    }

    return categories;
}

export function getAllGuideNamesAndImages(category: string): { name: string, image: string }[] {
    const data = readGuidesFile();
    const guides: { name: string, image: string }[] = [];

    if (data[category] && data[category].guides.length > 0) {
        const categoryData = data[category].guides[0];

        for (const guideName in categoryData) {
            if (categoryData.hasOwnProperty(guideName)) {
                const guide = categoryData[guideName];
                guides.push({
                    name: guideName,
                    image: guide.image
                });
            }
        }
    }

    return guides;
}