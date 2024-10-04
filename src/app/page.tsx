import { IMAGES } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col relative items-center justify-between h-screen py-10">
      <div className="w-full text-2xl text-center text-primary-foreground font-extrabold top-0 px-10 mt-20">
        Pov: you are about to start the greatest character development arc of
        your life.(this time its serious)
      </div>
      <Link href="/my-streak" className="">
        <Button
          className="rounded-full bg-white font-bold text-primary-foreground"
          size={"lg"}
        >
          Start your winter arc now!
        </Button>
      </Link>
      <div className="h-screen overflow-hidden w-full [mask-image:linear-gradient(to_bottom,black_85%,transparent)] absolute -z-10 top-0">
        <Image
          src={IMAGES.splashScreen}
          alt="splash screen"
          className="h-full object-cover object-bottom"
        />
      </div>
    </div>
  );
}
