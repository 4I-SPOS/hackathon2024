"use client"

import {Card} from "@nextui-org/react";
import {CardBody} from "@nextui-org/card";
import {useState} from "react";
import {redirect} from "next/navigation";

type Question =
{
    question: string;
    firstAnswer: Answer;
    secondAnswer: Answer;
};
type AnswerScore =
{
    id: Activities;
    score_increase: number;
}
type Answer =
{
    answer: string;
    scores: AnswerScore[];
};

type Activity =
{
    id: Activities;
    score: number;
}
enum Activities
{
    Cyklistika, //cyklovylety
    Turistika, //rozhledny_a_vyhlidky
    Kultura, //kina, kulturni_domy, muzea_a_galerie
    Wellness, //lazne, solne_jeskyne
    Pamatky, //architektonicke_pamatky, hrady, muzea_a_galerie, narodni_kulturni_pamatky, ostatni_historicke_pamatky, pamatkove_rezervy, pamatkove_zony, technicke_pamatky, valecne_hroby_?, zamky
    Pivovary, //pivovary
    Rybareni //rybareni
}
const allActivities: Activity[] = [
    { id: Activities.Cyklistika, score: 0 },
    { id: Activities.Turistika, score: 0 },
    { id: Activities.Kultura, score: 0 },
    { id: Activities.Wellness, score: 0 },
    { id: Activities.Pamatky, score: 0 },
    { id: Activities.Pivovary, score: 0 },
    { id: Activities.Rybareni, score: 0 }
]

/*function determineActivityByID(activity: Activities): string
{
    switch (activity)
    {
        case Activities.Cyklistika:
            return "Cyklistika";
        case Activities.Turistika:
            return "Turistika";
        case Activities.Kultura:
            return "Kultura";
        case Activities.Wellness:
            return "Wellness";
        case Activities.Pamatky:
            return "Památky";
        case Activities.Pivovary:
            return "Pivovary";
        case Activities.Rybareni:
            return "Rybaření";
    }
}*/

const questions: Question[] = [
    { question: "Preferujete aktivní pohyb nebo relaxaci?",
        firstAnswer: { answer: "Aktivní pohyb", scores:
                [
                    { id: Activities.Cyklistika, score_increase: 1 },
                    { id: Activities.Turistika, score_increase: 1 }
                ]},
        secondAnswer: { answer: "Relaxaci", scores:
                [
                    { id: Activities.Kultura, score_increase: 0.5 },
                    { id: Activities.Wellness, score_increase: 1 },
                    { id: Activities.Pivovary, score_increase: 1 },
                    { id: Activities.Rybareni, score_increase: 1 }
                ]}
    },
    { question: "Raději trávíte čas venku v přírodě nebo uvnitř?",
        firstAnswer: { answer: "Venku v přírodě", scores:
                [
                    { id: Activities.Turistika, score_increase: 1 },
                    { id: Activities.Cyklistika, score_increase: 1 },
                    { id: Activities.Rybareni, score_increase: 1 }
                ] },
        secondAnswer: { answer: "Uvnitř", scores:
                [
                    { id: Activities.Kultura, score_increase: 1 },
                    { id: Activities.Wellness, score_increase: 1 }
                ] } },
    { question: "Chcete si odpočinout a pečovat o své tělo, nebo zažít něco nového a poznávat okolí?",
        firstAnswer: { answer: "Odpočinout a pečovat o své tělo", scores:
                [
                    { id: Activities.Wellness, score_increase: 1 }
                ] },
        secondAnswer: { answer: "Zažít něco nového a poznávat okolí", scores:
                [
                    { id: Activities.Kultura, score_increase: 1 },
                    { id: Activities.Turistika, score_increase: 1 },
                ] } },
    { question: "Chtěli byste se dozvědět více o historii a kultuře, nebo dáváte přednost pobytu v přírodě?",
        firstAnswer: { answer: "Historii a kultuře", scores:
                [
                    { id: Activities.Kultura, score_increase: 1 },
                ] },
        secondAnswer: { answer: "Pobytu v přírodě", scores:
                [
                    { id: Activities.Turistika, score_increase: 1 },
                    { id: Activities.Cyklistika, score_increase: 1 },
                    { id: Activities.Rybareni, score_increase: 1 }
                ] } },
    { question: "Představujete si ideální den jako strávený v sauně a na masáži, nebo spíše na horské stezce?",
        firstAnswer: { answer: "V sauně a na masáži", scores:
                [
                    { id: Activities.Wellness, score_increase: 1 }
                ] },
        secondAnswer: { answer: "Na horské stezce", scores:
                [
                    { id: Activities.Turistika, score_increase: 1 },
                    { id: Activities.Cyklistika, score_increase: 0.5 }
                ] } },
    { question: "Ochutnáváte rádi nové pivo?",
        firstAnswer: { answer: "Ano", scores:
                [
                    { id: Activities.Pivovary, score_increase: 2 }
                ] },
        secondAnswer: { answer: "Ne", scores:
                [
                ] } },
]

/*type ActivityCard =
{
    title: string;
    image: string;
    description: string;
    link: string;
}
function GetActivityCard(activity: Activities) : ActivityCard[]
{
    switch (activity)
    {
        case Activities.Cyklistika:
            return [
                    { title: "Cyklovýlety", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" }
                ];
        case Activities.Turistika:
            return [
                { title: "Rozhledny a vyhlídky", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" }
            ];
        case Activities.Kultura:
            return [
                { title: "Kina", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Kulturní domy", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Muzea a galerie", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" }
            ];
        case Activities.Wellness:
            return [
                { title: "Lázně", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Solné jeskyně", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" }
            ];
        case Activities.Pamatky:
            return [
                { title: "Architektonické památky", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Hrady", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Muzea a galerie", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Národní kulturní památky", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Ostatní historické památky", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Památkové rezervy", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Technické památky", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Válečné hroby ve vlastnictví kraje", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" },
                { title: "Zámky", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",  description: "/", link: "/" }
            ];
        case Activities.Pivovary:
            return [
                { title: "Pivovary", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true", description: "/", link: "/" }
            ];
        case Activities.Rybareni:
            return [
                { title: "Rybaření", image: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true", description: "/", link: "/" }
            ];
    }
}*/

export default function Home()
{
    const [currentQuestionID, setCurrentQuestionID] = useState<number>(0);
    const [activities, setActivities] = useState<Activity[]>(allActivities);
    const [answeredAll, setAnsweredAll] = useState<boolean>(false);
    const [recommendedActivities, setRecommendedActivities] = useState<Activity[]>([]);

    const GetRecommendedActivity = () =>
    {
        setRecommendedActivities(activities.sort((a, b) => b.score - a.score).filter(a => a.score > 1.5)); //tohle se pak bude delat dynamicky (nejlepsi match & -x score)
        setAnsweredAll(true);
    }
    const NextQuestion = () =>
    {
        if (currentQuestionID == questions.length - 1)
        {
            GetRecommendedActivity();
            return;
        }

        setCurrentQuestionID(currentQuestionID + 1);
    }

    const SubmitAnswer = (scores: AnswerScore[]) =>
    {
        for (const s of scores)
        {
            const a = activities;
            const activityIdx = a.findIndex(x => x.id == s.id);
            if (!(activityIdx != -1 && a.at(activityIdx) != undefined))
                continue;

            a[activityIdx].score += s.score_increase;
            setActivities(a);
        }
    }
    const SubmitFirstAnswer = () =>
    {
        const scores = questions[currentQuestionID].firstAnswer.scores;
        SubmitAnswer(scores);
        NextQuestion();
    }
    const SubmitSecondAnswer = () =>
    {
        const scores = questions[currentQuestionID].secondAnswer.scores;
        SubmitAnswer(scores);
        NextQuestion();
    }

    if (!answeredAll)
    {
        return(
            <div className="p-10 w-full h-[90vh]">
                <div className="w-full h-full flex flex-col items-center justify-start">
                    <div className="text-5xl mb-8 flex flex-row justify-center justify-items-center">
                        { questions[currentQuestionID].question }
                    </div>
                    <div className="h-full flex flex-col justify-center align-middle items-center">
                        <div className="m-auto gap-10 flex flex-row flex-wrap items-center justify-between h-full">
                            <div className="flex-auto h-80 w-80">
                                <Card className="h-full transition hover:scale-[1.02] hover:drop-shadow-xl" isPressable={true} fullWidth={true} onPress={SubmitFirstAnswer}>
                                    <CardBody className="text-3xl flex-wrap h-full w-full flex flex-row justify-center items-center align-middle">
                                        <span className="flex-1 text-center text-balance w-full p-2">
                                            { questions[currentQuestionID].firstAnswer.answer }
                                        </span>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="flex-auto h-80 w-80">
                                <Card className="h-full w-full transition hover:scale-[1.02] hover:drop-shadow-xl" isPressable={true} fullWidth={true} onPress={SubmitSecondAnswer}>
                                    <CardBody className="text-3xl flex-wrap h-full w-full flex flex-row justify-center items-center align-middle">
                                        <span className="flex-1 text-center text-balance w-full p-2">
                                            { questions[currentQuestionID].secondAnswer.answer }
                                        </span>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else
    {
        const datasets = recommendedActivities.map(item => item.id).join(",");
        redirect("/activity?sady=" + datasets);
    }
}