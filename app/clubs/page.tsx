import {Card} from "@heroui/react";
import {CardBody} from "@heroui/card";

export default function Home()
{
    return(
        <div className="w-full flex flex-row p-10 items-center justify-center gap-5">
            <div className="flex-auto h-52 w-52">
                <Card className="h-full transition hover:scale-[1.02] hover:drop-shadow-xl" isPressable={true} fullWidth={true}>
                    <CardBody className="text-3xl flex-wrap h-full w-full flex flex-col justify-center items-center justify-items-center align-middle">
                        <span className="text-center text-balance w-full p-2">
                            zahradkari
                        </span>
                        <span className="text-center text-balance w-full p-2 text-medium">
                            popisek zahradkaru
                        </span>
                    </CardBody>
                </Card>
            </div>
            <div className="flex-auto h-52 w-52">
                <Card className="h-full transition hover:scale-[1.02] hover:drop-shadow-xl" isPressable={true} fullWidth={true}>
                    <CardBody className="text-3xl flex-wrap h-full w-full flex flex-col justify-center items-center justify-items-center align-middle">
                        <span className="text-center text-balance w-full p-2">
                            turisti
                        </span>
                        <span className="text-center text-balance w-full p-2 text-medium">
                            popisek turistu
                        </span>
                    </CardBody>
                </Card>
            </div>
            <div className="flex-auto h-52 w-52">
                <Card className="h-full transition hover:scale-[1.02] hover:drop-shadow-xl" isPressable={true} fullWidth={true}>
                    <CardBody className="text-3xl flex-wrap h-full w-full flex flex-col justify-center items-center justify-items-center align-middle">
                        <span className="text-center text-balance w-full p-2">
                            fotografove
                        </span>
                        <span className="text-center text-balance w-full p-2 text-medium">
                            popisek fotografu
                        </span>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}