import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";


export const metadata: Metadata = {
  title: "Portfolio-Mahsa Najafi",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
