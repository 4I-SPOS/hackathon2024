"use client";

import { useState } from "react";
import Image from "next/image";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import closeIconSrc from "@/app/assets/icons/close_b.png";
import globeIconSrc from "@/app/assets/icons/globe_b.png";
import wheelChairSrc from "@/app/assets/icons/wheelchair_b.png"
import { IArchitektonickaPamatka, ICyklovylety, IHrady, IKina, IKulturniDomy, ILazne, IMuzeaAGalerie, INarodniKulturniPamatky, IOstatniHistorickePamatky, IPamatkoveRezervace, IPamatkoveZony, IPivovary, IRozhlednyAVyhlidky, IRybareni, ISolneJeskyne, ITechnickePamatky, IValecneHrobyVeVlastnictviKraje, IZamky } from "../firebase";
import { Link } from "@heroui/react";

interface IActivityListItemProps {
    activity: IArchitektonickaPamatka | ICyklovylety | IHrady | IKina | IKulturniDomy | ILazne | IRozhlednyAVyhlidky | IMuzeaAGalerie | ISolneJeskyne | INarodniKulturniPamatky | IOstatniHistorickePamatky | IPamatkoveRezervace | IPamatkoveZony | ITechnickePamatky | IValecneHrobyVeVlastnictviKraje | IZamky | IPivovary | IRybareni;
    sada: string;
}

const defaultClass = "z-10 bg-white h-full w-full rounded-xl outline outline-1 outline-neutral-200 absolute p-5 flex flex-col";
const selectedClass = "box-border z-30 bg-white h-[80vh] w-2/3 rounded-xl outline outline-1 outline-neutral-200 fixed top-[50%] translate-y-[-50%] p-5 left-[50%] translate-x-[-50%]";

export default function ActivityListItem({ activity, sada }: IActivityListItemProps) {
    const [isSelected, setIsSelected] = useState(false);
    const [aktivita] = useState(activity);

    function handleClick() {
        setIsSelected(!isSelected);
        console.log(isSelected);
    }

    const defaultPosition: [number, number] = [
        parseFloat(aktivita?.zemepisna_sirka_v_souradnicovem_systemu_wgs84) || 50.0755, // Default lat (Prague)
        parseFloat(aktivita?.zemepisna_delka_v_souradnicovem_systemu_wgs84) || 14.4378  // Default lon (Prague)
    ];

    const markerIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png', // Update with the correct path to your custom marker if needed
        iconSize: [35, 35],
        iconAnchor: [12, 41]
    });

    if (isSelected) {
        return (
            <div className="h-64">
                <div className="h-64 relative cursor-pointer" onClick={handleClick}>
                    <div className={defaultClass}>
                        <div className="font-semibold">{aktivita?.nazev || "Bez názvu"}</div>
                        <div className="uppercase text-neutral-400 text-sm">{sada || ""}</div>
                    </div>
                </div>
                <div onClick={handleClick} className="z-20 fixed top-0 left-0 bg-black opacity-20 h-screen w-screen"></div>

                <div className={selectedClass} >
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold text-lg">{aktivita?.nazev || "No name available"}</h2>
                        <Image
                            onClick={handleClick}
                            src={closeIconSrc}
                            alt="Close"
                            className="h-6 w-6 cursor-pointer opacity-40 transition hover:scale-[1.15] hover:opacity-100"
                        />
                    </div>

                    <div className="w-full flex h-full ">
                        <div className="w-1/2">
                            <div className="uppercase text-neutral-400 text-sm mt-0">{sada || ""}</div>
                            <div className="flex items-center gap-2 mt-4">
                                <Image src={globeIconSrc} alt="" className="h-5 w-5 opacity-[27%]" />
                                <Link target="_blank" href={aktivita?.webove_stranky}>{aktivita?.webove_stranky}</Link>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <Image src={wheelChairSrc} alt="" className="h-5 w-5 opacity-[27%]" />
                                <div>{aktivita?.bezbarierovost ?? "Neznámo"}</div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <div className="font-semibold">Krátký popis</div>
                                <p>{aktivita?.popis}</p>
                            </div>
                        </div>
                        <div className="w-1/2 h-[80%] mt-10">
                            <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom={false} className="h-full w-full rounded-xl">
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={defaultPosition} icon={markerIcon}></Marker>
                            </MapContainer>
                        </div>
                    </div>


                </div>
            </div>
        );
    } else {
        return (
            <div className="h-64 relative cursor-pointer" onClick={handleClick}>
                <div className={defaultClass}>
                    <div className="font-semibold">{aktivita?.nazev || "Bez názvu"}</div>
                    <div className="uppercase text-neutral-400 text-sm">{sada || ""}</div>
                </div>
            </div>
        );
    }
}
