"use client";

import { useState } from "react";
import ActivityListItem from "./ActivityListItem";
import DatasetListItem from "./DatasetListItem";
import { useSearchParams } from 'next/navigation'

interface ActivityDatasetsProps {
    datoveSady: Array<{ name: string; data: any[] }>;
}

enum Activities {
    Cyklistika, //1 - cyklovylety
    Turistika, //2 - rozhledny_a_vyhlidky
    Kultura, //3 - kina, kulturni_domy, muzea_a_galerie
    Wellness, //4 - lazne, solne_jeskyne
    Pamatky, //5 - architektonicke_pamatky, hrady, muzea_a_galerie, narodni_kulturni_pamatky, ostatni_historicke_pamatky, pamatkove_rezervy, pamatkove_zony, technicke_pamatky, valecne_hroby_?, zamky
    Pivovary, //6 - pivovary
    Rybareni //7 - rybareni
}

export default function ActivityDatasets({ datoveSady }: ActivityDatasetsProps) {
    const [selectedDatasets, setSelectedDatasets] = useState<string[]>([]);
    const [searchTerm] = useState<string>("");
    const [parsedSearch, setParsedSearch] = useState<boolean>(false);
    const searchParams = useSearchParams()

    const search = searchParams.get('sady')

    const setDatasetToggle = (datasetName: string) => {
        setSelectedDatasets((prev) =>
            [...prev, datasetName]
        );
    }

    setSadyFromUrl();
    function setSadyFromUrl() {
        if (parsedSearch || search === "" || search === null)
            return;

        const arr = search.split(",")
        arr.forEach(x => {
            const num = parseInt(x);
            switch (num) {
                case Activities.Cyklistika:
                    setDatasetToggle("Cyklovýlety");
                    break;
                case Activities.Turistika:
                    setDatasetToggle("Rozhledny a vyhlídky");
                    break;
                case Activities.Kultura:
                    setDatasetToggle("Kina");
                    setDatasetToggle("Kulturní domy");
                    setDatasetToggle("Muzea a galerie");
                    break;
                case Activities.Wellness:
                    setDatasetToggle("Lázně");
                    setDatasetToggle("Solné jeskyně");
                    break;
                case Activities.Pamatky:
                    setDatasetToggle("Architektonické památky");
                    setDatasetToggle("Hrady");
                    setDatasetToggle("Muzea a galerie");
                    setDatasetToggle("Národní kulturní památky");
                    setDatasetToggle("Ostatní historické památky");
                    setDatasetToggle("Památkové rezervace");
                    setDatasetToggle("Památkové zóny");
                    setDatasetToggle("Technické památky");
                    setDatasetToggle("Válečné hroby");
                    setDatasetToggle("Zámky");
                    break;
                case Activities.Pivovary:
                    setDatasetToggle("Pivovary");
                    break;
                case Activities.Rybareni:
                    setDatasetToggle("Rybaření");
                    break;
            }
        });

        setParsedSearch(true);
    }



    const handleDatasetToggle = (datasetName: string) => {
        setSelectedDatasets((prev) =>
            prev.includes(datasetName)
                ? prev.filter((name) => name !== datasetName)
                : [...prev, datasetName]
        );
    };

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredData = datoveSady.filter((sada) => {
        const isSelected =
            selectedDatasets.length === 0 || selectedDatasets.includes(sada.name);
        const matchesSearch =
            sada.name.toLowerCase().includes(searchTerm) ||
            (sada.data || []).some((item) =>
                JSON.stringify(item.nazev).toLowerCase().includes(searchTerm)
            );
        return isSelected && matchesSearch;
    });

    return (
        <div className="p-10 flex gap-5 items-start top-32">
            <div className="p-5 w-1/5 rounded-xl outline outline-1 outline-neutral-200 bg-neutral-100">
                <h2 className="font-semibold text-lg">Seznam aktivit</h2>
                <p className="text-neutral-400 text-sm">
                    Kliknutím vyberete aktivity, které vás zajímají.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                    {datoveSady.map((item) => (
                        <DatasetListItem
                            key={item.name}
                            name={item.name}
                            isChecked={selectedDatasets.includes(item.name)}
                            onClick={() => handleDatasetToggle(item.name)}
                        />
                    ))}
                </div>
            </div>

            <div className="w-4/5 rounded-xl outline outline-1 outline-neutral-200 bg-neutral-100 flex flex-col p-5">
                <div className="w-full rounded-xl">
                    <input
                        placeholder="Zadejte klíčové slovo"
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                        className="bg-white w-full outline outline-1 outline-neutral-300 border-none rounded-lg px-3 py-2"
                    />
                </div>
                <div className="w-full h-px bg-neutral-300 my-5"></div>

                <div className="w-full h-full grid grid-cols-4 gap-5">
                    {filteredData.map((sada, index) =>
                        (sada.data || []).map((item, index2) => (
                            <div key={index.toString() + "_" + index2.toString()}>
                                <ActivityListItem activity={item} sada={sada.name} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}