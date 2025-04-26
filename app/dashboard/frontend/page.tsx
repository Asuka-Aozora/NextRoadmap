"use client"
import Banner from "@/components/Banner"
import { useEffect, useState } from "react";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Opinion from "@/components/Opinion";

interface DbMateri {
  id: number;
  category: string; 
  materi: string; 
  user_id?: number; 
  materi_id?: number;
}

export default function Frontend() {
  const [data, setData] = useState<DbMateri[]>([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/db_materi");
      if (!response.ok) throw new Error("Gagal mengambil data");

      const data: DbMateri[] = await response.json();
      console.log("Data diterima:", data); // Debugging
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  fetchData();
}, []);
  
const nodes = [
  {
    id: "1",
    type: "input",
    position: { x: 100, y: 100 },
    data: { label: "HTML dan CSS" },
  },
  {
    id: "2",
    type: "default",
    position: { x: 300, y: 100 },
    data: { label: "JavaScript" },
  },
  {
    id: "3",
    type: "default",
    position: { x: 100, y: 300 },
    data: { label: "TypeScript" },
  },
  {
    id: "4",
    type: "default",
    position: { x: 300, y: 300 },
    data: { label: "React" },
  },
  {
    id: "5",
    type: "output",
    position: { x: 500, y: 100 },
    data: { label: "Frontend" },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  // ... edges lainnya
];  
  
return (
  <>
    <Banner />
    <div className="flex items-center justify-center bg-gray-100 p-4 m-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 mr-4 bg-blue-500 rounded-full">
        <span className="text-2xl font-bold text-white">0%</span>
      </div>
      <h1 className="text-2xl font-semibold text-gray-700">
        0 of 115 Done
      </h1>
    </div>

    <Opinion/>

    {/* Roadmap Visualisasi */}
    <div className="h-[800px] w-full bg-gray-50 rounded-lg shadow-md">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        // Non-aktifkan semua interaksi
        nodesDraggable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        panOnScroll={false}
        zoomOnDoubleClick={false}
        // Set viewport awal
        defaultViewport={{ zoom: 1.5, x: 0, y: 0 }}
        // Styling tambahan
        className="react-flow"
      />
    </div>
  </>
);
};


