"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import closeIconSrc from "@/app/assets/icons/close_b.png";
import globeIconSrc from "@/app/assets/icons/globe_b.png";
import wheelChairSrc from "@/app/assets/icons/wheelchair_b.png";
import { IArchitektonickaPamatka, ICyklovylety, IHrady, IKina, IKulturniDomy, ILazne, IMuzeaAGalerie, INarodniKulturniPamatky, IOstatniHistorickePamatky, IPamatkoveRezervace, IPamatkoveZony, IPivovary, IRozhlednyAVyhlidky, IRybareni, ISolneJeskyne, ITechnickePamatky, IValecneHrobyVeVlastnictviKraje, IZamky } from "../firebase";
import { Link } from "@heroui/react";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

interface IActivityListItemProps {
  activity: IArchitektonickaPamatka | ICyklovylety | IHrady | IKina | IKulturniDomy | ILazne | IRozhlednyAVyhlidky | IMuzeaAGalerie | ISolneJeskyne | INarodniKulturniPamatky | IOstatniHistorickePamatky | IPamatkoveRezervace | IPamatkoveZony | ITechnickePamatky | IValecneHrobyVeVlastnictviKraje | IZamky | IPivovary | IRybareni;
  sada: string;
  img: string;
  isTop3: boolean;
}

const defaultClass = "z-10 bg-white h-full w-full rounded-xl outline outline-1 outline-neutral-200 absolute p-5 flex flex-col ";
const selectedClass = "box-border z-30 bg-white h-[80vh] w-2/3 rounded-xl outline outline-1 outline-neutral-200 fixed top-[50%] translate-y-[-50%] p-5 left-[50%] translate-x-[-50%]";

// Separate component for the map to isolate logic
function ActivityMap({ position }: { position: [number, number] }) {
  const mapRef = useRef<L.Map | null>(null); // Ref to track the map instance
  const mapContainerRef = useRef<HTMLDivElement | null>(null); // Ref to track the map container DOM element

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Initialize the map only if it hasn't been initialized yet
      mapRef.current = L.map(mapContainerRef.current, {
        center: position,
        zoom: 13,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      const markerIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/25/25613.png",
        iconSize: [35, 35],
        iconAnchor: [12, 41],
      });

      L.marker(position, { icon: markerIcon }).addTo(mapRef.current);

      console.log("Map initialized");
    }

    return () => {
      // Clean up the map instance when the component unmounts or position changes
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        console.log("Map cleanup");
      }
    };
  }, [position]);

  return <div ref={mapContainerRef} className="h-full w-full rounded-xl" />;
}

export default function ActivityListItem({ activity, sada, img, isTop3 }: IActivityListItemProps) {
  const [isSelected, setIsSelected] = useState(false);

  const defaultPosition: [number, number] = [
    parseFloat(activity?.zemepisna_sirka_v_souradnicovem_systemu_wgs84) || 50.0755, // Default lat (Prague)
    parseFloat(activity?.zemepisna_delka_v_souradnicovem_systemu_wgs84) || 14.4378, // Default lon (Prague)
  ];

  function handleClick() {
    setIsSelected(!isSelected);
  }

  if (isSelected) {
    return (
        <div className="h-64">
            <div className="h-64 relative cursor-pointer" onClick={handleClick}>
                <div className={defaultClass}>
                    <div className="font-semibold">{activity?.nazev || "Bez názvu"}</div>
                    <div className="uppercase text-neutral-400 text-sm">{sada || ""}</div>
                    <img
                        className="w-full h-full absolute top-0 left-0"
                        src={img}
                        alt={activity?.nazev}
                    />
                </div>
            </div>

            <div
                onClick={handleClick}
                className="z-20 fixed top-0 left-0 bg-black opacity-20 h-screen w-screen"
            ></div>

            <div className={selectedClass}>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-3xl">
                        {activity?.nazev || "No name available"}
                    </h2>
                    <Image
                        onClick={handleClick}
                        src={closeIconSrc}
                        alt="Close"
                        className="h-6 w-6 cursor-pointer opacity-40 transition hover:scale-[1.15] hover:opacity-100"
                    />
                </div>

                <div className="w-full flex justify-center h-full">
                    <div className="w-1/2">
                        <div className="uppercase text-neutral-400 text-sm mt-0">
                            {sada || ""}
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <Image
                                src={globeIconSrc}
                                alt=""
                                className="h-5 w-5 opacity-[27%]"
                            />
                            <div>Web: </div>
                            <Link target="_blank" href={activity?.webove_stranky} className="line-clamp-1">
                                {activity?.webove_stranky}
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <Image
                                src={wheelChairSrc}
                                alt=""
                                className="h-5 w-5 opacity-[27%]"
                            />
                            <div>Bezbarierovost: </div>
                            <div>{activity?.bezbarierovost ?? "Neznámo"}</div>
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="font-semibold">Krátký popis</div>
                            <p>{activity?.popis}</p>
                        </div>
                    </div>  

                    <div className="w-1/2 h-[80%] mt-10">
                        <ActivityMap position={defaultPosition} />
                    </div>
                </div>
            </div>
        </div>
    );
  } else {
    return (
      <div className="h-64 relative cursor-pointer" onClick={handleClick}>
        <div className={defaultClass} style={{ overflow: "hidden" }}>
          {isTop3 ? (
            <>
              <div className="font-semibold z-30 text-white">{activity?.nazev || "Bez názvu"}</div>
              <div className="uppercase text-neutral-200 text-sm z-30">{sada || ""}</div>
            </>
          ) : (
            <>
              <div className="font-semibold z-30 text-black">{activity?.nazev || "Bez názvu"}</div>
              <div className="uppercase text-neutral-500 text-sm z-30">{sada || ""}</div>
            </>
          )}
          {isTop3 && (
            <>
              <div className="z-20 w-full h-full absolute top-0 left-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 100%)" }}></div>
              <img className="w-full h-full absolute top-0 left-0 z-10 object-cover" src={img} alt={activity?.nazev} />
            </>
          )}
        </div>
      </div>
    );
  }
}