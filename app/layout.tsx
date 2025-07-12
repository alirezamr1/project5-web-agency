import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/Components/Home/Navbar/ResponsiveNav";

const font = Rajdhani({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "RexoDigital",
    description: "Web Development | Digital Marketing | SEO ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${font.className} antialiased`}>
                <ResponsiveNav />
                {children}
            </body>
        </html>
    );
}
