import { ModeToggle } from "@/components/providers/theme-toggle";

export default function TopBar() {
  return (
    <div className="w-full h-[10vh] flex flex-col py-3">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl font-bold">Your Arc</p>
        <div>
          <ModeToggle />
        </div>
      </div>
      <div>
        <p>Sat, 5th Oct</p>
      </div>
    </div>
  );
}
