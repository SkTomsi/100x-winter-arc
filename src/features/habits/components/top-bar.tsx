import { UserButton } from "@clerk/nextjs";

export default function TopBar() {
  return (
    <div className="w-full h-[10vh] flex py-3 px-4 justify-between items-center">
      <div className="flex flex-col w-full">
        <p className="text-2xl font-bold">My Arc</p>
        <p>Sat, 5th Oct</p>
      </div>
      <UserButton />
    </div>
  );
}
