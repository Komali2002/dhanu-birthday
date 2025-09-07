"use client";
import ScrapbookPhoto from "../components/ScrapbookPhoto";
import Navbar from "../components/Navbar";

export default function Scrapbook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-rose-100">
      <Navbar />
      <h1 className="text-center text-3xl font-bold py-8 text-rose-600">
        📒 Our Scrapbook (2017 - 2025)
      </h1>

      <div className="flex flex-col items-center gap-6">
        <ScrapbookPhoto src="/photos/2017.jpeg" year="2017" />
        <ScrapbookPhoto src="/photos/2018.jpeg" year="2018" />
        <ScrapbookPhoto src="/photos/2019.jpeg" year="2019" />
        <ScrapbookPhoto src="/photos/2020.jpeg" year="2020" />
        <ScrapbookPhoto src="/photos/2021.jpeg" year="2021" />
        <ScrapbookPhoto src="/photos/2022.jpeg" year="2022" />
        <ScrapbookPhoto src="/photos/2023.jpeg" year="2023" />
        <ScrapbookPhoto src="/photos/2024.jpeg" year="2024" />
        <ScrapbookPhoto src="/photos/2025.jpeg" year="2025" />
      </div>
    </div>
  );
}
