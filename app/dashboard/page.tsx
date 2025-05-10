"use client";

import { useAuth } from "@/app/lib/context/AuthContext";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { user, logout, isLoading } = useAuth();

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

  return (
    <div className="p-6">
      {/* Notification Banner */}
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg shadow-md mb-8">
        <div className="flex items-center">
          <p className="text-white text-sm font-medium">
            👋 Selamat datang,{" "}
            <span className="font-bold">{user.username}</span>!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white text-xs bg-blue-600 px-2 py-1 rounded">
            ID: {user.userId}
          </span>
          <button
            onClick={logout}
            className="bg-white px-4 py-2 rounded-md shadow-sm text-sm font-medium text-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Progress Pencapaian
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-gray-700">
              Frontend Development
            </h3>
            <button
              onClick={() => router.push("/dashboard/frontend")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Lanjutkan Belajar →
            </button>
          </div>

          {/* Tambahan card untuk fitur lainnya */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-3 text-gray-700">
              Backend Development
            </h3>
            <button
              onClick={() => router.push("/dashboard/backend")}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Lanjutkan Belajar →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
