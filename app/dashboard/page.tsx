"use client";

import { useAuth } from "@/lib/context/AuthContext";

export default function Dashboard() {
  const {user, logout} = useAuth();


  if (!user) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Notification Banner */}
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-lg shadow-md mb-8">
        <p className="text-white text-sm font-medium">
          👋 Selamat datang, <span className="font-bold">{user.username}</span>!
        </p>
        <div className="flex items-center justify-end">
          <p className="text-white text-xs mt-1 mr-4">
            Anda login sebagai <span className="uppercase">{user.username}</span>
          </p>
          <button onClick={logout} className="bg-white px-4 py-2 rounded-md shadow-sm text-sm font-medium text-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Logout
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Progress Pencapaian</h2>
        {/* Tampilkan data dari db_pencapaian berdasarkan user.id */}
      </div>
    </div>
  );
}

