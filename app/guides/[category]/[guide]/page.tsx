import {getGuideContent} from "@/app/guides/guide";
import {notFound} from "next/navigation";

function parseTextToHTML(text: string): string {
    let out = text;

    if (out.includes('·      ')) {
        const items = out.split('·      ').filter(item => item.trim() !== '');
        let htmlOutput = '<ul>';
        items.forEach(item => {
            htmlOutput += `<li style="display: list-item; list-style-type: disc; list-style-position: inside;">${item.trim()}</li>`;
        });
        htmlOutput += '</ul>';
        out = htmlOutput;
    }

    out = out.replace(/\[\[([^\]]+)\]\]/g, (match, imageName) => {
        return `<img style="display: block; margin-left: auto; margin-right: auto; width: 750px" src="/media/guides/guides/guide_content/${imageName}" alt="${imageName}">`;
    });

    out = out.replace(/\(\(([^\)]+)\)\)/g, (match, text) => {
        return `<span style="color: gray;">${text}</span>`;
    });

    return out;
}


export default async function Home({params}: { params: Promise<{ category: string, guide: string }> })
{
    const { category } = await params;
    const { guide } = await params;

    const guideContent = getGuideContent(decodeURI(category), decodeURI(guide));

    if (!guideContent)
        return notFound();

    return(
        <div className="p-10">
            <div className="text-5xl font-bold text-center p-5">
                {decodeURI(guide)}
            </div>
            <div className="mx-48">
                {guideContent?.map((contentItem, index) => (
                    <div key={index} className="p-2 text-2xl">
                        {Object.entries(contentItem).map(([key, value], idx) => (
                            <div key={idx}>
                                { key.length > 1 && <div className="text-2xl font-bold">{key}</div> }
                                <span dangerouslySetInnerHTML={{ __html: parseTextToHTML(value) }}></span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}