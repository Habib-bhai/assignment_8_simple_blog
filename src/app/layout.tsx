import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";
import { SearchProvider } from "./contexts/searchContext";
import SearchResults from "@/components/searchResults/SearchResult";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FlexiBlog",
  description: "assignment 8 a simple blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >

      <SearchProvider>
        <Header />
        <SearchResults />
        {children}
        <Footer /> 
      </SearchProvider>
      </body>
    </html>
  );
}
