"use client"

import {Card} from "@nextui-org/react";
import {CardBody} from "@nextui-org/card";
import {useState} from "react";

type Question =
{
    question: string;
    firstAnswer: string;
    secondAnswer: string;
};

const questions: Question[] = [
    { question: "Radši trávíte volný čas", firstAnswer: "V přírodě", secondAnswer: "Doma" },
    { question: "Máte radši", firstAnswer: "Kafe", secondAnswer: "Čaj" },
    { question: "Dlouhááááááááááááááááááááááááááááááá otázka", firstAnswer: "Dlouhááááááááááááááááááááááááá odpověď", secondAnswer: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }
]

export default function Home()
{
    const [currentQuestionID, setCurrentQuestionID] = useState<number>(0);

    const GetRecommendedActivity = () =>
    {
        alert("difhidbgidsf");
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

    return(
        <div className="p-10 w-full h-full">
            <div className="w-full h-max flex flex-col items-center justify-center">
                <div>
                    { questions[currentQuestionID].question }
                </div>
                <div className="m-4 gap-10 flex flex-row flex-wrap items-center justify-between h-full">
                    <div className="flex-auto h-full">
                        <Card className="h-full" isPressable={true} fullWidth={true} onPress={NextQuestion}>
                            <CardBody className="h-full">
                                { questions[currentQuestionID].firstAnswer }
                            </CardBody>
                        </Card>
                    </div>
                    <div className="flex-auto h-full">
                        <Card className="h-full" isPressable={true} fullWidth={true} onPress={NextQuestion}>
                            <CardBody className="h-full">
                                { questions[currentQuestionID].secondAnswer }
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}