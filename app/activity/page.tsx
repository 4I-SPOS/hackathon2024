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
        { name: "Architektonické památky", data: getArchitektonickePamatky(), img: "https://www.regiontourist.cz/media/cache/what_to_do_list_thumb_big/uploads/what_to_do/2070/valdstejnska-zahrada-valdstejnsky-palac-vitvit-cc-by-sa-4-optimized-0.jpg.webp" },
        { name: "Cyklovýlety", data: getCyklovylety(), img: "https://upload.bikeplan.cz/public/uploads/2021/11/06/b5545ba526/10%20tip%C5%AF,%20jak%20vybrat%20j%C3%ADzdn%C3%AD%20kolo%20pro%20seniory.jpg" },
        { name: "Hrady", data: getHrady(), img: "https://www.hrad-krivoklat.cz/pamatky/krivoklat/fotogalerie/kam-na-vylety/image-thumb__16142__OgTagImage/karlstejn.webp" },
        { name: "Kina", data: getKina(), img: "https://www.kinosvetozor.cz/images/default-blogpost-kino-svetozor.jpg?v=1640093589" },
        { name: "Kulturní domy", data: getKulturniDomy(), img: "https://praha10.cz/LinkClick.aspx?fileticket=NMH8JFZ9zpc%3D&tabid=3871&portalid=0" },
        { name: "Lázně", data: getLazne(), img: "https://www.wellnesstour.cz/wp-content/uploads/Lazne-Belohrad-Tree-of-Life-01-1.jpg" },
        { name: "Rozhledny a vyhlídky", data: getRozhlednyAVyhlidky(), img: "https://cdn.kudyznudy.cz/files/93/93759a57-7e6c-4888-b2a7-59ed6a0a3fea.jpg?v=20241211172152" },
        { name: "Muzea a galerie", data: getMuzeaAGalerie(), img: "https://cdn.kudyznudy.cz/files/14/141741b8-e7d9-4b2b-9395-4a2191f46eb4.jpg?v=20241010075805" },
        { name: "Solné jeskyně", data: getSolneJeskyne(), img: "https://www.spa.cz/spacz/images/procedures/Soln%C3%A1%20jeskyn%C4%9B.jpg" },
        { name: "Národní kulturní památky", data: getNarodniKulturniPamatky(), img: "https://cdn.kudyznudy.cz/files/1d/1d8e98df-e5dd-4817-9e98-6b0eca54e41a.webp?v=20240217044929" },
        { name: "Ostatní historické památky", data: getOstatniHistorickePamatky(), img: "https://cdn.kudyznudy.cz/files/28/28ac503f-b58b-4dad-a458-a0ed736d78ff.webp?v=20221001143530" },
        { name: "Památkové rezervace", data: getPamatkoveRezervace(), img: "https://lh4.googleusercontent.com/proxy/2kKyY6EnRHbtnaXPigy6sig2j24UMk4YEBh344EAlo7OnfuqcCFj0WO4sF_HfHqnbUpl891E5d-dwmdYDDz2jQDou3M2gDijkpUhuRdeWcR05kIJtc3qGigPsZP9XcSXGYBGBuIbvgn5naWNKw" },
        { name: "Památkové zóny", data: getPamatkoveZony(), img: "https://d34-a.sdn.cz/d_34/c_B_C/Dfvf84.jpeg?fl=res,400,225,3" },
        { name: "Technické památky", data: getTechnickePamatky(), img: "https://www.drobnepamatky.cz/files/b/technicka-pamatka-107290-2.jpg" },
        { name: "Válečné hroby", data: getValecneHrobyVeVlastnictviKraje(), img: "https://www.razova.cz/data/editor/160cs_2_big.jpg?gcm_date=1497268451" },
        { name: "Zámky", data: getZamky(), img: "https://www.firmanazazitky.cz/obrazek/zamek-lednice-63ecfeb8caeee.jpg" },
        { name: "Pivovary", data: getPivovary(), img: "https://www.cerny-orel.eu/gallery/1/882_1140x570.jpeg" },
        { name: "Rybaření", data: getRybareni(), img: "https://as2.ftcdn.net/jpg/02/88/86/15/1000_F_288861572_HpLKm2MWv6LPZRRkeBXgX02i69iQaLCh.jpg" }
    ];

    return <DatasetsWrapper datoveSady={datoveSady} />;
}
