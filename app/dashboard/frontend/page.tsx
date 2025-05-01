"use client";
import Banner from "@/app/components/Banner";
import "@xyflow/react/dist/style.css";
// import Opinion from "@/app/components/Opinion";
import Roadmap3 from "../../components/roadmap3/page";
import { useState } from "react";

export default function Frontend() {
  const [doneCount, setDoneCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // Callback untuk menerima data dari Roadmap3
  const handleProgressUpdate = (done: number, total: number) => {
    setDoneCount(done);
    setTotalCount(total);
  };

  const percentage =
    totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);

  return (
    <>
      <Banner />
      <div className="flex items-center justify-center bg-gray-100 p-4 m-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-500 rounded-full">
          <span className="text-2xl font-bold text-white">{percentage}%</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-700">
          {doneCount} of {totalCount} Done
        </h1>
      </div>

      {/* Roadmap Visualisasi */}
      <Roadmap3 onProgressUpdate={handleProgressUpdate} />
    </>
  );
}
