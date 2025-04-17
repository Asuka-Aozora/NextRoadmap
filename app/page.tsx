"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface DbMateri {
  id: number;
  username: string;
  category: string;
  materi_id: number;
  user_id: number;
  materi: string;
}

export default function Home() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Response = await fetch("/api/db_materi");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    
    <div className="flex flex-col items-center p-4 space-y-4">
      {data?.map((item: DbMateri) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg w-full">
          <p className="text-lg font-bold">Id: {item.id}</p>
          <p className="text-lg">user: {item.user_id}</p>
          <p className="text-lg">Materi: {item.materi_id}</p>
        </div>
      ))}
    </div>
  );
}
