"use client"

import { useState } from "react";
import Image from "next/image";
import closeIconSrc from "@/app/assets/icons/close_b.png"

interface IActivityListItemProps {
}

const defaultClass = "z-10 bg-white h-full w-full rounded-xl outline outline-1 outline-neutral-200 absolute p-5";
const selectedClass = "z-30 bg-white h-[80vh] w-2/3 rounded-xl outline outline-1 outline-neutral-200 fixed top-[6.5rem] p-5 left-[50%] translate-x-[-50%]";

export default function ActivityListItem({ }: IActivityListItemProps) {
    const [isSelected, setIsSelected] = useState(false);

    function handleClick() {
        setIsSelected(!isSelected);
        console.log(isSelected)
    }

    if (isSelected) {
        return (
            <div className="h-64">
                <div className="h-64 relative cursor-pointer" onClick={handleClick}>
                    <div className={defaultClass}>
                        lorem <br></br>
                        ipsum
                    </div>
                </div>
                <div onClick={handleClick} className="z-20 fixed top-0 left-0 bg-black opacity-20 h-screen w-screen"></div>
                <div className={selectedClass}>
                    <div className="flex justify-between items-center">
                        <h2>Nazev</h2>
                        <Image onClick={handleClick} src={closeIconSrc} alt="" className="h-6 w-6 cursor-pointer opacity-40 transition hover:scale-[1.15] hover:opacity-100" />
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="h-64 relative cursor-pointer" onClick={handleClick}>
                <div className={defaultClass}>
                    lorem <br></br>
                    ipsum
                </div>
            </div>
        );
    }
}