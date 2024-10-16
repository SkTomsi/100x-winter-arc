"use client";
import BottomNavBar from "@/features/habits/components/bottom-nav-bar";
import TopBar from "@/features/habits/components/top-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative min-h-screen">
      <TopBar />
      {children}
      <BottomNavBar />
    </div>
  );
}
