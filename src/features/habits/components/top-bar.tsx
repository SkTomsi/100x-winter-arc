import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
export default function TopBar() {
  const user = useUser();

  return (
    <div className="w-full h-[10vh] flex mt-2 p-5 justify-between items-center tracking-tighter">
      <div className="flex flex-col w-full gap-1">
        <p className="text-3xl font-bold">
          <span className="font-normal">Hey, </span>
          {user.user?.firstName}!
        </p>
        <p className="text-sm text-muted-foreground font-medium">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <UserButton />
    </div>
  );
}
