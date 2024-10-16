import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Providers } from "./providers";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portál seniora",
    description: "Portál seniora",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className="light">
            <body className={inter.className + " overflow-x-hidden"}>
                <Navbar>
                    <NavbarBrand>
                        <p className="font-bold text-inherit">Portál seniora</p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4" justify="center">
                        <NavbarItem isActive>
                            <Link color="foreground" href="#">
                                Domov
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href="#" aria-current="page">
                                Aktivity
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Novinky
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
