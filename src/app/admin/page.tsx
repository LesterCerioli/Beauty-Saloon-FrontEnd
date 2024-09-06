"use client";
import { NextPage } from "next";
import ThemeManager from "@/app/components/Themes/ThemeManager";
import ThemePreview from "@/app/components/Themes/ThemePreview";

const Admin: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center py-8 bg-pink-500 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="w-full flex flex-col items-center gap-4">
        <ThemeManager />
        <ThemePreview />
      </div>
    </main>
  );
};

export default Admin;