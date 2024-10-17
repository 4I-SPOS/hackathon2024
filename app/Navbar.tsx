"use client"

import Link from "next/link";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <NextUINavbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">Portál seniora</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={pathname === "/"}>
                    <Link href="/" className={pathname === "/" ? "active" : ""}>
                        Domov
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/activity"}>
                    <Link href="/activity" className={pathname === "/activity" ? "active" : ""}>
                        Aktivity
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={pathname === "/novinky"}>
                    <Link href="/novinky" className={pathname === "/novinky" ? "active" : ""}>
                        Novinky
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
}
