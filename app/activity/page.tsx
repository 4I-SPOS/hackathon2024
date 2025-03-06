import {
    getArchitektonickePamatky, getCyklovylety, getHrady, getKina,
    getKulturniDomy, getLazne, getMuzeaAGalerie, getNarodniKulturniPamatky,
    getOstatniHistorickePamatky, getPamatkoveRezervace, getPamatkoveZony,
    getPivovary, getRozhlednyAVyhlidky, getRybareni, getSolneJeskyne,
    getTechnickePamatky, getValecneHrobyVeVlastnictviKraje, getZamky
} from "../fallback-db";
import DatasetsWrapper from "@/app/activity/DatasetsWrapper";

export default function Activity() {
    const datoveSady = [
        { name: "Architektonické památky", data: getArchitektonickePamatky() },
        { name: "Cyklovýlety", data: getCyklovylety() },
        { name: "Hrady", data: getHrady() },
        { name: "Kina", data: getKina() },
        { name: "Kulturní domy", data: getKulturniDomy() },
        { name: "Lázně", data: getLazne() },
        { name: "Rozhledny a vyhlídky", data: getRozhlednyAVyhlidky() },
        { name: "Muzea a galerie", data: getMuzeaAGalerie() },
        { name: "Solné jeskyně", data: getSolneJeskyne() },
        { name: "Národní kulturní památky", data: getNarodniKulturniPamatky() },
        { name: "Ostatní historické památky", data: getOstatniHistorickePamatky() },
        { name: "Památkové rezervace", data: getPamatkoveRezervace() },
        { name: "Památkové zóny", data: getPamatkoveZony() },
        { name: "Technické památky", data: getTechnickePamatky() },
        { name: "Válečné hroby", data: getValecneHrobyVeVlastnictviKraje() },
        { name: "Zámky", data: getZamky() },
        { name: "Pivovary", data: getPivovary() },
        { name: "Rybaření", data: getRybareni() }
    ];

    return <DatasetsWrapper datoveSady={datoveSady} />;
}
