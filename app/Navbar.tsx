"use client"

import Link from "next/link";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { usePathname } from "next/navigation";
import {HomeIcon, NewspaperIcon, RocketLaunchIcon} from "@heroicons/react/24/solid";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <NextUINavbar>
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit">Portál seniora</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={pathname === "/"}>
                    <Link href="/" className={pathname === "/" ? "active" : ""}>
                        <span className="flex flex-row justify-items-center justify-center align-middle gap-1">
                            <HomeIcon className="size-6" />
                            Domov
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/activity"}>
                    <Link href="/activity" className={pathname === "/activity" ? "active" : ""}>
                        <span className="flex flex-row justify-items-center justify-center align-middle gap-1">
                            <RocketLaunchIcon className="size-6" />
                            Aktivity
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/news"}>
                    <Link href="/news" className={pathname === "/news" ? "active" : ""}>
                        <span className="flex flex-row justify-items-center justify-center align-middle gap-1">
                            <NewspaperIcon className="size-6" />
                            Novinky
                        </span>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
}
