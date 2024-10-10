"use client";
import BottomNavBar from "@/features/home-screen/components/bottom-nav-bar";
import TopBar from "@/features/home-screen/components/top-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full relative min-h-screen">
      <TopBar />
      {children}
      <BottomNavBar />
    </div>
  );
}
