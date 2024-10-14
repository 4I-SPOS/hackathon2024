"use client"

import {Card} from "@nextui-org/react";
import {CardBody} from "@nextui-org/card";
import {useState} from "react";

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
    name: string;
    id: Activities;
    score: number;
}
enum Activities
{
    Cyklistika,
    Turistika,
    Kluby
}
const allActivities: Activity[] = [
    { name: "Cyklistika", id: Activities.Cyklistika, score: 0 },
    { name: "Turistika", id: Activities.Turistika, score: 0 },
    { name: "Kluby", id: Activities.Kluby, score: 0 }
]

const questions: Question[] = [
    { question: "Radši trávíte čas", firstAnswer: { answer: "V přírodě", scores: [ { id: Activities.Cyklistika, score_increase: 1 } ] }, secondAnswer: { answer: "Vevnitř", scores: [ { id: Activities.Kluby, score_increase: 1 } ] } },
    { question: "Máte radši", firstAnswer: { answer: "Hory", scores: [ { id: Activities.Turistika, score_increase: 2 }, { id: Activities.Cyklistika, score_increase: 0.5 } ] }, secondAnswer: { answer: "Moře", scores: [ { id: Activities.Cyklistika, score_increase: 1 } ] } },
    { question: "Pijete rádi alkohol?", firstAnswer: { answer: "Ano", scores: [ { id: Activities.Kluby, score_increase: 2 } ] }, secondAnswer: { answer: "Ne", scores: [ ] } }
]

export default function Home()
{
    const [currentQuestionID, setCurrentQuestionID] = useState<number>(0);
    const [activities, setActivities] = useState<Activity[]>(allActivities);

    const GetRecommendedActivity = () =>
    {
        let recommendedActivities = activities.sort((a, b) => b.score - a.score);
        recommendedActivities = recommendedActivities.filter(a => a.score > 1.5); //tohle se pak bude delat dynamicky (nejlepsi match & -x score)
        setTimeout(() => //pouze pro debuggovani - zavolani alert normalne zablokuje thread a zastavovalo tak animace - to me stvalo
        {
            alert(recommendedActivities.map(a => `${a.name} - ${a.score}`).join(", "));
        }, 10);
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

    return(
        <div className="p-10 w-full h-full">
            <div className="w-full h-max flex flex-col items-center justify-center">
                <div className="text-5xl mb-8">
                    { questions[currentQuestionID].question }
                </div>
                <div className="m-4 gap-10 flex flex-row flex-wrap items-center justify-between h-full">
                    <div className="flex-auto h-80 w-80">
                        <Card className="h-full" isPressable={true} fullWidth={true} onPress={SubmitFirstAnswer}>
                            <CardBody className="text-3xl flex-wrap h-full w-full flex flex-row justify-center items-center align-middle">
                                <span className="flex-1 text-center text-balance w-full p-2">
                                    { questions[currentQuestionID].firstAnswer.answer }
                                </span>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="flex-auto h-80 w-80">
                        <Card className="h-full w-full" isPressable={true} fullWidth={true} onPress={SubmitSecondAnswer}>
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
    )
}