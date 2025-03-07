import {getGuideContent} from "@/app/guides/guide";
import {notFound} from "next/navigation";

function parseTextToHTML(text: string): string {
    // Check if the text contains the bullet point '·      '
    if (text.includes('·      ')) {
        // Split the text by the bullet points and remove any empty parts
        const items = text.split('·      ').filter(item => item.trim() !== '');

        // Start the unordered list
        let htmlOutput = '<ul>';

        // Loop through the items and create <li> for each one
        items.forEach(item => {
            htmlOutput += `<li style="display: list-item; list-style-type: circle;">${item.trim()}</li>`;
        });

        // Close the unordered list
        htmlOutput += '</ul>';

        return htmlOutput;
    } else {
        // Return the original text if no bullet points are detected
        return text;
    }
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
                    <div key={index} className="p-2">
                        {Object.entries(contentItem).map(([key, value], idx) => (
                            <div key={idx}>
                                { key.length > 1 && <div className="text-2xl">{key}</div> }
                                <span dangerouslySetInnerHTML={{ __html: parseTextToHTML(value) }}></span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}