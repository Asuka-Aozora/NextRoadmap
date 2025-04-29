"use client";
import Banner from "@/app/components/Banner";
import "@xyflow/react/dist/style.css";
// import Opinion from "@/app/components/Opinion";
import Roadmap3 from "../../components/roadmap3/page";



export default function Frontend() {
  

  return (
    <>
      <Banner />
      <div className="flex items-center justify-center bg-gray-100 p-4 m-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-500 rounded-full">
          <span className="text-2xl font-bold text-white">0%</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-700">0 of 115 Done</h1>
      </div>


      {/* Roadmap Visualisasi */}
      <Roadmap3/>
    </>
  );
}
