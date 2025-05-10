"use client";
import Banner from "@/app/components/Banner";
import "@xyflow/react/dist/style.css";
// import Opinion from "@/app/components/Opinion";
import Roadmap4 from "../../components/roadmap4/page";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/lib/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Backend() {
  const [doneCount, setDoneCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const router = useRouter();
  const { user, isLoading } = useAuth();

  // Additional protection for client-side
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isLoading && !user) {
        console.log("Final check - redirecting to login");
        router.replace("/login");
      }
    }, 500); // Tambahkan delay 500ms

    return () => clearTimeout(timeout);
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    console.log(user, "loading"); // Pindahkan log ke sini
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

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
      <Roadmap4 onProgressUpdate={handleProgressUpdate} />
    </>
  );
}
