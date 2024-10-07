import NewsCard from "./components/NewsCard";
import ActivityCard from "./components/ActivityCard";

export default function Home() {
    return (
        <div className="p-10">
            <div className="flex gap-6">
                <NewsCard title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec ipsum massa, ullamcorper in." imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></NewsCard>
                <NewsCard title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec ipsum massa, ullamcorper in." imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></NewsCard>
                <NewsCard title="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec ipsum massa, ullamcorper in." imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></NewsCard>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold">Na co máte náladu?</h2>
                <div className="mt-4 flex gap-6">
                    <ActivityCard title="Cyklistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></ActivityCard>
                    <ActivityCard title="Turistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></ActivityCard>
                    <ActivityCard title="Kluby" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></ActivityCard>
                    <ActivityCard title="Cyklistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></ActivityCard>
                    <ActivityCard title="Cyklistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></ActivityCard>
                    <ActivityCard title="Cyklistika" imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></ActivityCard>
                </div>
            </div>
        </div>
    );
}
