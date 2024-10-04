"use client";
import BottomNavBar from "@/features/home-screen/components/bottom-nav-bar";
import TopBar from "@/features/home-screen/components/top-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden relative px-5">
      <TopBar />
      {children}
      <BottomNavBar />
    </div>
  );
}
