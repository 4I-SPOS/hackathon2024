"use client"

import Link from "next/link";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { usePathname } from "next/navigation";
import {AcademicCapIcon, HomeIcon, NewspaperIcon, RocketLaunchIcon, UserGroupIcon} from "@heroicons/react/24/outline";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <NextUINavbar maxWidth={"xl"}>
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit">Portál seniora</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={pathname === "/"}>
                    <Link href="/" className={pathname === "/" ? "active" : ""}>
                        <span className="flex flex-row justify-items-center justify-center align-middle gap-1 items-center">
                            <HomeIcon className="size-5" />
                            Domov
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/activity"}>
                    <Link href="/activity" className={pathname === "/activity" ? "active" : ""}>
                        <span className="flex flex-row justify-items-center justify-center align-middle gap-1 items-center">
                            <RocketLaunchIcon className="size-5" />
                            Aktivity
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/guides"}>
                    <Link href="/guides" className={pathname === "/guides" ? "active" : ""}>
                        <span className="flex flex-row justify-items-center justify-center align-middle gap-1 items-center">
                            <AcademicCapIcon className="size-5" />
                            Návody
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/clubs"}>
                    <Link href="/clubs" className={pathname === "/clubs" ? "active" : ""}>
                        <span className="flex flex-row justify-items-center justify-center align-middle gap-1 items-center">
                            <UserGroupIcon className="size-5" />
                            Kluby
                        </span>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/news"}>
                    <Link href="/news" className={pathname === "/news" ? "active" : ""}>
                        <span className="flex flex-row justify-items-center justify-center align-middle gap-1 items-center">
                            <NewspaperIcon className="size-5" />
                            Novinky
                        </span>
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
}
