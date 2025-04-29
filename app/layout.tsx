import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/app/lib/context/AuthContext";

export const metadata: Metadata = {
  title: "Roadmap With NEXT",
  description: "Roadmap with Next is a simple app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
