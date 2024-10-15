import { Button, Checkbox, Input } from "@nextui-org/react";
import DatasetListItem from "./DatasetListItem";
import ActivityListItem from "./ActivityListItem";

export default function Activity() {
    return (
        <div className="p-10 flex gap-5 items-start top-32">
            <div className="p-5 w-1/5 rounded-xl outline outline-1 outline-neutral-200 bg-neutral-100">
                <h2 className="font-semibold text-lg">Seznam aktivit</h2>
                <p className="text-neutral-400 text-sm">Kliknutím vyberete aktivity, které vás zajímají.</p>
                <div className="mt-4 flex flex-col gap-3">
                    <DatasetListItem name="[dataset_name]" isChecked={false} />
                    <DatasetListItem name="[dataset_name]" isChecked={true} />
                    <DatasetListItem name="[dataset_name]" isChecked={false} />
                    <DatasetListItem name="[dataset_name]" isChecked={false} />
                    <DatasetListItem name="[dataset_name]" isChecked={false} />
                    <DatasetListItem name="[dataset_name]" isChecked={false} />
                    <DatasetListItem name="[dataset_name]" isChecked={false} />
                    <DatasetListItem name="[dataset_name]" isChecked={false} />
                    <DatasetListItem name="[dataset_name]" isChecked={false} />
                </div>
            </div>
            <div className="w-4/5 rounded-xl outline outline-1 outline-neutral-200 bg-neutral-100 flex flex-col p-5">
                <div className="w-full rounded-xl">
                    <div>
                        <input placeholder="Zadejte klíčové slovo" type="text" className="bg-white w-full outline outline-1 outline-neutral-300 border-none rounded-lg px-3 py-2" />
                    </div>
                </div>
                <div className="w-full h-px bg-neutral-300 my-5 "></div>
                <div className="w-full h-full grid grid-cols-4 gap-5">
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    <ActivityListItem />
                    
                </div>
            </div>
        </div>
    )
}