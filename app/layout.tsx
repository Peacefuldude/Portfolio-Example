import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Khadem Portfolio",
    description: "Portfolio of a developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
