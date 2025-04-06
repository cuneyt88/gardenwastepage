"use client"
import Footer from "@/components/EntityComponents/Footer";
import SelectSkipRegion from "@/components/RegionComponents/SelectSkipRegion";


export default function Home() {

  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start mb-5">
        {/* This page contains the created skip selection screen and the component below it that enables the return or continue operation. */}
        <SelectSkipRegion/>
        <Footer/>
      </main>
    </div>
  );
}
