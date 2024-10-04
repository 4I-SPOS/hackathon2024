import { Card, CardBody, CardFooter } from "@nextui-org/react";
import NewsCard from "./components/NewsCard";

export default function Home() {
    return (
        <div className="flex gap-6 p-10">
            <NewsCard imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></NewsCard>
            <NewsCard imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></NewsCard>
            <NewsCard imgSrc="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"></NewsCard>
        </div>
    );
}
