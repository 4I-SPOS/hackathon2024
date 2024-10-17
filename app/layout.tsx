import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Navbar from "./Navbar"; // Importujeme novou komponentu Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portál seniora",
    description: "Portál seniora",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className="light">
            <body className={inter.className + " overflow-x-hidden"}>
                <Navbar />
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
