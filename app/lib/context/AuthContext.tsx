// AuthContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";

type User = {
  userId: string;
  username: string;
};

type AuthContextType = {
  user: User | null;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  logout: () => {},
  isLoading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fungsi untuk baca cookie sekali saja
  const getAuthData = () => {
    const userId = getCookie("x-user-id");
    const username = getCookie("x-username");
    return { userId, username };
  };

  useEffect(() => {
    const controller = new AbortController();

    const checkAuth = () => {
      try {
        const { userId, username } = getAuthData();

        if (userId && username) {
          setUser({
            userId: String(userId),
            username: String(username),
          });
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Auth check error:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial check
    checkAuth();

    // Event listener untuk perubahan cookie
    const interval = setInterval(checkAuth, 5000); // Check setiap 5 detik

    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, []);

  const logout = () => {
    // Hapus semua cookie terkait
    deleteCookie("authToken");
    deleteCookie("x-user-id");
    deleteCookie("x-username");

    // Reset state
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
